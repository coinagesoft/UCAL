"use client";

import styles from "./HeroInvestors.module.css";

export default function HeroInvestors() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.overlay} />

      {/* CONTENT BLOCK */}
      <div className={styles.contentOuter}>
        <div className={styles.content}>
          {/* TITLE */}
          <h1 className="banner-title">
            Transparent.Accountable.<br />
            Built for the Long Term.
          </h1>

          {/* DESCRIPTION */}
          <p className="banner-description">
          UCAL is a publicly listed automotive component manufacturer committed to governance that matches the quality standards we hold in our plants — rigorous, documented, and consistently delivered.
          </p>

          {/* BUTTON */}
          <div className={styles.buttonWrap}>
            <button className={`custom-btn ${styles.button}`}>
              Request For Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
