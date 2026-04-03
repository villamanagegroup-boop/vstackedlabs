import TierCard, { TierData } from './TierCard'

type Props = {
  id: string
  track: 'A' | 'B'
  label: string
  audience: string
  description: string
  tiers: TierData[]
  accentColor: string
  borderColor: string
}

export default function TrackSection({
  id,
  track,
  label,
  audience,
  description,
  tiers,
  accentColor,
  borderColor,
}: Props) {
  return (
    <section id={id} className="py-16" aria-labelledby={`track-${track}-heading`}>
      <div className="mb-10 pl-5" style={{ borderLeft: `4px solid ${borderColor}` }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: accentColor }}>
          {label}
        </p>
        <h2
          id={`track-${track}-heading`}
          className="text-[clamp(24px,3.5vw,36px)] text-[#0C0C0C] mb-2"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          {audience.toUpperCase()}
        </h2>
        <p className="text-[#888580] text-base max-w-xl">{description}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {tiers.map((tier) => (
          <TierCard
            key={tier.id}
            tier={tier}
            accentColor={accentColor}
            isElevated={tier.track === 'Both'}
          />
        ))}
      </div>
    </section>
  )
}
