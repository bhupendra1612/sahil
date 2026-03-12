"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Globe,
  Smartphone,
  Search,
  Palette,
  Server,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  Users,
  Play,
  Pause,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/* ─────────────── data ─────────────── */
const processes = [
  {
    id: 1,
    step: "01",
    icon: Globe,
    title: "Custom Web Platforms",
    shortTitle: "Web",
    tagline: "Blazing-fast education portals",
    description:
      "We build bespoke websites and student portals on Next.js & React — optimised for UK education providers who need speed, accessibility, and WCAG compliance.",
    features: [
      "Next.js 14 + React for lightning-fast pages",
      "Student / parent portals with secure login",
      "WCAG AA accessible & mobile-first",
      "Integrated CMS for easy content updates",
    ],
    stat: { value: "0.8s", label: "Avg. load time" },
    gradient: "from-blue-500 to-cyan-400",
    color: "#2563EB",
    colorLight: "#DBEAFE",
  },
  {
    id: 2,
    step: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    shortTitle: "Mobile",
    tagline: "Learn anywhere, anytime",
    description:
      "Cross-platform iOS & Android apps for coaching centres, tutors, and schools — featuring live class streaming, push notifications, and offline study materials.",
    features: [
      "React Native for iOS & Android",
      "Live class streaming & recordings",
      "Push notifications & attendance",
      "Offline mode for study materials",
    ],
    stat: { value: "iOS & Android", label: "Cross-platform" },
    gradient: "from-emerald-500 to-teal-400",
    color: "#22C55E",
    colorLight: "#DCFCE7",
  },
  {
    id: 3,
    step: "03",
    icon: Server,
    title: "SaaS & Platform Solutions",
    shortTitle: "SaaS",
    tagline: "Your own digital classroom",
    description:
      "End-to-end SaaS platforms for education: LMS, scheduling, payments (Stripe), automated enrolments, and analytics dashboards — all branded as yours.",
    features: [
      "Learning Management System (LMS)",
      "Stripe payments & subscriptions",
      "Automated enrolment workflows",
      "Admin analytics & reporting",
    ],
    stat: { value: "100%", label: "Custom built" },
    gradient: "from-violet-500 to-purple-400",
    color: "#8B5CF6",
    colorLight: "#EDE9FE",
  },
  {
    id: 4,
    step: "04",
    icon: Search,
    title: "SEO & Digital Growth",
    shortTitle: "SEO",
    tagline: "Get found by local students",
    description:
      "Dominate local search in the UK education sector. We craft SEO strategies specifically for coaching centres and tutors so parents find you first.",
    features: [
      "Local SEO for UK education queries",
      "Google Business Profile optimisation",
      "Content marketing & blog strategy",
      "Monthly ranking & traffic reports",
    ],
    stat: { value: "UK", label: "Local SEO focus" },
    gradient: "from-amber-500 to-orange-400",
    color: "#F59E0B",
    colorLight: "#FEF3C7",
  },
  {
    id: 5,
    step: "05",
    icon: Palette,
    title: "Branding & Design",
    shortTitle: "Brand",
    tagline: "Stand out in the education market",
    description:
      "Premium brand identities, marketing materials, and UI/UX design tailored for UK education providers — from logos to full design systems.",
    features: [
      "Logo design & brand identity",
      "UI/UX design & prototyping",
      "Marketing collateral & brochures",
      "Social media creative assets",
    ],
    stat: { value: "Premium", label: "Quality design" },
    gradient: "from-rose-500 to-pink-400",
    color: "#EC4899",
    colorLight: "#FCE7F3",
  },
];

const impactStats = [
  { icon: Zap, value: "99.9%", label: "Uptime", gradient: "from-blue-500 to-cyan-400" },
  { icon: TrendingUp, value: "1 Week", label: "Avg. Delivery", gradient: "from-emerald-500 to-teal-400" },
  { icon: Users, value: "UK", label: "Education Focus", gradient: "from-violet-500 to-purple-400" },
];

/* ─────────────── component ─────────────── */
export default function ServiceWheel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(
    () => setActiveIndex((p) => (p + 1) % processes.length),
    [],
  );

  /* auto–rotate */
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [isPaused, next]);

  const active = processes[activeIndex];

  /* wheel node positions (circular) */
  const getPos = (idx: number) => {
    const angle = (idx * 360) / processes.length - 90;
    const rad = (angle * Math.PI) / 180;
    const r = 155; // radius px
    return { x: Math.cos(rad) * r, y: Math.sin(rad) * r };
  };

  return (
    <section
      id="process"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0b1121 0%, #111a33 40%, #0f1629 100%)",
      }}
    >
      {/* ── Background decorations ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Floating particles */}
        {[
          { t: "10%", l: "5%", s: 4, d: "0s", dur: "6s" },
          { t: "20%", l: "90%", s: 3, d: "1s", dur: "7s" },
          { t: "70%", l: "15%", s: 5, d: "2s", dur: "5s" },
          { t: "80%", l: "85%", s: 3, d: "0.5s", dur: "8s" },
          { t: "40%", l: "50%", s: 2, d: "3s", dur: "6s" },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-pulse"
            style={{
              top: p.t,
              left: p.l,
              width: p.s,
              height: p.s,
              animationDelay: p.d,
              animationDuration: p.dur,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-blue-300 font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            How We Work
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Our <span className="text-gradient">Process</span> — Your{" "}
            <span className="text-gradient">Growth</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-lg leading-relaxed">
            We follow a proven 5-step methodology to transform UK education
            businesses into thriving digital brands.
          </p>
        </ScrollReveal>

        {/* ── Main Grid: left text / right wheel ── */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ─── LEFT: Detail Card ─── */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 sm:p-10 overflow-hidden">
              {/* Gradient accent top bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${active.gradient} transition-all duration-500`}
              />

              {/* Step + Label */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${active.gradient} text-white`}
                >
                  Step {active.step}
                </span>
                <span className="text-white/30 text-sm">{active.tagline}</span>
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${active.gradient} flex items-center justify-center shadow-lg`}
                >
                  <active.icon className="text-white" size={26} />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  {active.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/55 leading-relaxed mb-6 text-[15px]">
                {active.description}
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {active.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-white/65"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: active.color }}
                    />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Stat + CTA */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span
                    className="text-3xl font-bold"
                    style={{ color: active.color }}
                  >
                    {active.stat.value}
                  </span>
                  <span className="text-white/40 text-sm ml-2">
                    {active.stat.label}
                  </span>
                </div>
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${active.gradient} shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group/cta`}
                >
                  Get Started
                  <ArrowRight
                    size={16}
                    className="group-hover/cta:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>

              {/* Corner glow */}
              <div
                className={`absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${active.gradient} opacity-[0.06] blur-3xl pointer-events-none`}
              />
            </div>

            {/* ── Process Step Pills (navigation below card) ── */}
            <div className="flex flex-wrap items-center gap-2 mt-6">
              {processes.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIndex(i)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeIndex === i
                      ? "text-white scale-105 shadow-lg"
                      : "text-white/40 bg-white/5 hover:bg-white/10 hover:text-white/70"
                  }`}
                  style={
                    activeIndex === i
                      ? {
                          background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`,
                          boxShadow: `0 8px 24px -4px ${p.color}50`,
                        }
                      : undefined
                  }
                >
                  {p.shortTitle}
                </button>
              ))}
              {/* Pause / Play toggle */}
              <button
                onClick={() => setIsPaused((v) => !v)}
                className="ml-auto w-9 h-9 rounded-full border border-white/10 bg-white/5 text-white/40 hover:text-white/70 hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
              </button>
            </div>
          </ScrollReveal>

          {/* ─── RIGHT: Interactive Wheel ─── */}
          <ScrollReveal direction="right" className="order-1 lg:order-2 flex justify-center">
            <div
              className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Outer glow */}
              <div
                className="absolute inset-[-40px] rounded-full opacity-25 blur-3xl transition-all duration-700"
                style={{
                  background: `conic-gradient(from 0deg, ${processes.map((p) => p.color).join(", ")}, ${processes[0].color})`,
                }}
              />

              {/* Dashed orbit ring */}
              <div
                className="absolute inset-[-18px] rounded-full border-2 border-dashed border-white/10 animate-spin"
                style={{ animationDuration: "60s" }}
              />

              {/* Main disc */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.06] to-white/[0.02] shadow-2xl border border-white/10 backdrop-blur-sm" />

              {/* SVG gradient ring */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 420 420"
              >
                <defs>
                  <linearGradient
                    id="wheelRing"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    {processes.map((p, i) => (
                      <stop
                        key={i}
                        offset={`${(i / processes.length) * 100}%`}
                        stopColor={p.color}
                      />
                    ))}
                    <stop offset="100%" stopColor={processes[0].color} />
                  </linearGradient>
                </defs>
                <circle
                  cx="210"
                  cy="210"
                  r="195"
                  fill="none"
                  stroke="url(#wheelRing)"
                  strokeWidth="3"
                  strokeDasharray="18 8"
                  className="animate-spin"
                  style={{
                    animationDuration: "35s",
                    transformOrigin: "center",
                  }}
                />
              </svg>

              {/* ── Service Nodes ── */}
              {processes.map((p, i) => {
                const pos = getPos(i);
                const isActive = activeIndex === i;
                return (
                  <div
                    key={p.id}
                    className="absolute transition-all duration-500 cursor-pointer"
                    style={{
                      left: `calc(50% + ${pos.x}px)`,
                      top: `calc(50% + ${pos.y}px)`,
                      transform: `translate(-50%, -50%) scale(${isActive ? 1.2 : 1})`,
                      zIndex: isActive ? 20 : 10,
                    }}
                    onClick={() => setActiveIndex(i)}
                  >
                    {/* Glow ring */}
                    <div
                      className={`absolute inset-[-10px] rounded-full blur-xl transition-opacity duration-500 ${isActive ? "opacity-60" : "opacity-0"}`}
                      style={{ background: p.color }}
                    />
                    {/* Node */}
                    <div
                      className={`relative w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-full flex flex-col items-center justify-center shadow-xl transition-all duration-300 ${
                        isActive
                          ? "ring-[3px] ring-white/80 ring-offset-2 ring-offset-[#111a33]"
                          : "hover:ring-2 hover:ring-white/30 hover:ring-offset-2 hover:ring-offset-[#111a33]"
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${p.color}, ${p.color}bb)`,
                        boxShadow: isActive
                          ? `0 16px 48px -8px ${p.color}60`
                          : `0 8px 24px -8px ${p.color}40`,
                      }}
                    >
                      <p.icon
                        className="text-white mb-0.5"
                        size={isActive ? 26 : 22}
                      />
                      <span className="text-white text-[10px] sm:text-[11px] font-semibold leading-tight">
                        {p.shortTitle}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* ── Centre Hub ── */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 z-30">
                {/* Hub glow */}
                <div
                  className="absolute inset-[-12px] rounded-full blur-2xl opacity-35 transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${active.color}, ${active.color}99)`,
                  }}
                />
                {/* Hub circle */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/10 to-white/[0.04] border border-white/15 shadow-2xl flex flex-col items-center justify-center backdrop-blur-sm">
                  <span className="font-heading font-bold text-base sm:text-lg text-white">
                    Digital<span className="text-gradient">Rise</span>
                  </span>
                  <div className="mt-1">
                    <span
                      className="font-bold text-2xl sm:text-3xl transition-colors duration-300"
                      style={{ color: active.color }}
                    >
                      {active.stat.value}
                    </span>
                    <p className="text-white/40 text-[10px] sm:text-[11px] mt-0.5 text-center">
                      {active.stat.label}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent dots around wheel */}
              {[
                { t: "-4%", l: "48%", s: 6, d: "0s", dur: "4s" },
                { t: "50%", l: "102%", s: 4, d: "1.2s", dur: "5s" },
                { t: "100%", l: "44%", s: 5, d: "0.7s", dur: "4.5s" },
                { t: "50%", l: "-4%", s: 4, d: "2s", dur: "5.5s" },
              ].map((d, i) => (
                <div
                  key={i}
                  className="absolute rounded-full animate-pulse"
                  style={{
                    top: d.t,
                    left: d.l,
                    width: d.s,
                    height: d.s,
                    background: processes[i % processes.length].color,
                    animationDelay: d.d,
                    animationDuration: d.dur,
                    opacity: 0.5,
                  }}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ── Bottom Impact Stats ── */}
        <ScrollReveal delay={200} className="mt-20">
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {impactStats.map((s, i) => (
              <div
                key={i}
                className="text-center group"
              >
                <div
                  className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <s.icon className="text-white" size={22} />
                </div>
                <span className="block text-2xl sm:text-3xl font-bold text-white">
                  {s.value}
                </span>
                <span className="text-white/40 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
