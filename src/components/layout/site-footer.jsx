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
  return (
    <footer className="relative bg-navy-900 overflow-hidden">
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
                src="/images/logo.png"
                alt="Jenny Kamprath for County Chair"
                fill
                className="object-contain object-left brightness-0 invert"
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
                  justify-center text-white/70 hover:text-white hover:bg-white/[0.12]
                  transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jenny-kamprath-717255a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center
                  justify-center text-white/70 hover:text-white hover:bg-white/[0.12]
                  transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center
                  justify-center text-white/70 hover:text-white hover:bg-white/[0.12]
                  transition-all duration-200"
                aria-label="X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-[2px]
              text-white/70 mb-6">
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
              text-white/70 mb-6">
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
                href="tel:9713655668"
                className="hover:text-white transition-colors"
              >
                (971) 365-5668
              </a>
            </div>
          </div>

          {/* Column 4 — Take Action */}
          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-[2px]
              text-white/70 mb-6">
              Take Action
            </h3>
            <p className="font-body text-sm text-white/55 leading-relaxed mb-6">
              Join the movement to take back Washington County. Every volunteer
              and every dollar moves us closer to accountable government.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/volunteer"
                className="w-full text-center font-body font-semibold text-sm
                  text-white bg-transparent border-2 border-white/20
                  hover:border-white/50 py-3 rounded-lg transition-all duration-200"
              >
                Volunteer
              </Link>
              <a
                href="https://secure.anedot.com/b2002057-9fe3-4cb5-8e5a-93539cdc75d4/b2002057-9fe3-4cb5-8e5a-93539cdc75d4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center font-body font-semibold text-sm
                  text-white bg-red-dark hover:bg-red-hover py-3 rounded-lg
                  transition-colors duration-200"
              >
                Donate
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col lg:flex-row justify-between items-start
          lg:items-center gap-4">
          <div className="font-body text-xs text-white/70 leading-relaxed max-w-2xl">
            <p className="font-semibold text-white mb-1">
              Paid For By Friends of Jenny Kamprath
            </p>
            <p>
              Contributions are not tax deductible for federal income tax purposes.
              Oregon law requires political committees to report the name, address,
              occupation, and employer of contributors whose aggregate contributions
              exceed $100.
            </p>
          </div>
          <div className="flex gap-4 font-body text-xs text-white/70 flex-shrink-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        <div className="mt-6 text-center font-body text-xs text-white/70">
          &copy; 2026 Friends of Jenny Kamprath. All rights reserved.
        </div>

        <div className="mt-2 text-center font-body text-xs text-white/70">
          Powered by{' '}
          <a
            href="https://op1776.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Operation 1776
          </a>
        </div>

        <div className="mt-4 text-center font-body text-[11px] italic
          text-white/45 leading-relaxed max-w-2xl mx-auto px-4">
          Some images, audio, video, or written content may be created or
          enhanced using artificial intelligence (AI) tools.
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
