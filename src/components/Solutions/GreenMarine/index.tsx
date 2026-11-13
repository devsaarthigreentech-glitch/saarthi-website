import Link from "next/link";
import { ArrowRight, Anchor, Cpu, Droplets, LineChart, Truck, Zap } from "lucide-react";
import {
  CLAIMS,
  GREENMARINE_COPY,
  LINES,
  PLATFORM_LAYERS,
  PRODUCTS,
  ROUTES,
  TECHNOLOGY,
} from "@/data/siteContent";

const HERO_IMAGE = {
  src: "/images/greenmarine/hero-marine.png",
  alt: "Container ship being guided into port by tugboats",
};

const LAYER_ICONS = { Core: Droplets, Enablers: Cpu, Data: LineChart } as const;

const ON_LAND = [
  {
    key: "greendrive",
    icon: Truck,
    product: PRODUCTS.greendrive,
    proof: CLAIMS.greendrive.tested,
    cta: "See GreenDrive",
  },
  {
    key: "greenx",
    icon: Zap,
    product: PRODUCTS.greenx,
    proof: CLAIMS.greenx.status,
    cta: "See GreenX",
  },
] as const;

export default function GreenMarinePage() {
  const marine = PRODUCTS.greenmarine;

  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-[104px]">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <p className="text-sm text-gray-600">
            <Link href={ROUTES.home} className="hover:text-[#1B6B3D]">
              Home
            </Link>{" "}
            / <span>Solutions</span> / <span>Engines</span> /{" "}
            <span className="font-medium text-gray-900">{marine.name}</span>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(5,15,25,0.9) 0%, rgba(5,15,25,0.7) 45%, rgba(5,15,25,0.35) 100%)",
          }}
        />

        <div className="relative z-20 mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              <Anchor className="mr-2 h-4 w-4 shrink-0 text-[#FFD700]" />
              {marine.badge} · {marine.segment}
            </div>

            <h1 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-white lg:text-5xl">
              {marine.name}: the same platform,{" "}
              <span className="text-[#4ADE80]">taken to sea</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80">
              {GREENMARINE_COPY}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={ROUTES.contact}
                className="inline-flex items-center rounded-md bg-[#1B6B3D] px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#155730]"
              >
                Talk to us about a marine pilot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href={ROUTES.chfa}
                className="inline-flex items-center rounded-md border border-white/30 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                How {TECHNOLOGY.short} works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Where it stands */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#1B6B3D]">
              {marine.badge}
            </p>
            <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">
              Proven on land first. Marine comes next.
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
              GreenMarine is not a separate invention. It is the patented{" "}
              {TECHNOLOGY.name} ({TECHNOLOGY.short}) platform that already runs on road
              vehicles as GreenDrive and on diesel generator sets as GreenX, applied to
              marine engines and onboard generators.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[#1B6B3D]/20 bg-[#1B6B3D]/5 px-10 py-8 text-center">
            <p className="text-5xl font-bold leading-none text-[#1B6B3D]">{marine.figure}</p>
            <p className="mt-3 text-sm font-medium text-gray-700">{marine.figureLabel}</p>
          </div>
        </div>
      </section>

      {/* The platform */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              One platform, three layers
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              {TECHNOLOGY.full}. {TECHNOLOGY.credit} (Patent No. {TECHNOLOGY.patentNo}).{" "}
              {LINES.onDemand}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PLATFORM_LAYERS.map((item) => {
              const Icon = LAYER_ICONS[item.layer];
              return (
                <Link
                  key={item.layer}
                  href={item.href}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-[#1B6B3D]/40 hover:shadow-xl"
                >
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1B6B3D]/10">
                    <Icon className="h-7 w-7 text-[#1B6B3D]" />
                  </span>
                  <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#1B6B3D]">
                    {item.layer}
                  </p>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mb-6 leading-relaxed text-gray-600">{item.body}</p>
                  <span className="mt-auto inline-flex items-center text-sm font-semibold text-[#1B6B3D]">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Already running on land */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Already at work on engines on land
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              The hardware, controls and data layer going to sea are the ones in service
              today on diesel vehicles and diesel generator sets.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {ON_LAND.map(({ key, icon: Icon, product, proof, cta }) => (
              <Link
                key={key}
                href={product.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-xl"
              >
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="mb-2 flex items-center text-sm font-semibold text-[#1B6B3D]">
                    <Icon className="mr-2 h-4 w-4" />
                    {product.segment}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">{product.name}</h3>
                  <p className="mb-4 leading-relaxed text-gray-600">{product.oneLiner}</p>
                  <p className="mb-6 text-sm font-medium text-gray-800">{proof}.</p>
                  <span className="mt-auto inline-flex items-center font-semibold text-[#1B6B3D]">
                    {cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-center text-gray-600">
            Want the engineering behind it?{" "}
            <Link href={ROUTES.chfa} className="font-semibold text-[#1B6B3D] hover:underline">
              Read how {TECHNOLOGY.short} Technology works
            </Link>
            .
          </p>
        </div>
      </section>

      {/* TODO(owner): the GreenMarine film can be embedded here with
          <YouTubeEmbed /> from VIDEOS.greenmarine once its claims are confirmed
          against the current wording rules (brief section 5 / open question 9). */}

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#1B6B3D] to-[#0F4A28] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Operate vessels? Help shape the first marine trial.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/85">
            If you run marine engines or onboard generators, talk to us ahead of our
            first marine trial, planned for 2027.
          </p>
          <Link
            href={ROUTES.contact}
            className="inline-flex items-center rounded-md bg-[#FFD700] px-8 py-4 text-base font-bold text-gray-900 shadow-lg transition-colors hover:bg-[#F2CC00]"
          >
            Talk to us about a marine pilot
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
