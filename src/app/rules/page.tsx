import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { zmbaContent } from "@/content/zmba";

export const metadata: Metadata = {
  title: "Rules",
  alternates: { canonical: "/rules" },
};

const publicCandidates = zmbaContent.documents.filter(
  (document) =>
    document.classification === "public-rules-candidate" ||
    document.classification === "public-code-candidate",
);

export default function RulesPage() {
  return (
    <>
      <PageIntro
        label="Rules"
        title="Competition and conduct documents, handled carefully."
        body="The current source editions are identified below. Full publication is waiting for explicit approval."
      />

      <section className="document-list content-width">
        {publicCandidates.map((document, index) => (
          <article className="document-entry" key={document.id}>
            <p className="document-kind">
              {index === 0 ? "Competition rules" : "Code of conduct"}
            </p>
            <h2>{document.title}</h2>
            <p>{document.notes}</p>
            <p className="publication-state">Public release pending review</p>
          </article>
        ))}
      </section>

      <section className="rules-boundary content-narrow">
        <h2>What is not public</h2>
        <p>
          Internal commissioner guidance and account-management material are not
          published or linked from this website.
        </p>
      </section>
    </>
  );
}
