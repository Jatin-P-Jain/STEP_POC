import { useState, useEffect, useMemo } from "react";
import { ExcelOptions, fetchExcelData } from "../services/excelService";

interface ExcelDataResult {
  data: Record<string, any[]> | null;
  loading: boolean;
  error: Error | null;
}

export const useExcelData = (options: ExcelOptions): ExcelDataResult => {
  const [data, setData] = useState<Record<string, any[]> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Memoize dependencies that are arrays/objects to prevent unnecessary re-fetches
  const filePath = options.filePath;
  const targetColumnsStr = useMemo(
    () => JSON.stringify(options.targetColumns),
    [options.targetColumns]
  );
  const filtersStr = useMemo(
    () => JSON.stringify(options.filters),
    [options.filters]
  );

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
  }, [filePath, targetColumnsStr, filtersStr]);

  return { data, loading, error };
};
