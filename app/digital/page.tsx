import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Intzich Digital | AI Websites, Marketing & Automation',
  description: 'Intzich Digital builds AI-powered websites, digital marketing systems, and automation tools for growing businesses.',
}

export default function Digital() {
  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* HERO */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-5 overflow-hidden">
        <div className="absolute rounded-full pointer-events-none" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(20,144,104,0.07) 0%, transparent 70%)', top: '-150px', right: '-80px', filter: 'blur(80px)', animation: 'orb-drift-2 15s ease-in-out infinite' }} />
        <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.5 }} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5" style={{ border: '1px solid rgba(20,144,104,0.2)', background: 'rgba(20,144,104,0.06)', color: '#149068' }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#149068' }} />
            Intzich Digital
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-5 max-w-[800px]" style={{ color: '#0D0B26' }}>
            Your digital presence should work as hard{' '}
            <span style={{ background: 'linear-gradient(135deg, #24C28F, #1D9E75)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>as you do.</span>
          </h1>
          <p className="text-sm sm:text-lg max-w-[520px] leading-relaxed mb-7" style={{ color: '#7B79A0' }}>
            Most businesses are invisible online — their website is outdated, their Google profile is incomplete, and competitors are winning jobs they should be winning.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact?service=digital-audit" className="inline-block px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white no-underline btn-glow-teal" style={{ background: 'linear-gradient(135deg, #085041, #1D9E75)' }}>
              Get a Free Digital Audit
            </Link>
            <a href="#services" className="inline-block px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold no-underline" style={{ border: '1px solid rgba(20,144,104,0.2)', color: '#149068' }}>
              See Our Services
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section id="services" className="py-16 sm:py-24 px-5" style={{ background: '#F6F5FF' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: '#149068' }}>Capabilities</p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl" style={{ color: '#0D0B26' }}>What we build</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '🌐', title: 'AI-Powered Websites', desc: 'Fast, professional, mobile-first sites built with AI assistance. Delivered in 3–4 weeks.' },
              { icon: '📱', title: 'Digital Marketing', desc: 'SEO, Google Business Profile, LinkedIn, and content strategy that generates real leads.' },
              { icon: '⚡', title: 'Workflow Automation', desc: 'AI tools and automated workflows that save your team hours every week.' },
              { icon: '🎯', title: 'Brand & Positioning', desc: 'Messaging and brand identity that makes you look like the leader in your market.' },
            ].map(({ icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="light-card light-card-teal p-5 sm:p-6 h-full flex gap-4 items-start">
                  <div className="text-2xl flex-shrink-0">{icon}</div>
                  <div>
                    <h3 className="font-display font-semibold text-sm sm:text-base mb-1.5" style={{ color: '#0D0B26' }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#7B79A0' }}>{desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE TABLE */}
      <section className="py-16 sm:py-24 px-5" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: '#149068' }}>Why Us</p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl" style={{ color: '#0D0B26' }}>The Intzich Digital difference</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="light-card overflow-x-auto">
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr style={{ background: 'rgba(20,144,104,0.04)', borderBottom: '1px solid rgba(83,74,183,0.08)' }}>
                    <th className="text-left p-4 font-semibold font-display" style={{ color: '#7B79A0' }} />
                    <th className="p-4 font-semibold font-display" style={{ color: '#7B79A0' }}>Typical Agency</th>
                    <th className="p-4 font-semibold font-display" style={{ color: '#149068' }}>Intzich Digital</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Industry knowledge', 'Generic', 'Sector-specialized'],
                    ['Strategy layer', 'None', 'Embedded (Advisory arm)'],
                    ['Timeline', '8–16 weeks', '3–4 weeks'],
                    ['Approach', 'Template sites', 'AI-assisted, custom-built'],
                    ['Relationship', 'Project-only', 'Ongoing partner option'],
                  ].map(([label, them, us], i) => (
                    <tr key={label as string} style={{ borderBottom: '1px solid rgba(83,74,183,0.06)', background: i % 2 === 0 ? 'transparent' : 'rgba(83,74,183,0.015)' }}>
                      <td className="p-4 font-medium text-sm" style={{ color: '#0D0B26' }}>{label}</td>
                      <td className="p-4 text-center text-sm" style={{ color: '#7B79A0' }}>{them}</td>
                      <td className="p-4 text-center text-sm font-medium" style={{ color: '#149068' }}>{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DIGITAL LAUNCHPAD */}
      <section id="digital-launchpad" className="py-16 sm:py-24 px-5" style={{ background: '#F6F5FF' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
            <ScrollReveal>
              <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-4" style={{ background: 'rgba(29,158,117,0.08)', color: '#149068' }}>Digital · Project</div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl mb-2" style={{ color: '#0D0B26' }}>Digital Launchpad</h2>
              <p className="font-display font-bold text-4xl sm:text-5xl mb-2" style={{ background: 'linear-gradient(135deg, #24C28F, #1D9E75)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>$5,500 CAD</p>
              <p className="text-sm mb-5" style={{ color: '#7B79A0' }}>Timeline: 3–4 weeks · Ideal for businesses ready to show up online</p>
              <p className="text-sm sm:text-base leading-relaxed mb-7" style={{ color: '#7B79A0' }}>
                Complete AI-assisted digital presence build. Everything you need to generate leads and look like a market leader — delivered in under a month.
              </p>
              <Link href="/contact" className="inline-block px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white no-underline btn-glow-teal" style={{ background: 'linear-gradient(135deg, #085041, #1D9E75)' }}>
                Start Your Digital Launchpad
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="light-card light-card-teal p-6 sm:p-8">
                <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#7B79A0' }}>What&apos;s included</h3>
                <ul className="flex flex-col gap-3">
                  {['Brand brief and messaging guide', '5–7 page professional website', 'Google Business Profile setup & optimization', 'LinkedIn company page setup', '60-day content plan', 'Training session for your team', 'Mobile-first, SEO-optimized build', 'Contact form and lead capture setup'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#7B79A0' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0"><circle cx="7" cy="7" r="7" fill="rgba(29,158,117,0.12)" /><path d="M4 7l2.5 2.5L10 5" stroke="#24C28F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
      <section className="py-12 sm:py-16 px-5" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[680px] mx-auto text-center">
          <ScrollReveal>
            <div className="rounded-2xl p-7 sm:p-10" style={{ background: 'rgba(186,117,23,0.05)', border: '1px solid rgba(186,117,23,0.15)' }}>
              <h2 className="font-display font-bold text-xl sm:text-2xl mb-3" style={{ color: '#0D0B26' }}>Not sure where to start?</h2>
              <p className="text-sm sm:text-base mb-6" style={{ color: '#7B79A0' }}>
                Get a free Digital Audit — we&apos;ll review your current online presence and tell you exactly what&apos;s working, what&apos;s broken, and what to fix first.
              </p>
              <Link href="/contact?service=digital-audit" className="inline-block px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white no-underline" style={{ background: '#BA7517' }}>
                Request Free Digital Audit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
