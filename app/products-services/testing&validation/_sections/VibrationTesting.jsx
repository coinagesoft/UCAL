import "./VibrationTesting.css";

const vibrationSpecs = [
  { label: "CAPACITY", value: "1500 KGF" },
  { label: "FREQUENCY", value: "5-HZ 3000HZ" },
  { label: "VELOCITY", value: "1.2M/SEC" },
  { label: "BARE TABLE ACCELERATION", value: "80G" },
  { label: "MAX DISPLACEMENT", value: "40MM(P-P)" },
  { label: "PAYLOAD", value: "50 KG DIRECT" },
];

const combinedSpecs = [
  { label: "CAPACITY", value: "1000 KGF" },
  { label: "FREQUENCY", value: "5-HZ 3000HZ" },
  { label: "VELOCITY", value: "1.6M/SEC" },
  { label: "BARE TABLE ACCELERATION", value: "90G" },
  { label: "MAX DISPLACEMENT", value: "30MM(P-P)" },
  { label: "PAYLOAD", value: "30 KG DIRECT" },
  { label: "TEMPERATURE", value: "-40°C TO 150°C" },
  { label: "HUMIDITY", value: "40TO 95 % RH FOR TEMPERATURE 25°C TO 80 °C" },
];

export default function VibrationTesting() {
  return (
    <section className="vibration-section">

      <div className="vibration-wrapper">

        {/* Heading */}

        <div className="vibration-heading">
          <p className="gHeading">/ Vibration Testing</p>

          <h2 className="main-heading vibration-title">
            NABL Accredited Test Facility
          </h2>

          <p className="sub-heading vibration-description">
            Three chambers — standard environmental, thermal shock, and walk-in
            — covering temperature ranges from -50°C to +170°C and humidity
            control for comprehensive climatic simulation.
          </p>
        </div>

        {/* Row 1 */}

        <div className="vibration-row">

          <div className="vibration-image hero-container">
            <img src="/testingValidation/tv5.webp" alt="" className="hero-img" />
          </div>

          <div className="vibration-spec-box">
            <h3>Vibration Testing</h3>

            <div className="vibration-spec-list">
              {vibrationSpecs.map((item, index) => (
                <div className="vibration-spec" key={index}>
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Row 2 */}

        <div className="vibration-row reverse mt-3">

          <div className="vibration-spec-box large">
            <h3>Combined Vibration + Temperature / humidity</h3>

            <div className="vibration-spec-list">
              {combinedSpecs.map((item, index) => (
                <div className="vibration-spec" key={index}>
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="vibration-image large-image hero-container">
            <img src="/testingValidation/tv6.webp" alt="" className="hero-img" />
          </div>

        </div>

        {/* Bottom */}

        <div className="vibration-bottom">

          {/* Capabilities */}

          <div className="vibration-capability">
            <h3>Test Capibilities</h3>

            <div className="vibration-tags">
              <span>Constant vibration</span>
              <span>Sweep vibration</span>
              <span>Resonance search</span>
              <span>Random Vibration</span>
              <span>Shock test</span>
            </div>
          </div>

          {/* Standards */}

          <div className="vibration-standard">
            <h3>Standards & Compliance</h3>

            <div className="vibration-standard-list">

              <p className="full">
                Testing as per global standards
              </p>

              <p>JIS D 1601:1995</p>
              <p>IEC60068-2-6:2007</p>
              <p>ISO 16750-3-2023</p>

              <p>ISO 16750-4-2023</p>
              <p>OEM- specific standards (as applicable)</p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}