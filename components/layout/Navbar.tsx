'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Advisory', href: '/advisory' },
  { label: 'Digital', href: '/digital' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white border-b border-black/[0.08] shadow-sm' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span
            className="w-7 h-7 rounded flex items-center justify-center text-white text-sm font-bold"
            style={{ background: '#3C3489' }}
          >
            I
          </span>
          <span className="text-xl font-bold" style={{ color: '#3C3489' }}>
            Intzich
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-150 no-underline ${
                pathname === link.href
                  ? 'text-[#3C3489]'
                  : 'text-[#444441] hover:text-[#3C3489]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold text-white no-underline transition-colors duration-150"
            style={{ background: '#3C3489' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = '#26215C')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = '#3C3489')}
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[#2C2C2A] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#2C2C2A] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#2C2C2A] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/[0.08] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#444441] hover:text-[#3C3489] no-underline py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold text-white text-center no-underline mt-2"
            style={{ background: '#3C3489' }}
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  )
}
