import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Intzich | Business Strategy & Digital Advisory | Ontario',
  description:
    'Intzich helps construction, trades, and professional services companies in Ontario build stronger organizations and a powerful digital presence.',
}

export default function Home() {
  return (
    <div style={{ background: '#07061A' }}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute rounded-full"
            style={{
              width: '700px', height: '700px',
              background: 'radial-gradient(circle, rgba(83,74,183,0.18) 0%, transparent 70%)',
              top: '-150px', left: '-150px',
              filter: 'blur(80px)',
              animation: 'orb-drift-1 12s ease-in-out infinite',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: '500px', height: '500px',
              background: 'radial-gradient(circle, rgba(29,158,117,0.12) 0%, transparent 70%)',
              top: '10%', right: '-100px',
              filter: 'blur(80px)',
              animation: 'orb-drift-2 15s ease-in-out infinite',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: '400px', height: '400px',
              background: 'radial-gradient(circle, rgba(123,114,233,0.1) 0%, transparent 70%)',
              bottom: '10%', left: '30%',
              filter: 'blur(80px)',
              animation: 'orb-drift-3 18s ease-in-out infinite',
            }}
          />
          {/* Dot grid */}
          <div className="absolute inset-0 dot-grid" />
          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(7,6,26,0.7) 100%)',
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-[860px] mx-auto">
          {/* Badge */}
          <div
            className="hero-line hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
            style={{
              border: '1px solid rgba(123,114,233,0.35)',
              background: 'rgba(83,74,183,0.08)',
              color: '#A8A4F0',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#7B72E9', boxShadow: '0 0 6px #7B72E9' }}
            />
            Strategy & Digital Advisory · Ontario
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold leading-[1.05] tracking-tight mb-6">
            <span
              className="hero-line hero-line-1 block text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ color: '#F2F0FC' }}
            >
              Build a stronger
            </span>
            <span
              className="hero-line hero-line-2 block text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ color: '#F2F0FC' }}
            >
              business.{' '}
              <span className="gradient-text">Scale</span>
            </span>
            <span
              className="hero-line hero-line-3 block text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text"
            >
              with confidence.
            </span>
          </h1>

          {/* Sub */}
          <p
            className="hero-line hero-sub text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto mb-10"
            style={{ color: '#9490B8' }}
          >
            Intzich helps growing businesses in construction, trades, and professional
            services build stronger organizations, sharper strategies, and a powerful
            digital presence.
          </p>

          {/* CTAs */}
          <div className="hero-line hero-ctas flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block px-7 py-3.5 rounded-xl text-base font-semibold text-white no-underline btn-glow"
              style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}
            >
              Book a Complimentary Session
            </Link>
            <Link
              href="#services"
              className="inline-block px-7 py-3.5 rounded-xl text-base font-semibold no-underline transition-all duration-200"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#9490B8',
              }}
            >
              See Our Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 3v12M9 15l-4-4M9 15l4-4" stroke="#4A4868" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-[1200px] mx-auto px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: '🏗', label: 'PMP Certified Leadership' },
              { icon: '🤖', label: 'AI-Powered Digital Solutions' },
              { icon: '📍', label: 'Ontario-Based, GTA-Focused' },
              { icon: '🔧', label: 'Trades & Construction Specialists' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-lg">{icon}</span>
                <span className="text-sm font-medium" style={{ color: '#9490B8' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO ARMS ── */}
      <section id="services" className="py-24 px-6" style={{ background: '#07061A' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: '#534AB7' }}>
              What We Do
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4" style={{ color: '#F2F0FC' }}>
              One firm. Two powerful
              <span className="gradient-text"> capabilities.</span>
            </h2>
            <p className="max-w-[500px] mx-auto" style={{ color: '#9490B8' }}>
              Strategy that transforms your organization. Digital that transforms your market presence. Both, if you&apos;re ready to move fast.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Advisory */}
            <ScrollReveal delay={100}>
              <div className="dark-card p-8 h-full" style={{ borderTop: '2px solid #534AB7' }}>
                <div
                  className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-5"
                  style={{ background: 'rgba(83,74,183,0.12)', color: '#A8A4F0' }}
                >
                  Intzich Advisory
                </div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: '#F2F0FC' }}>
                  Organizational Strategy &amp; Business Management
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#9490B8' }}>
                  We help you build a business that runs smarter, scales faster, and stops depending entirely on you. Strategy, structure, profit — all of it.
                </p>
                <ul className="flex flex-col gap-2.5 mb-7">
                  {['90-Day Growth Roadmaps', 'Profit & Margin Optimization', 'Organizational Design & Scaling'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#9490B8' }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#7B72E9' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/advisory" className="text-sm font-semibold no-underline" style={{ color: '#7B72E9' }}>
                  Explore Advisory →
                </Link>
              </div>
            </ScrollReveal>

            {/* Digital */}
            <ScrollReveal delay={200}>
              <div className="dark-card dark-card-teal p-8 h-full" style={{ borderTop: '2px solid #1D9E75' }}>
                <div
                  className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-5"
                  style={{ background: 'rgba(29,158,117,0.12)', color: '#24C28F' }}
                >
                  Intzich Digital
                </div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: '#F2F0FC' }}>
                  AI-Assisted Websites, Marketing &amp; Automation
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#9490B8' }}>
                  We build your digital presence from the ground up — websites, marketing systems, and AI-powered tools that make you look like a market leader and generate real leads.
                </p>
                <ul className="flex flex-col gap-2.5 mb-7">
                  {['AI-Powered Website Builds', 'Digital Marketing & SEO', 'Workflow Automation & AI Tools'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#9490B8' }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#24C28F' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/digital" className="text-sm font-semibold no-underline" style={{ color: '#24C28F' }}>
                  Explore Digital →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="py-24 px-6" style={{ background: '#0D0B26' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: '#534AB7' }}>
              Industries
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4" style={{ color: '#F2F0FC' }}>
              Built for businesses
              <span className="gradient-text"> like yours</span>
            </h2>
            <p className="max-w-[480px] mx-auto" style={{ color: '#9490B8' }}>
              We specialize in the industries where strategy and execution matter most — and where most firms leave money on the table.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { icon: '🔧', label: 'HVAC & Mechanical' },
              { icon: '🏗', label: 'General Contractors' },
              { icon: '⚡', label: 'Electrical & Plumbing' },
              { icon: '🪨', label: 'Trades & Specialty Subs' },
              { icon: '📐', label: 'Engineering & Architecture' },
              { icon: '💼', label: 'Professional Services' },
            ].map(({ icon, label }, i) => (
              <ScrollReveal key={label} delay={i * 60}>
                <div
                  className="dark-card p-6 text-center cursor-default"
                >
                  <div className="text-3xl mb-3">{icon}</div>
                  <p className="text-sm font-medium" style={{ color: '#F2F0FC' }}>{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROCESS ── */}
      <section className="py-24 px-6" style={{ background: '#07061A' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: '#534AB7' }}>
              How We Work
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl" style={{ color: '#F2F0FC' }}>
              A process built on
              <span className="gradient-text"> precision</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            {[
              { num: '01', label: 'Diagnose', desc: 'We learn your business deeply before recommending anything.' },
              { num: '02', label: 'Design', desc: 'We build a strategy and plan tailored to your exact situation.' },
              { num: '03', label: 'Deploy', desc: 'We execute alongside you — strategy, digital, or both.' },
              { num: '04', label: 'Measure', desc: 'We track results and optimize continuously.' },
            ].map(({ num, label, desc }, i) => (
              <ScrollReveal key={num} delay={i * 100}>
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold mx-auto mb-5 font-display"
                    style={{
                      background: 'rgba(83,74,183,0.12)',
                      border: '1px solid rgba(83,74,183,0.25)',
                      color: '#7B72E9',
                    }}
                  >
                    {num}
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2" style={{ color: '#F2F0FC' }}>
                    {label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A4868' }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFERS ── */}
      <section className="py-24 px-6" style={{ background: '#0D0B26' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: '#534AB7' }}>
              Pricing
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4" style={{ color: '#F2F0FC' }}>
              Three ways to work
              <span className="gradient-text"> with Intzich</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Foundation Sprint */}
            <ScrollReveal delay={0}>
              <div className="dark-card p-8 h-full flex flex-col">
                <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-5 w-fit" style={{ background: 'rgba(83,74,183,0.12)', color: '#A8A4F0' }}>
                  Advisory · Project
                </div>
                <p className="font-display font-bold text-3xl mb-1" style={{ color: '#F2F0FC' }}>$3,500</p>
                <p className="text-xs mb-4" style={{ color: '#4A4868' }}>CAD · One-time</p>
                <h3 className="font-display font-semibold text-lg mb-2" style={{ color: '#F2F0FC' }}>Foundation Sprint</h3>
                <p className="text-sm flex-1 mb-6" style={{ color: '#9490B8' }}>30-day strategy engagement. Clarity, roadmap, action.</p>
                <Link href="/advisory#foundation-sprint" className="text-sm font-semibold no-underline" style={{ color: '#7B72E9' }}>
                  Learn More →
                </Link>
              </div>
            </ScrollReveal>

            {/* Digital Launchpad — featured */}
            <ScrollReveal delay={100}>
              <div
                className="p-8 h-full flex flex-col relative"
                style={{
                  background: 'rgba(83,74,183,0.06)',
                  border: '1px solid rgba(83,74,183,0.35)',
                  borderRadius: '16px',
                  boxShadow: '0 0 60px rgba(83,74,183,0.12)',
                }}
              >
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: '#BA7517', color: '#fff' }}
                >
                  Most Popular
                </div>
                <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-5 w-fit" style={{ background: 'rgba(29,158,117,0.12)', color: '#24C28F' }}>
                  Digital · Project
                </div>
                <p className="font-display font-bold text-3xl mb-1" style={{ color: '#F2F0FC' }}>$5,500</p>
                <p className="text-xs mb-4" style={{ color: '#4A4868' }}>CAD · One-time</p>
                <h3 className="font-display font-semibold text-lg mb-2" style={{ color: '#F2F0FC' }}>Digital Launchpad</h3>
                <p className="text-sm flex-1 mb-6" style={{ color: '#9490B8' }}>Complete AI-powered digital presence in 3–4 weeks.</p>
                <Link
                  href="/digital#digital-launchpad"
                  className="inline-block px-5 py-3 rounded-xl text-sm font-semibold text-white text-center no-underline btn-glow-teal"
                  style={{ background: 'linear-gradient(135deg, #085041, #1D9E75)' }}
                >
                  Learn More →
                </Link>
              </div>
            </ScrollReveal>

            {/* Scale Partner */}
            <ScrollReveal delay={200}>
              <div className="dark-card p-8 h-full flex flex-col">
                <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-5 w-fit" style={{ background: 'rgba(83,74,183,0.08)', color: '#A8A4F0' }}>
                  Advisory + Digital
                </div>
                <p className="font-display font-bold text-3xl mb-1" style={{ color: '#F2F0FC' }}>$4,500</p>
                <p className="text-xs mb-4" style={{ color: '#4A4868' }}>CAD / month · 3-month min</p>
                <h3 className="font-display font-semibold text-lg mb-2" style={{ color: '#F2F0FC' }}>Scale Partner</h3>
                <p className="text-sm flex-1 mb-6" style={{ color: '#9490B8' }}>Your embedded strategy + digital partner. Month to month.</p>
                <Link href="/advisory#scale-partner" className="text-sm font-semibold no-underline" style={{ color: '#7B72E9' }}>
                  Learn More →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FOUNDER STRIP ── */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: '#07061A' }}>
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(83,74,183,0.1) 0%, transparent 70%)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <ScrollReveal>
            <div
              className="rounded-2xl p-10 md:p-14"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(83,74,183,0.2)',
              }}
            >
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0 font-display"
                  style={{
                    background: 'rgba(83,74,183,0.15)',
                    border: '1px solid rgba(83,74,183,0.3)',
                    color: '#A8A4F0',
                  }}
                >
                  TA
                </div>
                <div className="flex-1">
                  <p className="font-display font-bold text-xl sm:text-2xl mb-4" style={{ color: '#F2F0FC' }}>
                    Built by someone who has lived your world.
                  </p>
                  <p className="text-sm leading-relaxed mb-6 max-w-[600px]" style={{ color: '#9490B8' }}>
                    Tonye Apiafi is a PMP-certified project manager and civil engineering professional who has operated in GTA construction for over a decade. He serves as Project Manager and Operational Strategy Leader at Lloyd HVAC Services — a full-service mechanical contractor serving municipal, federal, and institutional clients across Ontario. He built Intzich because he knows exactly what growing construction businesses need — and what most advisors miss.
                  </p>
                  <Link
                    href="/about"
                    className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold no-underline transition-all"
                    style={{
                      border: '1px solid rgba(83,74,183,0.3)',
                      color: '#A8A4F0',
                    }}
                  >
                    Meet Tonye →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="py-24 px-6 text-center relative overflow-hidden" style={{ background: '#0D0B26' }}>
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '600px', height: '300px',
            background: 'radial-gradient(ellipse, rgba(83,74,183,0.12) 0%, transparent 70%)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(60px)',
          }}
        />
        <div className="relative z-10 max-w-[600px] mx-auto">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-widest mb-5" style={{ color: '#534AB7' }}>
              Ready to start
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-5" style={{ color: '#F2F0FC' }}>
              Ready to build
              <span className="gradient-text"> something real?</span>
            </h2>
            <p className="mb-8" style={{ color: '#9490B8' }}>
              Start with a complimentary 45-minute Strategy Session. No pitch. No pressure. Just an honest conversation about your business.
            </p>
            <Link
              href="/contact"
              className="inline-block px-9 py-4 rounded-xl text-base font-semibold text-white no-underline btn-glow"
              style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}
            >
              Book Your Complimentary Session
            </Link>
            <p className="text-xs mt-4" style={{ color: '#4A4868' }}>
              Complimentary for qualifying Ontario businesses.
            </p>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
