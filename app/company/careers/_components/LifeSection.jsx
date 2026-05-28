import styles from "./LifeSection.module.css";

export default function LifeSection() {
  return (
    <section className={styles.lifeSection}>
      {/* TOP CONTENT */}
      <div className={styles.lifeTop}>
        {/* LEFT */}
        <div className={styles.lifeColumn}>
          <p className="gHeading">
            /Life at UCAL
          </p>

          <h2
            className={`main-heading ${styles.lifeTitle}`}
          >
            Work That Moves <br /> More Than Vehicles.
          </h2>
        </div>

        {/* RIGHT */}
        <div className={styles.lifeColumn}>
          <p className={`sub-heading ${styles.lifeText}`}>
            At UCAL, an engineer in the R&D centre might be working on an EV component that ends up in a Bajaj or Mahindra vehicle within the year. A technician on the machining floor might be producing parts destined for a DENSO or BorgWarner assembly line in another country. The work here is tangible â€” and the impact travels far.
          </p>

          <p className={`sub-heading ${styles.lifeText}`}>
            We operate R&D centres in Ambattur (Powertrain & Mechatronics) and Pune (Electronics), with 150+ qualified engineers clocking over 200,000 hours of innovation annually since 1990. Our people don&apos;t just execute processes â€” they define them.
          </p>
        </div>
      </div>

      {/* IMAGE WITH FLOAT ANIMATION */}
      <div>
        <img
          src="/media/img29.png"
          alt="Life at UCAL"
          className={styles.lifeImage}
        />
      </div>
    </section>
  );
}
