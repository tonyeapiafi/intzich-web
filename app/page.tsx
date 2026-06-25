import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Intzich | Business Strategy & Digital Advisory',
  description:
    'Intzich helps growing businesses and professional services firms build stronger organizations and a powerful digital presence.',
}

export default function Home() {
  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute rounded-full" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(83,74,183,0.1) 0%, transparent 70%)', top: '-150px', left: '-150px', filter: 'blur(80px)', animation: 'orb-drift-1 12s ease-in-out infinite' }} />
          <div className="absolute rounded-full" style={{ width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(20,144,104,0.07) 0%, transparent 70%)', top: '10%', right: '-80px', filter: 'blur(80px)', animation: 'orb-drift-2 15s ease-in-out infinite' }} />
          <div className="absolute rounded-full" style={{ width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(98,87,214,0.06) 0%, transparent 70%)', bottom: '10%', left: '30%', filter: 'blur(80px)', animation: 'orb-drift-3 18s ease-in-out infinite' }} />
          <div className="absolute inset-0 dot-grid" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-[860px] mx-auto w-full">
          <div
            className="hero-line hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
            style={{ border: '1px solid rgba(83,74,183,0.2)', background: 'rgba(83,74,183,0.06)', color: '#534AB7' }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#534AB7' }} />
            Strategy & Digital Advisory
          </div>

          <h1 className="font-display font-bold leading-[1.05] tracking-tight mb-5">
            <span className="hero-line hero-line-1 block text-4xl sm:text-6xl md:text-7xl lg:text-8xl" style={{ color: '#0D0B26' }}>
              Build a stronger
            </span>
            <span className="hero-line hero-line-2 block text-4xl sm:text-6xl md:text-7xl lg:text-8xl" style={{ color: '#0D0B26' }}>
              business.{' '}<span className="gradient-text">Scale</span>
            </span>
            <span className="hero-line hero-line-3 block text-4xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text">
              with confidence.
            </span>
          </h1>

          <p className="hero-line hero-sub text-sm sm:text-base md:text-lg leading-relaxed max-w-[520px] mx-auto mb-8" style={{ color: '#7B79A0' }}>
            Intzich helps growing businesses and professional services firms build stronger organizations, sharper strategies, and a powerful digital presence.
          </p>

          <div className="hero-line hero-ctas flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-block px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white no-underline btn-glow" style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}>
              Book a Complimentary Session
            </Link>
            <Link href="#services" className="inline-block px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold no-underline" style={{ border: '1px solid rgba(83,74,183,0.2)', color: '#534AB7' }}>
              See Our Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 3v12M9 15l-4-4M9 15l4-4" stroke="#B0ADCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ borderTop: '1px solid rgba(83,74,183,0.06)', borderBottom: '1px solid rgba(83,74,183,0.06)', background: 'rgba(83,74,183,0.03)' }}>
        <div className="max-w-[1200px] mx-auto px-5 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🏅', label: 'PMP Certified Leadership' },
              { icon: '🤖', label: 'AI-Powered Solutions' },
              { icon: '🌍', label: 'Global Reach, Local Depth' },
              { icon: '📈', label: 'Results-Driven Advisory' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="text-base flex-shrink-0">{icon}</span>
                <span className="text-xs sm:text-sm font-medium leading-tight" style={{ color: '#3D3B5A' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO ARMS ── */}
      <section id="services" className="py-16 sm:py-24 px-5" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: '#534AB7' }}>What We Do</p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl mb-3" style={{ color: '#0D0B26' }}>
              One firm. Two powerful<span className="gradient-text"> capabilities.</span>
            </h2>
            <p className="max-w-[500px] mx-auto text-sm sm:text-base" style={{ color: '#7B79A0' }}>
              Strategy that transforms your organization. Digital that transforms your market presence.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            <ScrollReveal delay={100}>
              <div className="light-card p-6 sm:p-8 h-full" style={{ borderTop: '2px solid #534AB7' }}>
                <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-4" style={{ background: 'rgba(83,74,183,0.08)', color: '#534AB7' }}>Intzich Advisory</div>
                <h3 className="font-display font-bold text-lg sm:text-xl mb-3" style={{ color: '#0D0B26' }}>Organizational Strategy &amp; Business Management</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#7B79A0' }}>We help you build a business that runs smarter, scales faster, and stops depending entirely on you. Strategy, structure, profit — all of it.</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {['90-Day Growth Roadmaps', 'Profit & Margin Optimization', 'Organizational Design & Scaling'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#7B79A0' }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#534AB7' }} />{item}
                    </li>
                  ))}
                </ul>
                <Link href="/advisory" className="text-sm font-semibold no-underline" style={{ color: '#534AB7' }}>Explore Advisory →</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="light-card light-card-teal p-6 sm:p-8 h-full" style={{ borderTop: '2px solid #149068' }}>
                <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-4" style={{ background: 'rgba(20,144,104,0.07)', color: '#149068' }}>Intzich Digital</div>
                <h3 className="font-display font-bold text-lg sm:text-xl mb-3" style={{ color: '#0D0B26' }}>AI-Assisted Websites, Marketing &amp; Automation</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#7B79A0' }}>We build your digital presence from the ground up — websites, marketing systems, and AI-powered tools that make you look like a market leader.</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {['AI-Powered Website Builds', 'Digital Marketing & SEO', 'Workflow Automation & AI Tools'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#7B79A0' }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#149068' }} />{item}
                    </li>
                  ))}
                </ul>
                <Link href="/digital" className="text-sm font-semibold no-underline" style={{ color: '#149068' }}>Explore Digital →</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="py-16 sm:py-24 px-5" style={{ background: '#F6F5FF' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: '#534AB7' }}>Industries</p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl mb-3" style={{ color: '#0D0B26' }}>
              Built for businesses<span className="gradient-text"> like yours</span>
            </h2>
            <p className="max-w-[480px] mx-auto text-sm sm:text-base" style={{ color: '#7B79A0' }}>
              We work across industries where strategy and execution matter most.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: '🔧', label: 'HVAC & Mechanical' },
              { icon: '🏗', label: 'General Contractors' },
              { icon: '⚡', label: 'Electrical & Plumbing' },
              { icon: '🪨', label: 'Trades & Specialty' },
              { icon: '📐', label: 'Engineering & Architecture' },
              { icon: '💼', label: 'Professional Services' },
            ].map(({ icon, label }, i) => (
              <ScrollReveal key={label} delay={i * 60}>
                <div className="light-card p-4 sm:p-6 text-center cursor-default">
                  <div className="text-2xl sm:text-3xl mb-2">{icon}</div>
                  <p className="text-xs sm:text-sm font-medium leading-tight" style={{ color: '#0D0B26' }}>{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROCESS ── */}
      <section className="py-16 sm:py-24 px-5" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: '#534AB7' }}>How We Work</p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl" style={{ color: '#0D0B26' }}>
              A process built on<span className="gradient-text"> precision</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { num: '01', label: 'Diagnose', desc: 'We learn your business deeply before recommending anything.' },
              { num: '02', label: 'Design', desc: 'We build a strategy and plan tailored to your exact situation.' },
              { num: '03', label: 'Deploy', desc: 'We execute alongside you — strategy, digital, or both.' },
              { num: '04', label: 'Measure', desc: 'We track results and optimize continuously.' },
            ].map(({ num, label, desc }, i) => (
              <ScrollReveal key={num} delay={i * 100}>
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold mx-auto mb-3 sm:mb-5 font-display" style={{ background: 'rgba(83,74,183,0.08)', border: '1px solid rgba(83,74,183,0.18)', color: '#534AB7' }}>
                    {num}
                  </div>
                  <h3 className="font-display font-semibold text-sm sm:text-base mb-1.5" style={{ color: '#0D0B26' }}>{label}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#7B79A0' }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFERS ── */}
      <section className="py-16 sm:py-24 px-5" style={{ background: '#F6F5FF' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: '#534AB7' }}>Pricing</p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl mb-3" style={{ color: '#0D0B26' }}>
              Three ways to work<span className="gradient-text"> with Intzich</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            <ScrollReveal delay={0}>
              <div className="light-card p-6 sm:p-8 flex flex-col" style={{ background: '#FFFFFF' }}>
                <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-4 w-fit" style={{ background: 'rgba(83,74,183,0.08)', color: '#534AB7' }}>Advisory · Project</div>
                <p className="font-display font-bold text-3xl mb-1" style={{ color: '#0D0B26' }}>$3,500</p>
                <p className="text-xs mb-3" style={{ color: '#7B79A0' }}>CAD · One-time</p>
                <h3 className="font-display font-semibold text-base mb-2" style={{ color: '#0D0B26' }}>Foundation Sprint</h3>
                <p className="text-sm mb-5" style={{ color: '#7B79A0' }}>30-day strategy engagement. Clarity, roadmap, action.</p>
                <Link href="/advisory#foundation-sprint" className="text-sm font-semibold no-underline mt-auto" style={{ color: '#534AB7' }}>Learn More →</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="relative p-6 sm:p-8 flex flex-col" style={{ background: '#FFFFFF', border: '2px solid #534AB7', borderRadius: '16px', boxShadow: '0 8px 40px rgba(83,74,183,0.1)' }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold" style={{ background: '#BA7517', color: '#fff' }}>Most Popular</div>
                <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-4 w-fit" style={{ background: 'rgba(20,144,104,0.07)', color: '#149068' }}>Digital · Project</div>
                <p className="font-display font-bold text-3xl mb-1" style={{ color: '#0D0B26' }}>$5,500</p>
                <p className="text-xs mb-3" style={{ color: '#7B79A0' }}>CAD · One-time</p>
                <h3 className="font-display font-semibold text-base mb-2" style={{ color: '#0D0B26' }}>Digital Launchpad</h3>
                <p className="text-sm mb-5" style={{ color: '#7B79A0' }}>Complete AI-powered digital presence in 3–4 weeks.</p>
                <Link href="/digital#digital-launchpad" className="inline-block px-5 py-3 rounded-xl text-sm font-semibold text-white text-center no-underline btn-glow mt-auto" style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}>Learn More →</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="light-card p-6 sm:p-8 flex flex-col sm:col-span-2 lg:col-span-1" style={{ background: '#FFFFFF' }}>
                <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-4 w-fit" style={{ background: 'rgba(83,74,183,0.06)', color: '#534AB7' }}>Advisory + Digital</div>
                <p className="font-display font-bold text-3xl mb-1" style={{ color: '#0D0B26' }}>$4,500</p>
                <p className="text-xs mb-3" style={{ color: '#7B79A0' }}>CAD / month · 3-month min</p>
                <h3 className="font-display font-semibold text-base mb-2" style={{ color: '#0D0B26' }}>Scale Partner</h3>
                <p className="text-sm mb-5" style={{ color: '#7B79A0' }}>Your embedded strategy + digital partner. Month to month.</p>
                <Link href="/advisory#scale-partner" className="text-sm font-semibold no-underline mt-auto" style={{ color: '#534AB7' }}>Learn More →</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FOUNDER STRIP ── */}
      <section className="py-16 sm:py-20 px-5 relative overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="absolute rounded-full pointer-events-none" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(83,74,183,0.07) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', filter: 'blur(80px)' }} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="rounded-2xl p-6 sm:p-10 md:p-14" style={{ background: 'rgba(83,74,183,0.03)', border: '1px solid rgba(83,74,183,0.12)' }}>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center text-lg sm:text-2xl font-bold flex-shrink-0 font-display" style={{ background: 'rgba(83,74,183,0.08)', border: '1px solid rgba(83,74,183,0.2)', color: '#534AB7' }}>TA</div>
                <div className="flex-1">
                  <p className="font-display font-bold text-lg sm:text-xl md:text-2xl mb-3" style={{ color: '#0D0B26' }}>Built by someone who has lived your world.</p>
                  <p className="text-sm leading-relaxed mb-5 max-w-[600px]" style={{ color: '#7B79A0' }}>
                    Tonye Apiafi is a PMP-certified project manager and civil engineering professional with over a decade of experience in GTA construction. He serves as Project Manager and Operational Strategy Leader at Lloyd HVAC Services. He built Intzich because he knows exactly what growing businesses need — and what most advisors miss.
                  </p>
                  <Link href="/about" className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold no-underline" style={{ border: '1px solid rgba(83,74,183,0.25)', color: '#534AB7' }}>Meet Tonye →</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="py-16 sm:py-24 px-5 text-center relative overflow-hidden" style={{ background: '#0D0B26' }}>
        <div className="absolute rounded-full pointer-events-none" style={{ width: '500px', height: '300px', background: 'radial-gradient(ellipse, rgba(83,74,183,0.25) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', filter: 'blur(60px)' }} />
        <div className="relative z-10 max-w-[560px] mx-auto">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#7B72E9' }}>Ready to start</p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl mb-4" style={{ color: '#F2F0FC' }}>
              Ready to build<span className="gradient-text"> something real?</span>
            </h2>
            <p className="text-sm sm:text-base mb-7" style={{ color: '#9490B8' }}>
              Start with a complimentary 45-minute Strategy Session. No pitch. No pressure. Just an honest conversation about your business.
            </p>
            <Link href="/contact" className="inline-block px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white no-underline btn-glow" style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}>
              Book Your Complimentary Session
            </Link>
            <p className="text-xs mt-4" style={{ color: '#4A4868' }}>Complimentary for qualifying businesses.</p>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
