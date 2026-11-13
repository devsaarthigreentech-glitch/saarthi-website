import type { Metadata } from "next";
import { CLAIMS, COMPANY, DISCLAIMER, ROUTES } from "@/data/siteContent";
import CalculatorClient from "./CalculatorClient";

const title = "Savings Calculator";
const description = `Estimate your annual fuel saving and CO₂ avoided with ${COMPANY.name}: GreenDrive ${CLAIMS.greendrive.fuelSaving.toLowerCase()}, GreenX ${CLAIMS.greenx.fuelSaving.toLowerCase()}, GreenEdge ${CLAIMS.greenedge.fuelSaving.toLowerCase()}. ${DISCLAIMER}`;

// The root layout supplies metadataBase and the "%s | SGT HydroEdge" title template.
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: ROUTES.calculator },
  openGraph: {
    title: `${title} | ${COMPANY.name}`,
    description,
    url: ROUTES.calculator,
    type: "website",
  },
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
