import { normalizePhoneForSubmit } from '@/lib/phone'

const WEBHOOK_URLS = [
  'https://services.leadconnectorhq.com/hooks/qGdzrYgvraCHvfner4DJ/webhook-trigger/03HZBc737EbFBbpja2g9',
  'https://services.leadconnectorhq.com/hooks/BlWviZhz7Vyrg1cbGSYr/webhook-trigger/c3eaa710-9d7c-4a9c-8b4f-838d105bd1ca',
]

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      firstName, lastName, email, phone,
      sms_updates, sms_promo,
      eventName, eventDate, eventTime, eventCategory,
    } = body

    if (!firstName?.trim() || !email?.trim()) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = {
      type: 'Event_RSVP',
      firstName: firstName.trim(),
      lastName: lastName?.trim() || '',
      email: email.trim(),
      phone: normalizePhoneForSubmit(phone),
      sms_updates: sms_updates === 'Yes' ? 'Yes' : 'No',
      sms_promo: sms_promo === 'Yes' ? 'Yes' : 'No',
      eventName: eventName || '',
      eventDate: eventDate || '',
      eventTime: eventTime || '',
      eventCategory: eventCategory || '',
      source: 'src_event',
      submitted_at: new Date().toISOString(),
    }

    const results = await Promise.all(
      WEBHOOK_URLS.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch((err) => {
          console.error('[RSVP API] webhook error:', err)
          return { ok: false }
        })
      )
    )

    if (!results.some((r) => r.ok)) {
      console.error('[RSVP API] All GHL webhooks failed')
      return Response.json({ error: 'Webhook delivery failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[RSVP API]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
