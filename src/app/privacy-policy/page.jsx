import Link from 'next/link'

import Navbar from '@/components/layout/navbar'
import SiteFooter from '@/components/layout/site-footer'

export const metadata = {
  title: 'Privacy Policy — Friends of Jenny Kamprath',
  description:
    'Privacy Policy for the Friends of Jenny Kamprath website, including SMS data practices.',
}

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="py-20 lg:py-28 bg-off-white">
          <div className="mx-auto max-w-[800px] px-6 lg:px-10">
            <p className="font-body text-xs font-bold uppercase tracking-[3px] text-patriot-red mb-4">
              Legal
            </p>
            <h1 className="font-display font-extrabold text-[clamp(2rem,4vw,2.625rem)] leading-[1.15] text-navy-900 mb-4">
              Privacy Policy
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
              Friends of Jenny Kamprath (the &quot;Committee,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) operates the Friends of Jenny
              Kamprath website (the &quot;Website&quot;) and is committed to
              protecting the privacy of our visitors, supporters, and contributors.
              This Privacy Policy outlines how we collect, use, disclose, and
              safeguard your personal information in compliance with the Oregon
              Consumer Privacy Act (OCPA), Oregon campaign finance law (ORS
              Chapter 260), the CAN-SPAM Act (15 U.S.C. &sect; 7701 et seq.),
              and applicable federal laws.
            </p>
            <p>
              By accessing or using the Website, you consent to the practices
              described in this Privacy Policy. If you do not agree, please refrain
              from using the Website.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We collect personal information you voluntarily provide and
                information automatically collected when you interact with the
                Website.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                1.1. Information You Provide
              </h3>
              <p className="mb-4">
                We may collect the following personal information when you engage
                with the Website:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-4">
                <li>
                  <strong>Contact Information:</strong> Name, email address, phone
                  number, mailing address, or other identifiers provided through
                  forms (e.g., volunteer sign-ups, newsletter subscriptions, or
                  contact inquiries).
                </li>
                <li>
                  <strong>Contribution Information:</strong> For donations, we
                  collect payment details (e.g., credit card number, billing
                  address) and contributor details required by Oregon campaign
                  finance law (ORS Chapter 260), such as occupation and employer
                  information where required for reporting purposes.
                </li>
                <li>
                  <strong>User-Submitted Content:</strong> Comments, feedback, or
                  other submissions provided via the Website.
                </li>
                <li>
                  <strong>Text Messaging Opt-In Data:</strong> We will not share
                  or sell your text messaging opt-in data, consent, or related
                  personal information with any third parties, unless required by
                  law.
                </li>
              </ul>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                1.2. Information Collected Automatically
              </h3>
              <p className="mb-4">
                We use cookies, web beacons, and similar technologies to collect:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Usage Data:</strong> IP address, browser type, device
                  information, operating system, pages visited, time spent on the
                  Website, and referring URLs.
                </li>
                <li>
                  <strong>Analytics Data:</strong> Aggregated data on user
                  interactions to improve Website functionality and campaign
                  outreach, collected via tools like Google Analytics.
                </li>
              </ul>
              <p className="mt-4">
                You may disable cookies through your browser settings, but this
                may limit Website functionality.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use your information for the following purposes, consistent
                with campaign objectives and legal requirements:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Campaign Operations:</strong> To communicate with you
                  about campaign events, updates, or volunteer opportunities, and
                  to process contributions in compliance with Oregon campaign
                  finance law (ORS Chapter 260).
                </li>
                <li>
                  <strong>Compliance with Campaign Finance Laws:</strong> To
                  verify contributor eligibility, report contributions via the
                  Oregon Secretary of State&apos;s Campaign Finance Reporting
                  System, and ensure adherence to applicable contribution limits
                  under Oregon law.
                </li>
                <li>
                  <strong>Marketing and Outreach:</strong> To send newsletters or
                  promotional emails, subject to your consent under the CAN-SPAM
                  Act. You may opt out at any time via the unsubscribe link in
                  emails.
                </li>
                <li>
                  <strong>Website Improvement:</strong> To analyze usage patterns
                  and enhance Website performance and accessibility.
                </li>
                <li>
                  <strong>Legal Obligations:</strong> To comply with applicable
                  laws, including the Oregon Consumer Privacy Act (OCPA), and
                  respond to lawful requests from government authorities.
                </li>
              </ul>
              <p className="mt-4">
                We do not engage in targeted advertising or sell personal
                information as defined under Oregon law.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                3. How We Share Your Information
              </h2>
              <p className="mb-4">
                Your personal information may be shared in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Service Providers:</strong> With third-party vendors
                  (e.g., payment processors, email service providers) who assist
                  with campaign operations, subject to confidentiality agreements
                  and applicable data protection requirements.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> With the Oregon Secretary of
                  State for contribution reporting, or with law enforcement if
                  required by law (e.g., subpoenas, court orders).
                </li>
                <li>
                  <strong>Public Disclosure:</strong> Certain contributor
                  information (e.g., name, city, state, contribution amount) may
                  be publicly reported as required by ORS Chapter 260.
                </li>
                <li>
                  <strong>Aggregated Data:</strong> Non-identifiable, aggregated
                  data may be shared with analytics providers to assess campaign
                  reach.
                </li>
              </ul>
              <p className="mt-4">
                We do not share personal information with unaffiliated third
                parties for commercial purposes.
              </p>
            </div>

            {/* Section 4 — SMS */}
            <div className="bg-warm-50 rounded-xl p-8 border border-warm-100">
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                4. SMS / Text Messaging Privacy
              </h2>
              <p className="mb-6">
                Friends of Jenny Kamprath offers SMS messaging for supporters who
                opt in through our website forms. This section describes how we
                handle your phone number and text messaging data.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                What We Collect
              </h3>
              <p className="mb-4">
                When you provide your phone number and check an SMS consent
                checkbox on our website, we collect your mobile phone number, the
                date and time of your consent, and the specific consent language
                you agreed to.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                How Your Phone Number Is Used
              </h3>
              <p className="mb-4">
                Your phone number is used solely to send you the types of SMS
                messages you consented to receive, including campaign updates,
                event reminders, volunteer coordination, and/or fundraising and
                promotional messages, depending on which consent boxes you checked.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                No Third-Party Sharing
              </h3>
              <p className="mb-4 font-semibold text-navy-900">
                We will not share or sell your text messaging opt-in data,
                consent, or related personal information with any third parties,
                unless required by law.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                Data Retention
              </h3>
              <p className="mb-4">
                We retain your phone number and consent records for the duration
                of the campaign and for a reasonable period afterward as required
                for legal compliance. Consent records are maintained to
                demonstrate compliance with TCPA regulations.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                Data Deletion
              </h3>
              <p className="mb-4">
                You may request deletion of your phone number and SMS consent data
                at any time by contacting us at{' '}
                <a href="mailto:jenny@jennykamprath.com" className="text-patriot-red hover:underline">
                  jenny@jennykamprath.com
                </a>{' '}
                or calling{' '}
                <a href="tel:5035158576" className="text-patriot-red hover:underline">
                  (503) 515-8576
                </a>. We will process your request within 10 business days.
              </p>

              <h3 className="font-display font-semibold text-lg text-navy-900 mb-3">
                Opt-Out
              </h3>
              <p>
                You can opt out of SMS messages at any time by replying{' '}
                <strong>STOP</strong> to any message you receive from us. You may
                also opt out by contacting us directly at{' '}
                <a href="mailto:jenny@jennykamprath.com" className="text-patriot-red hover:underline">
                  jenny@jennykamprath.com
                </a>. Opt-out requests are processed within 10 business days.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                5. Your Rights Under the Oregon Consumer Privacy Act
              </h2>
              <p className="mb-4">
                As an Oregon resident, you have the following rights regarding
                your personal information, subject to verification of your
                identity:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Right to Access:</strong> Request confirmation of
                  whether we process your personal information and obtain a copy
                  of it.
                </li>
                <li>
                  <strong>Right to Correction:</strong> Request correction of
                  inaccurate personal information.
                </li>
                <li>
                  <strong>Right to Deletion:</strong> Request deletion of your
                  personal information, subject to exemptions (e.g., campaign
                  finance reporting obligations).
                </li>
                <li>
                  <strong>Right to Opt-Out:</strong> Opt out of targeted
                  advertising, data sales, or profiling (note: we do not engage in
                  these activities).
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Request your
                  personal information in a machine-readable format.
                </li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at the information below. We
                will respond within 45 days, as required by Oregon law, and may
                extend this period for complex requests as permitted.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                6. Data Security
              </h2>
              <p className="mb-4">
                We implement reasonable administrative, technical, and physical
                safeguards to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Encryption of payment data via PCI DSS-compliant processors.</li>
                <li>
                  Secure storage of contributor information in compliance with
                  Oregon campaign finance regulations.
                </li>
                <li>Regular security assessments to mitigate risks.</li>
              </ul>
              <p className="mt-4">
                However, no system is completely secure, and we cannot guarantee
                absolute security. You use the Website at your own risk.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                7. Data Retention
              </h2>
              <p className="mb-4">
                We retain personal information only as long as necessary to
                fulfill the purposes outlined in this Policy or as required by
                law. For example:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  Contribution records are retained in accordance with ORS Chapter
                  260 and applicable record retention requirements.
                </li>
                <li>
                  Contact information for newsletters is retained until you
                  unsubscribe.
                </li>
                <li>
                  Usage data is retained for analytics purposes but anonymized
                  where possible.
                </li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                8. Third-Party Links
              </h2>
              <p>
                The Website may contain links to external sites (e.g., social
                media platforms). We are not responsible for the privacy practices
                of these sites. Review their privacy policies before providing
                personal information.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p>
                The Website is not directed to individuals under 13. We do not
                knowingly collect personal information from children under 13
                without parental consent, in compliance with the Children&apos;s
                Online Privacy Protection Act (15 U.S.C. &sect; 6501 et seq.).
                Contributions from minors must comply with applicable Oregon
                campaign finance laws.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                10. Accessibility
              </h2>
              <p>
                We strive to make the Website accessible in accordance with
                Section 508 of the Rehabilitation Act (29 U.S.C. &sect; 794d) and
                the Americans with Disabilities Act (42 U.S.C. &sect; 12101 et
                seq.). Contact us if you encounter accessibility issues.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy to reflect changes in our
                practices or legal requirements. Updates will be posted on this
                page with the &quot;Last Updated&quot; date revised. If you have
                provided an email address, we may notify you of material changes.
                Continued use of the Website constitutes acceptance of the updated
                Policy.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-900 mb-4">
                12. Contact Information
              </h2>
              <p className="mb-4">
                For questions, requests, or concerns about this Privacy Policy or
                your personal information, contact:
              </p>
              <div className="bg-warm-50 rounded-xl p-6 space-y-1 border border-warm-100">
                <p className="font-semibold text-navy-900">Friends of Jenny Kamprath</p>
                <p>PO Box 122, Beaverton, OR 97075</p>
                <p>
                  Email:{' '}
                  <a href="mailto:jenny@jennykamprath.com" className="text-patriot-red hover:underline">
                    jenny@jennykamprath.com
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:5035158576" className="text-patriot-red hover:underline">
                    (503) 515-8576
                  </a>
                </p>
              </div>
              <p className="mt-4">
                See also our{' '}
                <Link href="/terms-of-service" className="text-patriot-red hover:underline">
                  Terms of Service
                </Link>.
              </p>
            </div>

          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default PrivacyPolicy
