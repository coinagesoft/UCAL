"use client";

import Link from "next/link";
import { investorCategories, investorPortalFiles } from "@/constants/investors";
import styles from "./InvestorFilePortal.module.css";

function ActionButton({ children, variant = "secondary" }) {
  return (
    <button
      className={`${styles.button} ${
        variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary
      }`}
    >
      {children}
    </button>
  );
}

function PortalHeader() {
  return (
    <section className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerFlex}>
          <div className={styles.headerText}>
            <div className={styles.eyebrowRow}>
              <div className={styles.eyebrowLine} />
              <span className={styles.eyebrow}>Investor Relations</span>
            </div>

            <h1 className={styles.title}>UFSL — Investor Portal Online</h1>

            <div className={styles.meta}>
              <span>. Shared by UFSL Investor</span>
              <span>. 31 folders· 1 file</span>
              <span>. Last updated Jan 31, 2025</span>
            </div>
          </div>

          <div className={styles.actions}>
            <ActionButton>Download</ActionButton>
            <ActionButton>Copy link</ActionButton>
            <ActionButton variant="primary">Save to Drive</ActionButton>
          </div>
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {investorCategories.map((tab, index) => (
              <button
                key={tab}
                className={`${styles.tab} ${index === 0 ? styles.tabActive : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Breadcrumb() {
  return (
    <div className={styles.breadcrumb}>
      <Link href="/company/investors" className={styles.breadcrumbLink}>
        <img src="/media/img55.png" alt="Back" className={styles.backIcon} />
        <span className={styles.hideMobile}>100 Days Campaign – Saksham Niveshak</span>
      </Link>

      <span className={styles.hideMobile}>/</span>

      <span className={styles.currentBreadcrumb}>
        100 Days Campaign – Saksham Niveshak
      </span>
    </div>
  );
}

function FilesTable() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headRow}>
            <th className={styles.th}>NAME â†“</th>
            <th className={styles.th}>MODIFIED</th>
            <th className={styles.th}>SIZE</th>
            <th className={styles.th}></th>
          </tr>
        </thead>

        <tbody>
          {investorPortalFiles.map((file, index) => (
            <tr key={`${file.name}-${index}`} className={styles.row}>
              <td className={styles.td}>
                <div className={styles.fileCell}>
                  <img src="/media/img54.png" className={styles.pdfIcon} alt="pdf" />
                  <div>
                    <div className={styles.fileName}>{file.name}</div>
                    <div className={styles.fileType}>{file.type}</div>
                  </div>
                </div>
              </td>
              <td className={styles.td}>{file.modified}</td>
              <td className={styles.td}>{file.size}</td>
              <td className={styles.td}>
                <button className={styles.downloadButton}>
                  <span>&#8595;</span> Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function InvestorFilePortal() {
  return (
    <div className={styles.portal}>
      <PortalHeader />

      <main className={styles.main}>
        <Breadcrumb />
        <FilesTable />
      </main>
    </div>
  );
}
