"use client";

import { corporateContacts } from "@/constants/investors";
import styles from "./CorporateContacts.module.css";

function ContactField({ label, value, isLink = false, className = "" }) {
  if (!value) return null;

  return (
    <div>
      <label className={styles.label}>{label}</label>
      <p
        className={`${styles.value} ${isLink ? styles.linkValue : ""} ${className}`}
      >
        {value}
      </p>
    </div>
  );
}

function ContactCard({ contact }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.cardTitle}>{contact.title}</h4>

      <div className={styles.fields}>
        <ContactField label="Name" value={contact.name} />
        <ContactField label="Address" value={contact.address} className={styles.address} />
        <ContactField label="Telephone" value={contact.telephone} />
        <ContactField label="Fax" value={contact.fax} />
        <ContactField label="Email" value={contact.email} isLink />
        <ContactField label="Website" value={contact.website} isLink />
      </div>
    </div>
  );
}

export default function CorporateContacts() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>UCAL Limited — Corporate Contacts</h2>
            <p className={styles.subtitle}>Registered Office · Chennai · India</p>
          </div>
          <div className={styles.cin}>CIN: L31900TN1985PLC012343</div>
        </div>

        <div className={styles.grid}>
          {corporateContacts.map((contact) => (
            <ContactCard key={contact.title} contact={contact} />
          ))}
        </div>

        <div className={styles.actions}>
          <button className={`custom-btn ${styles.portalButton}`}>
            Access Investor Portal Files
          </button>
          <button className={styles.secondaryButton}>Smart ODI Portal</button>
        </div>
      </div>
    </section>
  );
}
