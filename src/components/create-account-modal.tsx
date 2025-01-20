"use client";

import React from "react";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useCreateAccount } from "@/hooks/useCreateAccount";

function CreateAccountModal() {
  const [state, setData] = useCreateAccount();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Criar conta</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="space-y-4">
          <DialogHeader>
            <DialogTitle>Criar conta</DialogTitle>
            <DialogDescription>Digite os seus dados</DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              setData({
                email: evt.currentTarget.email.value,
                password: evt.currentTarget.password.value,
                name: evt.currentTarget.nome.value,
              });
            }}
          >
            <fieldset className="space-y-4" disabled={state.isLoading}>
              <div className="space-y-2">
                <label htmlFor="nome">Nome</label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="João Neto"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password">Senha</label>
                <Input
                  id="password"
                  name="password"
                  type={"password"}
                  required
                  autoComplete="current-password"
                />
              </div>
              <Button>Criar conta</Button>
            </fieldset>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateAccountModal;
