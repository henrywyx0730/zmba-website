import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import styles from "@/components/page.module.css";
import { publicMedia, zmbaContent } from "@/content/zmba";

export const metadata: Metadata = {
  title: "Games & Events",
  description: "A dated record of ZMBA events, grouped by academic year.",
  alternates: { canonical: "/games" },
  openGraph: {
    title: "Games & Events | ZMBA",
    description: "A dated record of ZMBA events, grouped by academic year.",
    url: "/games",
  },
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));

export default function GamesPage() {
  const seasons = zmbaContent.seasons
    .map((season) => ({
      season,
      events: zmbaContent.events.filter((event) => event.seasonId === season.id),
    }))
    .filter(({ events }) => events.length > 0);

  return (
    <div className={styles.page}>
      <PageIntro
        title="Games & Events"
        body="A dated record of ZMBA events, grouped by academic year."
      />

      {seasons.map(({ season, events }) => (
        <section className={styles.season} key={season.id} aria-labelledby={`season-${season.id}`}>
          <h2 className={styles.seasonHeading} id={`season-${season.id}`}>
            {season.label}
          </h2>
          <ol className={styles.events}>
            {events.map((event) => {
              const media = publicMedia.filter((asset) => asset.eventId === event.id);
              const hasPoster = media.some((asset) => asset.kind === "poster-page");

              return (
                <li className={styles.event} key={event.id}>
                  <time className={styles.eventDate} dateTime={event.date}>
                    {formatDate(event.date)}
                  </time>
                  <div>
                    {event.title ? <h3 className={styles.eventTitle}>{event.title}</h3> : null}
                    {event.location || event.format ? (
                      <dl className={styles.facts}>
                        {event.location ? (
                          <div>
                            <dt>Location</dt>
                            <dd>{event.location}</dd>
                          </div>
                        ) : null}
                        {event.format ? (
                          <div>
                            <dt>Format</dt>
                            <dd>{event.format.join(", ")}</dd>
                          </div>
                        ) : null}
                      </dl>
                    ) : null}
                    {media.length ? (
                      <>
                        <div className={hasPoster ? `${styles.thumbs} ${styles.thumbsTall}` : styles.thumbs}>
                          {media.map((asset) => (
                            <Image
                              key={asset.id}
                              src={asset.publicPath}
                              alt={asset.alt}
                              width={asset.width}
                              height={asset.height}
                              sizes="(max-width: 767px) 40vw, 240px"
                            />
                          ))}
                        </div>
                        <p className={styles.eventLink}>
                          <Link className={styles.link} href={`/media#${media[0].id}`}>
                            View in Media
                          </Link>
                        </p>
                      </>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
