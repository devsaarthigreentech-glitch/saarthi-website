import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { partnerStores, getPartnerStore } from "@/data/partnerStores";
import { products } from "@/data/productCatalog";
import PartnerStorefront from "@/components/PartnerStore";

export function generateStaticParams() {
  return partnerStores.map((store) => ({ slug: store.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const store = getPartnerStore(slug);
  if (!store) return { title: "Partner not found — SGT HydroEdge" };

  return {
    title: `${store.shortName} — Authorised SGT HydroEdge Dealer`,
    description: store.tagline,
  };
}

export default async function PartnerStorePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const store = getPartnerStore(slug);
  if (!store) notFound();

  // An explicit allow-list wins; otherwise the dealer's authorised verticals.
  const catalogue = store.productIds
    ? products.filter((p) => store.productIds!.includes(p.id))
    : products.filter((p) => store.verticals.includes(p.vertical));

  return <PartnerStorefront store={store} catalogue={catalogue} />;
}
