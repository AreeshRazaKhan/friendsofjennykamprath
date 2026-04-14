'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Shield, Landmark, Home, Store, TreePine } from 'lucide-react'

import Navbar from '@/components/layout/navbar'
import SiteFooter from '@/components/layout/site-footer'
import ISSUE_CATEGORIES from '@/constants/issues'

const POPULAR_TOPICS = [
  {
    icon: Landmark,
    title: 'County Spending',
    text: 'Where are your tax dollars going? Ask about budgets, audits, and financial accountability.',
  },
  {
    icon: Shield,
    title: 'Public Safety',
    text: 'Concerns about policing, first responders, transient housing, or neighborhood safety.',
  },
  {
    icon: Home,
    title: 'Housing & Permitting',
    text: 'Delays, fees, regulations — anything blocking housing or driving up costs.',
  },
  {
    icon: Store,
    title: 'Small Business',
    text: 'Red tape, permitting headaches, or county policies that hurt local businesses.',
  },
]

const AskJenny = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    location: '',
    subject: '',
    description: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.description.trim()) {
      setError('Please fill in all required fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/ask-jenny', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err.message || 'Failed to submit. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">

        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-navy-900 overflow-hidden">
          {/* Edge stripe */}
          <div
            className="absolute right-0 top-0 bottom-0 w-2 z-10"
            style={{
              background:
                'linear-gradient(180deg, #C41E3A 0%, #C41E3A 40%, #1B3A5C 40%, #1B3A5C 100%)',
            }}
          />
          {/* Floating circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/[0.05]" />
          <div className="absolute bottom-12 left-[8%] w-36 h-36 rounded-full border border-white/[0.04]" />

          {/* Watermark */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            font-display font-black text-[140px] text-white/[0.02] tracking-[8px]
            whitespace-nowrap select-none pointer-events-none hidden lg:block"
          >
            ASK JENNY
          </div>

          <div className="relative z-[5] mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-6">
                Ask Jenny
              </p>
              <h1 className="font-display font-black text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.08] text-white mb-6">
                Your Voice Matters{' '}
                <span className="text-patriot-red">— Ask Jenny.</span>
              </h1>
              <p className="font-body text-lg text-white/60 leading-relaxed max-w-xl">
                Have a question, concern, or idea? Jenny wants to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Popular topics */}
        <section className="py-16 lg:py-20 bg-off-white">
          <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
            <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-6">
              Common Topics
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {POPULAR_TOPICS.map((topic) => {
                const Icon = topic.icon
                return (
                  <div
                    key={topic.title}
                    className="bg-white rounded-2xl p-6 border border-warm-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-patriot-red/[0.08] flex items-center
                      justify-center mb-4">
                      <Icon className="w-5 h-5 text-patriot-red" />
                    </div>
                    <h3 className="font-display font-bold text-base text-navy-900 mb-2">
                      {topic.title}
                    </h3>
                    <p className="font-body text-sm text-warm-600 leading-relaxed">
                      {topic.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Form section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-[1290px] px-6 lg:px-10">

            {submitted ? (
              <div className="max-w-2xl mx-auto text-center py-16">
                <div className="w-20 h-20 rounded-full bg-patriot-red/10 flex items-center
                  justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-patriot-red" />
                </div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-4">
                  Message Received!
                </h2>
                <p className="font-body text-lg text-warm-600 leading-relaxed mb-8 max-w-lg mx-auto">
                  Thanks, {formData.name.split(' ')[0]}. Jenny reviews every
                  submission personally. If your question requires a response,
                  you will hear back via email.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 font-body font-semibold
                    text-base text-white bg-patriot-red hover:bg-red-dark
                    px-10 py-4 rounded-lg transition-colors duration-200"
                >
                  Back to Home
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">

                {/* Left — form */}
                <div>
                  <div className="mb-10">
                    <div className="w-16 h-[3px] bg-patriot-red mb-8" />
                    <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)] leading-[1.15] text-navy-900 mb-4">
                      Submit Your Question or Concern
                    </h2>
                    <p className="font-body text-lg text-warm-600 leading-relaxed">
                      Tell Jenny what matters to you. Every submission is read and
                      taken seriously.
                    </p>
                  </div>

                  {error && (
                    <div className="bg-patriot-red/10 border border-patriot-red/20 rounded-lg px-4 py-3 mb-6">
                      <p className="font-body text-sm text-patriot-red">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange('name')}
                        placeholder="Jenny Kamprath"
                        className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                          text-navy-900 font-body text-base focus:outline-none
                          focus:border-patriot-red transition-colors placeholder:text-warm-200"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange('email')}
                        placeholder="you@email.com"
                        className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                          text-navy-900 font-body text-base focus:outline-none
                          focus:border-patriot-red transition-colors placeholder:text-warm-200"
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                        Category *
                      </label>
                      <select
                        required
                        value={formData.category}
                        onChange={handleChange('category')}
                        className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                          text-navy-900 font-body text-base focus:outline-none
                          focus:border-patriot-red transition-colors appearance-none"
                      >
                        <option value="">Select a category</option>
                        {ISSUE_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={handleChange('location')}
                        placeholder="Street address or neighborhood"
                        className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                          text-navy-900 font-body text-base focus:outline-none
                          focus:border-patriot-red transition-colors placeholder:text-warm-200"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange('subject')}
                        placeholder="Brief summary of your question or concern"
                        className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                          text-navy-900 font-body text-base focus:outline-none
                          focus:border-patriot-red transition-colors placeholder:text-warm-200"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                        Description *
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={formData.description}
                        onChange={handleChange('description')}
                        placeholder="Describe your question, concern, or issue in detail..."
                        className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                          text-navy-900 font-body text-base focus:outline-none
                          focus:border-patriot-red transition-colors resize-none
                          placeholder:text-warm-200"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto font-body font-semibold text-base text-white
                        bg-patriot-red hover:bg-red-dark disabled:opacity-60
                        disabled:cursor-not-allowed px-12 py-4 rounded-lg
                        transition-colors duration-200"
                    >
                      {submitting ? 'Submitting...' : 'Send to Jenny'}
                    </button>

                    <p className="font-body text-xs text-warm-400">
                      By submitting you agree to the{' '}
                      <Link href="/terms-of-service" className="underline hover:text-navy-900 transition-colors">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy-policy" className="underline hover:text-navy-900 transition-colors">
                        Privacy Policy
                      </Link>.
                    </p>
                  </form>
                </div>

                {/* Right — sidebar */}
                <div className="lg:sticky lg:top-[100px] lg:self-start space-y-6">
                  {/* Promise card */}
                  <div className="bg-navy-900 rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border border-white/[0.06]" />
                    <div
                      className="absolute right-0 top-0 bottom-0 w-1.5"
                      style={{
                        background:
                          'linear-gradient(180deg, #C41E3A 0%, #C41E3A 40%, #1B3A5C 40%, #1B3A5C 100%)',
                      }}
                    />

                    <div className="relative z-[1]">
                      <h3 className="font-display font-bold text-xl text-white mb-4">
                        Jenny&apos;s Promise
                      </h3>
                      <ul className="space-y-4">
                        {[
                          'Every submission is read personally',
                          'Questions requiring a response get one',
                          'Your concerns inform policy priorities',
                          'Your information is never shared or sold',
                        ].map((item) => (
                          <li key={item} className="flex gap-3 items-start">
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-patriot-red" />
                            <span className="font-body text-sm text-white/60 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Quote card */}
                  <div className="bg-warm-50 rounded-2xl p-8 border border-warm-100">
                    <span className="font-display font-black text-5xl text-patriot-red/10 leading-none block mb-2">
                      &ldquo;
                    </span>
                    <p className="font-body text-base text-warm-600 leading-relaxed italic mb-4">
                      Government should answer to the people — not the other way
                      around. If something in this county is not working for you,
                      I want to hear about it.
                    </p>
                    <p className="font-body text-sm font-semibold text-navy-900">
                      — Jenny Kamprath
                    </p>
                  </div>

                  {/* Contact card */}
                  <div className="bg-warm-50 rounded-2xl p-8 border border-warm-100">
                    <h3 className="font-display font-bold text-lg text-navy-900 mb-3">
                      Prefer to Call or Email?
                    </h3>
                    <div className="space-y-2">
                      <a href="mailto:jenny@jennykamprath.com"
                        className="block font-body text-sm text-patriot-red hover:underline">
                        jenny@jennykamprath.com
                      </a>
                      <a href="tel:9713655668"
                        className="block font-body text-sm text-patriot-red hover:underline">
                        (971) 365-5668
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}

export default AskJenny
