"use client";

import "./JobDetailsSection.css";

export default function JobDetailsSection() {
  const teamImages = [1, 2, 3, 4].map((item) => ({
    src: `/jobdetails/job${item}.webp`,
    alt: `Team and office life ${item}`,
  }));

  return (
    <section className="jobDetailsSection">
      <div className="jobCard">

        {/* HEADER */}
        <div className="jobHeader">
          <div className="jobHeaderLeft">
            <img
              src="/media/logo.png"
              alt="logo"
              className="jobLogo"
            />

            <div>
              <h2 className="jobTitle">
                Graphic Designer
              </h2>

              <p className="jobMeta">
                UCAL • Cybersecurity • Programming & Tech • Chennai
              </p>
            </div>
          </div>

          <button className="custom-btn">
            Apply Now
          </button>
        </div>

        {/* ABOUT */}
        <div className="jobSection">
          <h3 className="sectionTitle">
            About The Job
          </h3>

          <div className="infoGrid">
            {[
              {
                label: "Posted on",
                value: "Dec 24, 2025",
              },
              {
                label: "Job type",
                value: "Remote",
              },
              {
                label: "Experience level",
                value: "5 Year",
              },
              {
                label: "Salary",
                value: "$60 - $80 / day",
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="infoLabel">
                  {item.label}
                </p>

                <p className="infoValue">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="jobSection">
          <h3 className="sectionTitle">
            Full Job Description
          </h3>

          <p className="jobPara">
            Note: By applying to this position you will
            have an opportunity to share your preferred
            working location from the following:
            Seattle, WA, USA; New York, NY, USA.
          </p>

          <h4 className="subHeading">
            Minimum qualifications:
          </h4>

          <ul className="jobList">
            <li>
              Bachelor’s degree or equivalent practical
              experience.
            </li>

            <li>
              1 year of experience working with
              designers, researchers, engineers,
              content strategists, and product
              managers through the design process.
            </li>

            <li>
              Experience with industry-standard
              design tools such as Photoshop,
              Illustrator, Sketch, InVision,
              Figma, and Principle.
            </li>

            <li>
              Portfolio highlighting design principles
              for web or mobile platforms.
            </li>
          </ul>

          <h4 className="subHeading">
            Preferred qualifications:
          </h4>

          <ul className="jobList">
            <li>
              Certification in Grow with Google,
              UX Design, or similar.
            </li>

            <li>
              Experience designing across Android,
              iOS, and Web platforms.
            </li>

            <li>
              Excellent leadership, communication,
              and collaboration skills.
            </li>
          </ul>

          <h4 className="subHeading">
            Responsibilities
          </h4>

          <ul className="jobList">
            <li>
              Help define the user model and user
              interface for products and features.
            </li>

            <li>
              Develop detailed storyboards, mockups,
              and prototypes to communicate design ideas.
            </li>

            <li>
              Collaborate with Product Managers,
              Engineers, Researchers, Writers,
              and stakeholders.
            </li>

            <li>
              Evaluate usability of new and existing
              products and suggest improvements.
            </li>
          </ul>

          <h4 className="subHeading">
            What You’ll Love About This Role
          </h4>

          <ul className="jobList">
            <li>
              Remote Flexibility with flexible working hours.
            </li>

            <li>
              Creative Freedom to experiment and innovate.
            </li>

            <li>
              Cross-functional collaboration with talented teams.
            </li>

            <li>
              Impactful work used by thousands of users daily.
            </li>

            <li>
              Continuous learning and conference opportunities.
            </li>

            <li>
              Modern design tools and technologies.
            </li>

            <li>
              Inclusive and supportive culture.
            </li>

            <li>
              Competitive compensation and work-life balance.
            </li>
          </ul>

          <p className="jobPara">
            Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.
          </p>
        </div>

        {/* TAGS */}
        <div className="jobSection">
          <h3 className="sectionTitle">
            Qualifications
          </h3>

          <div className="tagsWrapper">
            {[
              "Accounting",
              "Business",
              "Tech",
              "Web Design",
            ].map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="jobSection">
          <h3 className="sectionTitle">
            Team & Office Life
          </h3>

          <div className="teamImageGrid">
            {teamImages.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="teamImage"
              />
            ))}
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="bottomBtn">
        <button className="custom-btn">
          Apply Now
        </button>
      </div>
    </section>
  );
}
