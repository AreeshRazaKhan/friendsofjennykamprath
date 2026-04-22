'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

import Navbar from '@/components/layout/navbar'
import SiteFooter from '@/components/layout/site-footer'
import { formatPhoneInput } from '@/lib/phone'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    smsConsent: false,
    promoConsent: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const hasPhone = formData.phone.trim().length > 0

  useEffect(() => {
    if (!hasPhone) {
      setFormData((prev) => ({ ...prev, smsConsent: false, promoConsent: false }))
    }
  }, [hasPhone])

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
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
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="py-20 lg:py-28 bg-off-white">
          <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
            <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-4">
              Get in Touch
            </p>
            <h1 className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)] leading-[1.15] text-navy-900 mb-4">
              Contact Us
            </h1>
            <p className="font-body text-lg text-warm-600 leading-relaxed max-w-2xl">
              Have a question, want to volunteer, or just want to share your
              thoughts? We would love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">

              {/* Left — contact details */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display font-bold text-xl text-navy-900 mb-6">
                    Friends of Jenny Kamprath
                  </h2>
                  <div className="space-y-5">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-patriot-red/[0.08] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-patriot-red" />
                      </div>
                      <div className="font-body text-base text-warm-600">
                        <p className="font-semibold text-navy-900 mb-1">Mailing Address</p>
                        <p>PO Box 122</p>
                        <p>Beaverton, OR 97075</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-patriot-red/[0.08] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-patriot-red" />
                      </div>
                      <div className="font-body text-base text-warm-600">
                        <p className="font-semibold text-navy-900 mb-1">Email</p>
                        <a
                          href="mailto:jenny@jennykamprath.com"
                          className="text-patriot-red hover:underline"
                        >
                          jenny@jennykamprath.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-patriot-red/[0.08] flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-patriot-red" />
                      </div>
                      <div className="font-body text-base text-warm-600">
                        <p className="font-semibold text-navy-900 mb-1">Phone</p>
                        <a
                          href="tel:9713655668"
                          className="text-patriot-red hover:underline"
                        >
                          (971) 365-5668
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-warm-50 rounded-xl p-6 border border-warm-100">
                  <p className="font-body text-sm text-warm-600 leading-relaxed">
                    <strong className="text-navy-900">Paid for by Friends of Jenny Kamprath.</strong>{' '}
                    Contributions are not tax deductible for federal income tax purposes.
                  </p>
                </div>
              </div>

              {/* Right — contact form */}
              <div className="bg-warm-50 rounded-2xl p-8 lg:p-10 border border-warm-100">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-patriot-red/10 flex items-center
                      justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-patriot-red" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-xl text-navy-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="font-body text-base text-warm-600">
                      Thanks, {formData.firstName}. We&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                <div>
                <h3 className="font-display font-bold text-xl text-navy-900 mb-6">
                  Send Us a Message
                </h3>

                {error && (
                  <div className="bg-patriot-red/10 border border-patriot-red/20 rounded-lg px-4 py-3 mb-4">
                    <p className="font-body text-sm text-patriot-red">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange('firstName')}
                        className="w-full bg-white border border-warm-100 rounded-lg px-4 py-3 text-navy-900 font-body text-base focus:outline-none focus:border-patriot-red transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange('lastName')}
                        className="w-full bg-white border border-warm-100 rounded-lg px-4 py-3 text-navy-900 font-body text-base focus:outline-none focus:border-patriot-red transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange('email')}
                      className="w-full bg-white border border-warm-100 rounded-lg px-4 py-3 text-navy-900 font-body text-base focus:outline-none focus:border-patriot-red transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, phone: formatPhoneInput(e.target.value) }))
                        setError('')
                      }}
                      placeholder="(503) 555-0123"
                      className="w-full bg-white border border-warm-100 rounded-lg px-4 py-3 text-navy-900 font-body text-base focus:outline-none focus:border-patriot-red transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange('message')}
                      className="w-full bg-white border border-warm-100 rounded-lg px-4 py-3 text-navy-900 font-body text-base focus:outline-none focus:border-patriot-red transition-colors resize-none"
                    />
                  </div>

                  {/* A2P Consent checkboxes — disabled until phone is entered */}
                  {!hasPhone && (
                    <p className="font-body text-xs text-warm-400 italic mt-2">
                      Enter a phone number above to opt in to SMS messages.
                    </p>
                  )}

                  <label className={`flex gap-3 items-start mt-2 ${hasPhone ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                    <input
                      type="checkbox"
                      checked={formData.smsConsent}
                      onChange={handleChange('smsConsent')}
                      disabled={!hasPhone}
                      required={hasPhone}
                      className="mt-1 flex-shrink-0 accent-patriot-red disabled:opacity-40 disabled:cursor-not-allowed"
                    />
                    <span className={`font-body text-xs leading-relaxed ${hasPhone ? 'text-warm-400' : 'text-warm-400/50'}`}>
                      I agree to receive SMS updates from Friends of Jenny Kamprath
                      regarding campaign updates, event reminders, and volunteer
                      coordination. Message frequency varies. Message &amp; data
                      rates may apply. Reply STOP to unsubscribe or HELP for help.
                    </span>
                  </label>

                  <label className={`flex gap-3 items-start ${hasPhone ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                    <input
                      type="checkbox"
                      checked={formData.promoConsent}
                      onChange={handleChange('promoConsent')}
                      disabled={!hasPhone}
                      required={hasPhone}
                      className="mt-1 flex-shrink-0 accent-patriot-red disabled:opacity-40 disabled:cursor-not-allowed"
                    />
                    <span className={`font-body text-xs leading-relaxed ${hasPhone ? 'text-warm-400' : 'text-warm-400/50'}`}>
                      I agree to receive promotional SMS messages from Friends of
                      Jenny Kamprath, including fundraising requests and donation
                      drives. Message frequency varies. Message &amp; data rates
                      may apply. Reply STOP to unsubscribe or HELP for help.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full font-body font-semibold text-base text-white bg-patriot-red
                      hover:bg-red-dark disabled:opacity-60 disabled:cursor-not-allowed
                      py-4 rounded-lg transition-colors duration-200 mt-2"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="font-body text-xs text-warm-400 text-center mt-2">
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
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default Contact
