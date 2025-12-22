import { motion, useScroll, useTransform } from "framer-motion";

export function PremiumBackground() {
  // 1. Track global scroll progress
  const { scrollY } = useScroll();

  // 2. Define "Parallax Speeds"
  // When you scroll 0px to 2000px...
  // y1 moves down 400px (Slow)
  // y2 moves UP 300px (Counter-movement creates depth)
  // y3 moves down 200px (Very slow)
  const y1 = useTransform(scrollY, [0, 2000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 200]);
  
  // Optional: Rotate the top orb slowly as you scroll
  const rotate1 = useTransform(scrollY, [0, 2000], [0, 180]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-50 bg-slate-50 pointer-events-none">
      
      {/* ORB 1: Top Left (Deep Purple/Indigo) - Moves Down */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[-10%] left-[-10%] w-[70vh] h-[70vh] rounded-full opacity-50 mix-blend-multiply filter blur-[90px]"
      >
        <div className="w-full h-full bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full" />
      </motion.div>

      {/* ORB 2: Middle Right (Cyan/Blue) - Moves UP */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[40%] right-[-15%] w-[60vh] h-[60vh] rounded-full opacity-50 mix-blend-multiply filter blur-[100px]"
      >
        <div className="w-full h-full bg-gradient-to-bl from-blue-300 to-cyan-200 rounded-full" />
      </motion.div>

      {/* ORB 3: Bottom Left (Pink/Rose) - Moves Down Slowly */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute bottom-[-20%] left-[10%] w-[50vh] h-[50vh] rounded-full opacity-50 mix-blend-multiply filter blur-[100px]"
      >
        <div className="w-full h-full bg-gradient-to-tr from-pink-300 to-rose-300 rounded-full" />
      </motion.div>

      {/* NOISE TEXTURE: Adds "tactile" premium feel, prevents color banding */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}
      />
    </div>
  );
}
