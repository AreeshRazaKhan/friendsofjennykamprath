const DAY_ONE_ACTIONS = [
  'Demand a full audit of county spending to find and eliminate waste',
  'Oppose any new taxes or fees on working families and seniors',
  'Cut red tape that blocks housing, affordability, and small business',
  'Stand firmly behind law enforcement and first responders',
  'Oppose placing transient housing in stable suburban neighborhoods',
]

const DayOne = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      {/* Floating circles */}
      <div className="absolute top-16 left-[10%] w-48 h-48 rounded-full
        border border-white/[0.04]" />
      <div className="absolute -bottom-20 right-[20%] w-72 h-72 rounded-full
        border border-white/[0.03]" />

      {/* Watermark */}
      <div aria-hidden="true" className="absolute bottom-8 left-10 font-display font-black
        text-[160px] text-white/[0.02] tracking-[10px] select-none
        pointer-events-none hidden xl:block">
        DAY ONE
      </div>

      <div className="relative z-[1] mx-auto max-w-[1290px] px-6 lg:px-10">
        {/* Asymmetric layout: wide heading left, checklist right */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-20">

          {/* Left — heading */}
          <div className="lg:sticky lg:top-40 lg:self-start">
            <div className="w-16 h-[3px] bg-patriot-red mb-8" />

            <p className="font-body text-xs font-bold uppercase tracking-[3px]
              text-patriot-red mb-4">
              Action Plan
            </p>

            <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)]
              leading-[1.15] text-white mb-6">
              What Jenny Will Do on Day One
            </h2>

            <p className="font-body text-lg text-white/70 leading-relaxed">
              No more waiting. No more empty promises.
              Concrete actions from the very first day in office.
            </p>
          </div>

          {/* Right — checklist */}
          <div className="space-y-0">
            {DAY_ONE_ACTIONS.map((action, idx) => (
              <div
                key={idx}
                className="group flex gap-5 items-start py-7
                  border-b border-white/[0.08] last:border-b-0"
              >
                {/* Number */}
                <span className="flex-shrink-0 w-12 h-12 rounded-xl
                  bg-white/[0.06] flex items-center justify-center
                  font-display font-bold text-lg text-patriot-red
                  group-hover:bg-red-dark group-hover:text-white
                  transition-all duration-300">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <p className="font-body text-lg text-white/80 leading-relaxed pt-2">
                  {action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DayOne
