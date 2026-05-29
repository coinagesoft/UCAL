import styles from "./TrustedPartners.module.css";

const carInfo = [
  {
    "image": "/home/volkswagen.webp"
  },
  {
    "image": "/home/nissan.webp"
  },
  {
    "image": "/home/ford.webp"
  },
  {
    "image": "/home/mini.webp"
  },
  {
    "image": "/home/datsun.webp"
  },
  {
    "image": "/home/honda.webp"
  },
  {
    "image": "/home/lexus.webp"
  },
  {
    "image": "/home/toyota.webp"
  },
  {
    "image": "/home/jeep.webp"
  },
  {
    "image": "/home/bmw.webp"
  },
  {
    "image": "/home/audi.webp"
  },
  {
    "image": "/home/mercedes.webp"
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
