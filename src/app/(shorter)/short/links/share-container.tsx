"use client";

import LinkIcon from "@/components/social-media-icon/link";
import XIcon from "@/components/social-media-icon/x";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import QRCode from "react-qr-code";

function ShareContainer({ link }: { link: string }) {
  const { toast } = useToast();

  return (
    <ul className="space-y-2">
      {/* <li>
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
      </li> */}
      <li>
        <Button
          variant={"outline"}
          asChild
          className="w-full flex items-center gap-2"
        >
          <a
            href={`https://x.com/intent/tweet?url=${link}?utm_source=x&hashtags=short`}
            target="_blank"
          >
            <XIcon />X (Twitter)
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
            href={`https://wa.me/?text=${link}?utm_source=whatsapp`}
            target="_blank"
          >
            Whatsapp
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
      <li>
        <div className="flex justify-center">
          <div className="w-28">
            <QRCode
              id="svg"
              size={150}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={`${link}?utm_source=qrcode`}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
      </li>
    </ul>
  );
}

export default ShareContainer;
