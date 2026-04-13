import type { Metadata } from 'next'
import { Anton, Instrument_Sans } from 'next/font/google'
import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'
import CursorGlow from '@/components/CursorGlow'
import ToastProvider from '@/components/ToastProvider'

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
  title: 'VStacked Labs — Build. Test. Launch.',
  description: 'VStacked Labs helps business owners and founders design, build, and launch intelligent systems — powered by AI, craft, and strategic thinking.',
  keywords: ['AI development', 'venture studio', 'build lab', 'Next.js', 'Supabase', 'AI automation', 'founder'],
  openGraph: {
    title: 'VStacked Labs — Build. Test. Launch.',
    description: 'Operate smarter. Move faster. Build something that lasts.',
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
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  )
}
