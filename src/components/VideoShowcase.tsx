import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Brand Campaign",
    // Replace with your actual video URLs
    src: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4", 
  },
  {
    id: 2,
    title: "Social Media Reel",
    src: "https://assets.mixkit.co/videos/preview/mixkit-tree-branches-in-the-breeze-1188-large.mp4",
  },
  {
    id: 3,
    title: "Product Showcase",
    src: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2408-large.mp4",
  }
];

export function VideoShowcase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
       {/* Background Decoration similar to your Contact section */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
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
            Recent Productions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Hover over the videos to listen to the audio experience.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video, index }: { video: any, index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      // Optional: Smoothly reset volume to 1
      videoRef.current.volume = 1.0; 
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
      className="relative group rounded-3xl overflow-hidden shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        // Matching your glassmorphism card style
        border: "1px solid rgba(102, 126, 234, 0.2)",
      }}
    >
      <div className="aspect-[9/16] md:aspect-[4/5] w-full relative bg-gray-100">
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          autoPlay
          muted
          loop
          playsInline
        />
        
        {/* Overlay Gradient (Optional: makes text readable) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Sound Indicator */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white transition-all duration-300">
          {isHovered ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-6 left-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-xl font-bold">{video.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
