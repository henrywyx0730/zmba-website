import Link from "next/link";
import type { DocumentBlock, PublishedRulesDocument } from "@/content/rules";
import styles from "./rules-document.module.css";

function DocumentBlocks({ blocks }: { blocks: readonly DocumentBlock[] }) {
  return blocks.map((block, index) => {
    if (block.type === "paragraph") {
      return (
        <p key={`${block.text}-${index}`} lang={block.lang}>
          {block.text}
        </p>
      );
    }

    const List = block.type === "ordered-list" ? "ol" : "ul";

    return (
      <List className={styles.list} key={`${block.type}-${index}`} lang={block.lang}>
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex}>
            <DocumentBlocks blocks={item} />
          </li>
        ))}
      </List>
    );
  });
}

export function RulesDocument({ document }: { document: PublishedRulesDocument }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.backLink} href="/rules">
          ← Back to Rules
        </Link>
        <p className={styles.edition} lang="en">{document.edition}</p>
        <h1 lang="zh-Hans">{document.sourceTitle}</h1>
      </header>

      {document.sections.length > 1 ? (
        <nav className={styles.contents} aria-label="Document contents">
          <h2>Contents</h2>
          <ul>
            {document.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} lang="zh-Hans">{section.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <article className={styles.document}>
        {document.frontMatter.length ? (
          <div className={styles.frontMatter}>
            <DocumentBlocks blocks={document.frontMatter} />
          </div>
        ) : null}

        {document.sections.map((section) => (
          <section className={styles.section} id={section.id} key={section.id}>
            <h2 lang="zh-Hans">{section.title}</h2>
            <DocumentBlocks blocks={section.blocks} />
          </section>
        ))}

        {document.trailingBlocks.length ? (
          <div className={styles.closing}>
            <DocumentBlocks blocks={document.trailingBlocks} />
          </div>
        ) : null}
      </article>
    </div>
  );
}
