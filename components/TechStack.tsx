'use client'

const techs = [
  {
    name: 'Next.js',
    icon: (
      <svg height="20" viewBox="0 0 180 180" fill="currentColor" aria-hidden="true">
        <path d="M87.8 0C39.4 0 0 39.4 0 87.9s39.4 87.9 87.8 87.9c20.8 0 40-7.2 55.1-19.2L53.3 45.7v73.7H36.8V28.3h18.4l90.9 116.7C160.3 130.7 175.7 110.9 175.7 87.9 175.7 39.4 136.3 0 87.8 0zm30.5 124.5l-16.4-21V54.6h16.4v69.9z"/>
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg height="20" viewBox="0 0 841.9 595.3" fill="currentColor" aria-hidden="true">
        <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16.1-13 24.1-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zM334.2 378c-7.1 3.9-13.5 5.4-18.9 4.1-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-9-1.2-12.4-6.8zM505.7 214c-3.1-1.7-6.8-2.6-11.4-2.6V189c8.4 0 16 1.8 22.6 5.6 28.1 16.2 34.4 66.7 19.9 130.1-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9 4.5 0 9 1.2 12.4 6.9 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4z"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg height="20" viewBox="0 0 400 400" fill="currentColor" aria-hidden="true">
        <rect width="400" height="400" rx="50" fill="currentColor" className="opacity-0"/>
        <path d="M0 200V0h400v400H0" fill="transparent"/>
        <text x="30" y="280" fontSize="240" fontWeight="bold" fontFamily="Arial">TS</text>
      </svg>
    ),
    useText: true,
    text: 'TS',
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg height="18" viewBox="0 0 248 31" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.804-1.941-.482-3.329-1.882-4.864-3.431-2.502-2.525-5.398-5.446-11.722-5.446z"/>
      </svg>
    ),
  },
  {
    name: 'Supabase',
    icon: (
      <svg height="20" viewBox="0 0 109 113" fill="currentColor" aria-hidden="true">
        <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874L63.708 110.284z"/>
        <path opacity=".5" d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874L63.708 110.284z"/>
        <path d="M45.317 2.071C48.178-1.53 53.976.443 54.044 5.041l.592 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.071z"/>
      </svg>
    ),
  },
  {
    name: 'Anthropic',
    icon: (
      <svg height="18" viewBox="0 0 200 60" fill="currentColor" aria-hidden="true">
        <text x="0" y="48" fontSize="52" fontWeight="bold" fontFamily="Arial" letterSpacing="-2">A</text>
      </svg>
    ),
    useText: true,
    text: 'A',
  },
  {
    name: 'Stripe',
    icon: (
      <svg height="20" viewBox="0 0 60 60" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M28.024 15.473c0-2.925 2.403-4.05 6.38-4.05 5.707 0 12.916 1.727 18.623 4.804V3.228C47.12 1.178 41.21 0 35.27 0 21.067 0 11.7 7.365 11.7 19.652c0 19.246 26.506 16.157 26.506 24.43 0 3.453-3.006 4.578-7.2 4.578-6.238 0-14.202-2.573-20.49-6.033v12.858C16.104 57.805 22.74 60 29.406 60c14.554 0 24.567-7.172 24.567-19.627.031-20.762-26.95-17.037-26.95-24.9z"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    icon: (
      <svg height="18" viewBox="0 0 76 65" fill="currentColor" aria-hidden="true">
        <path d="M37.927 0L75.854 65H0L37.927 0z"/>
      </svg>
    ),
  },
  {
    name: 'Framer',
    icon: (
      <svg height="20" viewBox="0 0 14 21" fill="currentColor" aria-hidden="true">
        <path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z"/>
      </svg>
    ),
  },
  {
    name: 'Resend',
    icon: (
      <svg height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
]

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...techs, ...techs]
  return (
    <div
      className="flex items-center gap-12"
      style={{
        animation: `marquee${reverse ? 'Reverse' : ''} 30s linear infinite`,
        width: 'max-content',
      }}
    >
      {items.map((tech, i) => (
        <div
          key={`${tech.name}-${i}`}
          className="flex items-center gap-3 text-[#888580] hover:text-[#0C0C0C] transition-colors duration-200 shrink-0"
        >
          <span className="opacity-60">{tech.icon}</span>
          <span className="text-sm font-semibold tracking-wide whitespace-nowrap">{tech.name}</span>
        </div>
      ))}
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="py-12 bg-white border-t border-b border-[#E2DED8] overflow-hidden" aria-label="Technology stack">
      <div className="mb-8 text-center">
        <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.16em]">
          Built with best-in-class tools
        </p>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-pause:hover > * {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-pause flex overflow-hidden">
        <MarqueeTrack />
      </div>
    </section>
  )
}
