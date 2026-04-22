import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

import Navbar from '@/components/layout/navbar'
import SiteFooter from '@/components/layout/site-footer'
import { fetchGHLEndorsements } from '@/lib/ghl'

export const revalidate = 60

export const metadata = {
  title: 'Endorsements — Friends of Jenny Kamprath',
  description:
    'Community members, leaders, and organizations across Washington County who endorse Jenny Kamprath for County Chair.',
}

const EndorsementsPage = async () => {
  const ENDORSEMENTS = await fetchGHLEndorsements()

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">

        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-sign-gradient overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full
            border border-white/[0.05]" />
          <div className="absolute bottom-12 left-[8%] w-36 h-36 rounded-full
            border border-white/[0.04]" />

          <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            font-display font-black text-[160px] text-white/[0.02] tracking-[10px]
            whitespace-nowrap select-none pointer-events-none hidden lg:block">
            ENDORSED
          </div>

          <div className="relative z-[5] mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="font-body text-xs font-bold uppercase tracking-[3px]
                text-patriot-red mb-6">
                Community Voices
              </p>
              <h1 className="font-display font-black text-[clamp(2.5rem,5vw,3.5rem)]
                leading-[1.08] text-white mb-6">
                Endorsed by Washington County
              </h1>
              <p className="font-body text-lg text-white/70 leading-relaxed max-w-xl">
                Real neighbors, real business owners, real leaders — backing Jenny
                because they know she&apos;ll fight for fiscal responsibility, safe
                neighborhoods, and a county government that listens.
              </p>
            </div>
          </div>
        </section>

        {/* Empty state */}
        {ENDORSEMENTS.length === 0 && (
          <section className="py-20 lg:py-28 bg-off-white">
            <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
              <div className="relative bg-white border border-warm-100 rounded-3xl
                px-8 py-16 lg:px-16 lg:py-24 overflow-hidden text-center">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full
                  border border-patriot-red/[0.06] pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full
                  border border-navy-900/[0.04] pointer-events-none" />

                <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  font-display font-black text-[140px] text-warm-100/50 tracking-[8px]
                  whitespace-nowrap select-none pointer-events-none hidden lg:block">
                  SOON
                </div>

                <div className="relative z-[1] max-w-2xl mx-auto">
                  <div className="inline-flex items-center justify-center w-20 h-20
                    rounded-2xl bg-patriot-red/[0.08] border border-patriot-red/[0.15]
                    mb-8">
                    <Sparkles className="w-9 h-9 text-red-dark" />
                  </div>

                  <p className="font-body text-xs font-bold uppercase tracking-[3px]
                    text-red-dark mb-4">
                    Coming Soon
                  </p>
                  <h2 className="font-display font-extrabold
                    text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] text-navy-900 mb-5">
                    Endorsements Rolling In
                  </h2>
                  <p className="font-body text-lg text-warm-600 leading-[1.7] mb-10
                    max-w-xl mx-auto">
                    We&apos;re adding endorsements as community members, local leaders,
                    and organizations step forward to publicly back Jenny. Check back
                    soon — or add your voice today.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 font-body font-semibold
                        text-base text-white bg-red-dark hover:bg-red-hover
                        px-8 py-4 rounded-lg transition-colors duration-200 group/btn"
                    >
                      Endorse Jenny
                      <ArrowRight className="w-4 h-4 transition-transform
                        group-hover/btn:translate-x-1" />
                    </Link>
                    <Link
                      href="/volunteer"
                      className="inline-flex items-center gap-3 font-body font-semibold
                        text-base text-navy-800 border-2 border-navy-800
                        hover:bg-navy-900 hover:text-white px-8 py-4 rounded-lg
                        transition-all duration-200"
                    >
                      Get Involved
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Grid */}
        {ENDORSEMENTS.length > 0 && (
          <section className="py-16 lg:py-24 bg-off-white">
            <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {ENDORSEMENTS.map((endorser) => (
                  <article
                    key={endorser.id}
                    className="relative bg-white border border-warm-100 rounded-2xl
                      overflow-hidden flex flex-col
                      hover:shadow-lg hover:shadow-navy-900/[0.06]
                      hover:border-patriot-red/20 transition-all duration-300"
                  >
                    {/* Flag / photo background */}
                    <div className="relative aspect-square w-full">
                      <Image
                        src={endorser.photo || '/images/flag-avatar.webp'}
                        alt=""
                        fill
                        unoptimized={!!endorser.photo}
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div aria-hidden="true" className="absolute inset-0 bg-navy-900/40" />
                    </div>
                    {/* Name */}
                    <div className="px-4 py-5 text-center flex-1 flex items-center justify-center">
                      <h3 className="font-display font-bold text-base text-red-dark
                        leading-[1.25]">
                        {endorser.title}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="relative py-24 lg:py-32 bg-red-dark overflow-hidden">
          <Image
            src="/images/flag.jpg"
            alt=""
            fill
            className="object-cover opacity-15 mix-blend-overlay"
            sizes="100vw"
          />
          <div className="absolute -top-12 right-[10%] w-40 h-40 rounded-full
            border border-white/[0.1]" />
          <div className="absolute bottom-8 left-[8%] w-28 h-28 rounded-full
            border border-white/[0.08]" />

          <div className="relative z-[1] mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-[3px] bg-white/40 mx-auto mb-8" />
              <h2 className="font-display font-black
                text-[clamp(2rem,4.5vw,3rem)] leading-[1.08] text-white mb-6">
                Add Your Voice
              </h2>

              <p className="font-body text-lg text-white/70 leading-relaxed mb-10
                max-w-2xl mx-auto">
                If you&apos;re ready to publicly endorse Jenny Kamprath for
                Washington County Chair, we&apos;d be honored to have you. Reach out
                and we&apos;ll add your name to this page.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 font-body font-semibold
                    text-base text-red-dark bg-white hover:bg-off-white
                    px-10 py-4 rounded-lg transition-colors duration-200 group/btn"
                >
                  Endorse Jenny
                  <ArrowRight className="w-4 h-4 transition-transform
                    group-hover/btn:translate-x-1" />
                </Link>
                <Link
                  href="/volunteer"
                  className="inline-flex items-center gap-3 font-body font-semibold
                    text-base text-white border-2 border-white/30
                    hover:border-white/60 px-10 py-4 rounded-lg
                    transition-all duration-200"
                >
                  Volunteer Instead
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}

export default EndorsementsPage
