import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#FAFAF8] border-t border-black/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-7 h-7 rounded flex items-center justify-center text-white text-sm font-bold"
                style={{ background: '#3C3489' }}
              >
                I
              </span>
              <span className="text-xl font-bold" style={{ color: '#3C3489' }}>
                Intzich
              </span>
            </div>
            <p className="text-sm text-[#888780] leading-relaxed mb-4">
              Strategy, Digital & Organizational Advisory
              <br />
              Ontario, Canada
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#3C3489] font-medium no-underline hover:text-[#26215C]"
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#888780] mb-4">
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
                    className="text-sm text-[#444441] hover:text-[#3C3489] no-underline transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#888780] mb-4">
              Company
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                ['About', '/about'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#444441] hover:text-[#3C3489] no-underline transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://lloydhvac.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#444441] hover:text-[#3C3489] no-underline transition-colors"
                >
                  Lloyd HVAC Services ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@intzich.com"
                  className="text-sm text-[#444441] hover:text-[#3C3489] no-underline transition-colors"
                >
                  hello@intzich.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#888780]">© 2025 Intzich. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-[#888780] hover:text-[#444441] no-underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[#888780] hover:text-[#444441] no-underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
