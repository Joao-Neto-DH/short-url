import { ChartData } from "chart.js";
import React from "react";
import Charts from "../../charts";
import { unSlug } from "@/lib/utils";
import Services from "@/services";
import { notFound } from "next/navigation";

const services = new Services();

async function Page({ params }: { params: Promise<{ palavraChave: string }> }) {
  const { palavraChave } = await params;
  const word = decodeURIComponent(unSlug(palavraChave));

  const link = await services.getLink(word);

  if (link === null || link === undefined) {
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
    labels: [""],
    datasets: [
      {
        label: "Computador",
        data: [30, 3],
        borderColor: "rgb(3, 252, 53)",
        backgroundColor: "rgba(3, 252, 53, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Telemóvel",
        data: [20, 22],
        borderColor: "rgb(252, 7, 3)",
        backgroundColor: "rgba(252, 7, 3, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  return (
    <>
      <div className="mb-4">
        <p className="text-2xl text-center">
          Analise de acessos para <span className="font-bold">{word}</span>
        </p>
      </div>
      <Charts dataChartArea={dataChartArea} dataChartLine={dataChartLine} />
    </>
  );
}

export default Page;
