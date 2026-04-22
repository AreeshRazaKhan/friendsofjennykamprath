const PRIORITIES = [
  {
    number: '01',
    title: 'Stop Overspending — Say NO to New Taxes',
    items: [
      'Initiate a full audit for spending transparency',
      'Eliminate waste and cut bureaucratic bloat',
      'Make government live within its means like families do',
    ],
    accent: 'bg-patriot-red',
  },
  {
    number: '02',
    title: 'Cut Red Tape Strangling Building, Business & Affordability',
    items: [
      'Reduce regulations that drive up housing costs',
      'Streamline permitting and approvals for builders',
      'Support small business growth across the county',
    ],
    accent: 'bg-navy-700',
  },
  {
    number: '03',
    title: 'Support Public Safety — Protect Neighborhoods',
    items: [
      'Public safety is government\'s primary responsibility',
      'No transient housing in suburban neighborhoods',
      'Stop deprioritizing police and first responders',
    ],
    accent: 'bg-navy-900',
  },
]

const Priorities = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Watermark */}
      <div aria-hidden="true" className="absolute top-12 left-1/2 -translate-x-1/2
        font-display font-black text-[120px] text-warm-100/80 tracking-[8px]
        whitespace-nowrap select-none pointer-events-none hidden lg:block">
        PRIORITIES
      </div>

      <div className="relative z-[1] mx-auto max-w-[1290px] px-6 lg:px-10">
        {/* Section header — off-center */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="font-body text-xs font-bold uppercase tracking-[3px]
            text-red-dark mb-4">
            Platform
          </p>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)]
            leading-[1.15] text-navy-900">
            Jenny&#39;s Priorities as County Chair
          </h2>
        </div>

        {/* Cards — asymmetric grid: first card is tall, others stack */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-6 lg:gap-8">
          {PRIORITIES.map((priority, idx) => (
            <div
              key={priority.number}
              className={`relative bg-white border border-warm-100 rounded-2xl
                p-8 lg:p-10 overflow-hidden group hover:shadow-lg
                hover:shadow-navy-900/[0.06] transition-shadow duration-300
                ${idx === 0 ? 'lg:row-span-1' : ''}`}
            >
              {/* Number watermark */}
              <span aria-hidden="true" className="absolute top-4 right-6 font-display font-black
                text-[100px] leading-none text-warm-100/60 select-none
                pointer-events-none transition-colors duration-300
                group-hover:text-red-dark/10">
                {priority.number}
              </span>

              {/* Icon bar */}
              <div className={`w-12 h-1.5 ${priority.accent} rounded-full mb-8`} />

              <h3 className="font-display font-bold text-xl lg:text-2xl
                text-navy-900 mb-6 relative z-[1] leading-[1.3]">
                {priority.title}
              </h3>

              <ul className="space-y-4 relative z-[1]">
                {priority.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-patriot-red/60" />
                    <span className="font-body text-base text-warm-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Priorities
