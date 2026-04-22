import Image from 'next/image'
import Link from 'next/link'

const WhyRunning = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-off-white overflow-hidden">
      {/* Watermark */}
      <div aria-hidden="true" className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[20%]
        font-display font-black text-[140px] text-navy-900/[0.03] tracking-[8px]
        whitespace-nowrap select-none pointer-events-none hidden lg:block rotate-90">
        WHY
      </div>

      <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-16 lg:gap-24 items-center">

          {/* Left — visual block */}
          <div className="relative">
            <div className="bg-navy-900 rounded-2xl aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/jenny-portrait.webp"
                alt="Jenny Kamprath"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-navy-900/10" />
              {/* Floating circles inside */}
              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full
                border border-white/[0.08] z-[1]" />
              <div className="absolute top-8 right-12 w-16 h-16 rounded-full
                border border-white/[0.12] z-[1]" />
            </div>

            {/* Offset accent card */}
            <div className="absolute -bottom-6 right-2 sm:-right-4 lg:-right-8 bg-red-dark
              text-white rounded-xl px-5 py-3 sm:px-6 sm:py-4 shadow-xl z-[2]">
              <p className="font-body text-xs font-bold uppercase tracking-[2px] mb-1">
                Washington County
              </p>
              <p className="font-display font-bold text-xl">
                Taxpayer First
              </p>
            </div>
          </div>

          {/* Right — content (55%) */}
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[3px]
              text-red-dark mb-4">
              The Mission
            </p>

            <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)]
              leading-[1.15] text-navy-900 mb-8">
              Why I&#39;m Running
            </h2>

            <p className="font-body text-lg leading-[1.7] text-warm-600 mb-8 max-w-lg">
              I am not an entrenched incumbent or politician. I am not running
              to protect the status quo. I am running to represent the
              overlooked taxpayers of Washington County.
            </p>

            <p className="font-body text-lg leading-[1.7] text-warm-600 mb-10 max-w-lg">
              County leadership has treated taxpayers like a bottomless piggy
              bank — taxes go up every year while they claim there is never
              enough money. It&#39;s time for government to live within its
              means, just like families and businesses do.
            </p>

            <Link
              href="/meet-jenny"
              className="inline-flex items-center gap-3 font-body font-semibold
                text-base text-navy-800 border-2 border-navy-800
                hover:bg-navy-900 hover:text-white px-8 py-4 rounded-lg
                transition-all duration-200 group"
            >
              Read More About Jenny
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyRunning
