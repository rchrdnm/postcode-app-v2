export async function fetchGoogleSheetData(sheetUrl: string): Promise<string[][]> {
  const response = await fetch(sheetUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch data from Google Sheets');
  }
  const csvData = await response.text();
  return parseCSV(csvData); // Assuming parseCSV is already defined to handle CSV data
}
