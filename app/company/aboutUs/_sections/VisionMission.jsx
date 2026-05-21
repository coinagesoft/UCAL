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
                <span className={styles.quote} style={{marginRight:"50px"}}>❝</span>

                <h3 className={styles.title}style={{marginRight:"80px"}}>Our Vision</h3>
              </div>

              <p className={styles.description } style={{alignItems:"center"}}>
                To be a global leader in intelligent mobility solutions—driving 
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
                the future of mobility—through precision manufacturing,
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