import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Bus,
  CheckCircle,
  Cloud,
  Construction,
  Cpu,
  Download,
  Droplets,
  Fuel,
  Gauge,
  Handshake,
  Mountain,
  ShieldCheck,
  Thermometer,
  Truck,
  Wind,
  Wrench,
} from "lucide-react";
import {
  BROCHURES,
  CLAIMS,
  GREENDRIVE_FACTS,
  GREENDRIVE_MODELS,
  LINES,
  PHOTOS,
  PRODUCTS,
  ROUTES,
  TECHNOLOGY,
  VIDEOS,
} from "@/data/siteContent";
import SavingsDisclaimer from "@/components/Shared/SavingsDisclaimer";
import YouTubeEmbed from "@/components/Shared/YouTubeEmbed";
import CredentialsBlock from "@/components/Shared/CredentialsBlock";

const gd = CLAIMS.greendrive;

/**
 * Shows a fixed region of a photo. Offsets are percentages of the frame, so the
 * same region is shown at every screen size.
 */
function CroppedPhoto({
  src,
  alt,
  frame,
  width,
  left,
  anchor,
}: {
  src: string;
  alt: string;
  frame: string;
  width: string;
  left: string;
  anchor: { top: string } | { bottom: string };
}) {
  return (
    <div className={`relative overflow-hidden ${frame}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute h-auto max-w-none"
        style={{ width, left, ...anchor }}
      />
    </div>
  );
}

/** Close-up of the fitted unit, taken from the supplied truck pictures. */
const FITTED_UNIT_CROP = { width: "270%", left: "-5%", anchor: { top: "-5.3%" } } as const;

const headlineNumbers = [
  { value: gd.fuelSaving, label: "fuel saving*" },
  { value: gd.pm, label: "particulate matter" },
  { value: gd.nox, label: "nitrogen oxides" },
  { value: gd.km, label: "driven with GreenDrive" },
  { value: "Over three years", label: "tested on real engines" },
];

const problemCosts = [
  {
    icon: <Fuel className="w-7 h-7" />,
    title: "Fuel you pay for and never use",
    desc: "Part of every litre of diesel never fully burns. It leaves the engine as soot and smoke instead of turning into work at the wheels.",
  },
  {
    icon: <Wind className="w-7 h-7" />,
    title: "Exhaust that keeps getting harder to defend",
    desc: "Unburnt fuel is where particulate matter and visible smoke come from. Every vehicle on the road carries that with it, every day it runs.",
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "Carbon you cannot prove you reduced",
    desc: "ESG and BRSR reporting ask for evidence. Without measured data per vehicle, a carbon claim is only an estimate.",
  },
];

const systemParts = [
  {
    tag: "Hardware",
    name: "GreenDrive Energy Core",
    icon: <Droplets className="w-7 h-7" />,
    body: "A compact unit that generates hydrogen from DM water, on demand. Nothing is stored: gas is made in low, variable volumes, used immediately, and production stops with the engine.",
    points: [
      "Hydrogen made from DM water, on demand",
      "No gas storage, no pressure cylinders",
      "Cold-weather ready, vibration-proofed structure",
    ],
    href: ROUTES.chfa,
    linkLabel: "How CHFA works",
  },
  {
    tag: "Control",
    name: "SGT OS",
    icon: <Cpu className="w-7 h-7" />,
    body: "Handles safety, operation, support & maintenance, and data recording. When the vehicle's CAN interface is active, it dynamically varies hydrogen flow with engine RPM and load; otherwise it runs at an optimal constant flow set on the system.",
    points: [
      "Hydrogen flow follows engine RPM and load",
      "On-site app over Bluetooth, no network needed",
      "Guided setup and health diagnostics",
    ],
    href: ROUTES.sgtos,
    linkLabel: "Explore SGT OS",
  },
  {
    tag: "Software",
    name: "GreenVision",
    icon: <Cloud className="w-7 h-7" />,
    body: `Cloud platform over ${CLAIMS.connectivity}: fuel saved, CO₂ avoided, system health, real-time alerts, and route and fleet views. An authentic MRV layer from which you can generate your own carbon-saving records.`,
    points: [
      "Fuel saved and CO₂ avoided, per vehicle",
      "Real-time alerts, route and fleet views",
      "MRV layer for your own carbon-saving records",
    ],
    href: ROUTES.greenvision,
    linkLabel: "Explore GreenVision",
  },
];

const safetyPoints = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "No gas storage",
    desc: "Gas is produced only on demand, in low, variable volumes, and stops with the engine.",
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "Multiple maker-checker safety checks",
    desc: "Pressure, temperature, excess current, low battery and more, all handled by SGT OS.",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Full telemetry",
    desc: "Complete logs and real-time alerts mean less downtime and rapid service.",
  },
];

const benefits = [
  {
    icon: <Fuel className="w-8 h-8" />,
    title: "Saves diesel",
    desc: `${gd.fuelSaving} fuel saving*, measured per vehicle in GreenVision.`,
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Cleaner exhaust",
    desc: `${gd.pm} and ${gd.nox}. ${CLAIMS.co2}`,
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Engine life",
    desc: "Engine life typically improves with continuous decarbonisation and low PM.",
  },
  {
    icon: <Thermometer className="w-8 h-8" />,
    title: "Lower exhaust-gas heat",
    desc: "Lower exhaust-gas heat brings NOx down.",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Smoother drive",
    desc: "A smoother drive for the people behind the wheel.",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Return on investment",
    desc: `${gd.roi}.`,
  },
];

const fitmentPoints = [
  "Compact enough to mount anywhere on the vehicle frame",
  "Most commonly beside the fuel tank, or beside the battery, or wherever space allows",
  "No change to engine or wiring",
  "Start/stop from alternator signal or battery-charging data",
  "Optional accessory: auxiliary water tank refilled from the driver's cabin",
];

const otherFacts = [
  gd.warranty,
  CLAIMS.norms,
  CLAIMS.madeIn,
  "Cold-weather ready, vibration-proofed structure",
];

const applicationIcons = [
  <Truck key="truck" className="w-7 h-7" />,
  <Bus key="bus" className="w-7 h-7" />,
  <Mountain key="quarry" className="w-7 h-7" />,
  <Construction key="construction" className="w-7 h-7" />,
];

const modelRows: { label: string; key: "system" | "use" | "size" | "weight" | "tank" }[] = [
  { label: "Vehicle system", key: "system" },
  { label: "Typical use", key: "use" },
  { label: "Size (L × W × H)", key: "size" },
  { label: "Weight empty / filled", key: "weight" },
  { label: "Water tank", key: "tank" },
];

const GreenDrivePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-gray-600">
            <Link href={ROUTES.home} className="hover:text-[#1B6B3D]">Home</Link> /{" "}
            <Link href="/solutions" className="hover:text-[#1B6B3D]">Solutions</Link> /{" "}
            <span className="text-gray-900 font-medium">GreenDrive</span>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#0A140F]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(27,107,61,0.45) 0%, rgba(10,20,15,0) 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center self-start px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6">
              <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2 animate-pulse shrink-0" />
              {PRODUCTS.greendrive.segment} · {LINES.onDemand}
            </div>

            <h1 className="text-3xl xl:text-4xl font-bold text-white mb-5 leading-[1.1] tracking-tight">
              GreenDrive: hydrogen fuel assist for the{" "}
              <span className="text-[#4ADE80]">diesel vehicles you already run</span>
            </h1>

            <p className="text-lg text-white/80 mb-3 leading-relaxed max-w-xl">
              {PRODUCTS.greendrive.oneLiner}
            </p>

            <p className="text-base text-white/65 mb-8 leading-relaxed max-w-xl">
              This is not stored hydrogen. There are no cylinders and no fuel cells: a small,
              controlled volume of gas is made from water while the engine runs, and used
              immediately as a combustion booster.
            </p>

            <div className="flex flex-wrap gap-4 mb-9">
              <Link
                href={ROUTES.contact}
                className="inline-flex items-center bg-[#1B6B3D] hover:bg-[#155730] text-white font-semibold text-base px-8 py-4 rounded-md shadow-lg transition-colors"
              >
                Request a fleet assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href={BROCHURES.greendrive.href}
                download
                className="inline-flex items-center bg-white/10 border border-white/30 backdrop-blur-sm hover:bg-white/20 text-white font-medium text-base px-8 py-4 rounded-md transition-colors"
              >
                <Download className="mr-2 w-5 h-5" />
                Download the GreenDrive brochure
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/75">
              {[`${gd.fuelSaving} fuel saving*`, gd.kmLabel, gd.install].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <SavingsDisclaimer className="mt-4 text-white/55" />
          </div>

          <div className="relative">
            <CroppedPhoto
              src={PHOTOS.greendriveTruck.src}
              alt="GreenDrive unit mounted on a truck frame"
              frame="aspect-[4/3] rounded-2xl shadow-2xl border border-white/20"
              {...FITTED_UNIT_CROP}
            />
            <div className="absolute -bottom-5 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-2xl border border-white/60">
              <p className="text-sm text-gray-500 font-medium">Fuel saving*</p>
              <p className="text-3xl font-bold text-[#1B6B3D] leading-none">{gd.fuelSaving}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Headline numbers */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {headlineNumbers.map((n) => (
              <div key={n.label}>
                <p className="text-2xl lg:text-3xl font-bold text-[#1B6B3D] mb-2">{n.value}</p>
                <p className="text-gray-600 text-sm">{n.label}</p>
              </div>
            ))}
          </div>
          <SavingsDisclaimer className="mt-8 text-center text-gray-500" />
        </div>
      </section>

      {/* The problem and what it costs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your diesel fleet is not going away
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The world&apos;s trucks, buses and earthmovers won&apos;t be replaced any time
              soon, and part of every litre of fuel they burn never fully burns. Left alone,
              that costs you three ways.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problemCosts.map((c) => (
              <div
                key={c.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#1B6B3D] hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-[#1B6B3D]/10 rounded-xl flex items-center justify-center mb-4 text-[#1B6B3D]">
                  {c.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The solution and the film */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex px-4 py-2 bg-[#1B6B3D]/10 rounded-full text-[#1B6B3D] text-sm font-bold mb-6">
                {TECHNOLOGY.credit}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Keep the engine. Make it burn cleaner.
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                GreenDrive is built on patented {TECHNOLOGY.name} ({TECHNOLOGY.short}) Technology.
                Hydrogen is made from water, on demand, with nothing stored, and dosed precisely
                into the engine&apos;s air intake as a combustion booster, so more of every litre
                is burnt.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  `${gd.install}, with no engine modification and no change to wiring`,
                  "The dose follows the load: too little does nothing, too much does harm",
                  "Every litre saved is measured and recorded in GreenVision",
                ].map((point) => (
                  <div key={point} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#1B6B3D] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{point}</span>
                  </div>
                ))}
              </div>
              <Link
                href={ROUTES.chfa}
                className="inline-flex items-center text-[#1B6B3D] font-bold text-lg hover:underline"
              >
                How {TECHNOLOGY.short} Technology works
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div>
              <YouTubeEmbed
                youtubeId={VIDEOS.greendrive.youtubeId}
                title={VIDEOS.greendrive.title}
              />
              <p className="mt-4 text-sm text-gray-600">{VIDEOS.greendrive.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The GreenDrive System: three parts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The GreenDrive System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not a box on the chassis, but an ecosystem of three parts that work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {systemParts.map((part, idx) => (
              <div
                key={part.name}
                className="bg-white border-2 border-[#1B6B3D]/30 rounded-2xl p-6 hover:shadow-2xl hover:border-[#1B6B3D] transition-all flex flex-col"
              >
                <div className="inline-flex self-start px-3 py-1 bg-green-100 rounded-full text-green-800 text-xs font-bold mb-4 uppercase">
                  {idx + 1} · {part.tag}
                </div>
                <div className="w-14 h-14 bg-[#1B6B3D]/10 rounded-xl flex items-center justify-center mb-4 text-[#1B6B3D]">
                  {part.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{part.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{part.body}</p>
                <ul className="space-y-2 mb-6 text-sm">
                  {part.points.map((p) => (
                    <li key={p} className="flex items-start text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#1B6B3D] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={part.href}
                  className="mt-auto inline-flex items-center justify-center w-full bg-[#1B6B3D] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-800 transition-all"
                >
                  {part.linkLabel}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-lg font-semibold text-gray-900">
            {LINES.equation}
          </p>
        </div>
      </section>

      {/* Safety, as part of how the system is built */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-bold mb-6">
                <ShieldCheck className="w-4 h-4 mr-2" />
                {LINES.onDemand}
              </div>
              <h2 className="text-3xl font-bold mb-6">{LINES.control}</h2>
              <p className="text-xl text-gray-300 mb-8">
                Safety is not an add-on. It follows from how the system works: hydrogen exists
                only while the engine runs, in small controlled volumes, and SGT OS watches every
                reading that matters.
              </p>

              <div className="space-y-6">
                {safetyPoints.map((s) => (
                  <div key={s.title} className="flex items-start">
                    <div className="w-10 h-10 bg-[#1B6B3D]/30 rounded-lg flex items-center justify-center text-[#FFD700] mr-4 shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{s.title}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <img
                src={PHOTOS.greendriveUnit.src}
                alt={PHOTOS.greendriveUnit.alt}
                loading="lazy"
                className="w-full max-w-md mx-auto"
              />
              <p className="mt-4 text-center text-sm text-gray-600">
                The GreenDrive Energy Core: a compact unit with a 5 L water tank.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What it does for your fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{LINES.saveCutProve}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#1B6B3D] hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-[#1B6B3D]/10 rounded-xl flex items-center justify-center mb-4 text-[#1B6B3D]">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <SavingsDisclaimer className="text-center text-gray-500" />
            <Link
              href={ROUTES.calculator}
              className="inline-flex items-center text-[#1B6B3D] font-bold text-lg hover:underline"
            >
              Estimate your fleet&apos;s saving with the calculator
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fitment and running input */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {gd.install}, wherever there is space
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                GreenDrive is a retrofit. The vehicle keeps its engine, its wiring and its duty
                cycle.
              </p>
              <div className="space-y-4 mb-10">
                {fitmentPoints.map((point) => (
                  <div key={point} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#1B6B3D] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{point}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#1B6B3D]/10 to-white rounded-2xl p-8 border-2 border-[#1B6B3D]">
                <div className="flex items-center mb-4">
                  <Droplets className="w-7 h-7 text-[#1B6B3D] mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Running input: DM water, almost free to operate
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{GREENDRIVE_FACTS.water}</p>
              </div>

              <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 flex items-start">
                <AlertTriangle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-900">
                  <strong>Use DM water only.</strong> {GREENDRIVE_FACTS.waterWarning}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <figure>
                <CroppedPhoto
                  src={PHOTOS.malaysia1.src}
                  alt="GreenDrive unit fitted on a truck chassis during installation, Malaysia"
                  frame="aspect-video rounded-xl shadow-2xl"
                  width="130%"
                  left="-30%"
                  anchor={{ bottom: "0%" }}
                />
                <figcaption className="mt-2 text-sm text-gray-600">
                  Unit mounted on the vehicle frame. Installation, Malaysia.
                </figcaption>
              </figure>
              <figure>
                <img
                  src={PHOTOS.malaysia2.src}
                  alt={PHOTOS.malaysia2.alt}
                  loading="lazy"
                  className="w-full rounded-xl shadow-2xl"
                />
                <figcaption className="mt-2 text-sm text-gray-600">
                  Connecting the unit on site. Installation, Malaysia.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Three models, one platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chosen by the vehicle&apos;s electrical system and engine size.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="bg-[#1B6B3D] text-white">
                  <th scope="col" className="px-6 py-4 text-sm font-semibold">
                    <span className="sr-only">Specification</span>
                  </th>
                  {GREENDRIVE_MODELS.map((m) => (
                    <th key={m.name} scope="col" className="px-6 py-4 text-lg font-bold">
                      {m.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {modelRows.map((row) => (
                  <tr key={row.key} className="border-t border-gray-200 align-top">
                    <th scope="row" className="px-6 py-4 text-sm font-semibold text-gray-900 bg-gray-50">
                      {row.label}
                    </th>
                    {GREENDRIVE_MODELS.map((m) => (
                      <td key={m.name} className="px-6 py-4 text-sm text-gray-700">
                        {m[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherFacts.map((fact) => (
              <div
                key={fact}
                className="bg-white rounded-xl p-4 border border-gray-200 flex items-start"
              >
                <CheckCircle className="w-5 h-5 text-[#1B6B3D] mr-3 mt-0.5 flex-shrink-0" />
                <span className="font-semibold text-gray-900 text-sm">{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Where GreenDrive works
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A global product for diesel vehicles on the road and on site.{" "}
                {CLAIMS.norms}.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {GREENDRIVE_FACTS.applications.map((app, idx) => (
                  <div
                    key={app}
                    className="bg-white border-2 border-[#1B6B3D]/30 rounded-2xl p-6 hover:shadow-2xl hover:border-[#1B6B3D] transition-all"
                  >
                    <div className="w-14 h-14 bg-[#1B6B3D]/10 rounded-xl flex items-center justify-center mb-4 text-[#1B6B3D]">
                      {applicationIcons[idx]}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{app}</h3>
                  </div>
                ))}
              </div>
            </div>

            <figure>
              <CroppedPhoto
                src={PHOTOS.greendriveQuarry.src}
                alt="GreenDrive unit fitted beside the fuel tank of a quarry truck"
                frame="aspect-[4/3] rounded-xl shadow-2xl"
                {...FITTED_UNIT_CROP}
              />
              <figcaption className="mt-2 text-sm text-gray-600">
                Fitted beside the fuel tank on a quarry truck.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <CredentialsBlock
            heading="Proven on real engines, on real roads"
            intro={`${gd.tested}. ${gd.kmLabel}. ${CLAIMS.arai.testing}. ${CLAIMS.arai.research}.`}
          />

          {/* TODO(owner): confirm before adding here — engine-lab test at a leading engine
              manufacturer's own lab; third-party product liability insurance cover. */}
          <div className="mt-10 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <p className="text-sm font-semibold text-blue-900 mb-1">Regulatory position</p>
            <p className="text-blue-900 leading-relaxed">{GREENDRIVE_FACTS.regulatory}</p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Find out what your fleet could save
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Tell us about your vehicles and duty cycle. We will assess the fleet, recommend the
            right model and show you how the saving is measured.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center bg-[#1B6B3D] text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-green-800 transition-all"
            >
              Request a fleet assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href={BROCHURES.greendrive.href}
              download
              className="inline-flex items-center bg-white border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-lg text-lg font-bold hover:border-[#1B6B3D] hover:text-[#1B6B3D] transition-all"
            >
              <Download className="mr-2 w-5 h-5" />
              Download the GreenDrive brochure
            </a>
            <Link
              href={ROUTES.partners}
              className="inline-flex items-center bg-white border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-lg text-lg font-bold hover:border-[#1B6B3D] hover:text-[#1B6B3D] transition-all"
            >
              <Handshake className="mr-2 w-5 h-5" />
              Become a partner
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-[#1B6B3D] mb-2">{gd.fuelSaving}</p>
              <p className="text-gray-600">fuel saving*</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#1B6B3D] mb-2">{gd.km}</p>
              <p className="text-gray-600">driven with GreenDrive</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1B6B3D] mb-2 md:mt-2">{gd.roi}</p>
              <p className="text-gray-600">return on investment</p>
            </div>
          </div>
          <SavingsDisclaimer className="mt-8 text-center text-gray-500" />
        </div>
      </section>
    </div>
  );
};

export default GreenDrivePage;
