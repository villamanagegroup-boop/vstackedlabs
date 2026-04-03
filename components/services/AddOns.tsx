const addons = [
  {
    name: 'Rush Delivery',
    description: 'Need it faster? We can compress timelines for an additional fee.',
    price: '+$300–$500',
  },
  {
    name: 'Extra Revision Round',
    description: 'An additional full round of revisions after your project is delivered.',
    price: '+$150',
  },
  {
    name: 'Team Training Session',
    description: 'A 90-minute session to train your team on any tool or workflow we build.',
    price: '+$200',
  },
  {
    name: 'Monthly Check-In',
    description: 'One 30-minute async or live check-in per month post-launch.',
    price: '+$100/mo',
  },
]

export default function AddOns() {
  return (
    <section className="py-16 border-t border-[#E2DED8]" aria-labelledby="addons-heading">
      <h2
        id="addons-heading"
        className="text-2xl text-[#0C0C0C] mb-2"
        style={{ fontFamily: 'var(--font-anton)' }}
      >
        ADD-ONS
      </h2>
      <p className="text-[#888580] text-sm mb-8 max-w-lg">
        Enhance any service tier with these optional extras.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {addons.map((addon) => (
          <div
            key={addon.name}
            className="bg-white border border-[#E2DED8] rounded-xl p-5"
          >
            <p
              className="text-sm text-[#0C0C0C] mb-1"
              style={{ fontFamily: 'var(--font-anton)' }}
            >
              {addon.name.toUpperCase()}
            </p>
            <p className="text-xs text-[#888580] leading-relaxed mb-3">{addon.description}</p>
            <p className="text-sm font-semibold text-[#1A1A2E]">{addon.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
