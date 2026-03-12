"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  ChevronsRight,
  ArrowUp,
  MessageCircle
} from "lucide-react";
import { useEffect, useState } from "react";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/sahilpackagingindustries/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sahilpackagingindustries",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@sahilpackagingindustries",
    icon: Youtube,
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="relative bg-[#111625] text-white overflow-hidden border-t-4 border-[#c3090c]">
        {/* Decorative Grid/Gradient Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 -mr-40 -mt-40 h-96 w-96 rounded-full bg-[#c3090c] opacity-10 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-96 w-96 rounded-full bg-blue-600 opacity-10 blur-[100px] pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4 py-16 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* Column 1: Brand & About */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block bg-white p-2 rounded shadow-md">
                <Image
                  src="/images/logo.jpg"
                  alt="Sahil Packaging Industries Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                An ISO 9001:2015 Certified Co.
              </h3>
              <p className="text-[#a0aabf] text-sm leading-loose max-w-sm">
                Established in the year 2005 as a Sole Proprietor Firm at Faridabad (Haryana, India), we <strong className="text-white font-semibold">&quot;Sahil Packaging Industries&quot;</strong> are a leading manufacturer of All Types of Pouch Packing Machines. We offer a complete solution for all your pouch packing needs, ensuring efficiency, reliability, and customization tailored to your industry requirements.
              </p>
            </div>

            {/* Column 2: Company Links */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
                Company
                <span className="absolute -bottom-2 left-0 h-0.5 w-12 bg-[#c3090c]"></span>
              </h3>
              <ul className="space-y-4 mt-2">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm font-medium text-[#a0aabf] hover:text-[#c3090c] transition-all duration-300"
                    >
                      <ChevronsRight className="mr-2 h-4 w-4 text-[#c3090c] transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Get In Touch */}
            <div className="lg:col-span-4">
              <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
                Get In Touch
                <span className="absolute -bottom-2 left-0 h-0.5 w-12 bg-[#c3090c]"></span>
              </h3>
              <ul className="space-y-6 mt-2">
                
                {/* Address */}
                <li className="flex items-start gap-4 group cursor-default">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c3090c] text-white shadow-lg shadow-[#c3090c]/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Our Address</h4>
                    <p className="text-sm text-[#a0aabf] leading-relaxed">
                      111, Rajeev Colony, Samaypur Road, Near Pawan Hospital,
                      Sec.-56, Ballabgarh, Faridabad-121004-(HR)
                    </p>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-4 group cursor-default">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c3090c] text-white shadow-lg shadow-[#c3090c]/20 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-white font-bold mb-1">Call Us</h4>
                    <div className="text-sm text-[#a0aabf] flex flex-wrap gap-1">
                      <a href="tel:+919899309626" className="hover:text-white transition-colors">+91-9899309626,</a>
                      <a href="tel:+919899389626" className="hover:text-white transition-colors">9899389626,</a>
                      <a href="tel:+919899389625" className="hover:text-white transition-colors">9899389625</a>
                    </div>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-4 group cursor-default">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c3090c] text-white shadow-lg shadow-[#c3090c]/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Mail Us</h4>
                    <a
                      href="mailto:info@sahilpackagingindustries.com"
                      className="text-sm text-[#a0aabf] hover:text-white transition-colors break-all"
                    >
                      info@sahilpackagingindustries.com
                    </a>
                  </div>
                </li>

              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-[#a0aabf] text-center md:text-left">
              © Copyright {year} Sahil Packaging Industries All Rights Reserved. Designed by <span className="text-[#c3090c] font-semibold">Prizm Technologies</span>
            </p>
            
            {/* Social Icons inside bottom bar */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#111625] transition-all duration-300 hover:bg-[#c3090c] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-[#c3090c]/50"
                >
                  <social.icon className="h-4 w-4 fill-current" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* Phone FAB */}
        <a
          href="tel:+919899309626"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c3090c] text-white shadow-lg shadow-[#c3090c]/30 hover:bg-red-700 transition-all duration-300 hover:scale-110 animate-[bounce_3s_infinite]"
          aria-label="Call Us"
        >
          <Phone className="h-5 w-5" />
        </a>
        
        {/* WhatsApp FAB */}
        <a
          href="https://wa.me/919899389626"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c3090c] text-white shadow-lg shadow-[#c3090c]/30 hover:bg-red-700 transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      {/* Scroll to Top FAB */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#c3090c] text-white shadow-lg shadow-[#c3090c]/30 hover:bg-red-700 transition-all duration-500 hover:scale-110 ${
          showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </>
  );
}
