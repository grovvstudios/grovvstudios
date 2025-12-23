import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// --- Helper: Count-Up Animation Component ---
function NumberTicker({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.set(0);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Hero() {
  return (
    // LAYOUT LOGIC:
    // Mobile: 'pt-36' (Clears navbar), 'justify-start' (Scrolls naturally), 'min-h-[100dvh]'
    // Desktop (md): 'md:pt-80' (Your huge gap), 'md:justify-center' (Centered), 'md:min-h-screen'
    <section className="relative w-full overflow-hidden min-h-[100dvh] md:min-h-screen flex flex-col justify-start md:justify-center items-center px-4 pt-36 pb-16 md:px-6 md:pt-80 md:pb-32">
      
      <style>{`
        /* Shine Animation */
        @keyframes shine-sweep {
          0% { transform: translateX(-150%) skewX(-25deg); }
          30% { transform: translateX(150%) skewX(-25deg); } 
          100% { transform: translateX(150%) skewX(-25deg); } 
        }
        .animate-shine {
          animation: shine-sweep 8s ease-in-out infinite;
        }

        /* Pulse Animation */
        @keyframes pulse-wait {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4); }
          10% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(102, 126, 234, 0); }
          20% { transform: scale(1); box-shadow: 0 0 0 0 rgba(102, 126, 234, 0); }
          100% { transform: scale(1); }
        }
        .animate-btn-pulse-wait {
          animation: pulse-wait 5s infinite;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 md:mb-8"
          style={{
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            border: "1px solid rgba(102, 126, 234, 0.2)",
          }}
        >
          <Sparkles className="w-3 h-3" style={{ color: "#667eea" }} />
          <span className="text-xs text-gray-600 font-medium">
            Elevate your Brand, GROVV with us
          </span>
        </motion.div>

        {/* HEADLINE */}
        <div className="relative mb-6 md:mb-8 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-label="Grovv Studios"
            // TEXT WRAPPING LOGIC:
            // Mobile: 'whitespace-normal' (Allows wrapping so it doesn't get cut off)
            // Desktop: 'md:whitespace-nowrap' (Forces single line, just like you had before)
            className="font-bold leading-[1.1] tracking-tight whitespace-normal md:whitespace-nowrap"
            style={{
              fontFamily: "'Poppins', sans-serif",
              // Mobile size (2.5rem) -> Laptop size (5.5rem)
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)", 
              // The "Real Stories" Gradient
              background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.15))"
            }}
          >
            <span style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>GROVV</span>{" "}
            <span style={{ fontWeight: 300, letterSpacing: "0.02em" }}>STUDIOS</span>
          </motion.h1>

          <div 
            className="absolute inset-0 w-full h-full pointer-events-none animate-shine"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
              mixBlendMode: "overlay", 
            }}
          />
        </div>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 md:mb-12 mx-auto max-w-2xl text-gray-600 px-2"
          style={{ fontSize: "1.125rem", lineHeight: "1.6", fontWeight: 400 }}
        >
          We assist brands with professional <strong className="font-semibold text-gray-900">Video Editing</strong>,{" "}
          <strong className="font-semibold text-gray-900">AI Automation</strong>, and{" "}
          <strong className="font-semibold text-gray-900">Social Media Growth</strong>. 
        </motion.h2>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          // Buttons stack on mobile, side-by-side on desktop.
          // CRITICAL: Removed 'w-full' from buttons to keep them normal size.
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4"
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group animate-btn-pulse-wait px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-2xl flex justify-center items-center"
            style={{
              // Matches Headline Gradient
              background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
              color: "white",
              fontWeight: 600
            }}
          >
            <span className="flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => {
              const workSection = document.getElementById("work"); 
              workSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 text-gray-700 font-medium hover:bg-gray-50 border border-gray-200"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
            }}
          >
            View Our Work
          </button>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          // Mobile: mt-12. Desktop: mt-20 (Restores the big gap you liked).
          className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-2"
        >
          {[
            { value: 150, suffix: "+", label: "Projects Delivered" },
            { value: 50, suffix: "+", label: "Happy Clients" },
            { value: 15, suffix: "+", label: "Team Members" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
                border: "1px solid rgba(102, 126, 234, 0.2)",
                boxShadow: "0 10px 20px -10px rgba(0,0,0,0.05)"
              }}
            >
              <div
                className="mb-1"
                style={{
                  fontSize: "2.5rem", 
                  fontWeight: "700",
                  // Matches Headline Gradient
                  background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.1))"
                }}
              >
                <NumberTicker value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
