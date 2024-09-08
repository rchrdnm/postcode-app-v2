export function parseCSV(csv: string): string[][] {
    const uniqueRows = new Set(csv.split('\n').map(row => 
        row.split(',').map(cell => cell.trim()).join(',')
    ));

    // Filter out empty rows
    const rowsArray = Array.from(uniqueRows).filter(row => row.trim() !== '');

    return rowsArray.map((row, index) => 
        row.split(',').map(cell => {
            // Add a semicolon after each 4-digit number, except for every 235th row or the last row
            if (index % 235 === 234 || index === rowsArray.length - 1) {
                return cell.replace(/(\d{4})(?=,|$)/g, '$1'); // No semicolon
            }
            return cell.replace(/(\d{4})(?=,|$)/g, '$1;'); // Add semicolon
        })
    );
}