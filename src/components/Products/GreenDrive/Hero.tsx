// src/components/Products/GreenDrive/Hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image"; // ✅ import Next.js <Image>

export default function Hero() {
  return (
    <section className="relative w-full pt-[88px] bg-white">
      {/* Background Fleet Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/greendrive/hero-fleet.jpg"
          alt="Fleet of trucks with green trails"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-white/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
              One Brand. Multiple Models. Cleaner Engines for Every Vehicle.
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-2xl">
              GreenDrive is Saarthi GreenTech’s flagship product family for
              commercial diesel engines — from delivery vans and buses to
              Class-8 trucks, mining, construction, and agricultural equipment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products/greendrive#product-range"
                className="inline-flex items-center rounded-full px-6 py-3 font-semibold"
                style={{ background: "var(--brand, #33A04A)", color: "#07121a" }}
              >
                Explore Models
              </Link>

              {/* <Link
                href="/products/greendrive#fact-sheets"
                className="inline-flex items-center rounded-full px-6 py-3 border border-slate-200 text-slate-900"
              >
                See Real-World Results
              </Link> */}
            </div>
          </div>

          {/* Product Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-slate-100 shadow-sm h-64 md:h-80 lg:h-[420px]">
              <Image
                src="/images/greendrive/hero-product.png"
                alt="GreenDrive product visual"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
