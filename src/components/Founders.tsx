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
    <div className="relative w-full max-w-7xl mx-auto px-6 py-12">
      {/* Subtle Background Glow for this section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-900/20 blur-[100px] rounded-full -z-10" />

      <div className="text-center mb-16">
        {/* HEADLINE: Matches Hero Section Density */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white"
        >
          The Minds Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Grovv</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto text-lg font-medium"
        >
          Architects of digital influence. Dedicated to your exponential growth.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group relative bg-[#0f111a] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-purple-500/50 transition-all duration-300 shadow-lg"
          >
            {/* Image Halo Effect */}
            <div className="relative mb-6 w-36 h-36">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={founder.image} 
                alt={founder.name}
                className="relative w-full h-full rounded-full object-cover border-4 border-[#0f111a] shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${founder.name.replace(' ', '+')}&background=random&size=200`;
                }}
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{founder.name}</h3>
            <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
               <p className="text-purple-300 font-semibold text-xs uppercase tracking-wider">{founder.role}</p>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {founder.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
