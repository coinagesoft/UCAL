import styles from "./StatsSection.module.css";
import StatCard from "./StatCard";

const statsData = [
    {
        icon: "/about/aa1.webp",
        value: "4,000+",
        label: "EMPLOYEES",
    },

    {
        icon: "/about/aa2.webp",
        value: "8",
        label: "MANUFACTURING FACILITIES",
    },

    {
        icon: "/about/aa3.webp",
        value: "35+",
        label: "OEM CUSTOMERS",
    },

    {
        icon: "/about/aa4.webp",
        value: "70M+",
        label: "CARBURETTORS SUPPLIED",
    },

    {
        icon: "/about/aa5.webp",
        value: "10M+",
        label: "PUMPS SUPPLIED",
    },

    {
        icon: "/about/aa6.webp",
        value: "150+",
        label: "GLOBAL DISTRIBUTION POINTS",
    },

    {
        icon: "/about/aa7.webp",
        value: ">5%",
        label: "REVENUE INVESTED IN R&D",
    },

    {
        icon: "/about/aa8.webp",
        value: "2",
        label: "DEDICATED R&D CENTRES",
    },
];

export default function StatsSection() {
    return (
        <section className={styles.section}>
            <div className="container-fluid">
                <div className={styles.grid}>
                    {statsData.map((item, index) => (
                        <StatCard
                            key={index}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}