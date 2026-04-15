import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Book a Free AI Strategy Call',
  description:
    "Book a free 30-minute discovery call with Stackd Studios AI. We'll map out what AI can do for your business or product — no pitch, just strategy.",
  alternates: {
    canonical: 'https://www.stackdstudiosai.com/contact',
  },
  openGraph: {
    title: 'Book a Free AI Strategy Call — Stackd Studios AI',
    description:
      "Free 30-minute discovery call. We'll map out exactly what AI can do for your business or product right now.",
    url: 'https://www.stackdstudiosai.com/contact',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Stackd Studios AI',
  url: 'https://www.stackdstudiosai.com',
  email: 'Chanel@stackdstudiosai.com',
  areaServed: 'US',
  serviceType: 'AI Automation & Venture Studio',
  priceRange: '$$',
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  )
}
