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
  title: 'Stackd Studios AI — Build. Test. Launch.',
  description: 'Stackd Studios AI is an AI-powered Build Lab & Venture Studio helping business owners and founders design, build, and launch intelligent systems — faster, smarter, and built to last.',
  keywords: ['AI development', 'AI-powered studio', 'venture studio', 'build lab', 'Next.js', 'Supabase', 'AI automation', 'founder'],
  openGraph: {
    title: 'Stackd Studios AI — Build. Test. Launch.',
    description: 'AI-powered. Built for founders & business owners. Operate smarter. Move faster.',
    type: 'website',
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
