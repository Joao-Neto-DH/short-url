import { unSlug } from "@/lib/utils";
import Services from "@/services";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";

const services = new Services();

async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ palavraChave: string }>;
  searchParams: Promise<{ utm_source: string }>;
}) {
  const [{ palavraChave }, { utm_source }, headersResult] = await Promise.all([
    params,
    searchParams,
    headers(),
  ]);
  const origem = headersResult.get("origem");

  const palavraOriginal = decodeURIComponent(unSlug(palavraChave));

  // console.log(palavraOriginal, utm_source, origem);

  const link = await services.getLinkPelaPalavraChave(palavraOriginal);

  if (link === null || link === undefined) {
    notFound();
  }

  if (link.expiracao) {
    const currentDate = new Date();
    const expirado = link.expiracao.getTime() - currentDate.getTime();

    if (expirado < 0) {
      notFound();
    }
  }

  await services.contarAccesso(
    palavraOriginal,
    origem as "PC" | "MOVEL",
    utm_source
  );

  redirect(link.url);
}

export default Page;
