import type { Metadata } from "next";
import { RulesDocument } from "@/components/rules-document";
import { publishedRulesDocuments } from "@/content/rules";

export const metadata: Metadata = {
  title: "ZMBA群规行为准则(2025 Edition)",
  description: "Full online reading edition of the ZMBA Code of Conduct, 2025 Edition.",
  alternates: { canonical: "/rules/code-of-conduct-2025" },
  openGraph: {
    title: "ZMBA群规行为准则(2025 Edition) | ZMBA",
    description: "Full online reading edition of the ZMBA Code of Conduct, 2025 Edition.",
    url: "/rules/code-of-conduct-2025",
  },
};

export default function CodeOfConductPage() {
  return <RulesDocument document={publishedRulesDocuments["code-of-conduct-2025"]} />;
}
