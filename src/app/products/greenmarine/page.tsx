// src/app/products/greenmarine/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "GreenMarine — Hydrogen solutions for maritime | Saarthi GreenTech",
  description:
    "GreenMarine — hydrogen retrofit suite for ships, tugs, port equipment and small craft. On-demand hydrogen, GreenVision integration, marine pilots and Class testing in progress.",
};

export default function GreenMarinePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section id="hero" className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 -z-10">
          {/* Replace with wide hero image in public/images/greenmarine/hero-marine.jpg */}
          {/* <div className="relative w-full h-full">
            <Image
              src="/images/greenmarine/hero-marine.png"
              alt="Cargo ship, tugboat, fishing vessel with green overlay"
              priority
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div> */}
          <img src="/images/greenmarine/hero-marine.png" alt="cargo ship, tug and fishing vessel with green overlay" className="w-full h-64 object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        </div>

        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[var(--accent,#98C948)] mb-2">GreenMarine — Complete hydrogen solutions for maritime decarbonisation</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Decarbonising Shipping, <span className="whitespace-nowrap">From Tankers to Tugboats.</span>
            </h1>

            <p className="mt-6 text-lg text-slate-200/90">
              GreenMarine is a hydrogen-based retrofit solution suite for the maritime ecosystem — helping large ships, port vessels and small boats cut emissions, reduce fuel costs, and prepare for IMO-aligned sustainability goals.
            </p>

            {/* <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 font-semibold text-black">
                Book a Pilot
              </Link>
              <Link href="/contact#marine-experts" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-white/90">
                Talk to Our Marine Experts
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* SECTION 1 — Maritime Challenge */}
      <section id="challenge" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold mb-4">The maritime challenge</h2>
          <p className="text-slate-600 mb-6">
            Shipping contributes a meaningful share of global CO₂ and local pollutants (PM, NOx, CO, HC). Large vessels burn huge volumes of HFO/MDO; port vessels idle for long hours creating dense local pollution; smaller craft face rising fuel costs and regulatory pressure.
          </p>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Large ships consume high volumes of bunker fuels with large CO₂ footprints.</li>
                <li>Port vessels and tugs create localized air quality issues during long idling periods.</li>
                <li>Existing options (LNG, scrubbers) are infrastructure-heavy, costly, and often lack clear ROI.</li>
              </ul>

              <p className="text-slate-600">
                The sector needs compact, safe retrofit options that deliver measurable reductions and operational savings — without long dry-dock windows or heavy infrastructure changes.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow">
               <div className="rounded-xl overflow-hidden shadow relative w-full h-96">
              <Image
                src="/images/greenmarine/port-busy.png"
                alt="Busy port with multiple vessel types"
                fill
                unoptimized
                sizes="(min-width:1024px) 50vw, 100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div></div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — GreenMarine Advantage */}
      <section id="advantage" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-4">The GreenMarine advantage</h2>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-8">
            Adaptation of Saarthi’s proven hydrogen retrofit platform for marine duty cycles — on-demand hydrogen, metered dosing, and integration with GreenVision for monitoring and verification.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="rounded-md bg-[var(--accent,#98C948)]/10 p-3 text-[var(--accent,#98C948)]">💧</div>
                <div>
                  <h4 className="font-semibold">On-demand hydrogen (no storage)</h4>
                  <p className="text-slate-600">Generated as needed from water — removes bulk storage and associated risks.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="rounded-md bg-[var(--accent,#98C948)]/10 p-3 text-[var(--accent,#98C948)]">⚙️</div>
                <div>
                  <h4 className="font-semibold">Metered dosing & smart control</h4>
                  <p className="text-slate-600">Advanced electronics modulate supply based on engine load for safe, efficient operation.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="rounded-md bg-[var(--accent,#98C948)]/10 p-3 text-[var(--accent,#98C948)]">🔒</div>
                <div>
                  <h4 className="font-semibold">Safety-first, marine-grade design</h4>
                  <p className="text-slate-600">Redundant sensors, automated shutoff, and design for vibration, humidity and long duty cycles.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="rounded-md bg-[var(--accent,#98C948)]/10 p-3 text-[var(--accent,#98C948)]">🚢</div>
                <div>
                  <h4 className="font-semibold">Compatible across fuels & engines</h4>
                  <p className="text-slate-600">Works with HFO, VLSMDO, MDO/MGO and diesel auxiliaries — expected savings vary by engine and duty cycle.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="rounded-md bg-[var(--accent,#98C948)]/10 p-3 text-[var(--accent,#98C948)]">📉</div>
                <div>
                  <h4 className="font-semibold">Expected operational savings</h4>
                  <p className="text-slate-600">Propulsion: ~3–5% (expected). Auxiliary engines: ~4–6%. Boilers at partial load: up to ~8% — results depend on duty cycles.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="rounded-md bg-[var(--accent,#98C948)]/10 p-3 text-[var(--accent,#98C948)]">🌍</div>
                <div>
                  <h4 className="font-semibold">Emission reductions (expected)</h4>
                  <p className="text-slate-600">PM `{'>'}`80% (land tests), HC `{'>'}`70%, CO `{'>'}`50%, NOx up to ~10%, CO₂ reduced proportional to fuel saved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Applications Across Maritime & Port */}
      <section id="applications" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-4">Applications across maritime & port operations</h2>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-8">GreenMarine delivers across the vessel and port ecosystem — from tankers to tugs to small craft.</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Large Ships", d: "Bulk carriers, container ships, tankers, cruise liners." },
              { t: "Port Vessels", d: "Tugboats, supply vessels, ferries, pilot boats." },
              { t: "Smaller Vessels", d: "Fishing boats, coastal cargo, patrol craft." },
              { t: "Port Infrastructure", d: "Cranes, port vehicles and auxiliary DGs (pair with GreenGen & GreenDrive)." },
              { t: "Auxiliary Engines & Boilers", d: "Boilers and service gensets with high partial-load benefits." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl bg-white p-6 shadow">
                <h4 className="font-semibold mb-2">{c.t}</h4>
                <p className="text-slate-600">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — GreenVision Integration */}
      <section id="greenvision" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-4">GreenVision integration</h2>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-8">
            Every GreenMarine deployment can connect to GreenVision for real-time monitoring, carbon accounting per vessel, automated ESG/IMO-aligned reports, and unified dashboards for fleet operators and port authorities.
          </p>

          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="rounded-xl overflow-hidden shadow">
<div className="rounded-xl overflow-hidden shadow relative w-full h-96">
  <Image
    src="/images/greenmarine/dashboard-marine.png"
    alt="GreenVision dashboard for maritime"
    fill
    unoptimized
    sizes="(min-width:1024px) 50vw, 100vw"
    style={{ objectFit: "cover", objectPosition: "center" }}
  />
</div>

</div>

            <div>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Real-time fuel & CO₂ monitoring per ship / asset.</li>
                <li>Automated ESG reporting aligned with IMO and other frameworks.</li>
                <li>Dashboards for operators, ports and regulators — provable outcomes and auditable logs.</li>
              </ul>

              <p className="mt-4 text-slate-600">
                With GreenVision, maritime operators can both reduce emissions AND prove compliance with data-driven, auditable reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Roadmap & Validation */}
      <section id="roadmap" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-6">Roadmap & validation</h2>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-8">
            Technology validated on generators and land engines. Marine trials and Class certification are in progress — results will validate fuel savings and emission reductions under marine duty cycles.
          </p>

          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center">
            <div className="rounded-xl border p-6 text-center">
              <div className="font-semibold mb-2">Class Testing</div>
              <div className="text-slate-600">In progress — working with Class bodies to validate marine safety & performance.</div>
            </div>

            <div className="rounded-xl border p-6 text-center">
              <div className="font-semibold mb-2">Marine Pilots</div>
              <div className="text-slate-600">Pilot deployments being prepared — scaled trials planned with partners and ports.</div>
            </div>

            <div className="rounded-xl border p-6 text-center">
              <div className="font-semibold mb-2">Certifications</div>
              <div className="text-slate-600">CPCB / IMO / EU MRV alignment & reporting pipelines being finalized.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Benefits at a glance */}
      <section id="benefits" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-4">Benefits at a glance</h2>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-8">Quick summary of why operators choose GreenMarine.</p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "Fuel Savings", d: "3–8% depending on engine & load" },
              { t: "Emission Reduction", d: "PM, HC, CO, CO₂ and NOx lowered" },
              { t: "Safety", d: "On-demand hydrogen — no bulk storage" },
              { t: "Simple Retrofit", d: "No drydocking or complex conversion" },
              { t: "Cost Effective", d: "Low O&M and long lifespan" },
              { t: "ROI-Driven", d: "Fuel savings create attractive payback" },
            ].map((b) => (
              <div key={b.t} className="rounded-xl bg-white p-6 shadow">
                <div className="font-semibold mb-2">{b.t}</div>
                <div className="text-slate-600">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section id="cta" className="py-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">One solution for maritime decarbonisation — from ships to ports.</h3>
          <p className="mt-3 text-lg text-white/90">GreenMarine helps vessels and ports become cleaner, more efficient, and ESG-ready — without complex retrofits.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-white/90 px-6 py-3 text-slate-900 font-semibold">Book a Pilot</Link>
            {/* <Link href="/contact#marine-experts" className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-white">Talk to Our Marine Experts</Link> */}
          </div>
        </div>
      </section>
    </main>
  );
}
