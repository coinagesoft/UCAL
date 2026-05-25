// app/products-services/download/_section/CatalogueCard.jsx

"use client";
import Image from "next/image";
import DownloadIcon from "@/components/common/DownloadIcon";
import styles from "./CatalogueCard.module.css";

export default function CatalogueCard({
  title,
  description,
  requestText = "Request Spec Sheet",
  downloadText = "Download",
}) {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.iconBox}>
          <Image
            src="/media/img67.png"
            alt="document icon"
            width={42}
            height={42}
            className={styles.icon}
          />
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>
      </div>

      <div>
        <div className={styles.divider} />

        <div className={styles.actions}>
          <button className={styles.requestBtnBlue}>
            {requestText}
          </button>

          <button className={styles.downloadBtnGreen}>
            <DownloadIcon />
            {downloadText}
          </button>
        </div>
      </div>
    </div>
  );
}
