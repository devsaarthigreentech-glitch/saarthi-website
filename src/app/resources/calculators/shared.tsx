"use client";

import Link from "next/link";
import { ArrowRight, Fuel, Leaf, Wallet } from "lucide-react";
import SavingsDisclaimer from "@/components/Shared/SavingsDisclaimer";
import { CLAIMS, ROUTES } from "@/data/siteContent";
import {
  ASSET_PRODUCT,
  CURRENCY_SYMBOLS,
  EF,
  PRODUCT_NAME,
  SAVING_CAP_PCT,
  type ProductLine,
} from "./calculatorData";

// ─── Calculation (one engine for every layout) ──────────────────────────────
export type Estimate = {
  product: ProductLine;
  pct: number;
  annualQty: number;
  annualCost: number;
  saving: number;
  fuelSaved: number;
  co2AvoidedT: number;
};

/**
 * Annual estimate at the product's "up to" figure. The percentage comes only
 * from SAVING_CAP_PCT, so no input can push a result above the cap.
 */
export function estimate(input: {
  asset: string;
  fuel: string;
  unit: string;
  annualQty: number;
  price: number;
}): Estimate | null {
  const product = ASSET_PRODUCT[input.asset];
  const factor = EF[input.fuel]?.[input.unit];
  if (!product || !factor) return null;
  if (!(input.annualQty > 0) || !(input.price >= 0)) return null;
  const pct = SAVING_CAP_PCT[product];
  const annualCost = input.annualQty * input.price;
  const fuelSaved = (input.annualQty * pct) / 100;
  return {
    product,
    pct,
    annualQty: input.annualQty,
    annualCost,
    saving: (annualCost * pct) / 100,
    fuelSaved,
    co2AvoidedT: (fuelSaved * factor.co2) / 1000,
  };
}

// ─── Formatting ─────────────────────────────────────────────────────────────
export const CURRENCIES = Object.keys(CURRENCY_SYMBOLS);

export function money(value: number, currency: string) {
  const locale = currency === "INR" ? "en-IN" : "en-US";
  return `${CURRENCY_SYMBOLS[currency] ?? ""}${Math.round(value).toLocaleString(locale)}`;
}

export function num(value: number, digits = 0) {
  return value.toLocaleString("en-US", { maximumFractionDigits: digits, minimumFractionDigits: digits });
}

export const ROI_LINE: Record<ProductLine, string> = {
  greendrive: `Payback: ${CLAIMS.greendrive.roi.toLowerCase()}.`,
  greenx: `${CLAIMS.greenx.roi}.`,
  greenedge: `${CLAIMS.greenedge.roi}.`,
};

export const EMISSIONS_LINE: Record<ProductLine, string> = {
  greendrive: `${CLAIMS.greendrive.pm} · ${CLAIMS.greendrive.nox}. ${CLAIMS.co2}`,
  greenx: `${CLAIMS.greenx.pm} · ${CLAIMS.greenx.nox}. ${CLAIMS.co2}`,
  greenedge: CLAIMS.greenedge.emissions,
};

export const PRODUCT_ROUTE: Record<ProductLine, string> = {
  greendrive: ROUTES.greendrive,
  greenx: ROUTES.greenx,
  greenedge: ROUTES.greenedge,
};

// ─── Shared UI ──────────────────────────────────────────────────────────────
export const fieldClass =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#1B6B3D] focus:ring-2 focus:ring-[#1B6B3D]/20";

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-baseline justify-between text-xs font-semibold uppercase tracking-wide text-gray-600">
        {label}
        {hint && <span className="font-medium normal-case tracking-normal text-gray-400">{hint}</span>}
      </span>
      {children}
    </label>
  );
}

/** Slider with a number box, kept in sync. */
export function SliderField({
  label,
  unit,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  unit: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="flex items-center gap-2">
          <input
            type="number"
            min={min}
            step={step}
            value={Number.isFinite(value) ? value : ""}
            onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
            aria-label={label}
            className="w-24 rounded-md border border-gray-300 px-2 py-1 text-right text-sm font-semibold text-gray-900 outline-none focus:border-[#1B6B3D]"
          />
          <span className="w-16 text-xs text-gray-500">{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={Math.min(max, Math.max(min, value || 0))}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={`${label} slider`}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-[#1B6B3D]"
      />
    </div>
  );
}

/** Today's fuel bill against the bill with the product fitted. */
export function CostBars({ est, currency }: { est: Estimate; currency: string }) {
  const after = est.annualCost - est.saving;
  const rows = [
    { label: "Today", value: est.annualCost, width: 100, tone: "bg-gray-400" },
    { label: `With ${PRODUCT_NAME[est.product]}`, value: after, width: 100 - est.pct, tone: "bg-[#1B6B3D]" },
  ];
  return (
    <div className="space-y-3">
      {rows.map((r) => (
        <div key={r.label}>
          <div className="mb-1 flex justify-between text-xs text-gray-600">
            <span>{r.label}</span>
            <span className="font-semibold tabular-nums text-gray-900">{money(r.value, currency)} / year</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-gray-100">
            <div className={`h-full rounded-full transition-all duration-500 ${r.tone}`} style={{ width: `${r.width}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ResultCards({
  est,
  currency,
  unit,
}: {
  est: Estimate;
  currency: string;
  unit: string;
}) {
  const cards = [
    { icon: Wallet, label: "Fuel cost saved*", value: `Up to ${money(est.saving, currency)}`, sub: "per year" },
    { icon: Fuel, label: "Fuel saved*", value: `Up to ${num(est.fuelSaved)}`, sub: `${unit} per year` },
    {
      icon: Leaf,
      label: "CO₂ avoided*",
      value: `Up to ${num(est.co2AvoidedT, est.co2AvoidedT < 100 ? 1 : 0)}`,
      sub: "tonnes per year (estimate)",
    },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {cards.map(({ icon: Icon, label, value, sub }) => (
        <div key={label} className="rounded-xl border border-gray-200 bg-white p-4">
          <Icon className="mb-2 h-5 w-5 text-[#1B6B3D]" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
          <p className="mt-1 text-xl font-bold tabular-nums text-gray-900">{value}</p>
          <p className="text-xs text-gray-500">{sub}</p>
        </div>
      ))}
    </div>
  );
}

export function ResultFooter({ product }: { product: ProductLine }) {
  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-[#1B6B3D]/5 p-4 text-sm leading-relaxed text-gray-700">
        <p className="font-semibold text-gray-900">{ROI_LINE[product]}</p>
        <p className="mt-1">{EMISSIONS_LINE[product]}</p>
      </div>
      <SavingsDisclaimer />
      <p className="text-xs leading-relaxed text-gray-500">
        Estimate at the {PRODUCT_NAME[product]} “up to” figure ({SAVING_CAP_PCT[product]}% fuel saving),
        from the numbers you enter and standard emission factors.
      </p>
      <div className="flex flex-wrap gap-3 pt-1">
        <Link
          href={ROUTES.contact}
          className="inline-flex items-center rounded-lg bg-[#1B6B3D] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#155730]"
        >
          Request a detailed assessment <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href={PRODUCT_ROUTE[product]}
          className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-[#1B6B3D] hover:text-[#1B6B3D]"
        >
          About {PRODUCT_NAME[product]}
        </Link>
      </div>
    </div>
  );
}
