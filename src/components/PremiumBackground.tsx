import { motion, useScroll, useTransform } from "framer-motion";

export function PremiumBackground() {
  const { scrollY } = useScroll();

  // Parallax Physics: Stronger movement range
  const y1 = useTransform(scrollY, [0, 2000], [0, 400]); 
  const y2 = useTransform(scrollY, [0, 2000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 200]);
  
  const rotate1 = useTransform(scrollY, [0, 2000], [0, 180]);
  const rotate2 = useTransform(scrollY, [0, 2000], [0, -180]);

  return (
    // Removed 'bg-white' from here so it doesn't block itself. 
    // Added 'bg-slate-50' as a base layer if needed, or keep transparent.
    <div className="fixed inset-0 w-full h-full -z-50 bg-slate-50 overflow-hidden pointer-events-none">
      
      {/* ORB 1: TOP LEFT (Royal Blue) */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full filter blur-[100px] opacity-60"
      >
        <div className="w-full h-full bg-gradient-to-br from-[#4f46e5] to-[#3b82f6] rounded-full" />
      </motion.div>

      {/* ORB 2: MIDDLE RIGHT (Vibrant Violet) */}
      <motion.div 
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-[30%] right-[-15%] w-[600px] h-[600px] rounded-full filter blur-[120px] opacity-60"
      >
        <div className="w-full h-full bg-gradient-to-bl from-[#8b5cf6] to-[#6366f1] rounded-full" />
      </motion.div>

      {/* ORB 3: BOTTOM LEFT (Deep Indigo) */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute bottom-[-20%] left-[10%] w-[700px] h-[700px] rounded-full filter blur-[100px] opacity-60"
      >
        <div className="w-full h-full bg-gradient-to-tr from-[#312e81] to-[#4338ca] rounded-full" />
      </motion.div>

      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}
      />
    </div>
  );
}
