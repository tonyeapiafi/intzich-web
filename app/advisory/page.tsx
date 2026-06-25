import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intzich Advisory | Business Strategy & Organizational Consulting | Ontario',
  description:
    'Intzich Advisory helps construction, trades, and professional services businesses in Ontario build stronger organizations and scale smarter.',
}

export default function Advisory() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="py-24 px-6" style={{ background: '#EEEDFE', borderLeft: '8px solid #3C3489' }}>
        <div className="max-w-[1200px] mx-auto max-w-[700px]">
          <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold mb-5" style={{ background: '#3C3489', color: '#FFFFFF' }}>
            Intzich Advisory
          </div>
          <h1 className="text-4xl md:text-[40px] font-bold mb-5 leading-tight" style={{ color: '#26215C' }}>
            Strategic clarity for businesses ready to scale.
          </h1>
          <p className="text-lg text-[#444441] leading-relaxed mb-8 max-w-[580px]">
            Most business owners are working harder than ever but not growing the way they want. The problem isn&apos;t effort. It&apos;s strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="inline-block px-7 py-3.5 rounded-lg text-base font-semibold text-white no-underline" style={{ background: '#3C3489' }}>
              Book a Strategy Session
            </Link>
            <a href="#offers" className="inline-block px-7 py-3.5 rounded-lg text-base font-semibold no-underline border" style={{ color: '#3C3489', borderColor: '#3C3489' }}>
              See Our Offers
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold" style={{ color: '#26215C' }}>What we do</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
            ].map(({ title, items }) => (
              <div key={title} className="rounded-card border border-black/[0.08] p-8 shadow-card">
                <h3 className="text-xl font-semibold mb-5" style={{ color: '#26215C' }}>{title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#444441]">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#3C3489' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: '#26215C' }}>How we approach it</h2>
            <p className="text-[#888780] max-w-[500px] mx-auto">We don&apos;t prescribe before we diagnose.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { num: '1', label: 'Intake', desc: 'Deep-dive into your business, numbers, and goals.' },
              { num: '2', label: 'Analysis', desc: 'We identify what\'s holding you back and where the leverage is.' },
              { num: '3', label: 'Insight', desc: 'Clear diagnosis: strengths, gaps, and priority actions.' },
              { num: '4', label: 'Roadmap', desc: 'A 90-day plan built for your specific situation.' },
              { num: '5', label: 'Execution', desc: 'We stay involved to support implementation.' },
            ].map(({ num, label, desc }) => (
              <div key={num} className="text-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3" style={{ background: '#3C3489' }}>
                  {num}
                </div>
                <h4 className="text-sm font-semibold mb-1" style={{ color: '#26215C' }}>{label}</h4>
                <p className="text-xs text-[#888780] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section id="offers" className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold" style={{ color: '#26215C' }}>Advisory Offers</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Foundation Sprint */}
            <div id="foundation-sprint" className="rounded-card border border-black/[0.08] p-10 shadow-card">
              <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold mb-4" style={{ background: '#EEEDFE', color: '#3C3489' }}>
                Advisory · Project
              </div>
              <h3 className="text-2xl font-bold mb-1" style={{ color: '#26215C' }}>Foundation Sprint</h3>
              <p className="text-3xl font-bold mb-5" style={{ color: '#3C3489' }}>$3,500 CAD</p>
              <p className="text-sm text-[#888780] mb-6">30-day strategy engagement. Ideal for SMBs at an inflection point.</p>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#888780] mb-3">What&apos;s included</h4>
              <ul className="flex flex-col gap-2.5 mb-8">
                {[
                  'Deep-dive business diagnostic',
                  'Full SWOT analysis',
                  '90-Day Growth Roadmap',
                  'Priority action list',
                  '1 follow-up strategy call',
                  'Written deliverables package',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#444441]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="#EEEDFE" />
                      <path d="M4 7l2.5 2.5L10 5" stroke="#3C3489" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block px-6 py-3 rounded-lg text-sm font-semibold text-white no-underline" style={{ background: '#3C3489' }}>
                Start Foundation Sprint
              </Link>
            </div>

            {/* Scale Partner */}
            <div id="scale-partner" className="rounded-card border-2 p-10 shadow-cta" style={{ borderColor: '#3C3489' }}>
              <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold mb-4" style={{ background: '#3C3489', color: '#FFFFFF' }}>
                Advisory + Digital · Retainer
              </div>
              <h3 className="text-2xl font-bold mb-1" style={{ color: '#26215C' }}>Scale Partner</h3>
              <p className="text-3xl font-bold mb-1" style={{ color: '#3C3489' }}>$4,500 CAD/mo</p>
              <p className="text-xs text-[#888780] mb-5">3-month minimum · Cancel after 3 months</p>
              <p className="text-sm text-[#888780] mb-6">Your embedded strategy + digital partner. Growth-stage SMBs ready to scale.</p>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#888780] mb-3">Monthly deliverables</h4>
              <ul className="flex flex-col gap-2.5 mb-8">
                {[
                  '2 × strategy sessions per month',
                  'Ongoing organizational advisory',
                  'Digital performance report',
                  '4 LinkedIn posts per month',
                  'Priority access to the Intzich team',
                  'Quarterly roadmap reset',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#444441]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="#EEEDFE" />
                      <path d="M4 7l2.5 2.5L10 5" stroke="#3C3489" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block px-6 py-3 rounded-lg text-sm font-semibold text-white no-underline" style={{ background: '#3C3489' }}>
                Become a Scale Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 px-6" style={{ background: '#EEEDFE' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-8" style={{ color: '#26215C' }}>
                This is for you if...
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
                  <li key={item} className="flex items-start gap-3 text-sm text-[#444441]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
                      <circle cx="9" cy="9" r="9" fill="#3C3489" />
                      <path d="M5.5 9l2.5 2.5L12.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card-lg p-10 text-center" style={{ background: '#26215C' }}>
              <p className="text-white text-xl font-semibold leading-snug mb-4">
                &ldquo;Stop guessing. Start growing.&rdquo;
              </p>
              <p className="text-[#CECBF6] text-sm mb-6">
                Your first strategy session is complimentary. No pitch, no pressure — just honest thinking about your business.
              </p>
              <Link href="/contact" className="inline-block px-6 py-3 rounded-lg text-sm font-semibold no-underline border border-white/30 text-white hover:bg-white/10 transition-colors">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
