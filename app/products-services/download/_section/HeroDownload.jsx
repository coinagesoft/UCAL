export default function DownloadHero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "560px",
        backgroundImage: "url('/media/img66.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(
              90deg,
              rgba(40, 34, 112, 0.96) 0%,
              rgba(40, 34, 112, 0.88) 28%,
              rgba(40, 34, 112, 0.72) 48%,
              rgba(40, 34, 112, 0.35) 68%,
              rgba(40, 34, 112, 0.12) 100%
            )
          `,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 72px",
        }}
      >
        <div
          style={{
            maxWidth: "695px",
            display: "flex",
            flexDirection: "column",
            gap: "26px",
          }}
        >
          {/* Heading */}
          <h1
            style={{
              margin: 0,
              color: "#fff",
              fontSize: "52px",
              fontWeight: 600,
              lineHeight: "115%",
              letterSpacing: "0px",
              fontFamily: "Urbanist",
            }}
          >
            Everything You Need.
            <br />
            Ready to Download.
          </h1>

          {/* Description */}
          <p
            style={{
              margin: 0,
              maxWidth: "560px",
              color: "rgba(255,255,255,0.9)",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "28px",
              fontFamily: "Telex",
            }}
          >
            Catalogues, spec sheets, certifications, and compliance<br/>
            documents — all available for our customers, partners, and
            procurement teams without needing to reach out first.
          </p>
        </div>
      </div>
    </section>
  );
}