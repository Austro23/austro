export interface Course {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  price: number;
  topics: string[];
  image: string;
}

export const webDevCourses: Course[] = [
  {
    id: "html-css-fundamentals",
    title: "HTML & CSS from Scratch",
    description:
      "Master the building blocks of the web. Learn semantic HTML, modern CSS layouts with Flexbox and Grid, responsive design, and accessibility best practices.",
    level: "Beginner",
    duration: "6 weeks",
    lessons: 42,
    price: 49,
    topics: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&h=400&fit=crop",
  },
  {
    id: "javascript-essentials",
    title: "JavaScript Essentials",
    description:
      "Go from zero to confident with JavaScript. Cover variables, functions, DOM manipulation, async programming, APIs, and build real interactive projects.",
    level: "Beginner",
    duration: "8 weeks",
    lessons: 56,
    price: 69,
    topics: ["ES6+", "DOM", "Async/Await", "Fetch API", "Error Handling"],
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
  },
  {
    id: "react-typescript",
    title: "React & TypeScript Masterclass",
    description:
      "Build production-grade applications with React and TypeScript. Learn hooks, state management, routing, testing, and deployment strategies.",
    level: "Intermediate",
    duration: "10 weeks",
    lessons: 74,
    price: 99,
    topics: ["React 19", "TypeScript", "React Router", "TanStack Query", "Testing"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
  },
  {
    id: "tailwind-ui-design",
    title: "UI Design with Tailwind CSS",
    description:
      "Design stunning, responsive interfaces using Tailwind CSS. Create custom design systems, animations, dark mode, and component libraries from scratch.",
    level: "Intermediate",
    duration: "5 weeks",
    lessons: 35,
    price: 59,
    topics: ["Tailwind CSS", "Design Systems", "Animations", "Dark Mode", "Accessibility"],
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
  },
  {
    id: "fullstack-nextjs",
    title: "Full-Stack Web Development",
    description:
      "Go full-stack: databases, authentication, APIs, and deployment. Build complete applications with backend integration, user auth, and real-time features.",
    level: "Advanced",
    duration: "12 weeks",
    lessons: 88,
    price: 149,
    topics: ["Node.js", "PostgreSQL", "Authentication", "REST APIs", "Deployment"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: "web-performance",
    title: "Web Performance & Optimization",
    description:
      "Make your sites blazing fast. Learn Core Web Vitals, lazy loading, code splitting, caching strategies, image optimization, and performance auditing.",
    level: "Advanced",
    duration: "4 weeks",
    lessons: 28,
    price: 79,
    topics: ["Core Web Vitals", "Lighthouse", "Code Splitting", "Caching", "CDN"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];
