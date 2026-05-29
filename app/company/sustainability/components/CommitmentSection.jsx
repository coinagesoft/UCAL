export default function CommitmentSection() {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "80px 0",
        background: "#ffffff",
      }}
    >
      {/* MAIN CONTAINER */}
      <div
        style={{
          width: "1277px",
          display: "flex",
          alignItems: "center",
          gap: "73px",
        }}
      >
        {/* LEFT IMAGE */}
        <img
          src="/Sustainability/img40.webp"
          alt="commitment"
          style={{
            width: "583px",
            height: "500px",
            objectFit: "cover",
          }}
        />

        {/* RIGHT CONTENT */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "630px",
          }}
        >
          {/* SMALL LABEL */}
          <span
            style={{
              color: "#6DBE45",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            / Our Commitment
          </span>

          {/* HEADING */}
          <h2
            style={{
              fontSize: "52px",
              fontWeight: 600,
              lineHeight: "1.3",
              margin: 0,
              color: "#2c2c2c",
            }}
          >
            Leaner. Greener. Smarter.
            <br />
            That&apos;s the UCAL Standard.
          </h2>

          {/* DESCRIPTION 1 */}
          <p
            style={{
              fontSize: "18px",
              color: "#6b6b6b",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            The mobility industry is at an inflection point. We believe the
            companies that will matter in 2035 are those who are already
            engineering for it in 2025.
          </p>

          {/* DESCRIPTION 2 */}
          <p
            style={{
              fontSize: "18px",
              color: "#6b6b6b",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            UCAL&apos;s sustainability framework spans products, processes, and
            communities, guided by its &apos;Today’s Interests – Tomorrow’s Business&apos;
            strategy across eight focus areas including EV components, hydrogen,
            micro mobility, and advanced electronics. Many of these are already
            in production or development, with its EV roadmap evolving from
            current ECUs and DC-DC converters to future traction inverters,
            BMS, and onboard chargers.
          </p>
        </div>
      </div>
    </section>
  );
}
