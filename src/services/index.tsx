import { prisma } from "@/prisma";
import { Link } from "../../prisma/generated/client";
import { getUsuario } from "@/lib/check-login";

export default class Services {
  public async usuario() {
    const userId = await getUsuario();

    const usuario = await prisma.usuario.findFirst({ where: { id: userId } });

    return usuario!;
  }

  public async gerarLink(
    data: Pick<Link, "palavra_chave" | "expiracao" | "descricao" | "url">
  ) {
    const userId = await getUsuario();
    if (!userId) throw new Error("Usuário não logado");

    const result = await prisma.link.create({
      data: {
        ...data,
        usuarioId: userId,
        ContarAcesso: {
          create: {
            desktop: 0,
            mobile: 0,
          },
        },
      },
      include: { ContarAcesso: true },
    });

    return result;
  }

  public async listarLinks(data: Partial<Link>) {
    const userId = await getUsuario();
    if (!userId) throw new Error("Usuário não logado");

    const result = await prisma.link.findMany({
      where: { ...data, usuarioId: userId },
      include: { ContarAcesso: true },
    });

    return result;
  }

  public async getLinkPeloId(id: number) {
    const result = await prisma.link.findFirst({
      where: { id },
      include: { ContarAcesso: true },
    });

    return result;
  }

  public async getLinkPelaPalavraChave(palavraChave: string) {
    const result = await prisma.link.findFirst({
      where: { palavra_chave: palavraChave },
      include: { ContarAcesso: true },
    });

    return result;
  }

  public async actualizarLink(id: number, data: Partial<Link>) {
    const userId = await getUsuario();
    if (!userId) throw new Error("Usuário não logado");

    const result = await prisma.link.update({
      where: { id },
      data: {
        ...data,
        usuarioId: userId,
        id: undefined,
      },
      include: { ContarAcesso: true },
    });

    return result;
  }

  public async removerLink(id: number) {
    const userId = await getUsuario();
    if (!userId) throw new Error("Usuário não logado");

    const result = await prisma.link.delete({
      where: { id, usuarioId: userId },
      include: { ContarAcesso: true },
    });

    return result;
  }

  public async contarAccesso(
    palavraChave: string,
    dispositivo: "PC" | "MOVEL"
  ) {
    const access = await prisma.contarAcesso.findFirst({
      where: {
        link: {
          palavra_chave: {
            equals: palavraChave,
          },
        },
      },
    });

    const result = await prisma.contarAcesso.update({
      where: {
        id: access?.id,
      },
      data: {
        desktop: dispositivo === "PC" ? (access?.desktop ?? 0) + 1 : undefined,
        mobile: dispositivo === "MOVEL" ? (access?.mobile ?? 0) + 1 : undefined,
      },
    });

    return result;
  }

  public async totalAcessosMovelEPc(palavraChave?: string) {
    const userId = await getUsuario();
    if (!userId) throw new Error("Usuário não logado");

    const result = await prisma.contarAcesso.aggregate({
      _sum: {
        desktop: true,
        mobile: true,
      },
      where: {
        link: {
          palavra_chave: palavraChave,
          usuarioId: userId,
        },
      },
    });
    return result;
  }
}
