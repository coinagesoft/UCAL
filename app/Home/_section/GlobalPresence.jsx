import styles from "./GlobalPresence.module.css";

export default function GlobalPresence() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`row justify-content-between align-items-center`}>
          <div className="col-12 col-md-5">
            <img
              src="/media/img19.png"
              alt="Global Presence Map"
              className={styles.map}
            />
          </div>

          <div className={`col-12 col-md-5 ${styles.content}`}>
            <h4 className="gHeading">/ Global Presence</h4>

            <h1 className="main-heading">
              Global Reach & <br /> Presence
            </h1>

            <p className="sub-heading">
              Presence Across 4 Continents. Consistency Across Borders.
            </p>

            <button className="custom-btn">Read More About us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
