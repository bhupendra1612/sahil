"use client";

import { useState } from "react";
import { 
  ClipboardList, 
  PenTool, 
  Factory, 
  ShieldCheck, 
  Settings, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const WORK_STEPS = [
  {
    id: "01",
    short: "Consultation",
    title: "Consultation & Scope",
    badge: "Understanding Requirements",
    description: "We begin by understanding your exact packaging needs, product characteristics, production speed requirements, and budget constraints to propose the best solution.",
    features: [
      "Detailed needs assessment",
      "Production capacity planning",
      "Custom quote generation",
      "Timeline estimation"
    ],
    icon: ClipboardList,
    color: "#3b82f6", // blue-500
    glow: "rgba(59, 130, 246, 0.4)"
  },
  {
    id: "02",
    short: "Engineering",
    title: "Custom Engineering",
    badge: "Designing the Machine",
    description: "Our expert engineering team designs the mechanical and electrical layout, ensuring the machine integrates perfectly with your existing production lines.",
    features: [
      "3D CAD modeling",
      "Pneumatic & electrical design",
      "Workflow integration",
      "Component specification"
    ],
    icon: PenTool,
    color: "#a855f7", // purple-500
    glow: "rgba(168, 85, 247, 0.4)"
  },
  {
    id: "03",
    short: "Fabrication",
    title: "Fabrication & Assembly",
    badge: "Building with Precision",
    description: "Your machine is manufactured in our Faridabad facility using premium-grade stainless steel (SS-304/316) and top-tier industrial components.",
    features: [
      "Heavy-duty laser cutting & welding",
      "Premium electrical wiring",
      "Food-grade steel contact parts",
      "Continuous quality control"
    ],
    icon: Factory,
    color: "#10b981", // emerald-500
    glow: "rgba(16, 185, 129, 0.4)"
  },
  {
    id: "04",
    short: "Testing",
    title: "Rigorous QA Testing",
    badge: "Ensuring Performance",
    description: "Before delivery, the machine undergoes extensive trial runs with your actual product to guarantee operational accuracy and consistent speeds.",
    features: [
      "Dry run testing (24 hrs)",
      "Live product trial runs",
      "Speed & accuracy calibration",
      "Safety compliance checks"
    ],
    icon: ShieldCheck,
    color: "#f59e0b", // amber-500
    glow: "rgba(245, 158, 11, 0.4)"
  },
  {
    id: "05",
    short: "Installation",
    title: "Setup & Support",
    badge: "Going Live",
    description: "Our technicians transport the machine to your site, supervise the installation, train your operators, and provide guaranteed post-sales support.",
    features: [
      "On-site installation & setup",
      "Operator & maintenance training",
      "Spares & warranty coverage",
      "24/7 technical support"
    ],
    icon: Settings,
    color: "#ec4899", // pink-500
    glow: "rgba(236, 72, 153, 0.4)"
  }
];

export function HowWeWork() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = WORK_STEPS[activeStepIndex];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A101D] text-white font-sans">
      {/* Background Starry/Noise Element */}
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-8 max-w-7xl">
        
        {/* Header content */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm font-semibold text-slate-300 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
            How We Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl">
            Our Process — <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Your Success</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            We follow a proven 5-step methodology to transform your packaging requirements into robust, high-speed industrial machinery.
          </p>
        </div>

        {/* Main Interactive Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left: Content Card */}
          <div className="w-full lg:w-1/2">
            <div 
              className="relative bg-[#111827] rounded-3xl p-8 md:p-10 flex flex-col h-full border border-slate-800 shadow-2xl transition-all duration-500 overflow-hidden"
              style={{
                borderTopColor: activeStep.color,
                borderTopWidth: '4px'
              }}
            >
              {/* Ambient inner glow */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20 pointer-events-none transition-colors duration-500"
                style={{ backgroundColor: activeStep.color }}
              />

              <div className="flex items-center space-x-4 mb-8">
                <span 
                  className="px-4 py-1.5 text-xs font-black rounded-full text-white tracking-widest"
                  style={{ backgroundColor: activeStep.color }}
                >
                  STEP {activeStep.id}
                </span>
                <span className="text-slate-400 text-sm font-medium">{activeStep.badge}</span>
              </div>

              <div className="flex items-center space-x-5 mb-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg transition-colors duration-500"
                  style={{ backgroundColor: activeStep.color }}
                >
                  <activeStep.icon className="w-8 h-8 text-white relative z-10" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  {activeStep.title}
                </h3>
              </div>

              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl min-h-[80px]">
                {activeStep.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5 mb-10 w-full min-h-[100px]">
                {activeStep.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 
                      className="w-5 h-5 mr-3 shrink-0 transition-colors duration-500" 
                      style={{ color: activeStep.color }}
                    />
                    <span className="text-slate-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto pt-8 border-t border-slate-800/80 gap-6">
                <div className="flex flex-col">
                  <span 
                    className="text-2xl font-black tracking-tight transition-colors duration-500"
                    style={{ color: activeStep.color }}
                  >
                    Sahil Packaging
                  </span>
                  <span className="text-sm text-slate-500 font-medium">Original Manufacturer</span>
                </div>
                <Link 
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl font-bold text-white transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: activeStep.color, boxShadow: `0 10px 25px -5px ${activeStep.glow}` }}
                >
                  Consult Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Circular Interactive Graphic */}
          <div className="w-full lg:w-1/2 flex justify-center py-10 lg:py-0">
            <div className="relative w-[340px] h-[340px] md:w-[460px] md:h-[460px]">
              
              {/* Center Glow */}
              <div 
                className="absolute inset-0 m-auto w-[60%] h-[60%] rounded-full blur-[80px] transition-colors duration-700 ease-in-out mix-blend-lighten" 
                style={{ backgroundColor: activeStep.color, opacity: 0.6 }}
              />

              {/* Dotted Circle Track */}
              <div className="absolute inset-[10%] rounded-full border border-dashed border-slate-600/60 animate-[spin-slow_40s_linear_infinite]" />
              <div className="absolute inset-[12%] rounded-full border border-slate-700/30" />
              
              {/* Nodes Map */}
              {WORK_STEPS.map((step, index) => {
                // Determine position on circle. -90deg is top. 
                // Using standard trig: x = cx + r*cos(a), y = cy + r*sin(a)
                const angle = -90 + (index * 72);
                const radians = angle * (Math.PI / 180);
                const radius = 45; // percentage from center
                const x = 50 + radius * Math.cos(radians);
                const y = 50 + radius * Math.sin(radians);
                const isActive = activeStepIndex === index;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(index)}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    className={`absolute rounded-full flex flex-col items-center justify-center transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer outline-none focus:outline-none focus:ring-4 focus:ring-slate-700 ring-offset-4 ring-offset-[#0A101D]
                      ${isActive 
                        ? 'w-24 h-24 md:w-28 md:h-28 scale-110 shadow-2xl z-20' 
                        : 'w-16 h-16 md:w-20 md:h-20 scale-90 hover:scale-100 opacity-60 hover:opacity-100 z-10'
                      }
                    `}
                  >
                     <div 
                       className="absolute inset-0 rounded-full transition-colors duration-500"
                       style={{ 
                         backgroundColor: isActive ? step.color : '#1e293b',
                         boxShadow: isActive ? `0 0 30px ${step.glow}, inset 0 2px 4px rgba(255,255,255,0.3)` : 'none'
                       }}
                     />
                     <step.icon className={`relative z-10 mb-1.5 transition-all duration-500 ${
                       isActive ? 'w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-md' : 'w-6 h-6 md:w-7 md:h-7 text-slate-400'
                     }`} />
                     <span className={`relative z-10 font-bold tracking-wide transition-all duration-500 ${
                       isActive ? 'text-[11px] md:text-xs text-white drop-shadow-md' : 'text-[9px] md:text-[10px] text-slate-400'
                     }`}>
                       {step.short}
                     </span>
                  </button>
                );
              })}

              {/* Center Element */}
              <div className="absolute inset-0 m-auto w-[45%] h-[45%] rounded-full border border-slate-700/50 bg-[#161f30]/80 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-xl z-10">
                <span className="font-extrabold text-white text-xl md:text-2xl leading-tight">Sahil<br/>Packaging</span>
                <span 
                  className="font-bold text-sm md:text-base mt-2 transition-colors duration-500"
                  style={{ color: activeStep.color }}
                >
                  Premium
                </span>
                <span className="text-[10px] md:text-xs text-slate-400 mt-1 uppercase tracking-widest">Machinery</span>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Pill Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-16 max-w-4xl mx-auto">
          {WORK_STEPS.map((step, index) => {
            const isActive = activeStepIndex === index;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(index)}
                className={`flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border focus:outline-none ${
                  isActive 
                    ? 'border-transparent text-white shadow-xl scale-105' 
                    : 'border-slate-700/50 bg-[#161f30] text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-600'
                }`}
                style={isActive ? { backgroundColor: step.color, boxShadow: `0 4px 20px -5px ${step.glow}` } : {}}
              >
                <div 
                  className={`w-2 h-2 rounded-full mr-2 ${isActive ? 'bg-white opacity-80' : 'bg-slate-500'}`} 
                />
                {step.short}
              </button>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
