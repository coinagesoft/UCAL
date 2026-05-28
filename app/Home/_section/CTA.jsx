import styles from "./CTA.module.css";

export default function CTAS() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}> Let’s Build What Moves the World. </h1>

        <p className={styles.description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <button className="custom-btn">Download Brochures</button>
      </div>
    </section>
  );
}
