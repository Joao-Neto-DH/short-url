"use client";
import { removerLink, Result } from "@/app/actions";
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormState } from "react-dom";

const initialState: Result = {
  isError: false,
  isSuccess: false,
};

function DeleteLink({ linkId }: { linkId: number }) {
  const [state, action, isPending] = useFormState(removerLink, initialState);

  if (state.isSuccess && !isPending) {
    window.location.reload();
  }

  return (
    <form action={action}>
      <fieldset disabled={isPending}>
        <input type="hidden" name="id" value={linkId} />
        <Button variant={"destructive"} size={"sm"} className="w-full">
          Remover
        </Button>
      </fieldset>
    </form>
  );
}

export default DeleteLink;
