"use client";

export default function ShareholdersHero() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "440px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        padding: "60px 20px",
        overflow: "hidden",
        backgroundColor: "#020131", // Fallback base color
        fontFamily: "'Urbanist', sans-serif",
      }}
    >
      {/* Background Image Layer */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/media/img26.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1
        }}
      />

      {/* Precise Gradient Overlay from image_99ae1f.png */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(105deg, 
            rgba(2, 1, 49, 0.9) 0%, 
            rgba(23, 33, 105, 0.8) 45%, 
            rgba(92, 123, 30, 0.7) 100%
          )`,
          zIndex: 2
        }}
      />

      {/* CONTENT BLOCK */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* SUB-TAG */}
        <p
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#79B933",
            margin: 0,
          }}
        >
          / Shareholders
        </p>

        {/* MAIN TITLE */}
        <h2
          style={{
            fontSize: "52px",
            fontWeight: "600",
            color: "#FFFFFF",
            margin: 0,
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
          }}
        >
          Everything Your Shareholders Need, In One Place.
        </h2>

        {/* DESCRIPTION */}
        <p
          style={{
            fontSize: "18px",
            lineHeight: "28px",
            color: "#FFFFFF",
            opacity: 0.9,
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          From shareholding patterns to registrar details — all the information that matters to UCAL&apos;s shareholders is structured for clarity and quick access
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 34px !important;
          }
          p {
            font-size: 16px !important;
            line-height: 24px !important;
          }
          section {
            min-height: 360px !important;
          }
        }
      `}</style>
    </section>
  );
}
