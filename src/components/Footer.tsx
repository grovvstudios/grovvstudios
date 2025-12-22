import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-6 relative overflow-hidden bg-white">
      {/* Background Decoration Line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            
            {/* --- UPDATED LOGO: Matches Founders.tsx Style --- */}
            <div 
              className="text-3xl mb-4"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "800", // Logo stays bold/extra bold
                background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)", // Same gradient as Founders
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.15))" // Same soft shadow
              }}
            >
              GROVV STUDIOS
            </div>
            {/* ------------------------------------------------ */}

            <p className="text-gray-500 mb-6 max-w-md leading-relaxed">
              Creating extraordinary digital experiences that elevate brands and captivate audiences.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/rathertafheem" },
                { Icon: Instagram, href: "https://www.instagram.com/grovvstudios" }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md group"
                  style={{
                    background: "white",
                    border: "1px solid rgba(102, 126, 234, 0.2)",
                  }}
                >
                  <Icon className="w-5 h-5 text-gray-500 group-hover:text-purple-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="mb-6 text-gray-900" style={{ fontWeight: "600" }}>Quick Links</h4>
            <ul className="space-y-3">
              {["Work", "Process", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-purple-600 transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="mb-6 text-gray-900" style={{ fontWeight: "600" }}>Services</h4>
            <ul className="space-y-3">
              {["Digital Marketing", "Website Dev", "AI Agents", "Branding"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-500 hover:text-purple-600 transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Grovv Studios. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
