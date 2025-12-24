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
    // FIX 1: Layout & Padding
    // - 'pt-40': Mobile padding (160px) to definitely clear the Navbar.
    // - 'md:pt-48': Desktop padding to keep it looking good.
    // - 'min-h-screen': Ensures full height.
    // - 'justify-start': Starts content from top so it doesn't get hidden behind navbar.
    // - 'overflow-visible': Ensures stats boxes aren't cut off.
    <section className="relative w-full overflow-visible min-h-screen flex flex-col justify-start items-center px-4 pt-40 pb-20 md:px-6 md:pt-48 md:pb-40">
      
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

        /* Pulse Animation - Removed scaling to prevent hover conflicts */
        @keyframes pulse-shadow {
          0% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(102, 126, 234, 0); }
          100% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0); }
        }
        .animate-btn-pulse {
          animation: pulse-shadow 2s infinite;
        }

        /* Spinning Gradient Border */
        @keyframes border-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-border-spin {
          animation: border-spin 4s linear infinite;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
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
        <div className="relative mb-8 inline-block max-w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-label="Grovv Studios"
            className="relative overflow-hidden font-bold leading-[1.1] tracking-tight whitespace-normal md:whitespace-nowrap"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)", 
              background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.15))"
            }}
          >
            <span className="inline-block">
              <span style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>GROVV</span>{" "}
              <span style={{ fontWeight: 300, letterSpacing: "0.02em" }}>STUDIOS</span>
            </span>
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
          className="mb-12 mx-auto max-w-2xl text-gray-600 px-2"
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
          // FIX 2: Layout
          // Stacked on mobile, Row on desktop
          className="flex flex-col md:flex-row gap-4 justify-center items-center w-full px-4"
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            // FIX 3: Button Sizing & Hover
            // - 'w-auto': Ensures buttons are NOT huge full-width bars.
            // - 'min-w-[200px]': Gives them a nice standard width.
            // - 'hover:scale-105': Restored scaling.
            // - Removed pulse animation from transform to fix conflict.
            className="group px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex justify-center items-center w-auto min-w-[200px]"
            style={{
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
            // Same fix here: w-auto and min-w
            className="px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 text-gray-700 font-medium hover:bg-gray-50 border border-gray-200 w-auto min-w-[200px]"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
            }}
          >
            View Our Work
          </button>
        </motion.div>

        {/* Stats cards (SQUARE + ANIMATED BORDER + VISIBLE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          // FIX 4: Visibility & Spacing
          // - 'z-20': Forces on top of other sections.
          // - 'mt-20': Spacing.
          // - 'grid-cols-1': Stacked on mobile.
          className="relative z-20 mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-2"
        >
          {[
            { value: 150, suffix: "+", label: "Projects Delivered" },
            { value: 50, suffix: "+", label: "Happy Clients" },
            { value: 15, suffix: "+", label: "Team Members" },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative aspect-square flex items-center justify-center rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              {/* Spinning Border Layer */}
              <div 
                className="absolute inset-[-50%] animate-border-spin"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0deg, #667eea 90deg, transparent 180deg, #764ba2 270deg, transparent 360deg)",
                  opacity: 0.7
                }}
              />
              
              {/* White Content Card */}
              <div 
                className="absolute inset-[2px] bg-white rounded-[22px] flex flex-col items-center justify-center p-6 z-10"
                style={{
                  boxShadow: "inset 0 0 20px rgba(102, 126, 234, 0.05)"
                }}
              >
                <div
                  className="mb-2"
                  style={{
                    fontSize: "3rem", 
                    fontWeight: "700",
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
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
