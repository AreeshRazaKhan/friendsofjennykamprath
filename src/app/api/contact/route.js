import { normalizePhoneForSubmit } from '@/lib/phone'

const WEBHOOK_URLS = [
  'https://services.leadconnectorhq.com/hooks/qGdzrYgvraCHvfner4DJ/webhook-trigger/X6yJU8L3iXBWeYnYs4Tu',
  'https://services.leadconnectorhq.com/hooks/qGdzrYgvraCHvfner4DJ/webhook-trigger/00054882-78dd-48b5-83c6-25d88c0be34c',
]

export async function POST(request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, message, smsConsent, promoConsent } = body

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = {
      type: 'Contact_Form',
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: normalizePhoneForSubmit(phone),
      message: message.trim(),
      sms_updates: smsConsent ? 'Yes' : 'No',
      sms_promo: promoConsent ? 'Yes' : 'No',
      source: 'src_contact',
      submitted_at: new Date().toISOString(),
    }

    const results = await Promise.all(
      WEBHOOK_URLS.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch((err) => {
          console.error('[Contact API] webhook error:', err)
          return { ok: false }
        })
      )
    )

    if (!results.some((r) => r.ok)) {
      console.error('[Contact API] All GHL webhooks failed')
      return Response.json({ error: 'Webhook delivery failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[Contact API]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
