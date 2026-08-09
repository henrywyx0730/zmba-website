import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { publicMedia, zmbaContent } from "@/content/zmba";

export const metadata: Metadata = {
  title: "Games & Events",
  alternates: { canonical: "/games" },
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));

export default function GamesPage() {
  const allStar = zmbaContent.events.find((event) => event.id === "2025-05-29-all-star");
  const poster = publicMedia.find((asset) => asset.eventId === allStar?.id);

  if (!allStar || !poster) {
    return null;
  }

  return (
    <>
      <PageIntro
        label="Games & Events"
        title="The record is real, even when it is incomplete."
        body="Dates and media are shown as verified. Event names, scores, participants, and honors appear only when the source record supports them."
      />

      <section className="games-feature content-width">
        <div>
          <p className="section-label">Featured verified event</p>
          <p className="display-date">29.05.25</p>
          <h2>{allStar.title}</h2>
          <dl className="event-facts">
            <div>
              <dt>Date</dt>
              <dd>{formatDate(allStar.date)}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{allStar.location}</dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>{allStar.format?.join(", ")}</dd>
            </div>
          </dl>
        </div>
        <Image
          src={poster.publicPath}
          alt={poster.alt}
          width={poster.width}
          height={poster.height}
          sizes="(max-width: 767px) 86vw, 36vw"
        />
      </section>

      <section className="chronology content-width">
        <div className="chronology-heading">
          <h2>Dated records</h2>
          <p>
            Academic-year labels organize this website. They were not necessarily
            official season names at the time.
          </p>
        </div>

        {zmbaContent.seasons.map((season) => {
          const events = zmbaContent.events.filter((event) => event.seasonId === season.id);

          return (
            <section className="season-group" key={season.id}>
              <h3>{season.label}</h3>
              {events.length ? (
                <div className="event-list">
                  {events.map((event) => {
                    const eventMedia = publicMedia.filter((asset) => asset.eventId === event.id);
                    const mediaKinds = new Set(eventMedia.map((asset) => asset.kind));

                    return (
                      <article className="event-row" key={event.id}>
                        <time dateTime={event.date}>{formatDate(event.date)}</time>
                        <div>
                          {event.title ? <h4>{event.title}</h4> : null}
                          <p>
                            {eventMedia.length} public media record{eventMedia.length === 1 ? "" : "s"}
                            {mediaKinds.has("video-still") ? ", including a video still" : ""}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <p className="season-empty">No verified public event record yet.</p>
              )}
            </section>
          );
        })}
      </section>
    </>
  );
}
