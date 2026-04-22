import { NextResponse } from 'next/server'

import { fetchGHLEndorsements } from '@/lib/ghl'

export const revalidate = 60

export const GET = async () => {
  try {
    const endorsements = await fetchGHLEndorsements()
    return NextResponse.json({ endorsements, total: endorsements.length })
  } catch (error) {
    console.error('[Endorsements API]:', error)
    return NextResponse.json({ endorsements: [], total: 0 }, { status: 500 })
  }
}
