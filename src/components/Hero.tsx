import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex justify-center overflow-hidden px-6 pt-28 pb-20 md:pt-32">
      {/* Background is handled by App.tsx */}

      {/* MAIN HERO CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto px-0 py-0 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            border: "1px solid rgba(102, 126, 234, 0.2)",
          }}
        >
          <Sparkles className="w-3 h-3" style={{ color: "#667eea" }} />
          <span className="text-xs">
            Elevate your Brand, GROVV with us
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 hero-wordmark whitespace-nowrap relative inline-block max-w-full"
          style={{
            fontSize: "clamp(1.8rem, 6vw, 4.5rem)", // small enough for mobile, big on desktop
            fontWeight: 700,
          }}
        >
          <span className="hero-wordmark-strong">GROVV</span>
          <span className="hero-wordmark-light"> STUDIOS</span>
          {/* Shine overlay */}
          <span className="grovv-wordmark-shine" />
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 mx-auto max-w-2xl text-gray-600"
          style={{ fontSize: "1.25rem", lineHeight: "1.8" }}
        >
          We craft extraordinary digital experiences that elevate brands and
          captivate audiences. From concept to creation, we bring your vision
          to life.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
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
            className="px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              border: "2px solid rgba(102, 126, 234, 0.3)",
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
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { number: "150+", label: "Projects Delivered" },
            { number: "50+", label: "Happy Clients" },
            { number: "15+", label: "Team Members" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
                border: "1px solid rgba(102, 126, 234, 0.2)",
                transform: "perspective(1000px) rotateX(2deg)",
              }}
            >
              <div
                className="mb-2"
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}