import { motion, useScroll, useTransform } from "framer-motion";

export function PremiumBackground() {
  const { scrollY } = useScroll();

  // MORE AGGRESSIVE MOVEMENT
  // When you scroll 1000px:
  // y1 moves DOWN 300px
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  // y2 moves UP 200px
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  // Rotation
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 90]);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-[#0f172a] overflow-hidden pointer-events-none">
      
      {/* ORB 1: Top Left (Purple/Indigo) */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full opacity-40 blur-[80px]"
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full" />
      </motion.div>

      {/* ORB 2: Middle Right (Blue/Cyan) */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[40%] right-[-5%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full opacity-30 blur-[90px]"
      >
        <div className="w-full h-full bg-gradient-to-bl from-blue-500 to-cyan-400 rounded-full" />
      </motion.div>

      {/* ORB 3: Bottom Left (Pink) - Static Anchor */}
      <div className="absolute bottom-[-10%] left-[10%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full opacity-20 bg-pink-600 blur-[100px]" />

      {/* NOISE OVERLAY - Adds texture */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}
      />
    </div>
  );
}
