import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// --- Helper: Count-Up Animation Component ---
function NumberTicker({ value }: { value: number }) {
  const ref = useRef(null);
  // FIX: 'once: true' ensures it runs immediately on load
  const isInView = useInView(ref, { once: true, margin: "0px" });
  
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Hero() {
  return (
    // MASTER LAYOUT:
    // 1. 'justify-start': Content starts from top (pushed by spacer).
    // 2. 'overflow-visible': Stats boxes will never be cut off.
    <section className="relative w-full overflow-visible min-h-screen flex flex-col items-center px-4 md:px-6 pb-32">
      
      <style>{`
        @keyframes shine-sweep {
          0% { transform: translateX(-150%) skewX(-25deg); }
          30% { transform: translateX(150%) skewX(-25deg); } 
          100% { transform: translateX(150%) skewX(-25deg); } 
        }
        .animate-shine {
          animation: shine-sweep 8s ease-in-out infinite;
        }

        /* THE "BREATHING" BORDER ANIMATION */
        @keyframes border-breathe {
          0% { border-color: rgba(102, 126, 234, 0.2); box-shadow: 0 0 0 0 rgba(102, 126, 234, 0); }
          50% { border-color: rgba(102, 126, 234, 0.5); box-shadow: 0 0 15px rgba(102, 126, 234, 0.15); }
          100% { border-color: rgba(102, 126, 234, 0.2); box-shadow: 0 0 0 0 rgba(102, 126, 234, 0); }
        }
        .animate-border-breathe {
          animation: border-breathe 4s ease-in-out infinite;
        }
      `}</style>

      {/* --- THE SPACER --- 
          - Mobile: h-28 (112px)
          - Desktop: md:h-40 (160px)
          Guarantees content starts below navbar, but not too far down.
      */}
      <div className="w-full h-28 md:h-40 flex-shrink-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* 1. THE PSYCHOLOGIST LINE (BADGE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            border: "1px solid rgba(102, 126, 234, 0.2)",
          }}
        >
          <Sparkles className="w-4 h-4 text-[#667eea]" />
          <span className="text-sm text-gray-600 font-medium tracking-wide">
            We Architect Digital Influence
          </span>
        </motion.div>

        {/* 2. HEADLINE */}
        <div className="relative mb-8 inline-block max-w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-label="Grovv Studios"
            className="relative overflow-hidden font-bold leading-[1.1] tracking-tight whitespace-normal md:whitespace-nowrap"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 6rem)", 
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

        {/* 3. THE HOOK (SUB-HEADLINE) */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 mx-auto max-w-3xl text-gray-600 px-4"
          style={{ fontSize: "1.125rem", lineHeight: "1.6", fontWeight: 400 }}
        >
          We turn passive viewers into a loyal community. By blending <strong className="text-gray-900 font-semibold">Human Psychology</strong> with <strong className="text-gray-900 font-semibold">AI Automation</strong>, we scale your brand without the chaos.
        </motion.h2>

        {/* 4. BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center w-full px-4"
        >
          {/* Start Project */}
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex justify-center items-center w-full md:w-auto min-w-[200px]"
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

          {/* View Work (Breathing Border) */}
          <button
            onClick={() => {
              const workSection = document.getElementById("work"); 
              workSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 text-gray-700 font-medium bg-white/80 hover:bg-gray-50 w-full md:w-auto min-w-[200px] animate-border-breathe"
            style={{
              border: "2px solid rgba(102, 126, 234, 0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            View Our Work
          </button>
        </motion.div>

        {/* 5. STATS CARDS (Breathing Border + Immediate Count) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-50 mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-2"
        >
          {[
            { value: 150, suffix: "+", label: "Projects Delivered" },
            { value: 50, suffix: "+", label: "Happy Clients" },
            { value: 15, suffix: "+", label: "Team Members" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center animate-border-breathe"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
                border: "2px solid rgba(102, 126, 234, 0.2)",
              }}
            >
              <div
                className="mb-1"
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
