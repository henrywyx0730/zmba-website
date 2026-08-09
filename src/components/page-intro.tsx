type PageIntroProps = {
  label: string;
  title: string;
  body: string;
};

export function PageIntro({ label, title, body }: PageIntroProps) {
  return (
    <section className="page-intro">
      <p className="section-label">{label}</p>
      <h1>{title}</h1>
      <p className="page-intro-copy">{body}</p>
    </section>
  );
}
