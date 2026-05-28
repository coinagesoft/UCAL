import CommitmentSection from "./components/CommitmentSection"
import Sushero from "./components/Sushero"
import CleanMobility from "./components/CleanMobility"
import CommunitySection from "./components/CommunitySection"
import ResponsibleManufacturing from "./components/ResponsibleManufacturing"
import styles from "./SustainabilityPage.module.css"

export default function Sustainability() {
    return (
        <div className={styles.sustainabilityPage}>
            <Sushero />
            <CommitmentSection />
            <CleanMobility />
            <CommunitySection/>
            <ResponsibleManufacturing />    
        </div>
    )
}   
