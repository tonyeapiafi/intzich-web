import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Intzich | Tonye Apiafi, PMP | Ontario Business Advisory',
  description:
    'Intzich was founded by Tonye Apiafi, a PMP-certified project manager and civil engineering professional with 10+ years in GTA construction and trades.',
}

export default function About() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto max-w-[700px]">
          <h1 className="text-4xl md:text-[40px] font-bold mb-5 leading-tight" style={{ color: '#26215C' }}>
            Built by someone who understands your world.
          </h1>
          <p className="text-lg text-[#444441] leading-relaxed max-w-[580px]">
            Intzich exists because the businesses that build our cities, run our infrastructure, and keep our buildings running deserve senior-level strategic support — not just the ones who can afford a Bay Street firm.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-20 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Avatar */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-4"
                style={{ background: '#3C3489', border: '4px solid #EEEDFE' }}
              >
                TA
              </div>
              <h2 className="text-xl font-bold mb-1" style={{ color: '#26215C' }}>Tonye Apiafi, PMP</h2>
              <p className="text-sm text-[#888780]">Founder, Intzich</p>
              <p className="text-sm text-[#888780]">Principal, Lloyd HVAC Services</p>
            </div>

            {/* Bio */}
            <div className="md:col-span-2 flex flex-col gap-5">
              <p className="text-[#444441] leading-relaxed">
                Tonye is a civil engineering professional and PMP-certified project manager with over a decade of experience in GTA construction, mechanical contracting, and project delivery. He founded and operates Lloyd HVAC Services Inc. — a full-service HVAC and mechanical contractor working across municipal, federal, institutional, and commercial sectors in Ontario.
              </p>
              <p className="text-[#444441] leading-relaxed">
                Running a trades business gave Tonye a front-row seat to the challenges that most advisors never see: cash flow pressure on multi-month projects, the complexity of municipal and DND tendering, the margin squeeze of competitive bidding, and the difficulty of building a team that doesn&apos;t depend on you to answer every question. He built Intzich to solve those exact problems — for other businesses like his.
              </p>
              <p className="text-[#444441] leading-relaxed">
                Intzich is his answer to a gap he saw clearly: world-class strategic thinking, combined with real digital capability, made accessible to the businesses that need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-12 px-6 bg-white border-y border-black/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { badge: 'PMP', label: 'Project Management Professional' },
              { badge: 'COR', label: 'COR 2020 Safety Certified' },
              { badge: 'TSCM', label: 'Turner School of Construction Management' },
              { badge: '10+', label: 'Years Trades Operations in Ontario' },
            ].map(({ badge, label }) => (
              <div key={badge} className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: '#3C3489' }}
                >
                  {badge}
                </div>
                <p className="text-sm font-medium text-[#2C2C2A]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION QUOTE */}
      <section className="py-16 px-6" style={{ background: '#3C3489' }}>
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-white text-2xl font-semibold leading-snug mb-6">
            &ldquo;Every business owner deserves access to the kind of strategic thinking that used to be reserved for the biggest companies. That&apos;s what Intzich is here to change.&rdquo;
          </p>
          <p className="text-[#CECBF6] text-sm">— Tonye Apiafi, Founder</p>
        </div>
      </section>

      {/* OUR VENTURES */}
      <section className="py-20 px-6" style={{ background: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold" style={{ color: '#26215C' }}>Our ventures</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Intzich Advisory',
                desc: 'Organizational strategy and business management consulting for SMBs, trades, and professional services firms across Ontario.',
                link: '/advisory',
                linkLabel: 'Learn more →',
                color: '#3C3489',
                bg: '#EEEDFE',
              },
              {
                name: 'Intzich Digital',
                desc: 'AI-assisted websites, digital marketing, and workflow automation built for growing businesses.',
                link: '/digital',
                linkLabel: 'Learn more →',
                color: '#0F6E56',
                bg: '#E1F5EE',
              },
              {
                name: 'Lloyd HVAC Services',
                desc: 'Our sister company and one of Ontario\'s leading mechanical subcontractors. Serving GTA, Mississauga, Pickering, Peterborough, Waterloo Region, and CFB Borden.',
                link: 'https://lloydhvac.ca',
                linkLabel: 'Visit lloydhvac.ca ↗',
                color: '#633806',
                bg: '#FAEEDA',
                external: true,
              },
            ].map(({ name, desc, link, linkLabel, color, bg, external }) => (
              <div key={name} className="rounded-card border border-black/[0.08] p-7 bg-white shadow-card hover:shadow-card-hover transition-all duration-200">
                <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold mb-4" style={{ background: bg, color }}>
                  {name}
                </div>
                <p className="text-sm text-[#444441] leading-relaxed mb-5">{desc}</p>
                {external ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold no-underline" style={{ color }}>
                    {linkLabel}
                  </a>
                ) : (
                  <Link href={link} className="text-sm font-semibold no-underline" style={{ color }}>
                    {linkLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHT UP CAMPAIGNS */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-card border border-black/[0.06] p-8 bg-[#FAFAF8]">
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#26215C' }}>Light Up Campaigns</h3>
            <p className="text-sm text-[#444441] leading-relaxed max-w-[640px]">
              Beyond business, Intzich is committed to community through Light Up Campaigns — an initiative bringing outreach and resources to communities across Ontario, including Cobourg, Stouffville, Port Hope, King City, and Northumberland County.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: '#EEEDFE' }}>
        <div className="max-w-[480px] mx-auto">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#26215C' }}>
            Work with someone who gets it.
          </h2>
          <p className="text-[#5F5E5A] mb-6">
            Book a complimentary Strategy Session and see the difference it makes when your advisor has actually lived your world.
          </p>
          <Link href="/contact" className="inline-block px-7 py-3.5 rounded-lg text-base font-semibold text-white no-underline" style={{ background: '#3C3489' }}>
            Book a Strategy Session
          </Link>
        </div>
      </section>
    </div>
  )
}
