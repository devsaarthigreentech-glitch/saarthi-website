import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Construction, LineChart, Package, Target } from "lucide-react";
import { COMPANY, LINES, PLATFORM_LAYERS, PRODUCTS, ROUTES } from "@/data/siteContent";

const title = "Decarbonisation-as-a-Service — Being Built | SGT HydroEdge";
const description =
  "SGT HydroEdge is building Decarbonisation-as-a-Service: measured, verified decarbonisation rather than just a device. The planned next step beyond equipment sales. Talk to us.";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title,
  description,
  alternates: { canonical: ROUTES.daas },
  openGraph: {
    title,
    description,
    url: ROUTES.daas,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const dataLayer = PLATFORM_LAYERS.find((l) => l.layer === "Data")!;

const STEPS = [
  {
    icon: Package,
    label: "Today",
    title: "We supply equipment",
    body: "GreenDrive for diesel vehicles, GreenX for diesel generator sets and GreenEdge for burners and furnaces are sold as equipment, fitted to the assets you already run.",
  },
  {
    icon: LineChart,
    label: "Already in place",
    title: "We measure the result",
    body: `${dataLayer.title} is the data layer of the platform. ${dataLayer.body}`,
  },
  {
    icon: Target,
    label: "Planned",
    title: "Decarbonisation as the deliverable",
    body: "Decarbonisation-as-a-Service is the planned next step beyond equipment sales: you engage us for measured, verified decarbonisation rather than just a device.",
  },
] as const;

const PRODUCT_LINKS = [PRODUCTS.greendrive, PRODUCTS.greenx, PRODUCTS.greenedge] as const;

export default function DaaSPage() {
  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-[104px]">
      {/* TODO(owner): DaaS / Zero CapEx — offered now, or "being built"? (brief 4.6) */}

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <p className="text-sm text-gray-600">
            <Link href={ROUTES.home} className="hover:text-[#1B6B3D]">
              Home
            </Link>{" "}
            / <span>Solutions</span> /{" "}
            <span className="font-medium text-gray-900">Decarbonisation-as-a-Service</span>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 65% 40%, rgba(27,107,61,0.35) 0%, transparent 60%), radial-gradient(ellipse at 15% 85%, rgba(62,200,126,0.10) 0%, transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
              <Construction className="mr-2 h-4 w-4 shrink-0 text-[#FFD700]" />
              Being built
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white lg:text-5xl">
              We are building{" "}
              <span className="text-[#4ADE80]">Decarbonisation-as-a-Service</span>
            </h1>

            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-white/80">
              Measured, verified decarbonisation rather than just a device. Talk to us.
            </p>

            <Link
              href={ROUTES.contact}
              className="inline-flex items-center rounded-md bg-[#1B6B3D] px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#155730]"
            >
              Talk to us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* The idea */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              From selling a device to delivering a result
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              What you want is not a box on an engine. It is less fuel burned and less
              carbon emitted, with data to prove it. That is the direction we are
              building in.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map(({ icon: Icon, label, title: stepTitle, body }) => (
              <div
                key={label}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8"
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1B6B3D]/10">
                  <Icon className="h-7 w-7 text-[#1B6B3D]" />
                </span>
                <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#1B6B3D]">
                  {label}
                </p>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{stepTitle}</h3>
                <p className="leading-relaxed text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where it stands */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#1B6B3D]">
              Where it stands
            </p>
            <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">
              Not on offer yet. Worth a conversation now.
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-gray-600">
              Decarbonisation-as-a-Service is planned, not launched. Today, the way to
              work with SGT HydroEdge is to buy the equipment, with GreenVision
              recording what it saves.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              If a service model would suit how you run your engines, burners and
              furnaces, tell us. Early conversations help us build it around real
              operations.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <p className="mb-2 text-2xl font-bold text-gray-900">{LINES.measure}</p>
            <p className="mb-6 leading-relaxed text-gray-600">
              A service built on results needs results that can be checked. GreenVision
              is already doing that work on the equipment in the field.
            </p>
            <Link
              href={ROUTES.greenvision}
              className="inline-flex items-center font-semibold text-[#1B6B3D] hover:underline"
            >
              See GreenVision
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">
                Available today as equipment
              </p>
              <ul className="space-y-2">
                {PRODUCT_LINKS.map((p) => (
                  <li key={p.name}>
                    <Link
                      href={p.href}
                      className="group flex items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-[#1B6B3D]/5"
                    >
                      <span>
                        <span className="font-semibold text-gray-900">{p.name}</span>
                        <span className="text-gray-600"> · {p.segment}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#1B6B3D] transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#1B6B3D] to-[#0F4A28] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Interested in decarbonisation as a service?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/85">
            Tell us what you run and what you need to prove. We will tell you plainly
            what we can do today and what is still being built.
          </p>
          <Link
            href={ROUTES.contact}
            className="inline-flex items-center rounded-md bg-[#FFD700] px-8 py-4 text-base font-bold text-gray-900 shadow-lg transition-colors hover:bg-[#F2CC00]"
          >
            Talk to us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
