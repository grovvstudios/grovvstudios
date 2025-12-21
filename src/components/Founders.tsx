import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";

// --- DATA: EDIT THIS ---
const FOUNDERS = [
  {
    name: "Tafheem Irshad", // I put your name here
    role: "The Vision Architect",
    archetype: "STRATEGIST",
    bio: "I don't just build campaigns; I engineer movements. Obsessed with the psychology of attention and the mathematics of scale. I turn 'noise' into signal.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    image: "/images/founder1.jpg", // ⚠️ Make sure to add images to public/images folder
  },
  {
    name: "Co-Founder Name",
    role: "The Visual Alchemist",
    archetype: "CREATOR",
    bio: "Translating raw emotion into pixels. While others edit for retention, I edit for resonance. Your brand doesn't need more content; it needs a soul.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    image: "/images/founder2.jpg",
  },
  {
    name: "Co-Founder Name",
    role: "The Systems Engineer",
    archetype: "OPERATOR",
    bio: "Chaos is just an unorganized opportunity. I build the invisible engines that make scaling effortless. You dream it, I make it run on autopilot.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    image: "/images/founder3.jpg",
  },
];

// --- 3D CARD COMPONENT ---
function FounderCard({ member, index }: { member: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-md mx-auto group"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[500px] rounded-[30px] bg-white border border-white/20 shadow-xl overflow-hidden"
      >
        {/* Abstract Background Gradient */}
        <div 
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{ background: member.gradient }}
        />
        
        {/* Content Container */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            {/* Top: Archetype Badge */}
            <div className="flex justify-between items-start">
                <div className="px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-black/5 text-black/60 uppercase">
                    {member.archetype}
                </div>
                {/* Placeholder Circle for Image */}
                <div 
                  className="w-20 h-20 rounded-full border-2 border-white shadow-lg bg-gray-200"
                  style={{ 
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
            </div>

            {/* Middle: Bio */}
            <div className="mt-8">
                <h3 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
                    {member.name}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 mb-6 uppercase tracking-wide">
                    {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                    "{member.bio}"
                </p>
            </div>

            {/* Bottom: Socials */}
            <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                <button className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                </button>
                <button className="p-2 rounded-full bg-gray-50 hover:bg-sky-50 text-gray-600 hover:text-sky-500 transition-colors">
                    <Twitter size={20} />
                </button>
                <div className="flex-grow" />
                <button className="group/btn flex items-center gap-2 text-sm font-bold text-gray-900">
                    Connect
                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Founders() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
            <h2 
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{
                    background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                The Minds Behind the Machine.
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                We aren't just an agency. We are a collective of obsession.
            </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
            {FOUNDERS.map((founder, index) => (
                <FounderCard key={index} member={founder} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
}
