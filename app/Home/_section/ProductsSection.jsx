"use client";

import { useState } from "react";
import { homeProducts } from "@/constants/home";
import styles from "./ProductsSection.module.css";

export default function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex =
    (currentIndex - 1 + homeProducts.length) % homeProducts.length;

  const next = () => setCurrentIndex((p) => (p + 1) % homeProducts.length);
  const prev = () =>
    setCurrentIndex((p) => (p - 1 + homeProducts.length) % homeProducts.length);

  const currentProduct = homeProducts[currentIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div>
            <div className={styles.imageWrap}>
              <div className={styles.preview}>
                <div
                  className={styles.previewImg}
                  style={{
                    backgroundImage: `url(${homeProducts[prevIndex].image})`,
                  }}
                />
              </div>

              <div
                key={currentIndex}
                className={styles.mainImg}
                style={{ backgroundImage: `url(${currentProduct.image})` }}
              />
            </div>

            <div className={styles.text}>
              <h3>{currentProduct.title}</h3>
              <ul>
                {currentProduct.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.right}>
            <p className={styles.tag}>/ Products</p>

            <h2 className={styles.heading}>
              Precision Components <br />
              Performance Assured.
            </h2>

            <div className={styles.controls}>

              <button
                className={styles.controlButton}
                onClick={prev}
              >
                &#8592;
              </button>

              <button
                className={styles.controlButton}
                onClick={next}
              >
                &#8594;
              </button>

            </div>
            <button className={`custom-btn ${styles.cta}`}>
              Download Product Catalogue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
