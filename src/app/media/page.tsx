import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import styles from "@/components/page.module.css";
import { publicMedia, zmbaContent } from "@/content/zmba";

export const metadata: Metadata = {
  title: "Media",
  description: "Photographs and posters from ZMBA events, arranged by date.",
  alternates: { canonical: "/media" },
  openGraph: {
    title: "Media | ZMBA",
    description: "Photographs and posters from ZMBA events, arranged by date.",
    url: "/media",
  },
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));

const kindLabel: Partial<Record<(typeof publicMedia)[number]["kind"], string>> = {
  "video-still": "Video still",
  "poster-page": "Poster",
};

export default function MediaPage() {
  const groups = zmbaContent.seasons
    .map((season) => ({
      season,
      assets: publicMedia.filter((asset) => asset.seasonId === season.id),
    }))
    .filter(({ assets }) => assets.length > 0);

  let imageIndex = 0;

  return (
    <div className={styles.page}>
      <PageIntro
        title="Media"
        body="Photographs and posters from ZMBA events, arranged by date."
      />

      <section className={styles.section} aria-label="Photographs and posters">
        {groups.map(({ season, assets }) => (
          <div className={styles.mediaGroup} key={season.id}>
            <h2>{season.label}</h2>
            <ul className={styles.gallery}>
              {assets.map((asset) => {
                const priority = imageIndex++ === 0;

                return (
                  <li
                    className={styles.figure}
                    id={asset.id}
                    key={asset.id}
                    style={{ "--ar": asset.width / asset.height } as CSSProperties}
                  >
                    <figure>
                      <Image
                        src={asset.publicPath}
                        alt={asset.alt}
                        width={asset.width}
                        height={asset.height}
                        priority={priority}
                        sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 40vw"
                      />
                      <figcaption>
                        <time dateTime={asset.date}>{formatDate(asset.date)}</time>
                        {kindLabel[asset.kind] ? <span>{kindLabel[asset.kind]}</span> : null}
                      </figcaption>
                    </figure>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
