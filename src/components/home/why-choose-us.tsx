"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  HeartHandshake,
  Building2,
  Users,
  Handshake,
  Truck,
  CheckCircle2,
} from "lucide-react";

const FEATURES = [
  {
    title: "Customer friendly approach",
    icon: HeartHandshake,
    delay: "delay-[100ms]",
  },
  {
    title: "Sound infrastructure",
    icon: Building2,
    delay: "delay-[200ms]",
  },
  {
    title: "Client oriented approach",
    icon: Users,
    delay: "delay-[300ms]",
  },
  {
    title: "Fair business dealings",
    icon: Handshake,
    delay: "delay-[400ms]",
  },
  {
    title: "Timely delivery",
    icon: Truck,
    delay: "delay-[500ms]",
  },
];

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Background Decorative SVGs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-30 blur-3xl pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-red-500/20 to-blue-500/20 animate-spin-slow" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-30 blur-3xl pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/10 to-red-500/20 animate-reverse-spin" />
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        {/* Header section with fade-in-up */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#111625] mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c3090c] to-red-500">Us?</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            We are one of the fastest growing companies acknowledged for
            manufacturing a premium range of quality products in accordance with
            industry standards. We are praised for offering a wide assortment of
            products in a timely manner. Additionally, we are also acknowledged for our:
          </p>
        </div>

        {/* Content Split: Features & Images */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Features List */}
          <div className="flex flex-col space-y-6">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className={`group flex items-center p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-500 transform ${
                  isVisible
                    ? `opacity-100 translate-x-0 ${feature.delay}`
                    : "opacity-0 -translate-x-12"
                }`}
                style={{ transitionDelay: isVisible ? `${idx * 150}ms` : "0ms" }}
              >
                {/* Icon Circle */}
                <div className="relative shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-red-50 group-hover:bg-[#c3090c] transition-colors duration-500 mr-5">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#c3090c]/30 group-hover:border-white/50 animate-spin-slow" />
                  <feature.icon className="w-6 h-6 text-[#c3090c] group-hover:text-white transition-colors duration-500 z-10" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-bold text-[#111625] group-hover:text-[#c3090c] transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                {/* Right Arrow indicator on hover */}
                <div className="ml-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <CheckCircle2 className="w-6 h-6 text-[#c3090c]/70" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Floating Composition with SVG frames */}
          <div
            className={`relative w-full h-[500px] lg:h-[600px] transition-all duration-1000 delay-500 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            {/* The main SVG blob framing */}
            <div className="absolute inset-0 flex items-center justify-center animate-float">
              {/* Complex SVG background blob to look extremely modern */}
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-[120%] h-[120%] text-gray-100 -z-10 rotate-12 scale-110">
                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97.6,-2.3C98.4,13.4,94,29.3,84.1,41.9C74.2,54.5,58.8,63.9,43.2,72C27.6,80.1,11.8,86.9,-3.9,89.5C-19.6,92.1,-35.3,90.5,-48.9,83.1C-62.5,75.7,-74,62.5,-80.7,47.3C-87.4,32.1,-89.3,15,-87,-1.5C-84.7,-18,-78.2,-34,-68.2,-46.8C-58.2,-59.6,-44.7,-69.2,-30.9,-75.8C-17.1,-82.4, -3.1,-86, 11,-84C25.1,-82, 30.6,-83.6, 44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
              
              {/* Outer decorative ring */}
              <div className="absolute w-[85%] h-[85%] rounded-[40px] border-2 border-dashed border-[#c3090c]/20 rounded-tl-[100px] rounded-br-[100px] animate-reverse-spin z-0" />

              {/* Main Image Container */}
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[40px] rounded-tl-[120px] rounded-br-[120px] overflow-hidden shadow-2xl shadow-red-900/10 border-8 border-white z-10">
                <Image
                  src="/images/about/partnership.jpg"
                  alt="Sahil Packaging Partnership"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111625]/80 via-transparent to-transparent opacity-60" />

                {/* Floating glassmorphism badge over image */}
                <div className="absolute bottom-6 left-6 right-6 px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c3090c] text-white">
                      <HeartHandshake className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">100% Client</p>
                      <p className="text-white/80 text-sm">Satisfaction Rate</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secondary floating image (Offset box) */}
              <div className="absolute top-10 -right-4 lg:-right-10 w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 animate-float" style={{ animationDelay: "2s" }}>
                 <Image
                  src="/images/hero/slide1.jpg"
                  alt="Quality Machines"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
