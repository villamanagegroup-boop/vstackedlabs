import type { Metadata } from 'next'
import { Anton, Instrument_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Stackd Studio — Build Lab & Creative Venture Studio',
  description: 'Stackd Studio designs, builds, and launches intelligent systems and ventures. AI-powered tools, automations, and full venture builds for business owners and founders.',
  keywords: ['AI development', 'venture studio', 'web app development', 'automation', 'Next.js', 'Supabase'],
  openGraph: {
    title: 'Stackd Studio — Build Lab & Creative Venture Studio',
    description: 'Giving business owners and founders the power to operate smarter, move faster, and build something that lasts.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#F6F4EF] text-[#0C0C0C] font-[family-name:var(--font-sans)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
