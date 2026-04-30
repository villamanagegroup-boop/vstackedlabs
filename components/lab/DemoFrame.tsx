type DemoFrameProps = {
  children: React.ReactNode
  label?: string
  className?: string
}

export default function DemoFrame({ children, label, className = '' }: DemoFrameProps) {
  return (
    <div
      className={`rounded-xl border border-[#E2DED8] bg-white shadow-[0_30px_80px_-30px_rgba(12,12,12,0.25)] overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E2DED8] bg-[#F6F4EF]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" aria-hidden="true" />
        {label && (
          <div className="ml-3 flex-1 text-center text-xs font-mono text-[#888580] truncate">
            {label}
          </div>
        )}
      </div>
      <div className="bg-white">{children}</div>
    </div>
  )
}
