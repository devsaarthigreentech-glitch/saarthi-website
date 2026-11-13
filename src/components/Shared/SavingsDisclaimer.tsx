import { DISCLAIMER } from "@/data/siteContent";

/** The line that must accompany every fuel-saving figure. */
export default function SavingsDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed ${className || "text-gray-500"}`}>
      * {DISCLAIMER}
    </p>
  );
}
