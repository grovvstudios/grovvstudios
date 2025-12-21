import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative w-full py-24 flex items-center justify-center overflow-hidden">
      {/* The Glow Effect behind the line */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm" />
      </div>

      {/* The Actual Visible Line */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
      />

      {/* The Central Anchor Dot - Psychology: Gives the eye a focal point */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10"
      />
    </div>
  );
}
