import { Lightbulb, Pencil, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Lightbulb,
    title: "Discover",
    description: "We dive deep into your vision, goals, and target audience.",
    // Use consistent gradient backgrounds for icons
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    icon: Pencil,
    title: "Design",
    description: "Creating stunning visuals and user experiences.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    icon: Code2,
    title: "Develop",
    description: "Building robust, scalable digital solutions.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploying and optimizing for maximum impact.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
];

export function Process() {
  return (
    <section className="py-32 px-6 relative bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* --- UPDATED HEADLINE START --- */}
          <h2 
            className="mb-4"
            style={{ 
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              fontWeight: "400", // Regular
              color: "#1f2937", // Dark Gray
            }}
          >
            Our <span style={{ 
              fontWeight: "700", // Bold
              background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)", // Matching Gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.15))" // Soft Shadow
            }}>Process</span>
          </h2>
          {/* --- UPDATED HEADLINE END --- */}

          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            A proven methodology that delivers exceptional results every time
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2"
            style={{
              background: "linear-gradient(90deg, #667eea 0%, #f093fb 25%, #4facfe 50%, #43e97b 100%)",
              opacity: 0.2,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  {/* Number Badge */}
                  <div className="relative inline-block mb-6">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                      style={{
                        background: step.gradient,
                        boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
                      }}
                    >
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Step Number */}
                    <div
                      className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-white"
                      style={{
                        background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 100%)",
                        fontSize: "0.875rem",
                        fontWeight: "700",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <h3 
                    className="mb-3 text-gray-900"
                    style={{ fontSize: "1.5rem", fontWeight: "700" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
