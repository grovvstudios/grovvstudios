import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ethan Walker",
    role: "Founder",
    company: "UrbanEdge Interiors",
    image: "https://api.dicebear.com/7.x/adventurer/png?size=160&seed=Ethan",
    rating: 5,
    text: "Honestly, I was skeptical at first. But within 2 months of working with Grovv Studios, our Instagram engagement tripled and we started getting actual leads from social media. The team just gets it - they understand what works in the Indian market. Best decision we made for our interior design business.",
  },
  {
    name: "Olivia Monroe",
    role: "CEO",
    company: "FitLife Wellness Co.",
    image: "https://api.dicebear.com/7.x/adventurer/png?size=160&seed=Olivia",
    rating: 5,
    text: "I've worked with 3 different agencies before Grovv, and none of them came close. What impressed me most? They actually care about ROI, not just vanity metrics. Our website conversions are up 187% and we're ranking on page 1 for all our target keywords. These guys are the real deal.",
  },
  {
    name: "Ryan Carter",
    role: "Director",
    company: "TechBridge Solutions",
    image: "https://api.dicebear.com/7.x/adventurer/png?size=160&seed=Ryan",
    rating: 5,
    text: "The AI calling agent they built for us is insane. It handles our first-level customer queries 24/7 and actually sounds natural. We've cut our support costs by 60% while improving response times. My only regret is not finding Grovv Studios sooner!",
  },
  {
    name: "Sarah Bennett",
    role: "Co-Founder",
    company: "BloomBox Gifting",
    image: "https://api.dicebear.com/7.x/adventurer/png?size=160&seed=Sarah",
    rating: 5,
    text: "We needed a complete rebrand and these folks delivered beyond expectations. From logo to packaging to our entire digital presence - everything feels cohesive and premium now. Our average order value increased by 40% after the rebrand. Worth every rupee and more.",
  },
  {
    name: "Logan Reid",
    role: "Managing Partner",
    company: "GreenLeaf Organics",
    image: "https://api.dicebear.com/7.x/adventurer/png?size=160&seed=Logan",
    rating: 5,
    text: "What sets them apart is the communication and transparency. Weekly reports, quick responses, and they actually explain things in simple terms instead of technical jargon. Our GMB optimization brought in so many walk-ins that we had to hire 2 more staff members. Can't recommend them enough!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);

  // super-smooth slide + fade
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 12 : -12,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 12 : -12,
      opacity: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // auto-slide
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm">
            Trusted by Growing Businesses
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-4"
            style={{
              fontWeight: "700",
              background:
                "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Real Results,
            <br />
            Real Stories
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say.
          </p>
        </motion.div>

        {/* Slider */}
        <div
          className="relative px-4 md:px-0 md:h-[380px] flex md:items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white rounded-3xl p-6 md:p-12 w-full relative overflow-hidden flex flex-col md:h-full"
              style={{
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.04)",
                backdropFilter: "blur(4px)",
              }}
            >
              {/* glow circle */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-indigo-100 opacity-60"
                initial={{ scale: 0.9, opacity: 0.4 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <Quote className="absolute top-8 right-8 w-16 h-16 text-indigo-200" />

              <div className="relative z-10 max-w-3xl mx-auto flex flex-col justify-between gap-6 flex-1">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[currentIndex].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-base md:text-xl leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-2">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover grovv-avatar flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-gray-900 font-semibold truncate">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[currentIndex].role},{" "}
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-indigo-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

