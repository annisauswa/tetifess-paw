import './globals.css'

import { Inter } from 'next/font/google'

const inter ="font-roboto"

export const metadata = {
  title: 'tetifess',
  description: 'teti safe place to confess',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
