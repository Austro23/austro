import Header from "@/components/Header";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About Austro-systems
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Your trusted partner for web development, e-commerce, and digital growth.
          </p>
        </div>

        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p>
            Austro-systems was founded with a clear mission: to make professional web development and 
            digital marketing accessible to businesses of all sizes. We saw too many great businesses 
            struggling online because of poor websites, complex tech stacks, and scattered digital strategies.
          </p>
          <p>
            We bring together expertise in web development, Shopify e-commerce, domain management, and 
            digital marketing under one roof. Whether you're launching your first website or scaling an 
            existing online business, we're here to help you succeed.
          </p>
          <p>
            Beyond client work, we're passionate about education. Our online courses empower entrepreneurs 
            and developers to build their own digital skills, creating lasting value for their businesses.
          </p>
        </section>

        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">What We Do</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>We specialize in:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Custom web development using modern frameworks and best practices</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Full Shopify store setup, customization, and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Domain registration, DNS configuration, and hosting setup</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Web development consultancy and technical strategy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Digital marketing including SEO, social media, and paid ads</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Online courses for web development and digital skills</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                We never cut corners. Every project gets the same attention to detail, performance, and polish.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                Clear communication, honest timelines, and straightforward pricing. No surprises.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-muted-foreground">
                We believe in empowering clients with knowledge, not creating dependency.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
              <p className="text-muted-foreground">
                Beautiful design is great, but we measure success by the business outcomes we deliver.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the right solution for your business.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            <Mail className="mr-2 h-4 w-4" />
            <a href="/contact">Contact Us</a>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default About;
