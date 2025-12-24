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
    // FIX 1: Adjusted Padding
    // Mobile: 'pt-40' (Clear Navbar)
    // Laptop: 'md:pt-64' (Reduced from 96 to prevent pushing content off-screen)
    // FIX 2: 'z-10' on section, but we'll give stats higher priority
    <section className="relative w-full overflow-visible min-h-[100dvh] md:min-h-screen flex flex-col justify-start md:justify-center items-center px-4 pt-40 pb-20 md:px-6 md:pt-64 md:pb-40">
      
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
          className="flex flex-col md:flex-row gap-4 justify-center w-full md:w-auto px-4"
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group animate-btn-pulse-wait px-8 py-4 rounded-2xl transition
