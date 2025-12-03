// src/app/our-solutions/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Our Solutions — Saarthi GreenTech | Consulting, Products, Projects, GreenLabs",
  description:
    "Saarthi GreenTech delivers Consulting, Products, Projects and R&D (GreenLabs) to deliver measurable decarbonisation with verified ESG reporting and ROI.",
};

export default function OurSolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section id="hero" className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/solutions/hero-enterprise.jpg"
            alt="Enterprise connecting ships, trucks, DGs and dashboards"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        </div>

        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[var(--accent,#98C948)] mb-2">
              Your partner for real decarbonisation
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Your Partner for Real Decarbonisation — With Verified ESG Reporting and Measurable ROI.
            </h1>

            <p className="mt-6 text-lg text-slate-200/90">
              Saarthi GreenTech combines Consulting, Products, Projects and continual innovation (GreenLabs) to reduce emissions, save fuel and deliver Stage 1-3 ESG reporting that stands up to regulators and investors.
            </p>

            {/* <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 font-semibold text-black">
                Talk to Our Experts
              </Link>
              <Link href="/our-solutions#solutions" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-white/90">
                Explore Solutions
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* SECTION 1 - Challenge */}
      <section id="challenge" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold mb-4">The challenge today</h2>
          <p className="text-slate-600 mb-6">
            Companies face regulatory and investor pressure to decarbonise. ESG disclosure requires Stage 1, 2 and 3 reporting and most retrofit solutions only provide compliance without financial returns. Organisations need an integrated partner that delivers both proven emissions reductions and measurable ROI.
          </p>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-3">
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>ESG reporting requires reliable, auditable data across direct and indirect emissions.</li>
                <li>Many solutions only solve compliance without improving OPEX or delivering ROI.</li>
                <li>Decision-makers need one partner to map, deliver, operate and prove emissions & savings.</li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow">
              <img src="/images/solutions/esg-challenges.webp" alt="ESG report overlay on smoky factory turning green" className="w-full h-64 object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Business Model (4 pillars) */}
      <section id="business-model" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-extrabold mb-4">The Saarthi business model</h2>
          <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
            We deliver measurable decarbonisation via four integrated pillars centered on GreenVision.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow text-left">
              <div className="font-semibold text-lg mb-2">1️⃣ Consulting — Strategy & ESG Alignment</div>
              <p className="text-slate-600">Map emissions, deploy GreenVision, align with GHG Protocol / ISO / IMO / CPCB and design roadmaps that balance emissions and ROI.</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow text-left">
              <div className="font-semibold text-lg mb-2">2️⃣ Products — Proven Technologies</div>
              <p className="text-slate-600">GreenDrive, GreenGen, GreenMarine and GreenVision combine to reduce emissions while saving fuel — immediate impact, verified outcomes.</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow text-left">
              <div className="font-semibold text-lg mb-2">3️⃣ Projects — Outcome-as-a-Service</div>
              <p className="text-slate-600">We install, operate and maintain solutions for a monthly fee — clients avoid capex and receive predictable results and verified fuel savings.</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow text-left">
              <div className="font-semibold text-lg mb-2">4️⃣ GreenLabs — Innovation Engine</div>
              <p className="text-slate-600">Applied R&D, OEM integrations and future-ready hydrogen systems ensure clients always get the best available tech with a clear upgrade path.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Why This Matters for ESG */}
      <section id="esg" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold mb-4">Why this matters for ESG</h2>
          <p className="text-slate-600 mb-6">Saarthi enables Stage 1-3 reporting with data-driven actions that reduce emissions and generate financial savings.</p>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-6 text-center">
              <div className="font-semibold mb-2">Stage 1 — Direct Emissions</div>
              <p className="text-slate-600">Track fuel use in DGs, vehicles and ships with GreenVision for auditable Scope 1 reporting.</p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6 text-center">
              <div className="font-semibold mb-2">Stage 2 — Indirect Energy</div>
              <p className="text-slate-600">Monitor site energy, HVAC and process loads to capture Scope 2 electricity/energy impacts.</p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6 text-center">
              <div className="font-semibold mb-2">Stage 3 — Value Chain</div>
              <p className="text-slate-600">Extend validated insights across your logistics and supply chain for full value-chain reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Why Choose Saarthi */}
      <section id="why-choose" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-4">Why choose Saarthi</h2>
          <p className="text-center text-slate-600 mb-8">We’re an outcome partner — not a parts vendor.</p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "End-to-End Partner", d: "From consulting to products, projects and R&D." },
              { t: "Dual ROI", d: "Emission compliance + direct fuel cost savings." },
              { t: "Global Frameworks", d: "GHG Protocol, ISO, EU MRV, IMO-ready reporting." },
              { t: "Recurring Value", d: "Outcome-as-a-Service model for predictable costs." },
              { t: "Future Ready", d: "GreenLabs keeps you ahead of regulation & competition." },
              { t: "Auditable Data", d: "GreenVision produces verifiable, investor-ready reports." },
            ].map((b) => (
              <div key={b.t} className="rounded-xl bg-white p-6 shadow text-left">
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
          <h3 className="text-2xl md:text-3xl font-extrabold">Decarbonisation with Proof, ROI, and Endless Possibilities.</h3>
          <p className="mt-3 text-lg text-white/90">Whether through Consulting, Products, Projects or GreenLabs, Saarthi GreenTech helps you cut emissions, save fuel, and deliver ESG reports that stand up to global scrutiny.</p>

          <div className="mt-6 flex justify-center gap-4">
            {/* <Link href="/contact" className="inline-flex items-center rounded-full bg-white/90 px-6 py-3 text-slate-900 font-semibold">Get Started Today</Link> */}
            <Link href="/contact" className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-white">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
