import styles from "./LeaderCard.module.css";

export default function LeaderCard({ leader }) {
  return (
    <div className={styles.card}>

      <img
        src={leader.image}
        alt={leader.name}
        className={styles.image}
      />

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className="text-group">

          <h3 className={styles.name}>
            {leader.name}
          </h3>

          <span className={styles.designation}>
            {leader.designation}
          </span>

          <p className={styles.description}>
            {leader.description}
          </p>

        </div>
      </div>

    </div>
  );
}