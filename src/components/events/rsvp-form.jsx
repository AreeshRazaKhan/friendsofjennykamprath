'use client'

import { useState } from 'react'

import PropTypes from 'prop-types'

const RsvpForm = ({ eventTitle, eventDate, eventTime, eventCategory }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    smsConsent: false,
    promoConsent: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.firstName.trim() || !formData.email.trim()) {
      setError('First name and email are required.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/events/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          sms_updates: formData.smsConsent ? 'Yes' : 'No',
          sms_promo: formData.promoConsent ? 'Yes' : 'No',
          eventName: eventTitle,
          eventDate: eventDate,
          eventTime: eventTime,
          eventCategory: eventCategory,
        }),
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

  if (submitted) {
    return (
      <div className="bg-navy-900 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border border-white/[0.06]" />
        <div className="relative z-[1] text-center py-4">
          <div className="w-14 h-14 rounded-full bg-patriot-red/20 flex items-center
            justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-patriot-red" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display font-bold text-xl text-white mb-2">
            You&apos;re In!
          </h3>
          <p className="font-body text-sm text-white/50 leading-relaxed">
            Thanks for RSVPing, {formData.firstName}! We&apos;ll see you at the event.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-navy-900 rounded-2xl p-8 relative overflow-hidden">
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border border-white/[0.06]" />

      <div className="relative z-[1]">
        <h3 className="font-display font-bold text-xl text-white mb-2">
          RSVP for This Event
        </h3>
        <p className="font-body text-sm text-white/50 mb-6">
          Free and open to the public. Let us know you&apos;re coming.
        </p>

        {error && (
          <div className="bg-patriot-red/20 border border-patriot-red/30 rounded-lg
            px-4 py-3 mb-4">
            <p className="font-body text-sm text-red-light">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-body text-[10px] font-medium uppercase
                tracking-[1px] text-white/40 mb-1.5">
                First Name *
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange('firstName')}
                className="w-full bg-white/[0.08] border border-white/[0.12]
                  rounded-lg px-3 py-2.5 text-white placeholder:text-white/30
                  font-body text-sm focus:outline-none focus:border-patriot-red
                  transition-colors"
                placeholder="Jenny"
              />
            </div>
            <div>
              <label className="block font-body text-[10px] font-medium uppercase
                tracking-[1px] text-white/40 mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={handleChange('lastName')}
                className="w-full bg-white/[0.08] border border-white/[0.12]
                  rounded-lg px-3 py-2.5 text-white placeholder:text-white/30
                  font-body text-sm focus:outline-none focus:border-patriot-red
                  transition-colors"
                placeholder="Kamprath"
              />
            </div>
          </div>

          <div>
            <label className="block font-body text-[10px] font-medium uppercase
              tracking-[1px] text-white/40 mb-1.5">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={handleChange('email')}
              className="w-full bg-white/[0.08] border border-white/[0.12]
                rounded-lg px-3 py-2.5 text-white placeholder:text-white/30
                font-body text-sm focus:outline-none focus:border-patriot-red
                transition-colors"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="block font-body text-[10px] font-medium uppercase
              tracking-[1px] text-white/40 mb-1.5">
              Contact Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={handleChange('phone')}
              className="w-full bg-white/[0.08] border border-white/[0.12]
                rounded-lg px-3 py-2.5 text-white placeholder:text-white/30
                font-body text-sm focus:outline-none focus:border-patriot-red
                transition-colors"
              placeholder="(503) 555-1234"
            />
          </div>

          <div className="space-y-2.5 pt-1">
            <label className="flex gap-2.5 items-start cursor-pointer">
              <input
                type="checkbox"
                checked={formData.smsConsent}
                onChange={handleChange('smsConsent')}
                className="mt-0.5 flex-shrink-0 accent-patriot-red"
              />
              <span className="font-body text-[11px] text-white/50 leading-relaxed">
                I agree to receive SMS updates from Friends of Jenny Kamprath
                regarding campaign updates, event reminders, and volunteer
                coordination. Message frequency varies. Message &amp; data
                rates may apply. Reply STOP to unsubscribe or HELP for help.
              </span>
            </label>

            <label className="flex gap-2.5 items-start cursor-pointer">
              <input
                type="checkbox"
                checked={formData.promoConsent}
                onChange={handleChange('promoConsent')}
                className="mt-0.5 flex-shrink-0 accent-patriot-red"
              />
              <span className="font-body text-[11px] text-white/50 leading-relaxed">
                I agree to receive promotional SMS messages from Friends of
                Jenny Kamprath, including fundraising requests and donation
                drives. Message frequency varies. Message &amp; data rates
                may apply. Reply STOP to unsubscribe or HELP for help.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full font-body font-semibold text-sm text-white
              bg-patriot-red hover:bg-red-dark disabled:opacity-60
              disabled:cursor-not-allowed py-3.5 rounded-lg
              transition-colors duration-200 mt-1"
          >
            {submitting ? 'Submitting...' : 'Confirm RSVP'}
          </button>

          <p className="font-body text-xs text-white/50 text-center">
            By submitting you agree to the{' '}
            <a href="/terms-of-service" className="underline hover:text-white transition-colors">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy-policy" className="underline hover:text-white transition-colors">
              Privacy Policy
            </a>.
          </p>
        </form>
      </div>
    </div>
  )
}

RsvpForm.propTypes = {
  eventTitle: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
  eventCategory: PropTypes.string.isRequired,
}

export default RsvpForm
