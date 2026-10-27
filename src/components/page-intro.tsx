import styles from "./page.module.css";

type PageIntroProps = {
  title: string;
  body?: string;
};

export function PageIntro({ title, body }: PageIntroProps) {
  return (
    <header className={styles.intro}>
      <h1>{title}</h1>
      {body ? <p className={styles.lead}>{body}</p> : null}
    </header>
  );
}
