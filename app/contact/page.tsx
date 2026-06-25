'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const data = new FormData(e.currentTarget)
    try {
      await fetch('https://formspree.io/f/placeholder', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
    } catch (_) {}
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>

      {/* Ambient orb */}
      <div className="fixed pointer-events-none" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(83,74,183,0.08) 0%, transparent 70%)', top: '20%', right: '-100px', filter: 'blur(100px)', zIndex: 0 }} />

      {/* HERO */}
      <section className="relative pt-40 pb-16 px-6 text-center z-10">
        <div className="max-w-[600px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ border: '1px solid rgba(83,74,183,0.3)', background: 'rgba(83,74,183,0.08)', color: '#534AB7' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#534AB7', boxShadow: '0 0 6px #7B72E9' }} />
            Complimentary · 45 minutes
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#0D0B26' }}>
            Let&apos;s talk about{' '}
            <span className="gradient-text">your business.</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#7B79A0' }}>
            Book a complimentary 45-minute Strategy Session. We&apos;ll look at where you are, where you want to be, and what&apos;s standing in between.
          </p>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="relative pb-24 px-6 z-10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-5 gap-10">

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="rounded-2xl p-12 text-center" style={{ background: 'rgba(83,74,183,0.04)', border: '1px solid rgba(83,74,183,0.1)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(20,144,104,0.07)', border: '1px solid rgba(29,158,117,0.2)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L19 7" stroke="#24C28F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h2 className="font-display font-bold text-xl mb-2" style={{ color: '#0D0B26' }}>We&apos;ve got your request.</h2>
                <p className="text-sm" style={{ color: '#7B79A0' }}>We&apos;ll reach out within 1 business day to confirm your session.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 flex flex-col gap-5"
                style={{ background: 'rgba(83,74,183,0.04)', border: '1px solid rgba(83,74,183,0.1)' }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#7B79A0' }}>Full Name *</label>
                    <input name="name" required className="input-light" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#7B79A0' }}>Company Name *</label>
                    <input name="company" required className="input-light" placeholder="Smith HVAC Inc." />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#7B79A0' }}>Industry</label>
                  <select name="industry" className="input-light" style={{ background: '#F6F5FF' }}>
                    <option value="">Select your industry</option>
                    <option>HVAC / Mechanical</option>
                    <option>General Contracting</option>
                    <option>Electrical / Plumbing</option>
                    <option>Trades / Specialty Subs</option>
                    <option>Engineering / Architecture</option>
                    <option>Professional Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#7B79A0' }}>What&apos;s your biggest business challenge right now?</label>
                  <textarea name="challenge" rows={4} className="input-light resize-none" placeholder="Tell us what's on your mind..." />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#7B79A0' }}>Email *</label>
                    <input name="email" type="email" required className="input-light" placeholder="jane@smithhvac.ca" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#7B79A0' }}>Phone</label>
                    <input name="phone" type="tel" className="input-light" placeholder="416-555-0100" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#7B79A0' }}>How did you hear about us?</label>
                  <select name="source" className="input-light" style={{ background: '#F6F5FF' }}>
                    <option value="">Select one</option>
                    <option>LinkedIn</option>
                    <option>Google Search</option>
                    <option>Referral</option>
                    <option>Direct outreach from Intzich</option>
                    <option>Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl text-base font-semibold text-white transition-opacity disabled:opacity-50 btn-glow"
                  style={{ background: 'linear-gradient(135deg, #3C3489, #534AB7)' }}
                >
                  {loading ? 'Sending...' : 'Book My Complimentary Session'}
                </button>
                <p className="text-xs text-center" style={{ color: '#7B79A0' }}>
                  Complimentary for qualifying Ontario businesses. We respond within 1 business day.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="rounded-2xl p-6" style={{ background: 'rgba(83,74,183,0.04)', border: '1px solid rgba(83,74,183,0.1)' }}>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#7B79A0' }}>What happens next</h3>
              <div className="flex flex-col gap-5">
                {[
                  { step: '01', label: 'You book', desc: 'Confirmation email sent immediately.' },
                  { step: '02', label: 'We prepare', desc: 'We review your business before the call.' },
                  { step: '03', label: 'We meet', desc: '45 minutes of focused strategic thinking.' },
                  { step: '04', label: 'You decide', desc: 'No obligation to continue. Zero pressure.' },
                ].map(({ step, label, desc }) => (
                  <div key={step} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 font-display" style={{ background: 'rgba(83,74,183,0.1)', border: '1px solid rgba(83,74,183,0.2)', color: '#534AB7' }}>
                      {step}
                    </div>
                    <div>
                      <p className="text-sm font-semibold font-display" style={{ color: '#0D0B26' }}>{label}</p>
                      <p className="text-xs" style={{ color: '#7B79A0' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ background: 'rgba(83,74,183,0.04)', border: '1px solid rgba(83,74,183,0.1)' }}>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#7B79A0' }}>Get in touch</h3>
              <div className="flex flex-col gap-2.5">
                <a href="mailto:hello@intzich.com" className="text-sm font-medium no-underline" style={{ color: '#534AB7' }}>hello@intzich.com</a>
                <p className="text-sm" style={{ color: '#7B79A0' }}>Ontario, Canada</p>
                <p className="text-sm" style={{ color: '#7B79A0' }}>Serving all of Ontario</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
