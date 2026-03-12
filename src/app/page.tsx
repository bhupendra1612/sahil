import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { HeroSection } from "@/components/home/hero-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";
import { FAQSection } from "@/components/home/faq-section";
import { ContactSection } from "@/components/home/contact-section";
import { HowWeWork } from "@/components/home/how-we-work";

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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b pb-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Featured Machinery</h2>
              <p className="mt-2 text-muted-foreground">Discover our best-selling industrial packaging solutions.</p>
            </div>
            <Link href="/products" className="group mt-4 md:mt-0 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
              View All Machinery
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
                {/* Product Image Placeholder */}
                {/* USER INSTRUCTION: Replace this div with a Next Image pointing to /public/products/machine-[id].jpg */}
                <div className="aspect-[4/3] w-full bg-muted flex items-center justify-center relative overflow-hidden">
                  <Package className="h-12 w-12 text-muted-foreground/40" />
                  <span className="absolute bottom-2 right-2 text-xs font-mono text-muted-foreground bg-background/80 px-2 py-1 rounded">public/products/machine-{item}.jpg</span>
                  <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/5" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Automatic Pouch Packaging Machine {item}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">
                    High-speed volumetric filling capable of packing up to 80 units per minute with high accuracy.
                  </p>
                  <div className="mt-6 border-t pt-4">
                    <Link
                      href={`/products/machine-${item}`}
                      className="inline-flex w-full items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
                    >
                      View Specifications
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
