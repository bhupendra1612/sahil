import { 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  Zap, 
  Factory 
} from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0e17] text-slate-200">
      {/* Background ambient light effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm font-medium text-slate-300">
            <MessageSquare className="mr-2 h-4 w-4 text-blue-400" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl">
            Let&apos;s Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
              Amazing Together
            </span>
          </h2>
          
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Ready to upgrade your packaging line? Contact us for a free consultation. We&apos;ll discuss your requirements and deliver a customized machinery solution.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          <div className="flex flex-col p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-blue-500/50 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email Us</h3>
            <p className="text-white font-medium">info@sahilpackaging.com</p>
            <p className="text-sm text-slate-500 mt-1">We reply within 24 hours</p>
          </div>
          
          <div className="flex flex-col p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-blue-500/50 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Call / WhatsApp</h3>
            <p className="text-white font-medium">+91 98112 34567</p>
            <p className="text-sm text-slate-500 mt-1">Mon-Sat, 9 AM – 6 PM</p>
          </div>

          <div className="flex flex-col p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-blue-500/50 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Location</h3>
            <p className="text-white font-medium">Faridabad, Haryana</p>
            <p className="text-sm text-slate-500 mt-1">Headquarter & Manufacturing</p>
          </div>

          <div className="flex flex-col p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-blue-500/50 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-orange-400" />
            </div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Working Hours</h3>
            <p className="text-white font-medium">Mon – Sat, 9 AM – 6 PM</p>
            <p className="text-sm text-slate-500 mt-1">Sunday Closed</p>
          </div>
        </div>

        {/* Main Split Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left: Contact Form */}
          <div className="flex-1 rounded-3xl bg-[#0f1522] border border-slate-800 p-6 md:p-10 relative overflow-hidden">
            {/* Top gradient glow on the form card */}
            <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500" />
            
            <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
            <p className="text-slate-400 mb-8 max-w-md">
              Fill out the form below and our sales engineering team will get back to you shortly.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-[#161f30] border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-[#161f30] border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input 
                      type="tel" 
                      placeholder="+91 90000 00000" 
                      className="w-full bg-[#161f30] border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Company Name
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Your Business Name" 
                      className="w-full bg-[#161f30] border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Machine Needed <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select defaultValue="" className="w-full bg-[#161f30] border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none cursor-pointer">
                      <option value="" disabled className="text-slate-500">Select a machine</option>
                      <option value="pouch-packaging">Pouch Packaging Machine</option>
                      <option value="multi-head-weigher">Multi-head Weigher</option>
                      <option value="liquid-filling">Liquid Filling Machine</option>
                      <option value="powder-filling">Powder Filling Machine</option>
                      <option value="other">Other / Custom</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Production Capacity
                  </label>
                  <div className="relative">
                    <select defaultValue="" className="w-full bg-[#161f30] border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none cursor-pointer">
                      <option value="" disabled className="text-slate-500">Target capacity</option>
                      <option value="0-30">Up to 30 pouches/min</option>
                      <option value="30-60">30 - 60 pouches/min</option>
                      <option value="60-100">60 - 100 pouches/min</option>
                      <option value="100+">100+ pouches/min</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Project Details <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your product, pouch type, and specific technical requirements..." 
                    className="w-full bg-[#161f30] border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-y min-h-[120px]"
                  />
                </div>
              </div>

              <button className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Right: Sidebar Information */}
          <div className="lg:w-[380px] xl:w-[420px] flex flex-col gap-6">
            
            {/* Why Work With Us */}
            <div className="rounded-3xl bg-[#0f1522] border border-slate-800 p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <Zap className="mr-2 h-5 w-5 text-yellow-400" />
                Why Work With Us
              </h3>
              
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-blue-500/10 p-1">
                    <Phone className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Free Consultation Call</h4>
                    <p className="text-xs text-slate-500 mt-1">Discuss your needs with our engineers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-emerald-500/10 p-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Heavy-duty Built Quality</h4>
                    <p className="text-xs text-slate-500 mt-1">Machine structures built to last.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-orange-500/10 p-1">
                    <Clock className="h-4 w-4 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Reply Within 24 Hours</h4>
                    <p className="text-xs text-slate-500 mt-1">Prompt responses to all inquiries.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-purple-500/10 p-1">
                    <Factory className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Packaging Sector Specialists</h4>
                    <p className="text-xs text-slate-500 mt-1">Decades of combined industry experience.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-800 bg-[#0f1522]/50 p-5 flex flex-col items-center justify-center text-center hover:bg-[#161f30] transition-colors">
                <p className="text-2xl font-bold text-blue-400">Pan India</p>
                <p className="text-xs text-slate-400 mt-1">Delivery Network</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-[#0f1522]/50 p-5 flex flex-col items-center justify-center text-center hover:bg-[#161f30] transition-colors">
                <p className="text-2xl font-bold text-emerald-400">On-Site</p>
                <p className="text-xs text-slate-400 mt-1">Installation</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-[#0f1522]/50 p-5 flex flex-col items-center justify-center text-center hover:bg-[#161f30] transition-colors">
                <p className="text-2xl font-bold text-purple-400">Premium</p>
                <p className="text-xs text-slate-400 mt-1">Components</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-[#0f1522]/50 p-5 flex flex-col items-center justify-center text-center hover:bg-[#161f30] transition-colors">
                <p className="text-2xl font-bold text-orange-400">24/7</p>
                <p className="text-xs text-slate-400 mt-1">Service Support</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Link 
              href="https://wa.me/919811234567" 
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#06301C] border border-[#0d4e2e] p-5 flex items-center justify-between group hover:bg-[#073921] transition-all overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />
              
              <div className="flex items-center relative z-10">
                <div className="h-10 w-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-emerald-50">Chat on WhatsApp</p>
                  <p className="text-xs text-emerald-500/80 mt-0.5">Typically replies within 1 hour</p>
                </div>
              </div>
              
              <div className="h-8 w-8 rounded-full bg-[#0d4e2e] flex items-center justify-center group-hover:translate-x-1 transition-transform relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
