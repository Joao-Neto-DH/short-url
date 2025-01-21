"use client";
import React, { useActionState } from "react";
import { logout } from "../actions";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";

function Logout(props: React.ComponentPropsWithRef<"button">) {
  const [saiu, action, isPending] = useActionState(logout, false);

  if (saiu && !isPending) {
    redirect("/");
  }
  return (
    <form action={action}>
      <Button ref={props.ref} className={cn("w-full", props.className)}>
        Sair
      </Button>
    </form>
  );
}

export default Logout;
