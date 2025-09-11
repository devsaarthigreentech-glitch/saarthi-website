"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full pt-[88px] bg-slate-900 text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/greenvision/dashboard-bg.jpg"
          alt="Dashboard background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          See, Control, and Prove Your Emissions.
        </h1>
        <p className="text-lg md:text-xl mb-10">
          GreenVision is a powerful IoT- and AI-enabled platform that lets you record,
          analyze, control, and report emissions across your assets — from trucks to
          generators, ships to factories, and even entire smart cities.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/book-demo"
            className="rounded-full bg-[var(--brand)] px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Book a Demo
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            Talk to Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
}
