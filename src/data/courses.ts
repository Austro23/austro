export interface Course {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Premium";
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
}

export const webDevCourses: Course[] = [
  {
    id: "html-css-fundamentals",
    title: "HTML & CSS from Scratch",
    description:
      "Master the building blocks of the web. Learn semantic HTML, modern CSS layouts with Flexbox and Grid, responsive design, and accessibility best practices. Over 2,400 students enrolled — this is where every successful developer started.",
    level: "Beginner",
    duration: "6 weeks",
    lessons: 42,
    price: 10,
    originalPrice: 39,
    rating: 4.7,
    reviews: 312,
    enrolled: 2413,
    topics: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&h=400&fit=crop",
    badge: "🔥 Best Seller",
    urgency: "Only 12 spots left at this price",
  },
  {
    id: "javascript-essentials",
    title: "JavaScript Essentials",
    description:
      "Go from zero to confident with JavaScript. Cover variables, functions, DOM manipulation, async programming, APIs, and build real interactive projects. Rated #1 JS course by our community.",
    level: "Beginner",
    duration: "8 weeks",
    lessons: 56,
    price: 29,
    originalPrice: 69,
    rating: 4.8,
    reviews: 487,
    enrolled: 3891,
    topics: ["ES6+", "DOM", "Async/Await", "Fetch API", "Error Handling"],
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
    badge: "⭐ Top Rated",
    urgency: "Price increases in 48 hours",
  },
  {
    id: "react-typescript",
    title: "React & TypeScript Masterclass",
    description:
      "Build production-grade applications with React and TypeScript. Learn hooks, state management, routing, testing, and deployment strategies. The skills companies are paying $120k+ salaries for.",
    level: "Intermediate",
    duration: "10 weeks",
    lessons: 74,
    price: 79,
    originalPrice: 149,
    rating: 4.9,
    reviews: 623,
    enrolled: 5120,
    topics: ["React 19", "TypeScript", "React Router", "TanStack Query", "Testing"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    badge: "🚀 Most Popular",
    urgency: "87% of graduates landed a job within 3 months",
  },
  {
    id: "tailwind-ui-design",
    title: "UI Design with Tailwind CSS",
    description:
      "Design stunning, responsive interfaces using Tailwind CSS. Create custom design systems, animations, dark mode, and component libraries from scratch. Clients will pay you $5k–$15k per project.",
    level: "Intermediate",
    duration: "5 weeks",
    lessons: 35,
    price: 49,
    originalPrice: 89,
    rating: 4.6,
    reviews: 198,
    enrolled: 1756,
    topics: ["Tailwind CSS", "Design Systems", "Animations", "Dark Mode", "Accessibility"],
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
    urgency: "Limited-time launch discount",
  },
  {
    id: "fullstack-nextjs",
    title: "Full-Stack Web Development",
    description:
      "Go full-stack: databases, authentication, APIs, and deployment. Build complete applications with backend integration, user auth, and real-time features. Stop depending on others — own the entire stack.",
    level: "Advanced",
    duration: "12 weeks",
    lessons: 88,
    price: 99,
    originalPrice: 199,
    rating: 4.8,
    reviews: 341,
    enrolled: 2987,
    topics: ["Node.js", "PostgreSQL", "Authentication", "REST APIs", "Deployment"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    badge: "💼 Career Accelerator",
    urgency: "Enrolment closes Friday",
  },
  {
    id: "web-performance",
    title: "Web Performance & Optimization",
    description:
      "Make your sites blazing fast. Learn Core Web Vitals, lazy loading, code splitting, caching strategies, image optimization, and performance auditing. Fast sites convert 2x more customers.",
    level: "Advanced",
    duration: "4 weeks",
    lessons: 28,
    price: 59,
    originalPrice: 99,
    rating: 4.7,
    reviews: 156,
    enrolled: 1234,
    topics: ["Core Web Vitals", "Lighthouse", "Code Splitting", "Caching", "CDN"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    urgency: "Only 8 spots remaining",
  },
  {
    id: "psychology-of-money-blueprint",
    title: "The Blueprint: Psychology of Money in Business",
    description:
      "This isn't just a course — it's a transformation. Understand the hidden psychology behind every buying decision, pricing strategy, and wealth-building principle. Used by 700+ entrepreneurs to 10x their revenue. You'll never look at money the same way again.",
    level: "Premium",
    duration: "16 weeks",
    lessons: 120,
    price: 299,
    originalPrice: 599,
    rating: 5.0,
    reviews: 712,
    enrolled: 4300,
    topics: ["Buyer Psychology", "Pricing Strategy", "Wealth Mindset", "Sales Funnels", "Negotiation"],
    image: "https://images.unsplash.com/photo-1553729459-afe8f2e2ed08?w=600&h=400&fit=crop",
    badge: "👑 Premium Flagship",
    urgency: "Doors close permanently after this cohort",
  },
];
