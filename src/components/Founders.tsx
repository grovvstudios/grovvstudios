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
    linkedin: "#"
  },
  {
    name: "Co-Founder Name",
    role: "Head of Operations",
    image: partner1Img, 
    bio: "Orchestrating the workflows and ensuring every project is delivered with precision and excellence.",
    linkedin: "#"
  },
  {
    name: "Co-Founder Name",
    role: "Creative Director",
    image: partner2Img, 
    bio: "Leading the design philosophy and ensuring our visual output resonates on a psychological level.",
    linkedin: "#"
  }
];

export function Founders() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-50/50">
      
      {/* 1. BACKGROUND BLOBS (Crucial for Glass Effect) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
         {/* Purple Blob Left */}
         <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-300/30 blur-[120px] rounded-full" />
         {/* Blue Blob Right */}
         <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-300/30 blur-[120px] rounded-full" />
         {/* Pink Blob Center */}
         <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADLINE */}
        <div className="text-center mb-24">
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

        {/* GLASSMORPHISM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -15 }} 
              // GLASS STYLES:
              // bg-white/60 -> Semi-transparent white
              // backdrop-blur-xl -> The "Frost" effect
              // border-white/50 -> The shiny glass edge
              className="group relative flex flex-col items-center text-center transition-all duration-500"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: "rgba(255, 255, 255, 0.65)", // Glass Base
                backdropFilter: "blur(20px)", // The Blur
                WebkitBackdropFilter: "blur(20px)", // Safari Support
                border: "1px solid rgba(255, 255, 255, 0.8)", // Shiny Edge
                borderRadius: "3rem", // SUPER Rounded corners
                padding: "3rem 2rem",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07)" // Soft glass shadow
              }}
            >
              {/* Hover Glow (inside the glass) */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* IMAGE CONTAINER */}
              <div className="relative mb-8">
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl z-10 border-4 border-white">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* NAME & ROLE */}
              <h3 
                className="text-3xl font-bold mb-3 text-gray-900 relative z-10"
                style={{ letterSpacing: "-0.02em" }}
              >
                {founder.name}
              </h3>
              
              <div className="mb-6 relative z-10">
                <span className="px-5 py-2 rounded-full bg-white/80 border border-white text-purple-700 text-sm font-bold uppercase tracking-wider shadow-sm">
                  {founder.role}
                </span>
              </div>

              <p className="text-gray-600 text-base leading-relaxed mb-8 relative z-10">
                {founder.bio}
              </p>

              {/* Social Proof Icon */}
              <a 
                href={founder.linkedin} 
                className="relative z-10 text-gray-400 hover:text-blue-600 transition-colors p-3 hover:bg-white rounded-full hover:shadow-md"
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
