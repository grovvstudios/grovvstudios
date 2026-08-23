function ServiceCard({ service, index }: { service: ServiceItem, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50]);

  const IconComponent = service.icon;
  const hasDiscount = service.originalPrice !== null;

  // SAFE PRICE PARSER: Extracts the first numeric value safely without crashing on ranges or formatting
  const parseNumericPrice = (priceStr: string | null): number => {
    if (!priceStr) return 0;
    const match = priceStr.match(/[\d,]+/);
    return match ? parseFloat(match[0].replace(/,/g, '')) : 0;
  };

  const currentPriceNum = parseNumericPrice(service.price);
  const originalPriceNum = parseNumericPrice(service.originalPrice);

  const savings = (hasDiscount && originalPriceNum > 0)
    ? Math.round((1 - currentPriceNum / originalPriceNum) * 100)
    : 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y }}
      className="mb-8 last:mb-0"
    >
      <div className="max-w-4xl mx-auto relative">
        <div
          className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
        >
          {/* Badge */}
          {service.badge && (
            <div className="absolute top-6 right-6 px-3 py-1 bg-indigo-600 text-white text-xs rounded-full">
              {service.badge}
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Icon & Title */}
            <div className="flex-shrink-0">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: service.gradient,
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
                }}
              >
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5</span>
              </div>
            </div>

            {/* Middle: Content */}
            <div className="flex-grow">
              <h3 className="text-2xl md:text-3xl mb-2" style={{ fontWeight: "600" }}>
                {service.title}
              </h3>
              <p className="text-indigo-600 mb-3" style={{ fontWeight: "500" }}>
                {service.tagline}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group/btn"
                style={{
                  background: ROYAL_GRADIENT,
                }}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right: Pricing */}
            <div className="flex-shrink-0 text-right md:text-left md:min-w-[180px]">
              {hasDiscount && (
                <div className="mb-2">
                  <span className="text-gray-400 line-through text-lg">
                    {service.originalPrice}
                  </span>
                  <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Save {savings}%
                  </span>
                </div>
              )}
              <div className="text-4xl md:text-5xl text-gray-900 mb-1" style={{ fontWeight: "700" }}>
                {service.price}
              </div>
              <div className="text-gray-500">{service.period}</div>
              
              {index === 0 && (
                <div className="mt-4 text-xs text-orange-600 bg-orange-50 px-3 py-2 rounded-lg inline-block">
                  Only 2 spots left
                </div>
              )}
            </div>
          </div>

          {/* Decorative gradient */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-50 to-transparent rounded-full -mr-32 -mb-32 opacity-50 pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
}
