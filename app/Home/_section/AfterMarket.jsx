import styles from "./AfterMarket.module.css";

export default function Global() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className="gHeading">/ After Market</p>

          <h2 className="main-heading">
            One-Stop Aftermarket <br />
            Partner, Now Global.
          </h2>

          <p className="sub-heading">
            OE-grade quality. Rapid fulfillment. Expanding into new markets.
          </p>

          <button className={`custom-btn ${styles.button}`}>
            Explore Aftermarket Range
          </button>
        </div>

        <div className={`hero-container ${styles.imageWrap}`}>
          <img src="/home/img20.webp" alt="Aftermarket" className={`${styles.image} hero-img`} />
        </div>
      </div>
    </section>
  );
}
