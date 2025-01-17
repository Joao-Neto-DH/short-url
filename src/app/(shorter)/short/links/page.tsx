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
            https://ui.shadcn.com/docs/components/dropdown-menu
          </TableCell>
          <TableCell>shadcn</TableCell>
          <TableCell>Sem descrição</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="space-y-1">
                <DropdownMenuItem asChild>
                  <FormUpdateShort descricao="test" palavraChave="" url="" />
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="w-full">
                  <Button variant={"destructive"}>Remover</Button>
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
