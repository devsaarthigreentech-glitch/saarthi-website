// src/components/Contact/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Example: send form payload to your API route (create /api/contact to receive it)
      // For now we'll simulate a delay and succeed
      await new Promise((res) => setTimeout(res, 700));

      // If you integrate an API, replace above with a fetch:
      // const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, message }) })
      // if (!res.ok) throw new Error('Network error')

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          className="w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand,#33A04A)]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          className="w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand,#33A04A)]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
          className="w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand,#33A04A)]"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 text-black font-semibold disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "success" && <p className="text-sm text-green-600">Thanks! We’ll get back to you shortly.</p>}
        {status === "error" && <p className="text-sm text-red-600">Something went wrong — please try again later.</p>}
      </div>
    </form>
  );
}
