import React, { useActionState } from "react";
import { logout } from "../actions";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

function Logout() {
  const [saiu, action, isPending] = useActionState(logout, false);

  if (saiu && !isPending) {
    redirect("/");
  }
  return (
    <form action={action}>
      <Button className="w-full">Sair</Button>
    </form>
  );
}

export default Logout;
