"use client";
import "./Certification.css"
const certData = [
  {
    "image": "/media/cert1.svg",
    "title": "IATF 16949:2016",
    "subtitle": "Automotive Quality Management"
  },
  {
    "image": "/media/cert2.svg",
    "title": "ISO 9001:2015",
    "subtitle": "Quality Management System"
  },
  {
    "image": "/media/cert3.svg",
    "title": "ISO 14001:2015",
    "subtitle": "Environmental Management"
  },
  {
    "image": "/media/cert4.svg",
    "title": "AS 9100:2016",
    "subtitle": "Aerospace Quality (UCAL Systems Inc.)"
  },
  {
    "image": "/media/cert5.svg",
    "title": "NABL Accreditation TC-15475",
    "subtitle": "Testing Laboratory (ISO/IEC 17025)"
  }
]

export default function CertificationSection() {
  return (
    <section className="certificationSection">
      {/* LABEL */}
      <p className="gHeading">
        / Certifications
      </p>

      {/* HEADING */}
      <h2 className="certificationTitle">
        Certified Across Every Standard <br />
        That Matters to Your Project.
      </h2>

      {/* SUBTEXT */}
      <p className="certificationDescription">
        Our quality certifications are available for download for supplier
        qualification and RFQ processes. All held current and re-issued on
        schedule.
      </p>

      {/* FULL IMAGE (NO SPLIT) */}
      <div className="grid">
        {certData.map((item , index) =>(
          <div key={index}>
            <img src={item.image} alt="certimages" className="certImg" />
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ) )}
      </div>
    </section>
  );
}
