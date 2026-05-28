import HeroValidation from "./_sections/HeroValidation"
import KcatLab from "./_sections/KcatLab" 
import EnvironmentalTesting from "./_sections/EnvironmentalTesting"
import VibrationTesting from "./_sections/VibrationTesting"
import TestingFacility from "./_sections/TestingFacility"

export default function Validation(){
    return (
        <>
            <HeroValidation/>
            <KcatLab/>
            <EnvironmentalTesting/>
            <VibrationTesting/>
            <TestingFacility/>
        </>
    )
}   