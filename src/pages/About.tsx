import ScrollReveal from "@/components/ScrollReveal";
import SeoHead from "@/components/SeoHead";
import { seoConfig, getImage } from "@/lib/config";
import salonInterior from "@/assets/salon-interior.jpg";
import heroSalon from "@/assets/hero-salon.jpg";

const About = () => {
  const { about, businessName } = seoConfig;

  return (
    <main className="pt-16">
      <SeoHead page="about" />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={getImage(null, 'about_hero', heroSalon)} alt={businessName} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto section-padding pb-12 w-full">
          <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-primary mb-2">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-secondary-foreground text-balance">
            {about.headline}
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 section-padding max-w-4xl mx-auto">
        <ScrollReveal>
          {about.paragraphs.map((p, i) => (
            <p key={i} className={`text-lg leading-relaxed text-foreground/80 ${i < about.paragraphs.length - 1 ? 'mb-8' : ''}`}>
              {p}
            </p>
          ))}
        </ScrollReveal>
      </section>

      {/* Interior Image */}
      <section className="section-padding max-w-6xl mx-auto pb-24">
        <ScrollReveal>
          <div className="rounded-lg overflow-hidden">
            <img src={getImage(null, 'about', salonInterior)} alt={`${businessName} interior`} className="w-full h-auto" />
          </div>
        </ScrollReveal>
      </section>

      {/* Philosophy */}
      <section className="section-dark py-24 section-padding">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-primary mb-4">Our Philosophy</p>
          <blockquote className="text-2xl md:text-4xl font-heading font-bold tracking-tight leading-snug text-balance">
            "{about.philosophy}"
          </blockquote>
          <p className="mt-8 text-dark-foreground/60 max-w-lg mx-auto">
            {about.philosophySub}
          </p>
        </ScrollReveal>
      </section>

      {/* Products */}
      <section className="py-24 section-padding max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">What We Use</p>
          <h2 className="text-3xl font-heading font-bold tracking-tight mb-8">Premium Products</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            {about.productsDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            {about.products.map((brand) => (
              <span key={brand} className="px-5 py-2.5 rounded-full bg-secondary/5 font-heading text-sm font-semibold tracking-wide">
                {brand}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default About;
