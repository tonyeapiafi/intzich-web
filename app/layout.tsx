import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Intzich | Business Strategy & Digital Advisory | Ontario',
  description:
    'Intzich helps construction, trades, and professional services companies in Ontario build stronger organizations and a powerful digital presence. Book a complimentary Strategy Session.',
  openGraph: {
    title: 'Intzich | Business Strategy & Digital Advisory | Ontario',
    description:
      'Intzich helps construction, trades, and professional services companies in Ontario build stronger organizations and a powerful digital presence.',
    url: 'https://intzich.com',
    siteName: 'Intzich',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intzich | Business Strategy & Digital Advisory | Ontario',
    description:
      'Strategy and digital advisory for construction, trades, and professional services businesses in Ontario.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
