import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold font-serif">Austro-systems</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for web development, e-commerce, and digital growth.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:austro-systems@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                austro-systems@gmail.com
              </a>
              <a href="tel:+26777364072" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +267 77 364 072
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>P.O. Box 15, Hatsalatladi, Botswana</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#services" className="hover:text-accent transition-colors">Web Development</a></li>
              <li><a href="/#services" className="hover:text-accent transition-colors">Shopify Setup</a></li>
              <li><a href="/#services" className="hover:text-accent transition-colors">Domain Setup</a></li>
              <li><a href="/#services" className="hover:text-accent transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/courses" className="hover:text-accent transition-colors">Courses</a></li>
              <li><a href="/blog" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>

            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/AustroInc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-50 cursor-not-allowed"
                aria-label="Instagram (coming soon)"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-50 cursor-not-allowed"
                aria-label="Twitter (coming soon)"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Austro-systems. All rights reserved.</p>
          <p>Built with ❤️ in Botswana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
