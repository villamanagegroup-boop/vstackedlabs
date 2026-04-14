import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F6F4EF] min-h-screen">
        <section className="pt-32 pb-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Icon */}
            <div className="w-20 h-20 bg-[#0C0C0C] rounded-full flex items-center justify-center mx-auto mb-8">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <path d="M8 18l7 7 13-14" stroke="#E8C547" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <h1 className="text-[clamp(32px,5vw,56px)] text-[#0C0C0C] leading-[1.0] mb-4">
              You&apos;re all set.
            </h1>
            <p className="text-[#888580] text-xl leading-relaxed mb-4">
              Your purchase was successful. Check your email for a receipt and download link.
            </p>
            <p className="text-[#888580] text-sm mb-10">
              Didn&apos;t get an email? Reach out at{' '}
              <a href="mailto:Chanel@stackdstudiosai.com" className="text-[#0C0C0C] font-semibold hover:text-[#E8C547] transition-colors">
                Chanel@stackdstudiosai.com
              </a>
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/store"
                className="inline-flex items-center justify-center bg-[#0C0C0C] hover:bg-[#E8C547] text-white hover:text-[#0C0C0C] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
              >
                Back to Store
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-[#0C0C0C] text-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 min-h-[44px]"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
