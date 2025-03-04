// chartProcessors.ts

export interface ChartData {
  chartType: "donut" | "bar" | "line" | "pie" | "radar" | string;
  labels?: string[];
  series: number[];
}

// A type for a function that processes raw data and returns chart data.
export type DataProcessor = (data: number[]) => ChartData;

/**
 * Processor for a donut chart.
 * Converts raw numerical data into a frequency map.
 */
export const processDataForDonutChart: DataProcessor = (data) => {
  const frequencyMap = data.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const sortedKeys = Object.keys(frequencyMap)
    .map(Number)
    .sort((a, b) => a - b);

  const labels = sortedKeys.map((num) => num.toString());
  const series = sortedKeys.map((num) => frequencyMap[num]);

  return { chartType: "donut", labels, series };
};

/**
 * Processor for a bar chart.
 * Returns static data for demonstration purposes.
 */
export const processBarChartData: DataProcessor = () => ({
  chartType: "bar",
  labels: ["Q1", "Q2", "Q3", "Q4"],
  series: [30, 40, 50, 60],
});

/**
 * Processor for a pie chart.
 * Returns static data for demonstration purposes.
 */
export const processPieChartData: DataProcessor = () => ({
  chartType: "pie",
  labels: ["Positive", "Neutral", "Negative"],
  series: [45, 35, 20],
});
