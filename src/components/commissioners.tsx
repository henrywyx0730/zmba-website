import { zmbaContent } from "@/content/zmba";
import styles from "./page.module.css";

const founder = zmbaContent.commissioners.find((person) => person.ordinal === 1);
const incumbent = zmbaContent.commissioners.find((person) => person.incumbent);

export function Commissioners() {
  if (!founder || !incumbent) {
    return null;
  }

  const entries = [
    { person: founder, label: "Founder", role: "Founder & First Commissioner", term: "2023–2025" },
    { person: incumbent, label: "Current Commissioner", role: "Second Commissioner", term: "2025–Present" },
  ];

  return (
    <div className={styles.commissioners}>
      {entries.map(({ person, label, role, term }) => (
        <div key={person.id}>
          <p className={styles.commissionerLabel}>{label}</p>
          <p className={styles.commissionerName}>
            {person.name}
            <span lang="zh-Hans">{person.chineseName}</span>
          </p>
          <p className={styles.commissionerRole}>{role}</p>
          <p className={styles.commissionerTerm}>{term}</p>
        </div>
      ))}
    </div>
  );
}
