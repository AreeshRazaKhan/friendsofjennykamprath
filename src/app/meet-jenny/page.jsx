import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import Navbar from '@/components/layout/navbar'
import SiteFooter from '@/components/layout/site-footer'

export const metadata = {
  title: 'Meet Jenny — Friends of Jenny Kamprath',
  description:
    'Get to know Jenny Kamprath — a taxpayer advocate, community leader, and candidate for Washington County Chair.',
}

const TIMELINE = [
  {
    label: 'Roots in Washington County',
    text: 'Raised in the communities she seeks to serve — Beaverton, Hillsboro, and surrounding neighborhoods.',
  },
  {
    label: 'Career in Business & Finance',
    text: 'Built a career managing budgets, cutting waste, and holding organizations accountable for every dollar spent.',
  },
  {
    label: 'Community Advocate',
    text: 'Became a vocal advocate for taxpayers, small business owners, and families burdened by rising costs and government overreach.',
  },
  {
    label: 'Taxpayer Watchdog',
    text: 'Testified before local government bodies on spending accountability, opposing new taxes and fees that hurt working families.',
  },
  {
    label: 'Neighborhood Leader',
    text: 'Organized neighbors to push back on policies that threatened public safety and neighborhood stability.',
  },
  {
    label: '2026 — Running for County Chair',
    text: 'Announced her campaign to bring fiscal discipline, common-sense leadership, and real accountability to Washington County.',
  },
]

const VALUES = [
  {
    number: '01',
    title: 'Fiscal Accountability',
    text: 'Every tax dollar belongs to the people who earned it. County spending must be transparent, justified, and efficient — no blank checks, no hidden line items.',
  },
  {
    number: '02',
    title: 'Common-Sense Leadership',
    text: 'Decisions grounded in real-world experience, not political games. Policy should serve working families, seniors, and small business owners — not bureaucrats.',
  },
  {
    number: '03',
    title: 'Community First',
    text: 'Safe neighborhoods, thriving local businesses, and a government that answers to its residents. Washington County deserves leadership that listens.',
  },
]

const MeetJenny = () => {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">

        {/* Hero */}
        <section className="relative py-24 lg:py-36 bg-navy-900 overflow-hidden">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/80" />

          {/* Edge stripe */}
          <div
            className="absolute right-0 top-0 bottom-0 w-2 z-10"
            style={{
              background:
                'linear-gradient(180deg, #C41E3A 0%, #C41E3A 40%, #1B3A5C 40%, #1B3A5C 100%)',
            }}
          />

          {/* Floating circles */}
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-white/[0.05]" />
          <div className="absolute bottom-20 left-[10%] w-40 h-40 rounded-full border border-white/[0.04]" />

          {/* Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            font-display font-black text-[160px] text-white/[0.02] tracking-[10px]
            whitespace-nowrap select-none pointer-events-none hidden lg:block">
            KAMPRATH
          </div>

          <div className="relative z-[5] mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-6">
                About the Candidate
              </p>
              <h1 className="font-display font-black text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.08] text-white mb-6">
                A Taxpayer Advocate Who Gets{' '}
                <span className="text-patriot-red">Results.</span>
              </h1>
              <p className="font-body text-lg text-white/60 leading-relaxed max-w-xl">
                Jenny Kamprath is a no-nonsense leader with real-world experience
                in business, budgets, and community advocacy — running to restore
                fiscal responsibility to Washington County.
              </p>
            </div>
          </div>
        </section>

        {/* Featured quote */}
        <section className="py-16 lg:py-20 bg-off-white">
          <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="lg:ml-[10%] max-w-3xl">
              <div className="w-16 h-[3px] bg-patriot-red mb-8" />
              <blockquote className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] leading-[1.3] text-navy-900 mb-6">
                &quot;Washington County taxpayers deserve a chair who will say no
                to wasteful spending, stand up for working families, and run
                government like it belongs to the people — because it does.&quot;
              </blockquote>
              <p className="font-body text-base text-warm-400">
                — Jenny Kamprath
              </p>
            </div>
          </div>
        </section>

        {/* Bio sections */}
        <section className="py-24 lg:py-32 bg-white overflow-hidden">
          <div className="mx-auto max-w-[1290px] px-6 lg:px-10">

            {/* Section 1 — Washington County Native */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_55%] gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
              <div className="relative">
                <div className="bg-navy-900 rounded-2xl aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/community.jpg"
                    alt="Washington County community"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-navy-900/30" />
                  <div className="absolute right-0 top-0 bottom-0 w-2 z-[1]"
                    style={{
                      background: 'linear-gradient(180deg, #C41E3A 0%, #C41E3A 40%, #1B3A5C 40%, #1B3A5C 100%)',
                    }}
                  />
                </div>
              </div>
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-4">
                  Washington County Native
                </p>
                <h2 className="font-display font-extrabold text-[clamp(1.8rem,3.5vw,2.25rem)] leading-[1.15] text-navy-900 mb-6">
                  Raised Right Here
                </h2>
                <p className="font-body text-lg text-warm-600 leading-[1.7] mb-4">
                  Jenny Kamprath grew up in the neighborhoods she wants to lead.
                  She knows the communities of Washington County — from Beaverton
                  to Hillsboro, Tigard to Sherwood — not from a briefing book, but
                  from a lifetime of living, working, and raising a family here.
                </p>
                <p className="font-body text-lg text-warm-600 leading-[1.7]">
                  That firsthand experience is exactly why she understands the
                  frustration taxpayers feel when they see their hard-earned money
                  wasted on bloated budgets and misguided priorities.
                </p>
              </div>
            </div>

            {/* Section 2 — Business & Budget Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-4">
                  Real-World Experience
                </p>
                <h2 className="font-display font-extrabold text-[clamp(1.8rem,3.5vw,2.25rem)] leading-[1.15] text-navy-900 mb-6">
                  A Career Built on Accountability
                </h2>
                <p className="font-body text-lg text-warm-600 leading-[1.7] mb-4">
                  Jenny&apos;s career in business and finance taught her what
                  government too often forgets: every dollar has to be accounted
                  for. She has managed budgets, cut waste, and delivered results —
                  skills she will bring directly to the County Chair&apos;s office.
                </p>
                <p className="font-body text-lg text-warm-600 leading-[1.7]">
                  Unlike career politicians who have never balanced a real budget,
                  Jenny knows how to find the waste, say no to unnecessary
                  spending, and stretch every dollar to serve the people who
                  actually pay the bills.
                </p>
              </div>
              <div className="relative">
                <div className="bg-navy-900 rounded-2xl aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/neighborhood.jpg"
                    alt="Washington County neighborhood"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-navy-900/30" />
                </div>
              </div>
            </div>

            {/* Section 3 — Community Advocate */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_55%] gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="bg-navy-900 rounded-2xl aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/volunteers.jpg"
                    alt="Community volunteers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-navy-900/30" />
                </div>
              </div>
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-4">
                  Standing Up for Neighbors
                </p>
                <h2 className="font-display font-extrabold text-[clamp(1.8rem,3.5vw,2.25rem)] leading-[1.15] text-navy-900 mb-6">
                  A Voice for the Community
                </h2>
                <p className="font-body text-lg text-warm-600 leading-[1.7] mb-4">
                  Long before she decided to run for office, Jenny was showing up
                  at public meetings, asking tough questions, and holding elected
                  officials accountable. She has been a consistent voice for
                  taxpayers, seniors, and small business owners who feel ignored
                  by county government.
                </p>
                <p className="font-body text-lg text-warm-600 leading-[1.7]">
                  Jenny has stood shoulder-to-shoulder with neighbors opposing
                  reckless spending, defending public safety, and demanding that
                  government serve the people — not the other way around.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Core Values */}
        <section className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
          {/* Edge stripe */}
          <div
            className="absolute right-0 top-0 bottom-0 w-2 z-10"
            style={{
              background:
                'linear-gradient(180deg, #C41E3A 0%, #C41E3A 40%, #1B3A5C 40%, #1B3A5C 100%)',
            }}
          />
          {/* Floating circles */}
          <div className="absolute top-16 left-[8%] w-48 h-48 rounded-full border border-white/[0.04]" />
          <div className="absolute -bottom-20 right-[15%] w-64 h-64 rounded-full border border-white/[0.03]" />

          {/* Watermark */}
          <div className="absolute bottom-10 left-10 font-display font-black text-[140px]
            text-white/[0.02] tracking-[8px] select-none pointer-events-none hidden xl:block">
            VALUES
          </div>

          <div className="relative z-[1] mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="max-w-2xl mb-16">
              <div className="w-16 h-[3px] bg-patriot-red mb-8" />
              <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-4">
                What Drives Jenny
              </p>
              <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)] leading-[1.15] text-white">
                Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {VALUES.map((value) => (
                <div
                  key={value.number}
                  className="relative bg-white/[0.05] border border-white/[0.08] rounded-2xl
                    p-8 lg:p-10 group hover:bg-white/[0.08] transition-colors duration-300"
                >
                  <span className="absolute top-4 right-6 font-display font-black text-[80px]
                    leading-none text-white/[0.04] select-none pointer-events-none
                    group-hover:text-patriot-red/10 transition-colors duration-300">
                    {value.number}
                  </span>
                  <div className="w-10 h-1.5 bg-patriot-red rounded-full mb-6" />
                  <h3 className="font-display font-bold text-xl text-white mb-4 relative z-[1]">
                    {value.title}
                  </h3>
                  <p className="font-body text-base text-white/50 leading-relaxed relative z-[1]">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline / Journey */}
        <section className="py-24 lg:py-32 bg-white overflow-hidden">
          <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-20">

              {/* Left — heading */}
              <div className="lg:sticky lg:top-40 lg:self-start">
                <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-4">
                  The Journey
                </p>
                <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)] leading-[1.15] text-navy-900 mb-6">
                  From Neighbor to Candidate
                </h2>
                <p className="font-body text-lg text-warm-600 leading-relaxed">
                  Jenny did not wake up one day and decide to run for office. Her
                  path to this campaign was built over years of watching county
                  government fail its residents — and deciding to do something
                  about it.
                </p>
              </div>

              {/* Right — timeline */}
              <div className="space-y-0">
                {TIMELINE.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex gap-5 py-7 border-b border-warm-100 last:border-b-0"
                  >
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-off-white
                      flex items-center justify-center font-display font-bold text-lg
                      text-patriot-red group-hover:bg-patriot-red group-hover:text-white
                      transition-all duration-300 border border-warm-100
                      group-hover:border-patriot-red">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-lg text-navy-900 mb-1.5">
                        {item.label}
                      </h4>
                      <p className="font-body text-base text-warm-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32 bg-patriot-red overflow-hidden">
          <Image
            src="/images/flag.jpg"
            alt=""
            fill
            className="object-cover opacity-15 mix-blend-overlay"
            sizes="100vw"
          />
          {/* Floating circles */}
          <div className="absolute -top-12 right-[10%] w-40 h-40 rounded-full border border-white/[0.1]" />
          <div className="absolute bottom-8 left-[8%] w-28 h-28 rounded-full border border-white/[0.08]" />

          <div className="relative z-[1] mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-[3px] bg-white/40 mx-auto mb-8" />
              <h2 className="font-display font-black text-[clamp(2rem,4.5vw,3rem)] leading-[1.08] text-white mb-6">
                Join Jenny on the Campaign Trail
              </h2>

              <blockquote className="font-body text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
                &quot;Jenny doesn&apos;t need to be taught how county government
                works. She needs only the opportunity to demonstrate that it can
                work better — for all of us.&quot;
              </blockquote>

              <p className="font-body text-base text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">
                Whether you volunteer, knock on doors, make phone calls, or
                contribute financially — every bit of support moves Washington
                County closer to the accountable government it deserves.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/volunteer"
                  className="inline-flex items-center gap-3 font-body font-semibold
                    text-base text-patriot-red bg-white hover:bg-off-white
                    px-10 py-4 rounded-lg transition-colors duration-200 group/btn"
                >
                  Volunteer
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <Link
                  href="https://secure.anedot.com/b2002057-9fe3-4cb5-8e5a-93539cdc75d4/b2002057-9fe3-4cb5-8e5a-93539cdc75d4" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-body font-semibold
                    text-base text-white border-2 border-white/30
                    hover:border-white/60 px-10 py-4 rounded-lg
                    transition-all duration-200"
                >
                  Donate
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

export default MeetJenny
