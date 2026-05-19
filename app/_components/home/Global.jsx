import styles from "./Global.module.css";

export default function Global() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.tag}>/ After Market</p>

          <h2 className={styles.title}>
            One-Stop Aftermarket <br />
            Partner, Now Global.
          </h2>

          <p className={styles.description}>
            OE-grade quality. Rapid fulfillment. Expanding into new markets.
          </p>

          <button className={`custom-btn ${styles.button}`}>
            Explore Aftermarket Range
          </button>
        </div>

        <div className="hero-container">
          <img src="/media/img20.png" alt="Aftermarket" className={`${styles.image} hero-img`} />
        </div>
      </div>
    </section>
  );
}
