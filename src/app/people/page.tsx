import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { zmbaContent } from "@/content/zmba";

export const metadata: Metadata = {
  title: "People",
  alternates: { canonical: "/people" },
};

export default function PeoplePage() {
  const incumbent = zmbaContent.people.find((person) => person.id === "lucian");
  const founder = zmbaContent.people.find((person) => person.id === "henry-wu");
  const incumbentTerm = zmbaContent.commissioners.find((person) => person.id === "lucian")?.term;
  const founderTerm = zmbaContent.commissioners.find((person) => person.id === "henry-wu")?.term;

  if (!incumbent || !founder) {
    return null;
  }

  return (
    <>
      <PageIntro
        label="People"
        title="Current leadership first. The founder remains part of the story."
        body="ZMBA's leadership record is deliberately concise. Only confirmed public roles are shown."
      />

      <section className="people-stage content-width">
        <article className="person-primary">
          <p className="person-role">Current Commissioner</p>
          <h2>{incumbent.name}</h2>
          <p className="person-chinese">{incumbent.chineseName}</p>
          <div className="person-meta">
            <p>{incumbent.publicRole}</p>
            <p>{incumbentTerm}</p>
          </div>
        </article>

        <article className="person-secondary">
          <p className="person-role">Founder and 1st Commissioner</p>
          <h2>{founder.name}</h2>
          <p className="person-chinese">{founder.chineseName}</p>
          <div className="person-meta">
            <p>{founder.publicRole}</p>
            <p>{founderTerm}</p>
          </div>
        </article>
      </section>

      <section className="privacy-note content-narrow">
        <h2>Public roles, not private profiles.</h2>
        <p>
          Player evaluations, birthdays, private comments, and unapproved profile
          details are not part of this public page.
        </p>
      </section>
    </>
  );
}
