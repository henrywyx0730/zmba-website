import type { Metadata } from "next";
import { Commissioners } from "@/components/commissioners";
import { PageIntro } from "@/components/page-intro";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
  title: "People",
  description: "The Commissioners of the ZhongMei Basketball Association, from its founding to today.",
  alternates: { canonical: "/people" },
  openGraph: {
    title: "People | ZMBA",
    description: "The Commissioners of the ZhongMei Basketball Association, from its founding to today.",
    url: "/people",
  },
};

export default function PeoplePage() {
  return (
    <div className={styles.page}>
      <PageIntro
        title="People"
        body="The Commissioners of ZMBA, from its founding to today."
      />

      <section className={styles.section} aria-labelledby="people-commissioners">
        <h2 id="people-commissioners">Commissioners</h2>
        <div className={styles.prose}>
          <p>
            Henry Wu founded ZMBA in May 2023 and served as First Commissioner
            until May 2025. Lucian has served as Second Commissioner since then.
          </p>
        </div>
        <Commissioners />
        <p className={styles.note}>This page lists confirmed public roles only.</p>
      </section>
    </div>
  );
}
