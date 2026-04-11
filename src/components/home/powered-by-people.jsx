import Image from 'next/image'

const PoweredByPeople = () => {
  return (
    <section className="relative py-24 lg:py-40 bg-off-white overflow-hidden">
      {/* Background image — right side on desktop */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 overflow-hidden">
        <Image
          src="/images/volunteers.jpg"
          alt="Volunteers and community supporters"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-off-white/90 lg:bg-gradient-to-r
          lg:from-off-white lg:via-off-white/80 lg:to-off-white/30" />
      </div>
      {/* Large decorative circle — offset */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full
        border border-navy-900/[0.04]" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4
        w-[350px] h-[350px] rounded-full bg-patriot-red/[0.03]" />

      <div className="relative z-[1] mx-auto max-w-[1290px] px-6 lg:px-10">
        {/* Asymmetric: text pushed right */}
        <div className="lg:ml-[15%] max-w-3xl">
          <div className="w-16 h-[3px] bg-patriot-red mb-8" />

          <h2 className="font-display font-black text-[clamp(2.2rem,5vw,3.5rem)]
            leading-[1.08] text-navy-900 mb-8">
            Powered by the People.{' '}
            <span className="text-patriot-red">Not Political Insiders.</span>
          </h2>

          <p className="font-body text-xl leading-[1.7] text-warm-600 max-w-2xl">
            This campaign has no bureaucratic or organizational endorsements.
            It is powered by the people. Jenny has no allegiance to political
            insiders or special interests — her sole interest is representing
            Washington County citizens.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PoweredByPeople
