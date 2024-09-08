'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CSVViewer from '@/components/CSVViewer'

export default function GoogleSheet() {
  const [sheetId, setSheetId] = useState('')
  const [sheetData, setSheetData] = useState<string[][] | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // This is a mock-up. In a real application, you would fetch data from Google Sheets API here.
    setSheetData([
      ['Name', 'Age', 'City'],
      ['John Doe', '30', 'New York'],
      ['Jane Smith', '25', 'London'],
      ['Bob Johnson', '45', 'Paris'],
    ])
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Google Sheet Viewer</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          value={sheetId}
          onChange={(e) => setSheetId(e.target.value)}
          placeholder="Enter Google Sheet ID"
          required
        />
        <Button type="submit">
          Load Sheet
        </Button>
      </form>
      {sheetData && (
        <CSVViewer data={sheetData.slice(1)} headers={sheetData[0]} />
      )}
    </div>
  )
}