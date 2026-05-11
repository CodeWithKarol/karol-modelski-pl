export async function POST(request: Request) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return new Response(JSON.stringify({ error: "Webhook URL not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await request.json();
    
    // 1. Honeypot check
    if (body.b_name_42) {
      // Silently ignore bot submissions
      return new Response(JSON.stringify({ success: true, bot: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 2. Simple email domain validation (optional but effective)
    const email = body.email || "";
    const spamDomains = ["mailinator.com", "guerrillamail.com", "temp-mail.org"];
    if (spamDomains.some(domain => email.endsWith(domain))) {
      return new Response(JSON.stringify({ error: "Ten adres e-mail jest niedozwolony" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    
    // Use environment variable for the webhook URL
    const targetWebhook = process.env.CONTACT_WEBHOOK_URL;
    
    if (!targetWebhook) {
      throw new Error("CONTACT_WEBHOOK_URL is not defined");
    }
    
    const response = await fetch(targetWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone || "Nie podano",
        challenge: body.challenge,
        timestamp: new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' }),
        source_url: request.url
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with status: ${response.status}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
