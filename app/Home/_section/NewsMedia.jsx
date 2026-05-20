import { newsItems } from "@/constants/home";
import styles from "./NewsMedia.module.css";

function NewsCard({ img, tag, title, desc }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.imageWrap} hero-container`}>
        <img className={`${styles.image} hero-img`} src={img} alt="news" />
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.tag}>{tag}</span>
          <span>10 Nov, 2024</span>
        </div>

        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

      <a href="#" className={styles.readMore}>
        Read More →
      </a>
    </div>
  );
}

export default function NewsMedia() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h4>/ News & Media</h4>
        <h2>Insights & News</h2>
        <p>
          It is a long established fact that a reader will be distracted by <br />
          the readable content of a page when looking at its layout.
        </p>
      </div>

      <div className={styles.grid}>
        {newsItems.map((item) => (
          <NewsCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
