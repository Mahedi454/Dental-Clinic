import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { TreatmentProcess } from "@/components/sections/treatment-process";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { InsuranceSection } from "@/components/sections/insurance-section";
import { LocationSection } from "@/components/sections/location-section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "BrightSmile Dental Clinic | Expert Dental Care for Your Smile",
  description:
    "Modern, compassionate dental care for healthy smiles and confident lives. Expert dentists, advanced technology, and patient-centered care in a comfortable environment.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <DoctorsSection />
      <TreatmentProcess />
      <BeforeAfterSection />
      <TestimonialsSection />
      <InsuranceSection />
      <LocationSection />
      <CTASection />
    </>
  );
}
