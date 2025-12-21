import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Work", "Services", "Process", "Testimonials", "Contact"];

  const getNavLink = (item: string) => {
    switch (item) {
      case "Work":         return "#work";     
      case "Services":     return "#services"; 
      case "Process":      return "#process";
      case "Testimonials": return "#testimonials";
      case "Contact":      return "#contact";
      default:             return "#";
    }
  };

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      {/* ... rest of your Navbar code ... */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 py-4 rounded-2xl backdrop-blur-md"
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(102, 126, 234, 0.2)",
            boxShadow: "0 10px 40px rgba(102, 126, 234, 0.1)",
          }}
        >
          <div className="flex items-center justify-between px-[-4px] py-[-37px] mx-[13px] my-[0px]">
            {/* Logo - NOW CLICKABLE */}
            <div 
              onClick={scrollToTop} // <--- Added Click Handler
              className="text-lg md:text-2xl cursor-pointer hover:opacity-80 transition-opacity" // <--- Added cursor-pointer
              style={{ 
                fontWeight: "700",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              VV
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={getNavLink(item)}
                  className="text-gray-700 hover:text-[#667eea] transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-2 space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={getNavLink(item)}
                      className="block py-2 text-gray-700 hover:text-[#667eea] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                  <a href="#contact">
                    <button
                      className="w-full mt-4 px-6 py-2 rounded-xl text-white transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </button>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </nav>
  );
}
