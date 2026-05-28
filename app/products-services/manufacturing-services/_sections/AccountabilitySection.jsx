"use client";

import React from "react";
import InfoCard from "@/components/InfoCard";
import styles from "./AccountabilitySection.module.css";

export default function AccountabilitySection() {
  return (
    <section className={styles.section}>
      {/* LABEL */}
      <p className={styles.label}>
        / Accountability
      </p>

      {/* HEADING */}
      <h2 className={styles.title}>
        One Partner. One Quality System. <br />
        One Point of Accountability.
      </h2>

      {/* TEXT */}
      <p className={styles.description}>
        When a manufacturer controls every step of the full production chain â€”
        and holds each step to the same quality standard â€” the results are
        predictable. That is the UCAL model.
      </p>

      {/* CARDS */}
      <div className={styles.cards}>
        <InfoCard
          image="/media/img57.png"
          title="Integrated Process Ownership"
          description="UCAL's in-house chain covers die design, casting, machining, electronics assembly, surface treatment, testing, and final dispatch. Removing third-party handoffs eliminates the quality and schedule risk that accumulates at every supplier boundary."
        />

        <InfoCard
          image="/media/img56.png"
          title="Quality Systems Built for OEM Scrutiny"
          description="IATF 16949:2016 certification. SPC across machining processes. PPAP documentation as standard. FMEA and control plan support from the design stage. UCAL's quality infrastructure is built for the rigour of major OEM supplier qualification."
        />
      </div>
    </section>
  );
}
