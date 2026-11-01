"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Award,
  ShieldCheck,
  Wrench,
  Users,
  Building2,
} from "lucide-react";

// The course and exam run as a separate app (sgt-certification). Set
// NEXT_PUBLIC_ACADEMY_URL to its address once it is deployed.
const ACADEMY_URL = (
  process.env.NEXT_PUBLIC_ACADEMY_URL || "https://academy.sgthydroedge.com"
).replace(/\/$/, "");
const LEARN_URL = `${ACADEMY_URL}/learn`;
const EXAM_URL = `${ACADEMY_URL}/`;
// The academy is live. Set NEXT_PUBLIC_ACADEMY_LIVE=false and rebuild to show
// its links as "Coming soon" again (e.g. during maintenance).
const ACADEMY_LIVE = process.env.NEXT_PUBLIC_ACADEMY_LIVE !== "false";

function Soon({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <span
      aria-disabled="true"
      className={`inline-flex cursor-not-allowed items-center gap-2 rounded-md px-6 py-3 font-semibold ${
        dark ? "bg-white/15 text-white/70" : "bg-slate-200 text-slate-500"
      }`}
    >
      {label}
      <span
        className={`rounded px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${
          dark ? "bg-[#FFD700] text-[#1a1f1c]" : "bg-[#FFD700]/70 text-[#1a1f1c]"
        }`}
      >
        Coming soon
      </span>
    </span>
  );
}

const steps = [
  {
    icon: BookOpen,
    title: "Learn",
    text: "Register and work through eight paced modules. Each one unlocks after you have read the lesson and passed its knowledge check.",
  },
  {
    icon: ClipboardCheck,
    title: "Assess",
    text: "Sit a 70-minute online exam: 56 questions across seven sections, drawn fresh for every candidate.",
  },
  {
    icon: Award,
    title: "Certify",
    text: "Score 70% overall and at least 50% in every section to earn a PDF certificate with your grade and section results.",
  },
  {
    icon: ShieldCheck,
    title: "Verify",
    text: "Anyone can confirm a certificate is genuine by scanning its QR code or entering the ID on this page.",
  },
];

const modules = [
  "System fundamentals and safety",
  "Commissioning and configuration",
  "Inputs and sensing",
  "Control and temperature",
  "Engine, vehicle data and fuel",
  "Connectivity, backup battery and fault finding",
  "GreenVision and the NanoApp",
];

const facts = [
  { label: "Exam", value: "70 min · 56 questions" },
  { label: "Pass", value: "70% overall, 50% per section" },
  { label: "Retake", value: "After 24 hours" },
];

const grades = [
  { name: "Proficient", min: 70 },
  { name: "Advanced", min: 80 },
  { name: "Expert", min: 90 },
  { name: "Master", min: 96 },
];

const audience = [
  {
    icon: Wrench,
    title: "Field technicians",
    text: "Install, commission and service NanoV3 units on vehicles, DG sets and marine assets.",
  },
  {
    icon: Building2,
    title: "Dealers & partners",
    text: "Show customers your team is trained and certified on SGT systems.",
  },
  {
    icon: Users,
    title: "Fleet engineers",
    text: "Understand what the unit reports, what it controls, and how to diagnose it on site.",
  },
];

export default function Certification() {
  const router = useRouter();
  const [certId, setCertId] = useState("");

  const onVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const id = certId.trim().toUpperCase();
    if (id) router.push(`/certification/verify/${encodeURIComponent(id)}`);
  };

  return (
    <main className="bg-[#F8FAF9] text-slate-900">
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1B6B3D] pt-36 pb-20 text-white lg:pt-44">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FFD700]/10" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFD700]">
              SGT Academy · Professional Certification Programme
            </p>
            <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-5xl">
              Training & Certification
            </h1>
            <p className="mb-8 max-w-xl text-lg text-white/85">
              Learn to install, commission and troubleshoot SGT systems from the
              same manual our engineers use, then prove it with a verifiable
              certificate.
            </p>
            <div className="flex flex-wrap gap-3">
              {ACADEMY_LIVE ? (
                <a
                  href={LEARN_URL}
                  className="inline-flex items-center gap-2 rounded-md bg-[#FFD700] px-6 py-3 font-semibold text-[#1a1f1c] transition hover:bg-[#ffe34d]"
                >
                  Start training <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <Soon label="Start training" dark />
              )}
              <a
                href="#verify"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Verify a certificate
              </a>
            </div>
          </div>

          {/* Certificate preview */}
          <div className="mx-auto w-full max-w-lg rotate-1 rounded-lg border-[6px] border-[#2f6b1f] bg-white p-6 text-center text-slate-800 shadow-2xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Certificate of Professional Certification
            </p>
            <p className="mt-3 text-xs italic text-slate-500">This is to certify that</p>
            <p className="mt-1 border-b border-[#2f6b1f] pb-1 text-2xl font-bold">
              Your Name
            </p>
            <p className="mt-3 text-xs text-slate-500">is recognised as</p>
            <p className="mt-1 text-lg font-bold text-[#2f6b1f]">
              SGT Certified Professional – Nano System
            </p>
            <div className="mt-5 flex items-center justify-between gap-4 text-left">
              <div className="flex-1 space-y-1.5">
                {[60, 72, 80, 90].map((w, i) => (
                  <div key={i} className="h-1.5 rounded bg-slate-200">
                    <div className="h-1.5 rounded bg-[#2c4a85]" style={{ width: `${w}%` }} />
                  </div>
                ))}
                <p className="pt-1 text-[10px] uppercase tracking-wide text-slate-400">
                  Performance by section
                </p>
              </div>
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full bg-[#2c4a85] text-white">
                <span className="text-[8px] uppercase">Grade</span>
                <span className="text-[10px] font-bold">✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-3 text-3xl font-bold">How it works</h2>
        <p className="mb-10 max-w-2xl text-slate-600">
          Four steps from first page to a certificate anyone can check.
        </p>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-[#d8e4dc] bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e8f5ee] text-[#1B6B3D]">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-slate-400">0{i + 1}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Programme ──────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#33A04A]">
              Programme
            </p>
            <h2 className="mb-4 text-3xl font-bold">
              SGT Certified Professional – Nano System
            </h2>
            <p className="mb-6 text-slate-600">
              For engineers who install, commission, service and support the
              NanoV3 / GreenDrive Smart Control Module. Based on the NanoV3 Field
              Manual, issue 2.0, firmware 3.0.1.
            </p>
            <dl className="mb-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {facts.map((f) => (
                <div key={f.label} className="border-l-2 border-[#33A04A] pl-3">
                  <dt className="text-xs uppercase tracking-wide text-slate-500">{f.label}</dt>
                  <dd className="text-sm font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3">
              {ACADEMY_LIVE ? (
                <>
                  <a
                    href={LEARN_URL}
                    className="inline-flex items-center gap-2 rounded-md bg-[#1B6B3D] px-6 py-3 font-semibold text-white transition hover:bg-[#155730]"
                  >
                    Start the course <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={EXAM_URL}
                    className="inline-flex items-center gap-2 rounded-md border border-[#1B6B3D] px-6 py-3 font-semibold text-[#1B6B3D] transition hover:bg-[#e8f5ee]"
                  >
                    Take the exam
                  </a>
                </>
              ) : (
                <>
                  <Soon label="Start the course" />
                  <Soon label="Take the exam" />
                </>
              )}
            </div>
          </div>
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
              What the exam covers
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {modules.map((m, i) => (
                <li
                  key={m}
                  className="flex items-center gap-3 rounded-lg border border-[#d8e4dc] bg-[#F8FAF9] px-4 py-3"
                >
                  <span className="font-mono text-xs font-semibold text-[#1B6B3D]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium">{m}</span>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Grades
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {grades.map((g) => (
                <div key={g.name} className="rounded-lg border border-[#d8e4dc] px-4 py-3 text-center">
                  <p className="font-semibold">{g.name}</p>
                  <p className="text-xs text-slate-500">{g.min}%+</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who it's for ───────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold">Who it’s for</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {audience.map((a) => (
            <div key={a.title} className="rounded-xl border border-[#d8e4dc] bg-white p-6">
              <a.icon className="mb-4 h-6 w-6 text-[#1B6B3D]" />
              <h3 className="mb-2 text-lg font-semibold">{a.title}</h3>
              <p className="text-sm text-slate-600">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Verify ─────────────────────────────────────── */}
      <section id="verify" className="scroll-mt-28 bg-[#051C10] py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-[#4ADE80]" />
          <h2 className="mb-3 text-3xl font-bold">Verify a certificate</h2>
          <p className="mb-8 text-white/75">
            Enter the certificate ID printed on the certificate, for example{" "}
            <span className="font-mono text-white">SGT-NANO-2026-XXXXXXXX</span>.
            Or scan its QR code.
          </p>
          <form onSubmit={onVerify} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="cert-id" className="sr-only">
              Certificate ID
            </label>
            <input
              id="cert-id"
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
              placeholder={ACADEMY_LIVE ? "Certificate ID" : "Certificate verification is coming soon"}
              autoComplete="off"
              spellCheck={false}
              disabled={!ACADEMY_LIVE}
              className="flex-1 rounded-md border border-white/20 bg-white/10 px-4 py-3 font-mono uppercase text-white placeholder:normal-case placeholder:text-white/40 focus:border-[#4ADE80] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!ACADEMY_LIVE}
              className="rounded-md bg-[#33A04A] px-6 py-3 font-semibold text-white transition hover:bg-[#2a8f53] disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/60"
            >
              {ACADEMY_LIVE ? "Verify" : "Coming soon"}
            </button>
          </form>
        </div>
      </section>

      {/* ── Closing ────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h2 className="mb-3 text-2xl font-bold">Training a whole team?</h2>
        <p className="mx-auto mb-6 max-w-xl text-slate-600">
          We can enrol your technicians as a group and share their results with you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md border border-[#1B6B3D] px-6 py-3 font-semibold text-[#1B6B3D] transition hover:bg-[#e8f5ee]"
        >
          Contact us <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
