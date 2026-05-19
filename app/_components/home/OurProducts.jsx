export default function OurProducts() {
  const products = [
    {
      id: 1,
      name: "Automotive Components",
      description: "Precision-engineered components for the automotive aftermarket",
      category: "Automotive"
    },
    {
      id: 2,
      name: "Industrial Polymers",
      description: "Specialized polymers for demanding industrial applications",
      category: "Industrial"
    },
    {
      id: 3,
      name: "Custom Solutions",
      description: "Tailored polymer solutions for unique customer requirements",
      category: "Custom"
    },
    {
      id: 4,
      name: "OE-Grade Products",
      description: "Original equipment grade quality standards for all products",
      category: "OE-Grade"
    }
  ];

  return (
    <section style={{ padding: "80px 60px", backgroundColor: "#2a2a3e", color: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px", color: "#7ec342" }}>
          Our Products
        </h2>
        <div style={{ height: "3px", width: "60px", backgroundColor: "#7ec342", marginBottom: "50px" }}></div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                padding: "30px",
                backgroundColor: "#1a1a2e",
                borderRadius: "8px",
                borderLeft: "4px solid #7ec342",
                transition: "all 0.3s"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #1a1a2e 0%, #2a2a3e 100%)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#1a1a2e";
              }}
            >
              <div style={{ color: "#7ec342", fontSize: "12px", marginBottom: "10px", textTransform: "uppercase" }}>
                {product.category}
              </div>
              <h3 style={{ color: "#ffffff", marginBottom: "10px", fontSize: "20px" }}>
                {product.name}
              </h3>
              <p style={{ color: "#d0d0d0", lineHeight: "1.6" }}>
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
