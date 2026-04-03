import Link from 'next/link'

const tracks = [
  {
    id: 'a',
    label: 'Track A',
    audience: 'Business Owners',
    headline: 'OPERATE SMARTER WITH AI',
    description: 'You have a running business and want to use AI to streamline operations, reduce manual work, and build tools that give you back time.',
    services: ['AI Quick Setup', 'AI Business Build-Out', 'Micro Tool Build', 'AI Retainer'],
    accentColor: '#1A4A7A',
    tagBg: 'rgba(26,74,122,0.08)',
    pillBg: 'rgba(26,74,122,0.1)',
    pillColor: '#1A4A7A',
    borderColor: '#1A4A7A',
  },
  {
    id: 'b',
    label: 'Track B',
    audience: 'Founders',
    headline: 'BUILD YOUR VENTURE',
    description: 'You have an idea — a product, a platform, a company — and you need a build partner to turn the vision into something real and launchable.',
    services: ['Strategy Session', 'Founder Build Sprint', 'Venture Launch Package'],
    accentColor: '#F97316',
    tagBg: 'rgba(249,115,22,0.08)',
    pillBg: 'rgba(249,115,22,0.1)',
    pillColor: '#F97316',
    borderColor: '#F97316',
  },
]

export default function TwoTracks() {
  return (
    <section className="py-24 bg-[#F6F4EF]" aria-labelledby="tracks-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            id="tracks-heading"
            className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            TWO TRACKS. ONE STUDIO.
          </h2>
          <p className="text-[#888580] text-lg max-w-2xl mx-auto">
            Whether you&apos;re running an established business or building something from scratch, Stackd Studio has a path built for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="bg-white rounded-2xl p-8 border border-[#E2DED8]"
              style={{ borderLeft: `4px solid ${track.borderColor}` }}
            >
              <div
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ background: track.tagBg, color: track.accentColor }}
              >
                {track.label} — {track.audience}
              </div>

              <h3
                className="text-2xl text-[#0C0C0C] mb-3"
                style={{ fontFamily: 'var(--font-anton)' }}
              >
                {track.headline}
              </h3>

              <p className="text-[#888580] text-sm leading-relaxed mb-6">
                {track.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {track.services.map((service) => (
                  <span
                    key={service}
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: track.pillBg, color: track.accentColor }}
                  >
                    {service}
                  </span>
                ))}
              </div>

              <Link
                href="/services"
                className="text-sm font-semibold transition-colors"
                style={{ color: track.accentColor }}
              >
                See services →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
