import AboutHero from "./_sections/AboutHero";
import LeadershipSection from "./_sections/LeadershipSection";
import LegacySection from "./_sections/LegacySection";  
import Manufacturing from "./_sections/Manufacturing";
import StatsSection from "./_sections/StatsSection";
import TimelineSection from "./_sections/TimelineSection";
import VisionMission from "./_sections/VisionMission";
import styles from "./AboutUsPage.module.css";


export default function AboutUs() {
    return (
        <main className={styles.aboutPage}>
            <AboutHero />
            <LegacySection />
            <VisionMission />
            <TimelineSection/>
            <LeadershipSection/>
            <Manufacturing/>
            <StatsSection/>
        </main>
    )
}    
