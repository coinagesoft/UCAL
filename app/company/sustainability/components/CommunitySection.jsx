import styles from "./CommunitySection.module.css";

const cards = [
  {
    image: "/Sustainability/img41.webp",
    title: "BLOOD DONATION CAMPS",
    description:
      "Regular drives organised across UCAL facilities, supporting the critical need for voluntary blood donations in our communities.",
  },
  {
    image: "/Sustainability/img42.webp",
    title: "CAR RALLY FOR THE BLIND",
    description:
      "UCAL supports inclusive social events that bring visibility and participation to differently-abled communities.",
  },
  {
    image: "/Sustainability/img43.webp",
    title: "VILLAGE ADOPTION",
    description:
      "Long-term development support for villages near our manufacturing facilities - covering infrastructure, sanitation, and livelihoods.",
  },
];

export default function CommunitySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className="gHeading">/ Community</span>

        <h2 className="main-heading">Good Business Starts with Good Citizenship</h2>

        <p className="sub-heading" style={{textAlign:"center"}}>
          UCAL&apos;s Corporate Social Responsibility programmes focus on community
          welfare, environmental stewardship, and social <br /> inclusion - rooted in
          the regions where our plants and people operate.
        </p>

        <div className={styles.cards}>
          {cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <img src={card.image} alt="" />

              <div className={styles.overlay}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.arrows}>
          <button type="button" aria-label="Previous community item">
            <img src="/media/arrowLeft.png" alt="" />
          </button>
          <button type="button" aria-label="Next community item">
            <img src="/media/arrowRight.png" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
