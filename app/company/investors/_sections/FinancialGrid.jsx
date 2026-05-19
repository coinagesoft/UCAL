"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { folderData, investorCategories } from "@/constants/investors";
import styles from "./FinancialGrid.module.css";

function FolderCard({ title, category, slug }) {
  return (
    <Link href={`/investor-portal/${slug}`} className={styles.cardLink}>
      <div className={styles.folderCard}>
        <div className={styles.folderContent}>
          <img src="/media/img53.png" alt="Folder" className={styles.folderIcon} />
          <h3 className={styles.folderTitle}>{title}</h3>
        </div>
        <span className={styles.category}>{category}</span>
      </div>
    </Link>
  );
}

function CategoryTabs({ activeTab, onTabChange }) {
  return (
    <div className={styles.tabs}>
      {investorCategories.map((category) => (
        <button
          key={category}
          onClick={() => onTabChange(category)}
          className={`${styles.tab} ${activeTab === category ? styles.tabActive : ""
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default function FinancialsGrid() {
  const [activeTab, setActiveTab] = useState("All");

  const visibleFolders = useMemo(
    () =>
      folderData.filter(
        (folder) => activeTab === "All" || folder.category === activeTab
      ),
    [activeTab]
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>/ Financials</p>
          <h2 className={styles.title}>Performance You Can Audit</h2>
          <p className={styles.description}>
            Our financial disclosures are published in full compliance with SEBI regulations and applicable accounting standards — accessible, structured, and audit-ready.
          </p>
        </div>

        <CategoryTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className={styles.divider}>
          <span className={styles.dividerLabel}>Folders</span>
          <div className={styles.dividerLine} />
        </div>

        <div className={styles.grid}>
          {visibleFolders.map((folder) => (
            <FolderCard key={folder.slug} {...folder} />
          ))}
        </div>
      </div>
    </section>
  );
}
