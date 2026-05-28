import styles from "./HeroDownload.module.css";

export default function DownloadHero() {
  return (
    <section className={styles.hero}>
      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.text}>
          {/* Heading */}
          <h1 className={styles.title}>
            Everything You Need.
            <br />
            Ready to Download.
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Catalogues, spec sheets, certifications, and compliance<br/>
            documents â€” all available for our customers, partners, and
            procurement teams without needing to reach out first.
          </p>
        </div>
      </div>
    </section>
  );
}
