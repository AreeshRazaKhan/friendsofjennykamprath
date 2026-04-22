import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { fetchGHLEndorsements } from '@/lib/ghl'

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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {ENDORSEMENTS.map((endorser) => (
            <article
              key={endorser.id}
              className="relative bg-white border border-warm-100 rounded-2xl
                overflow-hidden flex flex-col"
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
                <div aria-hidden="true" className="absolute inset-0 bg-white/20" />
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
