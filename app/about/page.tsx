import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'About Intzich | Tonye Apiafi, PMP | Ontario Business Advisory',
  description: 'Intzich was founded by Tonye Apiafi, a PMP-certified project manager and civil engineering professional with 10+ years in GTA construction and trades.',
}

export default function About() {
  return (
    <div style={{ background: '#07061A' }}>

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute rounded-full pointer-events-none" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(83,74,183,0.12) 0%, transparent 70%)', top: '-100px', right: '10%', filter: 'blur(80px)', animation: 'orb-drift-1 14s ease-in-out infinite' }} />
        <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.4 }} />
        <div className="max-w-[1200px] mx-auto relative z-10 max-w-[760px]">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6" style={{ color: '#F2F0FC' }}>
            Built by someone who{' '}
            <span className="gradient-text">understands your world.</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-[560px]" style={{ color: '#9490B8' }}>
            Intzich exists because the businesses that build our cities, run our infrastructure, and keep our buildings running deserve senior-level strategic support — not just the ones who can afford a Bay Street firm.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-24 px-6" style={{ background: '#0D0B26' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <ScrollReveal className="flex flex-col items-center text-center">
              <div
                className="w-32 h-32 rounded-2xl flex items-center justify-center text-3xl font-bold mb-5 font-display"
                style={{
                  background: 'rgba(83,74,183,0.12)',
                  border: '1px solid rgba(83,74,183,0.25)',
                  color: '#A8A4F0',
                  boxShadow: '0 0 40px rgba(83,74,183,0.1)',
                }}
              >
                TA
              </div>
              <h2 className="font-display font-bold text-xl mb-1" style={{ color: '#F2F0FC' }}>Tonye Apiafi, PMP</h2>
              <p className="text-sm mb-1" style={{ color: '#9490B8' }}>Founder, Intzich</p>
              <p className="text-xs" style={{ color: '#4A4868' }}>Project Manager & Operational Strategy Leader, Lloyd HVAC Services</p>
            </ScrollReveal>

            <div className="md:col-span-2 flex flex-col gap-5">
              <ScrollReveal>
                <p className="leading-relaxed" style={{ color: '#9490B8' }}>
                  Tonye is a civil engineering professional and PMP-certified project manager with over a decade of experience in GTA construction, mechanical contracting, and project delivery. He serves as Project Manager and Operational Strategy Leader at Lloyd HVAC Services Inc. — a full-service HVAC and mechanical contractor working across municipal, federal, institutional, and commercial sectors in Ontario.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="leading-relaxed" style={{ color: '#9490B8' }}>
                  Working inside a trades business at the operational level gave Tonye a front-row seat to the challenges that most advisors never see: cash flow pressure on multi-month projects, the complexity of municipal and DND tendering, the margin squeeze of competitive bidding, and the difficulty of building a team that operates without depending on one person for every decision. He built Intzich to solve those exact problems — for other businesses like his.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="leading-relaxed" style={{ color: '#9490B8' }}>
                  Intzich is his answer to a gap he saw clearly: world-class strategic thinking, combined with real digital capability, made accessible to the businesses that need it most.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-12 px-6" style={{ background: '#07061A', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { badge: 'PMP', label: 'Project Management Professional' },
              { badge: 'COR', label: 'COR 2020 Safety Certified' },
              { badge: 'TSCM', label: 'Turner School of Construction Management' },
              { badge: '10+', label: 'Years in GTA Trades & Construction' },
            ].map(({ badge, label }, i) => (
              <ScrollReveal key={badge} delay={i * 80}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 font-display" style={{ background: 'rgba(83,74,183,0.12)', border: '1px solid rgba(83,74,183,0.2)', color: '#7B72E9' }}>
                    {badge}
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#9490B8' }}>{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION QUOTE */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: '#0D0B26' }}>
        <div className="absolute rounded-full pointer-events-none" style={{ width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(83,74,183,0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', filter: 'blur(60px)' }} />
        <div className="max-w-[720px] mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="text-4xl mb-6" style={{ color: '#534AB7' }}>&ldquo;</div>
            <p className="font-display font-bold text-2xl sm:text-3xl leading-snug mb-6" style={{ color: '#F2F0FC' }}>
              Every business owner deserves access to the kind of strategic thinking that used to be reserved for the biggest companies. That&apos;s what Intzich is here to change.
            </p>
            <p className="text-sm" style={{ color: '#4A4868' }}>— Tonye Apiafi, Founder</p>
          </ScrollReveal>
        </div>
      </section>

      {/* VENTURES */}
      <section className="py-24 px-6" style={{ background: '#07061A' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: '#534AB7' }}>The Ecosystem</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: '#F2F0FC' }}>Our ventures</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Intzich Advisory', color: '#7B72E9', bg: 'rgba(83,74,183,0.08)', border: 'rgba(83,74,183,0.2)', desc: 'Organizational strategy and business management consulting for SMBs, trades, and professional services firms across Ontario.', link: '/advisory', linkLabel: 'Learn more →', external: false },
              { name: 'Intzich Digital', color: '#24C28F', bg: 'rgba(29,158,117,0.08)', border: 'rgba(29,158,117,0.2)', desc: 'AI-assisted websites, digital marketing, and workflow automation built for growing businesses.', link: '/digital', linkLabel: 'Learn more →', external: false },
              { name: 'Lloyd HVAC Services', color: '#BA7517', bg: 'rgba(186,117,23,0.08)', border: 'rgba(186,117,23,0.2)', desc: 'Our sister company and one of Ontario\'s leading mechanical subcontractors. Tonye serves as Project Manager and Operational Strategy Leader, driving project delivery across GTA, Mississauga, Pickering, Peterborough, Waterloo Region, and CFB Borden.', link: 'https://lloydhvac.ca', linkLabel: 'Visit lloydhvac.ca ↗', external: true },
            ].map(({ name, color, bg, border, desc, link, linkLabel, external }, i) => (
              <ScrollReveal key={name} delay={i * 100}>
                <div className="rounded-2xl p-7 h-full flex flex-col" style={{ background: bg, border: `1px solid ${border}` }}>
                  <div className="text-xs font-semibold font-display mb-4" style={{ color }}>
                    {name}
                  </div>
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#9490B8' }}>{desc}</p>
                  {external ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold no-underline" style={{ color }}>{linkLabel}</a>
                  ) : (
                    <Link href={link} className="text-sm font-semibold no-underline" style={{ color }}>{linkLabel}</Link>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHT UP */}
      <section className="py-12 px-6" style={{ background: '#0D0B26' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 className="font-display font-semibold text-lg mb-3" style={{ color: '#F2F0FC' }}>Light Up Campaigns</h3>
              <p className="text-sm leading-relaxed max-w-[640px]" style={{ color: '#9490B8' }}>
                Beyond business, Intzich is committed to community through Light Up Campaigns — an initiative bringing outreach and resources to communities across Ontario, including Cobourg, Stouffville, Port Hope, King City, and Northumberland County.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: '#07061A' }}>
        <div className="max-w-[480px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-3" style={{ color: '#F2F0FC' }}>Work with someone who gets it.</h2>
            <p className="mb-6" style={{ color: '#9490B8' }}>
              Book a complimentary Strategy Session and see the difference it makes when your advisor has actually lived your world.
            </p>
            <Link href="/contact" className="inline-block px-7 py-3.5 rounded-xl text-base font-semibold text-white no-underline btn-glow" style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}>
              Book a Strategy Session
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
