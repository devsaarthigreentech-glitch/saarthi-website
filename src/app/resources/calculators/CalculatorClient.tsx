"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { RotateCcw, Calculator } from "lucide-react";
import { CLAIMS, DISCLAIMER, GREENDRIVE_MODELS, ROUTES } from "@/data/siteContent";
import SavingsDisclaimer from "@/components/Shared/SavingsDisclaimer";
import {
  COUNTRY_CURRENCY, CURRENCY_SYMBOLS, ASSET_FUELS, FUEL_UNITS,
  EF, ASSET_META, ASSET_GROUPS, ASSET_SVGS, ASSET_PRODUCT, PRODUCT_NAME,
  savingPctFor, type ProductLine,
} from "./calculatorData";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Results {
  product: ProductLine;
  assetLabel: string;
  annQty: number;
  unit: string;
  annCost: number;
  currency: string;
  /** Fuel-saving percentage applied: the product's "up to" figure. */
  savePct: number;
  saveQty: number;
  saveCost: number;
  annCO2: number;
  annCO2e: number;
  co2Red: number;
  co2eRed: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmt(n: number, decimals = 0) {
  return Number(n.toFixed(decimals)).toLocaleString("en-IN");
}

function getPeriodMultiplier(period: string) {
  if (period === "day") return 365;
  if (period === "month") return 12;
  return 1;
}

const GREENDRIVE_MODEL_LINE = `Models: ${GREENDRIVE_MODELS.map(m => m.name).join(" · ")}`;

// ─── Component ────────────────────────────────────────────────────────────────
export default function CalculatorClient() {
  const [country, setCountry]     = useState("");
  const [currency, setCurrency]   = useState("INR");
  const [asset, setAsset]         = useState("");
  const [fuel, setFuel]           = useState("");
  const [unit, setUnit]           = useState("");
  const [period, setPeriod]       = useState("day");
  const [qty, setQty]             = useState("");
  const [rate, setRate]           = useState("");
  const [error, setError]         = useState(false);
  const [results, setResults]     = useState<Results | null>(null);

  // Derived options
  const fuelOptions = asset ? (ASSET_FUELS[asset] ?? []) : [];
  const unitOptions = fuel  ? (FUEL_UNITS[fuel]   ?? []) : [];
  const efEntry     = fuel && unit ? EF[fuel]?.[unit] : null;
  const assetMeta   = asset ? ASSET_META[asset] : null;
  const assetSvg    = asset ? ASSET_SVGS[asset] : null;
  const assetLine   = asset ? ASSET_PRODUCT[asset] : null;
  const sym         = CURRENCY_SYMBOLS[currency] ?? (currency + " ");

  const handleCountryChange = (c: string) => {
    setCountry(c);
    if (COUNTRY_CURRENCY[c]) setCurrency(COUNTRY_CURRENCY[c]);
  };

  const handleAssetChange = (a: string) => {
    setAsset(a);
    setFuel("");
    setUnit("");
  };

  const handleFuelChange = (f: string) => {
    setFuel(f);
    const firstUnit = FUEL_UNITS[f]?.[0] ?? "";
    setUnit(firstUnit);
  };

  const calculate = useCallback(() => {
    const qtyNum  = parseFloat(qty);
    const rateNum = parseFloat(rate);
    const product = ASSET_PRODUCT[asset];
    const savePct = savingPctFor(asset);
    if (
      !product || savePct === null || !fuel || !unit ||
      !Number.isFinite(qtyNum) || qtyNum <= 0 ||
      !Number.isFinite(rateNum) || rateNum <= 0
    ) {
      setError(true);
      setTimeout(() => setError(false), 4000);
      return;
    }
    setError(false);

    const mult     = getPeriodMultiplier(period);
    const annQty   = qtyNum * mult;
    const annCost  = annQty * rateNum;
    const ef       = EF[fuel]?.[unit];
    const annCO2   = ef ? (annQty * ef.co2)   / 1000 : 0;
    const annCO2e  = ef ? (annQty * ef.tco2e) / 1000 : 0;
    const fraction = savePct / 100;

    setResults({
      product,
      assetLabel: ASSET_META[asset]?.label ?? asset,
      annQty, unit, annCost, currency,
      savePct,
      saveQty:  annQty  * fraction,
      saveCost: annCost * fraction,
      annCO2, annCO2e,
      co2Red:  annCO2  * fraction,
      co2eRed: annCO2e * fraction,
    });

    setTimeout(() => {
      document.getElementById("calc-results")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  }, [asset, fuel, unit, period, qty, rate, currency]);

  const reset = () => {
    setCountry(""); setCurrency("INR"); setAsset(""); setFuel("");
    setUnit(""); setPeriod("day"); setQty(""); setRate(""); setResults(null);
  };

  // ─── Shared input classes ──────────────────────────────────────────────────
  const selectCls = "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#1B6B3D] focus:ring-2 focus:ring-[#1B6B3D]/10 transition disabled:bg-gray-50 disabled:text-gray-400 appearance-none";
  const inputCls  = "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#1B6B3D] focus:ring-2 focus:ring-[#1B6B3D]/10 transition";
  const labelCls  = "block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5";
  const sectionCls = "text-xs font-bold text-gray-500 uppercase tracking-widest pb-2 border-b border-gray-100 mb-3";

  const resultSym     = results ? (CURRENCY_SYMBOLS[results.currency] ?? (results.currency + " ")) : sym;
  const resultProduct = results ? PRODUCT_NAME[results.product] : "";
  const isEngine      = results ? results.product !== "greenedge" : false;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">

      {/* ── Page Header ──────────────────────────────────────────── */}
      <div className="bg-[#1B6B3D] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 py-6 relative z-10">
          <h1 className="text-3xl font-bold mt-3 mb-2 leading-tight">
            Fuel Savings &amp; Emissions<br />
            <span className="text-[#FFD700]">Calculator</span>
          </h1>
          <p className="text-white/75 text-sm max-w-xl leading-relaxed">
            Estimate your annual fuel cost, the fuel you could save and the CO₂ you could avoid with SGT HydroEdge Controlled Hydrogen Fuel Assist (CHFA) Technology.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] shrink-0" />
            Estimates are shown at our &ldquo;up to&rdquo; figures. {DISCLAIMER}
          </div>
        </div>
        {/* Decorative circles */}
        <svg className="absolute right-0 top-0 opacity-5 w-72 h-72" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="2"/>
          <line x1="20" y1="100" x2="180" y2="100" stroke="white" strokeWidth="1.5"/>
          <line x1="100" y1="20" x2="100" y2="180" stroke="white" strokeWidth="1.5"/>
        </svg>
        <div className="h-1 w-full bg-[#FFD700]" />
      </div>

      {/* ── Form ─────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-5">

        {/* Step 1 — Location & Currency */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
            <div className="w-7 h-7 rounded-md bg-green-50 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-[#1B6B3D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h2 className="text-sm font-semibold text-gray-800">Location &amp; Currency</h2>
            <span className="ml-auto text-xs font-semibold text-[#1B6B3D] bg-green-50 px-2.5 py-0.5 rounded-full">Step 1</span>
          </div>
          <div className="p-5 grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Country</label>
              <select className={selectCls} value={country} onChange={e => handleCountryChange(e.target.value)}>
                <option value="">Select Country</option>
                {Object.keys(COUNTRY_CURRENCY).map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Calculation Currency</label>
              <select className={selectCls} value={currency} onChange={e => setCurrency(e.target.value)}>
                {Object.entries(CURRENCY_SYMBOLS).map(([k, v]) => (
                  <option key={k} value={k}>{v} {k}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Step 2 — Asset Class */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
            <div className="w-7 h-7 rounded-md bg-green-50 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-[#1B6B3D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            <h2 className="text-sm font-semibold text-gray-800">Asset Class</h2>
            <span className="ml-auto text-xs font-semibold text-[#1B6B3D] bg-green-50 px-2.5 py-0.5 rounded-full">Step 2</span>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <label className={labelCls}>Select Asset Type</label>
              <select className={selectCls} value={asset} onChange={e => handleAssetChange(e.target.value)}>
                <option value="">— Select Asset Class —</option>
                {ASSET_GROUPS.map(g => (
                  <optgroup key={g.label} label={g.label}>
                    {g.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Asset visual */}
            {assetSvg && assetMeta ? (
              <div className="flex gap-4 items-start border border-[#1B6B3D]/20 bg-green-50/50 rounded-lg p-4">
                <div className="w-40 shrink-0" dangerouslySetInnerHTML={{ __html: assetSvg }} />
                <div className="min-w-0">
                  <p className="font-semibold text-[#1B6B3D] text-sm">{assetMeta.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5 mb-2">{assetMeta.sub}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {assetMeta.specs.map(s => (
                      <span key={s} className="inline-flex items-center gap-1 bg-white border border-[#1B6B3D]/20 text-[#134f2e] text-xs font-medium px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B6B3D]" />{s}
                      </span>
                    ))}
                  </div>
                  {assetLine === "greendrive" && (
                    <p className="text-xs text-gray-500 mt-2">{GREENDRIVE_MODEL_LINE}</p>
                  )}
                  {assetLine === "greenx" && (
                    <p className="text-xs text-gray-500 mt-2">{CLAIMS.greenx.range}.</p>
                  )}
                  <SavingsDisclaimer className="text-gray-500 mt-2" />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 border-2 border-dashed border-gray-200 rounded-lg p-4 text-gray-400 text-sm bg-gray-50">
                <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                Select an asset class above to see the visualisation
              </div>
            )}
          </div>
        </div>

        {/* Step 3 — Fuel & Consumption */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
            <div className="w-7 h-7 rounded-md bg-green-50 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-[#1B6B3D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 22V8l9-6 9 6v14H3z"/><path d="M9 22V12h6v10"/></svg>
            </div>
            <h2 className="text-sm font-semibold text-gray-800">Fuel &amp; Consumption</h2>
            <span className="ml-auto text-xs font-semibold text-[#1B6B3D] bg-green-50 px-2.5 py-0.5 rounded-full">Step 3</span>
          </div>
          <div className="p-5 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Fuel Type</label>
                <select className={selectCls} value={fuel} onChange={e => handleFuelChange(e.target.value)} disabled={!asset}>
                  <option value="">{asset ? "— Select Fuel Type —" : "— Select Asset First —"}</option>
                  {fuelOptions.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Consumption Unit</label>
                <select className={selectCls} value={unit} onChange={e => setUnit(e.target.value)} disabled={!fuel}>
                  <option value="">{fuel ? "— Select Unit —" : "— Select Fuel First —"}</option>
                  {unitOptions.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Period</label>
                <select className={selectCls} value={period} onChange={e => setPeriod(e.target.value)}>
                  <option value="day">Per Day</option>
                  <option value="month">Per Month</option>
                  <option value="year">Per Year</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Fuel Consumption</label>
                <input type="number" className={inputCls} placeholder="Enter quantity" min="0" value={qty} onChange={e => setQty(e.target.value)} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Fuel Price ({sym.trim()})</label>
                <input type="number" className={inputCls} placeholder="Price per unit" min="0" value={rate} onChange={e => setRate(e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Price Unit</label>
                <input type="text" className={`${inputCls} bg-gray-50 text-gray-500`} value={unit ? `per ${unit}` : ""} readOnly />
              </div>
            </div>

            {/* Emission factor inline */}
            {efEntry && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-700">{fuel} — Emission Factors (IPCC AR6):</span>{" "}
                TTW {efEntry.co2} kg CO₂/{unit} | WTW {efEntry.tco2e} kg CO₂e/{unit}
                <br /><span className="text-gray-400">{efEntry.src}</span>
              </div>
            )}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
            Please fill in all required fields before calculating.
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculate}
            className="flex-1 flex items-center justify-center gap-2 bg-[#1B6B3D] hover:bg-[#134f2e] text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition shadow-sm"
          >
            <Calculator className="w-4 h-4" />
            Calculate Savings &amp; Emissions
          </button>
          <button
            onClick={reset}
            className="flex items-center gap-2 border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-800 text-sm px-5 py-3.5 rounded-lg transition"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>

        {/* ── Results ────────────────────────────────────────────── */}
        {results && (
          <div id="calc-results" className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

            {/* Results header */}
            <div className="flex items-center gap-3 bg-[#1B6B3D] text-white px-5 py-4">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              <h2 className="text-sm font-semibold">Results &amp; Savings Estimate</h2>
            </div>

            <div className="p-5 space-y-5">

              {/* Summary */}
              <div>
                <p className={sectionCls}>Summary</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Annual Fuel Consumption</p>
                    <p className="font-mono text-lg font-medium text-gray-900">{fmt(results.annQty, 1)}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{results.unit} per year</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Annual Fuel Spend</p>
                    <p className="font-mono text-xl font-medium text-[#134f2e]">{resultSym}{fmt(results.annCost)}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Annual | {results.currency}</p>
                  </div>
                </div>
              </div>

              {/* Savings */}
              <div>
                <p className={sectionCls}>Fuel Cost Saving Estimate</p>
                <div className="rounded-lg p-5 text-white" style={{ background: "linear-gradient(135deg,#1B6B3D 0%,#134f2e 100%)" }}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#FFD700] mr-2" />
                    Estimated Annual Saving with {resultProduct}*
                  </p>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-white/60 text-sm">Up to</span>
                    <span className="font-mono text-2xl font-medium">{resultSym}{fmt(results.saveCost)}</span>
                    <span className="text-white/60 text-sm">per year</span>
                  </div>
                  <p className="text-xs text-white/70 mt-2">
                    Estimate at up to {results.savePct}% fuel saving for {results.assetLabel} — up to {fmt(results.saveQty, 1)} {results.unit} of fuel saved per year.
                  </p>
                  <SavingsDisclaimer className="text-white/70 mt-2" />
                </div>
              </div>

              {/* ROI */}
              <div>
                <p className={sectionCls}>Return on Investment</p>
                <div className="bg-green-50 border border-[#1B6B3D]/20 rounded-lg p-4">
                  {results.product === "greendrive" ? (
                    <>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Payback — GreenDrive</p>
                      <p className="text-lg font-medium text-[#134f2e]">{CLAIMS.greendrive.roi}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">ROI — {resultProduct}</p>
                      <p className="text-lg font-medium text-[#134f2e]">
                        {results.product === "greenx" ? CLAIMS.greenx.roi : CLAIMS.greenedge.roi}
                      </p>
                    </>
                  )}
                  <SavingsDisclaimer className="text-gray-500 mt-2" />
                </div>
              </div>

              {/* GHG Baseline */}
              <div>
                <p className={sectionCls}>Annual GHG Emissions (Current Baseline, Estimate)</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-green-50 border border-[#1B6B3D]/20 rounded-lg p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">CO₂ Emissions (TTW / Scope 1)</p>
                    <p className="font-mono text-xl font-medium text-[#134f2e]">{fmt(results.annCO2, 1)}</p>
                    <p className="text-xs text-gray-500 mt-0.5">tonnes CO₂ / year</p>
                  </div>
                  <div className="bg-green-50 border border-[#1B6B3D]/20 rounded-lg p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">GHG incl. Upstream (WTW)</p>
                    <p className="font-mono text-xl font-medium text-[#134f2e]">{fmt(results.annCO2e, 1)}</p>
                    <p className="text-xs text-gray-500 mt-0.5">tCO₂e / year (Scope 1+3)</p>
                  </div>
                </div>
              </div>

              {/* GHG Reduction */}
              <div>
                <p className={sectionCls}>CO₂ Avoided (Estimate)</p>
                <div className="rounded-lg p-4" style={{ background: "linear-gradient(135deg,#1a3d2b 0%,#134f2e 100%)" }}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/60 mb-3">
                    Estimated annual reduction at up to {results.savePct}% fuel saving*
                  </p>
                  <div className="space-y-2">
                    {[
                      { label: "CO₂ avoided (TTW)", value: `Up to ${fmt(results.co2Red, 1)} t CO₂/yr` },
                      { label: "tCO₂e avoided (WTW)", value: `Up to ${fmt(results.co2eRed, 1)} tCO₂e/yr` },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                        <span className="text-sm text-white/80">{row.label}</span>
                        <span className="font-mono text-sm font-medium text-[#FFD700]">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-white/70 mt-3">{CLAIMS.co2}</p>
                  <SavingsDisclaimer className="text-white/70 mt-1" />
                </div>
              </div>

              {/* Emissions */}
              <div>
                <p className={sectionCls}>Emissions</p>
                {isEngine ? (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[CLAIMS.greendrive.pm, CLAIMS.greendrive.nox].map(line => (
                      <div key={line} className="border border-gray-200 rounded-lg p-4">
                        <p className="font-mono text-sm font-medium text-gray-800">{line}</p>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{resultProduct} — diesel engines</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-800 leading-relaxed">{CLAIMS.greenedge.emissions}</p>
                  </div>
                )}
              </div>

              {/* Methodology note */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-700">How this estimate is made:</span>{" "}
                Annual saving = your annual fuel consumption × your fuel price × the {resultProduct} &ldquo;up to&rdquo; figure ({results.savePct}%). CO₂ avoided = fuel saved × the emission factor for the fuel. Diesel CO₂ TTW = 2.68 kg/L (IPCC AR6). WTT upstream = 0.60 kg CO₂e/L. WTW total = 3.28 kg CO₂e/L. For other fuels: IPCC AR6 / IMO DCS default factors. tCO₂e includes CH₄ (GWP-100 ×28) and N₂O (×265).
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-white border-l-4 border-[#FFD700] rounded-lg p-4 text-xs text-gray-600 leading-relaxed shadow-sm">
          <span className="font-semibold text-gray-800">Disclaimer:</span>{" "}
          Results are estimates, calculated from the figures you enter at our &ldquo;up to&rdquo; fuel-saving figures and standard emission factors. {DISCLAIMER}
        </div>

        {/* CTA */}
        <div className="rounded-xl p-7 text-white text-center shadow-md" style={{ background: "linear-gradient(135deg,#134f2e,#1B6B3D)" }}>
          <h3 className="text-lg font-bold mb-2">Want a Tailored Assessment?</h3>
          <p className="text-sm text-white/75 mb-5 max-w-md mx-auto leading-relaxed">
            Our engineers can assess your fleet, DG sets, or burners and furnaces and show you what you could save.
          </p>
          <Link
            href={ROUTES.contact}
            className="inline-flex items-center gap-2 bg-[#FFD700] text-[#134f2e] font-bold text-sm px-7 py-3 rounded-lg hover:bg-yellow-300 transition shadow"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Request Detailed Assessment
          </Link>
        </div>

      </div>
    </div>
  );
}
