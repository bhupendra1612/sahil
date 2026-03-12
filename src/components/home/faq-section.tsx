"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Package,
  Settings,
  Truck,
  ShieldCheck,
  Wrench,
  HelpCircle,
  MessageCircle,
  PhoneCall,
  Zap,
  CheckCircle2,
  Users,
} from "lucide-react";

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
  icon: React.ElementType;
  colorClass: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    category: "General",
    question: "What types of packaging machines do you manufacture?",
    answer: "We manufacture a wide range of industrial packaging machines including Automatic Pouch Packing Machines, Pneumatic Collar Type Machines, Semi-Automatic Fillers, FFS (Form Fill Seal) Machines, and Band Sealers.",
    icon: Package,
    colorClass: "bg-blue-600 text-white",
  },
  {
    id: 2,
    category: "Products",
    question: "Do you provide custom packaging solutions?",
    answer: "Yes, we specialize in customizing packaging machinery to meet your specific product requirements, pouch sizes, and production volume needs. Our engineering team works closely with you to design the perfect solution.",
    icon: Settings,
    colorClass: "bg-purple-500 text-white",
  },
  {
    id: 3,
    category: "General",
    question: "What is the typical lead time for delivering a machine?",
    answer: "Standard machines usually take 2 to 4 weeks for delivery. Customized or highly specialized packaging lines may take 4 to 8 weeks depending on the complexity of the requirements.",
    icon: Truck,
    colorClass: "bg-orange-500 text-white",
  },
  {
    id: 4,
    category: "Products",
    question: "How do I choose the right packaging machine for my product?",
    answer: "Our experts assist you in selecting the right machine based on your product type (powder, liquid, granules, solid), desired pouch format, and target production speed. Contact us for a free consultation.",
    icon: HelpCircle,
    colorClass: "bg-[#c3090c] text-white",
  },
  {
    id: 5,
    category: "Support",
    question: "Do you offer after-sales support and maintenance?",
    answer: "Absolutely. We pride ourselves on providing exceptional after-sales support. Our dedicated service team is available for troubleshooting, scheduled maintenance, and on-site repairs to ensure minimal downtime.",
    icon: Wrench,
    colorClass: "bg-teal-500 text-white",
  },
  {
    id: 6,
    category: "Technical",
    question: "Are your machines easy to operate and maintain?",
    answer: "Yes, our machines feature user-friendly PLC and HMI controls for simple operation. We also design our equipment for easy access during routine cleaning and maintenance.",
    icon: Zap,
    colorClass: "bg-indigo-500 text-white",
  },
  {
    id: 7,
    category: "Support",
    question: "What is the warranty period on your machinery?",
    answer: "We offer a comprehensive 1-year warranty on all our packaging machines covering manufacturing defects. Extended warranty and AMC (Annual Maintenance Contract) options are also available.",
    icon: ShieldCheck,
    colorClass: "bg-green-600 text-white",
  },
  {
    id: 8,
    category: "Technical",
    question: "Do you supply spare parts for the machines?",
    answer: "Yes, we maintain a complete inventory of genuine Sahil Packaging spare parts. We ensure quick dispatch to keep your production line running continuously.",
    icon: Package,
    colorClass: "bg-pink-500 text-white",
  },
  {
    id: 9,
    category: "Support",
    question: "Is installation and training included with the purchase?",
    answer: "Yes, our expert technicians will visit your facility to set up the machine, perform test runs, and provide hands-on training for your operators to ensure safe and efficient usage.",
    icon: Users,
    colorClass: "bg-yellow-500 text-white",
  },
  {
    id: 10,
    category: "Technical",
    question: "Can your machines handle different types of packaging materials?",
    answer: "Our machines are compatible with a variety of heat-sealable laminated films, poly pouches, aluminum foil, and paper composites. We can test your specific film during the machine setup phase.",
    icon: Settings,
    colorClass: "bg-cyan-600 text-white",
  },
];

const CATEGORIES = ["All Questions", "General", "Products", "Technical", "Support"];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [openFaqId, setOpenFaqId] = useState<number | null>(1); // 1st open by default

  const filteredFaqs = FAQS.filter(
    (faq) => activeCategory === "All Questions" || faq.category === activeCategory
  );

  return (
    <section className="py-24 bg-[#f8f9fc] relative">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        
        {/* Header Area */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
            <HelpCircle className="w-4 h-4" />
            FAQs
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111625] tracking-tight mb-4">
            Got <span className="text-[#c3090c]">Questions?</span> We&apos;ve Got Answers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about how Sahil Packaging helps industrial manufacturers scale their packaging operations.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm text-sm font-bold text-gray-700">
              <div className="bg-blue-500 p-1.5 rounded-full text-white"><Zap className="w-4 h-4" /></div>
              High-Speed Output
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm text-sm font-bold text-gray-700">
              <div className="bg-green-500 p-1.5 rounded-full text-white"><ShieldCheck className="w-4 h-4" /></div>
              ISO 9001 Certified
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm text-sm font-bold text-gray-700">
              <div className="bg-purple-500 p-1.5 rounded-full text-white"><CheckCircle2 className="w-4 h-4" /></div>
              Made in India
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#c3090c] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-8 items-start">
          
          {/* Left Column: FAQs */}
          <div className="flex flex-col gap-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? `${faq.colorClass} shadow-lg scale-[1.02] border-transparent`
                        : "bg-white border-gray-200 hover:border-gray-300 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${
                            isOpen ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          <faq.icon className="w-5 h-5" />
                        </div>
                        <span
                          className={`font-bold text-lg ${
                            isOpen ? "text-white" : "text-[#111625]"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors shrink-0 ${
                          isOpen ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </button>
                    
                    <div
                      className={`transition-all duration-300 ease-in-out px-6 md:px-[88px] overflow-hidden ${
                        isOpen ? "max-h-96 pb-8 opacity-100" : "max-h-0 py-0 opacity-0"
                      }`}
                    >
                      <p className={`text-[15px] leading-relaxed ${isOpen ? "text-white/90" : "text-gray-600"}`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
                <p className="text-gray-500 font-medium">No questions found for this category.</p>
              </div>
            )}
          </div>

          {/* Right Column: Side Cards */}
          <div className="flex flex-col gap-6 sticky top-24">
            
            {/* Contact Card */}
            <div className="bg-[#111625] rounded-3xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-[#c3090c]" />
                <h3 className="text-xl font-extrabold">Need More Help?</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Can&apos;t find what you&apos;re looking for? Our engineering team is always ready to guide you.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center w-full py-3.5 px-4 bg-[#c3090c] hover:bg-red-700 transition-colors rounded-xl font-bold text-sm"
              >
                Contact Us <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Why Choose Us Mini Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-[#111625] font-extrabold text-sm tracking-wider uppercase mb-5">
                Why Sahil Packaging?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <Package className="w-5 h-5 text-gray-400" /> Custom Engineered Solutions
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <Truck className="w-5 h-5 text-gray-400" /> On-Time Delivery Guarantee
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <Zap className="w-5 h-5 text-orange-400" /> High Production Speed
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <ShieldCheck className="w-5 h-5 text-green-500" /> Robust Build Quality
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <MessageCircle className="w-5 h-5 text-blue-400" /> Free Consultation
                </li>
              </ul>
            </div>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/919899309626"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-green-50 hover:bg-green-100 transition-colors border border-green-200 rounded-3xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-500 flex items-center justify-center w-12 h-12 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.18 1.86 5.82L3 21l3.22-.85C7.8 21.32 9.83 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1.61 14.89c-.27.76-1.57 1.4-2.18 1.48-.56.08-1.28.14-3.54-1.22-2.73-1.64-4.52-4.42-4.66-4.6-.14-.18-1.12-1.48-1.12-2.83 0-1.35.71-2.02.96-2.29.25-.27.55-.34.73-.34.18 0 .37 0 .52.01.17.01.41-.06.63.48.23.54.78 1.9.85 2.04.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.15-.29.35-.41.48-.14.15-.3.32-.13.62.17.3 1.05 1.73 2.34 2.89 1.67 1.5 3.08 1.96 3.38 2.1.3.14.48.11.66-.08.18-.2.78-.9.99-1.21.21-.31.42-.26.69-.16.27.1 1.73.82 2.03.96.3.15.5.22.57.34.07.13.07.72-.2 1.48z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-green-900 font-extrabold text-sm">WhatsApp Chat</h4>
                  <p className="text-green-700/80 text-xs font-medium">Typically replies in 1 hr</p>
                </div>
              </div>
              <div className="text-green-600 group-hover:translate-x-1 transition-transform">
                →
              </div>
            </a>

          </div>
        </div>

        {/* Bottom Banner Area */}
        <div className="mt-16 bg-[#111625] rounded-3xl p-6 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          {/* subtle pattern inside banner */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="bg-blue-500 rounded-2xl w-14 h-14 flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold mb-1">Still have questions?</h3>
              <p className="text-gray-400 text-sm">Book a free discovery call with our engineering team.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10 shrink-0">
            <Link
              href="/contact"
              className="bg-white text-[#111625] hover:bg-gray-100 font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center whitespace-nowrap"
            >
              Get in Touch <span className="ml-2">→</span>
            </Link>
            <a
              href="https://wa.me/919899309626"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center whitespace-nowrap"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
