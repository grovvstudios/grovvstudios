import { Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div 
              className="text-3xl mb-4"
              style={{ 
                fontWeight: "700",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              GROVV STUDIOS
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Creating extraordinary digital experiences that elevate brands and captivate audiences.
            </p>
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
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                    border: "1px solid rgba(102, 126, 234, 0.2)",
                  }}
                >
                  <Icon className="w-5 h-5 text-gray-700" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: "600" }}>Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-[#667eea] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: "600" }}>Services</h4>
            <ul className="space-y-2">
              {["DIGITAL MARKETING", "WEBSITE DEV", "AI AGENTS", "Branding"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-[#667eea] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 GROVV STUDIOS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-[#667eea] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-[#667eea] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}