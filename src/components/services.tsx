// FILE: src/components/Services.tsx
import { motion, useScroll, useTransform } from "motion/react"; 
import { TrendingUp, Video, Search, Brain, Globe, Film, Award, ArrowRight, Star, LucideIcon } from "lucide-react";
import { useRef } from "react";

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
    features: [
      "Content strategy & calendar",
      "Professional graphics & creatives",
      "Daily posting & scheduling",
      "Community management",
      "Monthly performance reports"
    ],
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
    features: [
      "Concept to completion",
      "Professional editing",
      "Trending transitions & effects",
      "48-72 hour delivery",
      "2 free revisions",
      "Additional charges apply for travel"
    ],
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
    features: [
      "Color correction & grading",
      "Audio enhancement",
      "Cuts, transitions & effects",
      "Motion graphics available",
      "1 Free revision"
    ],
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
    features: [
      "10 keyword optimization",
      "On-page & off-page SEO",
      "Technical audit & fixes",
      "Monthly ranking reports",
      "Competitor analysis"
    ],
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
    features: [
      "Custom AI workflows",
      "Intelligent calling agents",
      "24/7 automation",
      "Lead qualification",
      "CRM integration"
    ],
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
    features: [
      "Single Page Website: ₹21,000",
      "5-7 Pages Website: ₹45,000",
      "Super Dynamic Website: ₹75,000",
      "E-Commerce: From ₹85,000",
      "Mobile responsive & SEO optimized"
    ],
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
    features: [
      "Brand strategy & positioning",
      "Visual identity & logo design",
      "Professional studio with gear",
      "Custom scripts & content",
      "Analytics & messaging support"
    ],
    badge: "Premium",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
];

// --- Sub-Components ---

const ClientLogos = () => (
  <div className="flex -space-x-2">
    {/* Google Style */}
    <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 shadow-sm flex items-center justify-center hover:scale-110 transition-transform z-30">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    </div>
    {/* Meta Style */}
    <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 shadow-sm flex items-center justify-center hover:scale-110 transition-transform z-20">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 12c0 1.93-1.57 3.5-3.5 3.5S10.5 13.93 10.5 12s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5z" fill="url(#metaGradient)"/>
        <path d="M21.5 12c0 2.5-1 4.5-2.5 6-1.5 1.5-3.5 2.5-6 2.5s-4.5-1-6-2.5c-1.5-1.5-2.5-3.5-2.5-6s1-4.5 2.5-6c1.5-1.5 3.5-2.5 6-2.5s4.5 1 6 2.5c1.5 1.5 2.5 3.5 2.5 6z" stroke="url(#metaGradient)" strokeWidth="1.5" fill="none"/>
        <defs>
          <linearGradient id="metaGradient" x1="4.5" y1="3.5" x2="19.5" y2="20.5">
            <stop offset="0%" stopColor="#0081FB"/>
            <stop offset="100%" stopColor="#0041C3"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
    {/* Amazon Style */}
    <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 shadow-sm flex items-center justify-center hover:scale-110 transition-transform z-10">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 18c-3.5 0-6.5-1-9-2.5-.2-.1-.3 0-.2.2 1.5 2 4 3.3 6.7 3.3 2 0 4-.6 5.5-1.7.3-.2.1-.5-.2-.3-.8.4-1.8.7-2.8 1z" fill="#FF9900"/>
        <path d="M15.5 17c-.3-.4-2-1.9-2-2.7 0-.5.2-.8.7-1.2.5-.4.9-.9.9-1.6 0-1-.7-2-2.1-2h-2.5c-.1 0-.2.1-.2.2l.1.8c0 .1.1.2.2.2h.5c.3 0 .5.2.5.5v3.5c0 .3-.2.5-.5.5h-.5c-.1 0-.2.1-.2.2l-.1.8c0 .1.1.2.2.2h3c.1 0 .2-.1.2-.2l-.1-.8c0-.1-.1-.2-.2-.2h-.5c-.3 0-.5-.2-.5-.5v-1.2h1.2c1.5 0 2.6-1.1 2.6-2.5 0-1.2-.8-2.1-1.9-2.4-.1 0-.2 0-.2.1 0 .1.1.2.2.2.8.3 1.3.9 1.3 1.8 0 1.1-.8 1.9-1.9 1.9h-1v1.5c0 .2.1.4.2.5.3.3 1.7 1.8 2 2.2.1.1.2.1.3 0 .1-.1.1-.3 0-.4z" fill="#221F1F"/>
        <path d="M18.5 18.5c0 .3-.3.5-.5.5-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5zm3.5 0c-1.5 1-3.5 1.5-5.3 1.5-2.5 0-4.8-1-6.5-2.5-.1-.1-.2-.2 0-.3.1-.1.3 0 .4.1 1.6 1.4 3.7 2.2 5.9 2.2 1.7 0 3.6-.5 5.3-1.3.2-.1.4 0 .5.2.1.2 0 .4-.3.6z" fill="#FF9900"/>
      </svg>
    </div>
  </div>
);

function ServiceCard({ service, index }: { service: ServiceItem, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);

  const IconComponent = service.icon;
  const hasDiscount = service.originalPrice !== null;
  
  const savings = hasDiscount 
    ? Math.round((1 - parseFloat(service.price.replace(/[₹,]/g, '')) / parseFloat(service.originalPrice!.replace(/[₹,]/g, ''))) * 100)
    : 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y }}
      className="mb-8 last:mb-0"
    >
      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
          {service.badge && (
            <div className="absolute top-6 right-6 px-3 py-1 bg-indigo-600 text-white text-xs rounded-full z-10">
              {service.badge}
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="flex-shrink-0">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: service.gradient,
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
                }}
              >
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5</span>
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-2xl md:text-3xl mb-2 font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-indigo-600 mb-3 font-medium">
                {service.tagline}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

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
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group/btn"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                }}
                aria-label={`Get started with ${service.title}`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex-shrink-0 text-right md:text-left md:min-w-[180px]">
              {hasDiscount && (
                <div className="mb-2">
                  <span className="text-gray-400 line-through text-lg">
                    {service.originalPrice}
                  </span>
                  <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Save {savings}%
                  </span>
                </div>
              )}
              <div className="text-4xl md:text-5xl text-gray-900 mb-1 font-bold">
                {service.price}
              </div>
              <div className="text-gray-500">{service.period}</div>
              
              {index === 0 && (
                <div className="mt-4 text-xs text-orange-600 bg-orange-50 px-3 py-2 rounded-lg inline-block animate-pulse">
                  Only 2 spots left
                </div>
              )}
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-50 to-transparent rounded-full -mr-32 -mb-32 opacity-50 pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    // !!! THIS ID IS NOW SERVICES. THIS FIXES YOUR NAVIGATION !!!
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div 
            className="inline-block mb-4 px-4 py-2 rounded-full text-sm text-white"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
            }}
          >
            Transparent Pricing • No Hidden Fees
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#1a1a2e] via-[#667eea] to-[#764ba2]">
            Services That Scale<br />Your Business
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

        <div className="py-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-10 rounded-2xl text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
           <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>

          <h3 className="text-2xl md:text-3xl mb-4 font-semibold relative z-10">
            Not sure which service is right for you?
          </h3>
          <p className="text-indigo-100 mb-6 text-lg relative z-10">
            Book a free 15-minute consultation and we'll create a custom plan for your business.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 font-semibold relative z-10 shadow-lg"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
