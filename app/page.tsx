import Hero from '@/components/home/Hero'
import TwoTracks from '@/components/home/TwoTracks'
import ServicesPreview from '@/components/home/ServicesPreview'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'
import CTAStrip from '@/components/home/CTAStrip'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TwoTracks />
      <ServicesPreview />
      <HowItWorks />
      <Testimonials />
      <CTAStrip />
    </>
  )
}
