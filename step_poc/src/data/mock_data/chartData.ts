export interface ChartConfig {
  id: string;
  title: string;
  chartData: {
    chartType: "donut" | "bar" | "line" | "pie" | string;
    labels?: string[];
    series: number[];
    // You can add additional Victory configuration if needed.
  };
}

export const chartData: ChartConfig[] = [
  {
    id: "card1",
    title: "Online Rating Index (ORI)",
    chartData: {
      chartType: "donut",
      labels: ["Excellent", "Good", "Average", "Poor"],
      series: [40, 30, 20, 10],
    },
  },
  {
    id: "card2",
    title: "Guest Satisfaction Index",
    chartData: {
      chartType: "bar",
      labels: ["Q1", "Q2", "Q3", "Q4"],
      series: [30, 40, 50, 60],
    },
  },
  {
    id: "card3",
    title: "Voice Map",
    chartData: {
      chartType: "pie",
      labels: ["Positive", "Neutral", "Negative"],
      series: [45, 35, 20],
    },
  },
  // Add more cards as needed...
];
