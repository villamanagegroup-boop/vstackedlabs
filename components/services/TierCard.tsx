import Link from 'next/link'

export type TierData = {
  id: string
  name: string
  price: string
  description: string
  included: string[]
  track: 'A' | 'B' | 'Both'
}

type Props = {
  tier: TierData
  accentColor: string
  isElevated?: boolean
}

export default function TierCard({ tier, accentColor, isElevated = false }: Props) {
  const base = isElevated
    ? 'bg-[#1A1A2E] border-[#1A1A2E] text-white'
    : 'bg-white border-[#E2DED8] text-[#0C0C0C]'

  return (
    <div className={`rounded-2xl p-8 border ${base} flex flex-col`}>
      <div className="flex items-center justify-between mb-6">
        <span
          className="text-xs font-bold tracking-widest"
          style={{ fontFamily: 'var(--font-mono)', color: isElevated ? '#E8C547' : '#888580' }}
        >
          {tier.id}
        </span>
        <span
          className="text-xl font-semibold"
          style={{ color: isElevated ? '#E8C547' : accentColor }}
        >
          {tier.price}
        </span>
      </div>

      <h3
        className="text-2xl mb-3"
        style={{ fontFamily: 'var(--font-anton)', color: isElevated ? 'white' : '#0C0C0C' }}
      >
        {tier.name}
      </h3>

      <p className={`text-sm leading-relaxed mb-6 ${isElevated ? 'text-white/60' : 'text-[#888580]'}`}>
        {tier.description}
      </p>

      <div className="flex-1">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: isElevated ? '#E8C547' : accentColor }}
        >
          What&apos;s included
        </p>
        <ul className="space-y-2">
          {tier.included.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span style={{ color: isElevated ? '#E8C547' : accentColor }} className="mt-0.5 text-sm">✓</span>
              <span className={`text-sm ${isElevated ? 'text-white/70' : 'text-[#0C0C0C]'}`}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
        style={
          isElevated
            ? { background: '#E8C547', color: '#1A1A2E' }
            : { background: accentColor, color: 'white' }
        }
      >
        Get Started →
      </Link>
    </div>
  )
}
