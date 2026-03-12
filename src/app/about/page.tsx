import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Briefcase,
  CheckCircle2,
  Factory,
  Globe2,
  Handshake,
  HeartHandshake,
  Quote,
  ShieldCheck,
  Target,
  Eye,
  Rocket,
  Users2,
  ArrowRight,
  Building2,
  Truck,
  Sparkles,
} from "lucide-react";

/* ─── SEO METADATA ─── */
export const metadata: Metadata = {
  title: "About Us | Pouch Packing Machine Manufacturer in Faridabad, Delhi NCR",
  description:
    "Sahil Packaging Industries is a top pouch packing machine manufacturer in Faridabad, Delhi NCR, offering reliable, high-quality, and customized packing solutions since 2005. ISO 9001:2015 certified.",
  keywords: [
    "about sahil packaging industries",
    "pouch packing machine manufacturer faridabad",
    "packaging machine company delhi ncr",
    "ISO certified packaging machinery",
    "industrial packaging manufacturer india",
    "pouch packing machine supplier",
  ],
  openGraph: {
    title: "About Sahil Packaging Industries | ISO 9001:2015 Certified Manufacturer",
    description:
      "Since 2005, Sahil Packaging Industries has been manufacturing high-quality pouch packing machines. 5500+ machines delivered. 150+ global clients.",
    type: "website",
    images: ["/images/about/banner.jpg"],
  },
};

/* ─── DATA ─── */
const STATS = [
  { label: "Machines Delivered", value: "5,500+", icon: Factory },
  { label: "Years of Experience", value: "20+", icon: Briefcase },
  { label: "Global Clients", value: "150+", icon: Globe2 },
  { label: "Expert Staff", value: "40+", icon: Users2 },
  { label: "Client Satisfaction", value: "98%", icon: Award },
];

const QUALITY_PRINCIPLES = [
  "Delivering quality products that give value for money",
  "Products customized according to the specifications of the clients",
  "Procuring raw materials from authorized vendors only",
  "Strive to retain the quality at any cost",
];

const WHY_CHOOSE_US = [
  {
    icon: HeartHandshake,
    title: "Customer Friendly Approach",
    desc: "We prioritize building long-term relationships through transparent communication and dedicated support at every step.",
  },
  {
    icon: Building2,
    title: "Sound Infrastructure",
    desc: "State-of-the-art manufacturing facility equipped with modern tools and technology for precision engineering.",
  },
  {
    icon: Handshake,
    title: "Fair Business Dealings",
    desc: "Transparent pricing, honest communication, and ethical practices form the foundation of our business.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    desc: "We understand the value of time. Our streamlined processes ensure on-time delivery of every order.",
  },
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015 Certified",
    desc: "Our quality management systems meet international standards, ensuring consistent product excellence.",
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    desc: "Every machine is fabricated using SS-304/316 grade materials and can be customized to exact specifications.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Sahil Packaging completely transformed our production line's efficiency. The collar type machine runs continuously with minimal downtime.",
    author: "Rakesh Sharma",
    role: "Operations Director",
    company: "Foods & Spices India",
  },
  {
    quote:
      "Their engineering team customized the pouch packing machine exactly to our laminate specifications. Excellent after-sales support.",
    author: "Anil Patel",
    role: "Plant Head",
    company: "Agro Pack Solutions",
  },
  {
    quote:
      "Robust build quality. We've been running the multi-head weigher for 3 years straight without needing major maintenance.",
    author: "Deepak Verma",
    role: "CEO",
    company: "Verma Snacks Pvt Ltd",
  },
];

/* ─── PAGE COMPONENT ─── */
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ════════════════════════════════════════
          HERO BANNER
         ════════════════════════════════════════ */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/about/banner.jpg"
          alt="Sahil Packaging Industries manufacturing facility with pouch packing machines"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="max-w-3xl">
              <div className="hero-fade-in inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-white/90 mb-6">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ISO 9001:2015 Certified Company
              </div>
              <h1 className="hero-fade-in-delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                About{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Sahil Packaging
                </span>{" "}
                Industries
              </h1>
              <p className="hero-fade-in-delay-2 mt-5 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
                Leading manufacturer of all types of pouch packing machines since 2005, delivering quality, innovation,
                and customer satisfaction from Faridabad to the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS BAR
         ════════════════════════════════════════ */}
      <section className="relative z-20 -mt-12">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-background px-4 py-4 shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-foreground leading-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          COMPANY OVERVIEW
         ════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <Factory className="h-4 w-4" />
                Established 2005
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
                Crafting Premium Packaging Machines for{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Two Decades
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Established in 2005 as a Sole Proprietor Firm at Faridabad (Haryana, India), Sahil Packaging Industries
                is a leading manufacturer of all types of pouch packing machines. Under the visionary leadership of{" "}
                <strong className="text-foreground">Mr. Parveen Kumar</strong>, the company has carved a niche in the
                packaging industry domain.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our products are acknowledged for their optimum strength, durability, easy handling, and rust
                resistance. All machinery is fabricated using high-quality{" "}
                <strong className="text-foreground">SS-304/316 grade stainless steel</strong> and can be customized as
                per customer requirements.
              </p>

              {/* Key Highlights */}
              <div className="pt-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "ISO 9001:2015 Certified",
                    "SS-304/316 Grade Materials",
                    "Custom OEM Solutions",
                    "Pan India Service Network",
                    "Post-Sales Support",
                    "Affordable Pricing",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Machine Image */}
            <div className="relative">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border">
                <Image
                  src="/images/about/machine.jpg"
                  alt="Sahil Packaging Industries - Automatic pouch packing machine manufactured in Faridabad"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Glassmorphism Card */}
              <div className="absolute -bottom-6 -left-4 md:-left-6 rounded-xl border border-white/20 bg-background/90 backdrop-blur-xl px-5 py-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Quality Assured</p>
                    <p className="text-xs text-muted-foreground">ISO 9001:2015</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 md:-right-6 rounded-xl border border-white/20 bg-background/90 backdrop-blur-xl px-5 py-4 shadow-xl animate-float"
                style={{ animationDelay: "3s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Factory className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">5,500+</p>
                    <p className="text-xs text-muted-foreground">Machines Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          VISION & MISSION
         ════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Vision & Mission
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Driving the packaging industry forward with quality machinery and strong client partnerships.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision */}
            <div className="group relative rounded-2xl border bg-background p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              <div className="h-14 w-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Sahil Packaging Industries was established with a vision to provide quality packing machines to various
                packaging industry domains. This has enabled us to provide customized services to clients with a
                thorough understanding of their business and to gain a strong foothold in the{" "}
                <strong className="text-foreground">global market</strong>.
              </p>
            </div>

            {/* Mission */}
            <div className="group relative rounded-2xl border bg-background p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-400" />
              <div className="h-14 w-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To enter into a successful partnership with quality-conscious clients that are focused on increasing
                their <strong className="text-foreground">profitability and productivity</strong> by using the
                products of our company. We aim to offer qualitative products at affordable prices to accelerate
                customer&apos;s product output and profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          QUALITY ASSURANCE
         ════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Partnership Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border">
                <Image
                  src="/images/about/partnership.jpg"
                  alt="Sahil Packaging Industries building strong business partnerships"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Quality Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <Award className="h-4 w-4" />
                Quality First
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Quality Assurance{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Principles
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Quality is the cornerstone of everything we manufacture. Every machine that leaves our facility
                undergoes rigorous quality checks to ensure it meets the highest industry standards.
              </p>

              <div className="space-y-4 pt-2">
                {QUALITY_PRINCIPLES.map((principle, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border bg-muted/50 p-4 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      {i + 1}
                    </div>
                    <p className="text-foreground font-medium leading-relaxed pt-0.5">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY CHOOSE US
         ════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Sahil Packaging Industries?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              One of the fastest growing companies in the packaging machinery domain, acknowledged for manufacturing a
              premium range of quality products.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-col rounded-2xl border bg-background p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-blue-500 transition-all duration-500 group-hover:w-full" />
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS
         ════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don&apos;t just take our word for it. Hear what industry leaders say about Sahil Packaging machinery.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className="group flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Quote className="h-10 w-10 text-primary/20 mb-6" />
                <p className="flex-1 text-foreground leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-8 border-t border-border/50 pt-6">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm font-medium text-primary mt-1">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA SECTION
         ════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

        <div className="container relative z-10 mx-auto px-4 sm:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Rocket className="h-12 w-12 text-primary-foreground/40 mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Partner With Us?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
              Get in touch with our engineering team to discuss your packaging requirements. We provide customized
              machine solutions for every industry at competitive prices.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-background px-8 text-sm font-bold text-primary shadow transition-colors hover:bg-muted"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-primary-foreground/20 bg-transparent px-8 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                View Our Machines
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STRUCTURED DATA (JSON-LD)
         ════════════════════════════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sahil Packaging Industries",
            url: "https://sahilpackagingindustries.com",
            logo: "https://sahilpackagingindustries.com/logo.png",
            foundingDate: "2005",
            founder: {
              "@type": "Person",
              name: "Mr. Parveen Kumar",
            },
            description:
              "Sahil Packaging Industries is a leading ISO 9001:2015 certified manufacturer of all types of pouch packing machines based in Faridabad, Haryana, India. Established in 2005.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "111, Rajeev Colony, Samaypur Road, Near Pawan Hospital, Sec.-56, Ballabgarh",
              addressLocality: "Faridabad",
              addressRegion: "Haryana",
              postalCode: "121004",
              addressCountry: "IN",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-9899309626",
                contactType: "sales",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
            ],
            sameAs: [
              "https://www.facebook.com/sahilpackagingindustries/",
              "https://www.instagram.com/sahilpackagingindustries",
              "https://www.youtube.com/@sahilpackagingindustries",
            ],
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              minValue: 40,
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            knowsAbout: [
              "Pouch Packing Machine",
              "FFS Machine",
              "Collar Type Packing Machine",
              "Fully Pneumatic Packing Machine",
              "Packaging Machinery",
            ],
          }),
        }}
      />
    </div>
  );
}
