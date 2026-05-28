import Hero from "./_sections/Hero";
import AccountabilitySection from "./_sections/AccountabilitySection";  
import CapabilitySection from "./_sections/CapabilitySection";
import ProcessFlowSection from "./_sections/ProcessFlowSection";
import CertificationSection from "./_sections/CertificationSection";
import styles from "./ManufacturingServicesPage.module.css";


export default function ManufacturingServices() {
    return (
        <div className={styles.manufacturingServicesPage}>
            <Hero />
            <AccountabilitySection />
            <CapabilitySection />       
            <ProcessFlowSection />
            <CertificationSection />
        </div>
    ) 
}   
