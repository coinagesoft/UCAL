// app/page.jsx OR ANY SECTION FILE

"use client";

import CatalogueCard from "./CatalogueCard";
import { catalogueData } from "@/constants/catalogues";
import styles from "./Catalogues.module.css";

export default function Catalogues() {
  return (
    <section className={styles.section}>
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
           <div className={styles.container } style={{ marginTop: "80px" }} >
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
