import styles from "./JobsSection.module.css";

export default function JobsSection() {
  const jobs = [
    {
      title: "Strategy Consultant",
      desc: "Join our core consulting team to lead strategic planning, market analysis, and growth initiatives for corporate clients. Ideal for sharp thinkers with 3â€“5 years of experience in strategy or management consulting.",
    },
    {
      title: "Operations Analyst",
      desc: "Support our clients in optimizing systems and processes. You'll work on performance mapping, process design, and KPI tracking. Perfect for analytical minds with a passion for efficiency.",
    },
    {
      title: "Organizational Change Manager",
      desc: "Help clients navigate transformation with empathy and structure. This role focuses on change strategy, internal alignment, and communication planning. Ideal for experienced professionals in HR transformation or leadership consulting.",
    },
    {
      title: "Digital Strategy Consultant",
      desc: "Work with clients to integrate digital tools into their business model. From automation to customer journey mapping, you'll guide transformation across platforms. Strong digital acumen and consulting experience preferred.",
    },
    {
      title: "Client Engagement Specialist",
      desc: "Be the connection between clients and our internal team â€” ensuring alignment, communication, and project momentum. Excellent for those with project coordination and client service experience.",
    },
    {
      title: "Research & Insights Associate",
      desc: "Support strategy projects with competitive research, market trends, and insight reporting. Great entry-level role for recent grads in business, data, or economics with strong analytical skills.",
    },
  ];

  return (
    <section className={styles.jobsSection}>
      {/* HEADER */}
      <div className={styles.jobsHeader}>
        <p className="gHeading">/ Open Roles</p>

        <h2
         className="main-heading"
        >
          Join the UCAL Team
        </h2>

        <p className={`sub-heading ${styles.jobsSubHeading}`}>
          We keep our culture collaborative, respectful, and transparent. We
          work hard, stay <br /> curious, and celebrate progress â€” together.
        </p>
      </div>

      {/* JOB LIST */}
      {jobs.map((job, index) => (
        <div key={index}>
          <div className={styles.jobRow}>
            {/* LEFT CONTENT */}
            <div className={styles.jobContent}>
              {/* TITLE */}
              <h3 className={styles.jobTitle}>
                {job.title}
              </h3>

              {/* TAGS */}
              <div className={styles.tagList}>
                {["Remote", "Chennai", "New York"].map((tag, i) => (
                  <span
                    key={i}
                    className={styles.jobTag}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* DESCRIPTION */}
              <p className={styles.jobDescription}>
                {job.desc}
              </p>
            </div>

            {/* BUTTON */}
            <button
              className={`custom-btn ${styles.applyButton}`}
            >
              Apply For This Role
            </button>
          </div>

          {/* DIVIDER */}
          {index !== jobs.length - 1 && (
            <div className={styles.jobDivider} />
          )}
        </div>
      ))}
    </section>
  );
}
