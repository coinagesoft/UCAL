import "./TestingFacility.css";

const facilityData = [
  {
    image: "/media/t7.svg",
    title: "2 wheeler chassis dynamometer",
    specs: [
      ["CAPACITY", "55KW DYNAMOMETER"],
      ["MAX LOAD", "500N"],
      ["MAX SPEED", "150 KMPH"],
      ["ROAD LOAD SIMULATION", ""],
      ["CONSTANT SPEED MODE TEST", ""],
      ["WIDE OPEN THROTTLE TEST", ""],
      ["MASS EMISSION TEST", ""],
    ],
  },

  {
    image: "/media/t8.svg",
    title: "Horiba mass emission analyzer",
    reverse: true,
    specs: [
      ["CO", "0-20%VOL"],
      ["CO2", "0-5000 PPM"],
      ["THC", "0-20000 PPM"],
      ["NOX", "0-10000 PPM"],
      ["MASS EMISSIONS FOR PETROL ENGINES", ""],
    ],
  },

  {
    image: "/media/t7.svg",
    title: "3 wheeler chassis dynamometer",
    specs: [
      ["CAPACITY", "30KW DYNAMOMETER"],
      ["MAX SPEED", "120KMPH"],
      ["ROAD LOAD SIMULATION", ""],
      ["CONSTANT SPEED MODE TEST", ""],
      ["WIDE OPEN THROTTLE TEST", ""],
    ],
  },
];

const otherTesting = [
  "Salt spray test",
  "Torsion spring testing station",
  "Burst &Pressure leak test rig",
  "Horiba automotive portable emission analyzer",
  "Spring testing system",
  "Super flow bench",
  "Fuel resistance test rig",
  "Throttle load performance testing",
];

export default function TestingFacility() {
  return (
    <section className="testing-facility">

      <div className="testing-overlay"></div>

      <div className="testing-wrapper">

        {/* Heading */}

        <div className="testing-heading">
          <p className="gHeading">/ Environmental Testing</p>

          <h2 className="main-heading testing-title">
            Testing Facility
          </h2>

          <p className="sub-heading testing-description">
            Three chambers — standard environmental, thermal shock, and walk-in
            — covering temperature ranges from -50°C to +170°C and humidity
            control for comprehensive climatic simulation.
          </p>
        </div>

        {/* Sections */}

        {facilityData.map((item, index) => (
          <div
            className={`testing-row ${item.reverse ? "reverse" : ""}`}
            key={index}
          >

            <div className="testing-image hero-container">
              <img src={item.image} alt={item.title} className="hero-img" />
            </div>

            <div className="testing-spec-box">

              <h3>{item.title}</h3>

              <div className="testing-spec-list">
                {item.specs.map((spec, i) => (
                  <div className="testing-spec" key={i}>
                    <span>{spec[0]}</span>
                    <p>{spec[1]}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        ))}

        {/* Other Testing */}

        <div className="other-testing-box">

          <h3>Other Testing</h3>

          <div className="other-testing-list">
            {otherTesting.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}