import type { Metadata } from "next";
import { RulesDocument } from "@/components/rules-document";
import { publishedRulesDocuments } from "@/content/rules";

export const metadata: Metadata = {
  title: "ZMBA 25-26赛季规则手册",
  description: "Full online reading edition of the ZMBA 25-26 Season Rulebook.",
  alternates: { canonical: "/rules/2025-26" },
  openGraph: {
    title: "ZMBA 25-26赛季规则手册 | ZMBA",
    description: "Full online reading edition of the ZMBA 25-26 Season Rulebook.",
    url: "/rules/2025-26",
  },
};

export default function RulebookPage() {
  return <RulesDocument document={publishedRulesDocuments["2025-26"]} />;
}
