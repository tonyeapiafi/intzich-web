import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Intzich Advisory | Business Strategy & Organizational Consulting | Ontario',
  description:
    'Intzich Advisory helps construction, trades, and professional services businesses in Ontario build stronger organizations and scale smarter.',
}

export default function Advisory() {
  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(83,74,183,0.08) 0%, transparent 70%)',
            top: '-150px', left: '-150px',
            filter: 'blur(80px)',
            animation: 'orb-drift-1 12s ease-in-out infinite',
          }}
        />
        <div
          className="absolute inset-0 dot-grid pointer-events-none"
          style={{ opacity: 0.5 }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{ border: '1px solid rgba(83,74,183,0.3)', background: 'rgba(83,74,183,0.08)', color: '#534AB7' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#534AB7', boxShadow: '0 0 6px #7B72E9' }} />
            Intzich Advisory
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 max-w-[800px]" style={{ color: '#0D0B26' }}>
            Strategic clarity for businesses ready to{' '}
            <span className="gradient-text">scale.</span>
          </h1>
          <p className="text-lg max-w-[520px] leading-relaxed mb-8" style={{ color: '#7B79A0' }}>
            Most business owners are working harder than ever but not growing the way they want. The problem isn&apos;t effort. It&apos;s strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="inline-block px-7 py-3.5 rounded-xl text-base font-semibold text-white no-underline btn-glow" style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}>
              Book a Strategy Session
            </Link>
            <a href="#offers" className="inline-block px-7 py-3.5 rounded-xl text-base font-semibold no-underline" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#7B79A0' }}>
              See Our Offers
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 px-6" style={{ background: '#F6F5FF' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: '#534AB7' }}>Capabilities</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: '#0D0B26' }}>What we do</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Strategy',
                items: ['Positioning & market entry', 'Growth roadmap development', 'Competitive analysis', 'Revenue strategy'],
              },
              {
                title: 'Organization',
                items: ['Org structure design', 'Leadership development', 'Hiring & team building', 'Culture and accountability'],
              },
              {
                title: 'Profit',
                items: ['Margin analysis & pricing', 'Cash flow optimization', 'KPI frameworks', 'Cost structure review'],
              },
            ].map(({ title, items }, i) => (
              <ScrollReveal key={title} delay={i * 100}>
                <div className="light-card p-8 h-full">
                  <h3 className="font-display font-semibold text-lg mb-5" style={{ color: '#0D0B26' }}>{title}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#7B79A0' }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#534AB7' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-24 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: '#534AB7' }}>Methodology</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3" style={{ color: '#0D0B26' }}>
              We don&apos;t prescribe before we diagnose.
            </h2>
            <p style={{ color: '#7B79A0' }}>Every engagement starts with deep understanding.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { num: '01', label: 'Intake', desc: 'Deep-dive into your business, numbers, and goals.' },
              { num: '02', label: 'Analysis', desc: 'We identify what\'s holding you back and where the leverage is.' },
              { num: '03', label: 'Insight', desc: 'Clear diagnosis: strengths, gaps, and priority actions.' },
              { num: '04', label: 'Roadmap', desc: 'A 90-day plan built for your specific situation.' },
              { num: '05', label: 'Execution', desc: 'We stay involved to support implementation.' },
            ].map(({ num, label, desc }, i) => (
              <ScrollReveal key={num} delay={i * 80}>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold mx-auto mb-3 font-display" style={{ background: 'rgba(83,74,183,0.1)', border: '1px solid rgba(83,74,183,0.2)', color: '#534AB7' }}>
                    {num}
                  </div>
                  <h4 className="font-display font-semibold text-sm mb-1.5" style={{ color: '#0D0B26' }}>{label}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#7B79A0' }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section id="offers" className="py-24 px-6" style={{ background: '#F6F5FF' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: '#534AB7' }}>Offers</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: '#0D0B26' }}>Advisory engagements</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Foundation Sprint */}
            <ScrollReveal delay={0}>
              <div id="foundation-sprint" className="light-card p-10 h-full flex flex-col">
                <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-5 w-fit" style={{ background: 'rgba(83,74,183,0.1)', color: '#534AB7' }}>
                  Advisory · Project
                </div>
                <h3 className="font-display font-bold text-2xl mb-1" style={{ color: '#0D0B26' }}>Foundation Sprint</h3>
                <p className="font-display font-bold text-4xl mb-1 gradient-text-purple">$3,500 CAD</p>
                <p className="text-xs mb-5" style={{ color: '#7B79A0' }}>30-day engagement · One-time</p>
                <p className="text-sm mb-6" style={{ color: '#7B79A0' }}>Ideal for SMBs at an inflection point who need clarity fast.</p>
                <h4 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#7B79A0' }}>What&apos;s included</h4>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {['Deep-dive business diagnostic', 'Full SWOT analysis', '90-Day Growth Roadmap', 'Priority action list', '1 follow-up strategy call', 'Written deliverables package'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#7B79A0' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="rgba(83,74,183,0.2)" /><path d="M4 7l2.5 2.5L10 5" stroke="#7B72E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-xl text-sm font-semibold text-white no-underline btn-glow w-fit" style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}>
                  Start Foundation Sprint
                </Link>
              </div>
            </ScrollReveal>

            {/* Scale Partner */}
            <ScrollReveal delay={150}>
              <div id="scale-partner" className="p-10 h-full flex flex-col" style={{ background: 'rgba(83,74,183,0.06)', border: '1px solid rgba(83,74,183,0.3)', borderRadius: '16px', boxShadow: '0 0 60px rgba(83,74,183,0.08)' }}>
                <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-5 w-fit" style={{ background: 'rgba(83,74,183,0.08)', color: '#534AB7' }}>
                  Advisory + Digital · Retainer
                </div>
                <h3 className="font-display font-bold text-2xl mb-1" style={{ color: '#0D0B26' }}>Scale Partner</h3>
                <p className="font-display font-bold text-4xl mb-1 gradient-text">$4,500 CAD/mo</p>
                <p className="text-xs mb-5" style={{ color: '#7B79A0' }}>3-month minimum · Cancel after 3 months</p>
                <p className="text-sm mb-6" style={{ color: '#7B79A0' }}>Your embedded strategy + digital partner for growth-stage businesses.</p>
                <h4 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#7B79A0' }}>Monthly deliverables</h4>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {['2 × strategy sessions per month', 'Ongoing organizational advisory', 'Digital performance report', '4 LinkedIn posts per month', 'Priority access to the Intzich team', 'Quarterly roadmap reset'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#7B79A0' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="rgba(83,74,183,0.2)" /><path d="M4 7l2.5 2.5L10 5" stroke="#7B72E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-xl text-sm font-semibold text-white no-underline btn-glow w-fit" style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}>
                  Become a Scale Partner
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-24 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <p className="text-sm font-medium uppercase tracking-widest mb-5" style={{ color: '#534AB7' }}>Is this you?</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8" style={{ color: '#0D0B26' }}>
                This is for you if<span className="gradient-text">...</span>
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  'Your revenue has plateaued and you don\'t know why',
                  'You\'re the bottleneck in your own business',
                  'Margins are shrinking even as revenue grows',
                  'You\'re winning bids but losing on profit',
                  'You want to scale but don\'t have a real plan',
                  'You need someone who understands your industry',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#7B79A0' }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5"><circle cx="9" cy="9" r="9" fill="rgba(83,74,183,0.08)" /><path d="M5.5 9l2.5 2.5L12.5 7" stroke="#7B72E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="rounded-2xl p-10 text-center" style={{ background: 'rgba(83,74,183,0.06)', border: '1px solid rgba(83,74,183,0.2)' }}>
                <p className="font-display font-bold text-xl mb-4" style={{ color: '#0D0B26' }}>
                  &ldquo;Stop guessing. Start growing.&rdquo;
                </p>
                <p className="text-sm mb-6" style={{ color: '#7B79A0' }}>
                  Your first strategy session is complimentary. No pitch, no pressure.
                </p>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-xl text-sm font-semibold text-white no-underline btn-glow" style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}>
                  Book a Session
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
