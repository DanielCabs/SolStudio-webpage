import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, telefono, como_conocio, servicio, disponibilidad, consulta } = body

    if (!nombre || !telefono || !consulta) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 })
    }

    const sheetEndpoint = process.env.GOOGLE_SHEET_ENDPOINT
    const makeWebhook = process.env.MAKE_WEBHOOK_URL

    // Mandar a Google Sheets y Make en paralelo
    await Promise.all([
      fetch(sheetEndpoint!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, telefono, como_conocio, servicio, disponibilidad, consulta }),
      }),
      fetch(makeWebhook!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, telefono, como_conocio, servicio, disponibilidad, consulta }),
      }),
    ])

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}