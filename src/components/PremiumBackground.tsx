import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PremiumBackground() {
  const containerRef = useRef(null);
  
  // 1. Track the scroll position of the entire page
  const { scrollY } = useScroll();

  // 2. Create "Parallax Speeds". 
  // When user scrolls 1000px, these elements move different amounts.
  // Negative values move UP, Positive move DOWN.
  const y1 = useTransform(scrollY, [0, 2000], [0, 400]);   // Moves slow down
  const y2 = useTransform(scrollY, [0, 2000], [0, -300]);  // Moves slow up
  const y3 = useTransform(scrollY, [0, 2000], [0, 200]);   // Moves very slow down
  const rotate1 = useTransform(scrollY, [0, 2000], [0, 180]); // Rotates as you scroll

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden -z-50 bg-slate-50"
    >
      {/* PREMIUM ORB 1: Top Left (Purple/Indigo)
        Moves DOWN slowly as you scroll
      */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[-10%] left-[-10%] w-[70vh] h-[70vh] rounded-full opacity-60 mix-blend-multiply filter blur-[80px]"
      >
        <div className="w-full h-full bg-gradient-to-br from-indigo-300 to-purple-300 opacity-70 rounded-full" />
      </motion.div>

      {/* PREMIUM ORB 2: Middle Right (Blue/Cyan)
        Moves UP slowly (Counter-movement creates depth)
      */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[40%] right-[-10%] w-[60vh] h-[60vh] rounded-full opacity-60 mix-blend-multiply filter blur-[90px]"
      >
        <div className="w-full h-full bg-gradient-to-bl from-blue-300 to-cyan-200 opacity-70 rounded-full" />
      </motion.div>

      {/* PREMIUM ORB 3: Bottom Left (Pink/Rose)
        Moves DOWN gently
      */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute bottom-[-20%] left-[20%] w-[50vh] h-[50vh] rounded-full opacity-60 mix-blend-multiply filter blur-[100px]"
      >
        <div className="w-full h-full bg-gradient-to-tr from-pink-300 to-rose-200 opacity-70 rounded-full" />
      </motion.div>

      {/* PREMIUM TEXTURE OVERLAY
        Adds a very subtle grain to prevent "banding" and make it feel tactile
      */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
    </div>
  );
}
