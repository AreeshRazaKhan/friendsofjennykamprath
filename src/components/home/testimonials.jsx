const TESTIMONIALS = [
  {
    quote: 'Finally someone who will actually say no to wasteful spending. Jenny has my full support.',
    name: 'Mike R.',
    location: 'Beaverton, OR',
  },
  {
    quote: 'We need a county chair who listens to taxpayers, not special interests. Jenny is exactly that leader.',
    name: 'Linda P.',
    location: 'Hillsboro, OR',
  },
  {
    quote: 'Jenny understands what working families are going through. She\'ll fight for us, not the bureaucrats.',
    name: 'David T.',
    location: 'Tigard, OR',
  },
]

const Testimonials = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Watermark */}
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        font-display font-black text-[120px] text-warm-100/70 tracking-[8px]
        whitespace-nowrap select-none pointer-events-none hidden lg:block">
        VOICES
      </div>

      <div className="relative z-[1] mx-auto max-w-[1290px] px-6 lg:px-10">
        {/* Header — right-aligned for asymmetry */}
        <div className="lg:text-right lg:ml-auto max-w-xl mb-16">
          <p className="font-body text-xs font-bold uppercase tracking-[3px]
            text-red-dark mb-4">
            Community Voices
          </p>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)]
            leading-[1.15] text-navy-900">
            What Neighbors Are Saying
          </h2>
        </div>

        {/* Testimonial cards — staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className={`relative bg-warm-50 rounded-2xl p-8 lg:p-10
                ${idx === 1 ? 'lg:-mt-8' : ''}
                ${idx === 2 ? 'md:col-span-2 lg:col-span-1 lg:mt-4' : ''}`}
            >
              {/* Quote mark */}
              <span className="absolute top-6 right-8 font-display font-black
                text-[80px] leading-none text-red-dark/[0.08] select-none">
                &#34;
              </span>

              <p className="font-body text-base leading-[1.7] text-warm-800
                mb-8 relative z-[1]">
                &#34;{testimonial.quote}&#34;
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-navy-900/[0.08]
                  flex items-center justify-center">
                  <span className="font-display font-bold text-sm text-navy-900/40">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-navy-900">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-warm-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
