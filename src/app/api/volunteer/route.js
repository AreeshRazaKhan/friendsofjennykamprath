import { normalizePhoneForSubmit } from '@/lib/phone'

const WEBHOOK_URLS = [
  'https://services.leadconnectorhq.com/hooks/qGdzrYgvraCHvfner4DJ/webhook-trigger/ZaWVyWTAP1IrkoHxnHme',
  'https://services.leadconnectorhq.com/hooks/qGdzrYgvraCHvfner4DJ/webhook-trigger/AMelyMyID9BrBSQ9C4oE',
  'https://services.leadconnectorhq.com/hooks/qGdzrYgvraCHvfner4DJ/webhook-trigger/AqdXiIYm0cXFNQToBEec',
  'https://services.leadconnectorhq.com/hooks/qGdzrYgvraCHvfner4DJ/webhook-trigger/00054882-78dd-48b5-83c6-25d88c0be34c',
]

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      firstName, lastName, email, phone, zipCode, county, region,
      registered, experience, helpOptions, availability, issues,
      anythingElse, smsConsent, promoConsent,
    } = body

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim()) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = {
      type: 'Volunteer_Form',
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: normalizePhoneForSubmit(phone),
      zipCode: zipCode?.trim() || '',
      county: county || '',
      region: region || '',
      registeredVoter: registered || '',
      campaignExperience: experience || '',
      helpOptions: Array.isArray(helpOptions) ? helpOptions.join(', ') : '',
      availability: availability || '',
      issues: issues?.trim() || '',
      anythingElse: anythingElse?.trim() || '',
      sms_updates: smsConsent ? 'Yes' : 'No',
      sms_promo: promoConsent ? 'Yes' : 'No',
      source: 'src_volunteer',
      submitted_at: new Date().toISOString(),
    }

    const results = await Promise.all(
      WEBHOOK_URLS.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      )
    )

    const anySuccess = results.some((r) => r.ok)

    if (!anySuccess) {
      console.error('[Volunteer API] All GHL webhooks failed')
      return Response.json({ error: 'Webhook delivery failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[Volunteer API]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
