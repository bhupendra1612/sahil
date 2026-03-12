import { 
  ClipboardList, 
  PenTool, 
  Factory, 
  ShieldCheck, 
  Settings, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const PROCESS_STEPS = [
  {
    id: "01",
    icon: <ClipboardList className="h-6 w-6 text-white" />,
    title: "Consultation",
    subtitle: "Understanding Your Needs",
    description: "We start with an in-depth discussion to understand your product, packaging format, speed requirements, and budget constraints.",
    checks: ["Needs assessment", "Capacity planning", "Budget estimation"],
    time: "1-2 days",
    colors: {
      bg: "bg-blue-50/80 dark:bg-blue-950/20",
      border: "border-blue-200 dark:border-blue-900",
      solid: "bg-blue-500",
      text: "text-blue-600 dark:text-blue-400",
      checkBg: "bg-blue-100 dark:bg-blue-900/50",
      line: "bg-blue-200 dark:bg-blue-900/30",
    }
  },
  {
    id: "02",
    icon: <PenTool className="h-6 w-6 text-white" />,
    title: "Custom Engineering",
    subtitle: "Designing Your Solution",
    description: "Our engineering team designs a customized machine layout that perfectly integrates with your existing production workflow.",
    checks: ["Component selection", "Workflow integration", "CAD Modeling"],
    time: "3-5 days",
    colors: {
      bg: "bg-purple-50/80 dark:bg-purple-950/20",
      border: "border-purple-200 dark:border-purple-900",
      solid: "bg-purple-500",
      text: "text-purple-600 dark:text-purple-400",
      checkBg: "bg-purple-100 dark:bg-purple-900/50",
      line: "bg-purple-200 dark:bg-purple-900/30",
    }
  },
  {
    id: "03",
    icon: <Factory className="h-6 w-6 text-white" />,
    title: "Manufacturing",
    subtitle: "Precision Assembly",
    description: "The machine is built in our state-of-the-art facility using premium grade steel and high-quality electrical components.",
    checks: ["Heavy-duty fabrication", "Premium parts integration", "Continuous QA"],
    time: "2-4 weeks",
    colors: {
      bg: "bg-emerald-50/80 dark:bg-emerald-950/20",
      border: "border-emerald-200 dark:border-emerald-900",
      solid: "bg-emerald-500",
      text: "text-emerald-600 dark:text-emerald-400",
      checkBg: "bg-emerald-100 dark:bg-emerald-900/50",
      line: "bg-emerald-200 dark:bg-emerald-900/30",
    }
  },
  {
    id: "04",
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    title: "Testing & QA",
    subtitle: "Rigorous Inspection",
    description: "Before dispatch, your machine undergoes extensive trails with your actual product to ensure optimal accuracy and speed.",
    checks: ["Dry run testing", "Product trial run", "Safety compliance"],
    time: "3-5 days",
    colors: {
      bg: "bg-amber-50/80 dark:bg-amber-950/20",
      border: "border-amber-200 dark:border-amber-900",
      solid: "bg-amber-500",
      text: "text-amber-600 dark:text-amber-400",
      checkBg: "bg-amber-100 dark:bg-amber-900/50",
      line: "bg-amber-200 dark:bg-amber-900/30",
    }
  },
  {
    id: "05",
    icon: <Settings className="h-6 w-6 text-white" />,
    title: "Installation",
    subtitle: "Training & Support",
    description: "Our technicians install the machine at your site, train your operators, and provide comprehensive after-sales support.",
    checks: ["On-site installation", "Operator training", "24/7 tech support"],
    time: "Ongoing",
    colors: {
      bg: "bg-pink-50/80 dark:bg-pink-950/20",
      border: "border-pink-200 dark:border-pink-900",
      solid: "bg-pink-500",
      text: "text-pink-600 dark:text-pink-400",
      checkBg: "bg-pink-100 dark:bg-pink-900/50",
      line: "bg-pink-200 dark:bg-pink-900/30",
    }
  }
];

export function OurProcess() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Subtle Dot Pattern Profile Background */}
      <div className="absolute inset-x-0 top-0 h-full bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-8 max-w-[1400px]">
        
        {/* Header content */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:border-blue-900 dark:bg-blue-900/20 dark:text-blue-400 mb-6 shadow-sm">
            <Sparkles className="mr-2 h-4 w-4" />
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            How We <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">Deliver Excellence</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Our streamlined 5-step process ensures you get the perfect packaging machine for your production line, delivered on time. Here&apos;s exactly what to expect.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[280px] left-10 right-10 h-0.5 bg-border/50 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className="relative flex flex-col pt-6">
                
                {/* Connecting arrow badge (Right edge overlay) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 xl:-right-5 top-[272px] z-20 h-6 w-6 rounded-full bg-background border border-border items-center justify-center shadow-sm">
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  </div>
                )}

                {/* Main Card */}
                <div className={`flex flex-col h-full rounded-2xl border ${step.colors.border} ${step.colors.bg} p-6 relative overflow-visible transition-transform duration-300 hover:-translate-y-2`}>
                  
                  {/* Step Badge (Top overlapping) */}
                  <div className={`absolute -top-4 left-6 px-4 py-1.5 rounded-full ${step.colors.solid} text-white text-xs font-bold tracking-widest shadow-md`}>
                    Step {step.id}
                  </div>

                  {/* Icon Box */}
                  <div className={`h-14 w-14 mt-4 rounded-xl ${step.colors.solid} flex items-center justify-center shadow-lg mb-6`}>
                    {step.icon}
                  </div>

                  {/* Titles */}
                  <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium mb-4 pb-4 border-b border-border/50">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-foreground/80 leading-relaxed mb-6 flex-1">
                    {step.description}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-3 mb-6">
                    {step.checks.map((check, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className={`h-4 w-4 mr-2 shrink-0 ${step.colors.text} mt-0.5`} />
                        <span className="text-sm text-foreground/70">{check}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Time Badge */}
                  <div className={`inline-flex self-start items-center rounded-full px-3 py-1 text-xs font-medium bg-background border border-border shadow-sm`}>
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                    <span className="text-muted-foreground">{step.time}</span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Dark CTA Bar */}
        <div className="mt-20">
          <div className="rounded-3xl bg-[#0b101e] border border-slate-800 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            {/* CTA Background Decal */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute left-1/4 bottom-0 w-64 h-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to Start Your Project?</h3>
              <p className="text-slate-400">
                Book a free discovery call and let&apos;s discuss how Sahil Packaging can optimize your production.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <Link 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="https://wa.me/919811234567" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald-500 px-8 text-sm font-bold text-white transition-colors hover:bg-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
