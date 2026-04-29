// app/industries/page.tsx
import type { Metadata } from 'next'
import IndustriesContent from './IndustriesContent'

export const metadata: Metadata = {
  title: 'Industries We Serve — AI Automation Built for Your World',
  description:
    'Stackd Studios AI builds done-for-you AI systems for behavioral health practices, dance studios, real estate, staffing, government, nonprofits, creators, field services, and more.',
  alternates: {
    canonical: 'https://www.stackdstudiosai.com/industries',
  },
  openGraph: {
    title: 'Industries We Serve — Stackd Studios AI',
    description:
      'AI implementation for behavioral health, real estate, staffing, creators, nonprofits, and more. We speak your industry.',
    url: 'https://www.stackdstudiosai.com/industries',
  },
}

export default function IndustriesPage() {
  return <IndustriesContent />
}
