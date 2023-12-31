import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import '../styles/global.css'
 
export const metadata: Metadata = {
  title: 'La zone | GAMING',
  description: 'Generated by create next app',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-r from-hextech-blue-6 to-hextech-blue-7'>{children}</body>
    </html>
  )
}