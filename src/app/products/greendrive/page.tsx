// src/app/products/greendrive/page.tsx
import Hero from "@/components/Products/GreenDrive/Hero";
import Advantage from "@/components/Products/GreenDrive/Advantage";
import ProductRange from "@/components/Products/GreenDrive/ProductRange";
import Applications from "@/components/Products/GreenDrive/Applications";
import Results from "@/components/Products/GreenDrive/Results";
import FactSheets from "@/components/Products/GreenDrive/FactSheets";
import Benefits from "@/components/Products/GreenDrive/Benefits";
import CTA from "@/components/Products/GreenDrive/CTA";

export default function GreenDrivePage() {
  return (
    <main>
      <Hero />
      <Advantage />
      <ProductRange />
      <Applications />
      <Results />
      {/* <FactSheets /> */}
      <Benefits />
      <CTA />
    </main>
  );
}
