import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export const metadata = {
  title: 'Postcode Tools',
  description: 'A Notion-like app with CSV upload and Google Sheet rendering',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <nav className="w-64 bg-white border-r">
            <div className="p-4">
              <h1 className="text-xl font-semibold">My Workspace</h1>
            </div>
            <ul className="py-4">
              <li>
                <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</Link>
              </li>
              <li>
                <Link href="/csv-upload" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">CSV Upload</Link>
              </li>
              <li>
                <Link href="/sendle-postcode" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Sendle Postcode List</Link>
              </li>
            </ul>
          </nav>
          <main className="flex-1 p-8 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}