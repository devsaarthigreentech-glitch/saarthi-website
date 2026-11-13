import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Award,
  CheckCircle,
  Cpu,
  Droplets,
  Factory,
  Flame,
  Fuel,
  Gauge,
  Layers,
  Leaf,
  Settings,
  Shield,
  Wind,
  Zap,
} from "lucide-react";
import SavingsDisclaimer from "@/components/Shared/SavingsDisclaimer";
import {
  CLAIMS,
  CREDENTIALS,
  GREENEDGE_GE12,
  LINES,
  PHOTOS,
  ROUTES,
  TECHNOLOGY,
} from "@/data/siteContent";

const headlineStats = [
  { value: `${CLAIMS.greenedge.fuelSaving}*`, label: "fuel saving" },
  { value: "Lower smoke and PM", label: "at the chimney" },
  { value: "Lower CO₂", label: "in line with fuel saved" },
];

const costs = [
  {
    icon: Fuel,
    title: "Fuel that leaves as heat, not output",
    body: "Part of the fuel you fire never fully burns, and the extra air used to keep the flame stable carries heat straight up the stack.",
  },
  {
    icon: Wind,
    title: "Smoke at the chimney",
    body: "Incomplete combustion shows up as smoke and particulate matter — the part of your process that everyone outside the plant can see.",
  },
  {
    icon: Activity,
    title: "Carbon you cannot account for",
    body: "Every unit of fuel burned is CO₂ on your books. Without measured data, there is nothing to put in an ESG or BRSR report.",
  },
];

const steps = [
  {
    step: "1",
    title: "Made from water, on demand",
    body: "GreenEdge makes its gas from water at your site, as it is needed. Nothing is stored — no cylinders, no pressure vessels.",
  },
  {
    step: "2",
    title: "Dosed into the flame you already have",
    body: "A controlled dose acts as a combustion booster for your existing fuel. The burners and furnaces stay as they are, and so does the fuel.",
  },
  {
    step: "3",
    title: "A steadier flame, less excess air",
    body: GREENEDGE_GE12.howItHelps,
  },
  {
    step: "4",
    title: "Measured, not assumed",
    body: "GreenVision records fuel saved and CO₂ avoided, so the result is a number you can report.",
  },
];

const fuels = ["Gas", "Oil", "Coal", "Biomass"];

const ge12Facts = [
  {
    icon: Zap,
    title: `${GREENEDGE_GE12.power} · ${GREENEDGE_GE12.output}`,
    body: "One model, one building block.",
  },
  {
    icon: Layers,
    title: "Cluster arrays",
    body: GREENEDGE_GE12.cluster,
  },
  {
    icon: Cpu,
    title: "Power supply and controls",
    body: GREENEDGE_GE12.powerSupply,
  },
];

const engagement = [
  {
    step: "1",
    title: "Site assessment",
    body: "We look at your burners and furnaces, the fuel you fire, capacity and operating load.",
  },
  {
    step: "2",
    title: "Sizing",
    body: `We size the ${GREENEDGE_GE12.model} array to your combustion load.`,
  },
  {
    step: "3",
    title: "Installation and commissioning",
    body: "The system is fitted alongside your existing equipment and commissioned with your team.",
  },
  {
    step: "4",
    title: "Measurement",
    body: "Fuel saved and CO₂ avoided are tracked through GreenVision.",
  },
];

const applicationIcons = [Flame, Droplets, Factory, Settings, Zap];

const sitePhotos = [
  {
    ...PHOTOS.greenedgeFurnace,
    label: "GreenEdge unit and digital rectifier beside an industrial furnace",
  },
  { ...PHOTOS.greenedgeAssembly, label: "GreenEdge module in assembly" },
];

// The km figure belongs to GreenDrive only, so it is left out on this page.
const credentials = CREDENTIALS.filter((c) => !c.title.includes("km"));

const GreenEdgePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-gray-600">
            <Link href={ROUTES.home} className="hover:text-[#1B6B3D]">Home</Link> /{" "}
            <span>Solutions</span> / <span>Burners &amp; Furnaces</span> /{" "}
            <span className="text-gray-900 font-medium">GreenEdge</span>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-sm font-medium text-orange-700 mb-6">
                <Factory className="w-4 h-4 mr-2 shrink-0" />
                GreenEdge · Burners and furnaces · Any fuel
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {TECHNOLOGY.short} for industrial burners and furnaces,{" "}
                <span className="text-[#1B6B3D]">on any hydrocarbon fuel.</span>
              </h1>

              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                Gas, oil, coal or biomass. GreenEdge brings {TECHNOLOGY.name} to the burners
                and furnaces you already run, and helps them save fuel — for all industries,
                not only food processing.
              </p>

              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                This is not stored hydrogen. The gas is made from water, on demand, in
                controlled volumes, and used immediately.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href={ROUTES.contact}
                  className="inline-flex items-center bg-[#1B6B3D] hover:bg-[#155730] text-white font-semibold text-base px-8 py-4 rounded-md shadow-lg transition-colors"
                >
                  Talk to us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href={ROUTES.partners}
                  className="inline-flex items-center bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:border-[#1B6B3D] hover:text-[#1B6B3D] transition-all font-medium text-base"
                >
                  Become a partner
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-700">
                {[LINES.onDemand, "Any hydrocarbon fuel", CLAIMS.madeIn].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1B6B3D] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-6">
              <img
                src={PHOTOS.greenedgeSystem.src}
                alt={PHOTOS.greenedgeSystem.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Headline numbers */}
          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {headlineStats.map((stat) => (
              <div
                key={stat.value}
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
            <SavingsDisclaimer />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your burners and furnaces are not going anywhere
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The boilers, kilns and furnaces that run your process will not be replaced any
              time soon. The question is what they cost you while they run.
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

      {/* Solution: how it helps */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-bold mb-6">
                <Droplets className="w-4 h-4 mr-2" />
                {LINES.onDemand}
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                We do not replace your burners and furnaces. We make them burn better.
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

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-8">
                <p className="text-sm text-gray-900">
                  <strong>{LINES.control}</strong> Too little hydrogen does nothing, too much
                  does harm. The dose follows the load.
                </p>
              </div>
            </div>

            <div>
              <img
                src={PHOTOS.greenedgeFurnace.src}
                alt={PHOTOS.greenedgeFurnace.alt}
                loading="lazy"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* What you get */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#1B6B3D] rounded-2xl p-6">
              <Fuel className="w-10 h-10 text-[#1B6B3D] mb-4" />
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {CLAIMS.greenedge.fuelSaving} fuel saving*
              </p>
              <p className="text-sm text-gray-600">{GREENEDGE_GE12.howItHelps}</p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6 md:col-span-2">
              <Leaf className="w-10 h-10 text-[#1B6B3D] mb-4" />
              <p className="text-2xl font-bold text-gray-900 mb-1">Cleaner at the chimney</p>
              <p className="text-sm text-gray-600">{CLAIMS.greenedge.emissions}</p>
            </div>
          </div>
          <div className="mt-4">
            <SavingsDisclaimer />
          </div>
        </div>
      </section>

      {/* Any fuel */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Flame className="w-16 h-16 text-[#FFD700] mb-6" />
              <h2 className="text-4xl font-bold mb-6 text-white">
                Works with the fuel you already fire
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                GreenEdge works on any hydrocarbon fuel. There is no fuel switching, and no
                change to the burners and furnaces, or to the fuel.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {fuels.map((fuel) => (
                <div
                  key={fuel}
                  className="bg-gray-800 border-2 border-gray-700 rounded-lg px-6 py-5 hover:border-[#1B6B3D] transition-all"
                >
                  <p className="text-white font-semibold text-lg">{fuel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GE12 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-bold mb-6">
              <Gauge className="w-4 h-4 mr-2" />
              One model
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              GreenEdge {GREENEDGE_GE12.model}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A single module, sized up by clustering — so a small hot-water generator and a
              large furnace are served by the same building block.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ge12Facts.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-[#1B6B3D]/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#1B6B3D]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* How we work with you */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagement.map((item) => (
              <div
                key={item.step}
                className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200 h-full"
              >
                <div className="w-12 h-12 bg-[#1B6B3D] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-10">
            <p className="text-sm text-green-900">
              <strong>{CLAIMS.greenedge.roi}.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-bold mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Selected for the CII Ascent Grant 2026
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Measured at working plants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {CLAIMS.greenedge.validation}.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="grid sm:grid-cols-2 gap-6">
                {CLAIMS.greenedge.fieldTrials.map((trial) => (
                  <div
                    key={trial.asset}
                    className="bg-white border-2 border-[#1B6B3D] rounded-2xl p-8"
                  >
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">
                      Field trial
                    </p>
                    <p className="text-4xl font-bold text-[#1B6B3D] leading-none mb-2">
                      {trial.saving}*
                    </p>
                    <p className="text-sm font-semibold text-gray-900">fuel saving</p>
                    <p className="text-sm text-gray-600 mt-1">{trial.asset}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <SavingsDisclaimer />
              </div>
              <div className="mt-6 flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-6">
                <img
                  src={PHOTOS.ciiLogo.src}
                  alt={PHOTOS.ciiLogo.alt}
                  loading="lazy"
                  className="h-12 w-20 shrink-0 object-contain"
                />
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Selected for the CII Ascent Grant 2026.</strong> GreenEdge is
                  field-validated at customer sites under the grant.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {sitePhotos.map((photo) => (
                <figure
                  key={photo.src}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-56 object-cover"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Where GreenEdge works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Any industry that runs burners and furnaces, on any hydrocarbon fuel.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {GREENEDGE_GE12.applications.map((app, idx) => {
              const Icon = applicationIcons[idx] ?? Factory;
              return (
                <div
                  key={app}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-[#1B6B3D] hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-orange-600" />
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
            Tell us what you fire, in what, and for how many hours. We will size a GreenEdge
            system for your burners and furnaces.
          </p>

          {/* TODO(owner): add a "Download the GreenEdge brochure" button once the GE12 brochure is published. */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center bg-[#1B6B3D] hover:bg-[#155730] text-white px-10 py-4 rounded-lg text-lg font-bold transition-colors"
            >
              Talk to us <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
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

export default GreenEdgePage;
