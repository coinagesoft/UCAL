import styles from "./TimelineSection.module.css";
import TimelineCard from "./TimelineCard";

const timelineData = [
  {
    year: "1960",
    label: "THE FOUNDATION",
    title: "Union Components & Accessories Ltd Founded",
    description1:
      "After founding Standard Motors India, K. Gopalakrishnan established UCAL to locally manufacture key components with guidance from Robert Bosch.",

    description2:
      "Closely tied to the automotive industry, UCAL has always understood customer needs deeply. The family continues its legacy through active involvement in leading automotive bodies and UCAL businesses.",

    image: "/about/a5.webp",

    tags: [
      "Standard Motors India",
      "Robert Bosch Partnership",
      "Chennai Origins",
    ],
  },

  {
    year: "1980",
    label: "JAPANESE QUALITY ENTERS INDIA",
    title: "UCAL Fuel Systems Ltd — JV with Mikuni",
    description1:
      "UCAL Fuel Systems Ltd founded as a JV with Mikuni for Carburettor Manufacturing – bringing Japanese quality systems to India.",

    description2:
      "UFSL Plant 1 Opened in Chennai with Ganapathy Homum (Pictured)",

    image: "/about/a6.webp",

    tags: [
      "Mikuni JV",
      "Carburettor Manufacturing",
      "UFSL Plant 1",
    ],
  },

  {
    year: "1990",
    label: "R&D & EXPANSION",
    title: "Krishnamurthy Centre Opens. Global Exports Begin.",
    description1:
      "Our dedicated design, testing & validation R&D center — the Krishnamurthy Centre for Automotive Excellence — opens.",

    description2:
      "UCAL Polymer Industries (UPIL) founded to add in-house rubbers & plastic injection moulding. Exports to global OEMs begin.",

    image: "/about/a7.webp",

    tags: [
      "Krishnamurthy Centre",
      "UPIL Founded",
      "Global Export Begins",
    ],
  },
  {
  year: "2000",
  label: "GLOBAL FOOTPRINT",
  title: "India's Leading Carburettor Supplier. US Acquisition.",

  description1:
    "India's leading carburettor supplier. Global expansion through acquisition of US Aerospace, Defence and Automotive supplier Amtec Precision and Amtec Moulded in Elgin, IL — now UCAL Systems Inc.",

  description2:
    "Product expansion into Pumps, Throttle Bodies, Valves & other Engine Control Systems.",

  image: "/about/a8.webp",

  tags: [
    "UCAL Systems Inc",
    "Elgin, Illinois",
    "Aerospace & Defence",
    "Throttle Bodies",
  ],
},

{
  year: "2010",
  label: "ENGINEERING INTELLIGENCE",
  title: "Pivot from Mechanical to Mechatronics",

  description1:
    "UCAL pivots from purely mechanical engineering to mechatronics. Engineering capabilities offered as Design, Testing & Validation Services.",

  description2:
    "Expanding value beyond components into full engineering partnership.",

  image: "/about/a9.webp",

  tags: [
    "Mechatronics",
    "Design Services",
    "Testing & Validation",
  ],
},

{
  year: "Today",
  label: "NOW",
  title: "60 Years of UCAL Automotive Excellence",

  description1:
    "35+ Global Vehicle OEM Customers. Over 150 million automotive products shipped.",

  description2:
    "The e-Carb System ships 1 million units in its first year, and more than 4 million units to date.",

  image: "/about/a10.webp",

  tags: [
    "150M+ Products Shipped",
    "35+ OEM Customers",
    "4M+ e-Carb Units",
  ],
}
];

export default function TimelineSection() {
  return (
    <section className={styles.timelineSection}>
      <div className="container">

        <div className={styles.headingWrap}>
          <span className="heading-main-sub">/ Milestones</span>

          <h2 className="heading-main">
            Thirty Years of Firsts.
          </h2>

          <p className="sub-heading">
            Every milestone at UCAL reflects a deliberate choice — to invest in
            capability before it was needed, and in quality long before it was
            mandated.
          </p>
        </div>

        <div className={styles.timeline}>
          {timelineData.map((item, index) => (
            <TimelineCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}