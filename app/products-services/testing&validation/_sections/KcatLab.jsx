import "./KcatLab.css";

export default function KcatLab() {
  return (
    <section className="kcat-section">
      <div className="kcat-wrapper">

        <div className="kcat-image hero-container">
          <img src="/media/t1.svg" alt="KCAT Lab" className="hero-img" />
        </div>

        <div className="kcat-content">
          <div className="kcat-top">
            <p className="gHeading">/ The KCAT Lab</p>

            <h2 className="main-heading kcat-title">
              One Lab. Five Testing
              <br />
              Disciplines.
            </h2>

            <p className="para kcat-description">
              The lab supports UCAL&apos;s internal product development and
              validation programmes — ensuring every component that carries our
              name has survived conditions that replicate and exceed what it
              will face in the real world. Beyond internal use, the KCAT Lab is
              available as an independent testing service for automotive
              component manufacturers, OEMs, and engineering teams requiring
              accredited test data.
            </p>
          </div>

          <div className="kcat-info-box">
            <div className="info-item">
              <span className="info-label">NABL CERTIFICATE</span>
              <p className="info-value">TC-15475</p>
            </div>

            <div className="info-item">
              <span className="info-label">STANDARD</span>
              <p className="info-value">ISO/IEC 17025</p>
            </div>

            <div className="info-item">
              <span className="info-label">EMAIL</span>
              <p className="info-value">KAMALAKKANNAND@UCAL.COM</p>
            </div>

            <div className="info-item">
              <span className="info-label">PHONE</span>
              <p className="info-value">+91 97908 41026</p>
            </div>
          </div>    
        </div>

      </div>
    </section>
  );
}