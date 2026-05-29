import styles from "./AccountabilitySection.module.css";

const cards = [
  {
    image: "/manufacturing/img57.webp",
    title: "Integrated Process Ownership",
    description:
      "UCAL's in-house chain covers die design, casting, machining, electronics assembly, surface treatment, testing, and final dispatch. Removing third-party handoffs eliminates the quality and schedule risk that accumulates at every supplier boundary.",
  },
  {
    image: "/manufacturing/img56.webp",
    title: "Quality Systems Built for OEM Scrutiny",
    description:
      "IATF 16949:2016 certification. SPC across machining processes. PPAP documentation as standard. FMEA and control plan support from the design stage. UCAL's quality infrastructure is built for the rigour of major OEM supplier qualification.",
  },
  {
    image: "/manufacturing/img57.webp",
    title: "Proven Volume Manufacturing",
    description:
      "70M+ parts delivered across multi-year production programs, with process controls designed to keep quality, schedules, and volumes predictable at scale.",
  },
  {
    image: "/manufacturing/img56.webp",
    title: "Single-Window Execution",
    description:
      "From tooling and validation to production readiness, UCAL keeps critical manufacturing ownership under one roof for fewer handoffs and clearer accountability.",
  },
];

export default function AccountabilitySection() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>/ Accountability</p>

      <h2 className={styles.title}>
        One Partner. One Quality System. <br />
        One Point of Accountability.
      </h2>

      <p className={styles.description}>
        When a manufacturer controls every step of the full production chain
        and holds each step to the same quality standard - the results are
        predictable. That is the UCAL model.
      </p>

      <div className={styles.cards}>
        {cards.map((card) => (
          <article className={styles.card} key={card.title}>
            <img className={styles.cardImage} src={card.image} alt="" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
