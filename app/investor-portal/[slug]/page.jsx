"use client";

import { useEffect, useState } from "react";

import { use } from "react";

import Link from "next/link";

import styles from "./InvestorFilePortal.module.css";

function formatFileSize(size) {

  if (!Number.isFinite(size)) {
    return "-";
  }

  return `${(size / 1024).toFixed(2)} KB`;
}

function getDownloadUrl(folderId, fileId) {

  if (!folderId || !fileId) {
    return "#";
  }

  return `/api/files/${folderId}/download/${fileId}`;
}

function ActionButton({
  children,
  variant = "secondary"
}) {

  return (

    <button
      className={`${styles.button} ${variant === "primary"
        ? styles.buttonPrimary
        : styles.buttonSecondary
        }`}
    >
      {children}
    </button>
  );
}

function PortalHeader({ totalFiles }) {

  return (

    <section className={styles.header}>

      <div className={styles.container}>

        <div className={styles.headerFlex}>

          <div className={styles.headerText}>

            <div className={styles.eyebrowRow}>

              <div className={styles.eyebrowLine} />

              <span className={styles.eyebrow}>
                Investor Relations
              </span>

            </div>

            <h1 className={styles.title}>
              UFSL — Investor Portal Online
            </h1>

            <div className={styles.meta}>

              <span>
                . Shared by UFSL Investor
              </span>

              <span>
                . {totalFiles} files
              </span>

            </div>

          </div>

          <div className={styles.actions}>

            <ActionButton>
              Download
            </ActionButton>

            <ActionButton>
              Copy link
            </ActionButton>

            <ActionButton variant="primary">
              Save to Drive
            </ActionButton>

          </div>

        </div>

      </div>

    </section>
  );
}

function CategoryTabs({
  categories,
  activeCategoryId,
  categoryFolders
}) {

  return (

    <div className={styles.tabsContainer}>

      <div className={styles.tabs}>

        <Link
          href="/company/investors"
          className={`${styles.tab} ${!activeCategoryId
            ? styles.tabActive
            : ""
            }`}
        >
          All
        </Link>

        {
          categories.map((category) => {

            const firstFolder = categoryFolders[category._id]?.[0];

            return (

              <Link
                key={category._id}
                href={firstFolder
                  ? `/investor-portal/${firstFolder._id}`
                  : `/company/investors?category=${category._id}#financialGrid`
                }
                className={`${styles.tab} ${activeCategoryId === category._id
                  ? styles.tabActive
                  : ""
                  }`}
              >
                {category.name}
              </Link>
            );
          })
        }

      </div>

    </div>
  );
}

function Breadcrumb({ folderName }) {

  return (

    <div className={styles.breadcrumb}>

      <Link
        href="/company/investors#financialGrid"
        className={styles.breadcrumbLink}
      >

        <img
          src="/media/img55.png"
          alt="Back"
          className={styles.backIcon}
        />

        <span className={styles.hideMobile}>
          UFSL - Investor Portal Online
        </span>

      </Link>

      {
        folderName
          ? (

            <>

              <span>/</span>

              <span className={styles.currentBreadcrumb}>
                {folderName}
              </span>

            </>
          )
          : null
      }

    </div>
  );
}

function FilesTable({ files, folderId }) {

  return (

    <div className={styles.tableWrapper}>

      <table className={styles.table}>

        <thead>

          <tr className={styles.headRow}>

            <th className={styles.th}>
              NAME
            </th>

            <th className={styles.th}>
              TYPE
            </th>

            <th className={styles.th}>
              SIZE
            </th>

            <th className={styles.th}></th>

          </tr>

        </thead>

        <tbody>

          {
            files.map((file) => (

              <tr
                key={file._id}
                className={styles.row}
              >

                <td className={styles.td}>

                  <div className={styles.fileCell}>

                    <img
                      src="/media/img54.png"
                      className={styles.pdfIcon}
                      alt="pdf"
                    />

                    <div>

                      <div className={styles.fileName}>
                        {file.title}
                      </div>

                      <div className={styles.fileType}>
                        {file.fileType}
                      </div>

                    </div>

                  </div>

                </td>

                <td className={styles.td}>
                  PDF
                </td>

                <td className={styles.td}>
                  {formatFileSize(file.size)}
                </td>

                <td className={styles.td}>

                  <a
                    href={getDownloadUrl(folderId, file._id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadButton}
                  >
                    <span>
                      &#8595;
                    </span>

                    Download
                  </a>

                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>
  );
}

export default function InvestorFilePortal({ params }) {

  const resolvedParams = use(params);

  const slug = resolvedParams.slug;

  const [files, setFiles] = useState([]);

  const [categories, setCategories] = useState([]);

  const [categoryFolders, setCategoryFolders] = useState({});

  const [currentFolder, setCurrentFolder] = useState(null);

  useEffect(() => {

    async function fetchFiles() {

      try {

        const res = await fetch(
          `/api/files/${slug}`
        );

        const data = await res.json();

        setFiles(
          Array.isArray(data)
            ? data
            : []
        );

      } catch (error) {

        console.log(error);
      }
    }

    fetchFiles();

  }, [slug]);

  useEffect(() => {

    async function fetchNavigationData() {

      try {

        const categoriesRes = await fetch("/api/categories");

        const categoriesData = await categoriesRes.json();

        const nextCategories = Array.isArray(categoriesData)
          ? categoriesData
          : [];

        const foldersByCategory = {};

        let matchedFolder = null;

        for (const category of nextCategories) {

          const foldersRes = await fetch(
            `/api/folders/${category._id}`
          );

          const foldersData = await foldersRes.json();

          const folders = Array.isArray(foldersData)
            ? foldersData
            : [];

          foldersByCategory[category._id] = folders;

          const folder = folders.find(
            (item) => item._id === slug
          );

          if (folder) {
            matchedFolder = folder;
          }
        }

        setCategories(nextCategories);

        setCategoryFolders(foldersByCategory);

        setCurrentFolder(matchedFolder);

      } catch (error) {

        console.log(error);
      }
    }

    fetchNavigationData();

  }, [slug]);

  return (

    <div className={styles.portal}>

      <PortalHeader
        totalFiles={files.length}
      />

      <div className={styles.container}>

        <CategoryTabs
          categories={categories}
          activeCategoryId={currentFolder?.categoryId}
          categoryFolders={categoryFolders}
        />

      </div>

      <main className={styles.main}>

        <Breadcrumb
          folderName={currentFolder?.name}
        />

        <FilesTable
          files={files}
          folderId={slug}
        />

      </main>

    </div>
  );
}
