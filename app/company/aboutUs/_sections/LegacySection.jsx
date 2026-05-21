import Image from "next/image";
import styles from "./LegacySection.module.css";

export default function LegacySection() {
  return (
    <section className={styles.legacySection}>
      <div className="container">
        <div className={styles.wrapper}>
          
          {/* LEFT IMAGE */}
          <div className={styles.imageWrapper}>
            <Image
              src="/media/a2.png"
              alt="Manufacturing"
              width={583}
              height={475}
              className={styles.image}
            />

            <div className={styles.overlayCard}>
              <h3>60+ Years</h3>
              <p>Manufacturing Excellence</p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.content}>
            <span className={styles.subHeading}>/ Legacy</span>

            <h2 className={styles.heading}>
              Built on Precision. Grown
              <br />
              on Partnership.
            </h2>

            <p className={styles.text}>
              UCAL was established in Chennai, India to serve a market that
              demanded high-volume, quality-critical, and cost-competitive
              automotive components.
            </p>

            <p className={styles.textSmall}>
              UCAL has grown from serving the Indian automotive industry into a
              global engineering partner, co-developing solutions for complex
              powertrain and mobility challenges. Today, it operates across
              automotive, off-highway, aerospace, and defence sectors, with
              over 70 million carburetors and 10 million pumps supplied
              worldwide. Backed by 4,000 employees, 8 manufacturing facilities,
              2 R&D centres, and 35+ OEM customers, UCAL's growth is driven by
              strong engineering, consistent quality, and close collaboration
              across the product lifecycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}