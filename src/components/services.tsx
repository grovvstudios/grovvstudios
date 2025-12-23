import { motion } from "framer-motion";
import { TrendingUp, Video, Search, Brain, Globe, Film, Award, ArrowRight, Star, LucideIcon } from "lucide-react";

// --- Types ---
interface ServiceItem {
  icon: LucideIcon;
  title: string;
  price: string;
  originalPrice: string | null;
  period: string;
  tagline: string;
  description: string;
  features: string[];
  badge: string | null;
  gradient: string;
}

// --- Data ---
const services: ServiceItem[] = [
  {
    icon: TrendingUp,
    title: "Social Media Management",
    price: "₹25,000",
    originalPrice: null,
    period: "/ month",
    tagline: "Turn followers into customers",
    description: "Strategic social presence that actually drives revenue. Not just likes, but real business growth.",
    features: [ "Content strategy & calendar", "Professional graphics & creatives", "Daily posting & scheduling", "Community management", "Monthly performance reports" ],
    badge: "Most Popular",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    icon: Video,
    title: "Video Production",
    price: "₹7,000",
    originalPrice: "₹9,000",
    period: "/ video",
    tagline: "Viral content that sells",
    description: "Reels & Shorts that stop the scroll. Fast turnaround, unlimited revisions, trending effects.",
    features: [ "Concept to completion", "Professional editing", "Trending transitions", "48-72 hour delivery", "2 free revisions" ],
    badge: "Limited Offer",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    icon: Film,
    title: "Video Editing",
    price: "₹600",
    originalPrice: "₹800",
    period: "/ minute",
    tagline: "Professional polish, affordable price",
    description: "Transform raw footage into polished content. Color grading, audio mixing, effects included.",
    features: [ "Color correction", "Audio enhancement", "Cuts & transitions", "Motion graphics available", "1 Free revision" ],
    badge: "Limited Offer",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    price: "₹35,000",
    originalPrice: null,
    period: "/ month",
    tagline: "Rank higher, grow faster",
    description: "Data-driven SEO that delivers results. 10 targeted keywords, technical optimization, link building.",
    features: [ "10 keyword optimization", "On-page & off-page SEO", "Technical audit", "Monthly ranking reports", "Competitor analysis" ],
    badge: null,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    icon: Brain,
    title: "AI Workflow Automation",
    price: "₹40,000",
    originalPrice: null,
    period: "starting",
    tagline: "Work smarter, not harder",
    description: "Custom AI agents that handle calls, qualify leads, and nurture customers 24/7.",
    features: [ "Custom AI workflows", "Intelligent calling agents", "24/7 automation", "Lead qualification", "CRM integration" ],
    badge: null,
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    icon: Globe,
    title: "Website Development",
    price: "₹21,000",
    originalPrice: null,
    period: "starting",
    tagline: "Your digital storefront",
    description: "Fast, beautiful, conversion-focused websites. From landing pages to full e-commerce platforms.",
    features: [ "Single Page: ₹21,000", "5-7 Pages: ₹45,000", "Super Dynamic: ₹75,000", "E-Commerce: ₹85,000+", "Mobile responsive" ],
    badge: "Best Value",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    icon: Award,
    title: "Personal & Brand Branding",
    price: "₹1,50,000",
    originalPrice: null,
    period: "starting",
    tagline: "Build a brand that lasts",
    description: "Complete personal and brand identity with professional studio support, scripts, analytics, and everything needed.",
    features: [ "Brand strategy", "Visual identity & logo", "Professional studio", "Custom scripts", "Analytics support", "Brand guidelines" ],
    badge: "Premium",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
];

// --- Sub-Components ---
const ClientLogos = () => (
  <div className="flex -space-x-2">
    {[
      { bg: "#4285F4" }, { bg: "#34A853" }, { bg: "#FBBC05" }
    ].map((c, i) => (
      <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-gray-100 shadow-sm flex items-center justify-center z-10">
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: c.bg }} />
      </div>
    ))}
  </div>
);

function ServiceCard({ service, index }: { service: ServiceItem, index: number }) {
  const IconComponent = service.icon;
  const hasDiscount = service.originalPrice !== null;
  const savings = hasDiscount 
    ? Math.round((1 - parseFloat(service.price.replace(/[₹,]/g, '')) / parseFloat(service.originalPrice!.replace(/[₹,]/g, ''))) * 100)
    : 0;

  return (
    // FIX: Simplified animation. Standard fade-in when in view.
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8 last:mb-0"
    >
      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
          {/* Badge */}
          {service.badge && (
            <div className="absolute top-6 right-6 px-3 py-1 bg-indigo-600 text-white text-xs rounded-full">
              {service.badge}
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* Left: Icon */}
            <div className="flex-shrink-0">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: service.gradient, boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)" }}
              >
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5</span>
              </div>
            </div>

            {/* Middle: Content */}
            <div className="flex-grow w-full">
              <h3 className="text-2xl md:text-3xl mb-2 font-bold text-gray-900">{service.title}</h3>
              <p className="text-indigo-600 mb-3 font-medium">{service.tagline}</p>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full md:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group/btn"
                style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right: Pricing */}
            <div className="flex-shrink-0 w-full md:w-auto md:text-right md:min-w-[180px] flex flex-row md:flex-col justify-between items-center md:items-end border-t md:border-t-0 pt-4 md:pt-0 mt-4 md:mt-0">
              <div className="text-left md:text-right">
                {hasDiscount && (
                  <div className="mb-1 md:mb-2">
                    <span className="text-gray-400 line-through text-lg">{service.originalPrice}</span>
                    <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Save {savings}%</span>
                  </div>
                )}
                <div className="text-3xl md:text-5xl text-gray-900 font-bold mb-1">{service.price}</div>
                <div className="text-gray-500 text-sm">{service.period}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full text-sm text-white" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
            Transparent Pricing • No Hidden Fees
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-normal text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Services That <span style={{ 
              fontWeight: "700", 
              background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent", 
              filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.15))"
            }}>Scale</span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl">
            Choose the service that fits your goals. All packages include dedicated support and proven strategies.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <ClientLogos />
              <span>50+ happy clients</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 average rating</span>
            </div>
          </div>
        </motion.div>

        {/* Stacked Services */}
        <div className="py-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
