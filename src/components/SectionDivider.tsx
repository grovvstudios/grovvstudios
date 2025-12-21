import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    // Changed py-24 to py-8 to remove the huge gaps
    <div className="relative w-full py-8 flex items-center justify-center overflow-hidden">
      
      {/* 1. Stronger Glow behind the line */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 h-[2px] bg-purple-500/30 blur-md" />
      </div>

      {/* 2. The Visible Line (Brighter) */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-80"
      />

      {/* 3. The Central Jewel (Matches site aesthetic) */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring" }}
        className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(168,85,247,1)] z-10"
      />
    </div>
  );
}
