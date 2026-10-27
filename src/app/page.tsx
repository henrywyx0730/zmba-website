import Image from "next/image";
import { zmbaContent } from "@/content/zmba";

const incumbent = zmbaContent.commissioners.find((person) => person.incumbent);
const founder = zmbaContent.commissioners.find((person) => person.ordinal === 1);

export default function Home() {
  if (!incumbent || !founder) {
    return null;
  }

  return (
    <div className="home-page">
      <section className="home-hero home-frame" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <h1 id="home-title">{zmbaContent.organization.name}</h1>
          <p className="home-hero-tagline">{zmbaContent.organization.tagline}</p>
          <p className="home-hero-description">
            The official website of {zmbaContent.organization.name} at {zmbaContent.organization.community}.
          </p>
        </div>
        <div className="home-hero-mark">
          <Image
            src="/images/brand/zmba-mark-transparent.png"
            alt="ZMBA shield"
            width={230}
            height={227}
            priority
          />
        </div>
      </section>

      <section className="home-reading home-frame" aria-labelledby="home-about-title">
        <div className="home-reading-copy">
          <h2 id="home-about-title">About ZMBA</h2>
          <p>
            ZMBA is the official basketball association of {zmbaContent.organization.community}.
          </p>
          <p>
            Founded in {zmbaContent.organization.foundedIn}, ZMBA records the games, people, and traditions that define the basketball community.
          </p>
        </div>
      </section>

      <section
        className="home-reading home-leadership home-frame"
        aria-labelledby="home-leadership-title"
      >
        <h2 id="home-leadership-title">Leadership</h2>
        <div className="home-leadership-columns">
          <div className="home-leadership-entry">
            <p className="home-leadership-label">Founder</p>
            <p className="home-leadership-name">
              {founder.name}
              <span lang="zh-Hans">{founder.chineseName}</span>
            </p>
            <p className="home-leadership-role">Founder &amp; First Commissioner</p>
            <p className="home-leadership-term">2023–2025</p>
          </div>
          <div className="home-leadership-entry">
            <p className="home-leadership-label">Current Commissioner</p>
            <p className="home-leadership-name">
              {incumbent.name}
              <span lang="zh-Hans">{incumbent.chineseName}</span>
            </p>
            <p className="home-leadership-role">Second Commissioner</p>
            <p className="home-leadership-term">2025–Present</p>
          </div>
        </div>
      </section>

      <section className="home-reading home-frame" aria-labelledby="home-location-title">
        <div className="home-reading-copy">
          <h2 id="home-location-title">Location</h2>
          <address>
            <span>{zmbaContent.organization.community}</span>
            <span lang="zh-Hans">{zmbaContent.organization.communityChinese}</span>
            <span>{zmbaContent.organization.location.at(-1)}</span>
          </address>
        </div>
      </section>
    </div>
  );
}
