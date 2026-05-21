import styles from "./StatsSection.module.css";

export default function StatCard({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>

        <img
          src={item.icon}
          alt={item.label}
          className={styles.icon}
        />

        <div>
          <h3 className={styles.value}>
            {item.value}
          </h3>

          <p className={styles.label}>
            {item.label}
          </p>
        </div>

      </div>

      <div className={styles.line}></div>
    </div>
  );
}