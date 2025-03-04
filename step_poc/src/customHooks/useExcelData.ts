// src/hooks/useExcelData.ts
import { useEffect, useState } from "react";
import { fetchExcelData } from "../services/excelService";

export const useExcelData = (fileUrl: string) => {
  const [data, setData] = useState<any[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchExcelData(fileUrl)
      .then((parsedData) => {
        setData(parsedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [fileUrl]);

  return { data, loading, error };
};
