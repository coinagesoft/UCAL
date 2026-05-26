import styles from "./CertificationCard.module.css"

export default function CertificationCard({
    img,
    title,
    description
}) {
    return (
        <div className={styles.card}>

            <div className={styles.left}>
                <img
                    src={img}
                    alt="certificate"
                    className={styles.logo}
                />
            </div>

            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <button className={styles.downloadBtn}>
                <img
                    src="/media/down1.png"
                    alt="download"
                />
            </button>

        </div>
    )
}