'use client'

import { useState, useEffect } from 'react'

import Image from 'next/image'

const TARGET_DATE = new Date('2026-05-19T00:00:00')

const CountdownPledge = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const diff = TARGET_DATE - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 lg:py-32 bg-patriot-red overflow-hidden">
      {/* Background flag image */}
      <Image
        src="/images/flag.jpg"
        alt=""
        fill
        className="object-cover opacity-15 mix-blend-overlay"
        sizes="100vw"
      />
      {/* Floating circles */}
      <div className="absolute -top-16 right-[15%] w-48 h-48 rounded-full
        border border-white/[0.1]" />
      <div className="absolute bottom-10 left-[5%] w-32 h-32 rounded-full
        border border-white/[0.08]" />
      <div className="absolute top-1/2 right-[5%] w-64 h-64 rounded-full
        border border-white/[0.05]" />

      <div className="relative z-[1] mx-auto max-w-[1290px] px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xs font-bold uppercase tracking-[3px]
            text-white/60 mb-4">
            Mark Your Calendar
          </p>

          <h2 className="font-display font-black text-[clamp(2rem,4.5vw,3rem)]
            leading-[1.08] text-white mb-10">
            The May 19, 2026 Primary Is Critical
          </h2>

          {/* Countdown blocks */}
          <div className="flex gap-3 sm:gap-4 justify-center mb-10">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Min' },
              { value: timeLeft.seconds, label: 'Sec' },
            ].map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] lg:w-20 lg:h-20
                  bg-white/[0.15] backdrop-blur-sm rounded-xl flex items-center
                  justify-center border border-white/[0.2]">
                  <span className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="font-body text-[10px] sm:text-xs font-medium text-white/50
                  mt-2 uppercase tracking-[1px]">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <p className="font-body text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
            Low-turnout primaries decide elections. The direction of Washington
            County will be decided by who shows up. Make sure your voice is heard.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CountdownPledge
