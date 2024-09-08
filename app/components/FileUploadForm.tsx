'use client'

import { useState } from 'react'
import { uploadFile } from '../action'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { parseCSV } from '../lib/csvUtils'
import { useRouter } from 'next/navigation'; // 
import { cn } from "../lib/utils"


interface FileUploadFormProps {
  onDataLoaded: (data: string[][]) => void
}

export default function FileUploadForm({ onDataLoaded }: FileUploadFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter(); // Initialize router

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    try {
      const result = await uploadFile(formData);
      const parsedData = parseCSV(result);
     // console.log(parsedData); // Log the parsed data
      onDataLoaded(parsedData); // Load data without routing
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs mb-8">
      <div className="mb-4">
        <Input
          type="file"
          id="file"
          name="file"
          accept=".csv"
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Uploading...' : 'Upload and View'}
      </Button>
    </form>
  )
}