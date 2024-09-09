'use client'

import { useMemo, useState } from 'react'
import { Button } from "./ui/button" 
import { Copy, Check } from "lucide-react"

interface CSVViewerProps {
  data: string[][]
}

const MAX_ROWS_PER_COLUMN = 235

export default function CSVViewer({ data }: CSVViewerProps) {
 // console.log(data); // Log the data received
  const [copiedColumns, setCopiedColumns] = useState<boolean[]>([])

  const { columns, duplicates } = useMemo(() => {
    const seen = new Set<string>();
    const duplicates = new Set<string>();
    const uniqueRows: string[][] = [];

    data.forEach(row => {
      const rowString = row.join(',');
      if (!seen.has(rowString)) {
        seen.add(rowString);
        uniqueRows.push(row);
      } else {
        duplicates.add(rowString);
      }
    });

    const columns = [];
    for (let i = 0; i < uniqueRows.length; i += MAX_ROWS_PER_COLUMN) {
      columns.push(uniqueRows.slice(i, i + MAX_ROWS_PER_COLUMN));
    }

    return { columns, duplicates }
  }, [data])

  const copyToClipboard = async (columnIndex: number) => {
    try {
      const columnData = columns[columnIndex]
      const csvString = columnData.map(row => row.join(',')).join('\n')
      await navigator.clipboard.writeText(csvString)
      setCopiedColumns(prev => {
        const newState = [...prev]
        newState[columnIndex] = true
        return newState
      })
      setTimeout(() => {
        setCopiedColumns(prev => {
          const newState = [...prev]
          newState[columnIndex] = false
          return newState
        })
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="w-full overflow-x-auto">
      {duplicates.size > 0 && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
          <p className="font-bold">Warning</p>
          <p>Duplicate rows detected in the uploaded data. Please review your data for accuracy.</p>
        </div>
      )}
      <div className="grid grid-cols-3 gap-4">
        {columns.map((columnData, columnIndex) => (
          <div key={columnIndex} className="flex-1 min-w-[300px]">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border rounded-lg">
                <Button onClick={() => copyToClipboard(columnIndex)} className="mb-2 w-full">
                  {copiedColumns[columnIndex] ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                  {copiedColumns[columnIndex] ? 'Copied!' : 'Copy Column'}
                </Button>
                <table className="min-w-full">
                  <tbody>
                    {columnData.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="p-3 border-b border-r">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}