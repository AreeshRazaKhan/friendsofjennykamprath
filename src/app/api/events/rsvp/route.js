const WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/HK7KWJYbw33yisOBMGEO/webhook-trigger/b8b53720-18c4-4cde-9db9-c549de6264ee'

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      firstName, lastName, email, phone,
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
      phone: phone?.trim() || '',
      eventName: eventName || '',
      eventDate: eventDate || '',
      eventTime: eventTime || '',
      eventCategory: eventCategory || '',
      source: 'src_event',
      submitted_at: new Date().toISOString(),
    }

    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      console.error('[RSVP API] GHL webhook failed:', res.status)
      return Response.json({ error: 'Webhook delivery failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[RSVP API]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
