import styles from "./SpecSheet.module.css";

export default function SpecSheet() {
  return (
    <div className={styles.specSheet}>
      <h2>Specification Sheet</h2>

      <p>
        Download the specification sheet for detailed
        information about our products and services.
      </p>

      <a
        href="/path/to/spec-sheet.pdf"
        download
        className={styles.downloadButton}
      >
        Download Spec Sheet
      </a>
    </div>
  );
}