"use client";

import styles from "./CapabilityCard.module.css";

export default function CapabilityCard({
  image,
  subtitle,
  title,
  description,
  tags,
  reverse,
}) {
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : styles.normal}`}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <p className={styles.subtitle}>{subtitle}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
