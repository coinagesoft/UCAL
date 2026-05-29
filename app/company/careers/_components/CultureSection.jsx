import styles from "./CultureSection.module.css";

export default function CultureSection() {
  const features = [
    {
      title: "TRAINING & MENTORING",
      desc: "Structured onboarding, domain-specific training, and mentoring programmes that connect new talent with experienced practitioners.",
      icon: "/careers/img34.webp",
    },
    {
      title: "SKILL DEVELOPMENT",
      desc: "Cross-functional exposure and technical upskilling aligned to UCAL’s expanding product portfolio — from traditional powertrain to EV systems.",
      icon: "/careers/img35.webp",
    },
    {
      title: "KNOWLEDGE SHARING",
      desc: "Internal technical talks, inter-facility collaboration, and access to UCAL’s decades of institutional engineering knowledge.",
      icon: "/careers/img36.webp",
    },
    {
      title: "COUNSELING SUPPORT",
      desc: "Professional counseling and guidance programmes that support employees through career transitions and personal challenges.",
      icon: "/careers/img37.webp",
    },
  ];

  return (
    <section className={styles.cultureSection}>
      {/* LEFT IMAGE */}
      <div className={styles.cultureImageWrap}>
        <img
          src="/careers/img28.webp"
          alt="Culture"
          className={styles.cultureImage}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className={styles.cultureContent}>
        <p className="gHeading">
          / Culture
        </p>

        <h2
          className="main-heading"
        >
          Grow Here. Stay Here. <br /> Build Here.
        </h2>

        <p
          className="sub-heading"
        >
          We invest more than 5% of revenue into R&D — which means we invest
          in the people who run those programmes. Growth at UCAL is structured,
          not accidental.
        </p>

        {/* FEATURES */}
        <div className={styles.featureList}>
          {features.map((item, index) => (
            <div
              key={index}
              className={styles.featureItem}
            >
              {/* IMAGE ICON */}
              <div className={styles.featureIconWrap}>
                <img
                  src={item.icon}
                  alt="icon"
                  className={styles.featureIcon}
                />
              </div>

              {/* TEXT */}
              <div>
                <h4
                  className={styles.featureTitle}
                >
                  {item.title}
                </h4>

                <p
                  className={styles.featureDescription}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
