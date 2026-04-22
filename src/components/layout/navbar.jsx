'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/meet-jenny', label: 'Meet Jenny' },
  { href: '/endorsements', label: 'Endorsements' },
  { href: '/events', label: 'Events' },
  { href: '/ask-jenny', label: 'Ask Jenny' },
  { href: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md
      border-b border-warm-100 shadow-sm">
      <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo — original colors */}
          <Link href="/" className="relative h-12 w-36 flex-shrink-0">
            <Image
              src="/images/logo.webp"
              alt="Jenny Kamprath for County Chair"
              fill
              className="object-contain object-left"
              sizes="144px"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-[13px] font-medium uppercase tracking-[1px]
                  transition-colors duration-200
                  ${isActive(link.href)
                    ? 'text-red-dark font-semibold'
                    : 'text-navy-800/60 hover:text-navy-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <Link
                href="/volunteer"
                className="font-body text-[13px] font-semibold text-navy-800
                  border-2 border-navy-800/20 hover:border-navy-800/50
                  px-5 py-2.5 rounded-lg transition-all duration-200"
              >
                Volunteer
              </Link>
              <Link
                href="https://secure.anedot.com/b2002057-9fe3-4cb5-8e5a-93539cdc75d4/b2002057-9fe3-4cb5-8e5a-93539cdc75d4" target="_blank" rel="noopener noreferrer"
                className="font-body text-[13px] font-semibold text-white bg-red-dark
                  hover:bg-red-hover px-6 py-2.5 rounded-lg transition-colors duration-200"
              >
                Donate
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-navy-900 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-navy-900 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-navy-900 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-warm-100 pb-6">
          <nav className="flex flex-col px-6 pt-4 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-body text-sm font-medium uppercase tracking-[1px]
                  py-3 transition-colors
                  ${isActive(link.href)
                    ? 'text-red-dark font-semibold'
                    : 'text-navy-800/60 hover:text-navy-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-4">
              <Link
                href="/volunteer"
                className="font-body text-sm font-semibold text-navy-800 border-2
                  border-navy-800/20 px-5 py-2.5 rounded-lg text-center flex-1"
              >
                Volunteer
              </Link>
              <Link
                href="https://secure.anedot.com/b2002057-9fe3-4cb5-8e5a-93539cdc75d4/b2002057-9fe3-4cb5-8e5a-93539cdc75d4" target="_blank" rel="noopener noreferrer"
                className="font-body text-sm font-semibold text-white bg-red-dark
                  hover:bg-red-hover px-5 py-2.5 rounded-lg text-center flex-1"
              >
                Donate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
