// src/components/charts/DonutChart.tsx
import React from "react";
import Chart from "react-apexcharts";
import { Box } from "@mui/material";

interface DonutChartProps {
  labels: string[];
  series: number[];
  height?: number | string;
}

const DonutChart: React.FC<DonutChartProps> = ({
  labels,
  series,
  height = 300,
}) => {
  const options = {
    chart: { type: "donut" as const },
    labels: labels,
    dataLabels: {
      style: { fontSize: "12px", fontWeight: "700" },
    },
  };

  return (
    <Box sx={{ position: "relative", height, width: "100%" }}>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height={height}
      />
      {/* Center Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "16px", fontWeight: "bold", color: "#373d3f" }}>
          ORI
        </div>
        <div style={{ fontSize: "12px", color: "#00E396" }}>↑ 5%</div>
      </Box>
    </Box>
  );
};

export default DonutChart;
