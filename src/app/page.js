import Link from 'next/link'

import Navbar from '@/components/layout/navbar'
import Hero from '@/components/home/hero'
import WhyRunning from '@/components/home/why-running'
import Priorities from '@/components/home/priorities'
import DayOne from '@/components/home/day-one'
import PoweredByPeople from '@/components/home/powered-by-people'
import Events from '@/components/home/events'
import CountdownPledge from '@/components/home/countdown-pledge'
import SiteFooter from '@/components/layout/site-footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyRunning />
        <Priorities />
        <DayOne />
        <PoweredByPeople />
        <Events />
        <CountdownPledge />
      </main>
      <SiteFooter />
    </>
  )
}
