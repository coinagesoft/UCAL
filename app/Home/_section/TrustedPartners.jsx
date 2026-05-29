import styles from "./TrustedPartners.module.css";

const carInfo = [
  {
    image: "/home/volkswagen.webp",
    name: "Volkswagen",
  },
  {
    image: "/home/nissan.webp",
    name: "Nissan",
  },
  {
    image: "/home/ford.webp",
    name: "Ford",
  },
  {
    image: "/home/mini.webp",
    name: "Mini",
  },
  {
    image: "/home/datsun.webp",
    name: "Datsun",
  },
  {
    image: "/home/honda.webp",
    name: "Honda",
  },
  {
    image: "/home/lexus.webp",
    name: "Lexus",
  },
  {
    image: "/home/toyota.webp",
    name: "Toyota",
  },
  {
    image: "/home/jeep.webp",
    name: "Jeep",
  },
  {
    image: "/home/bmw.webp",
    name: "BMW",
  },
  {
    image: "/home/audi.webp",
    name: "Audi",
  },
  {
    image: "/home/mercedes.webp",
    name: "Mercedes",
  },
];

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
          {carInfo.map((item) => (
            <div className={styles.logoCard} key={item.name}>
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
