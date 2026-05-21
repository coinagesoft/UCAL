export default function HeroCareers() {
  return (
    <section
      style={{
       minHeight: "700px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "80px",          // ✅ exact left spacing
        paddingRight: "80px",
        paddingTop: "120px",
        paddingBottom: "80px",          // navbar offset
        background: `
          linear-gradient(
            90deg,
            rgba(40,34,112,0.98) 0%,
            rgba(40,34,112,0.9) 35%,
            rgba(40,34,112,0.4) 65%,
            rgba(40,34,112,0.05) 100%
          ),
          url('/media/img27.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        fontFamily: "Urbanist, sans-serif",
      }}
    >
      {/* CONTENT BLOCK */}
      <div
        style={{
          width: "695px",             //  exact Figma width
          display: "flex",
          flexDirection: "column",
          gap: "48px",                //  exact spacing between elements
        }}
      >
        {/* TEXT GROUP */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          
          {/* TITLE */}
          <h1
            style={{
              fontSize: "52px",       //  exact
              fontWeight: "600",
              lineHeight: "100%",     //  tight
              margin: 0,
            }}
          >
            Engineer the Future <br /> of Mobility. With Us.
          </h1>

          {/* DESCRIPTION */}
          <p
            style={{
              fontSize: "18px",
              lineHeight: "28px",
              color: "#d1d5db",
              margin: 0,
              maxWidth: "600px",
            }}
          >
            UCAL is where engineers come to solve real problems — <br/>not theoretical
            ones. We work on powertrain systems, EV <br/>components, electronics, and
            advanced manufacturing <br/> for customers across the world.
          </p>
        </div>

        {/* BUTTON */}
        <button
          style={{
            width: "fit-content",
            // backgroundColor: "#7ec342",
            // border: "none",
            // padding: "12px 24px",
            // borderRadius: "999px",
            // color: "#fff",
            // fontWeight: "500",
            // fontSize: "14px",
            // boxShadow: "0 4px 12px rgba(126,195,66,0.3)",
            // cursor: "pointer",
          }}
          className="custom-btn"
        >
          Stay Updated on Careers
        </button>
      </div>
    </section>
  );
}