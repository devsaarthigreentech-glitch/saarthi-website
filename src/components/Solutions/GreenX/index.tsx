import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Award,
  Building2,
  CheckCircle,
  Cpu,
  Download,
  Droplets,
  Factory,
  Fuel,
  Gauge,
  Hospital,
  Leaf,
  RadioTower,
  Server,
  Settings,
  Shield,
  Truck,
  Wind,
  Zap,
} from "lucide-react";
import SavingsDisclaimer from "@/components/Shared/SavingsDisclaimer";
import YouTubeEmbed from "@/components/Shared/YouTubeEmbed";
import {
  BROCHURES,
  CLAIMS,
  CREDENTIALS,
  GREENX_APPLICATIONS,
  GREENX_UNITS,
  LINES,
  PHOTOS,
  ROUTES,
  TECHNOLOGY,
  VIDEOS,
} from "@/data/siteContent";

const headlineStats = [
  { value: `${CLAIMS.greenx.fuelSaving}*`, label: "fuel saving" },
  { value: CLAIMS.greenx.pm, label: "particulate matter at the exhaust" },
  { value: CLAIMS.greenx.nox, label: "nitrogen oxides at the exhaust" },
  { value: "125–1,500 kVA", label: "DG sets field-tested, multiple makes" },
];

const costs = [
  {
    icon: Fuel,
    title: "Diesel you pay for but never use",
    body: "Part of every litre of fuel never fully burns. On a generator that runs for hours every day, that loss repeats with every running hour.",
  },
  {
    icon: Wind,
    title: "Smoke at the exhaust",
    body: "Fuel that does not burn completely leaves as soot and particulate matter — visible at the stack and around the DG yard.",
  },
  {
    icon: Activity,
    title: "Carbon you cannot account for",
    body: "Every litre burned is CO₂ on your books. Without measured data, there is nothing to put in an ESG or BRSR report.",
  },
];

const steps = [
  {
    step: "1",
    title: "Made from water, on demand",
    body: "The GreenX unit makes hydrogen from water, on demand, in small controlled volumes. Nothing is stored — no cylinders, no pressure vessels.",
  },
  {
    step: "2",
    title: "Metered into the air intake",
    body: "A small, controlled dose joins the intake air through a gas mixer. No engine modification and no change to wiring.",
  },
  {
    step: "3",
    title: "Diesel burns more completely",
    body: "Hydrogen acts as a combustion booster, so more of each litre becomes power and less leaves as soot.",
  },
  {
    step: "4",
    title: "Measured, not assumed",
    body: "GreenVision records fuel saved and CO₂ avoided, so the result is a number you can report.",
  },
];

const platform = [
  {
    icon: Zap,
    layer: "Hardware",
    title: "The GreenX unit",
    body: "The same unit design as GreenDrive, built around the patented CHFA electrolyser. GreenX adds RS485 inputs.",
  },
  {
    icon: Cpu,
    layer: "Control",
    title: "SGT OS",
    body: "Handles safety, operation, support and data recording — with checks on pressure, temperature, excess current and low battery, complete logs and real-time alerts.",
    href: ROUTES.sgtos,
  },
  {
    icon: Gauge,
    layer: "Software",
    title: "GreenVision",
    body: `Cloud platform over ${CLAIMS.connectivity}: fuel saved, CO₂ avoided, system health and real-time alerts. MRV-ready for ESG/BRSR reporting and carbon credits.`,
    href: ROUTES.greenvision,
  },
];

const applicationIcons = [Factory, Truck, Hospital, Server, RadioTower, Building2];

const sitePhotos = [
  { ...PHOTOS.greenxSiteUnits, label: "GreenX units fitted inside a DG enclosure" },
  { ...PHOTOS.greenxGasMixer, label: "Gas mixer on the DG air intake" },
];

// The km figure belongs to GreenDrive only, so it is left out on this page.
const credentials = CREDENTIALS.filter((c) => !c.title.includes("km"));

const GreenXPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-gray-600">
            <Link href={ROUTES.home} className="hover:text-[#1B6B3D]">Home</Link> /{" "}
            <span>Solutions</span> / <span>Engines</span> /{" "}
            <span className="text-gray-900 font-medium">GreenX</span>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-sm font-medium text-green-800 mb-6">
                <Settings className="w-4 h-4 mr-2 shrink-0" />
                GreenX · Power · Diesel generator sets
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The same CHFA platform,{" "}
                <span className="text-[#1B6B3D]">applied to DG sets.</span>
              </h1>

              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                GreenX brings {TECHNOLOGY.name} to the diesel generators you already run. It
                helps them save fuel and run cleaner — installed in hours, with no engine
                modification.
              </p>

              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                This is not stored hydrogen. The gas is made from water, on demand, in small
                controlled volumes, and used immediately.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href={ROUTES.contact}
                  className="inline-flex items-center bg-[#1B6B3D] hover:bg-[#155730] text-white font-semibold text-base px-8 py-4 rounded-md shadow-lg transition-colors"
                >
                  Talk to us about your DG sets
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href={BROCHURES.greenx.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:border-[#1B6B3D] hover:text-[#1B6B3D] transition-all font-medium text-base"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download the GreenX brochure
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-700">
                {["Made on demand. Never stored.", CLAIMS.greendrive.install, CLAIMS.madeIn].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1B6B3D] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <img
                src={PHOTOS.greenxWithDg.src}
                alt={PHOTOS.greenxWithDg.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Headline numbers */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {headlineStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                <p className="text-2xl lg:text-3xl font-bold text-[#1B6B3D] leading-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-1">
              {CLAIMS.greenx.study}. {CLAIMS.co2}
            </p>
            <SavingsDisclaimer />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your generators are not going anywhere
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diesel generators keep plants, hospitals, data centres and telecom sites running,
              and they will not be replaced any time soon. The question is what they cost you
              while they run.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {costs.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution: how it works */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-bold mb-6">
                <Droplets className="w-4 h-4 mr-2" />
                {LINES.onDemand}
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                We do not replace the generator. We make it burn better.
              </h2>
              <p className="text-sm font-semibold text-[#1B6B3D] mb-6">
                {TECHNOLOGY.full} · {TECHNOLOGY.credit}
              </p>

              <div className="space-y-5">
                {steps.map((s) => (
                  <div key={s.step} className="flex items-start">
                    <div className="w-10 h-10 bg-[#1B6B3D] rounded-full flex items-center justify-center mr-4 shrink-0">
                      <span className="text-lg font-bold text-white">{s.step}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{s.title}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-8">
                <p className="text-sm text-green-900">
                  <strong>{LINES.control}</strong> Too little hydrogen does nothing, too much
                  does harm. SGT OS keeps the dose where it belongs.
                </p>
              </div>
            </div>

            <div>
              <img
                src={PHOTOS.greenxSchematic.src}
                alt={PHOTOS.greenxSchematic.alt}
                loading="lazy"
                className="w-full rounded-2xl shadow-2xl bg-white"
              />
            </div>
          </div>

          {/* What you get */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#1B6B3D] rounded-2xl p-6">
              <Fuel className="w-10 h-10 text-[#1B6B3D] mb-4" />
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {CLAIMS.greenx.fuelSaving} fuel saving*
              </p>
              <p className="text-sm text-gray-600">
                Less diesel for the same power, every running hour.
              </p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6">
              <Wind className="w-10 h-10 text-[#1B6B3D] mb-4" />
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {CLAIMS.greenx.pm} · {CLAIMS.greenx.nox}
              </p>
              <p className="text-sm text-gray-600">Cleaner exhaust at the stack.</p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6">
              <Leaf className="w-10 h-10 text-[#1B6B3D] mb-4" />
              <p className="text-2xl font-bold text-gray-900 mb-1">Lower CO₂</p>
              <p className="text-sm text-gray-600">{CLAIMS.co2}</p>
            </div>
          </div>
          <div className="mt-4">
            <SavingsDisclaimer />
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The platform that runs on diesel vehicles, now on your DG sets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GreenX uses the same unit design, SGT OS and GreenVision as GreenDrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platform.map(({ icon: Icon, layer, title, body, href }) => (
              <div
                key={title}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="w-14 h-14 bg-[#1B6B3D]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#1B6B3D]" />
                </div>
                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">{layer}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{body}</p>
                {href && (
                  <Link
                    href={href}
                    className="mt-auto inline-flex items-center text-sm font-semibold text-[#1B6B3D] hover:underline"
                  >
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Units and sizing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={PHOTOS.greenxUnit.src}
                alt={PHOTOS.greenxUnit.alt}
                loading="lazy"
                className="w-full max-w-md mx-auto"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sized to your generator</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                GreenX is built from two base units. Each DG set gets one, two or more of them,
                depending on its air intakes and engine size.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {GREENX_UNITS.map((unit) => (
                  <div
                    key={unit.name}
                    className="bg-white border-2 border-green-200 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{unit.name}</h3>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Size</p>
                    <p className="text-sm text-gray-700 mb-3">{unit.size}</p>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Weight</p>
                    <p className="text-sm text-gray-700">{unit.weight}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#1B6B3D] mr-3 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Named by DG capacity</p>
                    <p className="text-sm text-gray-600">
                      Each system is identified by the capacity of the generator it serves —
                      for example, “GreenX-100” — because each capacity has its own settings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#1B6B3D] mr-3 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{CLAIMS.greendrive.install}</p>
                    <p className="text-sm text-gray-600">
                      No engine modification and no change to wiring.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#1B6B3D] mr-3 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{CLAIMS.greenx.roi}</p>
                    <p className="text-sm text-gray-600">
                      The more hours your generator runs, the more there is to save.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-bold mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              {CLAIMS.greenx.status}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven on working DG sets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {CLAIMS.greenx.range}. {CLAIMS.greenx.study}.
            </p>
          </div>

          {/* TODO(owner): supply the side-by-side DG exhaust photo (without / with GreenX) named in the brief; it is not among the November 2026 photos. */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <YouTubeEmbed youtubeId={VIDEOS.greenx.youtubeId} title={VIDEOS.greenx.title} />
              <p className="text-sm text-gray-600 mt-3">Watch the GreenX film.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
              {sitePhotos.map((photo) => (
                <figure
                  key={photo.src}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                  <figcaption className="px-4 py-3 text-sm font-medium text-gray-700">
                    {photo.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((c) => (
              <li
                key={c.title}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1B6B3D]/10">
                  <Award className="h-5 w-5 text-[#1B6B3D]" />
                </span>
                <div>
                  <p className="font-bold leading-snug text-gray-900 text-sm">{c.title}</p>
                  {c.detail && (
                    <p className="mt-1 text-xs leading-relaxed text-gray-600">{c.detail}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Where GreenX works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wherever a diesel generator carries the load.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {GREENX_APPLICATIONS.map((app, idx) => {
              const Icon = applicationIcons[idx] ?? Factory;
              return (
                <div
                  key={app}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-[#1B6B3D] hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-[#1B6B3D]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#1B6B3D]" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{app}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-14 h-14 text-[#FFD700] mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-white">{LINES.saveCutProve}</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Tell us the capacity and make of your DG sets and how many hours they run. We will
            size a GreenX system for them. {CLAIMS.greenx.roi}.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center bg-[#1B6B3D] hover:bg-[#155730] text-white px-10 py-4 rounded-lg text-lg font-bold transition-colors"
            >
              Talk to us <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href={BROCHURES.greenx.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-gray-900 px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#FFD700] transition-colors"
            >
              <Download className="mr-2 w-5 h-5" />
              Download the brochure
            </a>
            <Link
              href={ROUTES.partners}
              className="inline-flex items-center border-2 border-white/40 text-white px-10 py-4 rounded-lg text-lg font-bold hover:border-[#FFD700] hover:text-[#FFD700] transition-colors"
            >
              Become a partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreenXPage;
