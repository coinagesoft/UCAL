"use client";

import styles from "./ShareHoldersHero.module.css";

export default function ShareholdersHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.overlay} />

      {/* CONTENT BLOCK */}
      <div className={styles.content}>
        {/* SUB-TAG */}
        <p className={styles.label}>
          / Shareholders
        </p>

        {/* MAIN TITLE */}
        <h2 className={styles.title}>
          Everything Your Shareholders Need, In One Place.
        </h2>

        {/* DESCRIPTION */}
        <p className={styles.description}>
          From shareholding patterns to registrar details â€” all the information that matters to UCAL&apos;s shareholders is structured for clarity and quick access
        </p>
      </div>
    </section>
  );
}
