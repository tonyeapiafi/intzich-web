'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Advisory', href: '/advisory' },
  { label: 'Digital', href: '/digital' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(83,74,183,0.1)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(83,74,183,0.06)' : 'none',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-18 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dx9fyjudj/image/upload/v1755463446/intzich_logoo-22_1_hcgayw_gaqe7q.svg"
            alt="Intzich"
            className="h-14 sm:h-16 w-auto"
            style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(40%) saturate(600%) hue-rotate(220deg) brightness(80%)' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium no-underline transition-colors duration-150"
              style={{ color: pathname === href ? '#534AB7' : '#3D3B5A' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-block px-5 py-2.5 rounded-xl text-sm font-semibold text-white no-underline btn-glow"
            style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}
          >
            Book a Session
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-[5px] cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-[1.5px] w-5 transition-all duration-200"
            style={{
              background: '#0D0B26',
              transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span
            className="block h-[1.5px] w-4 transition-all duration-200"
            style={{
              background: '#0D0B26',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-[1.5px] w-5 transition-all duration-200"
            style={{
              background: '#0D0B26',
              transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(83,74,183,0.08)' }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium no-underline py-1"
              style={{ color: pathname === href ? '#534AB7' : '#3D3B5A' }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-block px-5 py-3 rounded-xl text-sm font-semibold text-white no-underline text-center mt-1"
            style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}
          >
            Book a Session
          </Link>
        </div>
      )}
    </header>
  )
}
