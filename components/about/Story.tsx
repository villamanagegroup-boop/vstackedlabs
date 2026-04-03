export default function Story() {
  return (
    <section className="py-16 border-b border-[#E2DED8]" aria-labelledby="story-heading">
      <h2
        id="story-heading"
        className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-8"
        style={{ fontFamily: 'var(--font-anton)' }}
      >
        OUR STORY
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-[#0C0C0C] text-base leading-relaxed">
          <p>
            Stackd Studio was built on a simple frustration: too many smart, capable business owners and founders were stuck doing things the slow way — managing operations manually, building nothing with the tools they had, and watching their best ideas sit in a notes app waiting for the right moment.
          </p>
          <p>
            Chanel Hicks founded Stackd Studio to be the build partner she wished she had — one that combines genuine technical depth with strategic thinking, moves at the speed of a startup, and treats every project like it actually matters. Based in Midlothian, VA, and operating as part of the Hicks Virtual Solutions portfolio, Stackd Studio is built for the people who are ready to stop waiting and start building.
          </p>
        </div>

        <blockquote className="border-l-4 border-[#E8C547] bg-[#1A1A2E] rounded-xl p-8 text-white">
          <p className="text-lg leading-relaxed font-medium">
            &ldquo;To design, build, and launch intelligent systems and ventures — giving business owners and founders the power to operate smarter, move faster, and build something that lasts, powered by AI, craft, and strategic thinking.&rdquo;
          </p>
          <footer className="mt-6">
            <p
              className="text-[#E8C547] text-sm"
              style={{ fontFamily: 'var(--font-anton)' }}
            >
              OUR MISSION
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
