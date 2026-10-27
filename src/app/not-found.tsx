import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The requested ZMBA page could not be found.",
  alternates: {
    canonical: null,
  },
  openGraph: {
    title: "Not Found | ZMBA",
    description: "The requested ZMBA page could not be found.",
    url: undefined,
  },
};

export default function NotFound() {
  return (
    <div className={styles.page}>
      <section className={styles.intro} aria-labelledby="not-found-title">
        <h1 id="not-found-title">Page not found</h1>
        <p className={styles.lead}>The page you requested is not available.</p>
        <p className={styles.note}>
          <Link className={styles.link} href="/">Return to ZMBA home</Link>
        </p>
      </section>
    </div>
  );
}
