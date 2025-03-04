// src/components/charts/PieChart.tsx
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface PieChartProps {
  labels: string[];
  series: number[];
  height?: number | string;
}

const PieChart: React.FC<PieChartProps> = ({ labels, series, height = 300 }) => {
  const options: ApexOptions = {
    chart: { type: "pie" as const },
    labels: labels,
    dataLabels: {
      style: { fontSize: "12px", fontWeight: "700" },
    },
  };

  return <Chart options={options} series={series} type="pie" width="100%" height={height} />;
};

export default PieChart;
