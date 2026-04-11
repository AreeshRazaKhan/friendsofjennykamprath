import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-navy-900 overflow-hidden pt-[72px]">
      {/* Background image with overlay */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Oregon mountain landscape"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy-900/80" />

      {/* Edge stripe */}
      <div className="absolute right-0 top-0 bottom-0 w-2 z-10"
        style={{
          background: 'linear-gradient(180deg, #C41E3A 0%, #C41E3A 40%, #1B3A5C 40%, #1B3A5C 100%)',
        }}
      />

      {/* Floating circle accents */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full
        border border-white/[0.06]" />
      <div className="absolute bottom-32 -left-16 w-[250px] h-[250px] rounded-full
        border border-white/[0.04]" />
      <div className="absolute top-1/3 right-[15%] w-20 h-20 rounded-full
        border border-white/[0.1]" />
      <div className="absolute bottom-[20%] right-[30%] w-32 h-32 rounded-full
        border border-white/[0.05]" />

      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        font-display font-black text-[180px] text-white/[0.02] tracking-[12px]
        whitespace-nowrap select-none pointer-events-none hidden lg:block">
        KAMPRATH
      </div>

      {/* Content */}
      <div className="relative z-[5] mx-auto max-w-[1290px] px-6 lg:px-10
        flex flex-col lg:flex-row items-center min-h-[calc(100vh-72px)]">

        {/* Left — 55% content */}
        <div className="flex-[0_0_55%] py-20 lg:py-0 lg:pr-16">
          <div className="w-16 h-[3px] bg-patriot-red mb-8" />

          <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-6">
            For Washington County Chair
          </p>

          <h1 className="font-display font-black text-[clamp(2.5rem,5vw,3.5rem)]
            leading-[1.08] text-white mb-6">
            Stop the Spending.{' '}
            <span className="block mt-1">
              Take Back{' '}
              <span className="text-patriot-red">Washington County.</span>
            </span>
          </h1>

          <p className="font-body text-lg leading-relaxed text-white/70 max-w-xl mb-10">
            Jenny Kamprath — a no-nonsense leader focused on fiscal
            responsibility, safe neighborhoods, and common-sense government.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://secure.anedot.com/b2002057-9fe3-4cb5-8e5a-93539cdc75d4/b2002057-9fe3-4cb5-8e5a-93539cdc75d4" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-body font-semibold
                text-base text-white bg-patriot-red hover:bg-red-dark
                px-10 py-4 rounded-lg transition-colors duration-200"
            >
              Donate
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center justify-center font-body font-semibold
                text-base text-white bg-transparent border-2 border-white/20
                hover:border-white/50 px-10 py-4 rounded-lg transition-all duration-200"
            >
              Get Involved
            </Link>
          </div>
        </div>

        {/* Right — 45% promise card */}
        <div className="flex-[0_0_45%] flex justify-center lg:justify-end w-full pb-20 lg:pb-0">
          <div className="w-full max-w-md mx-auto lg:mx-0 bg-white/[0.05] backdrop-blur-sm
            border border-white/[0.1] rounded-2xl p-8 lg:p-10 relative overflow-hidden">
            {/* Card floating circle */}
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full
              border border-white/[0.08]" />

            <h2 className="font-display font-bold text-2xl text-white mb-6 relative z-[1]">
              Jenny&apos;s Promise
            </h2>

            <ul className="space-y-4 mb-8 relative z-[1]">
              {[
                'Stop overspending — say NO to new taxes',
                'Cut the red tape strangling building and business',
                'Support public safety, no transient housing in suburban neighborhoods',
                'Listen to taxpayers and residents — not insiders',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-patriot-red" />
                  <span className="font-body text-base text-white/70 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="font-body text-sm text-white/40 leading-relaxed mb-8 relative z-[1]">
              I promise a new vision, transparency, no new taxes, and
              leadership that will fight for the rights of taxpayers.
              It&apos;s time to take our county government back.
            </p>

            <Link
              href="https://secure.anedot.com/b2002057-9fe3-4cb5-8e5a-93539cdc75d4/b2002057-9fe3-4cb5-8e5a-93539cdc75d4"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center font-body font-semibold text-base
                text-white bg-patriot-red hover:bg-red-dark py-4 rounded-lg
                transition-colors duration-200 relative z-[1]"
            >
              Donate to the Campaign
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
