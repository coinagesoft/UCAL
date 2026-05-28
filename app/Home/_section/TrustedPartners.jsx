import styles from "./TrustedPartners.module.css";

const carInfo = [
  {
    "image": "/media/volkswagen.svg"
  },
  {
    "image": "/media/nissan.svg"
  },
  {
    "image": "/media/ford.svg"
  },
  {
    "image": "/media/mini.svg"
  },
  {
    "image": "/media/datsun.svg"
  },
  {
    "image": "/media/honda.svg"
  },
  {
    "image": "/media/lexus.svg"
  },
  {
    "image": "/media/toyota.svg"
  },
  {
    "image": "/media/jeep.svg"
  },
  {
    "image": "/media/bmw.svg"
  },
  {
    "image": "/media/audi.svg"
  },
  {
    "image": "/media/mercedes.svg"
  }
]

export default function TrustedPartners() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`wrapper ${styles.header}`}>
          <h4 className="gHeading">/ Trusted Partners</h4>

          <h1 className="main-heading">Trusted by the World&apos;s Leading OEMs.</h1>
          <p className="sub-heading">
            It is a long established fact that a reader will be distracted by the
            readable <br />content of a page when looking at its layout.
          </p>
        </div>

        <div className={styles.grid}>
          {carInfo.map((item, index) => (
            <div key={index} >
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
