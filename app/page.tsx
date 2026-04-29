import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'AI Build Lab & Venture Studio — Stackd Studios AI',
  description:
    'Stackd Studios AI is an AI-powered build lab and venture studio. We help business owners automate workflows and founders launch products — nationally, remotely, and built to last.',
  alternates: {
    canonical: 'https://www.stackdstudiosai.com',
  },
  openGraph: {
    title: 'AI Build Lab & Venture Studio — Stackd Studios AI',
    description:
      'AI-powered systems for business owners and founders. Automate workflows, launch products, and build ventures — faster.',
    url: 'https://www.stackdstudiosai.com',
  },
}
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import TechStack from '@/components/TechStack'
import TracksHome from '@/components/TracksHome'
import HowItWorks from '@/components/HowItWorks'
import BusinessBrainTeaser from '@/components/BusinessBrainTeaser'
import OurWork from '@/components/OurWork'
import Testimonials from '@/components/Testimonials'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import ToolkitBanner from '@/components/ToolkitBanner'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TechStack />
        <TracksHome />
        <ToolkitBanner variant="yellow" />
        <HowItWorks />
        <BusinessBrainTeaser />
        <OurWork />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
