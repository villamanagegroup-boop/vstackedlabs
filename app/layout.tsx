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
    'AI systems for entrepreneurs',
    'automate business workflows',
    'launch AI product',
    'AI consulting',
    'Chanel Gray',
    'Stackd Studios',
    'Hicks Virtual Solutions',
  ],
  authors: [{ name: 'Chanel Gray', url: 'https://www.stackdstudiosai.com/about' }],
  creator: 'Chanel Gray',
  publisher: 'Stackd Studios AI',
  alternates: {
    canonical: 'https://www.stackdstudiosai.com',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'Stackd Studios AI — AI Build Lab & Venture Studio',
    description:
      'AI-powered systems for business owners and founders. Automate workflows, launch products, and build ventures — faster.',
    type: 'website',
    url: 'https://www.stackdstudiosai.com',
    siteName: 'Stackd Studios AI',
    locale: 'en_US',
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
  category: 'technology',
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
                  '@id': 'https://www.stackdstudiosai.com/#organization',
                  name: 'Stackd Studios AI',
                  alternateName: 'Stackd Studios',
                  url: 'https://www.stackdstudiosai.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.stackdstudiosai.com/favicon.png',
                    width: 512,
                    height: 512,
                  },
                  email: 'Chanel@stackdstudiosai.com',
                  founder: {
                    '@type': 'Person',
                    name: 'Chanel Gray',
                    jobTitle: 'Founder & CEO',
                    worksFor: { '@id': 'https://www.stackdstudiosai.com/#organization' },
                  },
                  description: 'AI-powered build lab and venture studio helping business owners automate workflows and founders launch products.',
                  knowsAbout: ['Artificial Intelligence', 'Workflow Automation', 'Product Development', 'Software Engineering', 'AI Consulting'],
                  areaServed: 'United States',
                  serviceType: ['AI Automation', 'Product Development', 'Venture Studio'],
                  sameAs: [],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.stackdstudiosai.com/#website',
                  url: 'https://www.stackdstudiosai.com',
                  name: 'Stackd Studios AI',
                  publisher: { '@id': 'https://www.stackdstudiosai.com/#organization' },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://www.stackdstudiosai.com/?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'ProfessionalService',
                  '@id': 'https://www.stackdstudiosai.com/#service',
                  name: 'Stackd Studios AI',
                  url: 'https://www.stackdstudiosai.com',
                  image: 'https://www.stackdstudiosai.com/og-image.png',
                  priceRange: '$$',
                  telephone: '',
                  email: 'Chanel@stackdstudiosai.com',
                  address: {
                    '@type': 'PostalAddress',
                    addressCountry: 'US',
                  },
                  openingHours: 'Mo-Fr 09:00-18:00',
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'AI Services',
                    itemListElement: [
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation Systems' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom AI Product Development' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Strategy Consulting' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Venture Studio Partnership' } },
                    ],
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
