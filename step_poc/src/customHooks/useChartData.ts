// useChartData.ts

import {
  ChartConfig,
  chartDefinitions,
  ChartDefinition,
} from "../data/mock_data/ChartDefinitions";
import { useExcelData } from "./useExcelData";

export const useChartData = (): {
  charts: ChartConfig[];
  loading: boolean;
  error: Error | null;
} => {
  const excelData = useExcelData({
    filePath: "/step_data1.xlsx",
    targetColumn: "Online Rating Index",
    filterColumn: "Column1",
    filterValue: "Mocked",
  });

  const { data, loading, error } = excelData;

  let charts: ChartConfig[] = [];
  // Only process data if it's loaded and there is no error.
  if (!loading && !error && data) {
    charts = chartDefinitions.map((def: ChartDefinition) => ({
      id: def.id,
      title: def.title,
      chartData: def.processor(data),
    }));
  }

  return { charts, loading, error };
};
