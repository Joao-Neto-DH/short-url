"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import React, { useActionState } from "react";
import ExpirationDate from "./expiration-date";
import { gerarLink, Result } from "@/app/actions";

const initialState: Result = {
  isError: false,
  isSuccess: false,
};

function FormGenerateShort() {
  const [state, action, isPending] = useActionState(gerarLink, initialState);

  if (state.isSuccess && !isPending) {
    window.location.reload();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} className="rounded-full">
          <Plus size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Encurtar URL</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para encurtar uma URL
            <br />
            Os campos marcados com <span className="text-red-600">*</span> são
            obrigatórios
          </DialogDescription>
        </DialogHeader>

        <div className="">
          <form action={action} className="w-full">
            {state.isError && (
              <div className="mb-3">
                <p className="text-sm text-red-600">{state.error}</p>
              </div>
            )}
            {state.isSuccess && (
              <div className="mb-3">
                <p className="text-sm text-green-600">Link encurtado</p>
              </div>
            )}
            <fieldset disabled={isPending}>
              <label htmlFor="url" className="block mb-3">
                <span className="mb-1 text-sm font-bold">
                  URL<span className="text-red-600">*</span>
                </span>
                <Input
                  type="text"
                  name="url"
                  id="url"
                  required
                  placeholder="https://www.mylink.com/sample/come-here"
                  defaultValue={state.currentData?.url}
                />
              </label>
              <label htmlFor="palavra-chave" className="block mb-3">
                <span className="mb-1 text-sm font-bold">
                  Palavra-chave (o termo deve estar disponível)
                </span>
                <Input
                  type="text"
                  name="palavra-chave"
                  id="palavra-chave"
                  placeholder="Sample"
                  defaultValue={state.currentData?.palavra_chave}
                />
              </label>
              <label htmlFor="descricao" className="block mb-3">
                <span className="mb-1 text-sm font-bold">Descrição</span>
                <br />
                <Textarea
                  name="descricao"
                  id="descricao"
                  placeholder="Sample"
                  className="w-full"
                  defaultValue={state.currentData?.descricao ?? undefined}
                />
              </label>
              <ExpirationDate
                expiracao={state.currentData?.expiracao?.toISOString()}
              />
              <Button className="w-full" type="submit">
                Gerar
              </Button>
            </fieldset>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FormGenerateShort;
