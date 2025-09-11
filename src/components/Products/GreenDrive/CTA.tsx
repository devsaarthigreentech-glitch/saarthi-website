// src/components/Products/GreenDrive/CTA.tsx
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">One Retrofit Brand for Every Commercial Diesel Engine.</h2>
        <p className="mt-3 text-slate-200 max-w-2xl mx-auto">GreenDrive makes diesel engines cleaner, more efficient, and future-ready.</p>

        <div className="mt-8 flex justify-center gap-3">
          <Link href="/contact" className="inline-flex rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 text-black font-semibold">Book a Pilot</Link>
          {/* <Link href="/case-studies" className="inline-flex rounded-full border border-white/20 px-6 py-3 text-white">See Case Studies</Link> */}
        </div>
      </div>
    </section>
  );
}
