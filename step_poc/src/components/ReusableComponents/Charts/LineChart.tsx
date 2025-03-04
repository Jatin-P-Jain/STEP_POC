// src/components/charts/LineChart.tsx
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface LineChartProps {
  labels: string[];
  series: number[];
  height?: number | string;
}

const LineChart: React.FC<LineChartProps> = ({ labels, series, height = 300 }) => {
  const options: ApexOptions = {
    chart: { type: "line" as const },
    xaxis: { categories: labels },
  };

  const chartSeries = [
    {
      name: "Data",
      data: series,
    },
  ];

  return <Chart options={options} series={chartSeries} type="line" width="100%" height={height} />;
};

export default LineChart;
