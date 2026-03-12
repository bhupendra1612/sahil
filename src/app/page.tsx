import { HeroSection } from "@/components/home/hero-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";
import { FAQSection } from "@/components/home/faq-section";
import { ContactSection } from "@/components/home/contact-section";
import { HowWeWork } from "@/components/home/how-we-work";
import { FeaturedMachinery } from "@/components/home/featured-machinery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 
        ========================================
        HERO SECTION
        ========================================
      */}
      <HeroSection />

      {/* 
        ========================================
        WHY CHOOSE US SECTION
        ========================================
      */}
      <WhyChooseUs />

      {/* 
        ========================================
        HOW WE WORK SECTION
        ========================================
      */}
      <HowWeWork />

      {/* 
        ========================================
        FEATURED MACHINERY (PRODUCT GALLERY)
        ========================================
      */}
      <FeaturedMachinery />

      {/* 
        ========================================
        TESTIMONIALS SECTION
        ========================================
      */}
      <Testimonials />

      {/* 
        ========================================
        FAQ SECTION
        ========================================
      */}
      <FAQSection />

      {/* 
        ========================================
        CONTACT SECTION
        ========================================
      */}
      <ContactSection />
    </div>
  );
}
