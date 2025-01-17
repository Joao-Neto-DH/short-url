"use client";
import React from "react";

import {
  Chart as ChartJS,
  Tooltip as TooltipChart,
  ArcElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartData,
} from "chart.js";

import { Line, Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  CategoryScale,
  TooltipChart,
  Legend
);

function Charts({
  dataChartArea,
  dataChartLine,
}: {
  dataChartArea: ChartData<"pie", number[], string>;
  dataChartLine: ChartData<"line", number[], string>;
}) {
  return (
    <div className="flex flex-row gap-6 mt-4">
      <div className="w-1/3 p-6 rounded-md border">
        <Pie
          data={dataChartArea}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Total de acesso por dispositivo",
              },
            },
          }}
          className="w-96"
          id="pie"
        />
      </div>
      <div className="w-full p-6 rounded-md border ">
        <Line
          data={dataChartLine}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Total de acessos por dia",
              },
            },
          }}
          id="lines"
        />
      </div>
    </div>
  );
}

export default Charts;
