import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

// ---------------------------------------------------------
// Imports
// ---------------------------------------------------------
import tafheemImg from "../assets/tafheem.jpg";
import ayaanImg from "../assets/ayaan.jpeg"; 

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
    <section className="py-24 relative overflow-hidden bg-slate-50">
      
      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-300/30 blur-[120px] rounded-full mix-blend-multiply" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-300/30 blur-[120px] rounded-full mix-blend-multiply" />
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
            {/* --- UPDATED HEADLINE: Dark Royal Gradient + Soft Shadow --- */}
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                fontWeight: "400", // Regular start
                // Dark Royal Gradient (Blackish -> Royal Blue -> Indigo)
                background: "linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #312e81 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.02em",
                // Soft Vertical Drop Shadow (No Glow)
                filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.15))" 
              }}
            >
              The Minds Behind <span style={{ fontWeight: "700" }}>Grovv</span>
            </h2>
            {/* ----------------------------------------------------------- */}
            
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
              whileHover={{ y: -10 }} 
              className="group relative flex flex-col items-center text-center transition-all duration-500 h-full"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: "rgba(255, 255, 255, 0.60)", 
                backdropFilter: "blur(24px)", 
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.6)", 
                borderRadius: "2.5rem",
                padding: "3rem 2rem",
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)"
              }}
            >
              
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative w-44 h-44 rounded-full overflow-hidden shadow-lg z-10 border-[6px] border-white/50">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
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
                <span className="px-4 py-1.5 rounded-full bg-white/80 border border-white text-purple-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                  {founder.role}
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-8 relative z-10 flex-grow">
                {founder.bio}
              </p>

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
