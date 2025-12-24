import { ArrowRight } from "lucide-react";
import {
  motion,
  useTransform,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

// --- STATS ANIMATION COMPONENT ---
function NumberTicker({ value }: { value: number }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useTransform(motionValue, (v) => Math.round(v));
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 1.5,
        ease: "easeOut",
      });
      return () => controls.stop();
    } else {
      motionValue.set(0);
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{springValue}</motion.span>;
}

export function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center px-4 md:px-6 pb-32"
      style={{
        paddingTop: "120px", // 🔥 FIX — pushes hero below fixed navbar
      }}
    >
      <style>{`
        @keyframes shine-sweep {
          0% { transform: translateX(-150%) skewX(-25deg); }
          30% { transform: translateX(150%) skewX(-25deg); }
          100% { transform: translateX(150%) skewX(-25deg); }
        }
        .animate-shine {
          animation: shine-sweep 8s ease-in-out infinite;
        }

        @keyframes border-breathe {
          0% { border-color: rgba(102, 126, 234, 0.2); }
          50% { border-color: rgba(102, 126, 234, 0.5); }
          100% { border-color: rgba(102, 126, 234, 0.2); }
        }
        .animate-border-breathe {
          animation: border-breathe 4s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* HEADLINE */}
        <div className="relative mb-8 inline-block">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold leading-[1.1] tracking-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 6rem)",
              background:
                "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span style={{ fontWeight: 900 }}>GROVV</span>{" "}
            <span style={{ fontWeight: 300 }}>STUDIOS</span>
          </motion.h1>

          <div
            className="absolute inset-0 animate-shine pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
              mixBlendMode: "overlay",
            }}
          />
        </div>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 max-w-3xl text-gray-600 text-lg"
        >
          We assist brands with professional{" "}
          <strong className="text-gray-900">Video Editing</strong>,{" "}
          <strong className="text-gray-900">AI Automation</strong>, and{" "}
          <strong className="text-gray-900">Social Media Growth</strong>.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <button
            className="px-8 py-4 rounded-2xl text-white font-semibold hover:scale-105 transition"
            style={{
              background:
                "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
            }}
          >
            <span className="flex items-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </span>
          </button>

          <button className="px-8 py-4 rounded-2xl border animate-border-breathe">
            View Our Work
          </button>
        </motion.div>

        {/* STATS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            { value: 150, label: "Projects Delivered" },
            { value: 50, label: "Happy Clients" },
            { value: 15, label: "Team Members" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl text-center border animate-border-breathe"
            >
              <div className="text-5xl font-bold mb-1">
                <NumberTicker value={stat.value} />+
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
