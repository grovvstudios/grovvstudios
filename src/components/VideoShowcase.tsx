import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

// REAL TEST IDs (Nature/Relaxing Shorts)
// Replace these with your own video IDs later.
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
            Hover to unmute. Experience our latest vertical content.
          </p>
        </motion.div>

        {/* Grid: Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

  // Helper to safely send commands to YouTube API
  const postCommand = (command: string, args: any[] = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: args }), 
        '*'
      );
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    postCommand('unMute');
    postCommand('setVolume', [100]);
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
      className="relative group rounded-[2rem] overflow-hidden shadow-2xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        // FORCE 9:16 ASPECT RATIO
        aspectRatio: "9 / 16",
        width: "100%",
        maxWidth: "350px", // Limits width so it looks like a phone
        background: "#000", // Black background prevents white flashes
        border: "1px solid rgba(102, 126, 234, 0.2)",
        boxShadow: "0 20px 60px rgba(102, 126, 234, 0.15)",
      }}
    >
      {/* YouTube Iframe 
        - Using youtube-nocookie.com to fix "Sign in" errors
        - playlist={videoId} is REQUIRED for looping to work
      */}
      <iframe
        ref={iframeRef}
        className="w-full h-full object-cover pointer-events-none scale-[1.35]" // scale-135 zooms in slightly to remove black bars if video isn't perfect 9:16
        src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.videoId}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`}
        title={video.title}
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
      />

      {/* Invisible Interaction Layer */}
      <div className="absolute inset-0 z-10 cursor-pointer" />

      {/* Dark Gradient Overlay (Fade in on Hover) */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Volume Icon */}
      <div className="absolute top-6 right-6 z-30 bg-black/30 backdrop-blur-md p-3 rounded-full text-white transition-all duration-300 border border-white/10">
        {isHovered ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </div>

      {/* Title (Appears on Hover) */}
      <div className="absolute bottom-8 left-6 right-6 z-30 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-xl font-bold leading-tight">{video.title}</h3>
      </div>
    </motion.div>
  );
}
      </div>
    </motion.div>
  );
}  
