import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'

import { fetchGHLEndorsements } from '@/lib/ghl'

const getInitials = (name) => {
  if (!name) return ''
  const parts = name.trim().split(/\s+/)
  return (parts[0]?.[0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')
}

const Endorsements = async () => {
  const ALL = await fetchGHLEndorsements()
  if (ALL.length === 0) return null

  const ENDORSEMENTS = ALL.slice(0, 4)

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
            text-red-dark mb-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENDORSEMENTS.map((endorser) => (
            <article
              key={endorser.id}
              className="relative bg-white border border-warm-100 rounded-2xl
                p-8 lg:p-10 overflow-hidden flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                {endorser.photo ? (
                  <div className="relative flex-shrink-0 w-14 h-14 rounded-full
                    overflow-hidden bg-navy-900">
                    <Image
                      src={endorser.photo}
                      alt={endorser.name}
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-navy-900
                    flex items-center justify-center border border-white/[0.1]">
                    <span className="font-display font-black text-lg text-white
                      tracking-[1px]">
                      {getInitials(endorser.name)}
                    </span>
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-xl text-navy-900
                    leading-[1.25] mb-0.5">
                    {endorser.name}
                  </h3>
                  {endorser.title && (
                    <p className="font-body text-sm text-warm-600 leading-snug">
                      {endorser.title}
                    </p>
                  )}
                </div>
              </div>

              {endorser.type && (
                <span className="inline-block self-start font-body text-[10px]
                  font-bold uppercase tracking-[2px] text-red-dark
                  bg-patriot-red/[0.08] px-3 py-1 rounded-full mb-4">
                  {endorser.type}
                </span>
              )}

              {endorser.quote && (
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 w-5 h-5
                    text-red-dark/20" />
                  <p className="font-body text-base text-warm-600 leading-relaxed
                    pl-6">
                    &ldquo;{endorser.quote}&rdquo;
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:justify-start">
          <Link
            href="/endorsements"
            className="inline-flex items-center gap-2 font-body font-semibold
              text-base text-red-dark hover:gap-3 transition-all duration-200"
          >
            See all endorsements
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Endorsements
