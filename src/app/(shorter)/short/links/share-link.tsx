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
import { Share2 } from "lucide-react";
import ShareContainer from "./share-container";

function ShareLink({ palavraChave }: { palavraChave: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex flex-row items-center gap-2 w-full"
        >
          <Share2 size={16} />
          Partilhar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Partilhar link</DialogTitle>
          <DialogDescription>Escolha como deseja Partilhar</DialogDescription>
        </DialogHeader>
        <ShareContainer link={`${window.location.origin}/u/${palavraChave}`} />
      </DialogContent>
    </Dialog>
  );
}

export default ShareLink;
