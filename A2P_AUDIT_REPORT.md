# A2P 10DLC Website Compliance Audit

**Site:** Friends of Jenny Kamprath (jennykamprath.com)
**Audited against:** Operation 1776 SOP — A2P Website Compliance
**Audit date:** 2026-04-25
**Auditor:** Automated static analysis (source-of-truth: repository HEAD)
**Live dev server at time of audit:** not running — audit performed via source inspection

---

## Executive summary

| Status | Count |
|---|---|
| ✅ Pass | 18 |
| ⚠️ Review | 1 |
| ❌ Fail | 0 |

**Recommendation:** The website satisfies the Operation 1776 A2P compliance checklist and is eligible for A2P 10DLC registration submission. One item (#11) warrants client awareness but is not a blocker. There are also two non-A2P hygiene issues unrelated to compliance that are worth fixing before launch (see §3).

---

## 1. Checklist (19 items)

| # | Compliance Area | Status | Evidence |
|---|---|---|---|
| 1 | Terms of Service Page | ✅ | `src/app/terms-of-service/page.jsx` — renders at `/terms-of-service/` |
| 2 | TOS Footer Link on ALL pages | ✅ | `site-footer.jsx:179` `<Link href="/terms-of-service">` — `SiteFooter` imported by 11/11 pages |
| 3 | Privacy Policy Page | ✅ | `src/app/privacy-policy/page.jsx` — renders at `/privacy-policy/` |
| 4 | Privacy Policy Footer Link on ALL pages | ✅ | `site-footer.jsx:177` `<Link href="/privacy-policy">` — universal footer |
| 5 | Privacy Policy — SMS Language | ✅ | Dedicated Section 4 "SMS / Text Messaging Privacy" (`privacy-policy/page.jsx:203-279`) covering collection, use, retention, deletion, opt-out |
| 6 | Privacy Policy — Business Name | ✅ | "Friends of Jenny Kamprath" appears in intro (`:36`), SMS section (`:209`), and contact block (`:438`) |
| 7 | SMS Updates Consent Checkbox | ✅ | `smsConsent` input present on all 4 phone-collecting forms (contact, volunteer, ask-jenny, RSVP) |
| 8 | Promotional SMS Consent Checkbox | ✅ | `promoConsent` input present on all 4 phone-collecting forms |
| 9 | Consent Checkboxes at Bottom of Form | ✅ | On all 4 forms, consent checkboxes sit immediately above the submit button (see §2 for per-form notes) |
| 10 | Business Name in Consent Language | ✅ | Both checkbox spans on each form read "from Friends of Jenny Kamprath" — 8 instances total, identical phrasing |
| 11 | Checkboxes Optional (Not Pre-Checked) | ⚠️ | Initial state is `false` on all forms (not pre-checked ✅), BUT checkboxes are `required={hasPhone}` — when user enters a phone, they cannot submit without ticking both. See §2 for analysis. |
| 12 | Opt-Out (STOP) Language | ✅ | In consent text: "Reply STOP to unsubscribe" (all 4 forms). In TOS: Section 6 "Opt-Out Instructions" (`:182-185`). In PP: Section 4 "Opt-Out" (`:270-278`) |
| 13 | HELP Keyword Instructions | ✅ | In consent text: "HELP for help" (all 4 forms). In TOS: Section 6 "Help Instructions" (`:187-195`) with fallback email |
| 14 | Message Frequency Disclosure | ✅ | Consent: "Message frequency varies". TOS: "1–5 messages per week" (`:168-170`) |
| 15 | Data Rates Disclosure | ✅ | Consent: "Message & data rates may apply". TOS: "Message and data rates may apply" (`:176`) |
| 16 | Business Name Consistency | ✅ | "Friends of Jenny Kamprath" used in Privacy Policy, Terms of Service, all 8 consent-checkbox spans, footer copyright (`site-footer.jsx:184`), and Contact page heading (`contact/page.jsx:103`) |
| 17 | Carrier Liability Disclaimer (in TOS) | ✅ | "Carriers are not liable for delayed or undelivered messages." — TOS Section 6 "Carrier Liability" (`:216-218`) |
| 18 | Detailed Contact Info (Footer) | ✅ | Footer Column 3 renders address (`PO Box 122, Beaverton, OR 97075`), email (`jenny@jennykamprath.com`), phone (`(971) 365-5668`) on every page via `SiteFooter` |
| 19 | Detailed Contact Info (Contact Page) | ✅ | Contact page left column renders the same address, email, phone with `MapPin`, `Mail`, `Phone` icons (`contact/page.jsx:106-145`) |

---

## 2. Per-form consent audit

Four forms collect phone numbers and must meet the Step 6 consent pattern. All four use the same consent-checkbox component pattern (documented in `.claude/rules/forms-compliance-pattern.md`).

### Contact form — `src/app/contact/page.jsx`
- Phone field: line 231-241 (after email, before message)
- Consent checkboxes: **lines 263-295** — positioned after the message field, immediately above the Submit button (line 297)
- Distance from phone field: separated by the Message textarea (adequate separation per SOP)
- Pre-checked: no (`:19-20` initializes to `false`)
- Business name in copy: ✅ ("Friends of Jenny Kamprath" on both checkboxes)

### Volunteer form — `src/app/volunteer/page.jsx`
- Phone field: line 381-392
- Consent checkboxes: **lines 573-605** — at the very bottom of the form, above Submit (line 609)
- Distance from phone field: separated by county, region, registered, experience, help options, availability, issues, anything-else fields (substantial separation)
- Pre-checked: no (`:106-107` initializes to `false`)
- Business name in copy: ✅

### Ask Jenny form — `src/app/ask-jenny/page.jsx`
- Phone field: line 259-270
- Consent checkboxes: **lines 353-385** — above Submit (line 389)
- Distance from phone field: separated by category, location, subject, description (adequate separation)
- Pre-checked: no (`:46-47` initializes to `false`)
- Business name in copy: ✅

### RSVP form — `src/components/events/rsvp-form.jsx`
- Phone field: line 180-198
- Consent checkboxes: **lines 207-239** — above Submit (line 242)
- Distance from phone field: the checkboxes follow the phone field directly, with only the "Enter a phone number above to opt in" helper text in between. **This is the closest phone→consent adjacency on the site.**
- Pre-checked: no (`:15-16` initializes to `false`)
- Business name in copy: ✅

**Verdict for §9 (Consent Checkboxes at Bottom of Form):** all four forms place the checkboxes at the bottom above the submit button. The SOP's secondary note "not next to phone field" is comfortably met on Contact, Volunteer, and Ask Jenny. On the RSVP form the adjacency is closer because the form is compact — still above Submit and not inline with the phone input, so it passes the primary rule, but is the most reviewer-scrutinizable placement on the site.

### Item #11 deep-dive — conditional-required checkboxes

The SOP (Step 6, bullet 3): "Both checkboxes must be OPTIONAL (not pre-checked)."

The implementation (uniform across all 4 forms):
- Initial state: `smsConsent: false, promoConsent: false` → **not pre-checked ✅**
- While phone field is empty: `disabled={!hasPhone}` → user cannot tick them, helper text reads *"Enter a phone number above to opt in to SMS messages"*
- Once phone is entered: `required={hasPhone}` → native HTML `required` attribute engages, browser blocks submit until both are ticked

**Analysis.** There are two ways to read "optional":
- **Strict reading** (what TCR reviewers scanning HTML source see): once a phone is entered, the input has `required` set. That looks non-optional.
- **Intent reading:** the user can always skip consent by leaving the phone field blank (or clearing it — the `useEffect` at `:28-32` clears consent flags when the phone is emptied). So consent IS optional with respect to filling out the form; it's only required in the branch where the user has chosen to share a phone number, which is itself optional.

This pattern is defensible and arguably **more protective** than the SOP requires (we never collect a phone-plus-no-consent row), but TCR reviewers do not always look past the `required` attribute. Two options:

**Option A (keep as-is):** defend the pattern during registration review if challenged. The helper text and the `useEffect` reset make the behavior user-friendly and TCPA-strong.

**Option B (match SOP letter exactly):** drop `required={hasPhone}`. Checkboxes become purely optional; users can submit with a phone but no consent. Server-side, phone is still collected but `smsConsent`/`promoConsent` are "No", so no SMS will be sent. This matches the literal SOP wording.

I recommend discussing with client before registration submission. Either is defensible; Option B removes any reviewer ambiguity.

---

## 3. Additional findings (not part of the 19-item checklist)

These are outside the A2P SOP scope but surfaced during audit:

### 3.1 Broken social link in footer — X (Twitter)
`src/components/layout/site-footer.jsx:70` — the X icon's `href` is `"#"` (placeholder). TCR reviewers may not flag this (it's not on the A2P checklist), but it's a visible dead link on every page. Resolve by obtaining Jenny's X handle and updating the href, or by removing the icon until her X account is live.

### 3.2 Non-VoIP phone number — verify
The SOP (Step 5 and registration readiness reference) strongly recommends a non-VoIP number matching the A2P registration. The site lists `(971) 365-5668`. **Verify with client** that this is a non-VoIP line associated with the campaign and that the same number will be used in the A2P 10DLC registration payload.

### 3.3 TOS "program name" is implicit, not explicit
SOP Step 2, required TOS element #1: *"Program name and description of the types of messages users can expect upon opting in."*

The TOS Section 6 does not call out a named "SMS program" (e.g., "Jenny Kamprath Campaign SMS"). It does describe what messages opt-in users will receive (Section 6 "Types of Messages"). This satisfies the spirit of the requirement but not the letter. A one-line program name ("Our SMS program is the **Jenny Kamprath for County Chair** campaign messaging program.") would remove any ambiguity. Optional.

---

## 4. TOS required-elements audit (SOP Step 2)

| # | Required TOS Element | Status | Location |
|---|---|---|---|
| 1 | Program name and message-types description | ✅ (implicit) | Section 1 (`:48-71`) describes message types; Section 6 "Types of Messages" (`:154-162`). See §3.3 above. |
| 2 | STOP keyword opt-out instructions | ✅ | Section 6 "Opt-Out Instructions" (`:180-185`) |
| 3 | HELP keyword instructions | ✅ | Section 6 "Help Instructions" (`:187-195`) |
| 4 | Carrier liability disclaimer | ✅ | Section 6 "Carrier Liability" (`:213-218`) |
| 5 | Data rates and frequency | ✅ | Section 6 "Message Frequency" (`:164-170`) + "Fees" (`:172-177`) |
| 6 | Privacy policy link | ✅ | Section 7 (`:230-239`) — `<Link href="/privacy-policy">` |

---

## 5. Privacy Policy required-elements audit (SOP Step 3)

| Required Element | Status | Location |
|---|---|---|
| Full legal business name (not just URL) | ✅ | "Friends of Jenny Kamprath" — intro, Section 4, Section 12 |
| Dedicated SMS/Text Messaging section | ✅ | Section 4 (`:203-279`) |
| — What phone numbers are collected for | ✅ | "What We Collect" subsection (`:214-222`) |
| — How they are used for SMS messaging | ✅ | "How Your Phone Number Is Used" (`:224-232`) |
| — What types of messages will be sent | ✅ | Same subsection as above — campaign updates, event reminders, volunteer coordination, fundraising |
| — How long phone number and consent data is retained | ✅ | "Data Retention" (`:243-251`) |
| — How users can request data deletion | ✅ | "Data Deletion" (`:253-266`) — 10-business-day SLA stated |
| Explicit "We will not share or sell..." statement | ✅ | Appears twice: Section 1.1 "Text Messaging Opt-In Data" (`:88-93`) and Section 4 "No Third-Party Sharing" (`:234-241`, **bolded**) |
| Contact information for privacy-related inquiries | ✅ | Section 12 (`:430-452`) — address, email, phone |
| Clear opt-out instructions (Reply STOP) | ✅ | Section 4 "Opt-Out" (`:268-278`) |

---

## 6. CRM A2P registration readiness (SOP page 7)

Data the site surfaces (auto-collectable from source):

| Registration Field | Value / Source |
|---|---|
| Legal business name | **Friends of Jenny Kamprath** |
| Business address | PO Box 122, Beaverton, OR 97075 |
| Live website URL | https://jennykamprath.com (verify final canonical domain with client) |
| Opt-in form URLs | `/contact`, `/volunteer`, `/ask-jenny`, `/events/[id]` (RSVP embedded on event detail pages) |
| Privacy Policy URL | `/privacy-policy/` |
| Terms of Service URL | `/terms-of-service/` |
| Business phone on website | (971) 365-5668 |
| Business email on website | jenny@jennykamprath.com |

**Client must supply for registration:**
- Business EIN (from CP 575 / IRS letter)
- Authorized representative name + personal (non-VoIP) cell
- 2–3 sample text messages (see §7 templates below)
- Opt-in description narrative

---

## 7. Sample text message templates (customized for this client)

Based on SOP page 7. Every message includes business name + STOP opt-out.

**Sample 1 — Event Reminder (informational):**
> "Hi {First Name}, this is Friends of Jenny Kamprath. Reminder: [event name] on [date] at [location]. Reply STOP to opt out."

**Sample 2 — Volunteer / Campaign Update (informational):**
> "{First Name}, thanks for joining the Friends of Jenny Kamprath team! [update details]. Reply STOP to opt out."

**Sample 3 — Promotional / Donation (promotional):**
> "{First Name}, Friends of Jenny Kamprath needs your support. [CTA details — donation drive, fundraising push]. Reply STOP to opt out."

---

## 8. Action items before submitting A2P 10DLC registration

In priority order:

1. **Decide on item #11 (conditional-required checkboxes).** Keep as-is and be prepared to defend during review, OR drop `required={hasPhone}` across the 4 forms for a clean literal pass.
2. **Fix the footer X link** (`site-footer.jsx:70`) — get Jenny's X handle, update `href`, or remove the icon.
3. **Confirm phone number is non-VoIP** and matches what will be on the A2P registration.
4. **Gather client documents:** CP 575 (EIN), authorized-rep personal cell, sample messages approved.
5. **Optional polish:** add explicit SMS program name to TOS Section 6 opening line (§3.3 above).
6. **Pre-submission smoke test:**
   - Deploy latest to production domain
   - Load every public page; confirm footer shows both legal links + contact info
   - Click `/privacy-policy` and `/terms-of-service` links from the footer — verify no 404
   - Open one phone-collecting form, type a test number, confirm both checkboxes activate and show the required styling
   - Submit a test entry end-to-end on at least one form (contact is lowest-friction)

---

## Legal disclaimer

This audit reflects source-level inspection of this repository at audit-time HEAD. Operation 1776 does not provide legal advice and does not draft Privacy Policy or Terms of Service language. The policy language presently on the site should be reviewed by the client's qualified legal counsel before A2P registration. Carrier and TCR standards evolve; re-verify current requirements immediately before registration submission.

— *End of report* —
