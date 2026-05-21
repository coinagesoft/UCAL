import styles from "./StatsSection.module.css";
import StatCard from "./StatCard";

const statsData = [
    {
        icon: "/media/aa1.png",
        value: "4,000+",
        label: "EMPLOYEES",
    },

    {
        icon: "/media/aa2.png",
        value: "8",
        label: "MANUFACTURING FACILITIES",
    },

    {
        icon: "/media/aa3.png",
        value: "35+",
        label: "OEM CUSTOMERS",
    },

    {
        icon: "/media/aa4.png",
        value: "70M+",
        label: "CARBURETTORS SUPPLIED",
    },

    {
        icon: "/media/aa5.png",
        value: "10M+",
        label: "PUMPS SUPPLIED",
    },

    {
        icon: "/media/aa6.png",
        value: "150+",
        label: "GLOBAL DISTRIBUTION POINTS",
    },

    {
        icon: "/media/aa7.png",
        value: ">5%",
        label: "REVENUE INVESTED IN R&D",
    },

    {
        icon: "/media/aa8.png",
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