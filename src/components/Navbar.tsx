import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Book Now" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 section-padding">
        <Link to="/" className="font-heading text-xl font-bold tracking-tight text-secondary-foreground">
          LUXE<span className="text-primary">.</span>SALON
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.slice(0, -1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-heading font-medium tracking-wide transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-secondary-foreground/70 hover:text-secondary-foreground"
              }`}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <Button asChild variant="hero" size="sm">
            <Link to="/contact">BOOK NOW</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-secondary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10 animate-[fadeIn_0.2s_ease-out]">
          <div className="flex flex-col py-4 section-padding gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm font-heading font-medium tracking-wide ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-secondary-foreground/70"
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
