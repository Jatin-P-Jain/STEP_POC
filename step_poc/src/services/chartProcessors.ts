// chartProcessors.ts

export interface ChartData {
  chartType: "donut" | "bar" | "line" | "pie" | "radar" | string;
  labels?: string[];
  series: number[];
}

// A type for a function that processes raw data and returns chart data.
// Now accepts a record of number arrays, with keys corresponding to target columns.
export type DataProcessor = (data: Record<string, any[]>) => ChartData;

/**
 * Processor for a donut chart.
 * Converts raw numerical data into a frequency map.
 * It assumes that the relevant data is in the first key of the record.
 */
export const processDataForDonutChart: DataProcessor = (data) => {
  const keys = Object.keys(data);
  if (keys.length === 0) {
    return { chartType: "donut", labels: [], series: [] };
  }
  const colKey = keys[0];
  const columnData = data[colKey];

  const frequencyMap = columnData.reduce((acc, curr) => {
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
 * Ignores the input data.
 */
export const processBarChartData: DataProcessor = (_data) => ({
  chartType: "bar",
  labels: ["Q1", "Q2", "Q3", "Q4"],
  series: [30, 40, 50, 60],
});

/**
 * Processor for a pie chart.
 * Returns static data for demonstration purposes.
 * Ignores the input data.
 */
export const processPieChartData: DataProcessor = (_data) => ({
  chartType: "pie",
  labels: ["Positive", "Neutral", "Negative"],
  series: [45, 35, 20],
});
