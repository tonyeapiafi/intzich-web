import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Intzich Digital | AI Websites, Marketing & Automation | Ontario',
  description: 'Intzich Digital builds AI-powered websites, digital marketing systems, and automation tools for trades and SMBs across Ontario.',
}

export default function Digital() {
  return (
    <div style={{ background: '#07061A' }}>

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute rounded-full pointer-events-none" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(29,158,117,0.12) 0%, transparent 70%)', top: '-150px', right: '-100px', filter: 'blur(80px)', animation: 'orb-drift-2 15s ease-in-out infinite' }} />
        <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.5 }} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ border: '1px solid rgba(29,158,117,0.3)', background: 'rgba(29,158,117,0.08)', color: '#24C28F' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#24C28F', boxShadow: '0 0 6px #24C28F' }} />
            Intzich Digital
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 max-w-[800px]" style={{ color: '#F2F0FC' }}>
            Your digital presence should work as hard{' '}
            <span style={{ background: 'linear-gradient(135deg, #24C28F, #1D9E75)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>as you do.</span>
          </h1>
          <p className="text-lg max-w-[520px] leading-relaxed mb-8" style={{ color: '#9490B8' }}>
            Most trades and construction businesses are invisible online. Their website is outdated, their Google profile is incomplete, and their competitors are winning jobs they should be winning.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact?service=digital-audit" className="inline-block px-7 py-3.5 rounded-xl text-base font-semibold text-white no-underline btn-glow-teal" style={{ background: 'linear-gradient(135deg, #085041, #1D9E75)' }}>
              Get a Free Digital Audit
            </Link>
            <a href="#services" className="inline-block px-7 py-3.5 rounded-xl text-base font-semibold no-underline" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#9490B8' }}>
              See Our Services
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section id="services" className="py-24 px-6" style={{ background: '#0D0B26' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: '#1D9E75' }}>Capabilities</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: '#F2F0FC' }}>What we build</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: '🌐', title: 'AI-Powered Websites', desc: 'Fast, professional, mobile-first sites built with AI assistance. Delivered in 3–4 weeks.' },
              { icon: '📱', title: 'Digital Marketing', desc: 'SEO, Google Business Profile, LinkedIn, and content strategy that generates real leads.' },
              { icon: '⚡', title: 'Workflow Automation', desc: 'AI tools and automated workflows that save your team hours every week.' },
              { icon: '🎯', title: 'Brand & Positioning', desc: 'Messaging and brand identity that makes you look like the leader in your market.' },
            ].map(({ icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="dark-card dark-card-teal p-6 h-full">
                  <div className="text-3xl mb-4">{icon}</div>
                  <h3 className="font-display font-semibold text-sm mb-2" style={{ color: '#F2F0FC' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9490B8' }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE TABLE */}
      <section className="py-24 px-6" style={{ background: '#07061A' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: '#1D9E75' }}>Why Us</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: '#F2F0FC' }}>The Intzich Digital difference</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="dark-card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'rgba(29,158,117,0.08)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <th className="text-left p-4 font-semibold font-display" style={{ color: '#9490B8' }} />
                    <th className="p-4 font-semibold font-display" style={{ color: '#4A4868' }}>Typical Agency</th>
                    <th className="p-4 font-semibold font-display" style={{ color: '#24C28F' }}>Intzich Digital</th>
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
                    <tr key={label as string} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                      <td className="p-4 font-medium" style={{ color: '#F2F0FC' }}>{label}</td>
                      <td className="p-4 text-center" style={{ color: '#4A4868' }}>{them}</td>
                      <td className="p-4 text-center font-medium" style={{ color: '#24C28F' }}>{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DIGITAL LAUNCHPAD */}
      <section id="digital-launchpad" className="py-24 px-6" style={{ background: '#0D0B26' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-5" style={{ background: 'rgba(29,158,117,0.1)', color: '#24C28F' }}>
                Digital · Project
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-2" style={{ color: '#F2F0FC' }}>Digital Launchpad</h2>
              <p className="font-display font-bold text-5xl mb-2" style={{ background: 'linear-gradient(135deg, #24C28F, #1D9E75)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>$5,500 CAD</p>
              <p className="text-sm mb-6" style={{ color: '#4A4868' }}>Timeline: 3–4 weeks · Ideal for trades and SMBs</p>
              <p className="leading-relaxed mb-8" style={{ color: '#9490B8' }}>
                Complete AI-assisted digital presence build. Everything you need to show up online, generate leads, and look like a market leader — delivered in under a month.
              </p>
              <Link href="/contact" className="inline-block px-7 py-3.5 rounded-xl text-base font-semibold text-white no-underline btn-glow-teal" style={{ background: 'linear-gradient(135deg, #085041, #1D9E75)' }}>
                Start Your Digital Launchpad
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="dark-card dark-card-teal p-8">
                <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#4A4868' }}>What&apos;s included</h3>
                <ul className="flex flex-col gap-3">
                  {['Brand brief and messaging guide', '5–7 page professional website', 'Google Business Profile setup & optimization', 'LinkedIn company page setup', '60-day content plan', 'Training session for your team', 'Mobile-first, SEO-optimized build', 'Contact form and lead capture setup'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#9490B8' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="rgba(29,158,117,0.15)" /><path d="M4 7l2.5 2.5L10 5" stroke="#24C28F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FREE AUDIT CTA */}
      <section className="py-16 px-6" style={{ background: '#07061A' }}>
        <div className="max-w-[680px] mx-auto text-center">
          <ScrollReveal>
            <div className="rounded-2xl p-10" style={{ background: 'rgba(186,117,23,0.06)', border: '1px solid rgba(186,117,23,0.2)' }}>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: '#F2F0FC' }}>Not sure where to start?</h2>
              <p className="mb-6" style={{ color: '#9490B8' }}>
                Get a free Digital Audit — we&apos;ll review your current online presence and tell you exactly what&apos;s working, what&apos;s broken, and what to fix first.
              </p>
              <Link href="/contact?service=digital-audit" className="inline-block px-7 py-3.5 rounded-xl text-base font-semibold text-white no-underline" style={{ background: '#BA7517' }}>
                Request Free Digital Audit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
