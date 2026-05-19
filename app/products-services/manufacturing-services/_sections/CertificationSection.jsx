"use client";

export default function CertificationSection() {
  return (
    <section
      style={{
        padding: "100px 0",
        backgroundColor: "#f7f7f7",
        textAlign: "center",
      }}
    >
      {/* LABEL */}
      <p style={{ color: "#79b93c", marginBottom: "20px" }}>
        / Certifications
      </p>

      {/* HEADING */}
      <h2
        style={{
          fontSize: "52px",
          maxWidth: "800px",
          margin: "0 auto 20px",
        }}
      >
        Certified Across Every Standard <br />
        That Matters to Your Project.
      </h2>

      {/* SUBTEXT */}
      <p
        style={{
          maxWidth: "650px",
          margin: "0 auto 60px",
          color: "#666",
          fontSize: "18px",
        }}
      >
        Our quality certifications are available for download for supplier
        qualification and RFQ processes. All held current and re-issued on
        schedule.
      </p>

      {/* FULL IMAGE (NO SPLIT) */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/media/img64.png"
          alt="Certifications"
          style={{
            maxWidth: "1000px",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </section>
  );
}