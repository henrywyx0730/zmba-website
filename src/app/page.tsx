const pillars = [
  {
    number: "01",
    title: "Competition",
    description:
      "Games shaped by effort, sportsmanship, and a genuine love of basketball.",
  },
  {
    number: "02",
    title: "Community",
    description:
      "A place where players, organizers, referees, and supporters belong.",
  },
  {
    number: "03",
    title: "Legacy",
    description:
      "Every season, story, and contribution preserved for the people who come next.",
  },
];

const archiveAreas = [
  "Seasons",
  "Games",
  "People",
  "Honors",
  "Documents",
  "Media",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="ZMBA home">
          <span className="brand-mark" aria-hidden="true">
            Z
          </span>

          <span className="brand-copy">
            <strong>ZMBA</strong>
            <small>ZhongMei Basketball Association</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#archive">Archive</a>
          <a href="#legacy">Legacy</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-content">
          <p className="eyebrow">Founded in May 2023</p>

          <h1>
            Not just a game.
            <span>It&apos;s a legacy.</span>
          </h1>

          <p className="hero-description">
            The official home and historical archive of the ZhongMei
            Basketball Association.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#about">
              Discover ZMBA
            </a>

            <a className="button button-secondary" href="#archive">
              Explore the archive
            </a>
          </div>
        </div>

        <div className="hero-emblem" aria-hidden="true">
          <span>ZM</span>
          <strong>2023</strong>
        </div>
      </section>

      <section className="identity-strip" aria-label="ZMBA identity">
        <p>Basketball</p>
        <span aria-hidden="true">•</span>
        <p>Community</p>
        <span aria-hidden="true">•</span>
        <p>Legacy</p>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">Who we are</p>
          <h2>Built to make every chapter matter.</h2>
        </div>

        <div className="about-copy">
          <p>
            ZMBA is a student-founded basketball association built around
            organized competition, shared responsibility, and lasting memory.
          </p>

          <p>
            This website will bring together the association&apos;s seasons,
            games, people, honors, official documents, and defining moments in
            one permanent home.
          </p>
        </div>
      </section>

      <section className="section pillars-section">
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <p className="pillar-number">{pillar.number}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section archive-section" id="archive">
        <div className="section-heading">
          <p className="eyebrow">The archive</p>
          <h2>Preserving every chapter of ZMBA history.</h2>
        </div>

        <div className="archive-grid">
          {archiveAreas.map((area) => (
            <div className="archive-item" key={area}>
              <span>{area}</span>
              <span aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="legacy-section" id="legacy">
        <p className="eyebrow">Our promise</p>
        <blockquote>
          The final whistle ends a game.
          <span>It should never erase the story.</span>
        </blockquote>
      </section>

      <footer>
        <div>
          <strong>ZMBA</strong>
          <p>ZhongMei Basketball Association</p>
        </div>

        <div className="footer-meta">
          <p>Founded 2023</p>
          <p>zmbasketball.org</p>
        </div>
      </footer>
    </main>
  );
}
