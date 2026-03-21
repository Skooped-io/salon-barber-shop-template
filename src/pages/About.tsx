import ScrollReveal from "@/components/ScrollReveal";
import salonInterior from "@/assets/salon-interior.jpg";
import heroSalon from "@/assets/hero-salon.jpg";

const About = () => {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={heroSalon} alt="Luxe Salon" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto section-padding pb-12 w-full">
          <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-primary mb-2">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-secondary-foreground text-balance">
            More Than a Salon
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 section-padding max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-lg leading-relaxed text-foreground/80 mb-8">
            Founded in 2018, Luxe Salon was born from a simple belief: a great haircut changes everything.
            Not just how you look — how you carry yourself, how you feel walking into a room.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80 mb-8">
            Our founder, Maya Chen, spent a decade working in top salons across New York before opening
            Luxe in the heart of Brooklyn. She built a space where creativity, technique, and genuine
            hospitality come together.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80">
            Today, our team of specialists brings decades of combined experience to every client.
            Whether it's a precision cut, a bold color transformation, or wedding-day styling,
            we approach every service as an art form.
          </p>
        </ScrollReveal>
      </section>

      {/* Interior Image */}
      <section className="section-padding max-w-6xl mx-auto pb-24">
        <ScrollReveal>
          <div className="rounded-lg overflow-hidden">
            <img src={salonInterior} alt="Salon interior" className="w-full h-auto" />
          </div>
        </ScrollReveal>
      </section>

      {/* Philosophy */}
      <section className="section-dark py-24 section-padding">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-primary mb-4">Our Philosophy</p>
          <blockquote className="text-2xl md:text-4xl font-heading font-bold tracking-tight leading-snug text-balance">
            "We believe a great haircut changes everything."
          </blockquote>
          <p className="mt-8 text-dark-foreground/60 max-w-lg mx-auto">
            Every client deserves to leave feeling like the best version of themselves.
            We listen first, then create.
          </p>
        </ScrollReveal>
      </section>

      {/* Products */}
      <section className="py-24 section-padding max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">What We Use</p>
          <h2 className="text-3xl font-heading font-bold tracking-tight mb-8">Premium Products</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            We partner exclusively with brands that share our commitment to quality and sustainability.
            Every product in our salon is carefully selected for performance and ingredient integrity.
          </p>
          <div className="flex flex-wrap gap-4">
            {["Olaplex", "Kevin Murphy", "Redken", "Moroccan Oil"].map((brand) => (
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
