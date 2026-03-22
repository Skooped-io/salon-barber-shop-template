import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SeoHead from "@/components/SeoHead";
import { seoConfig, slugify } from "@/lib/config";

const Services = () => {
  const { services } = seoConfig;

  return (
    <main className="pt-16">
      <SeoHead page="services" />

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
        {services.categories.map((cat, ci) => (
          <ScrollReveal key={cat.title}>
            <div className={ci > 0 ? "mt-16 pt-16 border-t border-border" : ""}>
              <div className="flex items-end justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-tight">{cat.title}</h2>
                <Button asChild variant="default" size="sm">
                  <Link to="/contact">Book Now</Link>
                </Button>
              </div>
              <div className="space-y-0">
                {cat.items.map((s) => (
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
            {services.addOns.map((addon) => (
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
