"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BadgeCheck, MapPin, Mail, ChevronRight, ArrowRight, Factory,
  Wrench, Headphones, Activity, ShieldCheck, Building2, Globe, Phone,
} from "lucide-react";

import type { PartnerStore } from "@/data/partnerStores";
import { greenXModels, type Product } from "@/data/productCatalog";

const CAPABILITY_ICONS = [
  <MapPin key="a" className="w-4 h-4" />,
  <Wrench key="b" className="w-4 h-4" />,
  <Headphones key="c" className="w-4 h-4" />,
  <Activity key="d" className="w-4 h-4" />,
];

export default function PartnerStorefront({
  store,
  catalogue,
}: {
  store: PartnerStore;
  catalogue: Product[];
}) {
  // Group the flat catalogue by product line so the store reads like a
  // catalogue rather than a photo dump.
  const lines = useMemo(() => {
    const byName = new Map<string, Product[]>();
    catalogue.forEach((p) => {
      if (!byName.has(p.name)) byName.set(p.name, []);
      byName.get(p.name)!.push(p);
    });
    return Array.from(byName.entries());
  }, [catalogue]);

  const [activeLine, setActiveLine] = useState<string>("all");
  const visible = activeLine === "all" ? catalogue : catalogue.filter((p) => p.name === activeLine);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .ps-green { color: #1B6B3D; }
        .ps-bg-green { background-color: #1B6B3D; }
        .hover\\:ps-bg-green-dark:hover { background-color: #14512e; }
        .ps-focus:focus { border-color: #1B6B3D; box-shadow: 0 0 0 3px rgba(27,107,61,0.12); outline: none; }
      `}</style>

      {/* ── BREADCRUMB ── */}
      <div className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
          <Link href="/" className="hover:text-[#1B6B3D] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/about/partners" className="hover:text-[#1B6B3D] transition-colors">Partners</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium">{store.shortName}</span>
        </div>
      </div>

      {/* ── STOREFRONT HEADER ── */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[#1B6B3D22] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />

        <div className="relative max-w-6xl mx-auto px-6 pt-10 pb-12">
          <div className="flex items-start gap-5 flex-wrap">
            {/* Dealer mark */}
            <div className="w-20 h-20 rounded-2xl bg-white/95 border border-white/20 flex items-center justify-center shrink-0 overflow-hidden">
              {store.logo ? (
                <Image src={store.logo} alt={store.shortName} width={80} height={80} className="object-contain p-2" />
              ) : (
                <span className="text-2xl font-bold tracking-wide text-[#1B6B3D]">{store.initials}</span>
              )}
            </div>

            <div className="flex-1 min-w-[260px]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1B6B3D33] border border-[#1B6B3D55] rounded-full text-[#5DCAA5] text-[11px] font-semibold mb-3">
                <BadgeCheck className="w-3.5 h-3.5" />
                {store.badge}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2">
                {store.shortName}
              </h1>
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">{store.tagline}</p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-xs text-gray-400">
                <span><strong className="text-white font-medium">Territory:</strong> {store.coverage}</span>
                <span><strong className="text-white font-medium">Focus:</strong> {store.focus}</span>
                <span><strong className="text-white font-medium">Authorised since:</strong> {store.appointed}</span>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1B6B3D] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:ps-bg-green-dark transition-all">
                  Request a quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`mailto:${store.emails[0]}`} className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all">
                  <Mail className="w-4 h-4" /> Email dealer
                </a>
                {store.phones?.[0] && (
                  <a href={`tel:${store.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all">
                    <Phone className="w-4 h-4" /> {store.phones[0]}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS STRIP ── */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-x-8 gap-y-2">
          {store.credentials.map((c) => (
            <span key={c} className="inline-flex items-center gap-1.5 text-xs text-gray-600">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1B6B3D]" /> {c}
            </span>
          ))}
        </div>
      </div>

      {/* ── BANNER PHOTO ── */}
      {store.banner && (
        <div className="max-w-6xl mx-auto px-6 pt-10">
          <Link href="/resources/gallery" className="block rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1B6B3D66] transition-colors">
            <Image
              src={store.banner.src}
              alt={store.banner.alt}
              width={1600}
              height={900}
              sizes="(max-width: 1152px) 100vw, 1100px"
              className="w-full h-auto block"
              priority
            />
            {store.banner.caption && (
              <div className="flex items-center justify-between gap-3 flex-wrap px-5 py-3 bg-gray-50 border-t border-gray-200">
                <span className="text-xs text-gray-500">{store.banner.caption}</span>
                <span className="text-xs text-[#1B6B3D] font-medium whitespace-nowrap">View in gallery →</span>
              </div>
            )}
          </Link>
        </div>
      )}

      {/* ── PRODUCT CATALOGUE ── */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-2">
          <h2 className="text-2xl font-bold text-gray-900">Available from this dealer</h2>
          <span className="text-sm text-gray-500">{catalogue.length} products</span>
        </div>
        <p className="text-gray-500 mb-7 max-w-2xl">
          SGT HydroEdge products {store.shortName} is authorised to sell, install and service in {store.coverage.replace("Exclusive — ", "")}.
        </p>

        {/* Line filter */}
        {lines.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-8">
            <FilterChip label={`All (${catalogue.length})`} active={activeLine === "all"} onClick={() => setActiveLine("all")} />
            {lines.map(([name, items]) => (
              <FilterChip key={name} label={`${name} (${items.length})`} active={activeLine === name} onClick={() => setActiveLine(name)} />
            ))}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <article key={p.id} className="group border border-gray-200 rounded-2xl overflow-hidden hover:border-[#1B6B3D66] hover:shadow-lg transition-all flex flex-col">
              <div className="relative h-48 bg-gray-50 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-white/95 text-gray-700 text-[10px] font-semibold px-2 py-1 rounded-full">
                  <Factory className="w-3 h-3 text-[#1B6B3D]" /> {p.vertical}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-bold text-gray-900">{p.name}</h3>
                  <span className="text-[10px] font-semibold text-[#1B6B3D] bg-[#1B6B3D14] px-2 py-1 rounded-full whitespace-nowrap">{p.stat}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{p.description}</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#1B6B3D] hover:gap-2.5 transition-all">
                  Enquire <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── GREENX MODEL RANGE ── */}
      {store.showGreenXRange && (
        <section className="border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">GreenX model range</h2>
            <p className="text-gray-500 mb-7 max-w-2xl">
              A GreenX model for every DG set from 30 kVA to 2500 kVA. {store.shortName} will confirm
              the right model for your generator rating and duty cycle.
            </p>

            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#1B6B3D] text-white text-left">
                      <th className="px-5 py-3 font-semibold whitespace-nowrap">Model</th>
                      <th className="px-5 py-3 font-semibold whitespace-nowrap">DG set rating (kVA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {greenXModels.map((m, i) => (
                      <tr key={m.model} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                        <td className="px-5 py-2.5 font-semibold text-gray-900 whitespace-nowrap border-t border-gray-100">
                          {m.model}
                        </td>
                        <td className="px-5 py-2.5 text-gray-600 whitespace-nowrap border-t border-gray-100">
                          {m.rating}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between gap-3 flex-wrap px-5 py-3 bg-gray-50 border-t border-gray-200">
                <span className="text-xs text-gray-500">
                  {greenXModels.length} models · pricing on request
                </span>
                <Link href="/contact" className="text-xs font-semibold text-[#1B6B3D] hover:underline whitespace-nowrap">
                  Request pricing →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── WHAT THIS DEALER DOES ── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">What {store.shortName} handles locally</h2>
          <p className="text-gray-500 mb-8">End-to-end, from first site visit to ongoing service.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {store.capabilities.map((cap, i) => (
              <div key={cap.title} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="w-9 h-9 rounded-lg bg-[#1B6B3D14] text-[#1B6B3D] flex items-center justify-center mb-3">
                  {CAPABILITY_ICONS[i % CAPABILITY_ICONS.length]}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{cap.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT + ENQUIRY ── */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About this dealer</h2>
            <p className="text-gray-600 leading-relaxed mb-7">{store.about}</p>

            <div className="space-y-4">
              {store.offices.map((o) => (
                <div key={o.label} className="flex gap-3">
                  <Building2 className="w-4 h-4 text-[#1B6B3D] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">{o.label}</p>
                    <p className="text-sm text-gray-500">{o.address}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-[#1B6B3D] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-900">Direct contact</p>
                  {store.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block text-sm text-[#1B6B3D] hover:underline">{e}</a>
                  ))}
                  {store.phones?.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-sm text-[#1B6B3D] hover:underline">{p}</a>
                  ))}
                </div>
              </div>
              {store.website && (
                <div className="flex gap-3">
                  <Globe className="w-4 h-4 text-[#1B6B3D] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Dealer website</p>
                    <a
                      href={store.website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1B6B3D] hover:underline"
                    >
                      {store.website.label} ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enquiry CTA — routes to the single site-wide contact form */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Request a quote</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Send your requirement to SGT HydroEdge and we&apos;ll route it to {store.shortName}
              {" "}for your territory. Mention your DG set rating and location so we can size the
              right GreenX model.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#1B6B3D] text-white px-6 py-3 rounded-lg text-sm font-bold hover:ps-bg-green-dark transition-all"
            >
              Go to contact form <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-900 mb-2">Or reach the dealer directly</p>
              <div className="space-y-1.5">
                {store.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="flex items-center gap-2 text-sm text-[#1B6B3D] hover:underline">
                    <Mail className="w-3.5 h-3.5 shrink-0" /> {e}
                  </a>
                ))}
                {store.phones?.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-[#1B6B3D] hover:underline">
                    <Phone className="w-3.5 h-3.5 shrink-0" /> {p}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUTHORISATION FOOTER ── */}
      <section className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {store.name} is an authorised dealer of{" "}
            <Link href="/" className="text-[#1B6B3D] font-medium hover:underline">SGT HydroEdge Pvt Ltd</Link>.
            Products and technology are manufactured and warranted by SGT HydroEdge.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link href="/about/partners" className="inline-flex items-center gap-1.5 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-semibold hover:border-gray-300 transition-all">
              All SGT partners
            </Link>
            <Link href="/resources/downloads" className="inline-flex items-center gap-1.5 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-semibold hover:border-gray-300 transition-all">
              Product documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── FILTER CHIP ───
function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
        active
          ? "bg-[#1B6B3D] text-white border-[#1B6B3D]"
          : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
      }`}
    >
      {label}
    </button>
  );
}
