"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle,
  Cpu,
  Database,
  Droplets,
  FileCheck,
  Flame,
  Fuel,
  HeartPulse,
  Leaf,
  Play,
  Ship,
  Truck,
  X,
  Zap,
} from "lucide-react";
import MediaCarousel from "@/components/MediaCarousal";
import CredentialsBlock from "@/components/Shared/CredentialsBlock";
import GensetGlobe from "@/components/Shared/GensetGlobe";
import SavingsDisclaimer from "@/components/Shared/SavingsDisclaimer";
import {
  CLAIMS,
  COMPANY,
  LINES,
  PHOTOS,
  PLATFORM_LAYERS,
  PRODUCTS,
  ROUTES,
  TECHNOLOGY,
  VIDEOS,
  youtubeEmbedUrl,
  type ProductKey,
} from "@/data/siteContent";

const GREEN = "#1B6B3D";

const stats = [
  { value: `${CLAIMS.greendrive.fuelSaving}*`, label: "Fuel saving", note: "GreenDrive, diesel vehicles" },
  { value: "Up to 80%", label: "Less particulate matter (PM)", note: "Engines" },
  { value: CLAIMS.greendrive.km, label: "Driven with GreenDrive", note: "Over three years on real engines" },
  { value: "Patented", label: "CHFA technology", note: `Patent No. ${TECHNOLOGY.patentNo}` },
];

const problemAssets = [
  { icon: Truck, label: "Trucks" },
  { icon: Zap, label: "Generators" },
  { icon: Ship, label: "Ships" },
  { icon: Flame, label: "Boilers and furnaces" },
];

const layerIcons = [Droplets, Cpu, Database];

const greenVisionPoints = [
  { icon: Fuel, label: "Fuel saved" },
  { icon: Leaf, label: "CO₂ avoided" },
  { icon: HeartPulse, label: "System health" },
  { icon: Bell, label: "Real-time alerts" },
  { icon: BarChart3, label: "ESG / BRSR reporting" },
  { icon: FileCheck, label: "MRV-ready for carbon credits" },
];

const proofPhotos = [
  { ...PHOTOS.greenxSiteUnits, caption: "GreenX units fitted inside a diesel generator enclosure" },
  { ...PHOTOS.greenedgeFurnace, caption: "GreenEdge beside an industrial furnace" },
  { ...PHOTOS.malaysia1, caption: "GreenDrive installation on a truck, Malaysia" },
  { ...PHOTOS.greenxGasMixer, caption: "Gas mixer on a generator air intake" },
  { ...PHOTOS.engineTestCell, caption: "Engine on a dynamometer test bed" },
  { ...PHOTOS.greenedgeAssembly, caption: "GreenEdge module in assembly" },
];

const engineKeys: ProductKey[] = ["greendrive", "greenx", "greenmarine"];
const burnerKeys: ProductKey[] = ["greenedge"];

function ProductCard({ productKey }: { productKey: ProductKey }) {
  const p = PRODUCTS[productKey];
  const hasSaving = p.figureLabel.includes("*");
  return (
    <Link
      href={p.href}
      className="group flex flex-col overflow-hidden rounded-2xl border-2 border-gray-200 bg-white transition-all duration-300 hover:border-[#1B6B3D] hover:shadow-2xl"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {p.image ? (
          <img
            src={p.image}
            alt={p.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0f3d24] to-[#1B6B3D]">
            <Ship className="h-16 w-16 text-white/80" aria-hidden="true" />
          </div>
        )}
        {p.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-[#FFD700] px-3 py-1 text-xs font-bold text-gray-900">
            {p.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h4 className="text-2xl font-bold tracking-tight text-gray-900">{p.name}</h4>
        <p className="mb-3 mt-1 text-sm font-semibold text-[#1B6B3D]">{p.segment}</p>
        <p className="mb-5 text-sm leading-relaxed text-gray-600">{p.oneLiner}</p>
        <div className="mt-auto flex items-end justify-between border-t border-gray-200 pt-4">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              {p.figure}
              {hasSaving ? "*" : ""}
            </p>
            <p className="text-xs text-gray-500">{p.figureLabel.replace("*", "")}</p>
          </div>
          <span className="inline-flex items-center text-sm font-semibold text-[#1B6B3D]">
            Learn more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const [filmOpen, setFilmOpen] = useState(false);

  useEffect(() => {
    if (!filmOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setFilmOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [filmOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        {/* TODO(owner): supply a hero image covering engines, burners and furnaces. */}
        <div className="absolute inset-0 z-0">
          <img
            src={PHOTOS.greendriveQuarry.src}
            alt={PHOTOS.greendriveQuarry.alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(10,20,15,0.92) 0%, rgba(10,20,15,0.72) 42%, rgba(10,20,15,0.4) 70%, rgba(10,20,15,0.15) 100%)",
          }}
        />
        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="flex w-full flex-col justify-center lg:w-[62%]">
            <div className="mb-6 inline-flex items-center self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 shrink-0 rounded-full bg-[#FFD700]" />
              {COMPANY.positioning} · Patented · {CLAIMS.madeIn}
            </div>

            <h1 className="mb-5 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl xl:text-5xl">
              Decarbonisation infrastructure for the{" "}
              <span className="text-[#4ADE80]">engines, burners and furnaces</span> the world
              already runs, on land and at sea.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/85">{LINES.heroSub}</p>

            <div className="mb-9 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setFilmOpen(true)}
                className="inline-flex items-center rounded-md bg-[#1B6B3D] px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#155730]"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch the film
              </button>
              <Link
                href={ROUTES.contact}
                className="inline-flex items-center rounded-md border border-white/30 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Talk to us
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
              {["Save fuel.", "Cut carbon.", "Prove it with data."].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 shrink-0 text-[#4ADE80]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stat strip */}
      <section className="bg-[#1B6B3D] py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="mb-2 text-3xl font-bold md:text-4xl">{s.value}</p>
                <p className="text-green-100">{s.label}</p>
                <p className="mt-1 text-xs text-green-200">{s.note}</p>
              </div>
            ))}
          </div>
          <SavingsDisclaimer className="mt-8 text-center text-green-100" />
        </div>
      </section>

      {/* 3. The problem */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1B6B3D]">
              The problem
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              The world&apos;s engines, burners and furnaces won&apos;t be replaced any time soon.
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Trucks, generators, ships, boilers and furnaces will keep running for years — and
              part of every litre of fuel they burn never fully burns. That is fuel paid for and
              lost, and carbon and smoke released for nothing.
            </p>
            <p className="border-l-4 border-[#FFD700] pl-5 text-lg font-medium leading-relaxed text-gray-900">
              {LINES.core}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {problemAssets.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-10 text-center"
              >
                <Icon className="mb-3 h-10 w-10" style={{ color: GREEN }} aria-hidden="true" />
                <p className="font-semibold text-gray-900">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The installed base — rotating globe */}
      <GensetGlobe />

      {/* 4. The platform */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1B6B3D]">
              The platform
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              {TECHNOLOGY.name} Technology
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Hydrogen made from water, on demand, with nothing stored — dosed precisely as a
              combustion booster. {TECHNOLOGY.credit}.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {PLATFORM_LAYERS.map((l, i) => {
              const Icon = layerIcons[i];
              return (
                <Link
                  key={l.layer}
                  href={l.href}
                  className="group flex flex-col rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-[#1B6B3D] hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1B6B3D]/10 transition-colors group-hover:bg-[#1B6B3D]">
                    <Icon className="h-7 w-7 text-[#1B6B3D] transition-colors group-hover:text-white" />
                  </div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#1B6B3D]">
                    {l.layer}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">{l.title}</h3>
                  <p className="mb-6 leading-relaxed text-gray-600">{l.body}</p>
                  <span className="mt-auto inline-flex items-center text-sm font-semibold text-[#1B6B3D]">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-gray-900">{LINES.equation}</p>
            <p className="mt-2 text-lg text-gray-600">{LINES.onePlatform}</p>
          </div>
        </div>
      </section>

      {/* 5. Applications */}
      <section id="applications" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              One platform. Two applications.
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Engines, and burners and furnaces — without changing the engine, the burner, the
              furnace or the fuel.
            </p>
          </div>

          {/* TODO(owner): supply transparent product wordmark logos (GreenDrive, GreenX, GreenMarine, GreenEdge) to replace the text names on these cards. */}
          <div className="grid gap-10 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <h3 className="mb-5 flex items-center text-xl font-bold text-gray-900">
                <Zap className="mr-2 h-5 w-5 text-[#1B6B3D]" />
                Engines <span className="ml-2 text-base font-medium text-gray-500">(diesel)</span>
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                {engineKeys.map((k) => (
                  <ProductCard key={k} productKey={k} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-5 flex items-center text-xl font-bold text-gray-900">
                <Flame className="mr-2 h-5 w-5 text-[#1B6B3D]" />
                Burners &amp; Furnaces{" "}
                <span className="ml-2 text-base font-medium text-gray-500">(any fuel)</span>
              </h3>
              <div className="grid gap-6">
                {burnerKeys.map((k) => (
                  <ProductCard key={k} productKey={k} />
                ))}
              </div>
            </div>
          </div>
          <SavingsDisclaimer className="mt-8 text-center text-gray-500" />
        </div>
      </section>

      {/* 6. GreenVision */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#4ADE80]">
              GreenVision
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">{LINES.measure}</h2>
            <p className="mb-4 text-xl text-gray-200">{LINES.greenVision}</p>
            <p className="mb-8 leading-relaxed text-gray-300">
              Every SGT HydroEdge system reports to GreenVision over {CLAIMS.connectivity}. It
              measures every litre saved and every tonne of CO₂ avoided, so the result is a
              record you can report — not a promise.
            </p>
            <Link
              href={ROUTES.greenvision}
              className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-[#1B6B3D] transition-colors hover:bg-[#FFD700] hover:text-gray-900"
            >
              Explore GreenVision <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          {/* TODO(owner): supply GreenVision dashboard and SGT OS app screenshots with customer data masked; show them here. */}
          <div className="grid grid-cols-2 gap-4">
            {greenVisionPoints.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <Icon className="h-6 w-6 shrink-0 text-[#4ADE80]" aria-hidden="true" />
                <p className="font-medium text-white">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Proof */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1B6B3D]">
              Proof
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              Tested for over three years on real engines
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Validated across multiple customer sites and use cases — fleets, DG sets, boilers
              and furnaces.
            </p>
          </div>

          <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-3">
            {proofPhotos.map((p) => (
              <figure
                key={p.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10 text-sm font-medium text-white">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <CredentialsBlock />
        </div>
      </section>

      {/* 8. Media highlights */}
      <MediaCarousel />

      {/* 9. Closing CTA */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote className="mb-10">
            <p className="text-3xl font-bold leading-tight md:text-4xl">“{LINES.ceo}”</p>
            <footer className="mt-4 text-gray-300">
              {COMPANY.founder.name}, {COMPANY.founder.shortTitle}
            </footer>
          </blockquote>

          <p className="mb-10 text-xl text-gray-300">{LINES.partner}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={ROUTES.contact}
              className="rounded-lg bg-[#1B6B3D] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-green-700"
            >
              Schedule a consultation
            </Link>
            <Link
              href={ROUTES.partners}
              className="rounded-lg border-2 border-white bg-white/10 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/20"
            >
              Become a partner
            </Link>
            <Link
              href={ROUTES.downloads}
              className="rounded-lg border-2 border-white bg-white/10 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/20"
            >
              Download brochures
            </Link>
          </div>
        </div>
      </section>

      {/* Film modal — the player only loads when opened */}
      {filmOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={VIDEOS.corporate.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setFilmOpen(false)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setFilmOpen(false)}
              aria-label="Close film"
              className="absolute -top-11 right-0 rounded-full p-2 text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                src={youtubeEmbedUrl(VIDEOS.corporate.youtubeId, true)}
                title={VIDEOS.corporate.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
