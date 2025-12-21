import { motion } from "framer-motion";

const founders = [
  {
    name: "Tafheem Irshad",
    role: "Co-Founder & Director",
    image: "/tafheem.jpg", 
    bio: "The strategic visionary behind Grovv Studios. Tafheem bridges the gap between creative concepts and scalable business growth."
  },
  {
    name: "Co-Founder Name",
    role: "Head of Operations",
    image: "/partner1.jpg", 
    bio: "Orchestrating the workflows and ensuring every project is delivered with precision and excellence."
  },
  {
    name: "Co-Founder Name",
    role: "Creative Director",
    image: "/partner2.jpg", 
    bio: "Leading the design philosophy and ensuring our visual output resonates on a psychological level."
  }
];

export function Founders() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-24">
      {/* Background Decor element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-900/10 blur-[100px] rounded-full -z-10" />

      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* HEADLINE: EXACT match to your Process component styles */}
          <h2 
            className="mb-4"
            style={{ 
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              fontWeight: "700",
              background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Minds Behind Grovv
          </h2>

          {/* SUB-HEADLINE: Matched size to 1.125rem as per your code */}
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            We are the architects of digital influence. Dedicated to your exponential growth.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -15 }}
            className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 via-purple-500/0 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Image Container */}
            <div className="relative mb-8 w-40 h-40">
              {/* Rotating Ring on Hover */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30 animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <img 
                src={founder.image} 
                alt={founder.name}
                className="relative w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                // Fallback if image fails to load
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${founder.name.replace(' ', '+')}&background=random&size=200`;
                }}
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
            <p className="text-purple-400 font-medium text-sm tracking-widest uppercase mb-5">{founder.role}</p>
            
            <p className="text-gray-300 leading-relaxed text-sm">
              {founder.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
