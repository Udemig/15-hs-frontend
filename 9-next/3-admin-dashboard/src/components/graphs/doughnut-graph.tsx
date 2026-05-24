"use client";

import { GraphData } from "@/types";
import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

interface Props {
  data: GraphData;
}

const options = {
  plugins: {
    legend: {
      position: "bottom",
      labels: { usePointStyle: true },
    },
  },

  responsive: true,
  cutout: 85,
  maintainAspectRatio: true,
} as const;

const DoughnutGraph: FC<Props> = ({ data }) => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutGraph;
