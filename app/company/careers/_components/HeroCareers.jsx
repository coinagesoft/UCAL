import styles from "./HeroCareers.module.css";

export default function HeroCareers() {
  return (
    <section className={styles.careersHero}>
      {/* CONTENT BLOCK */}
      <div className={styles.careersHeroContent}>
        {/* TEXT GROUP */}
        <div className={styles.careersHeroTextGroup}>
          
          {/* TITLE */}
          <h1 className={styles.careersHeroTitle}>
            Engineer the Future <br /> of Mobility. With Us.
          </h1>

          {/* DESCRIPTION */}
          <p className={styles.careersHeroDescription}>
            UCAL is where engineers come to solve real problems â€” <br/>not theoretical
            ones. We work on powertrain systems, EV <br/>components, electronics, and
            advanced manufacturing <br/> for customers across the world.
          </p>
        </div>

        {/* BUTTON */}
        <button className={`custom-btn ${styles.careersHeroButton}`}>
          Stay Updated on Careers
        </button>
      </div>
    </section>
  );
}
