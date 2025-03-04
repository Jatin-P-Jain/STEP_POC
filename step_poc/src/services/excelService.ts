// excelFetcher.ts
import * as XLSX from "xlsx";

export interface ExcelOptions {
  /** Path to the Excel file (e.g., '/sample.xlsx' in the public folder) */
  filePath: string;
  /** The header name of the column you want to extract */
  targetColumn: string;
  /** (Optional) Header name of the column to filter on */
  filterColumn?: string;
  /** (Optional) The value to filter the rows by */
  filterValue?: any;
}

/**
 * Fetches an Excel file, parses it, optionally filters the data,
 * and returns an array of values from the target column.
 *
 * @param options ExcelOptions containing filePath, targetColumn, and optional filter criteria.
 * @returns A promise resolving to an array of data from the target column.
 */
export const fetchExcelData = async (options: ExcelOptions): Promise<any[]> => {
  const { filePath, targetColumn, filterColumn, filterValue } = options;

  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(`Failed to fetch file at ${filePath}`);
  }

  // Read the response as an ArrayBuffer
  const buffer = await response.arrayBuffer();

  // Parse the Excel file using SheetJS/xlsx
  const workbook = XLSX.read(buffer, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // Convert the worksheet to JSON (each object represents a row with header keys)
  const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet);

  // Optionally filter the rows if filtering criteria is provided
  const filteredData =
    filterColumn && filterValue !== undefined
      ? jsonData.filter((row) => row[filterColumn] === filterValue)
      : jsonData;

  // Extract the target column data from the filtered rows
  const columnData = filteredData.map((row) => row[targetColumn]);

  return columnData;
};
