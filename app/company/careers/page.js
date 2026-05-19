import CultureSection from "./_components/CultureSection";
import HeroCareers from "./_components/HeroCareers";
import JobsSection from "./_components/JobsSection";
import LifeSection from "./_components/LifeSection";
import TestimonialsSection from "./_components/TestimonialSection";

export default function CareersPage() {
  return (
    <>
      <HeroCareers />
      <CultureSection />
      <LifeSection/> 
      <TestimonialsSection/> 
      <JobsSection/>
    </>
  );
}