// app/page.jsx OR ANY SECTION FILE

"use client";

import CatalogueCard from "./CatalogueCard";
import { catalogueData } from "@/constants/catalogues";
import styles from "./Catalogues.module.css";

export default function Catalogues() {
  return (
    <section className={styles.section}>
      <div className={`${styles.intro} wrapper`}>
        <p className="gHeading">/ Catalogues</p>
        <h2 className="main-heading">
          Our Products, Documented. <br /> Your Decision, Simplified.
        </h2>
        <p className="sub-heading">
          Download UCAL's product catalogues by segment or category — designed for engineering buyers <br /> and procurement teams who need complete specifications before making sourcing decisions.
        </p>
      </div>

      <div className={styles.container}>
        <h3 className={styles.title}>Mechatronics Products</h3>

        <div className={styles.grid}>
          {catalogueData.map((item, index) => (
            <CatalogueCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className={`${styles.container} ${styles.categoryBlock}`}>
        <h3 className={styles.afterMarketTitle}  >Aftermarket Products</h3>

        <div className={styles.grid}>
          {catalogueData.map((item, index) => (
            <CatalogueCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
