import React from "react";
import { ChartData } from "chart.js";
import Charts from "./charts";
import Services from "@/services";

const services = new Services();
export const dynamic = "force-dynamic";

async function Page() {
  const result = await services.totalAcessosMovelEPc();

  const dataChartArea: ChartData<"pie", number[], string> = {
    labels: ["Computador", "Telemóvel"],
    datasets: [
      {
        label: "Acesso",
        data: [result._sum.desktop ?? 0, result._sum.mobile ?? 0],
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
        data: [result._sum.desktop ?? 0, result._sum.mobile ?? 0],
        borderColor: "rgb(3, 252, 53)",
        backgroundColor: "rgba(3, 252, 53, 0.5)",
        yAxisID: "y",
      },
    ],
  };

  return (
    <>
      <div className="w-full flex flex-row overflow-x-auto pb-4 space-x-4">
        {[
          { name: "Acessos por computador", value: result._sum.desktop },
          { name: "Acessos por telemóvel", value: result._sum.mobile },
        ].map((data, index) => (
          <div
            key={index}
            className="border border-l-4 border-l-blue-600 rounded-md p-4 min-w-52 shadow-md"
          >
            <p className="font-bold text-xl">{data.name}</p>
            <p className="font-light text-2xl">{data.value}</p>
          </div>
        ))}
      </div>
      {/* charts */}
      <Charts dataChartArea={dataChartArea} dataChartLine={dataChartLine} />
    </>
  );
}

export default Page;
