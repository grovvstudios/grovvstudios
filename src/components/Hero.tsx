import { ArrowRight, Sparkles } from "lucide-react";
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
      className="relative w-full md:min-h-screen px-4 md:px-6 pb-16 md:pb-32"
      style={{ paddingTop: "120px" }}
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
          0% { border-color: rgba(102,126,234,.2); }
          50% { border-color: rgba(102,126,234,.5); }
          100% { border-color: rgba(102,126,234,.2); }
        }
        .animate-border-breathe {
          animation: border-breathe 4s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

        {/* BADGE */}
        <div className="mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background:
                "linear-gradient(135deg, rgba(102,126,234,.05), rgba(118,75,162,.05))",
              border: "1px solid rgba(102,126,234,.15)",
              backdropFilter: "blur(10px)",
              color: "rgb(75,85,99)",
            }}
          >
            <Sparkles className="w-3 h-3 text-[#667eea]" />
            Elevate your brand • Grovv with us
          </div>
        </div>

        {/* HEADING */}
        <div className="mb-8 relative">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold leading-[1.05]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 6rem)",
              background:
                "linear-gradient(135deg, #1a1a2e, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span style={{ fontWeight: 900 }}>GROVV</span>{" "}
            <span style={{ fontWeight: 300 }}>STUDIOS</span>
          </motion.h1>

          <div
            className="absolute inset-0 pointer-events-none animate-shine"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,.6), transparent)",
              mixBlendMode: "overlay",
            }}
          />
        </div>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-14 max-w-3xl text-gray-600 text-lg"
        >
          We assist brands with professional{" "}
          <strong className="text-gray-900">Video Editing</strong>,{" "}
          <strong className="text-gray-900">AI Automation</strong>, and{" "}
          <strong className="text-gray-900">Social Media Growth</strong>.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 flex flex-col md:flex-row gap-4 w-full justify-center"
        >
          <button
            className="px-8 py-4 rounded-2xl text-white font-semibold hover:scale-105 transition"
            style={{
              background:
                "linear-gradient(135deg, #1a1a2e, #667eea, #764ba2)",
            }}
          >
            <span className="flex items-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </span>
          </button>

          <button className="px-8 py-4 rounded-2xl bg-white/80 border animate-border-breathe">
            View Our Work
          </button>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            { value: 150, label: "Projects Delivered" },
            { value: 50, label: "Happy Clients" },
            { value: 15, label: "Team Members" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl text-center animate-border-breathe"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,.9), rgba(255,255,255,.7))",
                border: "2px solid rgba(102,126,234,.2)",
              }}
            >
              <div
                className="text-5xl font-bold mb-1"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1a2e, #667eea, #764ba2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <NumberTicker value={stat.value} />+
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
