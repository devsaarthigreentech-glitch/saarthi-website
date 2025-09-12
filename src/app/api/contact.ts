// src/app/api/contact/route.ts  (App Router)
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body ?? {};

    // Basic validation
    if (!name || !email || !message) {
      console.warn("Missing fields in request body:", body);
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Build payload forwarded to n8n
    const payload = {
      name,
      email,
      message,
      source: "website-contact",
      timestamp: new Date().toISOString(),
    };

    // DEBUG: print env var (so you can confirm it's loaded)
    console.log("N8N_WEBHOOK env:", process.env.N8N_WEBHOOK);

    const n8nWebhook = process.env.N8N_WEBHOOK;
    if (!n8nWebhook) {
      console.error("N8N_WEBHOOK is not configured");
      return NextResponse.json({ error: "Server misconfiguration: N8N_WEBHOOK missing" }, { status: 500 });
    }

    // Forward to n8n webhook and capture response text for debugging
    const resp = await fetch(n8nWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();
    console.log("n8n response status:", resp.status);
    console.log("n8n response body:", text);

    if (!resp.ok) {
      return NextResponse.json({ error: "n8n webhook returned error", status: resp.status, body: text }, { status: 502 });
    }

    // success — return n8n response text so you can inspect it in browser
    return NextResponse.json({ ok: true, n8nStatus: resp.status, n8nBody: text });
  } catch (err: any) {
    console.error("Contact route error:", err && err.stack ? err.stack : err);
    return NextResponse.json({ error: "Internal error", details: String(err) }, { status: 500 });
  }
}
