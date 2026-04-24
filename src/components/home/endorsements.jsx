import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { fetchGHLEndorsements } from '@/lib/ghl'

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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {ENDORSEMENTS.map((endorser) => (
            <article
              key={endorser.id}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden
                border border-warm-100 bg-navy-900
                shadow-[0_4px_12px_rgba(0,0,0,0.06)]
                hover:shadow-[0_14px_32px_rgba(0,0,0,0.18)]
                hover:-translate-y-1 hover:border-patriot-red/40
                transition-all duration-300"
            >
              <Image
                src={endorser.photo || '/images/flag-avatar.webp'}
                alt=""
                fill
                unoptimized={!!endorser.photo}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Gradient overlay — anchors the name in the dark bottom */}
              <div aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t
                  from-navy-900 via-navy-900/75 to-navy-900/30" />
              {/* Red accent bar at top */}
              <div aria-hidden="true"
                className="absolute top-0 inset-x-0 h-[3px] bg-patriot-red" />
              {/* Name */}
              <div className="absolute inset-x-0 bottom-0 px-4 py-5">
                <h3 className="font-display font-bold text-base lg:text-lg text-white
                  leading-[1.2] text-center line-clamp-3">
                  {endorser.title}
                </h3>
              </div>
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
