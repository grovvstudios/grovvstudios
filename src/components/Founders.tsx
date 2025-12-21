import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";

// --- DATA: ONLY 2 FOUNDERS ---
const FOUNDERS = [
  {
    name: "Tafheem Irshad",
    role: "The Vision Architect",
    archetype: "STRATEGIST",
    // Psychologically persuasive bio
    bio: "I don't just build campaigns; I engineer movements. Obsessed with the psychology of attention and the mathematics of scale.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    image: "/images/tafheem.jpg", // <--- THIS IS WHERE YOUR PHOTO GOES
  },
  {
    name: "Co-Founder Name",
    role: "The Visual Alchemist",
    archetype: "CREATOR",
    bio: "Translating raw emotion into pixels. While others edit for retention, I edit for resonance. Your brand doesn't need more content; it needs a soul.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    image: "/images/founder2.jpg", // Placeholder until they send you their photo
  },
];

function FounderCard({ member, index }: { member: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
      className="relative w-full max-w-md mx-auto group perspective-1000"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[500px] rounded-[2rem] bg-white border border-gray-100 shadow-2xl overflow-hidden"
      >
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background: member.gradient }}
        />
        
        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            {/* Top */}
            <div className="flex justify-between items-start">
                <div className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest bg-black/5 text-gray-600 uppercase">
                    {member.archetype}
                </div>
                {/* Image Circle */}
                <div 
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-200"
                  style={{ 
                    backgroundImage: `url(${member.member?.image || member.image})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#e5e7eb' // Fallback gray color if image missing
                  }}
                />
            </div>

            {/* Middle: Bio - Fonts matched to Hero */}
            <div className="mt-8">
                <h3 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
                    {member.name}
                </h3>
                <p className="text-sm font-bold text-indigo-600 mb-6 uppercase tracking-wide">
                    {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed text-base font-medium">
                    "{member.bio}"
                </p>
            </div>

            {/* Bottom: Socials */}
            <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                <button className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                </button>
                <button className="p-2 rounded-full bg-gray-50 hover:bg-black/5 text-gray-400 hover:text-black transition-colors">
                    <Twitter size={20} />
                </button>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Founders() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{
                    background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                }}
            >
                The Minds Behind Grovv.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                Two specialists. One obsession. Zero compromise.
            </p>
        </motion.div>

        {/* Grid - Centered for 2 people */}
        <div className="flex flex-wrap justify-center gap-10">
            {FOUNDERS.map((founder, index) => (
                <div key={index} className="w-full md:w-[45%]">
                     <FounderCard member={founder} index={index} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
