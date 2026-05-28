import CorporateContacts from "./_sections/CorporateContacts";
import FinancialsGrid from "./_sections/FinancialGrid";
import HeroInverstors from "./_sections/HeroInvestors";
import ShareholdersHero from "./_sections/ShareHoldersHero";
import styles from "./InvestorsPage.module.css";
export default function Investors() {
    return (
        <div className={styles.investorsPage}>
            <HeroInverstors />
            <FinancialsGrid />
            <ShareholdersHero />   
            <CorporateContacts />    
        </div>
    ) 
}  
