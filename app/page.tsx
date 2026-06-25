import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intzich | Business Strategy & Digital Advisory | Ontario',
  description:
    'Intzich helps construction, trades, and professional services companies in Ontario build stronger organizations and a powerful digital presence. Book a complimentary Strategy Session.',
}

export default function Home() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="min-h-[85vh] flex items-center justify-center text-center px-6 py-20" style={{ background: 'linear-gradient(160deg, #FFFFFF 70%, #EEEDFE 100%)' }}>
        <div className="max-w-[720px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8" style={{ background: '#EEEDFE', color: '#3C3489' }}>
            Strategy &amp; Digital Advisory · Ontario
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] tracking-tight mb-6" style={{ color: '#26215C' }}>
            Build a stronger business.
            <br />
            Scale with confidence.
          </h1>
          <p className="text-lg text-[#444441] leading-relaxed max-w-[560px] mx-auto mb-10">
            Intzich helps growing businesses in construction, trades, and professional services build stronger organizations, sharper strategies, and a powerful digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block px-7 py-3.5 rounded-lg text-base font-semibold text-white no-underline transition-colors"
              style={{ background: '#3C3489' }}
            >
              Book a Complimentary Strategy Session
            </Link>
            <Link
              href="#services"
              className="inline-block px-7 py-3.5 rounded-lg text-base font-semibold no-underline transition-colors border"
              style={{ color: '#3C3489', borderColor: '#3C3489' }}
            >
              See Our Services
            </Link>
          </div>
          <div className="mt-16 animate-scroll-bounce">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto opacity-40">
              <path d="M10 3v14M10 17l-5-5M10 17l5-5" stroke="#3C3489" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-6 border-y border-black/[0.06]" style={{ background: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏗', label: 'PMP Certified Leadership' },
              { icon: '🤖', label: 'AI-Powered Digital Solutions' },
              { icon: '📍', label: 'Ontario-Based, GTA-Focused' },
              { icon: '🔧', label: 'Trades & Construction Specialists' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-xl">{icon}</span>
                <span className="text-sm font-medium text-[#444441]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO ARMS */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: '#26215C' }}>
              One firm. Two powerful capabilities.
            </h2>
            <p className="text-[#888780] max-w-[520px] mx-auto">
              Strategy that transforms your organization. Digital that transforms your market presence. Both, if you&apos;re ready to move fast.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Advisory */}
            <div className="rounded-card border border-black/[0.08] overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200">
              <div className="h-1.5" style={{ background: '#3C3489' }} />
              <div className="p-8">
                <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold mb-4" style={{ background: '#EEEDFE', color: '#3C3489' }}>
                  Intzich Advisory
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#26215C' }}>
                  Organizational Strategy &amp; Business Management
                </h3>
                <p className="text-[#444441] text-sm leading-relaxed mb-5">
                  We help you build a business that runs smarter, scales faster, and stops depending entirely on you. Strategy, structure, profit — all of it.
                </p>
                <ul className="flex flex-col gap-2 mb-6">
                  {['90-Day Growth Roadmaps', 'Profit & Margin Optimization', 'Organizational Design & Scaling'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#444441]">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#3C3489' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/advisory" className="text-sm font-semibold no-underline" style={{ color: '#3C3489' }}>
                  Explore Advisory →
                </Link>
              </div>
            </div>

            {/* Digital */}
            <div className="rounded-card border border-black/[0.08] overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200">
              <div className="h-1.5" style={{ background: '#0F6E56' }} />
              <div className="p-8">
                <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold mb-4" style={{ background: '#E1F5EE', color: '#0F6E56' }}>
                  Intzich Digital
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#085041' }}>
                  AI-Assisted Websites, Marketing &amp; Automation
                </h3>
                <p className="text-[#444441] text-sm leading-relaxed mb-5">
                  We build your digital presence from the ground up — websites, marketing systems, and AI-powered tools that make you look like a market leader and generate real leads.
                </p>
                <ul className="flex flex-col gap-2 mb-6">
                  {['AI-Powered Website Builds', 'Digital Marketing & SEO', 'Workflow Automation & AI Tools'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#444441]">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0F6E56' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/digital" className="text-sm font-semibold no-underline" style={{ color: '#0F6E56' }}>
                  Explore Digital →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 px-6" style={{ background: '#EEEDFE' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: '#26215C' }}>
              Built for businesses like yours
            </h2>
            <p className="text-[#5F5E5A] max-w-[520px] mx-auto">
              We specialize in the industries where strategy and execution matter most — and where most firms leave money on the table.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { icon: '🔧', label: 'HVAC & Mechanical' },
              { icon: '🏗', label: 'General Contractors' },
              { icon: '⚡', label: 'Electrical & Plumbing' },
              { icon: '🪨', label: 'Trades & Specialty Subs' },
              { icon: '📐', label: 'Engineering & Architecture' },
              { icon: '💼', label: 'Professional Services' },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="bg-white rounded-card p-6 text-center border border-black/[0.06] shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <p className="text-sm font-medium text-[#2C2C2A]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold" style={{ color: '#26215C' }}>
              How we work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            {[
              { num: '1', label: 'Diagnose', desc: 'We learn your business deeply before recommending anything.' },
              { num: '2', label: 'Design', desc: 'We build a strategy and plan tailored to your situation.' },
              { num: '3', label: 'Deploy', desc: 'We execute with you — strategy, digital, or both.' },
              { num: '4', label: 'Measure', desc: 'We track results and optimize continuously.' },
            ].map(({ num, label, desc }) => (
              <div key={num} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: '#3C3489' }}
                >
                  {num}
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#26215C' }}>
                  {label}
                </h3>
                <p className="text-sm text-[#888780]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS PREVIEW */}
      <section className="py-20 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: '#26215C' }}>
              Three ways to work with Intzich
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Foundation Sprint */}
            <div className="bg-white rounded-card border border-black/[0.08] p-8 shadow-card flex flex-col">
              <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold mb-4 w-fit" style={{ background: '#EEEDFE', color: '#3C3489' }}>
                Advisory
              </div>
              <p className="text-2xl font-bold mb-1" style={{ color: '#26215C' }}>$3,500 CAD</p>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#26215C' }}>Foundation Sprint</h3>
              <p className="text-sm text-[#888780] mb-6 flex-1">30-day strategy engagement. Clarity, roadmap, action.</p>
              <Link href="/advisory#foundation-sprint" className="text-sm font-semibold no-underline" style={{ color: '#3C3489' }}>
                Learn More →
              </Link>
            </div>

            {/* Digital Launchpad — featured */}
            <div className="rounded-card border-2 p-8 shadow-cta flex flex-col relative" style={{ borderColor: '#0F6E56', background: '#FFFFFF' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: '#BA7517' }}>
                Most Popular
              </div>
              <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold mb-4 w-fit" style={{ background: '#E1F5EE', color: '#0F6E56' }}>
                Digital
              </div>
              <p className="text-2xl font-bold mb-1" style={{ color: '#085041' }}>$5,500 CAD</p>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#085041' }}>Digital Launchpad</h3>
              <p className="text-sm text-[#888780] mb-6 flex-1">Complete AI-powered digital presence in 3–4 weeks.</p>
              <Link
                href="/digital#digital-launchpad"
                className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold text-white text-center no-underline"
                style={{ background: '#0F6E56' }}
              >
                Learn More →
              </Link>
            </div>

            {/* Scale Partner */}
            <div className="bg-white rounded-card border border-black/[0.08] p-8 shadow-card flex flex-col">
              <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold mb-4 w-fit" style={{ background: 'linear-gradient(90deg, #EEEDFE, #E1F5EE)', color: '#3C3489' }}>
                Advisory + Digital
              </div>
              <p className="text-2xl font-bold mb-1" style={{ color: '#26215C' }}>$4,500 CAD/mo</p>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#26215C' }}>Scale Partner</h3>
              <p className="text-sm text-[#888780] mb-6 flex-1">Your embedded strategy + digital partner. Month to month.</p>
              <Link href="/advisory#scale-partner" className="text-sm font-semibold no-underline" style={{ color: '#3C3489' }}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER STRIP */}
      <section className="py-16 px-6" style={{ background: '#26215C' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Avatar */}
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
              style={{ background: '#3C3489', border: '3px solid rgba(255,255,255,0.15)' }}
            >
              TA
            </div>
            {/* Text */}
            <div className="flex-1">
              <p className="text-white text-xl font-semibold mb-3 leading-snug">
                Built by someone who has lived your world.
              </p>
              <p className="text-[#CECBF6] text-sm leading-relaxed mb-6 max-w-[600px]">
                Tonye Apiafi is a PMP-certified project manager and civil engineering professional who has operated in GTA construction for over a decade. He serves as Project Manager and Operational Strategy Leader at Lloyd HVAC Services — a full-service mechanical contractor serving municipal, federal, and institutional clients across Ontario. He built Intzich because he knows exactly what growing construction businesses need — and what most advisors miss.
              </p>
              <Link
                href="/about"
                className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold no-underline border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Meet Tonye →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: '#26215C' }}>
            Ready to build something real?
          </h2>
          <p className="text-[#888780] mb-8">
            Start with a complimentary 45-minute Strategy Session. No pitch. No pressure. Just an honest conversation about your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg text-base font-semibold text-white no-underline shadow-cta"
            style={{ background: '#3C3489' }}
          >
            Book Your Complimentary Session
          </Link>
          <p className="text-xs text-[#888780] mt-4">Complimentary for qualifying Ontario businesses.</p>
        </div>
      </section>
    </div>
  )
}
