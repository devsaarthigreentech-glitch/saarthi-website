// src/app/greenlabs/page.tsx
import Hero from "@/components/GreenLabs/Hero";
import Problem from "@/components/GreenLabs/Problem";
import FocusAreas from "@/components/GreenLabs/FocusAreas";
import SupportingThemes from "@/components/GreenLabs/SupportingThemes";
import ValueProps from "@/components/GreenLabs/ValueProps";
import Strategic from "@/components/GreenLabs/Strategic";
import Conclusion from "@/components/GreenLabs/Conclusion";

export default function GreenLabsPage() {
  return (
    <main>
      <Hero />
      <Problem />
      <FocusAreas />
      <SupportingThemes />
      <ValueProps />
      <Strategic />
      <Conclusion />
    </main>
  );
}
