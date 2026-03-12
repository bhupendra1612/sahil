"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Contact", href: "/contact" },
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

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ═══════════════════════════════════════
          TOP INFO BAR
         ═══════════════════════════════════════ */}
      <div
        className={`bg-[#111625] text-white transition-all duration-300 overflow-hidden ${
          scrolled ? "h-0 opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-8">
          {/* Left: Social */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-[#a0aabf] hidden sm:inline">
              Follow Us:
            </span>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-6 w-6 items-center justify-center rounded-full text-[#a0aabf] transition-all duration-300 hover:text-white hover:scale-110"
              >
                <s.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>

          {/* Right: Contact */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="mailto:info@sahilpackagingindustries.com"
              className="hidden sm:flex items-center gap-1.5 text-xs text-[#a0aabf] hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-[#c3090c]" />
              info@sahilpackagingindustries.com
            </a>
            <a
              href="tel:+919899309626"
              className="flex items-center gap-1.5 text-xs text-[#a0aabf] hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#c3090c]" />
              <span className="hidden md:inline">+91-9899309626, 9899389626, 9899389625</span>
              <span className="md:hidden">+91-9899309626</span>
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          MAIN NAVIGATION BAR
         ═══════════════════════════════════════ */}
      <nav
        className={`w-full bg-white border-b transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/5" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Sahil Packaging Industries Logo"
              width={160}
              height={52}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-semibold text-[#111625] transition-colors duration-300 hover:text-[#c3090c] group"
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#c3090c] transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-[#c3090c] px-6 text-sm font-bold text-white shadow-md shadow-[#c3090c]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#c3090c]/30 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              {/* Shine effect on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[#111625] hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="relative h-6 w-6">
              <Menu
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isOpen ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"
                }`}
              />
            </div>
          </button>
        </div>

        {/* ─── Mobile Menu ─── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4 sm:px-8 border-t space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-[#111625] hover:bg-gray-50 hover:text-[#c3090c] transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Contact Info */}
            <div className="pt-3 mt-3 border-t space-y-3">
              <a
                href="tel:+919899309626"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#c3090c] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#c3090c]" />
                +91-9899309626
              </a>
              <a
                href="mailto:info@sahilpackagingindustries.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#c3090c] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#c3090c]" />
                info@sahilpackagingindustries.com
              </a>
            </div>

            {/* Mobile CTA */}
            <div className="pt-3">
              <Link
                href="/contact"
                className="flex h-11 w-full items-center justify-center rounded-md bg-[#c3090c] text-sm font-bold text-white shadow transition-colors hover:bg-red-700"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s Talk
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
