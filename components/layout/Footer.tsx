import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0D0B26', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{
                  background: 'linear-gradient(135deg, #3C3489, #534AB7)',
                  boxShadow: '0 0 16px rgba(83,74,183,0.3)',
                }}
              >
                I
              </div>
              <span className="text-lg font-semibold font-display" style={{ color: '#F2F0FC' }}>
                Intzich
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#4A4868' }}>
              Strategy, Digital & Organizational Advisory
              <br />Ontario, Canada
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium no-underline transition-colors"
              style={{ color: '#7B72E9' }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#4A4868' }}>
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                ['Advisory', '/advisory'],
                ['Digital', '/digital'],
                ['Foundation Sprint', '/advisory#foundation-sprint'],
                ['Digital Launchpad', '/digital#digital-launchpad'],
                ['Scale Partner', '/advisory#scale-partner'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm no-underline transition-colors"
                    style={{ color: '#9490B8' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#4A4868' }}>
              Company
            </p>
            <ul className="flex flex-col gap-2.5">
              {[['About', '/about'], ['Contact', '/contact']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm no-underline" style={{ color: '#9490B8' }}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://lloydhvac.ca" target="_blank" rel="noopener noreferrer" className="text-sm no-underline" style={{ color: '#9490B8' }}>
                  Lloyd HVAC Services ↗
                </a>
              </li>
              <li>
                <a href="mailto:hello@intzich.com" className="text-sm no-underline" style={{ color: '#9490B8' }}>
                  hello@intzich.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-line mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#4A4868' }}>© 2025 Intzich. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs no-underline" style={{ color: '#4A4868' }}>Privacy Policy</Link>
            <Link href="/terms" className="text-xs no-underline" style={{ color: '#4A4868' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
