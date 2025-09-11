// src/components/Products/GreenDrive/Hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-slate-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            src="/images/greendrive/hero-fleet.jpg"
            alt="GreenDrive hero - cleaner engines for every vehicle"
            priority
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-green-300 mb-2">
            GreenDrive — Hydrogen retrofits for trucks, buses, mining and construction
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            One Brand. Multiple Models.{" "}
            <span className="text-green-400">Cleaner Engines for Every Vehicle.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-200/90">
            GreenDrive is Saarthi GreenTech’s flagship retrofit family for commercial diesel
            engines — from delivery vans and buses to Class-8 trucks, mining, construction,
            and agricultural equipment.
          </p>

          {/* <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products/greendrive#product-range"
              className="inline-flex rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 font-semibold text-black"
            >
              Explore Models
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-white/90"
            >
              Book a Pilot
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
