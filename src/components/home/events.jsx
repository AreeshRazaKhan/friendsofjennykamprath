import Link from 'next/link'
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react'

import { fetchGHLEvents } from '@/lib/ghl'

const Events = async () => {
  const all = await fetchGHLEvents()
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const EVENTS = all
    .filter((event) => {
      if (!event.date?.raw) return false
      const eventDate = new Date(`${event.date.raw}T00:00:00`)
      return eventDate >= today
    })
    .slice(0, 4)
  const [featured, ...upcoming] = EVENTS

  if (!featured) return null

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Watermark */}
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2
        font-display font-black text-[120px] text-warm-100/70 tracking-[8px]
        whitespace-nowrap select-none pointer-events-none hidden lg:block"
      >
        EVENTS
      </div>

      <div className="relative z-[1] mx-auto max-w-[1290px] px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p
            className="font-body text-xs font-bold uppercase tracking-[3px]
            text-patriot-red mb-4"
          >
            Get Involved
          </p>
          <h2
            className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)]
            leading-[1.15] text-navy-900 mb-4"
          >
            Upcoming Events
          </h2>
          <p className="font-body text-lg text-warm-600 leading-relaxed">
            Show up. Speak out. Every event is open to the public — no
            invitations, no gatekeepers.
          </p>
        </div>

        {/* Asymmetric layout: featured left, list right */}
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12">
          {/* Featured event */}
          {featured && (
            <div
              className="relative bg-navy-900 rounded-2xl p-8 lg:p-10
              overflow-hidden group"
            >
              {/* Floating circles */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full
                border border-white/[0.06]"
              />
              <div
                className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full
                border border-white/[0.04]"
              />

              {/* Featured badge */}
              <span
                className="inline-block font-body text-[10px] font-bold uppercase
                tracking-[2px] text-white bg-patriot-red px-3 py-1.5
                rounded-full mb-8"
              >
                Featured Event
              </span>

              {/* Date block */}
              <div className="flex items-start gap-6 mb-8">
                <div
                  className="flex-shrink-0 w-20 h-20 bg-white/[0.08]
                  rounded-xl flex flex-col items-center justify-center
                  border border-white/[0.1]"
                >
                  <span className="font-display font-black text-2xl text-white leading-none">
                    {featured.date.day}
                  </span>
                  <span
                    className="font-body text-xs font-bold uppercase
                    tracking-[2px] text-patriot-red mt-1"
                  >
                    {featured.date.month}
                  </span>
                </div>
                <div>
                  <h3
                    className="font-display font-bold text-2xl lg:text-[28px]
                    text-white leading-[1.2] mb-2"
                  >
                    {featured.title}
                  </h3>
                  <p className="font-body text-sm text-white/40">
                    {featured.type}
                  </p>
                </div>
              </div>

              <p className="font-body text-base text-white/60 leading-[1.7] mb-8 line-clamp-3">
                {featured.description}
              </p>

              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-patriot-red flex-shrink-0" />
                  <span className="font-body text-sm text-white/70">
                    {featured.time}
                    {featured.endTime ? ` — ${featured.endTime}` : ''}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-patriot-red flex-shrink-0" />
                  <span className="font-body text-sm text-white/70">
                    {featured.location}
                  </span>
                </div>
              </div>

              <Link
                href={`/events/${featured.id}`}
                className="inline-flex items-center gap-3 font-body font-semibold
                  text-base text-white bg-patriot-red hover:bg-red-dark
                  px-8 py-4 rounded-lg transition-colors duration-200 group/btn"
              >
                View Details
                <ArrowRight
                  className="w-4 h-4 transition-transform
                  group-hover/btn:translate-x-1"
                />
              </Link>
            </div>
          )}

          {/* Upcoming events list */}
          <div className="flex flex-col gap-0">
            {upcoming.map((event) => (
              <div
                key={event.id}
                className="group flex gap-5 lg:gap-6 py-7
                  border-b border-warm-100 first:border-t
                  lg:first:border-t-0 hover:bg-warm-50/50
                  transition-colors duration-200 px-2 -mx-2 rounded-lg"
              >
                {/* Date block */}
                <div
                  className="flex-shrink-0 w-16 h-16 bg-off-white rounded-xl
                  flex flex-col items-center justify-center border border-warm-100
                  group-hover:border-patriot-red/20 transition-colors duration-200"
                >
                  <span
                    className="font-display font-black text-lg text-navy-900
                    leading-none"
                  >
                    {event.date.day}
                  </span>
                  <span
                    className="font-body text-[10px] font-bold uppercase
                    tracking-[2px] text-patriot-red mt-0.5"
                  >
                    {event.date.month}
                  </span>
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <Link href={`/events/${event.id}`}>
                    <h4
                      className="font-display font-bold text-lg text-navy-900
                      leading-[1.3] mb-1.5 group-hover:text-patriot-red
                      transition-colors duration-200"
                    >
                      {event.title}
                    </h4>
                  </Link>
                  <p
                    className="font-body text-sm text-warm-600 leading-relaxed
                    mb-3 line-clamp-2"
                  >
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-warm-400" />
                      <span className="font-body text-xs text-warm-400">
                        {event.time}
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-warm-400" />
                      <span className="font-body text-xs text-warm-400">
                        {event.location}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* View all link */}
            <div className="mt-8">
              <Link
                href="/events"
                className="inline-flex items-center gap-3 font-body font-semibold
                  text-base text-navy-800 border-2 border-navy-800
                  hover:bg-navy-900 hover:text-white px-8 py-4 rounded-lg
                  transition-all duration-200 group/link"
              >
                View All Events
                <ArrowRight
                  className="w-4 h-4 transition-transform
                  group-hover/link:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
