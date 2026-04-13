import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import TechStack from '@/components/TechStack'
import Tracks from '@/components/Tracks'
import HowItWorks from '@/components/HowItWorks'
import BusinessBrainTeaser from '@/components/BusinessBrainTeaser'
import OurWork from '@/components/OurWork'
import Testimonials from '@/components/Testimonials'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TechStack />
        <Tracks />
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
