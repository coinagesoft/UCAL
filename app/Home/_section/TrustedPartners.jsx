import styles from "./TrustedPartners.module.css";

export default function TrustedPartners() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h4 className={styles.eyebrow}>/ Trusted Partners</h4>

        <h1 className={styles.title}>Trusted by the World&apos;s Leading OEMs.</h1>

        <p className={styles.description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className={styles.logoWrap}>
          <img
            src="/media/img18.png"
            alt="Trusted Partners Logos"
            className={styles.logo}
          />
        </div>
      </div>
    </section>
  );
}
