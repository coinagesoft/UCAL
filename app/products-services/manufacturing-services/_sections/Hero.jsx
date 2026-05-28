"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Gradient Overlay */}
      <div className={styles.overlay}>
        {/* Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            Manufacturing Built for <br /> Integrated Delivery
          </h1>

          <p className={styles.description}>
            UCAL&apos;s manufacturing infrastructure spans eight plants, five <br/>
            locations, and two countries â€” unified under a single quality<br/>
            management system and designed to take an OEM project from<br/>
            prototype to full production without handing it off to a third
            party.
          </p>

          <button className={`custom-btn ${styles.button}`}>
            Request a Manufacturing Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
