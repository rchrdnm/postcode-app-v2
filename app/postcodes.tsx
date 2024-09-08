'use client'

import { useEffect, useState } from 'react';
import { fetchGoogleSheetData } from './lib/googleSheetsUtils'; // Import the function to fetch data

export default function PostcodesPage() {
  const [postcodes, setPostcodes] = useState<string[][] | null>(null);
  const [loading, setLoading] = useState(true);
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1Nbmry8DMH0tWN-T83PSIRpvB31i_twp3Kn-0eJdE4Jg/pub?output=csv'; // Public CSV link

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGoogleSheetData(sheetUrl);
        setPostcodes(data);
      } catch (error) {
        console.error('Error fetching postcodes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sheetUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Postcodes</h1>
      {postcodes && postcodes.length > 0 ? (
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border p-2">Postcode</th>
              {/* Add more headers if needed */}
            </tr>
          </thead>
          <tbody>
            {postcodes.map((row, index) => (
              <tr key={index}>
                <td className="border p-2">{row[0]}</td>
                {/* Render more cells if needed */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No postcodes found.</p>
      )}
    </div>
  );
}
