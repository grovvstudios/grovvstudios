import { motion, useScroll, useTransform } from "framer-motion";

export function PremiumBackground() {
  const { scrollY } = useScroll();

  // Movement speeds
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const rotate1 = useTransform(scrollY, [0, 2000], [0, 360]);

  return (
    // DARK BASE COLOR: #0f172a (Deep Slate Blue)
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-50 bg-[#0f172a] pointer-events-none">
      
      {/* ORB 1: Purple Glow - Moves Down */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-40 blur-[100px]"
      >
        <div className="w-full h-full bg-purple-600 rounded-full" />
      </motion.div>

      {/* ORB 2: Cyan/Blue Glow - Moves Up */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
      >
        <div className="w-full h-full bg-blue-500 rounded-full" />
      </motion.div>

      {/* ORB 3: Deep Pink Bottom */}
      <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] rounded-full opacity-20 bg-pink-600 blur-[100px]" />

      {/* Noise Texture for Premium Feel */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }}
      />
    </div>
  );
}
