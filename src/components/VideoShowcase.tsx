import { motion } from "motion/react";
import { useRef } from "react";

// 👇 ENSURE THESE MATCH YOUR FILENAMES IN public/videos/
const videos = [
  {
    id: 1,
    title: "Brand Commercial",
    category: "Advertisement",
    videoSrc: "/public/videos/brand-campaign.mp4", // Refers to public/videos/video1.mp4
    },
  {
    id: 2,
    title: "Product Showcase",
    category: "Social Media Reel",
    videoSrc: "/public/videos/product-showcase.mp4", // Refers to public/videos/video2.mp4
   },
  {
    id: 3,
    title: "Event Highlights",
    category: "Corporate",
    videoSrc: "/public/videos/social-reel.mp4", // Refers to public/videos/video3.mp
  }
];

export function VideoShowcase() {
  
  // Helper to handle mute/unmute
  const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.muted = false;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.muted = true;
  };

  return (
    // ID handled by App.tsx, so we don't need it here
    <section className="py-24 bg-black text-white relative overflow-hidden">
      
      {/* Background Ambience */}
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
        </motion.div>

        {/* 9:16 Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Video Container with Hover Effects */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900 
                              transition-all duration-500 ease-out 
                              group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(124,58,237,0.5)] 
                              group-hover:border-purple-500/50 z-0 group-hover:z-10 aspect-[9/16]">
                
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted // Starts muted
                  playsInline
                  onMouseEnter={handleMouseEnter} // Unmute on hover
                  onMouseLeave={handleMouseLeave} // Mute on leave
                />

                {/* Optional: Text Overlay that fades out on hover so video is clear? 
                    Or stays? I'll keep it subtle at the bottom. */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                  <span className="text-xs font-medium text-blue-400 mb-1 block tracking-wider uppercase">
                    {video.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {video.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
