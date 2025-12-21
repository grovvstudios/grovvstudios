import { motion } from "motion/react";

export default function SectionDivider() {
  return (
    <div className="relative py-24 overflow-hidden flex items-center justify-center">
      <motion.div 
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="h-[1px] w-full max-w-5xl bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent"
      />
    </div>
  );
}
