import { Globe, ShoppingBag, Link, MessageSquare, Megaphone, BookOpen } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites built with modern technologies. From landing pages to complex web applications, we deliver responsive, fast, and beautiful digital experiences.",
    href: "/contact",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Store Setup",
    description: "Complete Shopify store setup including theme customization, product listings, payment integration, and launch-ready configurations.",
    href: "/contact",
  },
  {
    icon: Link,
    title: "Domain Registration",
    description: "Search, register, and manage your perfect domain name. 500+ TLDs available with WHOIS privacy, DNS management, and instant setup included.",
    href: "/domains",
  },
  {
    icon: MessageSquare,
    title: "Web Dev Consultancy",
    description: "Expert guidance on technology choices, architecture planning, performance optimization, and digital strategy for your business.",
    href: "/contact",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, social media management, paid advertising, and content strategy designed to increase your online visibility and drive conversions.",
    href: "/contact",
  },
  {
    icon: BookOpen,
    title: "Online Courses",
    description: "Master Shopify, digital marketing, and AI money-making through our structured courses. Self-paced learning with real-world projects.",
    href: "/courses",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Services</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          End-to-end digital solutions to help your business thrive online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <a
            key={service.title}
            href={service.href}
            className={`block p-8 rounded-[2rem] bg-card hover:bg-muted/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_8px_40px_-10px_hsl(var(--glow-primary)/0.15)] animate-slide-up stagger-${Math.min(index + 1, 6)}`}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-500">
              <service.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
