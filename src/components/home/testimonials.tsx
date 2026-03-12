import { Star, Quote } from "lucide-react";

const TESTIMONIALS_ROW_1 = [
  {
    category: "Automatic Pouch Packing",
    quote: "Sahil Packaging machines have transformed our production line. The automatic pouch packer is incredibly fast and reliable.",
    name: "Ramesh Kumar",
    role: "Operations Manager",
    initial: "R",
    tagColor: "bg-blue-500",
  },
  {
    category: "Pneumatic Filling",
    quote: "Their pneumatic filling machines are incredibly accurate. We've seen a 20% increase in efficiency since switching.",
    name: "Anita Desai",
    role: "Production Head",
    initial: "A",
    tagColor: "bg-green-500",
  },
  {
    category: "After-Sales Support",
    quote: "Excellent after-sales support. Whenever we need maintenance or spare parts, their team is there within 24 hours.",
    name: "Vikas Singh",
    role: "Plant Director",
    initial: "V",
    tagColor: "bg-orange-500",
  },
  {
    category: "FFS Machine",
    quote: "The FFS machine we purchased three years ago is still running flawlessly. Top-tier build quality and easy to operate.",
    name: "Meera Patel",
    role: "Factory Owner",
    initial: "M",
    tagColor: "bg-[#c3090c]",
  },
  {
    category: "Custom Solutions",
    quote: "We needed a custom packaging solution for our snacks, and Sahil delivered exactly what we asked for. Highly recommended!",
    name: "Sanjay Gupta",
    role: "CEO",
    initial: "S",
    tagColor: "bg-purple-500",
  },
];

const TESTIMONIALS_ROW_2 = [
  {
    category: "Build Quality",
    quote: "Outstanding build quality! You can tell these machines are built to last in tough industrial environments.",
    name: "Rajesh Sharma",
    role: "Managing Director",
    initial: "R",
    tagColor: "bg-[#c3090c]",
  },
  {
    category: "User Experience",
    quote: "The user interface on the semi-automatic fillers is so simple that our new operators learn it in minutes.",
    name: "Priya Verma",
    role: "Floor Supervisor",
    initial: "P",
    tagColor: "bg-teal-500",
  },
  {
    category: "Consultation",
    quote: "They didn't just sell us a machine; they provided a complete packaging consultation. We upgraded our line with them.",
    name: "Amit Chawla",
    role: "VP Manufacturing",
    initial: "A",
    tagColor: "bg-yellow-500",
  },
  {
    category: "Value for Money",
    quote: "Very competitive pricing without compromising on quality components. The best value machinery we've found.",
    name: "Deepa Nair",
    role: "Procurement Manager",
    initial: "D",
    tagColor: "bg-indigo-500",
  },
  {
    category: "Heavy Duty",
    quote: "Their machines handle heavy-duty loads all day without breaking a sweat. Perfect for our continuous production shifts.",
    name: "Sunil Joshi",
    role: "Operations Head",
    initial: "S",
    tagColor: "bg-cyan-500",
  },
];

interface Testimonial {
  category: string;
  quote: string;
  name: string;
  role: string;
  initial: string;
  tagColor: string;
}

const TestimonialCard = ({ data }: { data: Testimonial }) => (
  <div className="w-[350px] md:w-[400px] shrink-0 rounded-2xl bg-white/[0.03] border border-white/10 p-6 flex flex-col gap-4 transition-colors hover:bg-white/[0.05] hover:border-white/20">
    <div className="flex items-start justify-between">
      {/* Category Tag */}
      <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-white shadow-sm ${data.tagColor}`}>
        {data.category}
      </span>
      {/* Quote Icon Badge */}
      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${data.tagColor} shadow-sm`}>
        <Quote className="h-4 w-4 text-white fill-current" />
      </div>
    </div>

    {/* Stars */}
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className="h-4 w-4 text-amber-400 fill-amber-400" />
      ))}
    </div>

    {/* Quote text */}
    <p className="text-gray-300 text-sm leading-relaxed flex-1 italic relative z-10">
      &quot;{data.quote}&quot;
    </p>

    {/* User footer */}
    <div className="flex items-center gap-3 mt-2 pt-4 border-t border-white/10">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111625] border-2 border-gray-700 text-primary-foreground font-bold shadow-inner">
        {data.initial}
      </div>
      <div>
        <h4 className="text-sm font-bold text-white">{data.name}</h4>
        <p className="text-xs text-gray-400 font-medium flex items-center gap-1">
          <span className="text-amber-400">🏆</span> {data.role}
        </p>
      </div>
    </div>
  </div>
);

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0d111d]">
      {/* Background Gradients to match the premium dark theme */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(195,9,12,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(195,9,12,0.15)_0%,transparent_50%)] pointer-events-none" />
      
      {/* Fading Edges for the marquee */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0d111d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0d111d] to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 mb-16 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
          Trusted by Industrial Leaders
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Don&apos;t just take our word for it. See what our valued manufacturing partners have to say about our packaging machinery and support.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative z-0">
        {/* ROW 1 - Scrolling Left */}
        <div className="flex w-max animate-scroll group hover:[animation-play-state:paused]">
          <div className="flex gap-6 pr-6">
            {TESTIMONIALS_ROW_1.map((testimonial, idx) => (
              <TestimonialCard key={`r1-1-${idx}`} data={testimonial} />
            ))}
          </div>
          <div className="flex gap-6 pr-6">
            {TESTIMONIALS_ROW_1.map((testimonial, idx) => (
              <TestimonialCard key={`r1-2-${idx}`} data={testimonial} />
            ))}
          </div>
          <div className="flex gap-6 pr-6">
            {TESTIMONIALS_ROW_1.map((testimonial, idx) => (
              <TestimonialCard key={`r1-3-${idx}`} data={testimonial} />
            ))}
          </div>
        </div>

        {/* ROW 2 - Scrolling Right */}
        <div className="flex w-max animate-scroll-reverse group hover:[animation-play-state:paused]">
          <div className="flex gap-6 pr-6">
            {TESTIMONIALS_ROW_2.map((testimonial, idx) => (
              <TestimonialCard key={`r2-1-${idx}`} data={testimonial} />
            ))}
          </div>
          <div className="flex gap-6 pr-6">
            {TESTIMONIALS_ROW_2.map((testimonial, idx) => (
              <TestimonialCard key={`r2-2-${idx}`} data={testimonial} />
            ))}
          </div>
          <div className="flex gap-6 pr-6">
            {TESTIMONIALS_ROW_2.map((testimonial, idx) => (
              <TestimonialCard key={`r2-3-${idx}`} data={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
