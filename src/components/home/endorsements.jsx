import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { fetchGHLEndorsements } from '@/lib/ghl'

const getInitials = (title) => {
  if (!title) return ''
  const parts = title.trim().split(/\s+/)
  return (parts[0]?.[0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')
}

const Endorsements = async () => {
  const ALL = await fetchGHLEndorsements()
  if (ALL.length === 0) return null

  const ENDORSEMENTS = ALL.slice(0, 6)

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {ENDORSEMENTS.map((endorser) => (
            <article
              key={endorser.id}
              className="relative bg-white border border-warm-100 rounded-2xl
                p-6 flex items-center gap-4"
            >
              {endorser.photo ? (
                <div className="relative flex-shrink-0 w-14 h-14 rounded-full
                  overflow-hidden bg-navy-900">
                  <Image
                    src={endorser.photo}
                    alt={endorser.title}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
              ) : (
                <div aria-hidden="true" className="flex-shrink-0 w-14 h-14 rounded-full bg-navy-900
                  flex items-center justify-center border border-white/[0.1]">
                  <span className="font-display font-black text-lg text-white
                    tracking-[1px]">
                    {getInitials(endorser.title)}
                  </span>
                </div>
              )}
              <h3 className="font-display font-bold text-lg text-navy-900
                leading-[1.3]">
                {endorser.title}
              </h3>
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
