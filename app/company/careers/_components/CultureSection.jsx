export default function CultureSection() {
  const features = [
    {
      title: "TRAINING & MENTORING",
      desc: "Structured onboarding, domain-specific training, and mentoring programmes that connect new talent with experienced practitioners.",
      icon: "/media/img34.png",
    },
    {
      title: "SKILL DEVELOPMENT",
      desc: "Cross-functional exposure and technical upskilling aligned to UCAL’s expanding product portfolio — from traditional powertrain to EV systems.",
      icon: "/media/img35.png",
    },
    {
      title: "KNOWLEDGE SHARING",
      desc: "Internal technical talks, inter-facility collaboration, and access to UCAL’s decades of institutional engineering knowledge.",
      icon: "/media/img36.png",
    },
    {
      title: "COUNSELING SUPPORT",
      desc: "Professional counseling and guidance programmes that support employees through career transitions and personal challenges.",
      icon: "/media/img37.png",
    },
  ];

  return (
    <section
      style={{
        padding: "100px clamp(20px, 6vw, 80px)",
        display: "flex",
        gap: "60px",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#ffffff",
        flexWrap: "wrap",
      }}
    >
      {/* LEFT IMAGE */}
      <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
        <img
          src="/media/img28.png"
          alt="Culture"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "750px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div style={{ flex: "1 1 45%", maxWidth: "640px", minWidth: "300px" }}>
        <p style={{ color: "#7ec342", fontSize: "16px", marginBottom: "10px" }}>
          / Culture
        </p>

        <h2
          style={{
            fontSize: "40px",
            fontWeight: "600",
            lineHeight: "1.3",
            marginBottom: "20px",
          }}
        >
          Grow Here. Stay Here. <br /> Build Here.
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            lineHeight: "1.7",
            marginBottom: "40px",
          }}
        >
          We invest more than 5% of revenue into R&D — which means we invest
          in the people who run those programmes. Growth at UCAL is structured,
          not accidental.
        </p>

        {/* FEATURES */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {features.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              {/* IMAGE ICON */}
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  flexShrink: 0,
                }}
              >
                <img
                  src={item.icon}
                  alt="icon"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* TEXT */}
              <div>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "6px",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#666",
                    lineHeight: "1.6",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}