'use client'

import { useState } from 'react'
import FileUploadForm from './components/FileUploadForm'
import { Card, CardHeader, CardTitle, CardDescription } from './components/ui/card' // Adjusted path to match casing
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to my Postcode app</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/csv-upload">
          <Card>
            <CardHeader>
              <CardTitle>CSV Upload</CardTitle>
              <CardDescription>Upload and view CSV files in a table format</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/sendle">
          <Card>
            <CardHeader>
              <CardTitle>Sendle Postcode List</CardTitle>
              <CardDescription>View the current Sendle postcode list</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  )
}