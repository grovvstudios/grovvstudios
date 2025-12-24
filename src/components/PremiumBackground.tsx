import { motion, useScroll, useTransform } from "framer-motion";

export function PremiumBackground() {
  const { scrollY } = useScroll();

  // Refined parallax — subtle, premium, non-distracting
  const y1 = useTransform(scrollY, [0, 2000], [0, 160]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -220]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 120]);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none">
      
      {/* ORB 1: TOP LEFT (Royal Blue → Purple) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full mix-blend-multiply blur-[110px] opacity-60 hidden md:block"
      >
        <div className="w-full h-full bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full" />
      </motion.div>

      {/* ORB 2: MIDDLE RIGHT (Cyan → Indigo) */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] right-[-15%] w-[600px] h-[600px] rounded-full mix-blend-multiply blur-[130px] opacity-50 hidden md:block"
      >
        <div className="w-full h-full bg-gradient-to-bl from-blue-400 to-indigo-500 rounded-full" />
      </motion.div>

      {/* ORB 3: BOTTOM LEFT (Soft Violet) */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-10%] left-[10%] w-[800px] h-[800px] rounded-full mix-blend-multiply blur-[110px] opacity-40 hidden md:block"
      >
        <div className="w-full h-full bg-gradient-to-tr from-[#a78bfa] to-[#818cf8] rounded-full" />
      </motion.div>

      {/* Film grain / noise */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/noise.png")',
        }}
      />
    </div>
  );
}
