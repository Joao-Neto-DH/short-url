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
import React from "react";
import ExpirationDate from "./expriration-date";

function FormUpdateShort({
  url,
  palavraChave,
  descricao,
  expiracao,
}: {
  url: string;
  palavraChave: string;
  descricao: string;
  expiracao?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Editar</Button>
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
          <form action="#" className="w-full">
            <label htmlFor="url" className="block mb-3">
              <span className="mb-1 text-sm font-bold">
                URL<span className="text-red-600">*</span>
              </span>
              <Input
                type="text"
                name="url"
                id="url"
                required
                defaultValue={url}
                placeholder="https://www.mylink.com/sample/come-here"
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
                defaultValue={palavraChave}
              />
            </label>
            <label htmlFor="descricao" className="block mb-3">
              <span className="mb-1 text-sm font-bold">Descrição</span>
              <br />
              <Textarea
                defaultValue={descricao}
                name="descricao"
                id="descricao"
                placeholder="Sample"
                className="w-full"
              />
            </label>
            <ExpirationDate expiracao={expiracao} />
            <Button className="w-full" type="submit">
              Actualizar
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FormUpdateShort;
