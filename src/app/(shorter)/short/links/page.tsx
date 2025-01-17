import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import FormUpdateShort from "../form-update-short";
import { Button } from "@/components/ui/button";
import CopyLink from "./copy-link";
import Link from "next/link";

function Page() {
  return (
    <Table>
      {/* <TableCaption>Links gerados</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">URL</TableHead>
          <TableHead>Palavra-chave</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead className="text-right">Expiração</TableHead>
          <TableHead className="text-right">Acções</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            <p className="line-clamp-2">
              https://ui.shadcn.com/docs/components/dropdown-menu
            </p>
          </TableCell>
          <TableCell>
            <Link
              href={`/short/links/${"shadcn"}`}
              className="text-blue-600 underline"
            >
              shadcn
            </Link>
          </TableCell>
          <TableCell>
            <p className="line-clamp-2">Sem descrição</p>
          </TableCell>
          <TableCell className="text-right">
            {new Date().toLocaleString("pt-BR")}
          </TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="space-y-1">
                <DropdownMenuItem asChild>
                  <FormUpdateShort descricao="test" palavraChave="" url="" />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <CopyLink palavraChave="shadcn" />
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="w-full">
                  <Button variant={"destructive"} size={"sm"}>
                    Remover
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default Page;
