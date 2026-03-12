"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings2, ShieldCheck, Zap, Gauge, Package } from "lucide-react";

const FEATURED_MACHINES = [
  {
    id: "collar-type-servo-augar",
    name: "Collar Type Servo Auger",
    category: "Powder Packaging",
    speed: "30–70 PPM",
    model: "SE-103 CSA",
    description:
      "Advanced servo-driven auger filler for precise packaging of fine powders — spices, flour, chemicals, and pharmaceuticals.",
    image: "/images/products/collar-servo-auger.png",
    features: ["Servo Motor Control", "Leak-Proof Sealing", "SS-304/316 Body"],
    color: "from-blue-500/20 to-indigo-500/20",
    accent: "bg-blue-500",
    accentHex: "#3b82f6",
    textShadow: "text-blue-400",
  },
  {
    id: "ffs-cup-filler",
    name: "FFS with Cup Filler",
    category: "Granule Packaging",
    speed: "30–150 PPM",
    model: "SE-118 FCF",
    description:
      "Versatile volumetric cup filler machine ideal for snacks, grains, pulses, and all free-flowing granular products.",
    image: "/images/products/ffs-cup-filler.png",
    features: ["Volumetric Cups", "High Speed", "Compact Design"],
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "bg-emerald-500",
    accentHex: "#10b981",
    textShadow: "text-emerald-400",
  },
  {
    id: "fully-pneumatic-servo-auger",
    name: "Fully Pneumatic Servo Auger",
    category: "Heavy Duty Automation",
    speed: "25–60 PPM",
    model: "SE-201 FPA",
    description:
      "Robust pneumatically operated machine for heavy-duty packaging — ensures airtight seals and consistent accuracy.",
    image: "/images/products/fully-pneumatic.png",
    features: ["Pneumatic Control", "Paste & Liquid Ready", "24-Hr Tested"],
    color: "from-purple-500/20 to-pink-500/20",
    accent: "bg-purple-500",
    accentHex: "#a855f7",
    textShadow: "text-purple-400",
  },
  {
    id: "collar-multi-head-weigher",
    name: "Multi Head Weighing Filler",
    category: "Precision Weighing",
    speed: "40–120 PPM",
    model: "SE-107 MHW",
    description:
      "High-accuracy multi-head weighing system for products requiring precise weight-based filling — namkeen, chips, dry fruits.",
    image: "/images/products/multi-head-weigher.png",
    features: ["Multi Head System", "Weight Accuracy", "Touch Screen HMI"],
    color: "from-amber-500/20 to-orange-500/20",
    accent: "bg-amber-500",
    accentHex: "#f59e0b",
    textShadow: "text-amber-400",
  },
  {
    id: "ffs-liquid-filler",
    name: "Liquid Filler Machine",
    category: "Liquid Packaging",
    speed: "25–80 PPM",
    model: "SE-119 FLF",
    description:
      "Precision liquid packaging with rotating/clock/jhula pump system — ideal for oil, juice, shampoo, and sauces.",
    image: "/images/products/liquid-filler.png",
    features: ["Rotating Pump", "Drip-Free Nozzle", "Food-Grade Steel"],
    color: "from-cyan-500/20 to-sky-500/20",
    accent: "bg-cyan-500",
    accentHex: "#06b6d4",
    textShadow: "text-cyan-400",
  },
];

export function FeaturedMachinery() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A101D]">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm font-semibold text-slate-300 mb-6 backdrop-blur-md">
              <Zap className="mr-2 h-4 w-4 text-amber-400" />
              Featured Machinery
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Industrial Grade <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
                Packaging Systems
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 font-medium leading-relaxed">
              Explore our best-selling, high-performance pouch packing machines. Engineered for speed, accuracy, and built with premium SS-304/316 steel.
            </p>
          </div>
          <Link 
            href="/products" 
            className="group inline-flex items-center justify-center h-12 rounded-xl bg-white/5 border border-white/10 px-6 text-sm font-bold text-white transition-all hover:bg-white/10 hover:scale-105 backdrop-blur-sm self-start md:self-auto"
          >
            View Entire Catalog
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Top Row: 3 cards */}
        <div className="grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-8 lg:mb-10">
          {FEATURED_MACHINES.slice(0, 3).map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>

        {/* Bottom Row: 2 cards, centered */}
        <div className="grid gap-8 lg:gap-10 sm:grid-cols-2 max-w-4xl mx-auto">
          {FEATURED_MACHINES.slice(3, 5).map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MachineCard({ machine }: { machine: typeof FEATURED_MACHINES[number] }) {
  return (
    <div 
      className="group relative flex flex-col h-full rounded-3xl bg-[#111827] border border-slate-800/60 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] cursor-pointer"
    >
      {/* Hover border glow */}
      <div 
        className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-3xl transition-colors duration-500 z-20 pointer-events-none" 
      />

      {/* Image Section */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900 border-b border-slate-800">
        {/* Gradient Wash */}
        <div className={`absolute inset-0 bg-linear-to-tr ${machine.color} mix-blend-overlay z-10 transition-opacity duration-500 opacity-60 group-hover:opacity-100`} />
        
        {/* Product Image */}
        <Image 
          src={machine.image}
          alt={machine.name}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center rounded-lg bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-white border border-white/10 shadow-lg">
            {machine.category}
          </span>
        </div>

        {/* Speed Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span 
            className="inline-flex items-center gap-1.5 rounded-lg backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/10 shadow-lg"
            style={{ backgroundColor: `${machine.accentHex}cc` }}
          >
            <Gauge className="w-3 h-3" />
            {machine.speed}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 relative">
        {/* Background shimmer on hover */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Model number */}
        <div className="flex items-center gap-2 mb-2 z-10">
          <Package className={`w-3.5 h-3.5 ${machine.textShadow}`} />
          <span className={`text-xs font-mono font-bold ${machine.textShadow} tracking-wide`}>
            {machine.model}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
          {machine.name}
        </h3>
        
        <p className="hidden sm:block text-slate-400 text-sm leading-relaxed mb-6 flex-1 z-10">
          {machine.description}
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-1 gap-2 border-t border-slate-800 pt-5 mt-auto z-10 mb-6">
          {machine.features.map((feature, i) => (
            <div key={i} className="flex items-center text-sm text-slate-300">
              {i === 0 ? (
                <Settings2 className={`w-4 h-4 mr-2 ${machine.textShadow}`} />
              ) : (
                <ShieldCheck className={`w-4 h-4 mr-2 ${machine.textShadow}`} />
              )}
              {feature}
            </div>
          ))}
        </div>

        {/* Action Button */}
        <Link
          href={`/products/${machine.id}`}
          className="w-full relative z-10"
        >
          <div className="flex h-12 items-center justify-between overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700 px-4 transition-all duration-300 group-hover:bg-white group-hover:border-transparent">
            <span className="font-bold text-slate-300 group-hover:text-slate-900 transition-colors">
              View Specifications
            </span>
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${machine.accent} transition-transform duration-300 group-hover:translate-x-1`}>
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
