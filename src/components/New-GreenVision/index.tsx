import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bell,
  CheckCircle,
  Cloud,
  Cpu,
  FileText,
  Fuel,
  Leaf,
  Map as MapIcon,
  Radio,
} from "lucide-react";
import YouTubeEmbed from "@/components/Shared/YouTubeEmbed";
import { CLAIMS, LINES, PLATFORM_LAYERS, PRODUCTS, ROUTES, VIDEOS } from "@/data/siteContent";

const MESSAGES = [
  {
    icon: Fuel,
    title: "Fuel saved",
    body: "Every litre saved, measured.",
  },
  {
    icon: Leaf,
    title: "CO₂ avoided",
    body: "Every tonne of CO₂ avoided, counted in line with the fuel saved.",
  },
  {
    icon: Activity,
    title: "System health",
    body: "Know that every unit is running as it should.",
  },
  {
    icon: Bell,
    title: "Real-time alerts",
    body: "Hear about an issue when it happens — less downtime, rapid service.",
  },
  {
    icon: MapIcon,
    title: "Route and fleet views",
    body: "See a single vehicle's journey, or the whole fleet at once.",
  },
  {
    icon: FileText,
    title: "ESG/BRSR reporting",
    body: "Measured data, ready for your ESG and BRSR reporting.",
  },
] as const;

const FLOW = [
  {
    icon: Cpu,
    title: "SGT OS records",
    body: "The control layer on the unit keeps full telemetry and complete logs.",
  },
  {
    icon: Radio,
    title: `${CLAIMS.connectivity} carries it`,
    body: `Data goes from the unit to GreenVision over ${CLAIMS.connectivity}.`,
  },
  {
    icon: Cloud,
    title: "GreenVision reads it",
    body: "The cloud platform turns it into fuel saved, CO₂ avoided, health and alerts.",
  },
] as const;

const SERVED = [PRODUCTS.greendrive, PRODUCTS.greenx, PRODUCTS.greenmarine, PRODUCTS.greenedge];

export default function GreenVisionPlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-green-300 bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-600" />
                GREENVISION · THE DATA LAYER
              </div>

              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                {LINES.measure}
              </h1>

              <p className="mb-4 text-2xl font-semibold text-[#1B6B3D]">{LINES.greenVision}</p>

              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                GreenVision is SGT HydroEdge&apos;s cloud platform, connected to your systems over{" "}
                {CLAIMS.connectivity}. It measures every litre saved
                and every tonne of CO₂ avoided, across every product we make — so a saving is
                something you can show, not something you are told.
              </p>

              <div className="mb-8 border-l-4 border-[#1B6B3D] bg-green-50 p-6">
                <div className="space-y-2 text-sm text-green-800">
                  {[
                    "Fuel saved and CO₂ avoided",
                    "System health and real-time alerts",
                    "ESG/BRSR reporting",
                    "MRV-ready for carbon credits",
                  ].map((item) => (
                    <div key={item} className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={ROUTES.contact}
                  className="inline-flex items-center rounded-md bg-[#1B6B3D] px-8 py-4 text-lg font-medium text-white transition-all hover:bg-[#155730]"
                >
                  Request a GreenVision demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <YouTubeEmbed youtubeId={VIDEOS.greendrive.youtubeId} title={VIDEOS.greendrive.title} />
              <p className="mt-3 text-sm text-gray-500">{VIDEOS.greendrive.description}</p>
              {/* TODO(owner): supply GreenVision dashboard and SGT OS app screenshots with customer data masked */}
            </div>
          </div>
        </div>
      </section>

      {/* What GreenVision shows */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">What GreenVision shows you</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">{LINES.saveCutProve}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {MESSAGES.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-[#1B6B3D] hover:shadow-lg"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-[#1B6B3D]/10">
                    <Icon className="h-8 w-8 text-[#1B6B3D]" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{m.title}</h3>
                  <p className="text-gray-600">{m.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MRV */}
      <section className="bg-gradient-to-br from-green-800 to-[#1B6B3D] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white">
                <BadgeCheck className="mr-2 h-4 w-4" />
                MRV-ready for carbon credits
              </div>
              <h2 className="mb-6 text-4xl font-bold">Your carbon savings, on your own record</h2>
              <p className="text-xl leading-relaxed text-green-100">
                GreenVision is an authentic MRV layer — measurement, reporting and verification —
                from which you can generate your own carbon-saving records.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg">
              <ul className="space-y-5">
                {[
                  { t: "Measured", d: "Fuel saved and CO₂ avoided, taken from each system's own data." },
                  { t: "Reported", d: "In a form you can use for ESG and BRSR reporting." },
                  { t: "Ready for carbon credits", d: "Records you generate yourself, from your own assets." },
                ].map((row) => (
                  <li key={row.t} className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-[#FFD700]" />
                    <div>
                      <p className="text-lg font-bold">{row.t}</p>
                      <p className="text-green-100">{row.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How the data gets there */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">From the unit to your screen</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Each system reports its own data.
            </p>
          </div>

          <ol className="grid gap-8 md:grid-cols-3">
            {FLOW.map((step, idx) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B6B3D] text-xl font-bold text-white">
                      {idx + 1}
                    </span>
                    <Icon className="h-8 w-8 text-[#1B6B3D]" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.body}</p>
                </li>
              );
            })}
          </ol>

          <div className="mt-10 rounded-r-xl border-l-4 border-[#1B6B3D] bg-green-50 p-6">
            <p className="text-gray-800">
              <strong>On site, with no network:</strong> the SGT OS app connects to the unit over
              Bluetooth for guided setup and health diagnostics.{" "}
              <Link href={ROUTES.sgtos} className="font-semibold text-[#1B6B3D] hover:underline">
                More on SGT OS
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Serves every product */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">One data layer for every product</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              {PLATFORM_LAYERS[2].body}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVED.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-[#1B6B3D] hover:shadow-lg"
              >
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#1B6B3D]">
                  {p.group}
                </p>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{p.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{p.segment}</p>
                <span className="mt-auto inline-flex items-center text-sm font-semibold text-[#1B6B3D]">
                  View {p.name}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">{LINES.measure}</h2>
          <p className="mb-8 text-xl text-gray-600">
            Ask us to walk you through GreenVision on assets like yours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center justify-center rounded-lg bg-[#1B6B3D] px-10 py-4 text-lg font-bold text-white transition-all hover:bg-[#155730]"
            >
              Request a GreenVision demo
            </Link>
            <Link
              href={ROUTES.chfa}
              className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-10 py-4 text-lg font-bold text-gray-700 transition-all hover:border-[#1B6B3D] hover:text-[#1B6B3D]"
            >
              How CHFA works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
