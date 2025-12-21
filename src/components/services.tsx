      "Super Dynamic Website: ₹75,000",
      "E-Commerce Website: Starting from ₹85,000",
      "Mobile responsive & SEO optimized"
    ],
    badge: "Best Value",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    icon: Award,
    title: "Personal & Brand Branding",
    price: "₹1,50,000",
    originalPrice: null,
    period: "starting",
    tagline: "Build a brand that lasts",
    description: "Complete personal and brand identity with professional studio support, scripts, analytics, and everything needed for world-class branding.",
    features: [
      "Brand strategy & positioning",
      "Visual identity & logo design",
      "Professional studio with gear",
      "Custom scripts & content",
      "Analytics & messaging support",
      "Complete brand guidelines",
      "Marketing collateral & launch"
    ],
    badge: "Premium",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
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
