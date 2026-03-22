import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { seoConfig, getServiceBySlug, getAllServices } from "@/lib/config";
import { Phone, MapPin, ChevronRight } from "lucide-react";

const serviceContent: Record<string, { paragraphs: string[]; includes: string[] }> = {};

function generateContent(name: string, category: string, industry: string) {
  if (serviceContent[name]) return serviceContent[name];

  const contentMap: Record<string, { paragraphs: string[]; includes: string[] }> = {
    Cuts: {
      paragraphs: [
        `Our ${name} service is one of the most popular offerings at ${seoConfig.businessName}. Every appointment begins with a one-on-one consultation so we understand exactly what you're looking for — whether that's a subtle refresh or a bold new direction.`,
        `Our stylists bring years of training and an eye for proportion, face shape, and hair texture. We don't do cookie-cutter cuts. Each one is tailored to you, your lifestyle, and how much time you actually want to spend styling in the morning.`,
        `Located in ${seoConfig.serviceArea}, we've built a reputation for precision, consistency, and genuinely listening to our clients. Walk out looking and feeling like the best version of yourself.`,
      ],
      includes: [
        "In-depth consultation",
        "Shampoo and conditioning",
        "Precision cutting tailored to your hair type",
        "Professional styling and finish",
        "Aftercare recommendations",
      ],
    },
    Color: {
      paragraphs: [
        `${name} at ${seoConfig.businessName} is where artistry meets chemistry. Our color specialists stay current with the latest techniques and formulations to deliver results that look natural, vibrant, and last.`,
        `Whether you're going for a subtle shift or a dramatic transformation, we start with a thorough consultation — assessing your hair history, condition, and goals before touching a brush or foil.`,
        `We use professional-grade products from brands like ${seoConfig.about.products.slice(0, 2).join(" and ")} to protect your hair's integrity while achieving beautiful, dimensional color. Serving clients across ${seoConfig.serviceArea}.`,
      ],
      includes: [
        "Color consultation and strand test",
        "Custom color formulation",
        "Professional application",
        "Processing with conditioning treatment",
        "Blow-dry and style",
        "Home care guidance",
      ],
    },
    Styling: {
      paragraphs: [
        `Our ${name} service at ${seoConfig.businessName} is designed to make you feel camera-ready for any occasion — from a casual refresh to your most important events.`,
        `Our styling team combines technical skill with creative vision. We listen to what you want, consider your hair's natural movement, and create a look that holds beautifully throughout the day or night.`,
        `Whether it's a sleek blowout, textured waves, or an architectural updo, our ${seoConfig.serviceArea} studio is the place to get it done right.`,
      ],
      includes: [
        "Style consultation",
        "Shampoo and prep",
        "Heat protection and product application",
        "Professional styling",
        "Setting and finishing touches",
      ],
    },
    Treatments: {
      paragraphs: [
        `The ${name} at ${seoConfig.businessName} goes beyond surface-level care. We assess your hair and scalp condition to deliver a treatment that addresses real concerns — dryness, damage, thinning, or buildup.`,
        `Using professional products from ${seoConfig.about.products.join(", ")}, our treatments restore strength, moisture, and shine. Think of it as an investment in your hair's long-term health.`,
        `Clients across ${seoConfig.serviceArea} trust us for treatments that deliver visible, lasting results. Book a consultation and let us build a care plan tailored to you.`,
      ],
      includes: [
        "Hair and scalp analysis",
        "Deep cleansing or exfoliation",
        "Targeted treatment application",
        "Processing under heat or steam",
        "Rinse, style, and aftercare plan",
      ],
    },
    Barbering: {
      paragraphs: [
        `${name} at ${seoConfig.businessName} blends classic barbering tradition with modern precision. Our barbers are trained in both timeless techniques and contemporary styles.`,
        `Every service includes the details that make the difference — clean lines, proper blending, and a hot towel finish. It's not just a haircut; it's a ritual.`,
        `Located in ${seoConfig.serviceArea}, our barbering chair has become a neighborhood staple for men who care about looking sharp without the fuss.`,
      ],
      includes: [
        "Consultation on style and preferences",
        "Precision clipper and scissor work",
        "Line-up and edge detailing",
        "Hot towel application",
        "Finishing product and styling",
      ],
    },
  };

  const fallback = contentMap["Cuts"];
  const result = contentMap[category] || fallback;
  serviceContent[name] = result;
  return result;
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");
  const allServices = getAllServices();

  if (!service) {
    return (
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Service Not Found</h1>
          <Button asChild variant="default">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </main>
    );
  }

  const content = generateContent(service.name, service.category, seoConfig.industry);
  const related = allServices.filter((s) => s.slug !== service.slug).slice(0, 4);
  const pageTitle = `${service.name} in ${seoConfig.address.city}, ${seoConfig.address.state} | ${seoConfig.businessName}`;
  const pageDesc = `Professional ${service.name.toLowerCase()} services in ${seoConfig.serviceArea}. ${service.desc}. Book online or call ${seoConfig.phone}.`;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.desc,
    provider: {
      "@type": "LocalBusiness",
      name: seoConfig.businessName,
      telephone: seoConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: seoConfig.address.street,
        addressLocality: seoConfig.address.city,
        addressRegion: seoConfig.address.state,
        postalCode: seoConfig.address.zip,
      },
    },
    areaServed: seoConfig.serviceArea,
  };

  useEffect(() => {
    document.title = pageTitle;
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta("name", "description", pageDesc);
    setMeta("property", "og:title", pageTitle);
    setMeta("property", "og:description", pageDesc);

    const existingLd = document.querySelector('script[data-ld="service"]');
    if (existingLd) existingLd.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-ld", "service");
    script.textContent = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, [slug, pageTitle, pageDesc]);

  return (
    <main className="pt-16">

      {/* Hero */}
      <section className="section-dark py-20 section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-dark-foreground/50 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-dark-foreground/80">{service.name}</span>
          </nav>

          <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-primary mb-2">
            {service.category}
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-4 text-balance">
            {service.name}
          </h1>
          <p className="text-dark-foreground/60 max-w-lg text-lg">{service.desc}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-dark-foreground/50">
            <span className="font-heading font-bold text-xl text-foreground">{service.price}</span>
            <span className="text-dark-foreground/30">·</span>
            <span>{service.duration}</span>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-20 section-padding">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            <ScrollReveal>
              <div className="space-y-5">
                {content.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl font-heading font-bold tracking-tight mb-4">What's Included</h2>
                <ul className="space-y-3">
                  {content.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-xl font-heading font-bold tracking-tight mb-2">
                  Ready to book?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Schedule your {service.name.toLowerCase()} appointment today. Walk-ins welcome based on availability.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button asChild>
                    <Link to="/contact">Book Appointment</Link>
                  </Button>
                  <a
                    href={`tel:${seoConfig.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    {seoConfig.phone}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* NAP */}
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-heading font-bold text-sm tracking-tight mb-4">Visit Us</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">{seoConfig.businessName}</p>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{seoConfig.address.full}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href={`tel:${seoConfig.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-primary transition-colors">
                      {seoConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Related Services */}
            <ScrollReveal>
              <div>
                <h3 className="font-heading font-bold text-sm tracking-tight mb-4">Other Services</h3>
                <div className="space-y-2">
                  {related.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center justify-between py-3 px-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors group"
                    >
                      <div>
                        <p className="text-sm font-medium group-hover:text-primary transition-colors">{s.name}</p>
                        <p className="text-xs text-muted-foreground">{s.category}</p>
                      </div>
                      <span className="text-sm font-heading font-bold">{s.price}</span>
                    </Link>
                  ))}
                </div>
                <Button asChild variant="ghost" size="sm" className="mt-4 w-full">
                  <Link to="/services">View All Services →</Link>
                </Button>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
