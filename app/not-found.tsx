'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar darkHero />
      <main className="bg-[#0C0C0C] min-h-screen flex flex-col">
        <section className="flex-1 flex items-center justify-center px-4 py-32">
          <div className="max-w-6xl w-full grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <p className="font-mono text-[#FFD84D] text-xs tracking-[0.18em] uppercase mb-6 opacity-80">
                // 404 — page not found
              </p>
              <h1 className="text-[clamp(72px,14vw,160px)] text-white leading-none font-[family-name:var(--font-anton)] tracking-tight mb-6 opacity-10 select-none">
                404
              </h1>
              <h2 className="text-[clamp(28px,4vw,48px)] text-white leading-[1.1] -mt-16 mb-6">
                This page doesn&apos;t exist.<br />
                <span className="text-[#FFD84D]">Yet.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-md">
                You may have followed a broken link or typed the wrong address. Head back and keep building.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center bg-[#FFD84D] hover:bg-[#E8C030] text-[#0C0C0C] font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
                >
                  Back to Home
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border-2 border-white/20 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200 min-h-[44px]"
                >
                  View Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white/20 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200 min-h-[44px]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] mx-auto lg:mx-0 shrink-0">
              <Image
                src="/stacka.png"
                alt="Stacka, the Stackd Studios AI mascot, waving"
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 340px, 260px"
                className="object-contain drop-shadow-[0_20px_40px_rgba(255,216,77,0.15)]"
                priority
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
