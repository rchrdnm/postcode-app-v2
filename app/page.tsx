'use client'

import { useState } from 'react'
import FileUploadForm from './components/FileUploadForm'
import { Card, CardHeader, CardTitle, CardDescription } from ".//components/ui/Card" // Adjusted path or filename
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Your Workspace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/csv-upload">
          <Card>
            <CardHeader>
              <CardTitle>CSV Upload</CardTitle>
              <CardDescription>Upload and view CSV files in a table format</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/google-sheet">
          <Card>
            <CardHeader>
              <CardTitle>Google Sheet</CardTitle>
              <CardDescription>View and interact with Google Sheets</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  )
}