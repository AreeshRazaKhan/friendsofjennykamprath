'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Phone, Megaphone, DoorOpen, Heart, Share2 } from 'lucide-react'

import Navbar from '@/components/layout/navbar'
import SiteFooter from '@/components/layout/site-footer'

const HELP_OPTIONS = [
  { id: 'door-knocking', label: 'Door Knocking', icon: DoorOpen },
  { id: 'phone-banking', label: 'Phone Banking', icon: Phone },
  { id: 'host-fundraiser', label: 'Host a Fundraiser', icon: Heart },
  { id: 'digital-social', label: 'Digital/Social Media', icon: Share2 },
  { id: 'volunteer-coord', label: 'Volunteer Coordination', icon: Users },
  { id: 'host-event', label: 'Host a Meet & Greet or Other Event', icon: Megaphone },
]

const COUNTIES = [
  'Baker County',
  'Benton County',
  'Clackamas County',
  'Clatsop County',
  'Columbia County',
  'Coos County',
  'Crook County',
  'Curry County',
  'Deschutes County',
  'Douglas County',
  'Gilliam County',
  'Grant County',
  'Harney County',
  'Hood River County',
  'Jackson County',
  'Jefferson County',
  'Josephine County',
  'Klamath County',
  'Lake County',
  'Lane County',
  'Lincoln County',
  'Linn County',
  'Malheur County',
  'Marion County',
  'Morrow County',
  'Multnomah County',
  'Polk County',
  'Sherman County',
  'Tillamook County',
  'Umatilla County',
  'Union County',
  'Wallowa County',
  'Wasco County',
  'Washington County',
  'Wheeler County',
  'Yamhill County',
]

const REGIONS = [
  'Portland Metro',
  'Willamette Valley',
  'Oregon Coast',
  'Central Oregon',
  'Eastern Oregon',
  'Southern Oregon',
  'Columbia River Gorge',
  'Rogue Valley',
  'Mount Hood Area',
]

const EXPERIENCE_OPTIONS = [
  'Yes, local (school board, county commissioner, etc.)',
  'Yes, state level (House, Senate, State Assembly, etc.)',
  'Yes, statewide (AG, Governor, etc.)',
  'Yes, federal (Congressional)',
  'Yes, federal (Presidential)',
  'No',
]

const AVAILABILITY_OPTIONS = [
  '1-2 hours/week',
  '3-5 hours/week',
  '5-10 hours/week',
  '10-20 hours/week',
  'Full-time',
  'Remote Help Only',
]

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    phone: '',
    county: '',
    region: '',
    registered: '',
    experience: '',
    helpOptions: [],
    availability: '',
    issues: '',
    anythingElse: '',
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

  const toggleHelpOption = (id) => {
    setFormData((prev) => ({
      ...prev,
      helpOptions: prev.helpOptions.includes(id)
        ? prev.helpOptions.filter((o) => o !== id)
        : [...prev.helpOptions, id],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      setError('Please fill in all required fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (formData.helpOptions.length === 0) {
      setError('Please select at least one way you would like to help.')
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/volunteer', {
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
          {/* Floating circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/[0.05]" />
          <div className="absolute bottom-12 left-[8%] w-36 h-36 rounded-full border border-white/[0.04]" />

          {/* Watermark */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            font-display font-black text-[160px] text-white/[0.02] tracking-[10px]
            whitespace-nowrap select-none pointer-events-none hidden lg:block"
          >
            VOLUNTEER
          </div>

          <div className="relative z-[5] mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-6">
                Join the Team
              </p>
              <h1 className="font-display font-black text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.08] text-white mb-6">
                Volunteer for{' '}
                <span className="text-patriot-red">Jenny.</span>
              </h1>
              <p className="font-body text-lg text-white/60 leading-relaxed max-w-xl">
                This campaign is powered by neighbors, not political insiders.
                Every door knocked, every call made, and every conversation had
                brings us one step closer to accountable government.
              </p>
            </div>
          </div>
        </section>

        {/* Why volunteer */}
        <section className="py-16 lg:py-20 bg-off-white">
          <div className="mx-auto max-w-[1290px] px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: '01',
                  title: 'Make a Real Difference',
                  text: 'Low-turnout primaries are won by who shows up. Your time directly impacts the outcome of this race.',
                },
                {
                  number: '02',
                  title: 'No Experience Needed',
                  text: 'First-time volunteer? We provide full training, walk lists, scripts, and pair you with experienced team members.',
                },
                {
                  number: '03',
                  title: 'Flexible Commitment',
                  text: 'Give an hour or a weekend. Every bit of help matters. Choose what works for your schedule.',
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-5">
                  <span className="font-display font-black text-4xl text-patriot-red/15 leading-none flex-shrink-0">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-navy-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-warm-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
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
                  <svg className="w-10 h-10 text-patriot-red" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display font-bold text-3xl text-navy-900 mb-4">
                  Welcome to the Team, {formData.firstName}!
                </h2>
                <p className="font-body text-lg text-warm-600 leading-relaxed mb-8 max-w-lg mx-auto">
                  Thanks for stepping up. A volunteer coordinator will reach out
                  within 48 hours to get you plugged in. In the meantime, check
                  out our upcoming events.
                </p>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-3 font-body font-semibold
                    text-base text-white bg-patriot-red hover:bg-red-dark
                    px-10 py-4 rounded-lg transition-colors duration-200"
                >
                  View Upcoming Events
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20">

                {/* Left — form */}
                <div>
                  <div className="mb-10">
                    <div className="w-16 h-[3px] bg-patriot-red mb-8" />
                    <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)] leading-[1.15] text-navy-900 mb-4">
                      Join the Team
                    </h2>
                    <p className="font-body text-lg text-warm-600 leading-relaxed">
                      Fill out the form below and a volunteer coordinator will
                      follow up with next steps.
                    </p>
                  </div>

                  {error && (
                    <div className="bg-patriot-red/10 border border-patriot-red/20 rounded-lg px-4 py-3 mb-6">
                      <p className="font-body text-sm text-patriot-red">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name row */}
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
                          placeholder="Jenny"
                          className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                            text-navy-900 font-body text-base focus:outline-none
                            focus:border-patriot-red transition-colors placeholder:text-warm-200"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange('lastName')}
                          placeholder="Kamprath"
                          className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                            text-navy-900 font-body text-base focus:outline-none
                            focus:border-patriot-red transition-colors placeholder:text-warm-200"
                        />
                      </div>
                    </div>

                    {/* Email + Zip */}
                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-4">
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
                      <div>
                        <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                          Zip Code *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.zipCode}
                          onChange={handleChange('zipCode')}
                          placeholder="97005"
                          className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                            text-navy-900 font-body text-base focus:outline-none
                            focus:border-patriot-red transition-colors placeholder:text-warm-200"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        placeholder="(503) 555-0123"
                        className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                          text-navy-900 font-body text-base focus:outline-none
                          focus:border-patriot-red transition-colors placeholder:text-warm-200"
                      />
                    </div>

                    {/* County + Region */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                          County *
                        </label>
                        <select
                          required
                          value={formData.county}
                          onChange={handleChange('county')}
                          className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                            text-navy-900 font-body text-base focus:outline-none
                            focus:border-patriot-red transition-colors appearance-none"
                        >
                          <option value="">Select county</option>
                          {COUNTIES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                          Region
                        </label>
                        <select
                          value={formData.region}
                          onChange={handleChange('region')}
                          className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                            text-navy-900 font-body text-base focus:outline-none
                            focus:border-patriot-red transition-colors appearance-none"
                        >
                          <option value="">Select region</option>
                          {REGIONS.map((r) => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Registered + Experience */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                          Registered to Vote in Oregon? *
                        </label>
                        <select
                          required
                          value={formData.registered}
                          onChange={handleChange('registered')}
                          className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                            text-navy-900 font-body text-base focus:outline-none
                            focus:border-patriot-red transition-colors appearance-none"
                        >
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="not-sure">Not Sure</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                          Prior Campaign Experience?
                        </label>
                        <select
                          value={formData.experience}
                          onChange={handleChange('experience')}
                          className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                            text-navy-900 font-body text-base focus:outline-none
                            focus:border-patriot-red transition-colors appearance-none"
                        >
                          <option value="">Select</option>
                          {EXPERIENCE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* How would you like to help */}
                    <div>
                      <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-4">
                        How Would You Like to Help?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {HELP_OPTIONS.map((option) => {
                          const isSelected = formData.helpOptions.includes(option.id)
                          const Icon = option.icon
                          return (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() => toggleHelpOption(option.id)}
                              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl
                                border-2 text-left transition-all duration-200
                                ${isSelected
                                  ? 'border-patriot-red bg-patriot-red/[0.04] text-navy-900'
                                  : 'border-warm-100 hover:border-warm-200 text-warm-600'
                                }`}
                            >
                              <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-patriot-red' : 'text-warm-400'}`} />
                              <span className="font-body text-sm font-medium">
                                {option.label}
                              </span>
                              {isSelected && (
                                <svg className="w-4 h-4 text-patriot-red ml-auto flex-shrink-0"
                                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Availability */}
                    <div>
                      <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                        Availability *
                      </label>
                      <select
                        required
                        value={formData.availability}
                        onChange={handleChange('availability')}
                        className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                          text-navy-900 font-body text-base focus:outline-none
                          focus:border-patriot-red transition-colors appearance-none"
                      >
                        <option value="">Select your availability</option>
                        {AVAILABILITY_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Issues */}
                    <div>
                      <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                        What Issue(s) Matter Most to You? *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.issues}
                        onChange={handleChange('issues')}
                        placeholder="Taxes, public safety, housing, small business..."
                        className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                          text-navy-900 font-body text-base focus:outline-none
                          focus:border-patriot-red transition-colors resize-none
                          placeholder:text-warm-200"
                      />
                    </div>

                    {/* Anything else */}
                    <div>
                      <label className="block font-body text-xs font-medium uppercase tracking-[1px] text-warm-400 mb-2">
                        Anything Else to Share?
                      </label>
                      <textarea
                        rows={3}
                        value={formData.anythingElse}
                        onChange={handleChange('anythingElse')}
                        placeholder="Skills, schedule constraints, or anything else we should know..."
                        className="w-full bg-white border-b-2 border-warm-200 px-0 py-3
                          text-navy-900 font-body text-base focus:outline-none
                          focus:border-patriot-red transition-colors resize-none
                          placeholder:text-warm-200"
                      />
                    </div>

                    {/* A2P consent checkboxes */}
                    <div className="space-y-3 pt-2">
                      <label className="flex gap-3 items-start cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.smsConsent}
                          onChange={handleChange('smsConsent')}
                          className="mt-1 flex-shrink-0 accent-patriot-red"
                        />
                        <span className="font-body text-xs text-warm-400 leading-relaxed">
                          I agree to receive SMS updates from Friends of Jenny Kamprath
                          regarding campaign updates, event reminders, and volunteer
                          coordination. Message frequency varies. Message &amp; data
                          rates may apply. Reply STOP to unsubscribe or HELP for help.
                        </span>
                      </label>

                      <label className="flex gap-3 items-start cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.promoConsent}
                          onChange={handleChange('promoConsent')}
                          className="mt-1 flex-shrink-0 accent-patriot-red"
                        />
                        <span className="font-body text-xs text-warm-400 leading-relaxed">
                          I agree to receive promotional SMS messages from Friends of
                          Jenny Kamprath, including fundraising requests and donation
                          drives. Message frequency varies. Message &amp; data rates
                          may apply. Reply STOP to unsubscribe or HELP for help.
                        </span>
                      </label>
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
                      {submitting ? 'Submitting...' : 'Join the Team'}
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
                  {/* Info card */}
                  <div className="bg-navy-900 rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border border-white/[0.06]" />

                    <div className="relative z-[1]">
                      <h3 className="font-display font-bold text-xl text-white mb-4">
                        What to Expect
                      </h3>
                      <ul className="space-y-4">
                        {[
                          'A coordinator will call or email within 48 hours',
                          'Full training provided for first-time volunteers',
                          'Flexible scheduling — give what you can',
                          'Materials, walk lists, and scripts provided',
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


                  {/* Contact card */}
                  <div className="bg-warm-50 rounded-2xl p-8 border border-warm-100">
                    <h3 className="font-display font-bold text-lg text-navy-900 mb-3">
                      Questions?
                    </h3>
                    <p className="font-body text-sm text-warm-600 mb-4">
                      Reach out to our volunteer coordinator directly.
                    </p>
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

export default Volunteer
