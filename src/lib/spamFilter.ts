// src/lib/spamFilter.ts
// Zero-cost spam checks for the contact form. Nothing here asks a real user to
// do anything: the honeypot is invisible, the timer runs in the background and
// the content checks only look at what was typed.

export const HONEYPOT_FIELD = "website";
export const MIN_FILL_MS = 3000;

const LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  message: { min: 2, max: 5000 },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type ContactInput = {
  name: string;
  email: string;
  message: string;
};

type ValidationResult =
  | { data: ContactInput }
  | { error: string };

// Basic shape, length and format checks. Failures here get a 400 so a real
// user with a typo sees an error.
export function validateContact(body: any): ValidationResult {
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) return { error: "Missing required fields" };
  if (name.length < LIMITS.name.min || name.length > LIMITS.name.max) return { error: "Invalid name" };
  if (email.length > LIMITS.email.max || !EMAIL_RE.test(email)) return { error: "Invalid email" };
  if (message.length < LIMITS.message.min || message.length > LIMITS.message.max) return { error: "Invalid message" };

  return { data: { name, email, message } };
}

// Counts lowercase->uppercase switches inside a word, e.g. "zaVXklwUJXuzxSofn" has 3.
// Real camel-case words ("McDonald", "GreenTech") have one or two.
function lowerToUpperSwitches(word: string): number {
  let n = 0;
  for (let i = 1; i < word.length; i++) {
    const prev = word[i - 1];
    const cur = word[i];
    if (prev >= "a" && prev <= "z" && cur >= "A" && cur <= "Z") n++;
  }
  return n;
}

function vowelRatio(letters: string): number {
  const vowels = letters.match(/[aeiouy]/gi)?.length ?? 0;
  return vowels / letters.length;
}

// True for random strings such as "nDajDqEQLbZRutaNSUz".
export function looksLikeGibberish(text: string): boolean {
  const value = text.trim();

  // Any long letters-only word with random case changes.
  const words = value.split(/\s+/);
  if (words.some((w) => /^[A-Za-z]{12,}$/.test(w) && lowerToUpperSwitches(w) >= 3)) return true;

  // The whole field is a single long letters-only token.
  if (/^[A-Za-z]{10,}$/.test(value)) {
    if (lowerToUpperSwitches(value) >= 3) return true;
    if (vowelRatio(value) < 0.2) return true;
  }

  // Keyboard mash across a longer field, e.g. "sdfgh jkllkj qwrtp".
  const letters = value.replace(/[^A-Za-z]/g, "");
  if (letters.length >= 20 && vowelRatio(letters) < 0.15) return true;

  return false;
}

// Gmail ignores dots, so bots spray addresses like "t.up.elu.ca172@gmail.com".
function isHeavilyDottedGmail(email: string): boolean {
  const [local, domain] = email.toLowerCase().split("@");
  if (domain !== "gmail.com" && domain !== "googlemail.com") return false;
  return (local.match(/\./g)?.length ?? 0) >= 3;
}

// Returns a reason when the submission should be silently dropped, otherwise null.
export function spamReason(body: any, data: ContactInput): string | null {
  const honeypot = body?.[HONEYPOT_FIELD];
  if (typeof honeypot === "string" ? honeypot.trim() !== "" : honeypot != null) return "honeypot";

  const elapsed = Number(body?.elapsedMs);
  if (!Number.isFinite(elapsed)) return "no-timer";
  if (elapsed < MIN_FILL_MS) return "too-fast";

  if (looksLikeGibberish(data.name)) return "gibberish-name";
  if (looksLikeGibberish(data.message)) return "gibberish-message";

  // A dotted Gmail alias on its own is not enough; combined with a one-word
  // message it almost always is.
  if (isHeavilyDottedGmail(data.email) && !/\s/.test(data.message)) return "dotted-gmail";

  return null;
}

// Per-IP rate limit kept in memory. On serverless hosting each instance keeps
// its own counts, so this is best-effort, but it costs nothing and stops a
// single bot hammering one warm instance.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export function isRateLimited(ip: string, now = Date.now()): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Keep the map from growing without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > MAX_PER_WINDOW;
}

export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return headers.get("x-real-ip") ?? "unknown";
}
