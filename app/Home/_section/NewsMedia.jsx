import { newsItems } from "@/constants/home";
import styles from "./NewsMedia.module.css";

function NewsCard({ img, title, desc }) {
  return (

    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={`${styles.cardImg}hero-container`}>
          <img src={img} alt="cardImg" className="hero-img" />
        </div>
        <div>
          <div className={styles.calender}>
            <img src="/media/nCalender.png" alt="calender" />
            <p>10 Nov , 2024</p>
          </div>
          <div className={styles.cardText}>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
          <div className={styles.readMore}>
            <a href="">Read more</a>
            <img src="/media/arrow.png" alt="arrow" />
          </div>
        </div>

      </div>
    </div>

  );
}

export default function NewsMedia() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <h4 className="gHeading">/ News & Media</h4>
        <h2 className="main-heading">Insights & News</h2>
        <p className="sub-heading">
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
