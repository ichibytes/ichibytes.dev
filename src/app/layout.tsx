import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ichibytes',
  description: 'Ezequiel\'s personal website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <script defer data-domain="ichibytes.dev" src="https://plausible.ichibytes.dev/js/script.js"></script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
