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
    // MASTER FIX:
    // 1. Removed 'justify-center'. We now use 'pt-48' (mobile) and 'md:pt-52' (laptop).
    //    This forces content to start LOWER down the page, guaranteeing visibility.
    // 2. 'overflow-visible': This ensures the 3 boxes are NEVER cut off at the bottom.
    // 3. 'z-10': Ensures this whole section sits correctly in the stack.
    <section className="relative w-full overflow-visible flex flex-col items-center px-4 pt-48 pb-32 md:pt-52 md:pb-48 z-10">
      
      <style>{`
        @keyframes shine-sweep {
          0% { transform: translateX(-150%) skewX(-25deg); }
          30% { transform: translateX(150%) skewX(-25deg); } 
          100% { transform: translateX(150%) skewX(-25deg); } 
        }
        .animate-shine {
          animation: shine-sweep 8s ease-in-out infinite;
        }
        @keyframes border-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-border-spin {
          animation: border-spin 4s linear infinite;
        }
      `}</style>

      {/* Main Content Container */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* BADGE: Guaranteed to be visible because of the parent padding */}
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
          <span className="text-sm text-gray-600 font-medium">
            Elevate your Brand, GROVV with us
          </span>
        </motion.div>

        {/* HEADLINE: Tightened Gap */}
        <div className="relative mb-8 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-label="Grovv Studios"
            // FIX: 'tracking-tight' pulls letters closer. 
            // Removed extra spacing between words.
            className="font-bold leading-[1.1] tracking-tight flex flex-wrap justify-center gap-x-3 md:gap-x-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(3rem, 9vw, 6rem)", 
              background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.15))"
            }}
          >
            {/* Split into two spans for perfect control */}
            <span className="font-black tracking-tighter">GROVV</span>
            <span className="font-light tracking-wide">STUDIOS</span>
          </motion.h1>

          <div 
            className="absolute inset-0 w-full h-full pointer-events-none animate-shine"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
              mixBlendMode: "overlay", 
            }}
          />
        </div>

        {/* SUBHEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 max-w-2xl text-gray-600 text-lg md:text-xl font-normal leading-relaxed px-4"
        >
          We assist brands with professional <strong className="text-gray-900 font-semibold">Video Editing</strong>,{" "}
          <strong className="text-gray-900 font-semibold">AI Automation</strong>, and{" "}
          <strong className="text-gray-900 font-semibold">Social Media Growth</strong>.
        </motion.h2>

        {/* BUTTONS: Normal Size, Side-by-Side on Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4"
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 flex justify-center items-center gap-2 min-w-[180px]"
            style={{
              background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
            }}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-2xl text-gray-700 font-medium bg-white/80 border-2 border-indigo-100 hover:bg-gray-50 transition-all duration-300 hover:scale-105 min-w-[180px]"
          >
            View Our Work
          </button>
        </motion.div>

        {/* STATS BOXES: High Z-Index to prevent hiding */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          // FIX: 'z-50' forces these boxes on top of everything.
          // 'mt-20': Adds the breathing room you wanted.
          className="relative z-50 mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4"
        >
          {[
            { value: 150, suffix: "+", label: "Projects Delivered" },
            { value: 50, suffix: "+", label: "Happy Clients" },
            { value: 15, suffix: "+", label: "Team Members" },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative aspect-square md:aspect-auto md:h-64 flex flex-col items-center justify-center rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300 bg-white"
              style={{
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" // Standard shadow, no spinner needed if it complicates view
              }}
            >
              {/* Optional: Add back the animated border here if desired, but keeping it clean for now to ensure visibility */}
              <div 
                className="absolute inset-0 rounded-3xl border-2 border-indigo-50" 
              />
              
              <div
                className="mb-2 text-5xl md:text-6xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
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
