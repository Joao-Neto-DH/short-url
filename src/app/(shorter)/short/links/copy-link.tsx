"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";

function CopyLink({ palavraChave }: { palavraChave: string }) {
  const { toast } = useToast();
  return (
    <Button
      onClick={() =>
        navigator.clipboard
          .writeText(`${window.location.href}/u/${palavraChave}`)
          .then(() => {
            toast({
              title: "Link copiado!",
              variant: "success",
            });
          })
      }
      className="w-full flex flex-row items-center gap-2"
      size={"sm"}
    >
      <Copy size={18} />
      Copiar
    </Button>
  );
}

export default CopyLink;
