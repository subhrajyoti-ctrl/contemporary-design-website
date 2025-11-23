import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { WhatsAppFAB } from '@/components/whatsapp-fab'
import { DiscordWidget } from '@/components/discord-widget'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Contemporary Solutions | Premium Surface Solutions',
  description: 'Premium surface coating, finishing, and interior design services with 40+ years of experience. Trusted by leading companies, designers, and corporates.',
  keywords: 'surface coating, wall painting, waterproofing, interior design, texture finishing, Contemporary Solutions',
  authors: [{ name: 'Contemporary Solutions' }],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Contemporary Solutions | Premium Surface Solutions',
    description: 'Premium surface coating, finishing, and interior design services',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
        <WhatsAppFAB />
        <DiscordWidget />
      </body>
    </html>
  )
}
