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
        <p className="gHeading">
          / Shareholders
        </p>

        {/* MAIN TITLE */}
        <h2 className="main-heading" color="">
          Everything Your Shareholders Need, In One Place.
        </h2>

        {/* DESCRIPTION */}
        <p className="sub-heading">
          From shareholding patterns to registrar details — all the information that matters to UCAL's shareholders is <br />
          structured for clarity and quick access
        </p>
      </div>
    </section>
  );
}
