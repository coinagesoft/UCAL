export default function JobsSection() {
  const jobs = [
    {
      title: "STRATEGY CONSULTANT",
      desc: "Join our core consulting team to lead strategic planning, market analysis, and growth initiatives for corporate clients. Ideal for sharp thinkers with 3–5 years of experience in strategy or management consulting.",
    },
    {
      title: "OPERATIONS ANALYST",
      desc: "Support our clients in optimizing systems and processes. You'll work on performance mapping, process design, and KPI tracking. Perfect for analytical minds with a passion for efficiency.",
    },
    {
      title: "ORGANIZATIONAL CHANGE MANAGER",
      desc: "Help clients navigate transformation with empathy and structure. This role focuses on change strategy, internal alignment, and communication planning. Ideal for experienced professionals in HR transformation or leadership consulting.",
    },
    {
      title: "DIGITAL STRATEGY CONSULTANT",
      desc: "Work with clients to integrate digital tools into their business model. From automation to customer journey mapping, you'll guide transformation across platforms.",
    },
    {
      title: "CLIENT ENGAGEMENT SPECIALIST",
      desc: "Be the connection between clients and our internal team — ensuring alignment, communication, and project momentum.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px clamp(20px, 6vw, 80px)",
        background: "#ffffff",
        fontFamily: "Urbanist, sans-serif", // ✅ font match
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <p style={{ color: "#7ec342", fontSize: "16px" }}>/ Open Roles</p>

        <h2
          style={{
            fontSize: "40px",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Join the UCAL Team
        </h2>

        <p style={{ color: "#666", maxWidth: "600px", margin: "0 auto" }}>
          We keep our culture collaborative, respectful, and transparent. We
          work hard, stay curious, and celebrate progress — together.
        </p>
      </div>

      {/* JOB LIST */}
      {jobs.map((job, index) => (
        <div key={index}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            {/* LEFT CONTENT */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {/* TITLE */}
              <h3
                style={{
                  fontSize: "24px", // ✅ FIXED
                  fontWeight: "500",
                  textTransform: "uppercase",
                }}
              >
                {job.title}
              </h3>

              {/* TAGS */}
              <div style={{ display: "flex", gap: "12px" }}>
                {["Remote", "Chennai", "New York"].map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#282270",
                      color: "#fff",
                      fontSize: "12px",
                      padding: "8px 16px",
                      borderRadius: "6px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "28px",
                  color: "#666",
                  maxWidth: "100%",
                }}
              >
                {job.desc}
              </p>
            </div>

            {/* BUTTON */}
            <button
              style={{
                marginTop: "8px",
                // background: "#7ec342",
                // border: "none",
                // padding: "10px 16px", // ✅ FIXED
                // borderRadius: "6px", // ✅ FIXED
                // color: "#fff",
                // fontSize: "13px",
                // cursor: "pointer",
                // whiteSpace: "nowrap",
                // boxShadow: "0 4px 12px rgba(126,195,66,0.3)",
              }}
              className="custom-btn"
            >
              Apply For This Role
            </button>
          </div>

          {/* DIVIDER */}
          {index !== jobs.length - 1 && (
            <div
              style={{
                margin: "30px 0",
                borderBottom: "1px solid #e5e5e5",
              }}
            />
          )}
        </div>
      ))}
    </section>
  );
}