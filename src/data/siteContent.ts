/**
 * Single source of truth for claims, product facts, credentials, routes and
 * video IDs used across the site. Change a figure here and every page that
 * shows it follows.
 */

// ─── Company ────────────────────────────────────────────────────────────────
export const COMPANY = {
  name: "SGT HydroEdge",
  positioning: "Decarbonisation Infrastructure",
  email: "contact@sgthydroedge.com",
  website: "www.sgthydroedge.com",
  url: "https://sgthydroedge.com",
  founder: { name: "Alok Kumar", title: "Founder & Managing Director", shortTitle: "Founder & MD" },
  incorporated: "11 September 2023",
  youtubeChannel: "https://www.youtube.com/@SGTHydroedge",
  linkedin: "https://linkedin.com/company/sgthydroedge/",
} as const;

// ─── Approved lines (from the November 2026 films) ──────────────────────────
export const LINES = {
  positioning:
    "Decarbonisation infrastructure for the engines, burners and furnaces the world already runs, on land and at sea.",
  heroSub:
    "Patented Controlled Hydrogen Fuel Assist Technology — hydrogen made on demand, never stored.",
  core: "We don't ask you to replace the engines, burners and furnaces you run — we make them cleaner, and we prove it.",
  measure: "Decarbonisation you can measure.",
  saveCutProve: "Save fuel. Cut carbon. Prove it with data.",
  onDemand: "Made on demand. Never stored.",
  equation: "Hardware + Controls + Software = Decarbonisation infrastructure.",
  onePlatform: "One platform. Two applications: engines, and burners and furnaces.",
  greenVision: "Every truck has a story. GreenVision reads it.",
  control: "Control is the technology.",
  ceo: "Our mission is to make net zero practical, profitable and scalable.",
  partner: "Partner with us — as a customer, distributor, dealer or referral partner.",
} as const;

// ─── Claims ─────────────────────────────────────────────────────────────────
/** Must accompany every fuel-saving figure. */
export const DISCLAIMER = "Savings vary by engine, asset and operating conditions.";

export const TECHNOLOGY = {
  short: "CHFA",
  name: "Controlled Hydrogen Fuel Assist",
  full: "CHFA — Controlled Hydrogen Fuel Assist Technology",
  credit: "Developed & patented by SGT HydroEdge",
  patentNo: "582824",
  patentTitle: "An Apparatus for Hydrogen Generation and a Method Thereof",
} as const;

export const CLAIMS = {
  greendrive: {
    fuelSaving: "Up to 18%",
    fuelSavingPct: 18,
    pm: "PM up to 80%",
    nox: "NOx up to 60%",
    km: "1,000,000+ km",
    kmLabel: "1,000,000+ km driven",
    tested: "Tested for over three years on real engines",
    roi: "Most likely within 6 to 24 months",
    install: "Installed in hours",
    warranty: "1-year standard warranty",
  },
  greenx: {
    fuelSaving: "Up to 12%",
    fuelSavingPct: 12,
    pm: "PM up to 80%",
    nox: "NOx up to 60%",
    range: "Field-tested on DG sets from 125 to 1,500 kVA across multiple makes",
    study: "Backed by a peer-reviewed ARAI study covering five generator platforms",
    roi: "Attractive ROI, depending on DG running hours and operating load",
    status: "Market-ready, field-tested across multiple DG sets and makes",
  },
  greenedge: {
    fuelSaving: "Up to 12%",
    fuelSavingPct: 12,
    emissions:
      "Lower smoke and PM at the chimney, and lower CO₂ in line with lower fuel consumption.",
    roi: "Attractive ROI, depending on running hours and operating load",
    fieldTrials: [
      { saving: "3.6%", asset: "PNG furnace" },
      { saving: "6.6%", asset: "Diesel-fired hot-water generator" },
    ],
    validation: "Field-validated at customer sites under the CII Ascent Grant 2026",
  },
  co2: "CO₂ falls in line with fuel saved.",
  arai: {
    testing: "R&D testing with ARAI",
    research: "Peer-reviewed research published with ARAI",
    papers: "Two papers published with ARAI in ARAI's journal",
  },
  connectivity: "4G",
  norms: "Compatible with both Bharat Stage and Euro norm engines",
  madeIn: "Made in India",
} as const;

// ─── Routes ─────────────────────────────────────────────────────────────────
export const ROUTES = {
  home: "/",
  greendrive: "/solutions/greendrive",
  greenx: "/solutions/greenx",
  greenmarine: "/solutions/greenmarine",
  greenedge: "/solutions/greenedge",
  daas: "/solutions/daas",
  chfa: "/technology/chfa",
  sgtos: "/technology/sgt-os",
  greenvision: "/technology/greenvision",
  calculator: "/resources/calculators",
  gallery: "/resources/gallery",
  media: "/resources/media",
  videos: "/resources/videos",
  downloads: "/resources/downloads",
  knowledgebase: "/resources/knowledgebase",
  certification: "/certification",
  journey: "/about/journey",
  leadership: "/about/leadership",
  partners: "/about/partners",
  contact: "/contact",
} as const;

// ─── Products ───────────────────────────────────────────────────────────────
export type ProductKey = "greendrive" | "greenx" | "greenmarine" | "greenedge";

export const PRODUCTS: Record<
  ProductKey,
  {
    name: string;
    group: "Engines" | "Burners & Furnaces";
    segment: string;
    oneLiner: string;
    figure: string;
    figureLabel: string;
    href: string;
    image: string;
    imageAlt: string;
    badge?: string;
  }
> = {
  greendrive: {
    name: "GreenDrive",
    group: "Engines",
    segment: "Road — diesel vehicles",
    oneLiner:
      "Intelligent hydrogen fuel-assist retrofit for diesel vehicles — installed in hours, with no engine modification.",
    figure: CLAIMS.greendrive.fuelSaving,
    figureLabel: "fuel saving*",
    href: ROUTES.greendrive,
    image: "/images/nov26/greendrive-tipper-truck.webp",
    imageAlt: "Tipper truck fitted with a GreenDrive unit beside the fuel tank",
  },
  greenx: {
    name: "GreenX",
    group: "Engines",
    segment: "Power — diesel generator sets",
    oneLiner: "The same CHFA platform, applied to DG sets.",
    figure: CLAIMS.greenx.fuelSaving,
    figureLabel: "fuel saving*",
    href: ROUTES.greenx,
    image: "/images/nov26/greenx-with-dg-set.webp",
    imageAlt: "GreenX unit connected to the air intake of a diesel generator set",
  },
  greenmarine: {
    name: "GreenMarine",
    group: "Engines",
    segment: "Marine — engines and onboard generators",
    oneLiner:
      "The same platform, taken to sea — for marine engines and onboard generators.",
    figure: "2027",
    figureLabel: "first marine trial planned",
    href: ROUTES.greenmarine,
    image: "/images/greenmarine/hero-marine.png",
    imageAlt: "Container ship being guided into port by tugboats",
    badge: "Next frontier",
  },
  greenedge: {
    name: "GreenEdge",
    group: "Burners & Furnaces",
    segment: "Industry — burners and furnaces, any fuel",
    oneLiner:
      "CHFA for industrial burners and furnaces, on any hydrocarbon fuel — gas, oil, coal or biomass.",
    figure: CLAIMS.greenedge.fuelSaving,
    figureLabel: "fuel saving*",
    href: ROUTES.greenedge,
    image: "/images/nov26/greenedge-site-furnace.webp",
    imageAlt: "GreenEdge unit and digital rectifier installed beside an industrial furnace",
  },
};

export const GREENDRIVE_MODELS = [
  {
    name: "GreenDrive One",
    system: "12 V",
    use: "Small commercial vehicles, engines below 3.5 L",
    size: "38 × 32 × 36 cm",
    weight: "22 / 30 kg",
    tank: "5 L",
  },
  {
    name: "GreenDrive Neo",
    system: "24 V",
    use: "Medium commercial vehicles, engines above 3.5 L",
    size: "38 × 32 × 36 cm",
    weight: "22 / 30 kg",
    tank: "5 L",
  },
  {
    name: "GreenDrive Pro",
    system: "24 V",
    use: "Large engines above 7 L — heavy trucks, earthmovers, construction vehicles",
    size: "42 × 32 × 36 cm",
    weight: "25 / 33 kg",
    tank: "5 L",
  },
] as const;

export const GREENDRIVE_FACTS = {
  water:
    "DM water only, from time to time. About 1 L per 12–20 hours of engine running; the 5 L tank lasts 60–100 hours per refill.",
  waterWarning:
    "A filter protects the system, but sustained use of non-DM water is harmful.",
  regulatory:
    "GreenDrive makes no change to the engine or its wiring. SGT HydroEdge is working with ARAI on R&D testing and test procedures, and is actively engaged with the regulatory, government and green-hydrogen ecosystems.",
  applications: [
    "Long-haul and distribution trucks",
    "Buses",
    "Mining and quarry vehicles",
    "Earthmovers and construction equipment",
  ],
} as const;

export const GREENX_UNITS = [
  { name: "Compact unit", size: "380 × 320 × 360 mm", weight: "22 / 30 kg (empty / filled)" },
  { name: "Large unit", size: "420 × 500 × 360 mm", weight: "38 / 50 kg (empty / filled)" },
] as const;

export const GREENX_APPLICATIONS = [
  "Industrial backup power",
  "Power rental",
  "Hospitals",
  "Data centres",
  "Telecom",
  "Manufacturing plants",
] as const;

export const GREENEDGE_GE12 = {
  model: "GE12",
  power: "12 kW",
  output: "3,300 LPH of HHO per module",
  cluster:
    "Modules cluster in arrays to 10,000, 20,000 LPH and beyond — for redundancy, safety and efficiency.",
  powerSupply:
    "Digital IGBT rectifier integrated with SGT's PLC and controls — designed in-house and built in India to our specifications.",
  howItHelps:
    "A steadier flame needs less excess air, so less heat is lost up the stack.",
  applications: ["Boilers", "Hot-water generators", "Furnaces", "Kilns", "Smelters"],
} as const;

export const GREENMARINE_COPY =
  "GreenMarine takes the same platform to sea — for marine engines and onboard generators, built to meet the checks and balances of the International Maritime Organization. Our first marine trial is planned for 2027.";

// ─── Platform (three layers) ────────────────────────────────────────────────
export const PLATFORM_LAYERS = [
  {
    layer: "Core",
    title: "Patented CHFA electrolyser",
    body: "The hardware. Hydrogen made from water, on demand, with nothing stored.",
    href: ROUTES.chfa,
  },
  {
    layer: "Enablers",
    title: "Sensors, power electronics and SGT OS",
    body: "The controls that dose hydrogen precisely — designed in-house and built in India to SGT's specifications.",
    href: ROUTES.sgtos,
  },
  {
    layer: "Data",
    title: "GreenVision",
    body: "Measures every litre saved and every tonne of CO₂ avoided. MRV-ready for ESG/BRSR reporting and carbon credits.",
    href: ROUTES.greenvision,
  },
] as const;

// ─── Credentials (use exactly these; add nothing else) ──────────────────────
export const CREDENTIALS = [
  {
    title: "Patented technology",
    detail: `Patent No. ${TECHNOLOGY.patentNo}, “${TECHNOLOGY.patentTitle}”`,
  },
  { title: "ISO 9001:2015 certified", detail: "Quality management system" },
  {
    title: "Selected for the CII Ascent Grant 2026",
    detail: "GreenX and GreenEdge field-validated at customer sites",
  },
  { title: "Winner — RAK Innovation Challenge", detail: "" },
  { title: "Winner — LEAP Energy Award", detail: "" },
  {
    title: "Peer-reviewed research",
    detail: "Two papers published with ARAI in ARAI's journal",
  },
  {
    title: "Tested for over three years on real engines",
    detail: "Validated across multiple customer sites — fleets, DG sets, boilers, furnaces",
  },
  { title: "1,000,000+ km", detail: "Driven with GreenDrive" },
  { title: "Made in India, end to end", detail: "" },
  // TODO(owner): confirm before publishing — engine-lab test at a leading engine
  // manufacturer's own lab; third-party product liability insurance cover.
] as const;

// ─── Videos (YouTube) ───────────────────────────────────────────────────────
// TODO(owner): confirm these three IDs. They were read from the public feed of
// the company channel (videos published 11 Nov 2026), not supplied directly.
export const VIDEOS = {
  corporate: {
    youtubeId: "749Xd2_Of0A",
    title: "SGT HydroEdge — Decarbonisation Infrastructure",
    description:
      "The corporate film: decarbonisation infrastructure for the engines, burners and furnaces the world already runs.",
    date: "November 11, 2026",
  },
  greendrive: {
    youtubeId: "Zj_gorqYhKU",
    title: "GreenDrive — Save Fuel, Cut Emissions with Controlled Hydrogen Fuel Assist",
    description:
      "How GreenDrive fits a diesel vehicle in hours, and how GreenVision measures what it saves.",
    date: "November 11, 2026",
  },
  greenx: {
    youtubeId: "8eN5DQGXU8I",
    title: "GreenX — Hydrogen Fuel Assist for Diesel Generators",
    description: "The same CHFA platform, applied to diesel generator sets.",
    date: "November 11, 2026",
  },
  // TODO(owner): confirm the claims in this older film still match current wording.
  greenmarine: {
    youtubeId: "UuDDxr38i1g",
    title: "GreenMarine — Taking the Platform to Sea",
    description: "Our next frontier: marine engines and onboard generators.",
    date: "January 21, 2026",
  },
  abpPodcast: {
    youtubeId: "ZeqxHMRH8RQ",
    title: "How Green Hydrogen Will Transform India's Fuel Future",
    description: "Podcast with ABP News on hydrogen as a combustion booster for diesel engines.",
    date: "December 24, 2025",
  },
} as const;

export const youtubeEmbedUrl = (id: string, autoplay = false) =>
  `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1${autoplay ? "&autoplay=1" : ""}`;
export const youtubePoster = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const youtubeWatchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// ─── Downloads ──────────────────────────────────────────────────────────────
export const BROCHURES = {
  greendrive: {
    title: "GreenDrive brochure (November 2026)",
    href: "/downloads/brochures/SGT-HydroEdge-GreenDrive-Brochure-Nov-2026.pdf",
  },
  greenx: {
    title: "GreenX brochure (November 2026)",
    href: "/downloads/brochures/SGT-HydroEdge-GreenX-Brochure-Nov-2026.pdf",
  },
  // GreenEdge brochure is being updated to GE12 — do not publish the old one.
} as const;

// ─── Photos supplied November 2026 (customer-neutral names and captions) ────
export const PHOTOS = {
  greendriveUnit: { src: "/images/nov26/greendrive-unit.webp", alt: "GreenDrive Energy Core unit" },
  greendriveTruck: {
    src: "/images/nov26/greendrive-tipper-truck.webp",
    alt: "Tipper truck fitted with a GreenDrive unit beside the fuel tank",
  },
  greendriveQuarry: {
    src: "/images/nov26/greendrive-quarry-truck.webp",
    alt: "Quarry truck fitted with a GreenDrive unit",
  },
  malaysia1: {
    src: "/images/nov26/greendrive-malaysia-install-1.webp",
    alt: "GreenDrive unit being fitted on a truck chassis, Malaysia",
  },
  malaysia2: {
    src: "/images/nov26/greendrive-malaysia-install-2.webp",
    alt: "Technician connecting a GreenDrive unit during installation, Malaysia",
  },
  greenxUnit: { src: "/images/nov26/greenx-unit.webp", alt: "GreenX unit for diesel generator sets" },
  greenxWithDg: {
    src: "/images/nov26/greenx-with-dg-set.webp",
    alt: "GreenX unit connected to the air intake of a diesel generator set",
  },
  greenxSchematic: {
    src: "/images/nov26/greenx-dg-schematic.webp",
    alt: "Schematic: metered hydrogen from GreenX entering the air intake of a diesel generator",
  },
  greenxSiteUnits: {
    src: "/images/nov26/greenx-dg-site-fitted-units.webp",
    alt: "Two GreenX units fitted inside a diesel generator enclosure",
  },
  greenxGasMixer: {
    src: "/images/nov26/greenx-air-intake-gas-mixer.webp",
    alt: "Gas mixer fitted on a diesel generator air intake",
  },
  greenedgeSystem: { src: "/images/nov26/greenedge-system.webp", alt: "GreenEdge industrial system" },
  greenedgeFurnace: {
    src: "/images/nov26/greenedge-site-furnace.webp",
    alt: "GreenEdge unit and digital rectifier installed beside an industrial furnace",
  },
  greenedgeAssembly: {
    src: "/images/nov26/greenedge-assembly.webp",
    alt: "SGT HydroEdge engineers assembling a GreenEdge module",
  },
  sgtOsController: {
    src: "/images/nov26/sgt-os-controller.webp",
    alt: "SGT OS control board with sensor inputs, 4G module and RS485",
  },
  araiLab: {
    src: "/images/nov26/arai-engine-lab-testing.webp",
    alt: "SGT HydroEdge team during engine R&D testing",
  },
  engineTestCell: {
    src: "/images/nov26/engine-test-cell.webp",
    alt: "Diesel engine on a dynamometer test bed",
  },
  ciiLogo: { src: "/images/nov26/cii-logo.webp", alt: "Confederation of Indian Industry (CII) logo" },
} as const;
