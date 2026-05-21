import AboutHero from "./_sections/AboutHero";
import LeadershipSection from "./_sections/LeadershipSection";
import LegacySection from "./_sections/LegacySection";  
import TimelineSection from "./_sections/TimelineSection";
import VisionMission from "./_sections/VisionMission";


export default function AboutUs() {
    return (
        <main style={{ marginTop: "80px"   }}>
            <AboutHero />
            <LegacySection />
            <VisionMission />
            <TimelineSection/>
            <LeadershipSection/>
        </main>
    )
}    
