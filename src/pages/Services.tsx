import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

interface ServiceItem {
  name: string;
  desc: string;
  price: string;
  duration: string;
  premium?: boolean;
}

interface Category {
  title: string;
  services: ServiceItem[];
}

const categories: Category[] = [
  {
    title: "Cuts",
    services: [
      { name: "Women's Haircut", desc: "Consultation, shampoo, cut, and style", price: "$65+", duration: "60 min" },
      { name: "Men's Haircut", desc: "Precision cut with hot towel finish", price: "$45+", duration: "45 min" },
      { name: "Children's Cut", desc: "Ages 12 and under", price: "$35", duration: "30 min" },
      { name: "Bang Trim", desc: "Quick fringe maintenance", price: "$15", duration: "15 min" },
    ],
  },
  {
    title: "Color",
    services: [
      { name: "Single Process", desc: "All-over color application", price: "$120+", duration: "90 min" },
      { name: "Balayage / Ombré", desc: "Hand-painted highlights for natural dimension", price: "$200+", duration: "2.5 hrs", premium: true },
      { name: "Full Highlights", desc: "Foil highlights throughout", price: "$180+", duration: "2 hrs" },
      { name: "Partial Highlights", desc: "Face-framing and crown highlights", price: "$130+", duration: "90 min" },
      { name: "Color Correction", desc: "Fix or transform previous color work", price: "$250+", duration: "3+ hrs", premium: true },
      { name: "Gloss / Toner", desc: "Shine-boosting semi-permanent toner", price: "$55+", duration: "30 min" },
    ],
  },
  {
    title: "Styling",
    services: [
      { name: "Blowout", desc: "Shampoo and professional blowdry", price: "$55+", duration: "45 min" },
      { name: "Special Occasion", desc: "Updo or formal styling", price: "$85+", duration: "60 min" },
      { name: "Bridal Styling", desc: "Trial + wedding day styling", price: "$350+", duration: "Varies", premium: true },
      { name: "Braids & Twists", desc: "Creative braiding and protective styles", price: "$75+", duration: "60+ min" },
    ],
  },
  {
    title: "Treatments",
    services: [
      { name: "Deep Conditioning", desc: "Intensive moisture and repair treatment", price: "$45+", duration: "30 min" },
      { name: "Keratin Smoothing", desc: "Frizz reduction for up to 3 months", price: "$300+", duration: "2.5 hrs", premium: true },
      { name: "Scalp Treatment", desc: "Exfoliation and nourishing scalp care", price: "$65+", duration: "45 min" },
      { name: "Olaplex Treatment", desc: "Bond-building repair for damaged hair", price: "$75+", duration: "30 min" },
    ],
  },
  {
    title: "Barbering",
    services: [
      { name: "Classic Cut & Fade", desc: "Precision clipper and scissor work", price: "$45+", duration: "45 min" },
      { name: "Beard Trim & Shape", desc: "Sculpted beard with hot towel", price: "$30+", duration: "30 min" },
      { name: "Straight Razor Shave", desc: "Traditional hot lather razor shave", price: "$40+", duration: "30 min" },
      { name: "The Full Experience", desc: "Cut, beard, shave, and scalp massage", price: "$95+", duration: "90 min", premium: true },
    ],
  },
];

const Services = () => {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="section-dark py-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-primary mb-2">Menu</p>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-4 text-balance">
            Services & Pricing
          </h1>
          <p className="text-dark-foreground/60 max-w-lg">
            Prices may vary based on hair length, thickness, and complexity. Consultations are always complimentary.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 section-padding max-w-4xl mx-auto">
        {categories.map((cat, ci) => (
          <ScrollReveal key={cat.title}>
            <div className={ci > 0 ? "mt-16 pt-16 border-t border-border" : ""}>
              <div className="flex items-end justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-tight">{cat.title}</h2>
                <Button asChild variant="default" size="sm">
                  <Link to="/contact">Book Now</Link>
                </Button>
              </div>
              <div className="space-y-0">
                {cat.services.map((s) => (
                  <div
                    key={s.name}
                    className={`flex items-start justify-between py-5 border-b border-border/50 last:border-0 ${
                      s.premium ? "relative" : ""
                    }`}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading font-semibold text-base">{s.name}</h3>
                        {s.premium && (
                          <span className="text-[10px] font-heading font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-heading font-bold text-base">{s.price}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* Add-Ons */}
      <section className="bg-card py-16 section-padding">
        <ScrollReveal className="max-w-4xl mx-auto">
          <h2 className="text-xl font-heading font-bold tracking-tight mb-6">Add-Ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Olaplex Add-On", price: "+$35" },
              { name: "Scalp Massage", price: "+$20" },
              { name: "Extra Toner", price: "+$30" },
              { name: "Clip-In Extensions (per row)", price: "+$50" },
            ].map((addon) => (
              <div key={addon.name} className="flex justify-between items-center py-3 px-5 bg-background rounded-lg">
                <span className="text-sm font-medium">{addon.name}</span>
                <span className="font-heading font-bold text-sm">{addon.price}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Services;
