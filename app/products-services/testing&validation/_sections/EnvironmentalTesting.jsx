import "./EnvironmentalTesting.css";

const chamberData = [
  {
    image: "/media/t1.svg",
    title: "Environmental Test",
    volume: "340 LTS",
    temperature: "-50 °C TO 170 °C",
    ramp: "4°C / MIN",
    size: "0.72M X 0.55M X 0.75M",
  },
  {
    image: "/media/t2.svg",
    title: "Thermal Shock Chamber",
    volume: "125 LTS",
    temperature: "-40 °C TO 150 °C",
    ramp: "2 °C / MIN",
    size: "0.5M X 0.5M X 0.5M",
  },
  {
    image: "/media/t3.svg",
    title: "Walk in Chamber",
    volume: "11470 LTS",
    temperature: "-10 °C TO 70 °C",
    ramp: "1°C/MIN",
    size: "1.8M X 3.75M X 1.7 M",
  },
];

export default function EnvironmentalTesting() {
  return (
    <section className="environment-section">

      <div className="environment-overlay"></div>

      <div className="environment-wrapper">

        <div className="environment-heading">
          <p className="gHeading">/ Environmental Testing</p>

          <h2 className="main-heading env-title">
            Simulate Every Climate. Validate for All.
          </h2>

          <p className="sub-heading env-description">
            Three chambers — standard environmental, thermal shock, and walk-in
            — covering temperature ranges from -50°C to +170°C and humidity
            control for comprehensive climatic simulation.
          </p>
        </div>

        {/* Cards */}

        <div className="env-card-grid">
          {chamberData.map((item, index) => (
            <div className="env-card" key={index}>
              <div className="env-card-image hero-container">
                <img src={item.image} alt={item.title} className="hero-img" />
              </div>

              <div className="env-card-content">
                <h3>{item.title}</h3>

                <div className="env-spec">
                  <span>VOLUME</span>
                  <p>{item.volume}</p>
                </div>

                <div className="env-spec">
                  <span>TEMPERATURE</span>
                  <p>{item.temperature}</p>
                </div>

                <div className="env-spec">
                  <span>RAMP RATE</span>
                  <p>{item.ramp}</p>
                </div>

                <div className="env-spec">
                  <span>INTERNAL SIZE</span>
                  <p>{item.size}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}

        <div className="env-bottom-grid">

          {/* Capabilities */}

          <div className="capability-box">
            <h3>Test Capabilities</h3>

            <div className="capability-tags">
              <span>Cold</span>
              <span>Dry Heat</span>
              <span>Damp Heat-steady State</span>
              <span>Temperature Shock (Na)</span>
              <span>Temperature Cyclic (Nb)</span>
            </div>
          </div>

          {/* Standards */}

          <div className="standard-box">
            <h3>Standards & Compliance</h3>

            <div className="standard-list">

  <p className="standard-full">
    Testing as per global / OEM- specific standards
  </p>

  <p>IEC60068-2-1:2007</p>
  <p>IEC60068-2-2:2007</p>
  <p>IEC60068-2-14:2023</p>
  <p>IEC60068 2-67-1995</p>

  <p>IEC60068-2-78:2012</p>
  <p>IS 9000 PART IV :2020</p>
  <p>IS 9000 PART III :1977</p>
  <p>ISO 16750-3-2023</p>

</div>
          </div>

        </div>

      </div>
    </section>
  );
}