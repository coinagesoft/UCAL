export default function Sushero() {
  return (
    <section
      style={{
        width: "100%",
        height: "560px",
        position: "relative",
        overflow: "hidden",
        marginTop: "-20px", // Ensure no top margin
      }}
    >
      {/* IMAGE */}
      <img
        src="/Sustainabilty/susBanner.webp"
        alt="engine"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",          //
          objectPosition: "bottom center",
        }}
      />

      {/* ✅ GRADIENT OVERLAY (THIS FIXES EVERYTHING) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, #282270 0%, rgba(40,34,112,0.95) 35%, rgba(40,34,112,0.4) 55%, rgba(40,34,112,0.1) 70%, rgba(40,34,112,0) 100%)",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "absolute",
          top: "132px",
          left: "80px",
          width: "695px",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontSize: "52px",
            fontWeight: 600,
            lineHeight: "1.2",
            margin: 0,
          }}
        >
          Net Zero Is Not a Goal. It&apos;s <br /> a Direction We Engineer <br /> Toward.
        </h1>

        <p
          style={{
            color: "#e6e9eb",
            fontSize: "18px",
            lineHeight: "1.6",
            margin: 0,
            maxWidth: "580px",
          }}
        >
          At UCAL, sustainability is not a policy document filed away after a <br />
          board meeting. It is built into the components we design, the <br /> processes
          we run, and the partnerships we choose.
        </p>
      </div>
    </section>
  );
}
