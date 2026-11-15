"use client";

import { useMemo, useState } from "react";
import { Flame, Truck, Zap } from "lucide-react";
import { CLAIMS, DISCLAIMER } from "@/data/siteContent";
import {
  ASSET_FUELS,
  ASSET_META,
  ASSET_SVGS,
  FUEL_UNITS,
  PRODUCT_NAME,
  type ProductLine,
} from "./calculatorData";
import {
  CURRENCIES,
  CostBars,
  Field,
  ResultCards,
  ResultFooter,
  SliderField,
  estimate,
  fieldClass,
  money,
} from "./shared";

const PRODUCTS: {
  key: ProductLine;
  icon: typeof Truck;
  label: string;
  sub: string;
  figure: string;
  assets: { value: string; label: string }[];
}[] = [
  {
    key: "greendrive",
    icon: Truck,
    label: "GreenDrive",
    sub: "Diesel vehicles",
    figure: CLAIMS.greendrive.fuelSaving,
    assets: [
      { value: "Truck", label: "Truck / commercial vehicle" },
      { value: "Earthmover", label: "Earthmover / mining" },
      { value: "Construction", label: "Construction equipment" },
    ],
  },
  {
    key: "greenx",
    icon: Zap,
    label: "GreenX",
    sub: "DG sets",
    figure: CLAIMS.greenx.fuelSaving,
    assets: [{ value: "DG", label: "Diesel generator set" }],
  },
  {
    key: "greenedge",
    icon: Flame,
    label: "GreenEdge",
    sub: "Burners and furnaces",
    figure: CLAIMS.greenedge.fuelSaving,
    assets: [
      { value: "Boiler", label: "Boiler" },
      { value: "Kiln", label: "Kiln" },
      { value: "Smelter", label: "Smelter / furnace" },
    ],
  },
];

function Infographic({ asset, className = "" }: { asset: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block [&>svg]:h-full [&>svg]:w-full ${className}`}
      dangerouslySetInnerHTML={{ __html: ASSET_SVGS[asset] ?? "" }}
    />
  );
}

export default function CalculatorClient() {
  const [product, setProduct] = useState<ProductLine>("greendrive");
  const [asset, setAsset] = useState("Truck");
  const [currency, setCurrency] = useState("INR");
  const [price, setPrice] = useState("");

  // GreenDrive
  const [vehicles, setVehicles] = useState(10);
  const [litresPerDay, setLitresPerDay] = useState(80);
  const [vehicleDays, setVehicleDays] = useState(300);
  // GreenX
  const [dgSets, setDgSets] = useState(2);
  const [litresPerHour, setLitresPerHour] = useState(40);
  const [hoursPerDay, setHoursPerDay] = useState(6);
  const [dgDays, setDgDays] = useState(300);
  // GreenEdge
  const [fuel, setFuel] = useState("Natural Gas");
  const [unit, setUnit] = useState("SCM");
  const [perDay, setPerDay] = useState(2000);
  const [plantDays, setPlantDays] = useState(330);

  const current = PRODUCTS.find((p) => p.key === product)!;

  const pickProduct = (key: ProductLine) => {
    setProduct(key);
    pickAsset(PRODUCTS.find((p) => p.key === key)!.assets[0].value, key);
  };

  const pickAsset = (value: string, forProduct: ProductLine = product) => {
    setAsset(value);
    if (forProduct === "greenedge" && !ASSET_FUELS[value].includes(fuel)) {
      const first = ASSET_FUELS[value][0];
      setFuel(first);
      setUnit(FUEL_UNITS[first][0]);
    }
  };

  const est = useMemo(() => {
    const p = Number(price);
    if (!price || !(p > 0)) return null;
    if (product === "greendrive")
      return estimate({ asset, fuel: "Diesel", unit: "Litres", annualQty: vehicles * litresPerDay * vehicleDays, price: p });
    if (product === "greenx")
      return estimate({ asset, fuel: "Diesel", unit: "Litres", annualQty: dgSets * litresPerHour * hoursPerDay * dgDays, price: p });
    return estimate({ asset, fuel, unit, annualQty: perDay * plantDays, price: p });
  }, [product, asset, price, vehicles, litresPerDay, vehicleDays, dgSets, litresPerHour, hoursPerDay, dgDays, fuel, unit, perDay, plantDays]);

  const priceUnit = product === "greenedge" ? unit : "litre";
  const resultUnit = product === "greenedge" ? unit : "litres";
  const meta = ASSET_META[asset];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page header */}
      <div className="relative overflow-hidden bg-[#1B6B3D] text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-8">
          <h1 className="mb-2 mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Fuel Savings &amp; Emissions <span className="text-[#FFD700]">Calculator</span>
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-white/80">
            Choose what you run and move the sliders. Your estimate updates as you go — the fuel
            you could save and the CO₂ you could avoid with SGT HydroEdge Controlled Hydrogen
            Fuel Assist (CHFA) Technology.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white/80">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD700]" />
            Estimates are shown at our &ldquo;up to&rdquo; figures. {DISCLAIMER}
          </div>
        </div>
        <svg className="absolute right-0 top-0 h-72 w-72 opacity-5" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
        {/* Inputs */}
        <div className="space-y-6">
          {/* Product */}
          <div className="grid gap-3 sm:grid-cols-3" role="tablist" aria-label="Product">
            {PRODUCTS.map(({ key, icon: Icon, label, sub, figure }) => {
              const on = product === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => pickProduct(key)}
                  className={`rounded-2xl border-2 p-4 text-left transition-all ${
                    on ? "border-[#1B6B3D] bg-white shadow-lg" : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <Icon className={`mb-2 h-6 w-6 ${on ? "text-[#1B6B3D]" : "text-gray-400"}`} aria-hidden="true" />
                  <p className="font-bold text-gray-900">{label}</p>
                  <p className="text-xs text-gray-500">{sub}</p>
                  <p className="mt-2 text-xs font-semibold text-[#1B6B3D]">{figure} fuel saving*</p>
                </button>
              );
            })}
          </div>

          {/* Asset infographic tiles */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-bold text-gray-900">What do you run?</h2>
            <div className={`grid gap-3 ${current.assets.length > 1 ? "sm:grid-cols-3" : ""}`}>
              {current.assets.map((a) => {
                const on = asset === a.value;
                return (
                  <button
                    key={a.value}
                    type="button"
                    aria-pressed={on}
                    onClick={() => pickAsset(a.value)}
                    className={`flex flex-col items-center rounded-xl border-2 p-3 text-center transition-all ${
                      on ? "border-[#1B6B3D] bg-[#1B6B3D]/5" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Infographic asset={a.value} className={current.assets.length > 1 ? "h-24 w-full" : "h-40 w-full"} />
                    <span className="mt-2 text-sm font-semibold text-gray-900">{a.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-600">{meta.sub}</span>
              {meta.specs.map((s) => (
                <span key={s} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Numbers */}
          <div className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">Your numbers</h2>

            {product === "greendrive" && (
              <>
                <SliderField label="Vehicles" unit="vehicles" value={vehicles} min={1} max={500} onChange={setVehicles} />
                <SliderField label="Diesel per vehicle" unit="litres / day" value={litresPerDay} min={5} max={500} step={5} onChange={setLitresPerDay} />
                <SliderField label="Running days" unit="days / year" value={vehicleDays} min={30} max={365} step={5} onChange={setVehicleDays} />
              </>
            )}

            {product === "greenx" && (
              <>
                <SliderField label="DG sets" unit="sets" value={dgSets} min={1} max={50} onChange={setDgSets} />
                <SliderField label="Diesel per DG set" unit="litres / hour" value={litresPerHour} min={5} max={400} step={5} onChange={setLitresPerHour} />
                <SliderField label="Running hours" unit="hours / day" value={hoursPerDay} min={1} max={24} onChange={setHoursPerDay} />
                <SliderField label="Running days" unit="days / year" value={dgDays} min={30} max={365} step={5} onChange={setDgDays} />
              </>
            )}

            {product === "greenedge" && (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Fuel">
                    <select
                      value={fuel}
                      onChange={(e) => {
                        setFuel(e.target.value);
                        setUnit(FUEL_UNITS[e.target.value][0]);
                      }}
                      className={fieldClass}
                    >
                      {ASSET_FUELS[asset].map((f) => (
                        <option key={f}>{f}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Measured in">
                    <select value={unit} onChange={(e) => setUnit(e.target.value)} className={fieldClass}>
                      {FUEL_UNITS[fuel].map((u) => (
                        <option key={u}>{u}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <SliderField label="Fuel burned" unit={`${unit} / day`} value={perDay} min={10} max={50000} step={10} onChange={setPerDay} />
                <SliderField label="Operating days" unit="days / year" value={plantDays} min={30} max={365} step={5} onChange={setPlantDays} />
              </>
            )}

            <div className="grid gap-4 border-t border-gray-100 pt-5 sm:grid-cols-2">
              <Field label="Currency">
                <select value={currency} onChange={(e) => setCurrency(e.target.value)} className={fieldClass}>
                  {CURRENCIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <Field label="Fuel price" hint={`per ${priceUnit}`}>
                <input
                  type="number"
                  min={0}
                  inputMode="decimal"
                  placeholder="Enter your price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className={fieldClass}
                />
              </Field>
            </div>
          </div>
        </div>

        {/* Results — update live */}
        <aside className="lg:sticky lg:top-28 lg:self-start" aria-live="polite">
          <div className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            {est ? (
              <>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Estimated annual saving with {PRODUCT_NAME[est.product]}*
                  </p>
                  <p className="mt-1 text-4xl font-bold tabular-nums text-[#1B6B3D]">
                    Up to {money(est.saving, currency)}
                  </p>
                  <p className="text-sm text-gray-500">
                    at up to {est.pct}% fuel saving · {meta.label}
                  </p>
                </div>
                <CostBars est={est} currency={currency} />
                <ResultCards est={est} currency={currency} unit={resultUnit} />
                <ResultFooter product={est.product} />
              </>
            ) : (
              <div className="py-6 text-center">
                <Infographic asset={asset} className="mx-auto h-36 w-56" />
                <p className="mt-4 text-lg font-semibold text-gray-900">Enter your fuel price</p>
                <p className="mt-1 text-sm text-gray-500">
                  Your estimate appears here and updates as you change the numbers.
                </p>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
