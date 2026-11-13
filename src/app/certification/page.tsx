import type { Metadata } from "next";
import Certification from "@/components/Certification";
import { COMPANY, ROUTES } from "@/data/siteContent";

export const metadata: Metadata = {
  title: `Training & Certification | ${COMPANY.name}`,
  description:
    "Training and certification on the SGT Operating System (SGTOS) for technicians and partners of SGT HydroEdge.",
  alternates: { canonical: `${COMPANY.url}${ROUTES.certification}` },
};

export default function CertificationPage() {
  return <Certification />;
}
