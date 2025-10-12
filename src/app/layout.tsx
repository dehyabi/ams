import React from 'react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AMS Dashboard',
  description: 'Activity Management System built with Next.js + TypeScript + TailwindCSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gray-50 text-gray-800 min-h-screen'>
        {children}
      </body>

    </html>
  )
}