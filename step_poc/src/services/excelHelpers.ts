/**
 * Returns the index of the column with the given header name.
 */
export const getColumnIndexByHeader = (
  data: any[][],
  headerName: string
): number => {
  if (data.length === 0) return -1;
  return data[0].indexOf(headerName);
};

/**
 * Returns an array of values for a given header name (skipping the header row).
 */
export const getColumnValuesByHeader = (
  data: any[][],
  headerName: string
): any[] => {
  const colIndex = getColumnIndexByHeader(data, headerName);
  if (colIndex === -1) return [];
  return data.slice(1).map((row) => row[colIndex]);
};

/**
 * Filters rows (excluding the header row) based on a filter column's value.
 */
export const filterExcelRows = (
  data: any[][],
  filterHeader: string,
  filterValue: any
): any[][] => {
  const colIndex = getColumnIndexByHeader(data, filterHeader);
  if (colIndex === -1) return [];
  return data.slice(1).filter((row) => row[colIndex] === filterValue);
};
