"use client";

import styles from "./InfoCard.module.css";

export default function InfoCard({ image, title, description }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
} 
 
