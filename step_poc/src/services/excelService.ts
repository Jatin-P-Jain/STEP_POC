import * as XLSX from "xlsx";

export interface ExcelFilter {
  /** Header name of the column to filter on */
  column: string;
  /** An array of acceptable values for the filter.
   * The row passes the filter if its value is included in this array.
   */
  values: any[];
}

export interface ExcelOptions {
  /** Path to the Excel file (e.g., '/sample.xlsx' in the public folder) */
  filePath: string;
  /** An array of header names for the columns you want to extract */
  targetColumns: string[];
  /** (Optional) Array of filters; each filter specifies a column and acceptable values.
   * A row is included if for every filter, the row's value for that column is one of the acceptable values.
   */
  filters?: ExcelFilter[];
}

/**
 * Fetches an Excel file, parses it, optionally filters the data,
 * and returns an object mapping each target column to an array of its values.
 *
 * The function supports multiple filters where each filter contains an array of acceptable values.
 * A row is included only if, for every filter, the row's value in the specified column
 * is one of the acceptable values.
 *
 * @param options ExcelOptions containing filePath, targetColumns, and optional filters.
 * @returns A promise resolving to an object where each key is a target column and the value is an array of data from that column.
 */
export const fetchExcelData = async (
  options: ExcelOptions
): Promise<Record<string, any[]>> => {
  const { filePath, targetColumns, filters } = options;

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

  // Optionally filter the rows if filters are provided.
  // A row is kept if, for every filter, its value in the filter's column is one of the acceptable values.
  const filteredData =
    filters && filters.length > 0
      ? jsonData.filter((row) =>
          filters.every((filter) => filter.values.includes(row[filter.column]))
        )
      : jsonData;

  // Extract the data for each target column from the filtered rows.
  const result: Record<string, any[]> = {};
  targetColumns.forEach((col) => {
    result[col] = filteredData.map((row) => row[col]);
  });

  return result;
};
