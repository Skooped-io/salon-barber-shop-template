import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-xl font-bold tracking-tight mb-4">
              LUXE<span className="text-primary">.</span>SALON
            </h3>
            <p className="text-secondary-foreground/60 font-body text-sm leading-relaxed">
              Where artistry meets technique. Your best look starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xs font-semibold tracking-widest uppercase mb-4 text-secondary-foreground/40">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About" },
                { to: "/services", label: "Services & Pricing" },
                { to: "/gallery", label: "Our Work" },
                { to: "/team", label: "Meet the Team" },
                { to: "/contact", label: "Book Appointment" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xs font-semibold tracking-widest uppercase mb-4 text-secondary-foreground/40">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-secondary-foreground/60">
              <span className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> 123 Style Ave, Brooklyn, NY</span>
              <span className="flex items-center gap-2"><Phone size={14} className="text-primary" /> (718) 555-0142</span>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Instagram size={14} className="text-primary" /> @luxe.salon
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-xs font-semibold tracking-widest uppercase mb-4 text-secondary-foreground/40">Hours</h4>
            <div className="flex flex-col gap-2 text-sm text-secondary-foreground/60">
              <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> Mon–Fri: 9am – 8pm</span>
              <span className="ml-[22px]">Saturday: 9am – 6pm</span>
              <span className="ml-[22px]">Sunday: 10am – 5pm</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary-foreground/40">© 2026 Luxe Salon. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-secondary-foreground/40 hover:text-secondary-foreground/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-secondary-foreground/40 hover:text-secondary-foreground/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
