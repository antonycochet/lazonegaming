import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'La zone | TFT',
  description: 'Generated by create next app',
}
 
export default function TftLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      {children}
  )
}