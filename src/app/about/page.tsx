import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { zmbaContent } from "@/content/zmba";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
};

const founder = zmbaContent.commissioners.find((person) => person.ordinal === 1);
const incumbent = zmbaContent.commissioners.find((person) => person.incumbent);

export default function AboutPage() {
  if (!founder || !incumbent) {
    return null;
  }

  return (
    <>
      <PageIntro
        label="About ZMBA"
        title="A student-led basketball association that continues."
        body="Founded in 2023 within Jinling High School ZhongMei, ZMBA organizes basketball and carries its records forward across student generations."
      />

      <section className="about-image content-width">
        <Image
          src="/images/events/2023-05-25-court.jpg"
          alt="ZMBA group photograph on the outdoor basketball court, dated May 25, 2023."
          width={1600}
          height={1200}
          sizes="(max-width: 767px) 100vw, 88vw"
        />
      </section>

      <section className="about-principles content-narrow">
        <h2>Basketball, organized by students.</h2>
        <p>
          ZMBA is a place for competition, shared responsibility, and the work
          required to run meaningful games. Its own documents emphasize fairness,
          respect, safety, and continuity.
        </p>
        <p>
          The history matters because the association is still active. Photographs,
          rules, and event records give the next student generation something real
          to continue.
        </p>
      </section>

      <section className="succession-section content-width">
        <div className="succession-intro">
          <p className="section-label">Continuity</p>
          <h2>One generation founded it. Another leads it now.</h2>
        </div>
        <div className="succession-flow">
          <article>
            <p>Founder and 1st Commissioner</p>
            <h3>{founder.name}</h3>
            <p className="chinese-name">{founder.chineseName}</p>
            <p>{founder.term}</p>
          </article>
          <div className="succession-link" aria-hidden="true">
            <span />
          </div>
          <article className="is-current">
            <p>2nd Commissioner, incumbent</p>
            <h3>{incumbent.name}</h3>
            <p className="chinese-name">{incumbent.chineseName}</p>
            <p>{incumbent.term}</p>
          </article>
        </div>
      </section>
    </>
  );
}
