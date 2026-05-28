import styles from "./VisionMission.module.css";

export default function VisionMission() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>

          {/* VISION */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <img
                src="/media/a3.png"
                alt="Vision Icon"
                className={styles.iconImage}
              />
            </div>

            <div className={styles.content}>
              <div className={styles.headingWrap}>
                <span className={`${styles.quote} ${styles.visionQuote}`}>â</span>

                <h3 className={`${styles.title} ${styles.visionTitle}`}>Our Vision</h3>
              </div>

              <p className={styles.description}>
                To be a global leader in intelligent mobility solutionsâ€”driving 
                the transition from traditional engineering to
                advanced mechatronics and sustainable technologies.
              </p>
            </div>
          </div>

          {/* MISSION */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <img
                src="/media/a4.png"
                alt="Mission Icon"
                className={styles.iconImage}
              />
            </div>

            <div className={styles.content}>
              <h3 className={styles.title}>Our Mission</h3>

              <p className={styles.description}>
                To engineer high-performance automotive systems that power
                the future of mobilityâ€”through precision manufacturing,
                continuous innovation, and deep collaboration with global
                partners.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
