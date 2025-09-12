// src/app/products/greengen/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "GreenGen — Hydrogen retrofits for generators | Saarthi GreenTech",
  description: "GreenGen by Saarthi — retrofit hydrogen systems for 20–4000 kVA generators that reduce emissions and save fuel.",
};

export default function GreenGenPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section id="hero" className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="relative w-full h-full">
            <Image
              src="/images/greengen/hero-dg.png"
              alt="GreenGen hero - DG sets glowing green"
              priority
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        </div>

        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-green-300 mb-2">GreenGen — The only retrofit that cuts emissions and saves fuel</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Cleaner, smarter generators. <span className="text-green-400">One solution for every kVA.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-200/90">
              GreenGen is Saarthi GreenTech’s hydrogen retrofit brand for diesel generators (20 kVA → 4000 kVA). It reduces emissions while saving fuel — an alternative to bulky post-treatment systems.
            </p>

            {/* <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#product-range" className="inline-flex rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 font-semibold text-black">
                Explore Models
              </Link>
              <a href="/downloads/green-gen-case-studies.pdf" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-white/90">
                Download Case Studies
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Section 1: The Challenge */}
      <section id="challenge" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-extrabold mb-3">The challenge with DG sets</h2>
              <p className="text-slate-600 mb-4">
  Diesel generators are critical in many sectors (telecom, hospitals, data centers, ports, mining) but are also major polluters and expensive to operate. Conventional post-combustion systems are bulky, costly, and don&apos;t reduce fuel consumption.
</p>


              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Filters/SCRs treat exhaust after combustion and add OPEX.</li>
                <li>Large footprint and maintenance overhead for post-treatment systems.</li>
                <li>Operators need compact, ROI-positive retrofits that also cut fuel costs.</li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full h-64">
                <Image
                  src="/images/greengen/saarthi-dg.png"
                  alt="Smoky DG vs clean DG"
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div></div>
          </div>
        </div>
      </section>

      {/* Section 2: GreenGen Advantage */}
      <section id="advantage" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-3xl font-extrabold text-center mb-4">The GreenGen advantage</h3>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-8">
            Hydrogen-from-water, metered dosing, compact retrofit and GreenVision connectivity — a solution engineered to reduce emissions and save fuel.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-green-50 p-3 text-green-600">⚡</div>
                <div>
                  <h4 className="font-semibold">On-demand hydrogen</h4>
                  <p className="text-slate-600">Generated as needed — no vehicle-level storage risk.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md bg-green-50 p-3 text-green-600">🧠</div>
                <div>
                  <h4 className="font-semibold">Metered dosing</h4>
                  <p className="text-slate-600">Intelligent electronics adjust dosing based on load for repeatable performance.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md bg-green-50 p-3 text-green-600">🔧</div>
                <div>
                  <h4 className="font-semibold">Compact retrofit</h4>
                  <p className="text-slate-600">No engine modifications, minimal downtime, low upkeep.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-green-50 p-3 text-green-600">📉</div>
                <div>
                  <h4 className="font-semibold">Dual benefit</h4>
                  <p className="text-slate-600">Fuel savings (up to ~8% at higher loads) plus large PM/HC/CO reductions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md bg-green-50 p-3 text-green-600">🔗</div>
                <div>
                  <h4 className="font-semibold">Connected</h4>
                  <p className="text-slate-600">Seamless GreenVision integration for monitoring, reporting and ESG proof.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Range */}
      <section id="product-range" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-3xl font-extrabold text-center mb-4">Product range by generator rating</h3>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-8">GreenGen supports Small, Medium and Large ratings — every common kVA has a tailored solution.</p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6">
              <h4 className="text-xl font-bold mb-2">Small / Light Commercial (20–100 kVA)</h4>
              <p className="text-slate-600 mb-3">For telecom towers, small commercial buildings and retail hubs.</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {["20", "25", "30", "40", "50", "62.5", "75", "82.5", "100"].map((k) => (
                  <span key={k} className="rounded-md bg-slate-100 px-3 py-1">{k} kVA</span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border p-6">
              <h4 className="text-xl font-bold mb-2">Medium Commercial / Industrial (125–250 kVA)</h4>
              <p className="text-slate-600 mb-3">For factories, hospitals, campuses and data centers.</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {["125", "140", "150", "160", "180", "200", "250"].map((k) => (
                  <span key={k} className="rounded-md bg-slate-100 px-3 py-1">{k} kVA</span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border p-6">
              <h4 className="text-xl font-bold mb-2">Large / Heavy Industrial (320–4000 kVA)</h4>
              <p className="text-slate-600 mb-3">For ports, mining, industrial plants and critical infrastructure.</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {["320", "350", "400", "500", "625", "750", "800", "1000", "1250", "1500", "2000", "4000"].map((k) => (
                  <span key={k} className="rounded-md bg-slate-100 px-3 py-1">{k} kVA</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Applications */}
      <section id="applications" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-3xl font-extrabold text-center mb-4">Applications</h3>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-8">Where GreenGen is applied — telecom, hospitals, industry, ports and more.</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Telecom Towers", desc: "Cleaner 24/7 backup, lower OPEX." },
              { title: "Hospitals & Data Centers", desc: "Reliable standby power, ESG compliance." },
              { title: "Industries & Factories", desc: "Cost-effective decarbonisation." },
              { title: "Commercial Campuses", desc: "Lower emissions for sustainability goals." },
              { title: "Ports & Mining", desc: "Decarbonise heavy DG fleets with measurable ROI." },
            ].map((c) => (
              <div key={c.title} className="rounded-xl bg-white p-6 shadow">
                <h4 className="font-semibold mb-2">{c.title}</h4>
                <p className="text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Results & Validation */}
      <section id="results" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h3 className="text-3xl font-extrabold text-center mb-4">Proven Results & Validation</h3>
          <p className="text-center text-slate-600 mb-6">Field trials and controlled testing across DG ratings.</p>

          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full table-auto text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3">Parameter</th>
                  <th className="px-6 py-3">Baseline</th>
                  <th className="px-6 py-3">With GreenGen</th>
                  <th className="px-6 py-3">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { p: "Fuel Consumption", b: "100%", w: "~92–94%", i: "Up to ~8% saving" },
                  { p: "PM Emissions", b: "100%", w: "<20%", i: ">80% reduction" },
                  { p: "CO₂ Output", b: "100%", w: "~92–94%", i: "Direct footprint cut" },
                  { p: "HC & CO", b: "100%", w: "~30–50%", i: "Significant drop" },
                ].map((r) => (
                  <tr key={r.p} className="border-t">
                    <td className="px-6 py-4 font-medium">{r.p}</td>
                    <td className="px-6 py-4">{r.b}</td>
                    <td className="px-6 py-4">{r.w}</td>
                    <td className="px-6 py-4">{r.i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-slate-600">
            <p>✔ Results from DG trials (20–250 kVA) under real-world loads. Larger DG testing and certification are ongoing.</p>
            <p className="mt-2">✔ Fact sheets and case studies are available for download.</p>
          </div>
        </div>
      </section>

      {/* Section 6: Benefits */}
      <section id="benefits" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-3xl font-extrabold text-center mb-4">Benefits at a glance</h3>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-8">Why customers choose GreenGen</p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "Fuel Savings", d: "Measurable ROI (up to ~8%)" },
              { t: "Emission Reduction", d: "PM, CO₂, HC, CO cut significantly" },
              { t: "Smart Monitoring", d: "Full GreenVision integration" },
              { t: "Compact Retrofit", d: "No engine mods; quick installs" },
              { t: "Scalable", d: "20 kVA → 4000 kVA" },
              { t: "Future-Ready", d: "Designed for global standards" },
            ].map((b) => (
              <div key={b.t} className="rounded-xl bg-white p-6 shadow">
                <div className="font-semibold mb-2">{b.t}</div>
                <div className="text-slate-600">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">The smartest retrofit for generators of every size.</h3>
          <p className="mt-3 text-lg text-white/90">GreenGen delivers dual ROI — emissions reduction plus measurable fuel savings.</p>

          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-white/90 px-6 py-3 text-slate-900 font-semibold">Book a Pilot</Link>
            {/* <a href="/downloads/green-gen-brochure.pdf" className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-white">Download Brochure</a> */}
          </div>
        </div>
      </section>
    </main>
  );
}
