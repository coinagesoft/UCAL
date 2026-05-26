import styles from "./Certification.module.css"
import { certData } from "@/constants/certifications"
import CertificationCard from "./CertificationCard"

export default function Certification() {
    return (
        <div className={styles.section}>

            <div className={styles.wrapper}>
                <p className="gHeading">/ Certifications</p>

                <h2 className="main-heading">
                    Proof of Standards. Publicly Available.
                </h2>

                <p
                    className="sub-heading"
                    style={{ textAlign: "center" }}
                >
                    Our quality certifications and compliance documents are available for download —
                    for supplier <br/> qualification audits, RFQ processes, and OEM onboarding.
                </p>
            </div>

            <div className={styles.cardsContainer}>
                {certData.map((item, index) => (
                    <CertificationCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>

        </div>
    )
}