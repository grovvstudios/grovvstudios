import { motion } from "motion/react";
import { Play, ArrowRight, X } from "lucide-react";
import { useState } from "react";

// 👇 THESE POINT TO YOUR PUBLIC FOLDER VIDEOS
const videos = [
  {
    id: 1,
    title: "Brand Commercial",
    category: "Advertisement",
    videoSrc: "/videos/brand-campaign.mp4", // Refers to public/videos/video1.mp4
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop", 
  },
  {
    id: 2,
    title: "Product Showcase",
    category: "Social Media Reel",
    videoSrc: "/videos/product-showcase.mp4", // Refers to public/videos/video2.mp4
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Event Highlights",
    category: "Corporate",
    videoSrc: "/videos/social-reel.mp4", // Refers to public/videos/video3.mp4
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
  }
];

export function VideoShowcase() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    // ✅ NO ID HERE (Handled by App.tsx)
    <section className="py-24 bg-black text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full text-sm bg-white/10 border border-white/10 backdrop-blur-md">
            Our Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Visuals That Speak<br />Louder Than Words
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            High-impact video production designed to stop the scroll and engage your audience.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl"
            >
              {playingVideo === video.id ? (
                <div className="relative w-full h-full">
                  <video
                    src={video.videoSrc}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    playsInline
                  />
                  {/* Close Button */}
                  <button 
                    onClick={() => setPlayingVideo(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors z-20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setPlayingVideo(video.id)}
                >
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-medium text-blue-400 mb-2 block tracking-wider uppercase">
                      {video.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {video.title}
                    </h3>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://youtube.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
