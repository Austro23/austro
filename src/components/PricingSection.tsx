import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for small businesses getting started online.",
    features: [
      "Single-page website",
      "Mobile responsive design",
      "Domain setup & SSL",
      "Basic SEO setup",
      "1 month support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$1,299",
    description: "For businesses ready to scale their digital presence.",
    features: [
      "Multi-page custom website",
      "Shopify store setup",
      "SEO & analytics integration",
      "Social media starter kit",
      "Digital marketing consultation",
      "3 months support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for established businesses.",
    features: [
      "Full-stack web application",
      "E-commerce with advanced features",
      "Ongoing digital marketing",
      "Monthly performance reports",
      "Priority support & consultancy",
      "Online course setup",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Pricing Packages
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Transparent pricing to match your business goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={pkg.name}
            className={`relative p-8 rounded-[2rem] transition-all duration-300 hover:scale-[1.02] animate-slide-up stagger-${Math.min(index + 1, 6)} ${
              pkg.highlighted
                ? "bg-primary text-primary-foreground"
                : "bg-card"
            }`}
          >
            {pkg.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
            <div className="text-4xl font-bold mb-2">{pkg.price}</div>
            <p
              className={`text-sm mb-6 ${
                pkg.highlighted
                  ? "text-primary-foreground/70"
                  : "text-muted-foreground"
              }`}
            >
              {pkg.description}
            </p>
            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check
                    className={`w-4 h-4 mt-0.5 shrink-0 ${
                      pkg.highlighted ? "text-accent" : "text-accent"
                    }`}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className={`block text-center py-3 rounded-full font-medium transition-all hover:scale-105 ${
                pkg.highlighted
                  ? "bg-primary-foreground text-primary"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
