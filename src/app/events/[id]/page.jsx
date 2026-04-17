import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, MapPin, Calendar, ArrowLeft, ArrowRight, Share2 } from 'lucide-react'

import Navbar from '@/components/layout/navbar'
import SiteFooter from '@/components/layout/site-footer'
import RsvpForm from '@/components/events/rsvp-form'
import { fetchGHLEvent, fetchGHLEvents } from '@/lib/ghl'

export const revalidate = 60

export const generateMetadata = async ({ params }) => {
  const { id } = await params
  const event = await fetchGHLEvent(id)
  if (!event) return { title: 'Event Not Found' }

  return {
    title: `${event.title} — Friends of Jenny Kamprath`,
    description: event.description,
  }
}

const EventDetailPage = async ({ params }) => {
  const { id } = await params
  const event = await fetchGHLEvent(id)
  if (!event) notFound()

  const allEvents = await fetchGHLEvents()
  const eventIdx = allEvents.findIndex((e) => e.id === id)
  const prevEvent = eventIdx > 0 ? allEvents[eventIdx - 1] : null
  const nextEvent =
    eventIdx >= 0 && eventIdx < allEvents.length - 1 ? allEvents[eventIdx + 1] : null

  const descriptionParagraphs = (event.description || '').split('\n\n').filter(Boolean)
  const timeLabel = event.endTime ? `${event.time} — ${event.endTime}` : event.time

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">

        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-navy-900 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/[0.05]" />
          <div className="absolute bottom-16 left-[5%] w-32 h-32 rounded-full border border-white/[0.04]" />
          <div className="absolute top-1/2 right-[12%] w-20 h-20 rounded-full border border-white/[0.08]" />

          <div className="relative z-[5] mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="flex items-center gap-2 mb-8">
              <Link
                href="/events"
                className="font-body text-sm text-white/40 hover:text-white transition-colors"
              >
                Events
              </Link>
              <span className="font-body text-sm text-white/20">/</span>
              <span className="font-body text-sm text-white/60">{event.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end">
              <div>
                <span className="inline-block font-body text-[10px] font-bold uppercase
                  tracking-[2px] text-white bg-patriot-red px-3 py-1.5 rounded-full mb-6">
                  {event.type}
                </span>
                <h1 className="font-display font-black text-[clamp(2rem,4.5vw,3rem)] leading-[1.08] text-white mb-4">
                  {event.title}
                </h1>
                <p className="font-body text-lg text-white/50 leading-relaxed max-w-2xl">
                  {event.description}
                </p>
              </div>

              <div className="flex-shrink-0 w-28 h-28 bg-white/[0.08] rounded-2xl
                flex flex-col items-center justify-center border border-white/[0.1]">
                <span className="font-display font-black text-4xl text-white leading-none">
                  {event.date.day}
                </span>
                <span className="font-body text-sm font-bold uppercase tracking-[2px] text-patriot-red mt-1">
                  {event.date.month}
                </span>
                <span className="font-body text-[10px] text-white/40 mt-0.5">
                  {event.date.year}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">

              <div>
                <div className="flex flex-wrap gap-6 pb-8 mb-8 border-b border-warm-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-patriot-red/[0.08] flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-patriot-red" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-warm-400 uppercase tracking-[1px]">Date</p>
                      <p className="font-body text-sm font-semibold text-navy-900">
                        {event.date.month} {event.date.day}, {event.date.year}
                        {event.endDate && event.endDate.raw !== event.date.raw
                          ? ` — ${event.endDate.month} ${event.endDate.day}, ${event.endDate.year}`
                          : ''}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-patriot-red/[0.08] flex items-center justify-center">
                      <Clock className="w-5 h-5 text-patriot-red" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-warm-400 uppercase tracking-[1px]">Time</p>
                      <p className="font-body text-sm font-semibold text-navy-900">{timeLabel}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-patriot-red/[0.08] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-patriot-red" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-warm-400 uppercase tracking-[1px]">Location</p>
                      <p className="font-body text-sm font-semibold text-navy-900">{event.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="font-display font-bold text-xl text-navy-900 mb-6">
                    About This Event
                  </h2>
                  <div className="space-y-4">
                    {descriptionParagraphs.map((para, idx) => (
                      <p key={idx} className="font-body text-base text-warm-600 leading-[1.8]">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:sticky lg:top-[100px] lg:self-start space-y-6">
                <RsvpForm
                  eventTitle={event.title}
                  eventDate={event.date.raw}
                  eventTime={timeLabel}
                  eventCategory={event.type}
                />

                <div className="bg-warm-50 rounded-2xl p-8 border border-warm-100">
                  <h3 className="font-display font-bold text-lg text-navy-900 mb-4">
                    Location
                  </h3>
                  <div className="space-y-2 font-body text-base text-warm-600">
                    <p className="font-semibold text-navy-900">{event.location}</p>
                    {event.address && event.address !== event.location && (
                      <p>{event.address}</p>
                    )}
                  </div>
                </div>

                <div className="bg-warm-50 rounded-2xl p-8 border border-warm-100">
                  <h3 className="font-display font-bold text-lg text-navy-900 mb-4">
                    Spread the Word
                  </h3>
                  <p className="font-body text-sm text-warm-600 mb-4">
                    Share this event with friends, family, and neighbors.
                  </p>
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-warm-400" />
                    <span className="font-body text-sm text-warm-400">
                      Copy link to share
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {(prevEvent || nextEvent) && (
          <section className="py-12 bg-off-white border-t border-warm-100">
            <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prevEvent ? (
                  <Link
                    href={`/events/${prevEvent.id}`}
                    className="group flex items-center gap-4 p-6 bg-white rounded-xl
                      border border-warm-100 hover:shadow-md hover:shadow-navy-900/[0.04]
                      transition-all duration-200"
                  >
                    <ArrowLeft className="w-5 h-5 text-warm-400 group-hover:text-patriot-red
                      transition-colors flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-body text-xs text-warm-400 uppercase tracking-[1px] mb-1">
                        Previous Event
                      </p>
                      <p className="font-display font-bold text-base text-navy-900
                        group-hover:text-patriot-red transition-colors truncate">
                        {prevEvent.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {nextEvent ? (
                  <Link
                    href={`/events/${nextEvent.id}`}
                    className="group flex items-center justify-end gap-4 p-6 bg-white rounded-xl
                      border border-warm-100 hover:shadow-md hover:shadow-navy-900/[0.04]
                      transition-all duration-200 text-right"
                  >
                    <div className="min-w-0">
                      <p className="font-body text-xs text-warm-400 uppercase tracking-[1px] mb-1">
                        Next Event
                      </p>
                      <p className="font-display font-bold text-base text-navy-900
                        group-hover:text-patriot-red transition-colors truncate">
                        {nextEvent.title}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-warm-400 group-hover:text-patriot-red
                      transition-colors flex-shrink-0" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-3 font-body font-semibold
                    text-sm text-navy-800 hover:text-patriot-red transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Events
                </Link>
              </div>
            </div>
          </section>
        )}

      </main>
      <SiteFooter />
    </>
  )
}

export default EventDetailPage
