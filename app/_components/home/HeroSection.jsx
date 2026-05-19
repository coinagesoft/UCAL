import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Engineering Trust.
          <br />
          Powering Mobility
          <br />
          Since 1985.
        </h1>

        <p className={styles.description}>
          40 years of OE-grade innovation, now serving Aftermarkets <br />
          globally.
        </p>

        <button className={`custom-btn ${styles.button}`}>
          Explore Our Products
        </button>
      </div>
    </section>
  );
}
