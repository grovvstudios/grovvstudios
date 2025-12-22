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
      
      {/* ORB 1: Top Left (Royal Blue/Indigo) - Matches your new Logo */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[-10%] left-[-10%] w-[70vh] h-[70vh] rounded-full opacity-40 mix-blend-multiply filter blur-[90px]"
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full" />
      </motion.div>

      {/* ORB 2: Middle Right (Cyan/Blue) - Adds a 'Cool' highlight */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[40%] right-[-15%] w-[60vh] h-[60vh] rounded-full opacity-40 mix-blend-multiply filter blur-[100px]"
      >
        <div className="w-full h-full bg-gradient-to-bl from-cyan-200 to-blue-300 rounded-full" />
      </motion.div>

      {/* ORB 3: Bottom Left (Deep Violet) - Adds depth */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute bottom-[-20%] left-[10%] w-[50vh] h-[50vh] rounded-full opacity-40 mix-blend-multiply filter blur-[100px]"
      >
        <div className="w-full h-full bg-gradient-to-tr from-violet-300 to-indigo-300 rounded-full" />
      </motion.div>

      {/* NOISE TEXTURE: Adds "tactile" premium feel, prevents color banding */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}
      />
    </div>
  );
}
