import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className="gHeading">/ Services</div>

        <h1 className="main-heading">
          Built to Deliver. Designed to Scale.
        </h1>

        <p className="sub-heading">
          With 10+ state-of-the-art manufacturing facilities, in-house tooling,
          and end-to-end design of delivery capabilities, UCAL supports OEMs and
          Aftermarket partners across project lifecycles.
        </p>

        <button className="custom-btn">Explore Our Capabilities</button>
      </div>
    </section>
  );
}
