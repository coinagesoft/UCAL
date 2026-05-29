import styles from "./Sushero.module.css";

export default function Sushero() {
  return (
    <section className={styles.hero}>
      <img
        className={styles.image}
        src="/Sustainability/susBanner.webp"
        alt="engine"
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1>
          Net Zero Is Not a Goal. It&apos;s <br /> a Direction We Engineer <br /> Toward.
        </h1>

        <p>
          At UCAL, sustainability is not a policy document filed away after a <br />
          board meeting. It is built into the components we design, the <br /> processes
          we run, and the partnerships we choose.
        </p>
      </div>
    </section>
  );
}
