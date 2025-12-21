import { motion } from "framer-motion";
import { Linkedin } from "lucide-react"; 

const founders = [
  {
    name: "Tafheem Irshad",
    role: "Co-Founder & Director",
    image: "public/images/tafheem.jpg", 
    bio: "The strategic visionary behind Grovv Studios. Tafheem bridges the gap between creative concepts and scalable business growth.",
    linkedin: "https://www.linkedin.com/in/rathertafheem"
  },
  {
    name: "Co-Founder Name",
    role: "Head of Operations",
    image: "/partner1.jpg", 
    bio: "Orchestrating the workflows and ensuring every project is delivered with precision and excellence.",
    linkedin: "#"
  },
  {
    name: "Co-Founder Name",
    role: "Creative Director",
    image: "/partner2.jpg", 
    bio: "Leading the design philosophy and ensuring our visual output resonates on a psychological level.",
    linkedin: "#"
  }
];

export function Founders() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background: Subtle gradient blob for "Grovv Vibe" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/40 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADLINE SECTION */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* TYPOGRAPHY FIX: 
               1. Gradient applies to the WHOLE line (same color throughout).
               2. "The Minds Behind" is Regular (400).
               3. "Grovv" is Bold (700).
            */}
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                // Weight 400 = Regular for the main text
                fontWeight: "400", 
                // The exact Process Gradient applied to the whole text
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

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -12 }} 
              className="group relative bg-white rounded-[2rem] p-8 flex flex-col items-center text-center transition-all duration-500"
              style={{
                fontFamily: "'Poppins', sans-serif",
                boxShadow: "0 10px 40px -15px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.03)"
              }}
            >
              {/* Hover Shadow State */}
              <div 
                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "0 25px 60px -12px rgba(100, 80, 200, 0.15)" }} 
              />

              {/* IMAGE CONTAINER */}
              <div className="relative mb-8">
                {/* Rotating Gradient Ring */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-[4px] border-white shadow-lg z-10">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${founder.name.replace(' ', '+')}&background=f3e8ff&color=764ba2&size=200`;
                    }}
                  />
                </div>
              </div>

              {/* NAME & ROLE */}
              <h3 
                className="text-2xl font-bold mb-2 text-gray-900"
                style={{ letterSpacing: "-0.01em" }}
              >
                {founder.name}
              </h3>
              
              <div className="mb-6">
                <span className="px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider">
                  {founder.role}
                </span>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {founder.bio}
              </p>

              {/* Social Proof Icon */}
              <a href={founder.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
