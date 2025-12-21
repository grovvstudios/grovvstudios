import { motion } from "motion/react";

export default function SectionDivider() {
  return (
    <div className="relative w-full py-16 flex items-center justify-center overflow-hidden">
      {/* The Line */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "circOut" }}
        viewport={{ once: true }}
        className="h-[2px] w-full max-w-4xl rounded-full"
        style={{
             background: "linear-gradient(90deg, transparent 0%, rgba(102, 126, 234, 0.5) 50%, transparent 100%)"
        }}
      />
    </div>
  );
}
