import styles from "./GlobalPresence.module.css";

export default function GlobalPresence() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`row ${styles.row}`}>
          <div className="col-12 col-md-6">
            <img
              src="/media/img19.png"
              alt="Global Presence Map"
              className={styles.map}
            />
          </div>

          <div className={`col-12 col-md-6 ${styles.content}`}>
            <h4 className={styles.eyebrow}>/ Global Presence</h4>

            <h1 className={styles.title}>
              Global Reach & <br /> Presence
            </h1>

            <p className={styles.description}>
              Presence Across 4 Continents. Consistency Across Borders.
            </p>

            <button className="custom-btn">Read More About us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
