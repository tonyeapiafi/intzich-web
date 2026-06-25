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
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(7,6,26,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline group">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #3C3489, #534AB7)',
              boxShadow: '0 0 16px rgba(83,74,183,0.4)',
            }}
          >
            I
          </div>
          <span className="text-lg font-semibold font-display" style={{ color: '#F2F0FC' }}>
            Intzich
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium no-underline transition-colors duration-200"
              style={{
                color: pathname === link.href ? '#A8A4F0' : '#9490B8',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold text-white no-underline transition-all duration-200 btn-glow"
            style={{
              background: 'linear-gradient(135deg, #3C3489, #534AB7)',
            }}
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: '#9490B8' }} />
          <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: '#9490B8' }} />
          <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: '#9490B8' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-5 flex flex-col gap-4"
          style={{
            background: 'rgba(7,6,26,0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium no-underline py-1"
              style={{ color: '#9490B8' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-block px-5 py-3 rounded-lg text-sm font-semibold text-white text-center no-underline mt-1"
            style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  )
}
