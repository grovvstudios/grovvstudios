import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    title: "Brand Campaign",
    src: "/brand-campaign.mp4",
  },
  {
    id: 2,
    title: "Social Media Reel",
    src: "/social-reel.mp4",
  },
  {
    id: 3,
    title: "Product Showcase",
    src: "/product-showcase.mp4",
  }
];

export function VideoShowcase() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
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
              fontSize: "clamp(2rem, 4vw, 3.5rem)", 
              fontWeight: "700",
              background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Featured Shorts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "1rem" }}>
            Hover to expand and unmute.
          </p>
        </motion.div>

        {/* CONTAINER 
            Fixed height ensures the section doesn't jitter when elements grow.
        */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 h-[500px]">
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
        
        /* DEFAULT STATE: Stable, no blur, medium size (250px) */
        w-[250px] h-[444px] flex-shrink-0 
        bg-black border border-indigo-100/50 
        shadow-lg transition-all duration-300 ease-out z-0

        /* HOVER STATE: Only THIS card changes */
        hover:scale-110 
        hover:z-50
        hover:border-indigo-300
        
        /* THE 'SEPARATION' SHADOW: Deep and dark to make it float */
        hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),0_0_20px_rgba(102,126,234,0.3)]
      "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={video.src}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Volume Icon */}
      <div className={`
        absolute top-4 right-4 z-30 
        bg-black/30 backdrop-blur-md p-2 rounded-full text-white 
        transition-all duration-300 border border-white/10
        ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
      `}>
        {isHovered ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </div>

      {/* Title */}
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
