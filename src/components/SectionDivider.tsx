import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="w-full py-16 flex justify-center items-center overflow-hidden">
      <motion.div 
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "80%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ 
          height: '2px', 
          maxWidth: '1000px',
          // The exact Grovv Gradient
          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(118, 75, 162, 0.4) 50%, rgba(255,255,255,0) 100%)',
        }} 
      />
    </div>
  );
}
