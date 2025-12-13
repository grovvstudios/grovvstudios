import { ArrowLeft, Play, Sparkles } from "lucide-react";

export function VideoGallery() {
  // ------------------------------------------------------
  // ADD ALL YOUR VIDEOS HERE
  // ------------------------------------------------------
  // Instructions:
  // 1. Upload video to YouTube.
  // 2. Look at the URL: youtube.com/watch?v=dQw4w9WgXcQ
  // 3. Copy the code after 'v=' (e.g., dQw4w9WgXcQ)
  // 4. Paste it into 'videoId' below.
  
  const allVideos = [
    { id: 1, title: "Commercial Ad", category: "Ad Production", videoId: "dQw4w9WgXcQ" },
    { id: 2, title: "Instagram Reel", category: "Short Form", videoId: "dQw4w9WgXcQ" },
    { id: 3, title: "Documentary", category: "Long Form", videoId: "dQw4w9WgXcQ" },
    { id: 4, title: "Product Promo", category: "Motion Graphics", videoId: "dQw4w9WgXcQ" },
    { id: 5, title: "Real Estate", category: "Business", videoId: "dQw4w9WgXcQ" },
    { id: 6, title: "Podcast Clip", category: "Social Media", videoId: "dQw4w9WgXcQ" },
    { id: 7, title: "Travel Vlog", category: "Personal", videoId: "dQw4w9WgXcQ" },
    { id: 8, title: "Gaming Edit", category: "Fun", videoId: "dQw4w9WgXcQ" },
    { id: 9, title: "Corporate Interview", category: "Business", videoId: "dQw4w9WgXcQ" },
    { id: 10, title: "Music Video", category: "Creative", videoId: "dQw4w9WgXcQ" },
    // You can add more rows here...
  ];

  return (
    <section className="relative min-h-screen bg-gray-50 px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 bg-white border border-gray-200">
              <Play className="w-3 h-3 text-[#667eea]" />
              <span className="text-xs text-[#667eea] font-medium">
                Full Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              All Projects
            </h1>
            <p className="text-xl text-gray-600">
              Explore our complete collection of edits and productions.
            </p>
          </div>

          <button
            onClick={() => (window.location.hash = "")}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 hover:border-[#667eea] hover:text-[#667eea] transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        {/* Full Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="relative aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-[#667eea] mb-1 uppercase">
                  {video.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* "Get Connected" Call to Action */}
        <div className="mt-24 py-16 px-6 text-center bg-white rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#667eea] to-[#764ba2]" />
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to create something amazing?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss your vision and how we can bring it to life.
            </p>
            
            <button
                onClick={() => {
                    // Redirects to main page AND scrolls to contact section
                    window.location.hash = "#contact"; 
                }}
                className="group inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
                <Sparkles className="w-5 h-5" />
                Get Connected
            </button>
        </div>
      </div>
    </section>
  );
}
