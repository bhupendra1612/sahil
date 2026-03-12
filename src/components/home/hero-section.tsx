"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Users, Factory } from "lucide-react";

const slides = [
  {
    image: "/images/hero/slide1.jpg",
    tagline: "An ISO 9001:2015 Certified Company",
    headline: "Sahil Packaging",
    headlineAccent: "Industries",
    subtitle:
      "Best Pouch Packing Machine Manufacturer & Supplier in Faridabad, Delhi NCR — delivering durable, efficient, and custom solutions since 2005.",
  },
  {
    image: "/images/hero/slide2.jpg",
    tagline: "Since 2005 — Trusted Across India",
    headline: "Advanced Packaging",
    headlineAccent: "Solutions",
    subtitle:
      "Manufacturing all kinds of Food Processing Plant & Machinery along with complete Pouch Packing Solutions with SS-304/316 grade quality.",
  },
  {
    image: "/images/hero/slide3.jpg",
    tagline: "5500+ Machines Delivered Worldwide",
    headline: "Quality &",
    headlineAccent: "Innovation",
    subtitle:
      "From FFS machines to Collar Type, Fully Pneumatic, and Semi-Automatic — we build custom packaging solutions for every industry need.",
  },
];

const stats = [
  { icon: Factory, value: "5,500+", label: "Machines Delivered" },
  { icon: Users, value: "150+", label: "Global Clients" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === current || isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [current, isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={`${slide.headline} ${slide.headlineAccent}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
            sizes="100vw"
            quality={90}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Tagline Badge */}
            <div
              key={`tag-${current}`}
              className="hero-fade-in inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-white/90 mb-6"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              {slides[current].tagline}
            </div>

            {/* Headline */}
            <h1
              key={`head-${current}`}
              className="hero-fade-in-delay-1 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              {slides[current].headline}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {slides[current].headlineAccent}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              key={`sub-${current}`}
              className="hero-fade-in-delay-2 mt-5 text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl"
            >
              {slides[current].subtitle}
            </p>

            {/* CTA Buttons */}
            <div
              key={`cta-${current}`}
              className="hero-fade-in-delay-3 mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Explore Catalog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/25 bg-white/10 backdrop-blur-md px-8 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stat Cards — Desktop Only */}
      <div className="absolute bottom-0 left-0 right-0 z-20 hidden lg:block">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-3 gap-4 -mb-12">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-5 shadow-2xl transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Stat Strip */}
      <div className="absolute bottom-4 left-0 right-0 z-20 lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-lg font-bold text-white">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-wider text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 lg:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === current
                ? "w-8 bg-blue-500"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
