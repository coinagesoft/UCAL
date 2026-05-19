import CorporateContacts from "./_sections/CorporateContacts";
import FinancialsGrid from "./_sections/FinancialGrid";
import HeroInverstors from "./_sections/HeroInvestors";
import ShareholdersHero from "./_sections/ShareHoldersHero";
export default function Investors() {
    return (
        <div style={{ marginTop: "100px" }}>
            <HeroInverstors />
            <FinancialsGrid />
            <ShareholdersHero />   
            <CorporateContacts />    
        </div>
    ) 
}  