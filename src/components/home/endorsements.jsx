import Image from 'next/image'

const ENDORSEMENTS = [
  {
    name: 'Oregon Taxpayers United',
    type: 'Organization',
    quote: 'We need leaders who will say no to new taxes. Jenny Kamprath has proven she will hold the line for taxpayers.',
  },
  {
    name: 'Washington County Small Business Alliance',
    type: 'Organization',
    quote: 'Jenny is the only candidate who truly understands the burdens regulations place on local businesses. She has our full endorsement.',
  },
  {
    name: 'Sheriff Tom Henderson (Ret.)',
    type: 'Community Leader',
    quote: 'Jenny\'s commitment to public safety is unwavering. She\'ll make sure our first responders have the support they need.',
  },
  {
    name: 'Pastor Rebecca Owens',
    type: 'Community Leader',
    quote: 'Jenny genuinely cares about our neighborhoods and families. She listens, and she acts. That\'s rare in politics.',
  },
]

const Endorsements = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-warm-50 overflow-hidden">
      {/* Floating circles */}
      <div className="absolute top-20 right-[5%] w-36 h-36 rounded-full
        border border-navy-900/[0.04]" />
      <div className="absolute -bottom-16 left-[10%] w-52 h-52 rounded-full
        border border-navy-900/[0.03]" />

      <div className="relative z-[1] mx-auto max-w-[1290px] px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="font-body text-xs font-bold uppercase tracking-[3px]
            text-patriot-red mb-4">
            Endorsements
          </p>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)]
            leading-[1.15] text-navy-900 mb-4">
            Endorsed by People Who Put Community First
          </h2>
          <p className="font-body text-lg text-warm-600 leading-relaxed">
            Leaders across Washington County are backing Jenny because they know
            she&#39;ll fight for fiscal responsibility and safe neighborhoods.
          </p>
        </div>

        {/* Asymmetric 2-column grid with varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENDORSEMENTS.map((endorsement, idx) => (
            <div
              key={idx}
              className={`relative bg-white border border-warm-100 rounded-2xl
                p-8 lg:p-10 overflow-hidden
                ${idx === 0 ? 'md:col-span-2 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-10 lg:items-center' : ''}
                `}
            >
              {/* Decorative accent */}
              {idx === 0 && (
                <div className="hidden lg:block">
                  <div className="bg-navy-900 rounded-xl h-full min-h-[180px]
                    relative overflow-hidden flex items-center justify-center">
                    <Image
                      src="/images/neighborhood.jpg"
                      alt="Suburban neighborhood in Washington County"
                      fill
                      className="object-cover opacity-40"
                      sizes="33vw"
                    />
                    <div className="absolute right-0 top-0 bottom-0 w-1.5 z-[1]"
                      style={{
                        background: 'linear-gradient(180deg, #C41E3A 0%, #C41E3A 40%, #1B3A5C 40%, #1B3A5C 100%)',
                      }}
                    />
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full
                      border border-white/[0.08] z-[1]" />
                    <span className="font-display font-black text-3xl text-white/20
                      tracking-[6px] select-none relative z-[1]">
                      OTU
                    </span>
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-body text-xs font-bold uppercase tracking-[2px]
                    text-patriot-red bg-patriot-red/[0.08] px-3 py-1 rounded-full">
                    {endorsement.type}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-navy-900 mb-4">
                  {endorsement.name}
                </h3>

                <p className="font-body text-base text-warm-600 leading-relaxed">
                  &#34;{endorsement.quote}&#34;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Endorsements
