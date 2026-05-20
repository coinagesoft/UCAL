"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import styles from "./FinancialGrid.module.css";

function FolderCard({ title, category, id }) {

  return (

    <Link
      href={`/investor-portal/${id}`}
      className={styles.cardLink}
    >

      <div className={styles.folderCard}>

        <div className={styles.folderContent}>

          <img
            src="/media/img53.png"
            alt="Folder"
            className={styles.folderIcon}
          />

          <h3 className={styles.folderTitle}>
            {title}
          </h3>

        </div>

        <span className={styles.category}>
          {category}
        </span>

      </div>

    </Link>
  );
}

function CategoryTabs({
  categories,
  activeTab,
  onTabChange
}) {

  return (

    <div className={styles.tabs}>

      <button
        onClick={() => onTabChange("All")}
        className={`${styles.tab} ${
          activeTab === "All"
            ? styles.tabActive
            : ""
        }`}
      >
        All
      </button>

      {
        categories.map((category) => (

          <button
            key={category._id}
            onClick={() => onTabChange(category)}
            className={`${styles.tab} ${
              activeTab?._id === category._id
                ? styles.tabActive
                : ""
            }`}
          >
            {category.name}
          </button>

        ))
      }

    </div>
  );
}

export default function FinancialsGrid() {

  const [categories, setCategories] = useState([]);

  const [folders, setFolders] = useState([]);

  const [activeTab, setActiveTab] = useState("All");

  function handleTabChange(tab) {

    setActiveTab(tab);

    const categoryId = tab === "All"
      ? ""
      : tab._id;

    const nextUrl = categoryId
      ? `/company/investors?category=${categoryId}#financialGrid`
      : "/company/investors#financialGrid";

    window.history.replaceState(null, "", nextUrl);
  }

  useEffect(() => {

    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);

        const categoryId = new URLSearchParams(window.location.search)
          .get("category");

        const selectedCategory = data.find(
          (category) => category._id === categoryId
        );

        if (selectedCategory) {
          setActiveTab(selectedCategory);
        }
      });

  }, []);

  useEffect(() => {

    async function fetchFolders() {

      try {

        if (activeTab === "All") {

          let allFolders = [];

          for (const category of categories) {

            const res = await fetch(
              `/api/folders/${category._id}`
            );

            const data = await res.json();

            const formatted = data.map((folder) => ({
              id: folder._id,
              title: folder.name,
              category: category.name
            }));

            allFolders = [
              ...allFolders,
              ...formatted
            ];
          }

          setFolders(allFolders);

        } else {

          const res = await fetch(
            `/api/folders/${activeTab._id}`
          );

          const data = await res.json();

          const formatted = data.map((folder) => ({
            id: folder._id,
            title: folder.name,
            category: activeTab.name
          }));

          setFolders(formatted);
        }

      } catch (error) {

        console.log(error);
      }
    }

    if (categories.length > 0) {
      fetchFolders();
    }

  }, [activeTab, categories]);

  return (

    <section  id="financialGrid" className={styles.section}>

      <div className={styles.container}>

        <div className={styles.header}>

          <p className={styles.eyebrow}>
            / Financials
          </p>

          <h2 className={styles.title}>
            Performance You Can Audit
          </h2>

          <p className={styles.description}>
            Our financial disclosures are published
            in full compliance with SEBI regulations
            and applicable accounting standards.
          </p>

        </div>

        <CategoryTabs
          categories={categories}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        <div className={styles.divider}>

          <span className={styles.dividerLabel}>
            Folders
          </span>

          <div className={styles.dividerLine} />

        </div>

        <div className={styles.grid}>

          {
            folders.length > 0
              ? folders.map((folder) => (

                <FolderCard
                  key={folder.id}
                  {...folder}
                />

              ))
              : (

                <div className={styles.emptyState}>
                  No folders available in this category.
                </div>
              )
          }

        </div>

      </div>

    </section>
  );
}
