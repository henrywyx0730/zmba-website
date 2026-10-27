import type { Metadata } from "next";
import { Commissioners } from "@/components/commissioners";
import { PageIntro } from "@/components/page-intro";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "ZMBA is the student-led basketball association of Jinling High School ZMB in Nanjing, founded in May 2023.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About ZMBA | ZhongMei Basketball Association",
    description:
      "ZMBA is the student-led basketball association of Jinling High School ZMB in Nanjing, founded in May 2023.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <PageIntro
        title="About ZMBA"
        body="The student-led basketball association of Jinling High School ZMB, founded in May 2023."
      />

      <section className={styles.section} aria-labelledby="about-who">
        <h2 id="about-who">Who we are</h2>
        <div className={styles.prose}>
          <p>
            ZhongMei Basketball Association (ZMBA) is the official basketball
            association of Jinling High School ZMB in Nanjing. It is led by
            students and remains active.
          </p>
          <p>
            Founded in May 2023, ZMBA organizes basketball events for the school
            community.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="about-leadership">
        <h2 id="about-leadership">Leadership</h2>
        <div className={styles.prose}>
          <p>ZMBA has had two Commissioners since its founding.</p>
        </div>
        <Commissioners />
      </section>
    </div>
  );
}
