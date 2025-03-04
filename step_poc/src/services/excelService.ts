import * as XLSX from "xlsx";

/**
 * Fetches and parses an Excel file from a given URL.
 * Returns a 2D array where the first row is the header row.
 */
export const fetchExcelData = async (fileUrl: string): Promise<any[][]> => {
  try {
    const response = await fetch(fileUrl);
    console.log("Status:", response.status);
    console.log("Content-Type:", response.headers.get("Content-Type"));

    if (!response.ok) {
      throw new Error(
        `Failed to fetch Excel file: ${response.status} ${response.statusText}`
      );
    }

    const arrayBuffer = await response.arrayBuffer();

    const workbook = XLSX.read(arrayBuffer, { type: "array" });

    const sheetName = workbook.SheetNames[0];

    const worksheet = workbook.Sheets[sheetName];
    // Convert the worksheet to a 2D array (row 0 as header)
    const data = XLSX.utils.sheet_to_json<any[]>(worksheet, { header: 1 });

    return data;
  } catch (error) {
    console.error("Error in fetchExcelData:", error);
    throw error; // rethrow so the caller knows an error occurred
  }
};
