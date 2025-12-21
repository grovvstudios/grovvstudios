// FILE: src/components/VideoShowcase.tsx
import { motion } from "motion/react";
import { Play } from "lucide-react";

export function VideoShowcase() {
  return (
    // This ID matches the "Work" link in your Navbar
    <section id="work" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Recent Work
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            See how we help brands stand out with high-impact visuals and editing.
          </p>
        </motion.div>

        {/* Video Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
              viewport={{ once: true }}
              className="aspect-[9/16] bg-gray-900 rounded-2xl border border-gray-800 relative group overflow-hidden cursor-pointer"
            >
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-lg font-bold">Client Project {item}</h3>
                  <p className="text-sm text-gray-300">Short Form Content</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
