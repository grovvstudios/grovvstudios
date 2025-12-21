import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    title: "Brand Campaign",
    src: "/videos/brand-campaign.mp4",
  },
  {
    id: 2,
    title: "Social Media Reel",
    src: "/videos/social-reel.mp4",
  },
  {
    id: 3,
    title: "Product Showcase",
    src: "/videos/product-showcase.mp4",
  }
];

export function VideoShowcase() {
  return (
    // REMOVED id="work" from here. It is now handled in App.tsx
    <section className="py-24 px-4 relative overflow-visible bg-white">
       {/* Background Decoration */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="mb-4"
            style={{ 
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              fontWeight: "800",
              background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em" 
            }}
          >
            Stop The Scroll.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto" style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
            In an ocean of noise, we create the signals that matter. <br className="hidden md:block"/>
            <span className="font-semibold text-[#667eea]">Hover to experience the difference.</span>
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {VIDEOS.map((video, index) => (
            <LocalVideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalVideoCard({ video, index }: { video: any, index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="
        relative rounded-2xl overflow-hidden
        flex-shrink-0 
        bg-black border border-indigo-100/50 
        transition-all duration-300 ease-out z-0

        /* HOVER EFFECTS */
        hover:scale-105 
        hover:z-50
        hover:border-indigo-300
      "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "280px",
        height: "500px",
        maxWidth: "90vw",
        boxShadow: isHovered 
          ? "0 30px 60px -10px rgba(0, 0, 0, 0.6)" 
          : "0 10px 30px -5px rgba(0, 0, 0, 0.3)"
      }}
    >
      <video
        ref={videoRef}
        src={video.src}
        className="w-full h-full object-cover block" 
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className={`
        absolute top-4 right-4 z-30 
        bg-black/30 backdrop-blur-md p-2 rounded-full text-white 
        transition-all duration-300 border border-white/10
        ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
      `}>
        {isHovered ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </div>

      <div className={`
        absolute bottom-6 left-5 right-5 z-30 text-white 
        transition-all duration-300
        ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
      `}>
          <h3 className="text-lg font-bold leading-tight">{video.title}</h3>
      </div>
    </motion.div>
  );
}
