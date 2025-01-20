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
import { useAuth } from "@/hooks/useAuth";

function LoginModal() {
  const [state, setData] = useAuth();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Entrar</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="space-y-4">
          <DialogHeader>
            <DialogTitle>Entrar</DialogTitle>
            <DialogDescription>
              Digite os seus dados de acesso
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              setData({
                email: evt.currentTarget.email.value,
                password: evt.currentTarget.password.value,
              });
            }}
          >
            <fieldset className="space-y-4" disabled={state.isLoading}>
              {state.isError && (
                <p className="text-sm text-white p-4 rounded bg-red-400">
                  {state.error}
                </p>
              )}
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
              <Button>Iniciar sessão</Button>
            </fieldset>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
