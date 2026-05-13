import { NextRequest, NextResponse } from "next/server"
import * as z from "zod"

const schema = z.object({
  name: z.string().min(2),
  contact: z.string().min(3),
  message: z.string().min(10),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL
    if (!webhookUrl) {
      console.error("[contact form] CONTACT_WEBHOOK_URL is not set")
      return NextResponse.json(
        { success: false, error: "Błąd konfiguracji serwera." },
        { status: 500 }
      )
    }

    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        contact: data.contact,
        message: data.message,
        timestamp: new Date().toISOString(),
        source: "karol-modelski.pl/kontakt",
      }),
    })

    if (!webhookRes.ok) {
      console.error("[contact form] webhook responded with", webhookRes.status)
      return NextResponse.json(
        { success: false, error: "Błąd serwera. Spróbuj ponownie." },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Nieprawidłowe dane formularza." },
        { status: 400 }
      )
    }
    console.error("[contact form error]", error)
    return NextResponse.json(
      { success: false, error: "Błąd serwera. Spróbuj ponownie." },
      { status: 500 }
    )
  }
}
