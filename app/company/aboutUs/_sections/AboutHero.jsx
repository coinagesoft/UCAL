import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>

      <div className={styles.content}>
        <div className={styles.textGroup}>
          <h1 className={styles.heading}>
            Decades of Engineering.
            <br />
            One Clear Mission
          </h1>

          <p className={styles.description}>
            From a single plant in Chennai to eight manufacturing facilities
            across India and the United States — UCAL has spent over three
            decades engineering the components that keep the world moving.
          </p>

          <button className={styles.customBtn}>
            Explore Our Journey
          </button>
        </div>
      </div>
    </section>
  );
}