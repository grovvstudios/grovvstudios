import { Play, ArrowRight } from "lucide-react";

export function VideoPreview() {
  // ------------------------------------------------------
  // UPDATE THESE 3 VIDEOS FOR YOUR HOME PAGE
  // ------------------------------------------------------
  const featuredVideos = [
    {
      id: 1,
      title: "Brand Commercial",
      category: "Ad Production",
      videoId: "dQw4w9WgXcQ", // Replace with your YouTube ID
    },
    {
      id: 2,
      title: "Viral Reel",
      category: "Social Media",
      videoId: "dQw4w9WgXcQ", // Replace with your YouTube ID
    },
    {
      id: 3,
      title: "Cinematic Intro",
      category: "Motion Graphics",
      videoId: "dQw4w9WgXcQ", // Replace with your YouTube ID
    },
  ];

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 bg-blue-50 border border-blue-100">
            <Play className="w-3 h-3 text-[#667eea]" />
            <span className="text-xs text-[#667eea] font-medium">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Productions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into the quality we deliver.
          </p>
        </div>

        {/* 3 Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredVideos.map((video) => (
            <div
              key={video.id}
              className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white hover:-translate-y-1"
            >
              {/* Video Player */}
              <div className="relative aspect-[9/16] md:aspect-video bg-gray-900">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-[#667eea] mb-2 uppercase tracking-wider">
                  {video.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button
            onClick={() => {
              window.location.hash = "#gallery";
              window.scrollTo(0, 0);
            }}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-black text-white font-semibold transition-all hover:scale-105 hover:bg-gray-800"
          >
            View Complete Gallery
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
