export default function TestimonialsSection() {
  return (
    <section
      style={{
        padding: "100px clamp(20px, 6vw, 80px)",
        background: "#f5f5f5",
        textAlign: "center",
      }}
    >
      {/* TOP TEXT */}
      <p style={{ color: "#7ec342", fontSize: "16px" }}>
        / Our People
      </p>

      <h2
        style={{
          fontSize: "52px",
          fontWeight: "600",
          marginBottom: "20px",
        }}
      >
        Hear It From Those Who Built UCAL.
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto 60px",
          color: "#666",
          lineHeight: "1.6",
          fontSize: "18px",
        }}
      >
        Real stories from the people who design our products and represent UCAL.
      </p>

      {/* TESTIMONIAL CARD */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          height: "320px",
          borderRadius: "8px",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #1f1b5e 0%, #2b2270 100%)",
          display: "flex",
          // alignItems: "center",  
          padding: "40px",
        }}
      >
        {/* TEXT CONTENT */}
        <div
          style={{
            maxWidth: "60%",
            color: "#fff",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* QUOTE */}
          <p
            style={{
              fontSize: "24px",
              lineHeight: "1.7",
              fontStyle: "italic",
              fontWeight: "500",
              textAlign: "left",

            }}
          >
            “At UCAL, I don’t just build products—I build the future of mobility, backed by a team that values people, ideas, and growth every single day.”
          </p>

          {/* NAME LEFT */}
          <div style={{ textAlign: "left" }}>
            <h4 style={{ marginBottom: "5px" , fontSize: "18px" }}>Rohan Sharma</h4>
            <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
              Senior Design Engineer
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <img
          src="/media/img30.png"
          alt="Person"
          style={{
            position: "absolute",
            right: "0px",
            bottom: "0",
            height: "320px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* ARROWS */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <button
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "none",
            background: "#7ec342",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ←
        </button>

        <button
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "none",
            background: "#7ec342",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          →
        </button>
      </div>
    </section>
  );
}