import Link from 'next/link'

import Navbar from '@/components/layout/navbar'
import SiteFooter from '@/components/layout/site-footer'

export const metadata = {
  title: 'Terms of Service — Friends of Jenny Kamprath',
  description:
    'Terms of Service for the Friends of Jenny Kamprath website and SMS messaging program.',
}

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="py-20 lg:py-28 bg-off-white">
          <div className="mx-auto max-w-[800px] px-6 lg:px-10">
            <p className="font-body text-xs font-bold uppercase tracking-[3px] text-red-dark mb-4">
              Legal
            </p>
            <h1 className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)] leading-[1.15] text-navy-900 mb-4">
              Terms of Service
            </h1>
            <p className="font-body text-sm text-warm-400">
              Last updated: April 12, 2026
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[800px] px-6 lg:px-10 font-body text-base text-warm-600 leading-[1.8] space-y-10">

            {/* Intro */}
            <p>
              These Terms of Service (&quot;Agreement&quot;) set forth the
              legally binding terms governing your use of services,
              communications, and interactions with Friends of Jenny Kamprath
              (the &quot;Committee,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;), including through our website (the
              &quot;Website&quot;).
            </p>
            <p>
              By using our Website, opting into communications, or engaging with
              the Committee, you agree to be bound by this Agreement.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                1. Services and Communications
              </h2>
              <p className="mb-4">
                The Committee provides information, updates, and engagement
                opportunities related to the Jenny Kamprath for Washington County
                Chair campaign, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Campaign updates and announcements</li>
                <li>Event invitations and reminders</li>
                <li>Volunteer opportunities and coordination</li>
                <li>Donation and fundraising requests</li>
                <li>Voter outreach and informational messaging</li>
                <li>Constituent engagement and support</li>
              </ul>
              <p className="mt-4">
                You agree to use these services for lawful purposes only and not
                to misuse, duplicate, or interfere with the communications or
                systems provided.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                2. Participation and Contributions
              </h2>
              <p className="mb-4">
                You may voluntarily choose to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Participate in campaign activities</li>
                <li>Volunteer your time or services</li>
                <li>Make financial contributions</li>
              </ul>
              <p className="mt-4">
                All contributions are voluntary and subject to applicable campaign
                finance laws and regulations. You agree to provide accurate and
                truthful information when engaging with the Committee.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                3. No Guarantee of Outcomes
              </h2>
              <p>
                The Committee makes no guarantees regarding election outcomes,
                policy implementation, or event availability or participation
                opportunities. All campaign activities and communications are
                provided on an &quot;as-is&quot; basis.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                4. Intellectual Property
              </h2>
              <p>
                All content provided by the Committee, including but not limited
                to campaign materials, website content, graphics, branding, and
                messaging, are the property of Friends of Jenny Kamprath and may
                not be copied, reproduced, or distributed without prior written
                permission.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                5. Media and Testimonial Release
              </h2>
              <p>
                By participating in campaign events or activities, you grant the
                Committee permission to use your name, image, voice, and likeness
                in photographs, videos, or other media for campaign, promotional,
                and informational purposes without compensation.
              </p>
            </div>

            {/* Section 6 — SMS */}
            <div className="bg-warm-50 rounded-xl p-8 border border-warm-100">
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                6. SMS Messaging and Communications
              </h2>
              <p className="mb-6">
                The Committee offers an SMS messaging program for individuals who
                voluntarily opt in.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                Opt-In Process
              </h3>
              <p className="mb-4">
                You may opt in to receive SMS messages by selecting an optional,
                unchecked SMS consent checkbox on forms located on our Website, or
                by providing express written consent through other campaign
                channels. Providing a phone number alone does not constitute
                consent.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                Types of Messages
              </h3>
              <p className="mb-4">
                By opting in, you agree to receive campaign updates and
                announcements, event invitations and reminders, volunteer
                opportunities, donation and fundraising requests, and voter
                engagement and informational messages.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                Message Frequency
              </h3>
              <p className="mb-4">
                Message frequency varies but typically ranges from 1&ndash;5
                messages per week, depending on campaign activity.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                Fees
              </h3>
              <p className="mb-4">
                Message and data rates may apply based on your mobile carrier plan.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                Opt-Out Instructions
              </h3>
              <p className="mb-4">
                You may opt out at any time by replying <strong>STOP</strong> to
                any message you receive from us.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                Help Instructions
              </h3>
              <p className="mb-4">
                For assistance, reply <strong>HELP</strong>, or contact us at{' '}
                <a href="mailto:jenny@jennykamprath.com" className="text-red-dark hover:underline">
                  jenny@jennykamprath.com
                </a>.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                Consent Disclaimer
              </h3>
              <p className="mb-4">
                Consent to receive SMS messages is not a condition of any
                purchase, donation, or participation.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                Data Privacy
              </h3>
              <p className="mb-4">
                The Committee does not sell or share mobile information with third
                parties for marketing purposes.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                Carrier Liability
              </h3>
              <p className="mb-4">
                Carriers are not liable for delayed or undelivered messages.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                Age Requirement
              </h3>
              <p>
                You must be 18 years of age or older to use this SMS service.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                7. Privacy
              </h2>
              <p>
                Your use of our services is also governed by our{' '}
                <Link href="/privacy-policy" className="text-red-dark hover:underline">
                  Privacy Policy
                </Link>, which describes how we collect, use, and protect your
                information.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                8. Relationship of Parties
              </h2>
              <p>
                Nothing in this Agreement creates a partnership, employment
                relationship, or agency relationship between you and the
                Committee.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                9. Modification of Terms
              </h2>
              <p>
                The Committee may update or modify these Terms at any time.
                Updates will be effective upon posting on the Website. Continued
                use of the Website or services constitutes acceptance of any
                updated Terms.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                10. Governing Law
              </h2>
              <p>
                This Agreement shall be governed by the laws of the State of
                Oregon, without regard to conflict-of-law principles.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                11. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, the Committee shall not be
                liable for indirect, incidental, or consequential damages, loss of
                data, participation opportunities, or communications. All services
                are provided &quot;as is&quot; without warranties of any kind.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                12. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Friends of Jenny
                Kamprath, its affiliates, officers, and representatives from any
                claims arising out of your use of the Website or services, or your
                violation of this Agreement.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                13. Severability
              </h2>
              <p>
                If any provision of this Agreement is found to be unenforceable,
                the remaining provisions shall remain in full force and effect.
              </p>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                14. Entire Agreement
              </h2>
              <p>
                This Agreement constitutes the entire agreement between you and
                the Committee regarding your use of services and communications.
              </p>
            </div>

            {/* Section 15 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                15. Contact Information
              </h2>
              <p className="mb-4">
                For questions about these Terms of Service, contact:
              </p>
              <div className="bg-warm-50 rounded-xl p-6 space-y-1 border border-warm-100">
                <p className="font-semibold text-navy-900">Friends of Jenny Kamprath</p>
                <p>PO Box 122, Beaverton, OR 97075</p>
                <p>
                  Email:{' '}
                  <a href="mailto:jenny@jennykamprath.com" className="text-red-dark hover:underline">
                    jenny@jennykamprath.com
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:5038281439" className="text-red-dark hover:underline">
                    (503) 828-1439
                  </a>
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default TermsOfService
