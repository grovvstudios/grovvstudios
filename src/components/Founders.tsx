import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

// ---------------------------------------------------------
// Imports
// ---------------------------------------------------------
import tafheemImg from "../assets/tafheem.jpg";
import ayaanImg from "../assets/ayaan.jpeg";

// --- THE ROYAL GRADIENT (Reusable) ---
const ROYAL_GRADIENT = "linear-gradient(135deg, rgb(26, 26, 46) 0%, rgb(102, 126, 234) 50%, rgb(118, 75, 162) 100%)";
// Single color for hover state
const HOVER_COLOR = "#667eea"; 

const founders = [
  {
    name: "Tafheem Irshad",
    role: "Co-Founder & Director",
    image: tafheemImg,
    bio: "The strategic visionary behind Grovv Studios. Tafheem bridges the gap between creative concepts and scalable business growth.",
    linkedin: "https://www.linkedin.com/in/rathertafheem"
  },
  {
    name: "Ayaan Umer",
    role: "Creative Director",
    image: ayaanImg,
    bio: "Leading the design philosophy and ensuring our visual output resonates on a psychological level.",
    linkedin: "https://www.linkedin.com/in/ayaan-bhat-423546310/"
  }
];

export function Founders() {
  return (
    // Restored larger padding (py-24)
    <section className="py-24 relative overflow-hidden">
      
      {/* CSS for the "Breathing" Border Animation */}
      <style>{`
        @keyframes border-breathe {
          0% { border-color: rgba(102, 126, 234, 0.2); box-shadow: 0 0 0 0 rgba(102, 126, 234, 0); }
          50% { border-color: rgba(102, 126, 234, 0.5); box-shadow: 0 0 15px rgba(102, 126, 234, 0.15); }
          100% { border-color: rgba(102, 126, 234, 0.2); box-shadow: 0 0 0 0 rgba(102, 126, 234, 0); }
        }
        .animate-border-breathe {
          animation: border-breathe 4s ease-in-out infinite;
        }
      `}</style>

      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-300/30 blur-[120px] rounded-full mix-blend-multiply" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-300/30 blur-[120px] rounded-full mix-blend-multiply" />
         <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-200/40 blur-[100px] rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADLINE */}
        // Restored larger margin (mb-20)
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="mb-6 text-4xl md:text-5xl lg:text-6xl"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "400",
                color: "#1f2937",
                letterSpacing: "-0.02em",
              }}
            >
              The Minds Behind <span style={{ 
                fontWeight: "700",
                background: ROYAL_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.15))"
              }}>Grovv</span>
            </h2>
            
            <p 
              className="max-w-2xl mx-auto text-gray-600"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1.125rem",
                lineHeight: "1.6"
              }}
            >
              We are the architects of digital influence. Experts dedicated to your exponential growth.
            </p>
          </motion.div>
        </div>

        {/* FOUNDERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
              // Restored the breathing animation class and larger padding
              className="group relative flex flex-col items-center text-center transition-all duration-500 h-full animate-border-breathe"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: "rgba(255, 255, 255, 0.9)", 
                backdropFilter: "blur(24px)", 
                WebkitBackdropFilter: "blur(24px)",
                border: "2px solid rgba(102, 126, 234, 0.2)", 
                borderRadius: "2.5rem",
                padding: "3rem 2rem",
                boxShadow: "0 20px 50px -10px rgba(30, 64, 175, 0.05)"
              }}
            >
              
              <div className="relative mb-8">
                <div className="absolute -inset-6 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full opacity-0 group-hover:opacity-70 blur-2xl transition-opacity duration-500" />
                
                {/* Restored larger image container size (w-48 h-48) and normal scale */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg z-10 transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 
                className="text-2xl font-bold mb-3 text-gray-900 relative z-10"
                style={{ letterSpacing: "-0.01em" }}
              >
                {founder.name}
              </h3>
              
              <div className="mb-6 relative z-10">
                <span 
                  className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
                  style={{
                    background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                    color: HOVER_COLOR,
                    border: "1px solid rgba(102, 126, 234, 0.2)"
                  }}
                >
                  {founder.role}
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-8 relative z-10 flex-grow max-w-sm">
                {founder.bio}
              </p>

              {/* FIX: Simplified LinkedIn Button (No background circle) */}
              <a 
                href={founder.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 text-gray-400 transition-colors duration-300 hover:text-[#667eea] p-2"
              >
                <Linkedin size={24} />
              </a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
