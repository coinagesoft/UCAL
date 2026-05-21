import styles from "./TimelineCard.module.css";

export default function TimelineCard({ item }) {
  return (
    <div className={styles.timelineRow}>

      {/* LEFT YEAR */}
      <div className={styles.yearWrap}>
        <span className={styles.year}>{item.year}</span>

      

        <div className={styles.dot}></div>
      </div>

      {/* CARD */}
      <div className={styles.card}>

        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <div className="text-group">

            <span className={styles.label}>
              {item.label}
            </span>

            <h3 className={styles.title}>
              {item.title}
            </h3>

            <p className={styles.description}>
              {item.description1}
            </p>

            <p className={styles.description}>
              {item.description2}
            </p>

            <div className={styles.tags}>
              {item.tags.map((tag, i) => (
                <span key={i} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* IMAGE */}
        <div className={styles.imageWrap}>
          <img
            src={item.image}
            alt={item.title}
            className={styles.image}
          />
        </div>

      </div>
    </div>
  );
}