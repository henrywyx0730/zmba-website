import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import pageStyles from "@/components/page.module.css";
import { publishedRulesDocuments } from "@/content/rules";
import styles from "./rules-index.module.css";

export const metadata: Metadata = {
  title: "Rules",
  description: "Read approved ZMBA rules and conduct documents online.",
  alternates: { canonical: "/rules" },
  openGraph: {
    title: "Rules | ZMBA",
    description: "Read approved ZMBA rules and conduct documents online.",
    url: "/rules",
  },
};

const documents = [
  { href: "/rules/2025-26", document: publishedRulesDocuments["2025-26"] },
  { href: "/rules/code-of-conduct-2025", document: publishedRulesDocuments["code-of-conduct-2025"] },
] as const;

export default function RulesPage() {
  return (
    <div className={pageStyles.page}>
      <PageIntro
        title="Rules"
        body="Approved ZMBA rules and conduct documents can be read online below."
      />

      <section className={pageStyles.section} aria-labelledby="rules-documents">
        <h2 id="rules-documents">Documents</h2>
        <ul className={styles.documents}>
          {documents.map(({ href, document }) => (
            <li className={styles.documentRow} key={document.id}>
              <Link className={styles.documentLink} href={href}>
                <div>
                  <h3 className={styles.title} lang="zh-Hans">{document.indexTitle}</h3>
                  <p className={styles.description} lang="en">{document.description}</p>
                </div>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
