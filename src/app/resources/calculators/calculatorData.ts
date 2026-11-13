import { CLAIMS } from "@/data/siteContent";

// ─── Country → Currency ───────────────────────────────────────────────────────
export const COUNTRY_CURRENCY: Record<string, string> = {
  India: "INR", UAE: "AED", "Saudi Arabia": "SAR",
  Singapore: "SGD", Malaysia: "MYR", Thailand: "THB",
  Indonesia: "IDR", Australia: "AUD", "South Africa": "ZAR",
  UK: "GBP", USA: "USD", Other: "USD",
};

export const CURRENCY_SYMBOLS: Record<string, string> = {
  INR: "₹", USD: "$", AED: "AED ", SAR: "SAR ", SGD: "S$",
  MYR: "RM ", THB: "฿", IDR: "Rp ", AUD: "A$", ZAR: "R ", GBP: "£", EUR: "€",
};

// ─── Asset → Product line ─────────────────────────────────────────────────────
export type ProductLine = "greendrive" | "greenx" | "greenedge";

export const ASSET_PRODUCT: Record<string, ProductLine> = {
  Truck:        "greendrive",
  Earthmover:   "greendrive",
  Construction: "greendrive",
  DG:           "greenx",
  Boiler:       "greenedge",
  Kiln:         "greenedge",
  Smelter:      "greenedge",
};

export const PRODUCT_NAME: Record<ProductLine, string> = {
  greendrive: "GreenDrive",
  greenx:     "GreenX",
  greenedge:  "GreenEdge",
};

// ─── Fuel-saving caps (the "up to" figures) ───────────────────────────────────
/** The highest fuel-saving percentage the calculator may ever apply or show. */
export const SAVING_CAP_PCT: Record<ProductLine, number> = {
  greendrive: CLAIMS.greendrive.fuelSavingPct,
  greenx:     CLAIMS.greenx.fuelSavingPct,
  greenedge:  CLAIMS.greenedge.fuelSavingPct,
};

/**
 * Fuel-saving percentage used for an asset: always the product's "up to"
 * figure, never above it. Returns null for an asset the calculator does not cover.
 */
export function savingPctFor(asset: string): number | null {
  const product = ASSET_PRODUCT[asset];
  if (!product) return null;
  return SAVING_CAP_PCT[product];
}

// ─── Asset → Allowed Fuels ────────────────────────────────────────────────────
export const ASSET_FUELS: Record<string, string[]> = {
  Truck:        ["Diesel"],
  Earthmover:   ["Diesel"],
  Construction: ["Diesel"],
  DG:           ["Diesel"],
  Boiler:       ["Coal", "Biomass", "Diesel", "HFO", "Kerosene", "Propane", "Natural Gas"],
  Kiln:         ["Coal", "Biomass", "Diesel", "HFO", "Pet Coke", "Propane", "Natural Gas"],
  Smelter:      ["Coal", "Biomass", "Diesel", "HFO", "Pet Coke", "Natural Gas"],
};

// ─── Fuel → Consumption Units ─────────────────────────────────────────────────
export const FUEL_UNITS: Record<string, string[]> = {
  Diesel:        ["Litres", "m³", "Tonnes"],
  Kerosene:      ["Litres", "m³"],
  HFO:           ["Litres", "Tonnes"],
  Coal:          ["kg", "Tonnes"],
  Biomass:       ["kg", "Tonnes"],
  "Pet Coke":    ["kg", "Tonnes"],
  Propane:       ["kg", "Litres"],
  "Natural Gas": ["SCM", "Nm³", "kg"],
};

// ─── Emission Factors (IPCC AR6) ──────────────────────────────────────────────
export type EFEntry = { co2: number; tco2e: number; src: string };
export const EF: Record<string, Record<string, EFEntry>> = {
  Diesel: {
    Litres: { co2: 2.68, tco2e: 3.28, src: "TTW 2.68 kg CO₂/L | WTT 0.60 | WTW 3.28 kg CO₂e/L" },
    "m³":   { co2: 2680, tco2e: 3280, src: "Diesel per m³ (×1000 from per-litre)" },
    Tonnes: { co2: 3190, tco2e: 3904, src: "TTW ~3.19 t CO₂/t | WTW ~3.90 tCO₂e/t" },
  },
  Kerosene: {
    Litres: { co2: 2.54, tco2e: 2.57, src: "IPCC AR6, 2.54 kg CO₂/L" },
    "m³":   { co2: 2540, tco2e: 2570, src: "IPCC AR6 (×1000)" },
  },
  HFO: {
    Litres: { co2: 3.114, tco2e: 3.15, src: "IPCC AR6 / IMO, 3.114 kg CO₂/L" },
    Tonnes: { co2: 3114,  tco2e: 3150, src: "IMO DCS factor, 3.114 t CO₂/t" },
  },
  Coal: {
    kg:     { co2: 2.42,  tco2e: 2.47,  src: "IPCC AR6, 2.42 kg CO₂/kg bituminous coal" },
    Tonnes: { co2: 2420,  tco2e: 2470,  src: "IPCC AR6 (×1000)" },
  },
  Biomass: {
    kg:     { co2: 0.0, tco2e: 0.0, src: "IPCC — biogenic CO₂ zero-rated (combustion)" },
    Tonnes: { co2: 0.0, tco2e: 0.0, src: "IPCC — biogenic CO₂ zero-rated" },
  },
  "Pet Coke": {
    kg:     { co2: 3.09, tco2e: 3.12, src: "IPCC AR6, 3.09 kg CO₂/kg petroleum coke" },
    Tonnes: { co2: 3090, tco2e: 3120, src: "IPCC AR6 (×1000)" },
  },
  Propane: {
    kg:     { co2: 2.99, tco2e: 3.02, src: "IPCC AR6, 2.99 kg CO₂/kg LPG" },
    Litres: { co2: 1.51, tco2e: 1.53, src: "IPCC AR6, ~0.505 kg/L × 2.99" },
  },
  "Natural Gas": {
    SCM:  { co2: 1.93, tco2e: 1.97, src: "IPCC AR6, natural gas 1.93 kg CO₂/SCM" },
    "Nm³":{ co2: 1.93, tco2e: 1.97, src: "IPCC AR6, same as SCM approx" },
    kg:   { co2: 2.75, tco2e: 2.80, src: "IPCC AR6, 2.75 kg CO₂/kg natural gas" },
  },
};

// ─── Asset Metadata ───────────────────────────────────────────────────────────
const TECH_CHIP = "CHFA Technology";

export const ASSET_META: Record<string, { label: string; sub: string; specs: string[] }> = {
  Truck:        { label: "Truck / Commercial Vehicle",    sub: "GreenDrive — diesel vehicles",   specs: ["Diesel", TECH_CHIP, `${CLAIMS.greendrive.fuelSaving} fuel saving*`, CLAIMS.greendrive.install] },
  Earthmover:   { label: "Earthmover / Mining Equipment", sub: "GreenDrive — diesel vehicles",   specs: ["Diesel", TECH_CHIP, `${CLAIMS.greendrive.fuelSaving} fuel saving*`, CLAIMS.greendrive.install] },
  Construction: { label: "Construction Equipment",        sub: "GreenDrive — diesel vehicles",   specs: ["Diesel", TECH_CHIP, `${CLAIMS.greendrive.fuelSaving} fuel saving*`, CLAIMS.greendrive.install] },
  DG:           { label: "DG Set / Diesel Generator",     sub: "GreenX — diesel generator sets", specs: ["Diesel", TECH_CHIP, `${CLAIMS.greenx.fuelSaving} fuel saving*`, "Sized per DG capacity"] },
  Boiler:       { label: "Industrial Boiler",             sub: "GreenEdge — burners and furnaces", specs: ["Gas / Oil / Coal / Biomass", TECH_CHIP, `${CLAIMS.greenedge.fuelSaving} fuel saving*`] },
  Kiln:         { label: "Rotary / Tunnel Kiln",          sub: "GreenEdge — burners and furnaces", specs: ["Gas / Oil / Coal / Biomass", TECH_CHIP, `${CLAIMS.greenedge.fuelSaving} fuel saving*`] },
  Smelter:      { label: "Smelter / Furnace",             sub: "GreenEdge — burners and furnaces", specs: ["Gas / Oil / Coal / Biomass", TECH_CHIP, `${CLAIMS.greenedge.fuelSaving} fuel saving*`] },
};

// ─── Asset Groups for Select ──────────────────────────────────────────────────
export const ASSET_GROUPS = [
  {
    label: "Engines — GreenDrive (road)",
    options: [
      { value: "Truck",        label: "Truck / Commercial Vehicle" },
      { value: "Earthmover",   label: "Earthmover / Mining Equipment" },
      { value: "Construction", label: "Construction Equipment" },
    ],
  },
  {
    label: "Engines — GreenX (power)",
    options: [
      { value: "DG", label: "DG Set / Diesel Generator" },
    ],
  },
  {
    label: "Burners & Furnaces — GreenEdge",
    options: [
      { value: "Boiler",  label: "Boiler" },
      { value: "Kiln",    label: "Kiln" },
      { value: "Smelter", label: "Smelter / Furnace" },
    ],
  },
];

// ─── Asset SVGs ───────────────────────────────────────────────────────────────
export const ASSET_SVGS: Record<string, string> = {
  Boiler: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
  <rect x="80" y="60" width="160" height="130" rx="12" fill="#2a8c52" opacity="0.15" stroke="#1B6B3D" stroke-width="2"/>
  <rect x="88" y="68" width="144" height="114" rx="9" fill="#f0faf4" stroke="#1B6B3D" stroke-width="1.5"/>
  <rect x="100" y="120" width="120" height="50" rx="6" fill="#1B6B3D" opacity="0.08" stroke="#1B6B3D" stroke-width="1.2" stroke-dasharray="4,3"/>
  <g transform="translate(105,155)"><path d="M0 0 Q5-20 10-8 Q15-32 20-5 Q25-24 30-0 Z" fill="#FFD700" opacity="0.9"/><path d="M8 0 Q13-14 18-6 Q23-22 28-0 Z" fill="#ff8c00" opacity="0.7"/></g>
  <g transform="translate(155,155)"><path d="M0 0 Q5-18 10-6 Q15-28 20-4 Q25-20 30-0 Z" fill="#FFD700" opacity="0.9"/><path d="M8 0 Q13 -12 18-5 Q23-18 28-0 Z" fill="#ff8c00" opacity="0.7"/></g>
  <rect x="135" y="20" width="50" height="44" rx="5" fill="#e8f5ee" stroke="#1B6B3D" stroke-width="2"/>
  <rect x="128" y="15" width="64" height="12" rx="4" fill="#1B6B3D"/>
  <circle cx="148" cy="8" r="6" fill="#adb5bd" opacity="0.4"/><circle cx="162" cy="3" r="7" fill="#adb5bd" opacity="0.3"/><circle cx="175" cy="7" r="5" fill="#adb5bd" opacity="0.35"/>
  <line x1="30" y1="100" x2="80" y2="100" stroke="#1B6B3D" stroke-width="2" stroke-dasharray="5,4"/>
  <circle cx="30" cy="100" r="14" fill="#e8f5ee" stroke="#1B6B3D" stroke-width="1.5"/>
  <text x="30" y="95" text-anchor="middle" font-size="7" fill="#1B6B3D" font-weight="700">HHO</text>
  <text x="30" y="104" text-anchor="middle" font-size="7" fill="#1B6B3D">GEN</text>
  <polygon points="76,96 80,100 76,104" fill="#1B6B3D"/>
  <circle cx="240" cy="90" r="14" fill="#e8f5ee" stroke="#1B6B3D" stroke-width="1.5"/>
  <line x1="240" y1="90" x2="248" y2="84" stroke="#1B6B3D" stroke-width="1.5" stroke-linecap="round"/>
  <text x="240" y="106" text-anchor="middle" font-size="7" fill="#6c757d">BAR</text>
  <circle cx="258" cy="70" r="6" fill="#FFD700"/><circle cx="258" cy="70" r="10" fill="none" stroke="#FFD700" stroke-width="1.2" opacity="0.5"/>
  <rect x="145" y="75" width="30" height="32" rx="4" fill="none" stroke="#1B6B3D" stroke-width="1.5"/>
  <circle cx="171" cy="91" r="3" fill="#1B6B3D"/>
  <line x1="100" y1="190" x2="100" y2="210" stroke="#1B6B3D" stroke-width="4" stroke-linecap="round"/>
  <line x1="140" y1="190" x2="140" y2="210" stroke="#1B6B3D" stroke-width="4" stroke-linecap="round"/>
  <line x1="180" y1="190" x2="180" y2="210" stroke="#1B6B3D" stroke-width="4" stroke-linecap="round"/>
  <line x1="220" y1="190" x2="220" y2="210" stroke="#1B6B3D" stroke-width="4" stroke-linecap="round"/>
</svg>`,

  Kiln: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="160" cy="130" rx="100" ry="38" fill="#e8f5ee" stroke="#1B6B3D" stroke-width="2" transform="rotate(-6,160,130)"/>
  <rect x="60" y="100" width="200" height="52" rx="6" fill="#e8f5ee" stroke="#1B6B3D" stroke-width="2" transform="rotate(-6,160,126)"/>
  <ellipse cx="265" cy="116" rx="32" ry="12" fill="#c8e6d4" stroke="#1B6B3D" stroke-width="2" transform="rotate(-6,265,116)"/>
  <ellipse cx="55" cy="140" rx="32" ry="12" fill="#c8e6d4" stroke="#1B6B3D" stroke-width="2" transform="rotate(-6,55,140)"/>
  <ellipse cx="55" cy="140" rx="28" ry="10" fill="#FFD700" opacity="0.5" transform="rotate(-6,55,140)"/>
  <path d="M32 144 Q25 128 38 136 Q28 115 45 130 Q35 110 52 125 Q45 105 60 122 Z" fill="#FFD700" opacity="0.85" transform="rotate(-6,50,130)"/>
  <path d="M38 144 Q32 130 44 138 Q36 120 50 133 Z" fill="#ff8c00" opacity="0.7" transform="rotate(-6,50,130)"/>
  <rect x="90" y="97" width="12" height="56" rx="5" fill="#1B6B3D" opacity="0.6" transform="rotate(-6,96,125)"/>
  <rect x="200" y="90" width="12" height="52" rx="5" fill="#1B6B3D" opacity="0.6" transform="rotate(-6,206,116)"/>
  <ellipse cx="96" cy="170" rx="16" ry="6" fill="#adb5bd" stroke="#6c757d" stroke-width="1.2"/>
  <ellipse cx="210" cy="162" rx="16" ry="6" fill="#adb5bd" stroke="#6c757d" stroke-width="1.2"/>
  <rect x="84" y="168" width="24" height="20" rx="3" fill="none" stroke="#6c757d" stroke-width="1.5"/>
  <rect x="198" y="160" width="24" height="20" rx="3" fill="none" stroke="#6c757d" stroke-width="1.5"/>
  <line x1="268" y1="100" x2="290" y2="90" stroke="#1B6B3D" stroke-width="1.8" stroke-dasharray="4,3"/>
  <circle cx="295" cy="87" r="14" fill="#e8f5ee" stroke="#1B6B3D" stroke-width="1.5"/>
  <text x="295" y="83" text-anchor="middle" font-size="7" fill="#1B6B3D" font-weight="700">HHO</text>
  <text x="295" y="92" text-anchor="middle" font-size="7" fill="#1B6B3D">GEN</text>
  <rect x="265" y="30" width="24" height="60" rx="4" fill="#e8f5ee" stroke="#1B6B3D" stroke-width="1.5" transform="rotate(-6,277,60)"/>
  <circle cx="272" cy="22" r="7" fill="#adb5bd" opacity="0.4"/><circle cx="285" cy="16" r="8" fill="#adb5bd" opacity="0.35"/>
  <circle cx="155" cy="118" r="5" fill="#FFD700"/><circle cx="155" cy="118" r="9" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.5"/>
</svg>`,

  Smelter: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
  <path d="M80,60 L90,195 L230,195 L240,60 Z" fill="#e8f5ee" stroke="#1B6B3D" stroke-width="2"/>
  <path d="M85,65 L95,190 L225,190 L235,65 Z" fill="#f8f9fa" stroke="none"/>
  <ellipse cx="160" cy="155" rx="55" ry="30" fill="#FFD700" opacity="0.25"/>
  <ellipse cx="160" cy="165" rx="40" ry="20" fill="#ff8c00" opacity="0.2"/>
  <rect x="140" y="185" width="40" height="10" rx="3" fill="#FFD700" opacity="0.7" stroke="#e6a000" stroke-width="1"/>
  <path d="M150 195 Q160 210 170 195" fill="none" stroke="#FFD700" stroke-width="3" opacity="0.6"/>
  <rect x="130" y="30" width="10" height="80" rx="4" fill="#1B6B3D" opacity="0.7"/>
  <rect x="155" y="20" width="10" height="90" rx="4" fill="#1B6B3D" opacity="0.7"/>
  <rect x="180" y="28" width="10" height="82" rx="4" fill="#1B6B3D" opacity="0.7"/>
  <circle cx="135" cy="115" r="8" fill="#FFD700" opacity="0.6"/>
  <circle cx="160" cy="115" r="8" fill="#FFD700" opacity="0.6"/>
  <circle cx="185" cy="115" r="8" fill="#FFD700" opacity="0.6"/>
  <line x1="35" y1="120" x2="80" y2="120" stroke="#1B6B3D" stroke-width="2" stroke-dasharray="5,4"/>
  <circle cx="22" cy="120" r="14" fill="#e8f5ee" stroke="#1B6B3D" stroke-width="1.5"/>
  <text x="22" y="116" text-anchor="middle" font-size="7" fill="#1B6B3D" font-weight="700">HHO</text>
  <text x="22" y="125" text-anchor="middle" font-size="7" fill="#1B6B3D">GEN</text>
  <polygon points="76,116 80,120 76,124" fill="#1B6B3D"/>
  <circle cx="150" cy="48" r="8" fill="#adb5bd" opacity="0.4"/><circle cx="165" cy="38" r="10" fill="#adb5bd" opacity="0.35"/><circle cx="178" cy="44" r="7" fill="#adb5bd" opacity="0.3"/>
  <circle cx="258" cy="80" r="6" fill="#FFD700"/><circle cx="258" cy="80" r="10" fill="none" stroke="#FFD700" stroke-width="1.2" opacity="0.5"/>
</svg>`,

  DG: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="155" width="240" height="20" rx="4" fill="#1B6B3D" opacity="0.3"/>
  <rect x="50" y="90" width="220" height="68" rx="8" fill="#e8f5ee" stroke="#1B6B3D" stroke-width="2"/>
  <ellipse cx="268" cy="124" rx="24" ry="34" fill="#c8e6d4" stroke="#1B6B3D" stroke-width="2"/>
  <ellipse cx="268" cy="124" rx="14" ry="20" fill="#1B6B3D" opacity="0.15"/>
  <rect x="52" y="92" width="130" height="64" rx="6" fill="#1B6B3D" opacity="0.08"/>
  <rect x="65" y="75" width="22" height="20" rx="4" fill="#c8e6d4" stroke="#1B6B3D" stroke-width="1.5"/>
  <rect x="98" y="75" width="22" height="20" rx="4" fill="#c8e6d4" stroke="#1B6B3D" stroke-width="1.5"/>
  <rect x="131" y="75" width="22" height="20" rx="4" fill="#c8e6d4" stroke="#1B6B3D" stroke-width="1.5"/>
  <rect x="164" y="75" width="22" height="20" rx="4" fill="#c8e6d4" stroke="#1B6B3D" stroke-width="1.5"/>
  <rect x="85" y="55" width="12" height="25" rx="4" fill="#6c757d"/>
  <circle cx="85" cy="50" r="6" fill="#adb5bd" opacity="0.5"/><circle cx="94" cy="43" r="8" fill="#adb5bd" opacity="0.4"/><circle cx="105" cy="48" r="6" fill="#adb5bd" opacity="0.35"/>
  <rect x="200" y="100" width="50" height="40" rx="4" fill="#134f2e"/>
  <circle cx="214" cy="115" r="4" fill="#FFD700"/><circle cx="228" cy="115" r="4" fill="#2a8c52"/><circle cx="242" cy="115" r="4" fill="#ff6b6b" opacity="0.8"/>
  <rect x="208" y="126" width="36" height="6" rx="2" fill="#2a8c52" opacity="0.6"/>
  <rect x="48" y="100" width="36" height="48" rx="5" fill="#1B6B3D" opacity="0.1" stroke="#1B6B3D" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="66" y="118" text-anchor="middle" font-size="7" fill="#1B6B3D" font-weight="700">HHO</text>
  <text x="66" y="128" text-anchor="middle" font-size="7" fill="#1B6B3D">GreenX</text>
  <line x1="84" y1="124" x2="92" y2="124" stroke="#1B6B3D" stroke-width="1.5"/>
  <polygon points="88,121 92,124 88,127" fill="#1B6B3D"/>
  <line x1="268" y1="110" x2="300" y2="90" stroke="#FFD700" stroke-width="2"/>
  <line x1="268" y1="124" x2="300" y2="124" stroke="#FFD700" stroke-width="2"/>
  <line x1="268" y1="138" x2="300" y2="154" stroke="#FFD700" stroke-width="2"/>
  <circle cx="155" cy="108" r="5" fill="#FFD700"/><circle cx="155" cy="108" r="9" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.5"/>
</svg>`,

  Truck: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="185" width="320" height="35" fill="#e9ecef"/>
  <line x1="0" y1="198" x2="320" y2="198" stroke="white" stroke-width="2" stroke-dasharray="20,15"/>
  <rect x="20" y="110" width="190" height="76" rx="6" fill="#e8f5ee" stroke="#1B6B3D" stroke-width="2"/>
  <rect x="55" y="128" width="110" height="36" rx="4" fill="#1B6B3D" opacity="0.08"/>
  <text x="110" y="143" text-anchor="middle" font-size="9" fill="#1B6B3D" font-weight="700">GreenDrive</text>
  <text x="110" y="155" text-anchor="middle" font-size="8" fill="#2a8c52">HHO Technology</text>
  <rect x="210" y="120" width="96" height="66" rx="8" fill="#1B6B3D" opacity="0.85"/>
  <path d="M218,128 L218,152 Q250,148 296,158 L296,128 Z" fill="#c8e6d4" opacity="0.7"/>
  <path d="M218,128 Q220,108 250,105 L296,108 L296,128 Z" fill="#1B6B3D" opacity="0.9"/>
  <rect x="282" y="82" width="10" height="30" rx="3" fill="#6c757d"/>
  <circle cx="282" cy="78" r="5" fill="#adb5bd" opacity="0.5"/><circle cx="292" cy="70" r="7" fill="#adb5bd" opacity="0.4"/>
  <circle cx="304" cy="148" r="6" fill="#FFD700" opacity="0.9"/>
  <circle cx="58" cy="187" r="18" fill="#343a40" stroke="#6c757d" stroke-width="2"/><circle cx="58" cy="187" r="9" fill="#6c757d"/>
  <circle cx="110" cy="187" r="18" fill="#343a40" stroke="#6c757d" stroke-width="2"/><circle cx="110" cy="187" r="9" fill="#6c757d"/>
  <circle cx="230" cy="187" r="18" fill="#343a40" stroke="#6c757d" stroke-width="2"/><circle cx="230" cy="187" r="9" fill="#6c757d"/>
  <circle cx="268" cy="187" r="18" fill="#343a40" stroke="#6c757d" stroke-width="2"/><circle cx="268" cy="187" r="9" fill="#6c757d"/>
  <rect x="215" y="158" width="40" height="18" rx="4" fill="#1B6B3D" opacity="0.2" stroke="#1B6B3D" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="235" y="169" text-anchor="middle" font-size="6" fill="#1B6B3D" font-weight="700">HHO UNIT</text>
  <line x1="255" y1="105" x2="255" y2="95" stroke="#FFD700" stroke-width="1.5"/>
  <circle cx="255" cy="93" r="4" fill="#FFD700"/><circle cx="255" cy="93" r="8" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.5"/>
</svg>`,

  Earthmover: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 185 Q80 178 160 185 Q240 192 320 185 L320 220 L0 220 Z" fill="#e9ecef"/>
  <rect x="85" y="115" width="145" height="72" rx="8" fill="#FFD700" opacity="0.9" stroke="#e6a000" stroke-width="2"/>
  <rect x="175" y="82" width="80" height="54" rx="6" fill="#e6a000"/>
  <rect x="184" y="90" width="62" height="28" rx="4" fill="#c8e6d4" opacity="0.7"/>
  <rect x="172" y="74" width="88" height="14" rx="4" fill="#e6a000"/>
  <line x1="176" y1="74" x2="176" y2="55" stroke="#343a40" stroke-width="3"/>
  <line x1="258" y1="74" x2="258" y2="55" stroke="#343a40" stroke-width="3"/>
  <line x1="176" y1="55" x2="258" y2="55" stroke="#343a40" stroke-width="3"/>
  <rect x="248" y="40" width="8" height="20" rx="3" fill="#6c757d"/>
  <circle cx="248" cy="36" r="5" fill="#adb5bd" opacity="0.5"/>
  <rect x="25" y="105" width="75" height="14" rx="5" fill="#e6a000" stroke="#b8860b" stroke-width="1.5" transform="rotate(15,62,112)"/>
  <rect x="18" y="128" width="55" height="10" rx="4" fill="#e6a000" stroke="#b8860b" stroke-width="1.5" transform="rotate(-10,46,133)"/>
  <path d="M8 155 Q4 175 30 178 Q50 180 55 162 Z" fill="#FFD700" stroke="#e6a000" stroke-width="1.5"/>
  <circle cx="115" cy="187" r="28" fill="#343a40" stroke="#495057" stroke-width="3"/><circle cx="115" cy="187" r="14" fill="#6c757d"/><circle cx="115" cy="187" r="5" fill="#adb5bd"/>
  <circle cx="210" cy="187" r="28" fill="#343a40" stroke="#495057" stroke-width="3"/><circle cx="210" cy="187" r="14" fill="#6c757d"/><circle cx="210" cy="187" r="5" fill="#adb5bd"/>
  <rect x="130" y="125" width="50" height="28" rx="4" fill="#1B6B3D" opacity="0.15" stroke="#1B6B3D" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="155" y="137" text-anchor="middle" font-size="7" fill="#1B6B3D" font-weight="700">GreenDrive</text>
  <text x="155" y="148" text-anchor="middle" font-size="6" fill="#1B6B3D">HHO System</text>
  <circle cx="260" cy="68" r="5" fill="#FFD700"/><circle cx="260" cy="68" r="9" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.5"/>
</svg>`,

  Construction: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="188" width="320" height="32" fill="#e9ecef"/>
  <rect x="60" y="138" width="180" height="52" rx="8" fill="#FFD700" opacity="0.9" stroke="#e6a000" stroke-width="2"/>
  <rect x="175" y="100" width="75" height="44" rx="6" fill="#e6a000"/>
  <rect x="182" y="108" width="58" height="24" rx="4" fill="#c8e6d4" opacity="0.7"/>
  <line x1="178" y1="100" x2="178" y2="76" stroke="#343a40" stroke-width="3"/>
  <line x1="248" y1="100" x2="248" y2="76" stroke="#343a40" stroke-width="3"/>
  <line x1="178" y1="76" x2="248" y2="76" stroke="#343a40" stroke-width="3"/>
  <line x1="95" y1="140" x2="50" y2="30" stroke="#1B6B3D" stroke-width="5" stroke-linecap="round"/>
  <line x1="50" y1="30" x2="90" y2="22" stroke="#1B6B3D" stroke-width="3" stroke-linecap="round"/>
  <line x1="90" y1="22" x2="90" y2="80" stroke="#6c757d" stroke-width="1.5"/>
  <path d="M86,80 Q90,88 94,80" fill="none" stroke="#6c757d" stroke-width="1.5"/>
  <rect x="76" y="60" width="28" height="20" rx="3" fill="#c8e6d4" stroke="#1B6B3D" stroke-width="1.5"/>
  <line x1="60" y1="185" x2="32" y2="196" stroke="#343a40" stroke-width="3"/><circle cx="28" cy="198" r="6" fill="#6c757d"/>
  <line x1="240" y1="185" x2="268" y2="196" stroke="#343a40" stroke-width="3"/><circle cx="272" cy="198" r="6" fill="#6c757d"/>
  <circle cx="98" cy="192" r="18" fill="#343a40" stroke="#495057" stroke-width="2"/><circle cx="98" cy="192" r="9" fill="#6c757d"/>
  <circle cx="205" cy="192" r="18" fill="#343a40" stroke="#495057" stroke-width="2"/><circle cx="205" cy="192" r="9" fill="#6c757d"/>
  <rect x="125" y="150" width="50" height="22" rx="4" fill="#1B6B3D" opacity="0.15" stroke="#1B6B3D" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="150" y="161" text-anchor="middle" font-size="7" fill="#1B6B3D" font-weight="700">GreenDrive</text>
  <text x="150" y="169" text-anchor="middle" font-size="6" fill="#1B6B3D">HHO System</text>
  <circle cx="248" cy="86" r="5" fill="#FFD700"/><circle cx="248" cy="86" r="9" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.5"/>
  <rect x="230" y="68" width="8" height="16" rx="3" fill="#6c757d"/>
</svg>`,
};