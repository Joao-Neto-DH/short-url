import { ChartData } from "chart.js";
import React from "react";
import Charts from "../../charts";
import { unSlug } from "@/lib/utils";
import Services from "@/services";
import { notFound } from "next/navigation";
import { getUsuario } from "@/lib/check-login";

const services = new Services();

async function Page({ params }: { params: Promise<{ palavraChave: string }> }) {
  const { palavraChave } = await params;
  const word = decodeURIComponent(unSlug(palavraChave));

  const [link, sources, usuarioId] = await Promise.all([
    services.getLinkPelaPalavraChave(word),
    services.totalAcessosSource(word),
    getUsuario(),
  ]);

  if (link === null || link === undefined || link.usuarioId !== usuarioId) {
    notFound();
  }

  const dataChartArea: ChartData<"pie", number[], string> = {
    labels: ["Computador", "Telemóvel"],
    datasets: [
      {
        label: "Acesso",
        data: [link.ContarAcesso?.desktop ?? 0, link.ContarAcesso?.mobile ?? 0],
        backgroundColor: ["rgba(3, 252, 53, 0.2)", "rgba(252, 7, 3, 0.2)"],
        borderColor: ["rgba(3, 252, 53, 1)", "rgba(252, 7, 3, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const dataChartLine = {
    labels: ["Computador", "Telemóvel"],
    datasets: [
      {
        label: "Acesso",
        data: [link.ContarAcesso?.desktop ?? 0, link.ContarAcesso?.mobile ?? 0],
        borderColor: "rgb(3, 252, 53)",
        backgroundColor: "rgba(3, 252, 53, 0.5)",
        yAxisID: "y",
      },
    ],
  };
  const dataChartSource = {
    labels: sources.map((s) => s.name),
    datasets: [
      {
        label: "Acesso",
        data: sources.map((s) => s.count),
        borderColor: "rgb(3, 252, 53)",
        backgroundColor: "rgba(3, 252, 53, 0.5)",
        yAxisID: "y",
      },
    ],
  };

  return (
    <>
      <div className="mb-4 space-y-2">
        <p className="text-2xl text-center">
          Analise de acessos para <span className="font-bold">{word}</span>
        </p>
        <ul>
          <li>Descrição: {link.descricao}</li>
          {link.expiracao && (
            <li>
              Data de validade:{" "}
              {new Date(link.expiracao).toLocaleString("pt-BR")}
            </li>
          )}
        </ul>
      </div>
      <Charts
        dataChartArea={dataChartArea}
        dataChartLine={dataChartLine}
        dataChartSource={dataChartSource}
      />
    </>
  );
}

export default Page;
