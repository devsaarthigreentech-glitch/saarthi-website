import type { Metadata } from "next";
import { CLAIMS, COMPANY, DISCLAIMER, ROUTES } from "@/data/siteContent";
import CalculatorClient from "./CalculatorClient";

const title = `Savings Calculator | ${COMPANY.name}`;
const description = `Estimate your annual fuel saving and CO₂ avoided with ${COMPANY.name}: GreenDrive ${CLAIMS.greendrive.fuelSaving.toLowerCase()}, GreenX ${CLAIMS.greenx.fuelSaving.toLowerCase()}, GreenEdge ${CLAIMS.greenedge.fuelSaving.toLowerCase()}. ${DISCLAIMER}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: ROUTES.calculator },
  openGraph: {
    title,
    description,
    url: ROUTES.calculator,
    type: "website",
  },
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
