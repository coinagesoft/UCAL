import styles from "./CommitmentSection.module.css";

export default function CommitmentSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src="/Sustainability/img40.webp"
          alt="commitment"
        />

        <div className={styles.content}>
          <span className="gHeading">/ Our Commitment</span>

          <h2 className="main-heading">
            Leaner. Greener. Smarter.
            <br />
            That&apos;s the UCAL Standard.
          </h2>

          <p className="sub-heading">
            The mobility industry is at an inflection point. We believe the
            companies that will matter in 2035 are those who are already
            engineering for it in 2025.
          </p>

          <p className="para" style={{textAlign:"left"}}>
            UCAL&apos;s sustainability framework spans products, processes, and
            communities, guided by its &apos;Today&apos;s Interests - Tomorrow&apos;s Business&apos;
            strategy across eight focus areas including EV components, hydrogen,
            micro mobility, and advanced electronics. Many of these are already
            in production or development, with its EV roadmap evolving from
            current ECUs and DC-DC converters to future traction inverters,
            BMS, and onboard chargers.
          </p>
        </div>
      </div>
    </section>
  );
}
