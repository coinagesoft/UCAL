// ✅ STYLES
const sectionStyle = {
  width: "100%",
  padding: "100px 0",
  background: "#f3f5f4",
  position: "relative",
  overflow: "hidden",
};

const container = {
  width: "1440px",
  margin: "0 auto",
  position: "relative",
  zIndex: 2,
};

const textWrap = {
  maxWidth: "720px",
  margin: "0 auto",
  textAlign: "center",
};

const cardsWrap = {
  width: "1080px",
  margin: "50px auto 0",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const row = {
  display: "flex",
  gap: "20px",
};

const card = {
  width: "530px",
  height: "106px",
  background: "rgba(255,255,255,0.55)", // ✅ transparent
  backdropFilter: "blur(10px)",         // ✅ glass effect
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(228,232,239,0.6)",
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "16px 20px",
//   borderRadius: "10px",
};

const icon = {
  width: "50px",
  height: "50px",
};

const cardTitle = {
  fontSize: "18px",
  fontWeight: 600,
  marginBottom: "4px",
};

const cardDesc = {
  fontSize: "14px",
  color: "#6b6b6b",
};

// ✅ COMPONENT
export default function ResponsibleManufacturing() {
  return (
    <section style={ { ...sectionStyle, marginBottom: "150px"} }>

      {/* ✅ RIGHT IMAGE WITH FADE */}
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "900px",
          height: "560px",
          background: `
            linear-gradient(to left, rgba(243,245,244,0) 60%, #f3f5f4 100%),
            url('/media/img39.png')
          `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "right bottom",
          zIndex: 1,
        }}
      />

      <div style={container}>

        {/* TEXT */}
        <div style={textWrap}>
          <span style={{ color: "#6DBE45", fontSize: "16px" }}>
            / Responsible Manufacturing
          </span>

          <h2
            style={{
              fontSize: "52px",
              fontWeight: 600,
              margin: "12px 0",
              color: "#2c2c2c",
            }}
          >
            Efficiency In. Waste Out. Always.
          </h2>

          <p
            style={{
              maxWidth: "620px",
              margin: "0 auto",
              color: "#6b6b6b",
              fontSize: "18 px",
              lineHeight: "1.7",
            }}
          >
            Making manufacturing leaner is not just good for the planet — it&apos;s
            good engineering. UCAL&apos;s operational sustainability efforts focus on
            reducing material waste, energy intensity, and environmental impact
            across all facilities.
          </p>
        </div>

        {/* CARDS */}
        <div style={cardsWrap}>

          {/* ROW 1 */}
          <div style={row}>
            <div style={card}>
              <img src="/media/img47.png" style={icon} />
              <div>
                <div style={cardTitle}>ISO 14001:2015 Certified</div>
                <div style={cardDesc}>
                  Environmental Management across operations
                </div>
              </div>
            </div>

            <div style={card}>
              <img src="/media/img48.png" style={icon} />
              <div>
                <div style={cardTitle}>Rainwater Harvesting</div>
                <div style={cardDesc}>
                  Sustainable water conservation at our plants
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2 */}
          <div style={row}>
            <div style={card}>
              <img src="/media/img49.png" style={icon} />
              <div>
                <div style={cardTitle}>Lead-Free Manufacturing</div>
                <div style={cardDesc}>
                  SMT processes without harmful lead at UCAL
                </div>
              </div>
            </div>

            <div style={card}>
              <img src="/media/img50.png" style={icon} />
              <div>
                <div style={cardTitle}>Vacuum Die Casting</div>
                <div style={cardDesc}>
                  Reducing material waste through advanced technology
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3 */}
          <div style={row}>
            <div style={card}>
              <img src="/media/img51.png" style={icon} />
              <div>
                <div style={cardTitle}>Process Optimization</div>
                <div style={cardDesc}>
                  Efficiency programs to minimize scrap rates
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
