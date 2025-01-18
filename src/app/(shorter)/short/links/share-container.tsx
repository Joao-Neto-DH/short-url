"use client";

import FacebookIcon from "@/components/social-media-icon/facebook";
import LinkIcon from "@/components/social-media-icon/link";
import XIcon from "@/components/social-media-icon/x";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import React from "react";

function ShareContainer({ link }: { link: string }) {
  const { toast } = useToast();

  return (
    <ul className="space-y-2">
      <li>
        <Button
          variant={"outline"}
          asChild
          className="w-full flex items-center gap-2"
        >
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${link}?utm_source=facebook`}
            target="_blank"
          >
            <FacebookIcon />
            Facebook
          </a>
        </Button>
      </li>
      <li>
        <Button
          variant={"outline"}
          asChild
          className="w-full flex items-center gap-2"
        >
          <a
            href={`https://x.com/intent/tweet?text=Bilheteria+Dunorte&url=${link}?utm_source=x&hashtags=bilheteriadunorte`}
            target="_blank"
          >
            <XIcon />X (Twitter)
          </a>
        </Button>
      </li>
      <li>
        <Button
          onClick={() => {
            navigator.clipboard
              .writeText(`${link}?utm_source=outros`)
              .then(() => {
                toast({
                  title: "Link copiado",
                  variant: "success",
                });
              });
          }}
          variant={"outline"}
          className="w-full flex items-center gap-2"
        >
          <LinkIcon />
          Copiar link
        </Button>
      </li>
    </ul>
  );
}

export default ShareContainer;
