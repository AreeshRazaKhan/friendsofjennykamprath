import Image from 'next/image'
import Link from 'next/link'

const WhyRunning = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-off-white overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[20%]
        font-display font-black text-[140px] text-navy-900/[0.03] tracking-[8px]
        whitespace-nowrap select-none pointer-events-none hidden lg:block rotate-90">
        WHY
      </div>

      <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-16 lg:gap-24 items-center">

          {/* Left — visual block */}
          <div className="relative">
            <div className="bg-navy-900 rounded-2xl aspect-[4/3] relative overflow-hidden">
              <Image
                src="/images/community.jpg"
                alt="Community members gathering together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-navy-900/40" />
              {/* Edge stripe */}
              <div className="absolute right-0 top-0 bottom-0 w-2 z-[1]"
                style={{
                  background: 'linear-gradient(180deg, #C41E3A 0%, #C41E3A 40%, #1B3A5C 40%, #1B3A5C 100%)',
                }}
              />
              {/* Floating circles inside */}
              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full
                border border-white/[0.08] z-[1]" />
              <div className="absolute top-8 right-12 w-16 h-16 rounded-full
                border border-white/[0.12] z-[1]" />
            </div>

            {/* Offset accent card */}
            <div className="absolute -bottom-6 right-2 sm:-right-4 lg:-right-8 bg-patriot-red
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
              text-patriot-red mb-4">
              The Mission
            </p>

            <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)]
              leading-[1.15] text-navy-900 mb-8">
              Why I&#39;m Running
            </h2>

            <p className="font-body text-lg leading-[1.7] text-warm-600 mb-8 max-w-lg">
              Washington County spending is out of control. Taxpayers are being
              treated like a bottomless ATM while basic services are used as
              leverage to demand more money.
            </p>

            <p className="font-body text-lg leading-[1.7] text-warm-600 mb-10 max-w-lg">
              I&#39;m running to restore accountability, say no to new taxes and
              fees, and return government to the people who actually pay for
              it — working families, seniors, and small business owners.
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
