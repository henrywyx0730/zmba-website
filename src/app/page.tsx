import Image from "next/image";
import Link from "next/link";
import { publicMedia, zmbaContent } from "@/content/zmba";

const allStar = zmbaContent.events.find((event) => event.id === "2025-05-29-all-star");
const poster = publicMedia.find((asset) => asset.id === "2025-05-29-all-star-poster");
const incumbent = zmbaContent.commissioners.find((person) => person.incumbent);
const founder = zmbaContent.commissioners.find((person) => person.ordinal === 1);

export default function Home() {
  if (!allStar || !poster || !incumbent || !founder) {
    return null;
  }

  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="section-label">Jinling ZhongMei / 金陵中美</p>
          <h1>
            ZhongMei{" "}
            <span>Basketball Association</span>
          </h1>
          <p className="hero-tagline">{zmbaContent.organization.tagline}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/games">
              View games
            </Link>
            <Link className="text-link" href="/about">
              About ZMBA
            </Link>
          </div>
        </div>

        <div className="hero-image-wrap">
          <Image
            src="/images/events/2025-10-09-court-01.jpg"
            alt="Basketball play on the outdoor court, dated October 9, 2025."
            fill
            priority
            sizes="(max-width: 767px) 100vw, 46vw"
          />
        </div>
      </section>

      <section className="active-statement content-width">
        <p className="statement-lead">
          Basketball at Jinling ZhongMei, organized by students since 2023.
        </p>
        <p>
          ZMBA remains active across student generations, with a small number of
          meaningful games and events each year.
        </p>
      </section>

      <section className="featured-event content-width">
        <div className="poster-frame">
          <Image
            src={poster.publicPath}
            alt={poster.alt}
            width={poster.width}
            height={poster.height}
            sizes="(max-width: 767px) 86vw, 38vw"
          />
        </div>
        <div className="featured-copy">
          <p className="section-label">Verified event</p>
          <p className="display-date">29.05.25</p>
          <h2>{allStar.title}</h2>
          <p>{allStar.location}</p>
          <ul className="format-list">
            {allStar.format?.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <Link className="text-link" href="/games">
            Games and events
          </Link>
        </div>
      </section>

      <section className="leadership-home content-width">
        <div className="leadership-heading">
          <p className="section-label">Leadership</p>
          <h2>Founded, then carried forward.</h2>
        </div>
        <div className="leadership-grid">
          <article className="leader leader-current">
            <p>Current Commissioner</p>
            <h3>{incumbent.name}</h3>
            <p className="chinese-name">{incumbent.chineseName}</p>
            <p>{incumbent.title}</p>
          </article>
          <article className="leader">
            <p>Founder</p>
            <h3>{founder.name}</h3>
            <p className="chinese-name">{founder.chineseName}</p>
            <p>{founder.title}</p>
          </article>
        </div>
        <Link className="text-link" href="/people">
          Meet the leadership
        </Link>
      </section>

      <section className="home-photo-feature">
        <Image
          src="/images/events/2025-04-27-court.jpg"
          alt="Basketball play on the outdoor court, dated April 27, 2025."
          fill
          sizes="100vw"
        />
      </section>

      <section className="route-grid content-width" aria-label="Explore ZMBA">
        <Link href="/about">
          <strong>About</strong>
          <p>The association and its continuity.</p>
        </Link>
        <Link href="/rules">
          <strong>Rules</strong>
          <p>Competition and conduct documents.</p>
        </Link>
        <Link href="/media">
          <strong>Media</strong>
          <p>Real photographs, video stills, and posters.</p>
        </Link>
      </section>
    </>
  );
}
