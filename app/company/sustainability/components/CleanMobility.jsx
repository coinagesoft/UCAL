// ✅ STYLES
const cardStyle = {
  width: "530px",
  height: "327px",
  background: "#F7F9F8",
  border: "1px solid rgba(46,125,91,0.12)",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: 600,
  marginBottom: "10px",
};

const descStyle = {
  fontSize: "14px",
  color: "#6b6b6b",
  lineHeight: "23px",
};

const tagWrap = {
  display: "flex",
  gap: "6px",
  flexWrap: "wrap",
};

const tag = {
  fontSize: "11px",
  padding: "8px 12px",
  background: "#eef1f4",
  borderRadius: "20px",
  color: "#282270",
};

const arrowBtn = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  background: "#6DBE45",
  border: "none",
  cursor: "pointer",
};

// ✅ COMPONENT
export default function CleanMobility() {
  return (
    <section
      style={{
        width: "100%",
        height: "861px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/media/backGround1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          width: "1440px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* TOP TEXT */}
        <span
          style={{
            color: "#6DBE45",
            fontSize: "16px",
            marginBottom: "12px",
          }}
        >
          / Clean Mobility
        </span>

        <h2
          style={{
            color: "#ffffff",
            fontSize: "52px",
            fontWeight: 600,
            textAlign: "center",
            margin: 0,
          }}
        >
          The Transition Runs on Parts. We Make Those Parts.
        </h2>

        <p
          style={{
            color: "#cfd3d8",
            fontSize: "18px",
            textAlign: "center",
            maxWidth: "100%",
            marginTop: "16px",
            marginBottom: "50px",
          }}
        >
          UCAL&apos;s EV and alternative energy product roadmap is not a pivot — it
          is a natural extension of our powertrain engineering expertise <br />
          into the technologies that will define mobility’s next chapter.
        </p>

        {/* CARDS */}
        <div style={{ display: "flex", gap: "30px" }}>
          {/* CARD 1 */}
          <div style={cardStyle}>
            <div>
              <img
                src="/Sustainability/img44.webp"
                alt="icon"
                style={{ marginBottom: "16px" }}
              />

              <h4 style={titleStyle}>EV COMPONENTS</h4>

              <p style={descStyle}>
                From handlebar grip sensors and DC-DC converters currently in
                production, to traction inverters, onboard chargers, and battery
                management systems in development — UCAL is building out a full
                EV component suite for 2-wheel and 3-wheel electric vehicles.
              </p>
            </div>

            <div style={tagWrap}>
              <span style={tag}>DC-DC Converter</span>
              <span style={tag}>Engine Control Units</span>
              <span style={tag}>Traction Inverters</span>
            </div>
          </div>

          {/* CARD 2 */}
          <div style={cardStyle}>
            <div>
              <img
                src="/Sustainability/img45.webp"
                alt="icon"
                style={{ marginBottom: "16px" }}
              />

              <h4 style={titleStyle}>HYDROGEN & FUEL CELLS</h4>

              <p style={descStyle}>
                UCAL is actively engaged in market study and technology partner
                identification for hydrogen combustion and fuel cell components —
                positioning for the next wave of clean mobility beyond
                battery-electric.
              </p>
            </div>

            <div style={tagWrap}>
              <span style={tag}>Hydrogen Combustion</span>
              <span style={tag}>Fuel Cell Components</span>
              <span style={tag}>Market Study Phase</span>
            </div>
          </div>

          {/* CARD 3 */}
          <div style={cardStyle}>
            <div>
              <img
                src="/Sustainability/img46.webp"
                alt="icon"
                style={{ marginBottom: "16px" }}
              />

              <h4 style={titleStyle}>MICRO MOBILITY</h4>

              <p style={descStyle}>
                Engineering solutions for e-scooters and light electric vehicles —
                the fastest-growing segment in urban transportation.
              </p>
            </div>

            <div style={tagWrap}>
              <span style={tag}>E-Scooters</span>
              <span style={tag}>E-Cycles</span>
              <span style={tag}>Light EV</span>
            </div>
          </div>
        </div>

        {/* ARROWS */}
        <div style={{ display: "flex", gap: "16px", marginTop: "40px" }}>
          <button style={arrowBtn}>←</button>
          <button style={arrowBtn}>→</button>
        </div>
      </div>
    </section>
  );
}
