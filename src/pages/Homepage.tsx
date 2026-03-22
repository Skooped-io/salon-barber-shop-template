import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SeoHead from "@/components/SeoHead";
import { seoConfig, getImage } from "@/lib/config";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react";

import heroImg from "@/assets/hero-salon.jpg";
import haircutImg from "@/assets/haircut-service.jpg";
import colorImg from "@/assets/color-service.jpg";
import stylingImg from "@/assets/styling-service.jpg";
import beardImg from "@/assets/beard-service.jpg";
import treatmentImg from "@/assets/treatment-service.jpg";
import bridalImg from "@/assets/bridal-service.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const serviceImageMap: Record<string, string> = {
  "Haircuts": haircutImg,
  "Color & Highlights": colorImg,
  "Styling & Blowouts": stylingImg,
  "Beard & Shave": beardImg,
  "Treatments": treatmentImg,
  "Bridal & Events": bridalImg,
};

const galleryImages = [gallery1, gallery2, gallery3, gallery5, gallery6, gallery6];

const Homepage = () => {
  const { hero, cta, reviews, team, services, address, hours } = seoConfig;
  const homeServices = services.homePreview;

  return (
    <main>
      <SeoHead page="home" />

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getImage(null, 'hero', heroImg)}
            alt={`${seoConfig.businessName} interior`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto section-padding w-full">
          <div className="max-w-xl">
            <h1
              className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight text-secondary-foreground leading-[0.95] text-balance"
              style={{ animation: "revealUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards" }}
            >
              {hero.headline.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
            <p
              className="mt-6 text-lg text-secondary-foreground/70 max-w-md leading-relaxed"
              style={{ opacity: 0, animation: "revealUp 0.7s cubic-bezier(0.16,1,0.3,1) 200ms forwards" }}
            >
              {hero.subheadline}
            </p>
            <div
              className="mt-8 flex flex-wrap gap-4"
              style={{ opacity: 0, animation: "revealUp 0.7s cubic-bezier(0.16,1,0.3,1) 400ms forwards" }}
            >
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">{hero.cta}</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/gallery">{hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 section-padding max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">Our Services</h2>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-1 text-sm font-heading font-semibold text-primary hover:underline">
              Full Menu <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-none">
          {homeServices.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 80} className="snap-start">
              <div className="min-w-[260px] w-[260px] group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                  <img
                    src={getImage(null, `service_${i}`, serviceImageMap[s.name] || haircutImg)}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="font-heading font-bold text-lg text-secondary-foreground">{s.name}</h3>
                    <p className="text-sm text-secondary-foreground/60 mt-1">{s.price}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <Link to="/services" className="md:hidden flex items-center gap-1 text-sm font-heading font-semibold text-primary hover:underline mt-6">
          Full Menu <ArrowRight size={14} />
        </Link>
      </section>

      {/* Gallery Strip */}
      <section className="section-dark py-20">
        <ScrollReveal className="max-w-7xl mx-auto section-padding mb-10">
          <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-dark-foreground/40 mb-2">Portfolio</p>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">Our Work</h2>
            <Link to="/gallery" className="text-sm font-heading font-semibold text-primary hover:underline flex items-center gap-1">
              See All <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
        <div className="flex gap-3 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-none">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 60} className="snap-start">
              <div className="min-w-[200px] w-[200px] md:min-w-[260px] md:w-[260px] aspect-square overflow-hidden rounded-lg">
                <img
                  src={getImage(null, `gallery_${i + 1}`, img)}
                  alt={`${seoConfig.businessName} portfolio work ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 section-padding max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">The Artists</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-12">Meet the Team</h2>
        </ScrollReveal>
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-none">
          {team.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100} className="snap-start">
              <div className="min-w-[240px] w-[240px] bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-[3/4] bg-secondary/10 flex items-center justify-center">
                  <span className="font-heading text-4xl font-bold text-secondary/20">
                    {t.initials}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-base">{t.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t.title}</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">{t.years} years experience</p>
                  <Button asChild variant="outline" size="sm" className="mt-4 w-full text-xs">
                    <Link to="/contact">Book with {t.name.split(" ")[0]}</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-card section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-12">What Our Clients Say</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 100}>
                <div className="bg-background p-8 rounded-lg shadow-sm">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80 mb-6">"{r.text}"</p>
                  <p className="font-heading font-semibold text-sm">{r.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 section-padding max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-secondary/5 rounded-lg aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-muted-foreground/40">
                <MapPin size={48} className="mx-auto mb-3" />
                <p className="font-heading text-sm">Map Embed Placeholder</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">Visit Us</p>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-6">Location & Hours</h2>
              <div className="space-y-4 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <span>{address.street}<br />{address.city}, {address.state} {address.zip}</span>
                </p>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p>{hours.weekday}</p>
                    <p>{hours.saturday}</p>
                    <p>{hours.sunday}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 bg-primary/10 text-primary font-heading font-semibold text-xs tracking-wide px-4 py-2 rounded-full w-fit">
                Walk-ins Welcome
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <section className="section-dark py-24 section-padding">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight mb-6 text-balance">
            {cta.headline}
          </h2>
          <p className="text-dark-foreground/60 mb-8 max-w-md mx-auto">
            {cta.subtext}
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">{cta.button}</Link>
          </Button>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Homepage;
