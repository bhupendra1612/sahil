import Link from "next/link";
import { ArrowRight, Package, Handshake, ShieldCheck, Truck, Building2, HeartHandshake } from "lucide-react";
import { HeroSection } from "@/components/home/hero-section";

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
        FEATURES SECTION
        ========================================
      */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Choose Sahil Packaging?</h2>
            <p className="mt-4 text-lg text-muted-foreground">We are one of the fastest growing companies acknowledged for manufacturing a premium range of quality products in accordance with industry standards.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: HeartHandshake, title: 'Customer Friendly', desc: 'Customer friendly approach with dedicated support.' },
              { icon: Building2, title: 'Sound Infrastructure', desc: 'State-of-the-art manufacturing facility.' },
              { icon: Handshake, title: 'Fair Dealings', desc: 'Transparent and fair business practices.' },
              { icon: Truck, title: 'Timely Delivery', desc: 'On-time delivery with reliable logistics.' },
              { icon: ShieldCheck, title: 'Quality Assured', desc: 'ISO 9001:2015 certified quality processes.' },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        CTA / INQUIRY SECTION
        ========================================
      */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto bg-background/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-primary-foreground/10 shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Upgrade Your Packaging Line?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Get in touch with our engineering team for a customized machine quotation based on your exact production capacity requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-background px-8 text-sm font-bold text-primary shadow transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
              >
                Request Custom Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md border border-primary-foreground/20 bg-transparent px-8 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
              >
                Browse Machinery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
