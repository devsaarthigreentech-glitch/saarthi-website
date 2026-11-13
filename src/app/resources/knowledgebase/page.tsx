import type { Metadata } from "next";
import KnowledgeBaseClient from "./KnowledgeBaseClient";
import { COMPANY, ROUTES } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Knowledge Base — SGT HydroEdge",
  description:
    "Answers on Controlled Hydrogen Fuel Assist (CHFA) Technology: how it works, safety, GreenDrive, GreenX, GreenEdge and GreenMarine, GreenVision, ROI and partnership.",
  alternates: { canonical: `${COMPANY.url}${ROUTES.knowledgebase}` },
};

export default function KnowledgeBasePage() {
  return <KnowledgeBaseClient />;
}
