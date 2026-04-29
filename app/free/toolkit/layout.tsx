import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Small Business AI Toolkit — Free Resource',
  description:
    '50+ free and low-cost AI tools for small businesses, organized by use case. Updated quarterly. Yours forever.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function ToolkitLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: '#FFD84D',
        color: '#0C0C0C',
        fontFamily: 'var(--font-instrument-sans), system-ui, -apple-system, sans-serif',
      }}
    >
      {children}
    </div>
  )
}
