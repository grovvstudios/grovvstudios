import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    title: "Brand Campaign",
    src: "/brand-campaign.mp4", // Make sure these match your files in public
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
    <section className="py-32 px-6 relative overflow-hidden bg-white">
       {/* Background Decoration */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none"
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
          className="text-center mb-20"
        >
          <h2 
            className="mb-4"
            style={{ 
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              fontWeight: "700",
              background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Featured Shorts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Hover to expand and unmute.
          </p>
        </motion.div>

        {/* THE MAGIC "GROUP" CLASS IS HERE:
          When we hover this container, 'group-hover' triggers on all children.
        */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 group">
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
        relative rounded-[2rem] overflow-hidden shadow-2xl
        transition-all duration-500 ease-out
        
        /* DEFAULT STATE */
        w-[300px] h-[533px] flex-shrink-0 bg-black border border-indigo-100

        /* PARENT HOVER STATE (When user hovers ANY video, all do this): */
        group-hover:blur-[2px] 
        group-hover:scale-[0.85]
        group-hover:opacity-60
        group-hover:grayscale-[0.5]

        /* SELF HOVER STATE (Overrides the parent hover for THIS specific video): */
        hover:!blur-none 
        hover:!scale-[1.1] 
        hover:!opacity-100 
        hover:!grayscale-0
        hover:z-50
        hover:shadow-[0_20px_80px_rgba(102,126,234,0.4)]
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
        absolute top-6 right-6 z-30 
        bg-black/30 backdrop-blur-md p-3 rounded-full text-white 
        transition-all duration-300 border border-white/10
        ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
      `}>
        {isHovered ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </div>

      {/* Title */}
      <div className={`
        absolute bottom-8 left-6 right-6 z-30 text-white 
        transition-all duration-500
        ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
      `}>
          <h3 className="text-xl font-bold leading-tight">{video.title}</h3>
      </div>
    </motion.div>
  );
}
