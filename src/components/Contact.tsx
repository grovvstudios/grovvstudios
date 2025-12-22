import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xkgdbzra", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `New inquiry from ${formData.name} - ${formData.projectType}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* --- UPDATED HEADLINE: Matches Founders.tsx exactly --- */}
          <h2 
            className="mb-4"
            style={{ 
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              fontWeight: "400", // Regular base
              background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)", // Specific Gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
              filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.15))" // Soft Vertical Shadow
            }}
          >
            Let's <span style={{ fontWeight: "700" }}>Grovv Together.</span>
          </h2>
          {/* ----------------------------------------------------- */}

          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Ready to start your next project? Get in touch and let's make something amazing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)",
              border: "1px solid rgba(102, 126, 234, 0.2)",
              boxShadow: "0 20px 60px rgba(102, 126, 234, 0.15)",
            }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:border-[#667eea] transition-colors"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:border-[#667eea] transition-colors"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXXXXXX"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:border-[#667eea] transition-colors"
                />
              </div>

             <div>
                <label className="block mb-2 text-gray-700">Service Interested In</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:border-[#667eea] transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="Consultation">1-on-1 Consultation</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Video Production">Video Production</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Google My Business">Google My Business Optimization</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="AI Workflow Automation">AI Workflow & Calling Agents</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Personal & Brand Branding">Personal & Brand Branding</option>
                  <option value="Other">Other</option>
                </select>
            </div>

              <div>
                <label className="block mb-2 text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:border-[#667eea] transition-colors resize-none"
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            {[
              {
                icon: Mail,
                title: "Email",
                content: "grovvstudios@gmail.com",
                gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+91 9906303013 +91 9103109107",
                gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "Srinagar, J&K, 190018, India",
                gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%)",
                    border: "1px solid rgba(102, 126, 234, 0.2)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: item.gradient,
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1" style={{ fontWeight: "600" }}>
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
