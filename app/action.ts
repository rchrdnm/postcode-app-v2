'use server'

export async function uploadFile(formData: FormData): Promise<string> {
  const file = formData.get('file') as File
  if (!file) {
    throw new Error('No file uploaded')
  }

  const contents = await file.text()
  return contents
}