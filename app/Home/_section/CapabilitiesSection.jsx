"use client";

import { homeCapabilities } from "@/constants/home";
import styles from "./CapabilitiesSection.module.css";

function CapabilityTile({ image, title }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.overlay}>
        <span className={styles.title}>
          {title}
        </span>
      </div>
    </div>
  );
}

export default function CapabilitiesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {homeCapabilities.map((item) => (
          <CapabilityTile key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
