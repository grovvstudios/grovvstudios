import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function PremiumBackground() {
  // 1. Scroll Parallax
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -150]); // Moves up slowly as you scroll down

  // 2. Mouse Parallax Logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Use springs for smooth mouse movement (no jitter)
  const springConfig = { stiffness: 50, damping: 20 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate position relative to center of screen
      const { innerWidth, innerHeight } = window;
      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;
      
      // Update spring values (divide by 20 to make movement subtle)
      mouseX.set(x / 20);
      mouseY.set(y / 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-white overflow-hidden pointer-events-none">
      
      {/* LAYER 1: The Royal Gradient Blobs (Deep Background) 
        These provide that "Royal" atmosphere behind the dots 
      */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[40%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]" />
      </div>

      {/* LAYER 2: The Interactive Parallax Dots 
      */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          y: y, // Scroll movement
          x: mouseX, // Mouse movement X
          translateY: mouseY // Mouse movement Y
        }}
      >
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            // THE DOT PATTERN
            backgroundImage: `radial-gradient(#667eea 1.5px, transparent 1.5px)`,
            backgroundSize: "40px 40px", // Spacing between dots
            opacity: 0.7, // Requested 70% Opacity
            
            // Fade out edges so it doesn't look like a hard grid
            maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
          }}
        />
      </motion.div>

      {/* LAYER 3: Noise Texture 
        Adds that expensive "grainy" feel to the background 
      */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}
      />
    </div>
  );
}
