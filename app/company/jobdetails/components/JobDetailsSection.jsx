"use client";

export default function JobDetailsSection() {
  return (
    <section
      style={{
        padding: "0px clamp(20px, 6vw, 80px) 120px",
        background: "#f8f9fb",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          background: "#ffffff",
          border: "1px solid #E4E4ED",
          // borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: "28px 40px",
            borderBottom: "1px solid #E4E4ED",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img
              src="/media/logo.png"
              alt="logo"
              style={{ width: "52px", height: "52px" }}
            />

            <div>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "6px",
                }}
              >
                Data Privacy Support
              </h2>

              <p style={{ fontSize: "13px", color: "#6b7280" }}>
                UCAL • Cybersecurity • Programming & Tech • Chennai
              </p>
            </div>
          </div>

          <button className="custom-btn">Apply Now</button>
        </div>

        {/* ABOUT JOB */}
        <div style={sectionStyle}>
          <h3 style={title}>About The Job</h3>

          <div style={infoGrid}>
            {[
              { label: "Posted on", value: "Dec 24, 2025" },
              { label: "Job type", value: "Remote" },
              { label: "Experience level", value: "5 Year" },
              { label: "Salary", value: "$60 - $80 / day" },
            ].map((item, i) => (
              <div key={i}>
                <p style={label}>{item.label}</p>
                <p style={value}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FULL DESCRIPTION */}
        <div style={sectionStyle}>
          <h3 style={title}>Full Job Description</h3>

          <p style={para}>
            Note: By applying to this position you will have an opportunity to
            share your preferred working location from <br/> the following: Seattle,
            WA, USA; New York, NY, USA.
          </p>

          {/* MINIMUM */}
          <h4 style={subHeading}>Minimum qualifications:</h4>
          <ul style={listStyle}>
            <li>Bachelor’s degree or equivalent practical experience.</li>
            <li>
              1 year of experience working with designers, researchers,
              engineers, content strategists, and product managers through <br/>the
              design process (e.g., creating user flows, wireframes, and
              building user interface mockups/prototypes).
            </li>
            <li>
              Experience with industry standard design tools (e.g., Photoshop,
              Illustrator, Sketch, InVision, Figma, Principle, etc.).
            </li>
            <li>
              Portfolio highlighting design principles for web or mobile
              platforms.
            </li>
          </ul>

          {/* PREFERRED */}
          <h4 style={subHeading}>Preferred qualifications:</h4>
          <ul style={listStyle}>
            <li>Certification in Grow with Google, UX Design, or similar.</li>
            <li>
              Experience designing across multiple platforms (e.g., Android,
              iOS, and Web).
            </li>
            <li>
              Excellent leadership, communication and collaboration skills.
            </li>
          </ul>

          {/* RESPONSIBILITIES */}
          <h4 style={subHeading}>Responsibilities</h4>
          <ul style={listStyle}>
            <li>
              Help to define the user model and user interface for Google
              products and features.
            </li>
            <li>
              Develop detailed storyboards, mockups, and prototypes to
              communicate interaction and design ideas.
            </li>
            <li>
              Collaborate with Product Managers, Engineers, Researchers,
              Writers, and cross-functional stakeholders.
            </li>
            <li>
              Evaluate usability of new and existing products and suggest
              improvements.
            </li>
          </ul>

          {/* WHAT YOU’LL LOVE */}
          <h4 style={subHeading}>What You’ll Love About This Role</h4>
          <ul style={listStyle}>
            <li>
              Remote Flexibility: Work from anywhere with flexible hours.
            </li>
            <li>
              Creative Freedom: Experiment and bring bold ideas to life.
            </li>
            <li>
              Cross-functional Collaboration with talented teams.
            </li>
            <li>
              Impactful Work: Influence real users daily.
            </li>
            <li>
              Continuous Learning with conferences and training.
            </li>
            <li>
              Top Tools & Tech (Figma, FigJam, Lottie, etc.).
            </li>
            <li>
              Inclusive Culture with transparency and respect.
            </li>
            <li>
              Competitive Compensation and work-life balance.
            </li>
          </ul>
        </div>

        {/* TAGS */}
        <div style={sectionStyle}>
          <h3 style={title}>Qualifications</h3>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["Accounting", "Business", "Tech", "Web Design"].map(
              (tag, i) => (
                <span key={i} style={tagStyle}>
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* IMAGE */}
        <div style={sectionStyle}>
          <h3 style={title}>Team & Office Life</h3>

          <img
            src="/media/img31.png"
            alt="Team"
            style={{
              width: "100%",
              height: "260px",
              marginRight:"30px",
              objectFit: "cover",
              // borderRadius: "8px",
            }}
          />
        </div>
      </div>

      {/* BOTTOM BUTTON */}
      <div style={{ maxWidth: "1280px", margin: "20px auto 0" }}>
        <button className="custom-btn">Apply Now</button>
      </div>
    </section>
  );
}

/* STYLES */
const sectionStyle = {
  padding: "28px 40px",
  borderBottom: "1px solid #E4E4ED",
};

const title = {
  marginBottom: "18px",
  fontSize: "20px",
  fontWeight: "600",
};

const label = {
  fontSize: "14px",
  color: "#9ca3af",
};

const value = {
  fontSize: "14px",
  fontWeight: "500",
  marginTop: "4px",
};

const para = {
  color: "#6b7280",
  marginBottom: "18px",
  fontSize: "14px",
  lineHeight: "1.6",
};

const infoGrid = {
  display: "flex",
  gap: "60px",
  flexWrap: "wrap",
};

const subHeading = {
  marginTop: "18px",
  marginBottom: "8px",
  fontSize: "14px",
  fontWeight: "600",
};

const listStyle = {
  paddingLeft: "18px",
  lineHeight: "1.8",
  fontSize: "14px",
  color: "#4b5563",
  marginBottom: "12px",
};

const tagStyle = {
  background: "#eef2ff",
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "12px",
  color: "#4f46e5",
  fontWeight: "500",
};

