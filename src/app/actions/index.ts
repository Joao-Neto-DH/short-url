"use server";

import Services from "@/services";
import { Link } from "../../../prisma/generated/client";
import { isValidUrl } from "@/lib/utils";

export type Result = {
  isError: boolean;
  isSuccess: boolean;
  currentData?: Pick<Link, "palavra_chave" | "expiracao" | "descricao" | "url">;
  result?: Link | Link[];
  error?: string;
};

export async function gerarLink(prev: Result, form: FormData) {
  const object = Object.fromEntries(form);

  const data = {
    url: object.url.toString(),
    descricao: object.descricao.toString(),
    palavra_chave: object["palavra-chave"].toString(),
    expiracao: object.validade?.toString(),
  };

  if (!isValidUrl(data.url)) {
    const result: Result = {
      currentData: {
        ...data,
        expiracao: data.expiracao ? new Date(data.expiracao) : null,
      },
      isError: true,
      isSuccess: false,
      error: "URL inválida",
    };
    return result;
  }

  const services = new Services();

  try {
    const datas = await services.listarLinks({
      palavra_chave: data.palavra_chave,
    });
    if (datas.length !== 0) {
      const result: Result = {
        currentData: {
          ...data,
          expiracao: data.expiracao ? new Date(data.expiracao) : null,
        },
        isError: true,
        isSuccess: false,
        error: "Palavra-chave não está disponível",
      };
      return result;
    }

    const result = await services.gerarLink({
      ...data,
      expiracao: data.expiracao ? new Date(data.expiracao) : null,
    });

    const resultSuccess: Result = {
      isError: false,
      isSuccess: true,
      result: result,
    };
    return resultSuccess;
  } catch (error) {}

  const result: Result = {
    currentData: {
      ...data,
      expiracao: data.expiracao ? new Date(data.expiracao) : null,
    },
    isError: true,
    isSuccess: false,
    error: "Erro desconhecido",
  };
  return result;
}

export async function actualizarLink(prev: Result, form: FormData) {
  const object = Object.fromEntries(form);

  const data = {
    id: object.id,
    url: object.url.toString(),
    descricao: object.descricao.toString(),
    palavra_chave: object["palavra-chave"].toString(),
    expiracao: object.validade?.toString(),
  };

  if (!isValidUrl(data.url)) {
    const result: Result = {
      currentData: {
        ...data,
        expiracao: data.expiracao ? new Date(data.expiracao) : null,
      },
      isError: true,
      isSuccess: false,
      error: "URL inválida",
    };
    return result;
  }

  const services = new Services();

  try {
    const datas = await services.listarLinks({
      palavra_chave: data.palavra_chave,
    });
    if (datas.length !== 0 && datas[0].id !== Number(data.id)) {
      const result: Result = {
        currentData: {
          ...data,
          expiracao: data.expiracao ? new Date(data.expiracao) : null,
        },
        isError: true,
        isSuccess: false,
        error: "Palavra-chave não está disponível",
      };
      return result;
    }

    const result = await services.actualizarLink(Number(data.id), {
      ...data,
      expiracao: data.expiracao ? new Date(data.expiracao) : null,
      id: undefined,
    });

    const resultSuccess: Result = {
      isError: false,
      isSuccess: true,
      result: result,
    };

    return resultSuccess;
  } catch (error) {}

  const result: Result = {
    currentData: {
      ...data,
      expiracao: data.expiracao ? new Date(data.expiracao) : null,
    },
    isError: true,
    isSuccess: false,
    error: "Erro desconhecido",
  };
  return result;
}
