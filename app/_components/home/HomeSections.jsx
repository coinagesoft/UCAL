"use client";

import HeroSection from "@/app/_components/home/HeroSection";
import WhyUCAL from "@/app/_components/home/WhyUCAL";
import ProductsSection from "@/app/_components/home/ProductsSection";
import ServicesSection from "@/app/_components/home/ServicesSection";
import CapabilitiesSection from "@/app/_components/home/CapabilitiesSection";
import Global from "@/app/_components/home/Global";
import TrustedPartners from "@/app/_components/home/TrustedPartners";
import TestimonialsSection from "@/app/_components/home/TestimonialsSection";
import GlobalPresence from "@/app/_components/home/GlobalPresence";
import FAQSection from "@/app/_components/home/FAQSection";
import NewsMedia from "@/app/_components/home/NewsMedia";
import CTA from "@/app/_components/home/CTA";

export default function HomeSections() {
  return (
    <>
      <HeroSection />
      <WhyUCAL />
      <ProductsSection />
      <ServicesSection />
      <CapabilitiesSection />
      <Global />
      <TrustedPartners />
      <TestimonialsSection />
      <GlobalPresence />
      <FAQSection />
      <NewsMedia />
      <CTA />
    </>
  );
}
