'use client'

import { useState } from 'react';
import CSVViewer from './components/CSVViewer';
import FileUploadForm from './components/FileUploadForm';

export default function UploadPage() {
  const [csvData, setCsvData] = useState<string[][] | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold mb-8">Upload CSV File</h1>
      <FileUploadForm onDataLoaded={setCsvData} />
      {csvData && <CSVViewer data={csvData} />}
    </main>
  );
}
