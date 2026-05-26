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

function getFolderCategoryId(folder) {

  return folder?.categoryId || folder?.category_id || null;
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

            const firstFolder = categoryFolders[category.id]?.[0];

            return (

              <Link
                key={category.id}
                href={firstFolder
                  ? `/investor-portal/${firstFolder.id}`
                  : `/company/investors?category=${category.id}#financialGrid`
                }
                className={`${styles.tab} ${String(activeCategoryId) === String(category.id)
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

function Breadcrumb({
  breadcrumb,
  categoryId
}) {

  const folderGridHref = categoryId
    ? `/company/investors?category=${categoryId}#financialGrid`
    : "/company/investors#financialGrid";

  return (

    <div className={styles.breadcrumb}>

      <Link
        href={folderGridHref}
        className={styles.breadcrumbLink}
      >

        <img
          src="/media/img55.png"
          alt="Back"
          className={styles.backIcon}
        />

        <span className={styles.hideMobile}>
          {/* Folder Grid */}
        </span>

      </Link>

      {
        breadcrumb.map((item) => (

          <div
            key={item.id}
            className={styles.breadcrumbItem}
          >

            <span>/</span>

            <Link
              href={`/investor-portal/${item.id}`}
              className={styles.breadcrumbLink}
            >
              {item.name}
            </Link>

          </div>

        ))
      }

    </div>
  );
}
function FolderGrid({ folders }) {

  if (!folders.length) {
    return null;
  }

  return (

    <div className={styles.grid}>

      {
        folders.map((folder) => (

          <Link
            key={folder.id}
            href={`/investor-portal/${folder.id}`}
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
                  {folder.name}
                </h3>

              </div>

              <span className={styles.category}>
                Folder
              </span>

            </div>

          </Link>

        ))
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
                key={file.id}
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
                        {file.name}
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
                    href={getDownloadUrl(folderId, file.id)}
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

  const [childFolders, setChildFolders] = useState([]);

  const [breadcrumb, setBreadcrumb] = useState([]);

  const [currentFolder, setCurrentFolder] = useState(null);
  const [categories, setCategories] = useState([]);

  const [categoryFolders, setCategoryFolders] = useState({});



  // useEffect(() => {

  //   async function fetchFiles() {

  //     try {

  //       const res = await fetch(
  //         `/api/files/${slug}`
  //       );

  //       const data = await res.json();

  //       setFiles(
  //         Array.isArray(data)
  //           ? data
  //           : []
  //       );

  //     } catch (error) {

  //       console.log(error);
  //     }
  //   }

  //   fetchFiles();

  // }, [slug]);

  useEffect(() => {

    async function fetchFolderData() {

      try {

        const res = await fetch(
          `/api/folders/view/${slug}`
        );

        const data = await res.json();

        setFiles(data.files || []);

        setChildFolders(data.childFolders || []);

        setBreadcrumb(data.breadcrumb || []);

        setCurrentFolder(data.folder || null);

      } catch (error) {

        console.log(error);
      }
    }

    fetchFolderData();

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
            `/api/folders/${category.id}`
          );

          const foldersData = await foldersRes.json();

          const folders = Array.isArray(foldersData)
            ? foldersData
            : [];

          foldersByCategory[category.id] = folders;

          const folder = folders.find(
            (item) => String(item.id) === slug
          );

          if (folder) {
            matchedFolder = folder;
          }
        }

        setCategories(nextCategories);

        setCategoryFolders(foldersByCategory);

        if (matchedFolder) {
          setCurrentFolder(matchedFolder);
        }

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
          activeCategoryId={getFolderCategoryId(currentFolder)}
          categoryFolders={categoryFolders}
        />

      </div>

      <main className={styles.main}>

        <Breadcrumb
          breadcrumb={breadcrumb}
          categoryId={getFolderCategoryId(currentFolder)}
        />

        <div className={styles.contentSection}>

          {
            childFolders.length > 0 && (

              <>
                <div className={styles.divider}>

                  <span className={styles.dividerLabel}>
                    Folders
                  </span>

                  <div className={styles.dividerLine} />

                </div>

                <FolderGrid folders={childFolders} />

              </>
            )
          }

          {
            files.length > 0 && (

              <>
                <div className={styles.divider}>

                  <span className={styles.dividerLabel}>
                    Files
                  </span>

                  <div className={styles.dividerLine} />

                </div>

                <FilesTable
                  files={files}
                  folderId={slug}
                />

              </>
            )
          }

          {
            childFolders.length === 0 &&
            files.length === 0 && (

              <div className={styles.emptyState}>
                No folders or files inside this folder.
              </div>

            )
          }

        </div>

      </main>

    </div>
  );
}
