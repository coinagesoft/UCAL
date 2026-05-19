import { whyUcalReasons } from "@/constants/home";
import styles from "./WhyUCAL.module.css";

function ReasonItem({ id, title, image }) {
  return (
    <div className={styles.reason}>
      <div className={styles.dot} />

      <div className={styles.reasonText}>
        <p className={styles.number}>({id})</p>
        <h4 className={styles.reasonTitle}>{title}</h4>
      </div>

      <div
        className={styles.reasonImage}
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
}

export default function WhyUCAL() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>/ Why UCAL</p>

          <h2 className={styles.title}>
            Global Standards.
            <br />
            Local Trust.
            Scalable <br /> Solutions.
          </h2>

          <p className={styles.description}>
            UCAL delivers precision, performance, and innovation <br />
            for the world's most trusted mobility systems.
          </p>

          <button className="custom-btn">See Our Capabilities</button>

          <div className={styles.imageWrap}>
            <img src="/media/img9.png" alt="" className={styles.carImage} />
          </div>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line} />

          {whyUcalReasons.map((item) => (
            <ReasonItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
