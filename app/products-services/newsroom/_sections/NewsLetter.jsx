import styles from "./NewsLetter.module.css"
import { newsletterData } from "@/constants/newsLetter"

export default function NewsLetter() {
    return (
        <div className={styles.container}>
            <div className="wrapper">
                <p className="gHeading">/  Newsletter</p>
                <h2 className="main-heading">Stayed Informed. Stay Connected</h2>
                <p className="sub-heading" style={{ textAlign: "center" }}>UCAL&apos;s periodic newsletter covers product launches, technology updates, events, and <br /> engineering insights â€” curated for the community we serve.</p>
            </div>
            <div className={styles.leftRight}>
                <div className={styles.left}>
                    <div className={styles.grid}>
                        {newsletterData.map((item) => (
                            <div className={styles.card} key={item.id}>
                                <div>
                                    {item.id}
                                </div>
                                <div className={styles.newstext}>
                                    <p className={styles.quarter}>{item.quarter}</p>
                                    <h3 className={styles.title}>{item.title}</h3>
                                    <p className={styles.description}>{item.tags}</p>
                                </div>
                                <div>
                                    <img src="/media/arrow.png" alt="" className={styles.arrowIcon} />
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
                <div className={styles.right}>

                    <div className={styles.newsContent}>

                        <h2>
                            Get UCAL Updates in Your Inbox
                        </h2>

                        <p className={styles.newsDesc}>
                            Join engineers, OEM procurement teams,
                            and mobility professionals who follow
                            UCAL&apos;s work.
                        </p>

                        <form className={styles.newsForm}>

                            <div className={styles.inputGroup}>
                                <label>Full Name *</label>

                                <input
                                    type="text"
                                    placeholder="e.g Jane Doe"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Mail Id</label>

                                <input
                                    type="email"
                                    placeholder="e.g Jack@gmail.com"
                                />
                            </div>

                            <button type="submit" className="custom-btn">
                                Subscribe to Newsletter
                            </button>

                        </form>

                        <p className={styles.bottomText}>
                            Periodic updates only. No spam.
                            Unsubscribe anytime.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )

}
