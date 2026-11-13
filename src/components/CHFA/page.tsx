import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Cpu,
  Droplets,
  Factory,
  Flame,
  Gauge,
  Leaf,
  Truck,
  Wind,
  Zap,
} from "lucide-react";
import SavingsDisclaimer from "@/components/Shared/SavingsDisclaimer";
import {
  CLAIMS,
  GREENEDGE_GE12,
  LINES,
  PHOTOS,
  PLATFORM_LAYERS,
  PRODUCTS,
  ROUTES,
  TECHNOLOGY,
} from "@/data/siteContent";

const STEPS = [
  {
    icon: Droplets,
    title: "Hydrogen is made from water, on demand",
    body: "The unit makes hydrogen from water as it is needed, in small controlled volumes, and the gas is used immediately. Nothing is stored — no cylinders, no tanks of gas.",
  },
  {
    icon: Zap,
    title: "A small dose changes how the fuel burns",
    body: "The dose is under 5% of fuel energy. Hydrogen ignites sooner and burns about eight times faster, so peak heat arrives at the right crank angle and more work comes from every drop.",
  },
  {
    icon: Wind,
    title: "It burns off what would otherwise escape",
    body: "Hydrogen helps burn off soot that would otherwise leave through the exhaust. In burners and furnaces, a steadier flame needs less excess air.",
  },
  {
    icon: Gauge,
    title: "The dose follows the load",
    body: "Too little hydrogen does nothing. Too much does harm. The right amount changes as the load changes — which is why control is the technology.",
  },
  {
    icon: Leaf,
    title: "Less fuel burned means less CO₂",
    body: "All of it without changing the engine, the burner, the furnace or the fuel.",
  },
] as const;

const NOT_STORED = [
  { title: "No cylinders", body: "There is no stored hydrogen anywhere in the system." },
  { title: "No change of fuel", body: "Your engine, burner or furnace keeps running on the fuel it runs on today." },
  { title: "No replacement", body: "It is fitted to the equipment you already own." },
] as const;

const ENGINE_PRODUCTS = [PRODUCTS.greendrive, PRODUCTS.greenx, PRODUCTS.greenmarine];

const PROOF = [
  {
    title: "Patented technology",
    body: `Patent No. ${TECHNOLOGY.patentNo}, “${TECHNOLOGY.patentTitle}”.`,
  },
  { title: CLAIMS.arai.testing, body: "Engine R&D testing and work on test procedures." },
  { title: CLAIMS.arai.research, body: `${CLAIMS.arai.papers}.` },
  {
    title: CLAIMS.greendrive.tested,
    body: "Validated across multiple customer sites — fleets, DG sets, boilers and furnaces.",
  },
] as const;

export default function CHFATechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <p className="text-sm text-gray-600">
            <Link href={ROUTES.home} className="hover:text-[#1B6B3D]">
              Home
            </Link>{" "}
            / Technology / <span className="font-medium text-gray-900">CHFA Technology</span>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-green-300 bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                <Award className="mr-2 h-4 w-4" />
                PATENTED · PATENT NO. {TECHNOLOGY.patentNo}
              </div>

              <h1 className="mb-3 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                {TECHNOLOGY.full}
              </h1>
              <p className="mb-6 text-lg font-semibold text-[#1B6B3D]">{TECHNOLOGY.credit}</p>

              <p className="mb-4 text-2xl font-semibold text-gray-900">{LINES.onDemand}</p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                This is not hydrogen as a fuel, and it is not hydrogen in cylinders. A compact unit
                makes a small amount of hydrogen from water, exactly when it is needed, and feeds
                it in as a combustion booster — so the fuel you already buy burns more completely.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={ROUTES.contact}
                  className="inline-flex items-center rounded-md bg-[#1B6B3D] px-8 py-4 text-lg font-medium text-white transition-all hover:bg-[#155730]"
                >
                  Talk to us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href={ROUTES.sgtos}
                  className="inline-flex items-center rounded-md border-2 border-gray-300 bg-white px-8 py-4 text-lg font-medium text-gray-700 transition-all hover:border-[#1B6B3D] hover:text-[#1B6B3D]"
                >
                  How it is controlled
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-2xl">
                <img
                  src={PHOTOS.greendriveUnit.src}
                  alt={PHOTOS.greendriveUnit.alt}
                  loading="lazy"
                  className="h-full w-full object-contain p-6"
                />
              </div>
              <div className="absolute -bottom-6 left-4 rounded-xl border border-gray-100 bg-white p-5 shadow-2xl sm:-left-6">
                <p className="mb-1 text-sm text-gray-600">Hydrogen dose</p>
                <p className="text-3xl font-bold text-[#1B6B3D]">Under 5%</p>
                <p className="mt-1 text-xs text-gray-500">of fuel energy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not stored hydrogen */}
      <section className="bg-white pb-4 pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {NOT_STORED.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-[#1B6B3D]" />
                  <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                </div>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — five steps */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">How CHFA works</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Part of every litre of fuel never fully burns. A little hydrogen, at the right
              moment, changes that.
            </p>
          </div>

          <ol className="mx-auto max-w-4xl space-y-6">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="flex gap-6 rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-[#1B6B3D] hover:shadow-lg md:p-8"
                >
                  <div className="flex flex-shrink-0 flex-col items-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1B6B3D] text-2xl font-bold text-white">
                      {idx + 1}
                    </span>
                    <Icon className="mt-4 h-7 w-7 text-[#1B6B3D]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">{step.title}</h3>
                    <p className="text-lg leading-relaxed text-gray-600">{step.body}</p>
                    {idx === 3 && (
                      <Link
                        href={ROUTES.sgtos}
                        className="mt-4 inline-flex items-center font-semibold text-[#1B6B3D] hover:underline"
                      >
                        Meet SGT OS, the control layer <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* One platform, two applications */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              One technology. Two applications.
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">{LINES.onePlatform}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Engines */}
            <div className="flex flex-col rounded-2xl border-2 border-green-200 bg-white p-8">
              <div className="mb-4 flex items-center">
                <span className="mr-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1B6B3D]/10">
                  <Truck className="h-7 w-7 text-[#1B6B3D]" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Engines</h3>
                  <p className="text-sm text-gray-600">Diesel — on the road, in power, at sea</p>
                </div>
              </div>
              <p className="mb-6 text-gray-600">
                Metered hydrogen joins the air the engine already breathes. {CLAIMS.greendrive.install},
                with no engine modification and no change to wiring. {CLAIMS.norms}.
              </p>

              <ul className="mb-6 space-y-4">
                {ENGINE_PRODUCTS.map((p) => (
                  <li key={p.name}>
                    <Link
                      href={p.href}
                      className="group flex items-center justify-between rounded-xl border border-gray-200 p-4 transition-all hover:border-[#1B6B3D] hover:shadow-md"
                    >
                      <div>
                        <p className="font-bold text-gray-900">
                          {p.name}
                          {p.badge && (
                            <span className="ml-2 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-gray-900">
                              {p.badge}
                            </span>
                          )}
                        </p>
                        <p className="text-sm text-gray-600">{p.segment}</p>
                      </div>
                      <div className="ml-4 flex flex-shrink-0 items-center text-right">
                        <div>
                          <p className="text-lg font-bold text-[#1B6B3D]">{p.figure}</p>
                          <p className="text-xs text-gray-500">{p.figureLabel}</p>
                        </div>
                        <ArrowRight className="ml-3 h-5 w-5 text-gray-400 group-hover:text-[#1B6B3D]" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto rounded-xl bg-green-50 p-4 text-sm text-green-900">
                <p className="font-bold">
                  GreenDrive and GreenX: {CLAIMS.greendrive.pm} · {CLAIMS.greendrive.nox}
                </p>
                <p className="mt-1">{CLAIMS.co2}</p>
              </div>
            </div>

            {/* Burners and furnaces */}
            <div className="flex flex-col rounded-2xl border-2 border-yellow-200 bg-white p-8">
              <div className="mb-4 flex items-center">
                <span className="mr-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD700]/20">
                  <Flame className="h-7 w-7 text-[#1B6B3D]" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Burners and furnaces</h3>
                  <p className="text-sm text-gray-600">Any hydrocarbon fuel — gas, oil, coal or biomass</p>
                </div>
              </div>
              <p className="mb-6 text-gray-600">
                The same technology at industrial scale. {GREENEDGE_GE12.howItHelps} No fuel
                switching, and no replacement of the burner or the furnace.
              </p>

              <Link
                href={PRODUCTS.greenedge.href}
                className="group mb-6 flex items-center justify-between rounded-xl border border-gray-200 p-4 transition-all hover:border-[#1B6B3D] hover:shadow-md"
              >
                <div>
                  <p className="font-bold text-gray-900">{PRODUCTS.greenedge.name}</p>
                  <p className="text-sm text-gray-600">{PRODUCTS.greenedge.segment}</p>
                </div>
                <div className="ml-4 flex flex-shrink-0 items-center text-right">
                  <div>
                    <p className="text-lg font-bold text-[#1B6B3D]">{PRODUCTS.greenedge.figure}</p>
                    <p className="text-xs text-gray-500">{PRODUCTS.greenedge.figureLabel}</p>
                  </div>
                  <ArrowRight className="ml-3 h-5 w-5 text-gray-400 group-hover:text-[#1B6B3D]" />
                </div>
              </Link>

              <ul className="mb-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <Factory className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B6B3D]" />
                  <span>
                    One model, {GREENEDGE_GE12.model}: {GREENEDGE_GE12.power}, {GREENEDGE_GE12.output}.
                  </span>
                </li>
                <li className="flex items-start">
                  <Cpu className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B6B3D]" />
                  <span>{GREENEDGE_GE12.cluster}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B6B3D]" />
                  <span>For {GREENEDGE_GE12.applications.join(", ").toLowerCase()}.</span>
                </li>
              </ul>

              <div className="mt-auto rounded-xl bg-yellow-50 p-4 text-sm text-gray-900">
                <p className="font-bold">{CLAIMS.greenedge.emissions}</p>
              </div>
            </div>
          </div>

          <SavingsDisclaimer className="mt-6 text-center text-gray-500" />
        </div>
      </section>

      {/* Three platform layers */}
      <section className="bg-gradient-to-br from-green-800 to-[#1B6B3D] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">The platform, in three layers</h2>
            <p className="mx-auto max-w-3xl text-xl text-green-100">{LINES.equation}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {PLATFORM_LAYERS.map((layer, idx) => (
              <Link
                key={layer.layer}
                href={layer.href}
                className="group flex flex-col rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg transition-all hover:bg-white/15"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#FFD700]">
                  {idx + 1} · {layer.layer}
                </p>
                <h3 className="mb-3 text-2xl font-bold">{layer.title}</h3>
                <p className="mb-6 leading-relaxed text-green-100">{layer.body}</p>
                <span className="mt-auto inline-flex items-center font-semibold text-white group-hover:text-[#FFD700]">
                  {idx === 0 ? "You are here" : "Learn more"}
                  {idx !== 0 && <ArrowRight className="ml-1 h-4 w-4" />}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900">Engineered, tested, published</h2>
              <p className="mb-8 text-xl leading-relaxed text-gray-600">{LINES.core}</p>
              <ul className="space-y-5">
                {PROOF.map((item) => (
                  <li key={item.title} className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-[#1B6B3D]" />
                    <div>
                      <p className="font-bold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={PHOTOS.engineTestCell.src}
                alt={PHOTOS.engineTestCell.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">{LINES.saveCutProve}</h2>
          <p className="mb-8 text-xl text-gray-600">
            Tell us what you run — engines, or burners and furnaces — and we will show you where
            CHFA fits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center justify-center rounded-lg bg-[#1B6B3D] px-10 py-4 text-lg font-bold text-white transition-all hover:bg-[#155730]"
            >
              Schedule a consultation
            </Link>
            <Link
              href={ROUTES.partners}
              className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-10 py-4 text-lg font-bold text-gray-700 transition-all hover:border-[#1B6B3D] hover:text-[#1B6B3D]"
            >
              Become a partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
