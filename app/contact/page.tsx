'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
    } catch (_) {
      // show success regardless for placeholder
    }
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-[600px] mx-auto">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#26215C' }}>
            Let&apos;s talk about your business.
          </h1>
          <p className="text-lg text-[#444441] leading-relaxed">
            Book a complimentary 45-minute Strategy Session. We&apos;ll look at where you are, where you want to be, and what&apos;s standing in between.
          </p>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-12 px-6 pb-24" style={{ background: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="rounded-card bg-white border border-black/[0.08] p-12 text-center shadow-card">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: '#E1F5EE' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L19 7" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#26215C' }}>We&apos;ve got your request.</h2>
                <p className="text-[#888780] text-sm">
                  We&apos;ll review your message and reach out within 1 business day to confirm your session.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-card bg-white border border-black/[0.08] p-8 shadow-card flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#444441] mb-1.5">Full Name *</label>
                    <input
                      name="name"
                      required
                      className="w-full border border-black/[0.12] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2C2A] outline-none focus:border-[#3C3489] transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#444441] mb-1.5">Company Name *</label>
                    <input
                      name="company"
                      required
                      className="w-full border border-black/[0.12] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2C2A] outline-none focus:border-[#3C3489] transition-colors"
                      placeholder="Smith HVAC Inc."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#444441] mb-1.5">Industry</label>
                  <select
                    name="industry"
                    className="w-full border border-black/[0.12] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2C2A] outline-none focus:border-[#3C3489] transition-colors bg-white"
                  >
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
                  <label className="block text-xs font-semibold text-[#444441] mb-1.5">What&apos;s your biggest business challenge right now?</label>
                  <textarea
                    name="challenge"
                    rows={4}
                    className="w-full border border-black/[0.12] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2C2A] outline-none focus:border-[#3C3489] transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#444441] mb-1.5">Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full border border-black/[0.12] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2C2A] outline-none focus:border-[#3C3489] transition-colors"
                      placeholder="jane@smithhvac.ca"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#444441] mb-1.5">Phone</label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full border border-black/[0.12] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2C2A] outline-none focus:border-[#3C3489] transition-colors"
                      placeholder="416-555-0100"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#444441] mb-1.5">How did you hear about us?</label>
                  <select
                    name="source"
                    className="w-full border border-black/[0.12] rounded-lg px-3.5 py-2.5 text-sm text-[#2C2C2A] outline-none focus:border-[#3C3489] transition-colors bg-white"
                  >
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
                  className="w-full py-3.5 rounded-lg text-base font-semibold text-white transition-colors disabled:opacity-60"
                  style={{ background: '#3C3489' }}
                >
                  {loading ? 'Sending...' : 'Book My Complimentary Session'}
                </button>
                <p className="text-xs text-[#888780] text-center">Complimentary for qualifying Ontario businesses. We respond within 1 business day.</p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="rounded-card bg-white border border-black/[0.08] p-6 shadow-card">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#888780] mb-5">What happens next</h3>
              <div className="flex flex-col gap-5">
                {[
                  { step: '1', label: 'You book', desc: 'Confirmation email sent immediately.' },
                  { step: '2', label: 'We prepare', desc: 'We review your business before the call.' },
                  { step: '3', label: 'We meet', desc: '45 minutes of focused strategic thinking.' },
                  { step: '4', label: 'You decide', desc: 'No obligation to continue. Zero pressure.' },
                ].map(({ step, label, desc }) => (
                  <div key={step} className="flex gap-3">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: '#3C3489' }}>
                      {step}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2C2C2A]">{label}</p>
                      <p className="text-xs text-[#888780]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-card bg-white border border-black/[0.08] p-6 shadow-card">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#888780] mb-4">Get in touch</h3>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@intzich.com" className="text-sm text-[#3C3489] font-medium no-underline hover:text-[#26215C]">
                  hello@intzich.com
                </a>
                <p className="text-sm text-[#888780]">Ontario, Canada</p>
                <p className="text-sm text-[#888780]">Serving all of Ontario</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
