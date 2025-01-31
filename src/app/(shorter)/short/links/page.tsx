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
import ShareLink from "./share-link";
import Link from "next/link";
import Services from "@/services";
import { slug } from "@/lib/utils";
import DeleteLink from "./delete-link";

const services = new Services();
export const dynamic = "force-dynamic";

async function Page() {
  const results = await services.listarLinks({});

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
        {results.map((link) => (
          <TableRow key={link.id}>
            <TableCell className="font-medium">
              <p className="line-clamp-2">{link.url}</p>
            </TableCell>
            <TableCell>
              <Link
                href={`/short/links/${encodeURIComponent(
                  slug(link.palavra_chave)
                )}`}
                className="text-blue-600 underline"
              >
                {link.palavra_chave}
              </Link>
            </TableCell>
            <TableCell>
              <p className="line-clamp-2">{link.descricao}</p>
            </TableCell>
            <TableCell className="text-right">
              {link.expiracao
                ? new Date(link.expiracao).toLocaleString("pt-BR")
                : undefined}
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <EllipsisVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="space-y-1">
                  <DropdownMenuItem asChild>
                    <FormUpdateShort
                      id={link.id}
                      descricao={link.descricao ?? ""}
                      palavraChave={link.palavra_chave}
                      url={link.url}
                      expiracao={
                        link.expiracao
                          ? new Date(link.expiracao).toISOString()
                          : undefined
                      }
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <ShareLink
                      palavraChave={encodeURIComponent(
                        slug(link.palavra_chave)
                      )}
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <DeleteLink linkId={link.id} />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Page;
