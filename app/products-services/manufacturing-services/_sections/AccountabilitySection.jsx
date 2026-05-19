"use client";

import React from "react";
import InfoCard from "@/components/InfoCard";
// import InfoCard from "../../../../components/InfoCard";

export default function AccountabilitySection() {
  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "#f7f7f7",
        textAlign: "center",
      }}
    >
      {/* LABEL */}
      <p style={{ color: "#79b93c", fontSize: "16px", marginBottom: "20px" }}>
        / Accountability
      </p>

      {/* HEADING */}
      <h2
        style={{
          fontSize: "52px",
          fontWeight: "600",
          color: "#333333",
          lineHeight: "1.3",
          maxWidth: "900px",
          margin: "0 auto 20px",
        }}
      >
        One Partner. One Quality System. <br />
        One Point of Accountability.
      </h2>

      {/* TEXT */}
      <p
        style={{
          fontSize: "1px",
          color: "#6b6b6b",
          maxWidth: "700px",
          margin: "0 auto 60px",
          lineHeight: "1.7",
        }}
      >
        When a manufacturer controls every step of the full production chain —
        and holds each step to the same quality standard — the results are
        predictable. That is the UCAL model.
      </p>

      {/* CARDS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "0 80px",
        }}
      >
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