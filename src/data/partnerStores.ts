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
    badge: "Exclusive Authorised Dealer · Rajasthan",
    tagline:
      "Hydrogen-on-Demand retrofits for diesel generators and industrial plant across Rajasthan.",
    about:
      "Continental Power System & Triumph Engineer is SGT HydroEdge's exclusive authorised dealer for Rajasthan. Operating out of Jaipur with an established power systems and engineering practice, they bring SGT's patent-approved CHFA hydrogen retrofit technology to diesel generator operators, manufacturing plants and industrial customers across the state — handling sales, installation, commissioning and after-sales service locally.",
    coverage: "Exclusive — Rajasthan",
    focus: "GreenX (DG sets · industrial)",
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
    banner: {
      src: "/images/gallery/event-7/cover.jpeg",
      alt: "SGT HydroEdge and Continental Power Systems teams at the dealership certificate handover, Pune",
      caption: "Dealership certificate handover at SGT HydroEdge, Pune — July 2026",
    },
    capabilities: [
      {
        title: "Local sales & site survey",
        desc: "On-site assessment of your DG sets and load profile to size the right GreenX unit.",
      },
      {
        title: "Installation & commissioning",
        desc: "Retrofit to the air intake with no engine modification, commissioned and baseline-tested.",
      },
      {
        title: "After-sales service",
        desc: "Routine servicing, spares and warranty support from a Rajasthan-based team.",
      },
      {
        title: "GreenVision onboarding",
        desc: "Setup of IoT monitoring so you can track fuel savings and emissions in real time.",
      },
    ],
    credentials: [
      "Patent-approved CHFA technology",
      "ARAI validated · NABL tested",
      "ISO certified manufacturer",
      "No engine modification",
    ],
  },
];

export function getPartnerStore(slug: string): PartnerStore | undefined {
  return partnerStores.find((s) => s.slug === slug);
}

export default partnerStores;
