// src/components/ChartComponentApex.tsx
import React from "react";
import DonutChart from "./DonutChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

export interface ChartData {
  chartType: "donut" | "bar" | "line" | "pie" | string;
  labels?: string[];
  series: number[];
}

interface ChartComponentApexProps {
  chartData: ChartData;
  height?: number | string;
}

const ChartComponentApex: React.FC<ChartComponentApexProps> = ({
  chartData,
  height = 300,
}) => {
  const { chartType, labels, series } = chartData;
  const computedLabels =
    labels && labels.length > 0
      ? labels
      : series.map((_, index) => `Label ${index + 1}`);

  switch (chartType) {
    case "donut":
      return (
        <DonutChart labels={computedLabels} series={series} height={height} />
      );
    case "bar":
      return (
        <BarChart labels={computedLabels} series={series} height={height} />
      );
    case "line":
      return (
        <LineChart labels={computedLabels} series={series} height={height} />
      );
    case "pie":
      return (
        <PieChart labels={computedLabels} series={series} height={height} />
      );
    default:
      return (
        <LineChart labels={computedLabels} series={series} height={height} />
      );
  }
};

export default ChartComponentApex;
