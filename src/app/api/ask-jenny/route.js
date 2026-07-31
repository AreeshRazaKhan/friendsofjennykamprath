import { isPhoneEntryValid, normalizePhoneForSubmit } from '@/lib/phone'

const WEBHOOK_URLS = [
  'https://services.leadconnectorhq.com/hooks/qGdzrYgvraCHvfner4DJ/webhook-trigger/758eee73-7348-4a77-a756-0382ca6fec13',
  'https://services.leadconnectorhq.com/hooks/qGdzrYgvraCHvfner4DJ/webhook-trigger/00054882-78dd-48b5-83c6-25d88c0be34c',
]

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      name, email, phone, category, location, subject, description,
      smsConsent, promoConsent,
    } = body

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !description?.trim()) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!isPhoneEntryValid(phone)) {
      return Response.json(
        { error: 'Please enter a complete 10-digit phone number, or leave the field blank.' },
        { status: 400 }
      )
    }

    const nameParts = name.trim().split(' ')
    const firstName = nameParts[0]
    const lastName = nameParts.slice(1).join(' ') || ''

    const payload = {
      type: 'Issue_Report',
      firstName,
      lastName,
      email: email.trim(),
      phone: normalizePhoneForSubmit(phone),
      issue_category: category || '',
      issue_location: location?.trim() || '',
      issue_subject: subject.trim(),
      issue_description: description.trim(),
      issue_image: '',
      sms_updates: smsConsent ? 'Yes' : 'No',
      sms_promo: promoConsent ? 'Yes' : 'No',
      source: 'src_issue',
      submitted_at: new Date().toISOString(),
    }

    const results = await Promise.all(
      WEBHOOK_URLS.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch((err) => {
          console.error('[Ask Jenny API] webhook error:', err)
          return { ok: false }
        })
      )
    )

    if (!results.some((r) => r.ok)) {
      console.error('[Ask Jenny API] All GHL webhooks failed')
      return Response.json({ error: 'Webhook delivery failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[Ask Jenny API]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
