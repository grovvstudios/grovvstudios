import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

// REPLACE THESE WITH YOUR YOUTUBE VIDEO IDs
// (The ID is the part after "v=" in the URL, e.g., youtube.com/watch?v=dQw4w9WgXcQ)
const VIDEOS = [
  {
    id: 1,
    title: "Brand Campaign",
    videoId: "Rxja1QAkKI ", // Example: Replace with your ID
  },
  {
    id: 2,
    title: "Social Media Reel",
    videoId: "faTDXV7RNlM", // Example: Replace with your ID
  },
  {
    id: 3,
    title: "Product Showcase",
    videoId: "UL8AZq3BAXo", // Example: Replace with your ID
  }
];

export function VideoShowcase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
       {/* Background Elements (Matching Contact.tsx) */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none"
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
            Featured Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Hover over the videos to hear the audio.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEOS.map((video, index) => (
            <YouTubeCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function YouTubeCard({ video, index }: { video: any, index: number }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Helper to send commands to YouTube Iframe API
  const postCommand = (command: string) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }), 
        '*'
      );
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    postCommand('unMute');
    // Ensure volume is up
    if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: 'setVolume', args: [100] }), 
            '*'
        );
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    postCommand('mute');
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
        // Exact styling from Contact.tsx for consistency
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)",
        border: "1px solid rgba(102, 126, 234, 0.2)",
        boxShadow: "0 20px 60px rgba(102, 126, 234, 0.15)",
      }}
    >
      <div className="aspect-[9/16] md:aspect-[4/5] w-full relative bg-black">
        
        {/* YouTube Iframe */}
        <iframe
          ref={iframeRef}
          className="w-full h-full object-cover pointer-events-none"
          src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.videoId}&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
          title={video.title}
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />

        {/* Interaction Layer (Captures Hover) */}
        <div className="absolute inset-0 z-10 cursor-pointer" />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Volume Icon */}
        <div className="absolute top-4 right-4 z-30 bg-white/20 backdrop-blur-md p-2 rounded-full text-white transition-all duration-300">
          {isHovered ? <Volume2 size={20} className="text-white" /> : <VolumeX size={20} className="text-gray-800 group-hover:text-white" />}
        </div>

        {/* Title */}
        <div className="absolute bottom-6 left-6 z-30 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-xl font-bold">{video.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}  
