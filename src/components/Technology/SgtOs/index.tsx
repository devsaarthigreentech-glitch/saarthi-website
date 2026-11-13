import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  Bell,
  Bluetooth,
  CheckCircle,
  Cpu,
  Database,
  Gauge,
  Power,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { CLAIMS, LINES, PHOTOS, PLATFORM_LAYERS, ROUTES } from "@/data/siteContent";

const JOBS = [
  {
    icon: ShieldCheck,
    title: "Safety",
    body: "Multiple maker-checker safety checks, and no gas storage to manage.",
  },
  {
    icon: Gauge,
    title: "Operation",
    body: "Sets how much hydrogen is made, moment to moment, to match the load.",
  },
  {
    icon: Wrench,
    title: "Support & maintenance",
    body: "Guided setup and health diagnostics on site; logs and alerts for rapid service.",
  },
  {
    icon: Database,
    title: "Data recording",
    body: "Records what the system did, and sends it to GreenVision.",
  },
] as const;

const SAFETY_CHECKS = ["Pressure", "Temperature", "Excess current", "Low battery", "and more"] as const;

export default function SgtOsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <p className="text-sm text-gray-600">
            <Link href={ROUTES.home} className="hover:text-[#1B6B3D]">
              Home
            </Link>{" "}
            / Technology / <span className="font-medium text-gray-900">SGT OS</span>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-green-300 bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                <Cpu className="mr-2 h-4 w-4" />
                SGT OS · THE CONTROL LAYER
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                {LINES.control}
              </h1>

              <p className="mb-4 text-2xl font-semibold text-[#1B6B3D]">
                Too little hydrogen does nothing. Too much does harm.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                SGT OS is what gets the dose right. It handles safety, operation, support &amp;
                maintenance, and data recording — designed in-house and built in India to SGT&apos;s
                specifications.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={ROUTES.contact}
                  className="inline-flex items-center rounded-md bg-[#1B6B3D] px-8 py-4 text-lg font-medium text-white transition-all hover:bg-[#155730]"
                >
                  Talk to us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href={ROUTES.chfa}
                  className="inline-flex items-center rounded-md border-2 border-gray-300 bg-white px-8 py-4 text-lg font-medium text-gray-700 transition-all hover:border-[#1B6B3D] hover:text-[#1B6B3D]"
                >
                  How CHFA works
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
              <img
                src={PHOTOS.sgtOsController.src}
                alt={PHOTOS.sgtOsController.alt}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Four jobs */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">One controller, four jobs</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              The hardware makes the hydrogen. SGT OS decides how much, and when.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {JOBS.map((job) => {
              const Icon = job.icon;
              return (
                <div
                  key={job.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-[#1B6B3D] hover:shadow-lg"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-[#1B6B3D]/10">
                    <Icon className="h-8 w-8 text-[#1B6B3D]" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600">{job.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Load-following dosing */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900">The dose follows the load</h2>
              <p className="mb-6 text-xl leading-relaxed text-gray-600">
                An engine climbing a gradient needs a different dose from one idling at a signal.
                SGT OS changes the hydrogen flow as the work changes.
              </p>
              <div className="flex items-start rounded-r-xl border-l-4 border-[#1B6B3D] bg-white p-6">
                <Power className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-[#1B6B3D]" />
                <div>
                  <h3 className="mb-1 font-bold text-gray-900">Starts and stops with the engine</h3>
                  <p className="text-gray-600">
                    SGT OS takes its start/stop cue from the alternator signal or battery-charging
                    data. Gas is produced only while the engine runs.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border-2 border-green-200 bg-white p-8">
                <div className="mb-3 flex items-center">
                  <Activity className="mr-3 h-7 w-7 text-[#1B6B3D]" />
                  <h3 className="text-xl font-bold text-gray-900">When the CAN interface is active</h3>
                </div>
                <p className="text-gray-600">
                  SGT OS dynamically varies hydrogen flow with engine RPM and load, read from the
                  vehicle&apos;s CAN interface.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-gray-200 bg-white p-8">
                <div className="mb-3 flex items-center">
                  <BatteryCharging className="mr-3 h-7 w-7 text-[#1B6B3D]" />
                  <h3 className="text-xl font-bold text-gray-900">When it is not</h3>
                </div>
                <p className="text-gray-600">
                  The system runs at an optimal constant flow, set on the system itself.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-gray-200 bg-white p-8">
                <div className="mb-3 flex items-center">
                  <Cpu className="mr-3 h-7 w-7 text-[#1B6B3D]" />
                  <h3 className="text-xl font-bold text-gray-900">On DG sets</h3>
                </div>
                <p className="text-gray-600">
                  GreenX runs the same SGT OS as GreenDrive, and adds RS485 inputs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-gradient-to-br from-green-800 to-[#1B6B3D] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Safety, built into the control
              </div>
              <h2 className="mb-6 text-4xl font-bold">{LINES.onDemand}</h2>
              <p className="mb-6 text-xl leading-relaxed text-green-100">
                There is no gas storage. Gas is produced only on demand, in low, variable volumes,
                and it stops with the engine.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg">
              <h3 className="mb-2 text-2xl font-bold">Multiple maker-checker safety checks</h3>
              <p className="mb-6 text-green-100">
                One check does not take another&apos;s word for it. SGT OS watches:
              </p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {SAFETY_CHECKS.map((check) => (
                  <li key={check} className="flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-[#FFD700]" />
                    <span className="text-lg">{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* On-site app + logs and remote support */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">On site, and from anywhere</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Beside the unit with a phone, or remotely through GreenVision.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#1B6B3D]/10">
                <Bluetooth className="h-8 w-8 text-[#1B6B3D]" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">The on-site app</h3>
              <p className="mb-6 text-gray-600">
                The SGT OS app connects to the unit over Bluetooth — no network needed.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B6B3D]" />
                  <span>Guided setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B6B3D]" />
                  <span>Health diagnostics</span>
                </li>
              </ul>
              {/* TODO(owner): supply GreenVision dashboard and SGT OS app screenshots with customer data masked */}
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#1B6B3D]/10">
                <Bell className="h-8 w-8 text-[#1B6B3D]" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Logs and remote support</h3>
              <p className="mb-6 text-gray-600">
                Data goes to GreenVision over {CLAIMS.connectivity}, so support does not have to
                wait for a site visit.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B6B3D]" />
                  <span>Full telemetry and complete logs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B6B3D]" />
                  <span>Real-time alerts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B6B3D]" />
                  <span>Less downtime, rapid service</span>
                </li>
              </ul>
              <Link
                href={ROUTES.greenvision}
                className="mt-6 inline-flex items-center font-semibold text-[#1B6B3D] hover:underline"
              >
                See GreenVision <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Where SGT OS sits */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Where SGT OS sits</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">{LINES.equation}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {PLATFORM_LAYERS.map((layer, idx) => {
              const current = layer.href === ROUTES.sgtos;
              return (
                <Link
                  key={layer.layer}
                  href={layer.href}
                  className={`group flex flex-col rounded-2xl border-2 bg-white p-8 transition-all hover:shadow-lg ${
                    current ? "border-[#1B6B3D]" : "border-gray-200 hover:border-[#1B6B3D]"
                  }`}
                >
                  <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#1B6B3D]">
                    {idx + 1} · {layer.layer}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">{layer.title}</h3>
                  <p className="mb-6 leading-relaxed text-gray-600">{layer.body}</p>
                  <span className="mt-auto inline-flex items-center font-semibold text-[#1B6B3D]">
                    {current ? "You are here" : "Learn more"}
                    {!current && <ArrowRight className="ml-1 h-4 w-4" />}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">{LINES.saveCutProve}</h2>
          <p className="mb-8 text-xl text-gray-600">
            See how SGT OS and GreenVision work together on your fleet or your DG sets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center justify-center rounded-lg bg-[#1B6B3D] px-10 py-4 text-lg font-bold text-white transition-all hover:bg-[#155730]"
            >
              Schedule a consultation
            </Link>
            <Link
              href={ROUTES.greenvision}
              className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-10 py-4 text-lg font-bold text-gray-700 transition-all hover:border-[#1B6B3D] hover:text-[#1B6B3D]"
            >
              Explore GreenVision
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
