"use client";

import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
  titleClassName = "",
}) {
  return (
    <div className={`${styles.header} ${className}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={`${styles.title} ${titleClassName}`}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
