import CommitmentSection from "./components/CommitmentSection"
import Sushero from "./components/Sushero"
import CleanMobility from "./components/CleanMobility"
import CommunitySection from "./components/CommunitySection"
import ResponsibleManufacturing from "./components/ResponsibleManufacturing"

export default function Sustainability() {
    return (
        <div style={{ marginTop: "100px" }}>
            <Sushero />
            <CommitmentSection />
            <CleanMobility />
            <CommunitySection/>
            <ResponsibleManufacturing />    
        </div>
    )
}   