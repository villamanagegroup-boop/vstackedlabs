import type { Metadata } from 'next'
import { Anton, Instrument_Sans } from 'next/font/google'
import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'
import CursorGlow from '@/components/CursorGlow'
import ToastProvider from '@/components/ToastProvider'
import { CartProvider } from '@/components/CartContext'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-instrument-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stackdstudiosai.com'),
  title: {
    default: 'Stackd Studios AI — AI Build Lab & Venture Studio',
    template: '%s | Stackd Studios AI',
  },
  description:
    'Stackd Studios AI is an AI-powered build lab and venture studio helping business owners automate workflows and founders launch products. National. Remote. Results-driven.',
  keywords: [
    'AI build lab',
    'AI venture studio',
    'AI automation services',
    'AI automation for small business',
    'custom AI tools',
    'AI agency',
    'AI workflow automation',
    'book AI consultation',
  ],
  openGraph: {
    title: 'Stackd Studios AI — AI Build Lab & Venture Studio',
    description:
      'AI-powered systems for business owners and founders. Automate workflows, launch products, and build ventures — faster.',
    type: 'website',
    url: 'https://www.stackdstudiosai.com',
    siteName: 'Stackd Studios AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stackd Studios AI — AI Build Lab & Venture Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stackd Studios AI — AI Build Lab & Venture Studio',
    description:
      'AI-powered build lab for business owners and founders. Automate. Build. Launch.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${anton.variable} ${instrumentSans.variable}`}>
      <body className="font-[family-name:var(--font-instrument-sans)] bg-[#F6F4EF] text-[#0C0C0C] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  name: 'Stackd Studios AI',
                  url: 'https://www.stackdstudiosai.com',
                  logo: 'https://www.stackdstudiosai.com/logo.png',
                  email: 'Chanel@stackdstudiosai.com',
                  founder: { '@type': 'Person', name: 'Chanel Gray' },
                  sameAs: [],
                },
                {
                  '@type': 'WebSite',
                  url: 'https://www.stackdstudiosai.com',
                  name: 'Stackd Studios AI',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://www.stackdstudiosai.com/?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
              ],
            }),
          }}
        />
        <ScrollProgress />
        <CursorGlow />
        <CartProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  )
}
