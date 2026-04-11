const WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/HK7KWJYbw33yisOBMGEO/webhook-trigger/cf2eced9-14ad-4109-ba4f-fd244858af10'

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
      phone: phone?.trim() || '',
      message: message.trim(),
      sms_updates: smsConsent ? 'Yes' : 'No',
      sms_promo: promoConsent ? 'Yes' : 'No',
      source: 'src_contact',
      submitted_at: new Date().toISOString(),
    }

    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      console.error('[Contact API] GHL webhook failed:', res.status)
      return Response.json({ error: 'Webhook delivery failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[Contact API]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
