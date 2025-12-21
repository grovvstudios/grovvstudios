import { motion } from "framer-motion";

const founders = [
  {
    name: "Tafheem Irshad", // Your Name
    role: "Co-Founder & Director",
    // This uses a placeholder. Replace 'src' with your actual image path later, e.g., "/tafheem.jpg"
    image: "https://ui-avatars.com/api/?name=Tafheem+Irshad&background=random&size=200", 
    description: "Driving the vision and strategy behind Grovv Studios."
  },
  {
    name: "Co-Founder Name", // Replace with actual name
    role: "Co-Founder",
    image: "https://ui-avatars.com/api/?name=Co+Founder&background=random&size=200",
    description: "Leading creative direction and execution."
  },
  {
    name: "Co-Founder Name", // Replace with actual name
    role: "Co-Founder",
    image: "https://ui-avatars.com/api/?name=Co+Founder&background=random&size=200",
    description: "Spearheading technology and operations."
  }
];

export function Founders() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      {/* HEADER: Matches the "density" of other section headers */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight"
      >
        The Minds Behind Grovv
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors"
          >
            {/* IMAGE CIRCLE */}
            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <img 
                src={founder.image} 
                alt={founder.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT CONTENT */}
            <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
            <p className="text-purple-400 font-medium mb-3">{founder.role}</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {founder.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
