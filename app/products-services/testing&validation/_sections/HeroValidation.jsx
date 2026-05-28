import "./HeroValidation.css";

export default function HeroValidation() {
  return (
    <section className="hero-validation" style={{marginTop:"88px"}}>
      <div className="hero-overlay"></div>

      <div className="banner-content">
        <h1 className="banner-title">
          NABL Accredited. OEM
          <br />
          Trusted. Zero Compromise.
        </h1>

        <p className="sub-heading hero-description">
          UCAL’s KCAT Lab is a NABL-accredited testing and validation facility —
          built to support our own R&amp;D programmes and open for third-party
          testing engagements across the automotive and off-highway sectors.
        </p>

        <button className="custom-btn" >
          Request Testing Services
        </button>
      </div>
    </section>
  );
}