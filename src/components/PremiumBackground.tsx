import { motion, useScroll, useTransform } from "framer-motion";

export function PremiumBackground() {
  const { scrollY } = useScroll();

  // Parallax Physics: Orbs move at different speeds when you scroll
  const y1 = useTransform(scrollY, [0, 2000], [0, 300]);   // Moves DOWN
  const y2 = useTransform(scrollY, [0, 2000], [0, -400]);  // Moves UP (Fast)
  const y3 = useTransform(scrollY, [0, 2000], [0, 200]);   // Moves DOWN (Slow)
  
  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-slate-50 overflow-hidden pointer-events-none">
      
      {/* ORB 1: TOP LEFT (Royal Blue/Purple) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full mix-blend-multiply filter blur-[100px] opacity-60"
      >
        <div className="w-full h-full bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full" />
      </motion.div>

      {/* ORB 2: MIDDLE RIGHT (Cyan/Indigo) */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[40%] right-[-15%] w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-[120px] opacity-50"
      >
        <div className="w-full h-full bg-gradient-to-bl from-blue-400 to-indigo-500 rounded-full" />
      </motion.div>

      {/* ORB 3: BOTTOM LEFT (Soft Violet) */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute bottom-[-10%] left-[10%] w-[800px] h-[800px] rounded-full mix-blend-multiply filter blur-[100px] opacity-40"
      >
        <div className="w-full h-full bg-gradient-to-tr from-[#a78bfa] to-[#818cf8] rounded-full" />
      </motion.div>

      {/* Noise Texture (Makes it look like high-quality film) */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}
      />
    </div>
  );
}
