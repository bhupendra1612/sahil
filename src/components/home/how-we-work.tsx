"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(
    () => setActiveStepIndex((p) => (p + 1) % WORK_STEPS.length),
    [],
  );

  /* auto-rotate */
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [isPaused, next]);

  const activeStep = WORK_STEPS[activeStepIndex];

  /* wheel node positions (circular) */
  const getPos = (idx: number) => {
    const angle = (idx * 360) / WORK_STEPS.length - 90;
    const rad = (angle * Math.PI) / 180;
    const r = 155; // radius px
    return { x: Math.cos(rad) * r, y: Math.sin(rad) * r };
  };

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
          <div 
            className="w-full lg:w-1/2 flex justify-center py-10 lg:py-0 overflow-visible"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] scale-90 sm:scale-100">
              
              {/* Outer glow */}
              <div
                className="absolute inset-[-40px] rounded-full opacity-25 blur-3xl transition-all duration-700 pointer-events-none"
                style={{
                  background: `conic-gradient(from 0deg, ${WORK_STEPS.map((p) => p.color).join(", ")}, ${WORK_STEPS[0].color})`,
                }}
              />

              {/* Dashed orbit ring */}
              <div
                className="absolute inset-[-18px] rounded-full border-2 border-dashed border-white/10 animate-spin pointer-events-none"
                style={{ animationDuration: "60s" }}
              />

              {/* Main disc */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/6 to-white/2 shadow-2xl border border-white/10 backdrop-blur-sm pointer-events-none" />

              {/* SVG gradient ring */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 420 420"
              >
                <defs>
                  <linearGradient
                    id="wheelRingHowWeWork"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    {WORK_STEPS.map((p, i) => (
                      <stop
                        key={i}
                        offset={`${(i / WORK_STEPS.length) * 100}%`}
                        stopColor={p.color}
                      />
                    ))}
                    <stop offset="100%" stopColor={WORK_STEPS[0].color} />
                  </linearGradient>
                </defs>
                <circle
                  cx="210"
                  cy="210"
                  r="195"
                  fill="none"
                  stroke="url(#wheelRingHowWeWork)"
                  strokeWidth="3"
                  strokeDasharray="18 8"
                  className="animate-spin"
                  style={{
                    animationDuration: "35s",
                    transformOrigin: "center",
                  }}
                />
              </svg>
              
              {/* Nodes Map */}
              {WORK_STEPS.map((step, index) => {
                const pos = getPos(index);
                const isActive = activeStepIndex === index;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(index)}
                    aria-label={`Select step ${step.short}`}
                    style={{
                      left: `calc(50% + ${pos.x}px)`,
                      top: `calc(50% + ${pos.y}px)`,
                      transform: `translate(-50%, -50%) scale(${isActive ? 1.2 : 1})`,
                      zIndex: isActive ? 20 : 10,
                    }}
                    className="absolute transition-all duration-500 cursor-pointer outline-none focus:outline-none focus:ring-4 focus:ring-slate-700 ring-offset-4 ring-offset-[#0A101D] rounded-full group hover:scale-110"
                  >
                    {/* Glow ring */}
                    <div
                      className={`absolute inset-[-10px] rounded-full blur-xl transition-opacity duration-500 ${isActive ? "opacity-60" : "opacity-0"}`}
                      style={{ background: step.color }}
                    />
                    
                    {/* Node */}
                    <div
                      className={`relative w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-full flex flex-col items-center justify-center shadow-xl transition-all duration-300 ${
                        isActive
                          ? "ring-[3px] ring-white/80"
                          : "hover:ring-2 hover:ring-white/30"
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}bb)`,
                        boxShadow: isActive
                          ? `0 16px 48px -8px ${step.glow}`
                          : `0 8px 24px -8px ${step.glow}`,
                      }}
                    >
                      <step.icon
                        className="text-white mb-0.5 transition-transform duration-300"
                        size={isActive ? 26 : 22}
                      />
                      <span className="text-white text-[10px] sm:text-[11px] font-semibold leading-tight px-1 text-center">
                        {step.short}
                      </span>
                    </div>
                  </button>
                );
              })}

              {/* Center Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 z-30 pointer-events-none">
                {/* Hub glow */}
                <div
                  className="absolute inset-[-12px] rounded-full blur-2xl opacity-35 transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${activeStep.color}, ${activeStep.color}99)`,
                  }}
                />
                
                {/* Hub circle */}
                <div className="relative w-full h-full rounded-full bg-linear-to-br from-white/10 to-white/4 border border-white/15 shadow-2xl flex flex-col items-center justify-center backdrop-blur-md">
                  <span className="font-extrabold text-white text-lg sm:text-xl leading-tight">
                    Sahil<br />
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${activeStep.color}, #cbd5e1)` }}>Packaging</span>
                  </span>
                  <div className="mt-1">
                    <p className="text-white/60 text-[9px] sm:text-[10px] mt-0.5 text-center uppercase tracking-widest font-bold">
                      Step {activeStep.id}
                    </p>
                  </div>
                </div>
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
