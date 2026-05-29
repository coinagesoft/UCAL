import CapabilityCard from "./CapabilityCard.jsx";
import styles from "./CapabilitySection.module.css";

const capabilities = [
  {
    image: "/media/img58.gif",
    subtitle: "ALUMINIUM & ZINC DIE CASTING",
    title: "High Pressure & Vacuum",
    description:
      "Machines from 180T to 1100T. Cold and hot chamber. In-house trimming, shot blasting, squeeze and jet cooling. Plants 1 and 10 - Maraimalainagar and Bawal. 12 die casting machines across two plants - makes including Toshiba, UBE, Zitai, HMT, Frech, and KTK - with available capacity for new projects across multiple tonnage ranges. Full machine list and capacity data available on request.",
    tags: ["180T - 1100T", "Cold & Hot Chamber", "Vacuum Die Casting"],
    reverse: false,
  },
  {
    image: "/media/img59.gif",
    subtitle: "CNC MACHINING",
    title: "High-Volume, Tight-Tolerance",
    description:
      "75 VMC drill-tap centres. 15 CNC turning centres. 150+ SPMs. Mikron micro-drilling. Washing, leak-checking, and high-pressure washing in-line.Our machining floor is set up for sustained volume production — not prototype runs presented as production capability. Fanuc robo-drills, Makino slims, AMS VMCs with 4th-axis, Mazak turning centres, and gun drilling. Every machine operates within a documented SPC and calibration cycle.",
    tags: ["75 VMC Centres", "15 CNC Turning", "150+ SPMs"],
    reverse: true,
  },
  {
    image: "/media/img60.gif",
    subtitle: "AUTOMOTIVE ELECTRONICS",
    title: "Clean Room, Full Validation",
    description:
      "IATF 16949:2016 and ISO 9001:2015 certified. 10K and 100K class clean room. 1.5 million units per annum. In supply to Bajaj, Tata, Mahindra, Volvo, Ashok Leyland, and others. UCAL Electronics, Pune has 25 years of automotive electronics design and manufacturing experience. The entire facility operates as a controlled clean-room environment. Lead-free SMT, 3D AOI and ICT as standard. EOL potting. In-house testing and validation. Products: ECUs, sensors, flashers, wiper controller modules, buzzers, reverse speed modules, and build-to-print electronics.",
    tags: ["10K / 100K Clean Room", "Lead-Free SMT", "3D AOI"],
    reverse: false,
  },
  {
    image: "/media/img61.gif",
    subtitle: "PRECISION MANUFACTURING",
    title: "Elgin, Illinois (UCAL Systems Inc.)",
    description:
      "Established 1959. Acquired 2005. 12,100 sq.m. 200 employees. IATF 16949:2016 - ISO 14001:2015 - AS 9100:2016. Serving Scania, DENSO, TRW, BorgWarner, Ford, GM, Bombardier. UCAL Systems Inc. extends UCAL's precision manufacturing into the United States - with processes including multi-spindle turning, hydromat rotary transfer, centreless grinding, gear hobbing and shaping, spline rolling, honing, CNC vertical and horizontal machining, and automated assembly and testing. AS 9100:2016 certification qualifies UCAL Systems for aerospace-grade precision components - a standard that demands more than IATF alone.",
    tags: ["AS 9100:2016", "Multi-Spindle Turning", "Gear Hobbing"],
    reverse: true,
  },
  {
    image: "/media/img62.gif",
    subtitle: "POLYMER PROCESSING",
    title: "Injection, Compression, Welding",
    description:
      "Vertical and horizontal injection moulding (50T-150T). Compression moulding (100T-200T). Ultrasonic and hot-plate welding. Composites. Moulded plastics and rubbers. Polymer processing at UCAL operates under the same quality management system as our metal processes - not as a standalone function. Components produced here are typically assembled or co-processed with machined metal parts, making in-house polymer capability a direct project advantage rather than an add-on service.",
    tags: ["50T - 150T Injection", "100T - 200T Compression", "Ultrasonic Welding"],
    reverse: false,
  },
];

export default function CapabilitySection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>/ Capability Area</p>
        <h2 className={styles.title}>
          Eight Process Capabilities. One <br /> Manufacturing Roof.
        </h2>
        <p className={styles.description}>
          When a manufacturer controls every step of the full production chain - and <br />
          holds each step to the same quality standard - the results are predictable.
        </p>
      </div>

      <div className={styles.cards}>
        {capabilities.map((item) => (
          <CapabilityCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
