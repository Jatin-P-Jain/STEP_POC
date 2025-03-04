// src/components/charts/BarChart.tsx
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface BarChartProps {
  labels: string[];
  series: number[];
  height?: number | string;
}

const BarChart: React.FC<BarChartProps> = ({
  labels,
  series,
  height = 300,
}) => {
  const options: ApexOptions = {
    chart: { type: "bar" as const },
    xaxis: { categories: labels },
  };

  const chartSeries = [
    {
      name: "Data",
      data: series,
    },
  ];

  return (
    <Chart
      options={options}
      series={chartSeries}
      type="bar"
      width="100%"
      height={height}
    />
  );
};

export default BarChart;
