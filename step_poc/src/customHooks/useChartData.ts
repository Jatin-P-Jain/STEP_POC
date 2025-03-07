// useChartData.ts
import {
  ChartConfig,
  chartDefinitions,
  ChartDefinition,
} from "../data/mock_data/ChartDefinitions";
import { useExcelData } from "./useExcelData";

// First, build the full list of columns needed across all chart definitions
const allTargetColumns = chartDefinitions.reduce<string[]>(
  (cols, def: ChartDefinition) => {
    // If a chart definition explicitly lists targetColumns, use them; otherwise use the title.
    const targets =
      def.targetColumns && def.targetColumns.length > 0
        ? def.targetColumns
        : [def.title];
    targets.forEach((col) => {
      if (!cols.includes(col)) {
        cols.push(col);
      }
    });
    return cols;
  },
  []
);

export const useChartData = (): {
  charts: ChartConfig[];
  loading: boolean;
  error: Error | null;
} => {
  // Pass the aggregated target columns to the hook.
  const excelData = useExcelData({
    filePath: "/step_data1.xlsx",
    targetColumns: allTargetColumns,
    filters: [{ column: "Column1", values: ["Mocked"] }],
    // filterColumn: "Column1",
    // filterValue: "Mocked",
  });

  const { data, loading, error } = excelData;

  console.log({ data, loading, error });

  let charts: ChartConfig[] = [];
  if (!loading && !error && data) {
    charts = chartDefinitions.map((def: ChartDefinition) => {
      // Determine the target columns for this chart
      const targets =
        def.targetColumns && def.targetColumns.length > 0
          ? def.targetColumns
          : [def.title];

      // Build an object containing only the data for the relevant columns
      const targetData: Record<string, any[]> = {};
      targets.forEach((col) => {
        targetData[col] = data[col];
      });

      // Pass the extracted columns (as separate arrays) to the processor
      return {
        id: def.id,
        title: def.title,
        chartData: def.processor(targetData),
      };
    });
  }

  return { charts, loading, error };
};
