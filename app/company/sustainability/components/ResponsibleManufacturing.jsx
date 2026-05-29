import styles from "./ResponsibleManufacturing.module.css";

const cards = [
  {
    image: "/Sustainability/img47.webp",
    title: "ISO 14001:2015 Certified",
    description: "Environmental Management across operations",
  },
  {
    image: "/Sustainability/img48.webp",
    title: "Rainwater Harvesting",
    description: "Sustainable water conservation at our plants",
  },
  {
    image: "/Sustainability/img49.webp",
    title: "Lead-Free Manufacturing",
    description: "SMT processes without harmful lead at UCAL",
  },
  {
    image: "/Sustainability/img50.webp",
    title: "Vacuum Die Casting",
    description: "Reducing material waste through advanced technology",
  },
  {
    image: "/Sustainability/img51.webp",
    title: "Process Optimization",
    description: "Efficiency programs to minimize scrap rates",
  },
];

export default function ResponsibleManufacturing() {
  return (
    <section className={styles.section}>
      <img
        className={styles.machineImage}
        src="/Sustainability/sus1.webp"
        alt=""
      />

      <div className={styles.container}>
        <div className={styles.textWrap}>
          <span className={styles.label}>/ Responsible Manufacturing</span>

          <h2>Efficiency In. Waste Out. Always.</h2>

          <p>
            Making manufacturing leaner is not just good for the planet - it&apos;s
            good engineering. UCAL&apos;s operational sustainability efforts focus on
            reducing material waste, energy intensity, and environmental impact
            across all facilities.
          </p>
        </div>

        <div className={styles.cards}>
          {cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <img src={card.image} alt="" />
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
