import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0D0B26' }}>
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="https://res.cloudinary.com/dx9fyjudj/image/upload/v1755463446/intzich_logoo-22_1_hcgayw_gaqe7q.svg"
              alt="Intzich"
              className="h-7 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-sm leading-relaxed max-w-[280px]" style={{ color: '#9490B8' }}>
              Strategy and digital advisory for businesses and professional services.
            </p>
            <a
              href="https://www.linkedin.com/company/intzich"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm font-medium no-underline"
              style={{ color: '#7B72E9' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#4A4868' }}>Services</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Advisory', href: '/advisory' },
                { label: 'Digital', href: '/digital' },
                { label: 'Foundation Sprint', href: '/advisory#foundation-sprint' },
                { label: 'Digital Launchpad', href: '/digital#digital-launchpad' },
                { label: 'Scale Partner', href: '/advisory#scale-partner' },
              ].map(({ label, href }) => (
                <Link key={label} href={href} className="text-sm no-underline" style={{ color: '#9490B8' }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#4A4868' }}>Company</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Book a Session', href: '/contact' },
              ].map(({ label, href }) => (
                <Link key={label} href={href} className="text-sm no-underline" style={{ color: '#9490B8' }}>
                  {label}
                </Link>
              ))}
              <a href="mailto:hello@intzich.com" className="text-sm no-underline" style={{ color: '#9490B8' }}>
                hello@intzich.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="section-line mb-6" />
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs" style={{ color: '#4A4868' }}>
            © {new Date().getFullYear()} Intzich Inc. All rights reserved. Ontario, Canada.
          </p>
          <p className="text-xs" style={{ color: '#4A4868' }}>
            Strategy · Digital · Advisory
          </p>
        </div>
      </div>
    </footer>
  )
}
