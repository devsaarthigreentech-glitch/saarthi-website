// src/app/api/contact/route.ts  (App Router)
import { NextRequest, NextResponse } from "next/server";
import { clientIp, isRateLimited, spamReason, validateContact } from "@/lib/spamFilter";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Length and format validation
    const valid = validateContact(body);
    if ("error" in valid) {
      return NextResponse.json({ error: valid.error }, { status: 400 });
    }
    const { name, email, message } = valid.data;

    // Spam filtering: dropped submissions get the same response as real ones
    // so bots can't tell they were caught.
    const ip = clientIp(req.headers);
    const reason = ip !== "unknown" && isRateLimited(ip) ? "rate-limit" : spamReason(body, valid.data);
    if (reason) {
      console.warn(`Contact form submission dropped (${reason}) from ${ip}`);
      return NextResponse.json({ ok: true });
    }

    // Build payload forwarded to n8n
    const payload = {
      name,
      email,
      message,
      source: "website-contact",
      timestamp: new Date().toISOString(),
    };

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

    // Same body as a dropped submission (see above)
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Contact route error:", err && err.stack ? err.stack : err);
    return NextResponse.json({ error: "Internal error", details: String(err) }, { status: 500 });
  }
}
