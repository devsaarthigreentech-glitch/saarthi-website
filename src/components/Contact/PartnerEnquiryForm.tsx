// src/components/Contact/PartnerEnquiryForm.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { HONEYPOT_FIELD, type PartnerType } from "@/lib/spamFilter";

const PARTNER_TYPE_OPTIONS: { value: PartnerType; label: string }[] = [
  { value: "distributor", label: "Distributor" },
  { value: "dealer", label: "Dealer" },
  { value: "referral", label: "Referral partner" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "'Sora', sans-serif",
  fontSize: 14,
  padding: "0.65rem 0.85rem",
  border: "0.5px solid var(--color-border-secondary, #d1d5db)",
  borderRadius: 8,
  background: "var(--color-background-primary, #ffffff)",
  color: "var(--color-text-primary, #111827)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 500,
  marginBottom: 6,
  color: "var(--color-text-primary, #111827)",
};

/** Partner enquiry form. Posts to the same /api/contact route as the contact form, with a partner type. */
export default function PartnerEnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [partnerType, setPartnerType] = useState<PartnerType | "">("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "sending" | "success" | "error">(null);
  // Spam checks: a hidden field only bots fill in, and the time since the form rendered
  const [honeypot, setHoneypot] = useState("");
  const renderedAt = useRef(0);

  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          partnerType,
          [HONEYPOT_FIELD]: honeypot,
          elapsedMs: Date.now() - renderedAt.current,
        }),
      });

      if (!res.ok) throw new Error("Network error");

      setStatus("success");
      setName("");
      setEmail("");
      setPartnerType("");
      setMessage("");
      renderedAt.current = Date.now();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot: hidden from people and screen readers, bots fill it in */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Website
          <input type="text" name={HONEYPOT_FIELD} value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="form-grid-partner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
        <div>
          <label htmlFor="partner-name" style={labelStyle}>Name *</label>
          <input id="partner-name" className="partner-input" style={inputStyle} type="text" required minLength={2} maxLength={100} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="partner-email" style={labelStyle}>Email *</label>
          <input id="partner-email" className="partner-input" style={inputStyle} type="email" required maxLength={254} autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="partner-type" style={labelStyle}>Partner type *</label>
        <select id="partner-type" className="partner-input" style={inputStyle} required value={partnerType} onChange={(e) => setPartnerType(e.target.value as PartnerType | "")}>
          <option value="" disabled>Select a partner type</option>
          {PARTNER_TYPE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "1.25rem" }}>
        <label htmlFor="partner-message" style={labelStyle}>Message *</label>
        <textarea id="partner-message" className="partner-input" style={{ ...inputStyle, resize: "vertical" }} rows={5} required minLength={2} maxLength={5000} placeholder="Tell us about your company, your market and the applications you work with." value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>

      <div className="submit-row-partner" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button
          type="submit"
          disabled={status === "sending"}
          className="submit-btn-partner"
          style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 500, padding: "0.7rem 1.5rem", border: "none", borderRadius: 8, background: "#1D9E75", color: "#ffffff", cursor: "pointer", opacity: status === "sending" ? 0.6 : 1 }}
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <span role="status" style={{ fontSize: 13 }}>
          {status === "success" && <span style={{ color: "#0F6E56" }}>Thank you. We will get back to you shortly.</span>}
          {status === "error" && <span style={{ color: "#b91c1c" }}>Something went wrong — please try again later.</span>}
        </span>
      </div>
    </form>
  );
}
