"use client";

export default function OurGroup() {
  const features = [
    { 
      id: 1, 
      title: "Manufacturing", 
      description: "State-of-the-art manufacturing facilities equipped with advanced CNC machinery and automation technology for precision production."
    },
    { 
      id: 2, 
      title: "Quality Control", 
      description: "Rigorous testing and quality assurance processes ensuring every product meets the highest international standards."
    },
    { 
      id: 3, 
      title: "Innovation", 
      description: "Continuous research and development driving innovation in polymer technology and manufacturing processes."
    }
  ];

  return (
    <div style={{ backgroundColor: "#1a1a2e", color: "#ffffff" }}>
      {/* Header Section */}
      <section style={{ padding: "80px 60px", backgroundColor: "#1a1a2e" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px", color: "#7ec342" }}>Our Group</h1>
        <div style={{ height: "3px", width: "60px", backgroundColor: "#7ec342", marginBottom: "30px" }}></div>
        <p style={{ fontSize: "18px", color: "#d0d0d0", maxWidth: "600px", lineHeight: "1.6" }}>We are a dedicated team of professionals committed to excellence in every aspect of our business.</p>
      </section>

      {/* Features Grid */}
      <section style={{ padding: "80px 60px", backgroundColor: "#2a2a3e" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
          {features.map((feature) => (
            <div 
              key={feature.id} 
              style={{ 
                padding: "40px", 
                backgroundColor: "#1a1a2e", 
                borderRadius: "8px", 
                textAlign: "center",
                transition: "transform 0.3s"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ width: "80px", height: "80px", backgroundColor: "#7ec342", borderRadius: "50%", margin: "0 auto 25px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>
                {feature.id === 1 ? "⚙️" : feature.id === 2 ? "✓" : "💡"}
              </div>
              <h3 style={{ color: "#7ec342", marginBottom: "15px", fontSize: "24px" }}>{feature.title}</h3>
              <p style={{ color: "#d0d0d0", lineHeight: "1.8" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: "80px 60px", backgroundColor: "#1a1a2e", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "30px", color: "#7ec342" }}>Ready to Work With Us?</h2>
        <button 
          style={{ 
            backgroundColor: "#7ec342", 
            color: "#ffffff", 
            padding: "15px 40px", 
            fontSize: "16px", 
            border: "none", 
            borderRadius: "25px", 
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#6eb336"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#7ec342"}
        >
          Request For Quote
        </button>
      </section>
    </div>
  );
}
