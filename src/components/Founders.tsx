import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

// ---------------------------------------------------------
// Imports
// ---------------------------------------------------------
import tafheemImg from "../assets/tafheem.jpg";
const partner1Img = "https://ui-avatars.com/api/?name=Partner+1&background=f3e8ff&color=764ba2&size=200";
const partner2Img = "https://ui-avatars.com/api/?name=Partner+2&background=f3e8ff&color=764ba2&size=200";

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
    image: partner2Img, 
    bio: "Leading the design philosophy and ensuring our visual output resonates on a psychological level.",
    linkedin: "https://www.linkedin.com/in/ayaan-bhat-423546310/"
  }
];

export function Founders() {
  return (
    // Changed bg-white to bg-slate-50 for a premium off-white base
    <section className="py-24 relative overflow-hidden bg-slate-50">
      
      {/* =========================================================
          PREMIUM BACKGROUND BLOBS (The "Visible Parallax" Effect)
         ========================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
         {/* Top Left - Blue/Purple */}
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-300/30 blur-[120px] rounded-full mix-blend-multiply" />
         
         {/* Bottom Right - Pink/Purple */}
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-300/30 blur-[120px] rounded-full mix-blend-multiply" />
         
         {/* Center - Cyan (Adds depth) */}
         <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-200/40 blur-[100px] rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADLINE */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                fontWeight: "400",
                background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.02em"
              }}
            >
              The Minds Behind <span style={{ fontWeight: "700" }}>Grovv</span>
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

        {/* GRID FIXES:
            1. items-stretch -> Forces all cards to be equal height
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -10 }} 
              // GLASS CARD STYLES
              // h-full -> Fills the stretched grid cell
              // bg-white/60 + backdrop-blur-xl -> The Glass Effect
              className="group relative flex flex-col items-center text-center transition-all duration-500 h-full"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: "rgba(255, 255, 255, 0.60)", // More transparent to show blobs
                backdropFilter: "blur(24px)", // Heavy frost
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.6)", // Shiny border
                borderRadius: "2.5rem",
                padding: "3rem 2rem",
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)"
              }}
            >
              
              {/* === FIXED IMAGE SIZING === 
                  Locked width and height to prevent "Too Big" issues 
              */}
              <div className="relative mb-8">
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Fixed Dimension Container: w-44 h-44 */}
                <div className="relative w-44 h-44 rounded-full overflow-hidden shadow-lg z-10 border-[6px] border-white/50">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* NAME & ROLE */}
              <h3 
                className="text-2xl font-bold mb-3 text-gray-900 relative z-10"
                style={{ letterSpacing: "-0.01em" }}
              >
                {founder.name}
              </h3>
              
              <div className="mb-6 relative z-10">
                <span className="px-4 py-1.5 rounded-full bg-white/80 border border-white text-purple-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                  {founder.role}
                </span>
              </div>

              {/* flex-grow pushes the icon to the bottom if bio is short */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8 relative z-10 flex-grow">
                {founder.bio}
              </p>

              {/* Social Proof Icon */}
              <a 
                href={founder.linkedin} 
                className="relative z-10 text-gray-400 hover:text-blue-600 transition-colors p-3 hover:bg-white rounded-full hover:shadow-md"
              >
                <Linkedin size={22} />
              </a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
