import Link from 'next/link'
import { Clock, MapPin, ArrowRight } from 'lucide-react'

import Navbar from '@/components/layout/navbar'
import SiteFooter from '@/components/layout/site-footer'
import { fetchGHLEvents } from '@/lib/ghl'

export const revalidate = 60

export const metadata = {
  title: 'Events — Friends of Jenny Kamprath',
  description:
    'Upcoming campaign events for Jenny Kamprath for Washington County Chair. Town halls, rallies, volunteer opportunities, and more.',
}

const EventsPage = async () => {
  const ALL_EVENTS = await fetchGHLEvents()
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const EVENTS = ALL_EVENTS.filter((event) => {
    if (!event.date?.raw) return false
    const eventDate = new Date(`${event.date.raw}T00:00:00`)
    return eventDate >= today
  })
  const [featured, ...upcoming] = EVENTS

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">

        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-navy-900 overflow-hidden">
          {/* Edge stripe */}
          <div
            className="absolute right-0 top-0 bottom-0 w-2 z-10"
            style={{
              background:
                'linear-gradient(180deg, #C41E3A 0%, #C41E3A 40%, #1B3A5C 40%, #1B3A5C 100%)',
            }}
          />
          {/* Floating circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/[0.05]" />
          <div className="absolute bottom-12 left-[8%] w-36 h-36 rounded-full border border-white/[0.04]" />

          {/* Watermark */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            font-display font-black text-[160px] text-white/[0.02] tracking-[10px]
            whitespace-nowrap select-none pointer-events-none hidden lg:block"
          >
            EVENTS
          </div>

          <div className="relative z-[5] mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-6">
                Campaign Calendar
              </p>
              <h1 className="font-display font-black text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.08] text-white mb-6">
                Upcoming Events
              </h1>
              <p className="font-body text-lg text-white/60 leading-relaxed max-w-xl">
                Every event is open to the public. No invitations, no gatekeepers,
                no staged photo ops — just real conversations with real people.
              </p>
            </div>
          </div>
        </section>

        {/* Featured event */}
        {featured && (
          <section className="py-16 lg:py-20 bg-off-white">
            <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
              <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-8">
                Featured Event
              </p>

              <Link
                href={`/events/${featured.id}`}
                className="block group"
              >
                <div className="relative bg-navy-900 rounded-2xl overflow-hidden">
                  {/* Edge stripe */}
                  <div
                    className="absolute right-0 top-0 bottom-0 w-2 z-[1]"
                    style={{
                      background:
                        'linear-gradient(180deg, #C41E3A 0%, #C41E3A 40%, #1B3A5C 40%, #1B3A5C 100%)',
                    }}
                  />
                  {/* Floating circles */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full border border-white/[0.06]" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full border border-white/[0.04]" />

                  <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-12 p-8 lg:p-12 items-center">
                    {/* Date block */}
                    <div className="flex-shrink-0 w-24 h-24 lg:w-28 lg:h-28 bg-white/[0.08] rounded-2xl
                      flex flex-col items-center justify-center border border-white/[0.1]">
                      <span className="font-display font-black text-3xl lg:text-4xl text-white leading-none">
                        {featured.date.day}
                      </span>
                      <span className="font-body text-sm font-bold uppercase tracking-[2px] text-patriot-red mt-1">
                        {featured.date.month}
                      </span>
                    </div>

                    {/* Info */}
                    <div>
                      <span className="inline-block font-body text-[10px] font-bold uppercase
                        tracking-[2px] text-white bg-patriot-red px-3 py-1.5 rounded-full mb-4">
                        {featured.type}
                      </span>
                      <h2 className="font-display font-bold text-2xl lg:text-3xl text-white leading-[1.2] mb-3
                        group-hover:text-patriot-red transition-colors duration-200">
                        {featured.title}
                      </h2>
                      <p className="font-body text-base text-white/50 leading-relaxed mb-4 max-w-xl line-clamp-2">
                        {featured.description}
                      </p>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-patriot-red" />
                          <span className="font-body text-sm text-white/60">
                            {featured.time}
                            {featured.endTime ? ` — ${featured.endTime}` : ''}
                          </span>
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-patriot-red" />
                          <span className="font-body text-sm text-white/60">{featured.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden lg:flex items-center justify-center w-14 h-14 rounded-full
                      bg-white/[0.06] border border-white/[0.1] group-hover:bg-patriot-red
                      group-hover:border-patriot-red transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* All events grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="max-w-2xl mb-12">
              <h2 className="font-display font-extrabold text-[clamp(1.8rem,3.5vw,2.25rem)] leading-[1.15] text-navy-900 mb-4">
                All Events
              </h2>
              <p className="font-body text-lg text-warm-600 leading-relaxed">
                Find an event near you and show up. That is how we win.
              </p>
            </div>

            {/* Events grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {upcoming.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="group relative bg-white border border-warm-100 rounded-2xl
                    p-8 overflow-hidden hover:shadow-xl hover:shadow-navy-900/[0.08]
                    hover:border-patriot-red/20 transition-all duration-300"
                >
                  {/* Category badge */}
                  <span className="inline-block font-body text-[10px] font-bold uppercase
                    tracking-[2px] text-patriot-red bg-patriot-red/[0.08] px-3 py-1.5
                    rounded-full mb-5">
                    {event.type}
                  </span>

                  {/* Date + title row */}
                  <div className="flex items-start gap-5 mb-4">
                    <div className="flex-shrink-0 w-[72px] h-[72px] bg-off-white rounded-xl
                      flex flex-col items-center justify-center border border-warm-100
                      group-hover:border-patriot-red/30 group-hover:bg-patriot-red/[0.04]
                      transition-all duration-200">
                      <span className="font-display font-black text-xl text-navy-900 leading-none">
                        {event.date.day}
                      </span>
                      <span className="font-body text-[10px] font-bold uppercase tracking-[2px] text-patriot-red mt-0.5">
                        {event.date.month}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-xl text-navy-900 leading-[1.3] mb-1
                        group-hover:text-patriot-red transition-colors duration-200">
                        {event.title}
                      </h3>
                      <p className="font-body text-sm text-warm-400">
                        {event.date.year}
                      </p>
                    </div>
                  </div>

                  <p className="font-body text-base text-warm-600 leading-relaxed mb-5 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
                    <span className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-warm-400" />
                      <span className="font-body text-xs text-warm-400">
                        {event.time}
                        {event.endTime ? ` — ${event.endTime}` : ''}
                      </span>
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-warm-400" />
                      <span className="font-body text-xs text-warm-400">{event.location}</span>
                    </span>
                  </div>

                  {/* View details — stronger CTA */}
                  <span className="inline-flex items-center gap-2 font-body font-semibold
                    text-sm text-patriot-red group-hover:gap-3 transition-all duration-200">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}

export default EventsPage
