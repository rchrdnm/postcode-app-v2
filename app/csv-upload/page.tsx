'use client'

import { useState } from 'react'
import CSVViewer from '../components/CSVViewer'
import FileUploadForm from '../components/FileUploadForm'

export interface CSVViewerProps {
  data?: string[][];
  headers?: string[];
}

export default function CSVUpload() {
  const [csvData, setCsvData] = useState<string[][] | null>(null)

  const handleDataLoaded = (parsedData: string[][]) => {
    setCsvData(parsedData)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">CSV File Viewer</h1>
      <FileUploadForm onDataLoaded={handleDataLoaded} />
      {csvData && (
        <div className="space-y-4">
          <CSVViewer data={csvData} />
        </div>
      )}
    </div>
  )
}