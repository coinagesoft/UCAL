import styles from "./LeadershipSection.module.css";
import LeaderCard from "./LeaderCard";

const leaders = [
  {
    image: "/about/a11.webp",
    name: "Mr. Jayakar Krishnamurthy",
    designation: "CHAIRMAN & MANAGING DIRECTOR",
    description:
      "Leads UCAL’s global vision and strategy, driving innovation across engineering and advanced manufacturing sectors.",
  },

  {
    image: "/about/a12.webp",
    name: "Adithya Srivatsa Jayakar",
    designation: "DEPUTY MANAGING DIRECTOR",
    description:
      "Focuses on next-generation mobility and business transformation, scaling innovation and global growth.",
  },

  {
    image: "/about/a13.webp",
    name: "Ram Ramamurthy",
    designation: "WHOLE-TIME DIRECTOR",
    description:
      "Oversees operations with a strong focus on execution excellence and seamless manufacturing performance.",
  },
];

export default function LeadershipSection() {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* TOP CONTENT */}
        <div className={styles.topSection}>

          <div className={styles.leftContent}>
            <span className="gHeading">
              / Leadership
            </span>

            <div className="text-group">
              <h2 className="main-heading">
                Experience You Can
                <br />
                Engineer With.
              </h2>

              <p className={`sub-heading ${styles.leadDescription}`}>
                Our leadership team brings together decades of experience
                across engineering, operations, and global business
                development — people who understand both the shop floor
                and the boardroom.
              </p>
            </div>
          </div>

          <div className={styles.rightContent}>
            <p className={`sub-heading ${styles.rightDescription}`}>
              At UCAL, leadership is a standard we hold ourselves to at
              every level of the organisation. Our senior team has guided
              the company through multiple cycles of industry transformation
              — from carburettors to fuel injection, from mechanical to
              mechatronic, and now into the EV era. They carry not just
              the institutional knowledge of what we&apos;ve built, but the
              strategic clarity of where we&apos;re headed.
            </p>
          </div>

        </div>

        {/* BOARD TITLE */}
        <h3 className={styles.boardTitle}>
          Our Board of Directors
        </h3>

        {/* LEADERS */}
        <div className={styles.cardsWrap}>
          {leaders.map((leader, index) => (
            <LeaderCard key={index} leader={leader} />
          ))}
        </div>

        {/* ARROWS */}
        <div className={styles.controls}>
          <button className={styles.arrowBtn}>
           <img src="/media/arrowLeft.png" alt="" />
          </button>

          <button className={styles.arrowBtn}>
            <img src="/media/arrowRight.png" alt="" />
          </button>
        </div>

      </div>
    </section>
  );
}
