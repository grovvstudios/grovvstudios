import { motion, useScroll, useTransform } from "framer-motion";

export function PremiumBackground() {
  // 1. Capture the scroll position
  const { scrollY } = useScroll();

  // 2. Parallax Physics
  // As you scroll 0px -> 2000px, these values change
  // creating the feeling that the blobs are floating at different depths.
  const y1 = useTransform(scrollY, [0, 2000], [0, 300]);   // Moves DOWN
  const y2 = useTransform(scrollY, [0, 2000], [0, -400]);  // Moves UP (Fast)
  const y3 = useTransform(scrollY, [0, 2000], [0, 200]);   // Moves DOWN (Slow)
  
  // Subtle rotation for extra life
  const rotate1 = useTransform(scrollY, [0, 2000], [0, 90]);
  const rotate2 = useTransform(scrollY, [0, 2000], [0, -45]);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-white overflow-hidden pointer-events-none">
      
      {/* ORB 1: TOP LEFT (The "Royal" Anchor) 
        Deep Indigo/Blue. Moves down slowly.
      */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-[80px] opacity-70"
      >
        <div className="w-full h-full bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full" />
      </motion.div>

      {/* ORB 2: MIDDLE RIGHT (The Counter-Weight) 
        Vibrant Blue. Moves UP against the scroll direction.
      */}
      <motion.div 
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[90px] opacity-60"
      >
        <div className="w-full h-full bg-gradient-to-bl from-blue-400 to-indigo-500 rounded-full" />
      </motion.div>

      {/* ORB 3: BOTTOM LEFT (The Depth)
        Soft Violet. Moves down very slowly.
      */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full mix-blend-multiply filter blur-[100px] opacity-50"
      >
        <div className="w-full h-full bg-gradient-to-tr from-[#a78bfa] to-[#818cf8] rounded-full" />
      </motion.div>

      {/* PREMIUM NOISE OVERLAY 
        Essential for avoiding "color banding" and making it look like film.
      */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}
      />
    </div>
  );
}
