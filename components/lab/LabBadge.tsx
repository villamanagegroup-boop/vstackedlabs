type LabBadgeProps = {
  variant?: 'live' | 'soon'
  className?: string
}

export default function LabBadge({ variant = 'live', className = '' }: LabBadgeProps) {
  if (variant === 'soon') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E2DED8] text-[#0C0C0C] text-[11px] font-semibold tracking-wide uppercase ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#888580]" aria-hidden="true" />
        Coming online
      </div>
    )
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0C0C0C] text-white text-[11px] font-semibold tracking-wide uppercase ${className}`}
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD84D] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD84D]" />
      </span>
      Live demo · Mock data
    </div>
  )
}
