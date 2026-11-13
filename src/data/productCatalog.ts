// Shared SGT product catalogue.
// Single source of truth for the homepage carousel and partner storefronts.
// Every claim, spec and photo comes from siteContent.ts — add nothing here
// that is not held there. The catalogue is public-facing and carries no
// price data.

import {
  CLAIMS,
  GREENDRIVE_FACTS,
  GREENDRIVE_MODELS,
  GREENMARINE_COPY,
  PHOTOS,
  PRODUCTS,
} from "./siteContent";

export type Vertical = 'Industrial' | 'Logistics' | 'Marine';

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  /** Alt text for the image; falls back to the product name. */
  imageAlt?: string;
  vertical: Vertical;
  stat: string;
}

// GreenDrive One / Neo / Pro — one card per model.
const greenDriveModels: Product[] = GREENDRIVE_MODELS.map((m) => ({
  id: m.name.toLowerCase().replace(/\s+/g, "-"),
  name: m.name,
  description: `${m.use}. ${m.system} vehicle system · ${m.size} (L × W × H) · ${m.weight} empty / filled · ${m.tank} water tank.`,
  image: PHOTOS.greendriveUnit.src,
  imageAlt: PHOTOS.greendriveUnit.alt,
  vertical: "Logistics",
  stat: `${m.system} system`,
}));

export const products: Product[] = [
  // ── GreenX — no model names; each system is sized per DG capacity ──
  {
    id: "greenx-unit",
    name: "GreenX",
    description: `${PRODUCTS.greenx.oneLiner} Sized per DG capacity, with no engine modification.`,
    image: PHOTOS.greenxUnit.src,
    imageAlt: PHOTOS.greenxUnit.alt,
    vertical: "Industrial",
    stat: "Sized per DG capacity",
  },
  {
    id: "greenx-dg-set",
    name: "GreenX",
    description: `${CLAIMS.greenx.range}. ${CLAIMS.greenx.study}.`,
    image: PHOTOS.greenxWithDg.src,
    imageAlt: PHOTOS.greenxWithDg.alt,
    vertical: "Industrial",
    stat: "125 to 1,500 kVA field-tested",
  },
  {
    id: "greenx-site-units",
    name: "GreenX",
    description: `Each DG gets one, two or more units depending on its air intakes and engine size. ${CLAIMS.greenx.pm} and ${CLAIMS.greenx.nox}.`,
    image: PHOTOS.greenxSiteUnits.src,
    imageAlt: PHOTOS.greenxSiteUnits.alt,
    vertical: "Industrial",
    stat: CLAIMS.greenx.pm,
  },
  {
    id: "greenx-gas-mixer",
    name: "GreenX",
    description: `The same unit design, SGT OS and GreenVision as GreenDrive, with RS485 inputs added. Connected to GreenVision over ${CLAIMS.connectivity}.`,
    image: PHOTOS.greenxGasMixer.src,
    imageAlt: PHOTOS.greenxGasMixer.alt,
    vertical: "Industrial",
    stat: `${CLAIMS.connectivity} connected`,
  },

  // ── GreenDrive — One, Neo, Pro ──
  ...greenDriveModels,
  {
    id: "greendrive-truck",
    name: "GreenDrive",
    description: PRODUCTS.greendrive.oneLiner,
    image: PHOTOS.greendriveTruck.src,
    imageAlt: PHOTOS.greendriveTruck.alt,
    vertical: "Logistics",
    stat: CLAIMS.greendrive.install,
  },
  {
    id: "greendrive-quarry",
    name: "GreenDrive",
    description: `For ${GREENDRIVE_FACTS.applications.join(", ").toLowerCase()}. ${CLAIMS.norms}.`,
    image: PHOTOS.greendriveQuarry.src,
    imageAlt: PHOTOS.greendriveQuarry.alt,
    vertical: "Logistics",
    stat: CLAIMS.greendrive.kmLabel,
  },
  {
    id: "greendrive-install-1",
    name: "GreenDrive",
    description: "Compact enough to mount on the vehicle frame — most commonly beside the fuel tank. No change to engine or wiring.",
    image: PHOTOS.malaysia1.src,
    imageAlt: PHOTOS.malaysia1.alt,
    vertical: "Logistics",
    stat: "No engine modification",
  },
  {
    id: "greendrive-install-2",
    name: "GreenDrive",
    description: `Hydrogen made from DM water, on demand, with nothing stored. ${CLAIMS.greendrive.warranty}. ${CLAIMS.madeIn}.`,
    image: PHOTOS.malaysia2.src,
    imageAlt: PHOTOS.malaysia2.alt,
    vertical: "Logistics",
    stat: CLAIMS.madeIn,
  },

  // ── GreenMarine — next frontier; no performance numbers ──
  {
    id: "greenmarine",
    name: "GreenMarine",
    description: GREENMARINE_COPY,
    image: PRODUCTS.greenmarine.image,
    imageAlt: PRODUCTS.greenmarine.imageAlt,
    vertical: "Marine",
    stat: PRODUCTS.greenmarine.badge ?? "Next frontier",
  },
];

export default products;
