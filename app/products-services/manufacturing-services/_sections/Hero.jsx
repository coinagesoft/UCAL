"use client";

export default function Hero() {
  return (
    <section
      style={{
        width: "100%",
        height: "560px",
        backgroundImage: "url('/media/img56.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        position: "relative",
        marginTop:'0px'
      }}
    >
      {/* Gradient Overlay */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(
            90deg,
            rgba(40,34,112,1) 0%,
            rgba(40,34,112,0.88) 40%,
            rgba(40,34,112,0.1) 70%,
            rgba(40,34,112,0) 100%
          )`,
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Content */}
        <div
          style={{
            maxWidth: "700px",
            marginLeft: "80px",
            color: "#fff",
          }}
        >
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "600",
              lineHeight: "1.3",
              marginBottom: "20px",
            }}
          >
            Manufacturing Built for <br /> Integrated Delivery
          </h1>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.7",
              color: "#dcdcdc",
              marginBottom: "25px",
              maxWidth: "600px",
            }}
          >
            UCAL&apos;s manufacturing infrastructure spans eight plants, five <br/>
            locations, and two countries — unified under a single quality<br/>
            management system and designed to take an OEM project from<br/>
            prototype to full production without handing it off to a third
            party.
          </p>

          <button
            // style={{
            //   backgroundColor: "#6cc04a",
            //   color: "#fff",
            //   border: "none",
            //   padding: "12px 22px",
            //   fontSize: "14px",
            //   borderRadius: "25px",
            //   cursor: "pointer",
            //   transition: "0.3s",
            // }}
            className="custom-btn"
            // onMouseOver={(e) => (e.target.style.backgroundColor = "#5aad3f")}
            // onMouseOut={(e) => (e.target.style.backgroundColor = "#6cc04a")}
          >
            Request a Manufacturing Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
