import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intzich Digital | AI Websites, Marketing & Automation | Ontario',
  description:
    'Intzich Digital builds AI-powered websites, digital marketing systems, and automation tools for trades and SMBs across Ontario.',
}

export default function Digital() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="py-24 px-6" style={{ background: '#E1F5EE', borderLeft: '8px solid #0F6E56' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold mb-5" style={{ background: '#0F6E56', color: '#FFFFFF' }}>
            Intzich Digital
          </div>
          <h1 className="text-4xl md:text-[40px] font-bold mb-5 leading-tight max-w-[640px]" style={{ color: '#085041' }}>
            Your digital presence should work as hard as you do.
          </h1>
          <p className="text-lg text-[#444441] leading-relaxed mb-8 max-w-[580px]">
            Most trades and construction businesses are invisible online. Their website is outdated, their Google profile is incomplete, and their competitors are winning jobs they should be winning.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact?service=digital-audit" className="inline-block px-7 py-3.5 rounded-lg text-base font-semibold text-white no-underline" style={{ background: '#0F6E56' }}>
              Get a Free Digital Audit
            </Link>
            <a href="#services" className="inline-block px-7 py-3.5 rounded-lg text-base font-semibold no-underline border" style={{ color: '#0F6E56', borderColor: '#0F6E56' }}>
              See Our Services
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold" style={{ color: '#085041' }}>What we build</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: '🌐',
                title: 'AI-Powered Websites',
                desc: 'Fast, professional, mobile-first sites built with AI assistance. Delivered in 3–4 weeks.',
              },
              {
                icon: '📱',
                title: 'Digital Marketing',
                desc: 'SEO, Google Business Profile, LinkedIn, and content strategy that generates real leads.',
              },
              {
                icon: '⚡',
                title: 'Workflow Automation',
                desc: 'AI tools and automated workflows that save your team hours every week.',
              },
              {
                icon: '🎯',
                title: 'Brand & Positioning',
                desc: 'Messaging, brand identity, and positioning that makes you look like the leader in your market.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-card border border-black/[0.08] p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#085041' }}>{title}</h3>
                <p className="text-sm text-[#888780] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="py-20 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: '#085041' }}>The Intzich Digital difference</h2>
          </div>
          <div className="rounded-card border border-black/[0.08] overflow-hidden shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: '#E1F5EE' }}>
                    <th className="text-left p-4 font-semibold text-[#085041]" />
                    <th className="p-4 font-semibold text-[#888780]">Typical Agency</th>
                    <th className="p-4 font-semibold text-[#085041]">Intzich Digital</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Industry knowledge', 'Generic', 'Trades & construction specialists'],
                    ['Strategy layer', 'None', 'Embedded (Advisory arm)'],
                    ['Timeline', '8–16 weeks', '3–4 weeks'],
                    ['Approach', 'Template sites', 'AI-assisted, custom-built'],
                    ['Relationship', 'Project-only', 'Ongoing partner option'],
                  ].map(([label, them, us], i) => (
                    <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="p-4 font-medium text-[#2C2C2A]">{label}</td>
                      <td className="p-4 text-center text-[#888780]">{them}</td>
                      <td className="p-4 text-center font-medium" style={{ color: '#0F6E56' }}>{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL LAUNCHPAD */}
      <section id="digital-launchpad" className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold mb-4" style={{ background: '#E1F5EE', color: '#0F6E56' }}>
                Digital · Project
              </div>
              <h2 className="text-3xl font-semibold mb-2" style={{ color: '#085041' }}>Digital Launchpad</h2>
              <p className="text-4xl font-bold mb-2" style={{ color: '#0F6E56' }}>$5,500 CAD</p>
              <p className="text-sm text-[#888780] mb-6">Timeline: 3–4 weeks · Ideal for trades and SMBs</p>
              <p className="text-[#444441] leading-relaxed mb-8">
                Complete AI-assisted digital presence build. Everything you need to show up online, generate leads, and look like a market leader — delivered in under a month.
              </p>
              <Link href="/contact" className="inline-block px-7 py-3.5 rounded-lg text-base font-semibold text-white no-underline" style={{ background: '#0F6E56' }}>
                Start Your Digital Launchpad
              </Link>
            </div>
            <div className="rounded-card border border-black/[0.08] p-8 shadow-card">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#888780] mb-5">What&apos;s included</h3>
              <ul className="flex flex-col gap-3">
                {[
                  'Brand brief and messaging guide',
                  '5–7 page professional website',
                  'Google Business Profile setup & optimization',
                  'LinkedIn company page setup',
                  '60-day content plan',
                  'Training session for your team',
                  'Mobile-first, SEO-optimized build',
                  'Contact form and lead capture setup',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#444441]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="#E1F5EE" />
                      <path d="M4 7l2.5 2.5L10 5" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FREE AUDIT CTA */}
      <section className="py-16 px-6" style={{ background: '#FAEEDA' }}>
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#633806' }}>
            Not sure where to start?
          </h2>
          <p className="text-[#854F0B] mb-6">
            Get a free Digital Audit — we&apos;ll review your current online presence and tell you exactly what&apos;s working, what&apos;s broken, and what to fix first.
          </p>
          <Link
            href="/contact?service=digital-audit"
            className="inline-block px-7 py-3.5 rounded-lg text-base font-semibold text-white no-underline"
            style={{ background: '#BA7517' }}
          >
            Request Free Digital Audit
          </Link>
        </div>
      </section>
    </div>
  )
}
