import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reglas del truco',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
