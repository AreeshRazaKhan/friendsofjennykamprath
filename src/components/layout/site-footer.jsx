'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

const FOOTER_NAV = [
  { href: '/', label: 'Home' },
  { href: '/meet-jenny', label: 'Meet Jenny' },
  { href: '/ask-jenny', label: 'Ask Jenny' },
  { href: '/events', label: 'Events' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact' },
]

const SiteFooter = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <footer className="relative bg-navy-900 overflow-hidden">
      {/* Edge stripe */}
      <div className="absolute right-0 top-0 bottom-0 w-2 z-10"
        style={{
          background: 'linear-gradient(180deg, #C41E3A 0%, #C41E3A 40%, #1B3A5C 40%, #1B3A5C 100%)',
        }}
      />

      {/* Floating circles */}
      <div className="absolute -top-20 left-[20%] w-52 h-52 rounded-full
        border border-white/[0.03]" />
      <div className="absolute bottom-10 right-[25%] w-36 h-36 rounded-full
        border border-white/[0.04]" />

      <div className="relative z-[1] mx-auto max-w-[1290px] px-6 lg:px-10
        pt-16 lg:pt-24 pb-8">

        {/* Top row — logo + columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]
          gap-12 lg:gap-8 pb-12 border-b border-white/[0.08]">

          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="relative block h-16 w-48 mb-6">
              <Image
                src="/images/logo.webp"
                alt="Jenny Kamprath for County Chair"
                fill
                className="object-contain brightness-0 invert"
                sizes="192px"
              />
            </Link>

            {/* Social icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.facebook.com/people/Jenny-Kamprath-for-Washington-County-Chair/61580724388246/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center
                  justify-center text-white/50 hover:text-white hover:bg-white/[0.12]
                  transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://x.com/jennyforwashco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center
                  justify-center text-white/50 hover:text-white hover:bg-white/[0.12]
                  transition-all duration-200"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center
                  justify-center text-white/50 hover:text-white hover:bg-white/[0.12]
                  transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-[2px]
              text-white/40 mb-6">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {FOOTER_NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-white/55 hover:text-white
                    transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-[2px]
              text-white/40 mb-6">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 font-body text-sm text-white/55">
              <p>PO Box 122</p>
              <p>Beaverton, OR 97075</p>
              <a
                href="mailto:jenny@jennykamprath.com"
                className="hover:text-white transition-colors"
              >
                jenny@jennykamprath.com
              </a>
              <a
                href="tel:5035158576"
                className="hover:text-white transition-colors"
              >
                (503) 515-8576
              </a>
            </div>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-[2px]
              text-white/40 mb-6">
              Sign Up for Updates
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                required
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-white/[0.06] border border-white/[0.1]
                  rounded-lg px-4 py-3 text-white placeholder:text-white/30
                  font-body text-sm focus:outline-none focus:border-patriot-red
                  transition-colors"
              />
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/[0.06] border border-white/[0.1]
                  rounded-lg px-4 py-3 text-white placeholder:text-white/30
                  font-body text-sm focus:outline-none focus:border-patriot-red
                  transition-colors"
              />
              <button
                type="submit"
                className="w-full font-body font-semibold text-sm text-white
                  bg-patriot-red hover:bg-red-dark py-3 rounded-lg
                  transition-colors duration-200"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col lg:flex-row justify-between items-start
          lg:items-center gap-4">
          <div className="font-body text-xs text-white/30 leading-relaxed max-w-2xl">
            <p className="font-semibold text-white/40 mb-1">
              Paid For By Friends of Jenny Kamprath
            </p>
            <p>
              Contributions are not tax deductible for federal income tax purposes.
              Oregon law requires political committees to report the name, address,
              occupation, and employer of contributors whose aggregate contributions
              exceed $100.
            </p>
          </div>
          <div className="flex gap-4 font-body text-xs text-white/30 flex-shrink-0">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-of-service" className="hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
        </div>

        <div className="mt-6 text-center font-body text-xs text-white/20">
          &copy; 2026 Friends of Jenny Kamprath. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
