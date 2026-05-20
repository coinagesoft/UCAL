export default function Features() {
  const features = [
    {
      id: 1,
      title: "Advanced Manufacturing",
      description: "State-of-the-art facilities with cutting-edge technology"
    },
    {
      id: 2,
      title: "Quality Assurance",
      description: "Rigorous testing and strict quality control processes"
    },
    {
      id: 3,
      title: "R&D Excellence",
      description: "Continuous innovation in polymer technology"
    },
    {
      id: 4,
      title: "Global Standards",
      description: "Compliance with international quality and safety standards"
    },
    {
      id: 5,
      title: "Customer Support",
      description: "Dedicated support team for all your needs"
    },
    {
      id: 6,
      title: "Sustainability",
      description: "Environmentally responsible manufacturing practices"
    }
  ];

  return (
    <section style={{ padding: "80px 60px", backgroundColor: "#1a1a2e", color: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px", textAlign: "center", color: "#7ec342" }}>
          What Makes Us Different
        </h2>
        <div style={{ height: "3px", width: "60px", backgroundColor: "#7ec342", margin: "0 auto 50px" }}></div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          {features.map((feature) => (
            <div
              key={feature.id}
              style={{
                padding: "30px",
                backgroundColor: "#2a2a3e",
                borderRadius: "8px",
                textAlign: "center",
                transition: "all 0.3s"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(126, 195, 66, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>⭐</div>
              <h3 style={{ color: "#7ec342", marginBottom: "10px", fontSize: "20px" }}>
                {feature.title}
              </h3>
              <p style={{ color: "#d0d0d0", lineHeight: "1.6" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
