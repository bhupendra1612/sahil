import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { InquiryForm } from "@/components/forms/inquiry-form";

export const metadata: Metadata = {
  title: "Contact Us - Request a Quote",
  description: "Get in touch with Sahil Packaging's engineering team for custom machinery quotes, specifications, and facility requirements.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      {/* 
        ========================================
        PAGE HEADER
        ========================================
      */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4 sm:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl">
            Contact Our Engineering Team
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Discuss your packaging line requirements, request technical specifications, or get a custom quotation for your facility.
          </p>
        </div>
      </section>

      {/* 
        ========================================
        CONTACT DETAILS & FORM
        ========================================
      */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          {/* Contact Details Column */}
          <div className="lg:w-1/3 flex flex-col space-y-8">
            <div className="bg-background rounded-2xl border p-8 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Facility Address</h3>
                  <p className="text-sm text-muted-foreground mt-1">New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Direct Line</h3>
                  <p className="text-sm text-muted-foreground mt-1">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground mt-1">info@sahilpackaging.com</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl border border-primary/10 p-8 shadow-sm">
               <h3 className="text-lg font-semibold text-foreground mb-4">Business Hours</h3>
               <ul className="space-y-3 text-sm text-muted-foreground">
                 <li className="flex justify-between border-b pb-2"><span>Monday - Friday:</span> <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span></li>
                 <li className="flex justify-between border-b pb-2"><span>Saturday:</span> <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span></li>
                 <li className="flex justify-between"><span>Sunday:</span> <span className="text-foreground font-medium">Closed</span></li>
               </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-2/3">
             <div className="flex items-center space-x-2 mb-6">
                 <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                 <h2 className="text-2xl font-bold tracking-tight text-foreground">Submit Online Inquiry</h2>
             </div>
             <InquiryForm />
          </div>

        </div>
      </section>
    </div>
  );
}
