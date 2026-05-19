import Hero from "./_sections/Hero";
import AccountabilitySection from "./_sections/AccountabilitySection";  
import CapabilitySection from "./_sections/CapabilitySection";
import ProcessFlowSection from "./_sections/ProcessFlowSection";
import CertificationSection from "./_sections/CertificationSection";


export default function ManufacturingServices() {
    return (
        <div style={{ marginTop: "00px" }}>
            <Hero />
            <AccountabilitySection />
            <CapabilitySection />       
            <ProcessFlowSection />
            <CertificationSection />
        </div>
    ) 
}   