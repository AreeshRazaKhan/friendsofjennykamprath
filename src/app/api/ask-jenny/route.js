const WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/qGdzrYgvraCHvfner4DJ/webhook-trigger/758eee73-7348-4a77-a756-0382ca6fec13'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, category, location, subject, description } = body

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !description?.trim()) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const nameParts = name.trim().split(' ')
    const firstName = nameParts[0]
    const lastName = nameParts.slice(1).join(' ') || ''

    const payload = {
      type: 'Issue_Report',
      firstName,
      lastName,
      email: email.trim(),
      issue_category: category || '',
      issue_location: location?.trim() || '',
      issue_subject: subject.trim(),
      issue_description: description.trim(),
      issue_image: '',
      source: 'src_issue',
      submitted_at: new Date().toISOString(),
    }

    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      console.error('[Ask Jenny API] GHL webhook failed:', res.status)
      return Response.json({ error: 'Webhook delivery failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[Ask Jenny API]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
