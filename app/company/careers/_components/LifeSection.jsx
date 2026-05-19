export default function LifeSection() {
  return (
    <section
      style={{
        padding: "100px clamp(20px, 6vw, 80px)",
        background:
          "linear-gradient(90deg, #1a1f4d 0%, #0f2f2f 100%)",
        color: "#ffffff",
      }}
    >
      {/* ANIMATION STYLE */}
      <style>
        {`
          @keyframes floatUpDown {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      {/* TOP CONTENT */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "60px",
          marginBottom: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <p style={{ color: "#7ec342", fontSize: "16px" }}>
            /Life at UCAL
          </p>

          <h2
            style={{
              fontSize: "52px",
              fontWeight: "600",
              lineHeight: "1.3",
            }}
          >
            Work That Moves <br /> More Than Vehicles.
          </h2>
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1, minWidth: "280px", color: "#cbd5e1" }}>
          <p style={{ marginBottom: "18px", lineHeight: "33px" }}>
            At UCAL, an engineer in the R&D centre might be working on an EV component that ends up in a Bajaj or Mahindra vehicle within the year. A technician on the machining floor might be producing parts destined for a DENSO or BorgWarner assembly line in another country. The work here is tangible — and the impact travels far.
          </p>

          <p style={{ lineHeight: "33px" }}>
            We operate R&D centres in Ambattur (Powertrain & Mechatronics) and Pune (Electronics), with 150+ qualified engineers clocking over 200,000 hours of innovation annually since 1990. Our people don&apos;t just execute processes — they define them.
          </p>
        </div>
      </div>

      {/* IMAGE WITH FLOAT ANIMATION */}
      <div>
        <img
          src="/media/img29.png"
          alt="Life at UCAL"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            objectFit: "cover",
            animation: "floatUpDown 2s ease-in-out infinite", // ✅ animation added
          }}
        />
      </div>
    </section>
  );
}
