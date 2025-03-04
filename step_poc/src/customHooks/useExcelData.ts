// useExcelData.ts
import { useState, useEffect } from "react";
import { ExcelOptions, fetchExcelData } from "../services/excelService";

interface ExcelDataResult {
  data: any[];
  loading: boolean;
  error: Error | null;
}

/**
 * Custom hook to fetch Excel data using given options and manage state.
 *
 * @param options ExcelOptions for fetching and parsing the file.
 * @returns An object with the data array, loading flag, and error (if any).
 */
export const useExcelData = (options: ExcelOptions): ExcelDataResult => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchExcelData(options);
        setData(result);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [
    options.filePath,
    options.targetColumn,
    options.filterColumn,
    options.filterValue,
  ]);

  return { data, loading, error };
};
