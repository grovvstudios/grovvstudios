import { motion } from "framer-motion";

const founders = [
  {
    name: "Tafheem Irshad",
    role: "Co-Founder & Director",
    // ⚠️ TEMPORARY: Using a web image to prove the layout works.
    // Once this works, change this back to: "/tafheem.jpg"
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=400&h=400", 
    bio: "The strategic visionary behind Grovv Studios. Tafheem bridges the gap between creative concepts and scalable business growth."
  },
  {
    name: "Co-Founder Name",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400", 
    bio: "Orchestrating the workflows and ensuring every project is delivered with precision and excellence."
  },
  {
    name: "Co-Founder Name",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=400&h=400", 
    bio: "Leading the design philosophy and ensuring our visual output resonates on a psychological level."
  }
];

export function Founders() {
  return (
    <section className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#1a1a1a' }} // Forced Black Color
          >
            The Minds Behind Grovv
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are the architects of digital influence. Dedicated to your exponential growth.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-white"
              style={{ 
                border: '1px solid #e5e7eb', // Forced Border
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' // Forced Shadow
              }}
            >
              {/* IMAGE */}
              <div className="mb-6 relative">
                <div 
                  className="w-40 h-40 rounded-full overflow-hidden"
                  style={{ border: '4px solid white', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}
                >
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* NAME & ROLE - Forced Colors */}
              <h3 
                className="text-2xl font-bold mb-2" 
                style={{ color: '#000000' }}
              >
                {founder.name}
              </h3>
              
              <span 
                className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
                style={{ background: '#f3e8ff', color: '#7e22ce' }}
              >
                {founder.role}
              </span>

              <p className="text-gray-600 leading-relaxed">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
