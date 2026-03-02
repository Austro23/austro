export interface Course {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Premium";
  category: "Web Development" | "Digital Marketing" | "SaaS & Business" | "AI & Automation" | "Make Money Online";
  duration: string;
  lessons: number;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  enrolled: number;
  topics: string[];
  image: string;
  badge?: string;
  urgency?: string;
  certification: string;
  subscriptionPrice?: number;
  paymentType?: "one-time" | "subscription" | "both";
  whopUrl: string;
}

export const allCourses: Course[] = [
  {
    id: "shopify-mastery",
    title: "Shopify Mastery — Build & Scale Your Store",
    description:
      "Master Shopify from zero to a fully automated, revenue-generating store. Learn theme customization, product sourcing, payment integration, conversion optimization, and scaling with Facebook & TikTok ads. Over 4,800 students have launched profitable stores with this course.",
    level: "Intermediate",
    category: "Web Development",
    duration: "10 weeks",
    lessons: 72,
    price: 79,
    originalPrice: 159,
    rating: 4.9,
    reviews: 534,
    enrolled: 4810,
    topics: ["Shopify", "Store Design", "Product Sourcing", "Facebook Ads", "Conversion Optimization"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    badge: "🛍️ Best Seller",
    urgency: "Only 15 spots left at this price",
    certification: "Certified Shopify Commerce Specialist",
    whopUrl: "https://whop.com/austro-shopify-mastery/",
  },
  {
    id: "digital-empire",
    title: "Digital Empire — Build Your Online Business",
    description:
      "The complete roadmap to building a thriving digital business. Learn to create digital products, build sales funnels, automate income streams, and scale to 6 figures. This is the exact system that's generated $10M+ for our community of entrepreneurs. Includes 1-on-1 mentorship.",
    level: "Premium",
    category: "Make Money Online",
    duration: "16 weeks",
    lessons: 120,
    price: 499,
    originalPrice: 999,
    subscriptionPrice: 49,
    paymentType: "both",
    rating: 5.0,
    reviews: 712,
    enrolled: 5200,
    topics: ["Digital Products", "Sales Funnels", "Automation", "Passive Income", "Scaling", "Mentorship"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    badge: "👑 ULTIMATE PREMIUM — #1 Best Seller",
    urgency: "Only 10 mentorship slots remaining — doors close Friday",
    certification: "Certified Digital Business Architect — Industry-Recognized Credential",
    whopUrl: "https://whop.com/austro-digital-empire/",
  },
  {
    id: "digital-marketing-mastery",
    title: "Digital Marketing Mastery",
    description:
      "Dominate every marketing channel. Master SEO, Google Ads, social media marketing, email funnels, and content strategy in one comprehensive course. Students average 340% ROI on their first campaign. Your competitors are already using these strategies — don't get left behind.",
    level: "Intermediate",
    category: "Digital Marketing",
    duration: "8 weeks",
    lessons: 56,
    price: 69,
    originalPrice: 139,
    rating: 4.8,
    reviews: 489,
    enrolled: 3890,
    topics: ["SEO", "Google Ads", "Social Media", "Email Marketing", "Content Strategy"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    badge: "📈 High ROI",
    urgency: "Algorithm changes make this knowledge essential — enroll now",
    certification: "Certified Digital Marketing Strategist",
    whopUrl: "https://whop.com/austro-digital-marketing/",
  },
  {
    id: "ai-money-making",
    title: "AI Money Making — Profit with Artificial Intelligence",
    description:
      "The AI gold rush is here and early adopters are making $10k–$50k/month. Learn to build AI agents, automate content creation, launch AI-powered SaaS products, and monetize AI tools. No coding experience required. This is the most in-demand skill set of the decade.",
    level: "Advanced",
    category: "AI & Automation",
    duration: "12 weeks",
    lessons: 84,
    price: 89,
    originalPrice: 179,
    rating: 4.9,
    reviews: 387,
    enrolled: 3670,
    topics: ["AI Agents", "ChatGPT", "AI SaaS", "Automation", "Prompt Engineering", "Monetization"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    badge: "🤖 Future-Proof",
    urgency: "AI is replacing jobs NOW — get ahead or get left behind",
    certification: "Certified AI Business & Automation Specialist",
    whopUrl: "https://whop.com/austro-ai-money/",
  },
];

// Keep backward-compatible export
export const webDevCourses = allCourses;
