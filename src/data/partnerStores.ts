// Partner storefronts — branded micro-sites for authorised SGT dealers and
// distributors, in the style of an Amazon Brand Store or IndiaMART microsite.
//
// Each entry renders at /partners/<slug> via a single shared template.
// Adding a new dealer is a data change only — no new page component.

import type { Vertical } from "./productCatalog";

export interface PartnerStore {
  slug: string;
  /** Full registered name, used in headings and metadata. */
  name: string;
  /** Compact name for tight spaces (nav, breadcrumbs, buttons). */
  shortName: string;
  /** Monogram fallback when no logo file exists. */
  initials: string;
  /** Logo under /public; falls back to the monogram when absent. */
  logo?: string;
  /** Pill shown above the storefront title. */
  badge: string;
  /** One-line positioning statement under the title. */
  tagline: string;
  /** Longer "about this dealer" copy. */
  about: string;
  /** Territory this dealer is authorised for. */
  coverage: string;
  /** Product focus, in plain language. */
  focus: string;
  /** Month/year the dealership was signed. */
  appointed: string;
  /** Product verticals this dealer is authorised to sell. */
  verticals: Vertical[];
  /** Optional explicit product allow-list; overrides `verticals` when set. */
  productIds?: string[];
  offices: { label: string; address: string }[];
  emails: string[];
  phones?: string[];
  /** Dealer's own website, shown as an outbound link. */
  website?: { label: string; url: string };
  /** Show the GreenX sizing section (base units; sized per DG capacity, no pricing). */
  showGreenXRange?: boolean;
  /** Photo from the gallery, used as the storefront banner. */
  banner?: { src: string; alt: string; caption?: string };
  /** What this dealer does locally for customers. */
  capabilities: { title: string; desc: string }[];
  /** Trust markers shown as a strip under the hero. */
  credentials: string[];
}

export const partnerStores: PartnerStore[] = [
  {
    slug: "continental-power-systems",
    name: "Continental Power System & Triumph Engineer",
    shortName: "Continental Power Systems",
    initials: "CP",
    logo: "/images/about/partners/continental-power-system-logo.png",
    badge: "Exclusive Authorised Dealer · Rajasthan",
    tagline:
      "GreenX — Controlled Hydrogen Fuel Assist for diesel generator sets across Rajasthan.",
    about:
      "Continental Power System and its sister concern Triumph Engineer have supplied diesel generating sets since 2005, serving customers across North India from their registered office in Jaipur and a branch office in New Delhi. Their range spans CPCB IV+ certified silent gensets from 7.5 to 750 kVA and CPCB II certified sets up to 2250 kVA, supplied with AMF and synchronising panels, complete installation, testing and commissioning, and warranty and post-warranty support. As SGT HydroEdge's exclusive authorised dealer for Rajasthan, they bring that DG expertise to our patented CHFA technology — sizing, installing and servicing GreenX on the generators their customers already run.",
    coverage: "Exclusive — Rajasthan",
    focus: "GreenX (diesel generator sets)",
    appointed: "July 2026",
    verticals: ["Industrial"],
    offices: [
      {
        label: "Registered office",
        address: "Chitrakoot Scheme, Ajmer Road, Jaipur 302021, Rajasthan",
      },
      {
        label: "Branch office",
        address: "Vishwakarma Colony, New Delhi 110044",
      },
    ],
    emails: ["cpsdgsets@gmail.com"],
    phones: ["+91 93145 07773", "+91 99288 77773"],
    website: { label: "continentalpowersystem.com", url: "https://www.continentalpowersystem.com" },
    showGreenXRange: true,
    banner: {
      src: "/images/gallery/event-7/6.jpeg",
      alt: "SGT HydroEdge and Continental Power Systems teams at the dealership certificate handover, Pune",
      caption: "Dealership certificate handover at SGT HydroEdge, Pune — July 2026",
    },
    capabilities: [
      {
        title: "Sizing & site survey",
        desc: "On-site assessment of your DG sets and load profile, so GreenX is sized to each generator's capacity.",
      },
      {
        title: "Installation & commissioning",
        desc: "Fitted at the air intake with no engine modification. Installed in hours.",
      },
      {
        title: "After-sales service",
        desc: "Routine servicing, spares and warranty support from a Rajasthan-based team.",
      },
      {
        title: "GreenVision onboarding",
        desc: "Setup of GreenVision over 4G, so you can see fuel saved, CO₂ avoided and system health.",
      },
    ],
    credentials: [
      "DG specialists since 2005",
      "Patented CHFA technology",
      "R&D testing with ARAI",
      "Field-tested on DG sets from 125 to 1,500 kVA",
      "No engine modification",
    ],
  },
];

export function getPartnerStore(slug: string): PartnerStore | undefined {
  return partnerStores.find((s) => s.slug === slug);
}

export default partnerStores;
