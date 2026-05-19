// ✅ STYLES
const sectionStyle = {
  width: "100%",
  padding: "100px 0",
  background: "#f5f6f7",
  display: "flex",
  justifyContent: "center",
};

const containerStyle = {
  width: "1440px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const cardRow = {
  display: "flex",
  gap: "30px",
  marginTop: "50px",
};

const card = {
  width: "413px",
  height: "430px",
  position: "relative",
  overflow: "hidden",
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const overlay = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "60%",
  background:
    "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "20px",
};

const cardTitle = {
  color: "#fff",
  fontSize: "20px",
  fontWeight: 600,
  marginBottom: "6px",
};

const cardDesc = {
  color: "#d1d5db",
  fontSize: "14px",
  lineHeight: "1.5",
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
export default function CommunitySection() {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* TOP TEXT */}
        <span style={{ color: "#6DBE45", fontSize: "16px" }}>
          / Community
        </span>

        <h2
          style={{
            fontSize: "52px",
            fontWeight: 600,
            textAlign: "center",
            margin: "10px 0",
            color: "#2c2c2c",
          }}
        >
          Good Business Starts with Good Citizenship
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "100%",
            color: "#6b6b6b",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          UCAL&apos;s Corporate Social Responsibility programmes focus on community
          welfare, environmental stewardship, and social <br/> inclusion — rooted in
          the regions where our plants and people operate.
        </p>

        {/* CARDS */}
        <div style={cardRow}>
          {/* CARD 1 */}
          <div style={card}>
            <img src="/media/img41.png" style={imgStyle} />

            <div style={overlay}>
              <div style={cardTitle}>BLOOD DONATION CAMPS</div>
              <div style={cardDesc}>
                Regular drives organised across UCAL facilities, supporting
                the critical need for voluntary blood donations in our communities.
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div style={card}>
            <img src="/media/img42.png" style={imgStyle} />

            <div style={overlay}>
              <div style={cardTitle}>CAR RALLY FOR THE BLIND</div>
              <div style={cardDesc}>
                UCAL supports inclusive social events that bring <br/>visibility and
                participation to differently-abled<br/> communities.
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div style={card}>
            <img src="/media/img43.png" style={imgStyle} />

            <div style={overlay}>
              <div style={cardTitle}>VILLAGE ADOPTION</div>
              <div style={cardDesc}>
                Long-term development support for villages near our manufacturing
                facilities — covering infrastructure, sanitation, and livelihoods.
              </div>
            </div>
          </div>
        </div>

        {/* ARROWS */}
        <div style={{ display: "flex", gap: "16px", marginTop: "30px" }}>
          <button style={arrowBtn}>←</button>
          <button style={arrowBtn}>→</button>
        </div>
      </div>
    </section>
  );
}
