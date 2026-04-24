import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-navy-900 overflow-hidden pt-[72px]">
      {/* Background image with overlay */}
      <Image
        src="/images/hero-bg-hillsboro.jpg"
        alt="Hillsboro Civic Center"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,104,227,0.82) 0%, rgba(0,54,128,0.90) 45%, rgba(0,0,4,0.95) 90%)',
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
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
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

          {/* Candidate identity — primary page H1 */}
          <h1 className="font-display font-black leading-[0.95] tracking-tight
            text-[clamp(3rem,7vw,5.5rem)] mb-4">
            <span className="text-patriot-red">JENNY</span>{' '}
            <span className="text-white">KAMPRATH</span>
          </h1>
          <p className="font-body font-semibold uppercase tracking-[3px]
            text-[clamp(1rem,1.5vw,1.25rem)] text-white mb-10">
            For Washington County Chair
          </p>

          {/* Campaign tagline (H2) */}
          <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.5rem)]
            leading-[1.1] text-white mb-10">
            Stop the Spending.{' '}
            <span className="block mt-1">
              Take Back{' '}
              <span className="text-patriot-red">Washington County.</span>
            </span>
          </h2>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://secure.anedot.com/b2002057-9fe3-4cb5-8e5a-93539cdc75d4/b2002057-9fe3-4cb5-8e5a-93539cdc75d4" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-body font-semibold
                text-base text-white bg-red-dark hover:bg-red-hover
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

            <p className="font-body text-base text-white/80 leading-relaxed mb-8 relative z-[1]">
              From day one, I will listen to taxpayers and residents —
              not insiders — and fight for them with transparency,
              accountability, and real leadership. It&apos;s time to
              take our county government back.
            </p>

            <Link
              href="https://secure.anedot.com/b2002057-9fe3-4cb5-8e5a-93539cdc75d4/b2002057-9fe3-4cb5-8e5a-93539cdc75d4"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center font-body font-semibold text-base
                text-white bg-red-dark hover:bg-red-hover py-4 rounded-lg
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
