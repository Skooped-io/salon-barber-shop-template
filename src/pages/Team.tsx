import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const teamMembers = [
  {
    name: "Maya Chen",
    title: "Founder & Color Specialist",
    specialties: ["Balayage", "Color Correction", "Lived-in Color"],
    years: 12,
    bio: "Maya's philosophy is simple: color should look like it grew out of your head. Her hand-painted techniques have earned a loyal following across Brooklyn.",
    signature: "Dimensional brunettes that catch the light just right.",
    instagram: "@maya.hair",
    initials: "MC",
  },
  {
    name: "Theo Rivera",
    title: "Master Barber",
    specialties: ["Fades", "Straight Razor", "Beard Sculpting"],
    years: 8,
    bio: "Trained in classic barbering with a modern edge, Theo brings precision and artistry to every cut. His clean fades are legendary in the neighborhood.",
    signature: "The kind of fade that makes strangers ask for your barber.",
    instagram: "@theo.cuts",
    initials: "TR",
  },
  {
    name: "Priya Nakamura",
    title: "Texture Expert",
    specialties: ["Curly Cuts", "Natural Hair", "Protective Styles"],
    years: 10,
    bio: "Priya specializes in working with natural texture — curls, coils, and waves. She's a DevaCurl-certified stylist who celebrates every curl pattern.",
    signature: "Curls that bounce, shine, and behave.",
    instagram: "@priya.texture",
    initials: "PN",
  },
  {
    name: "Leo Moretti",
    title: "Bridal & Events Specialist",
    specialties: ["Bridal Styling", "Updos", "Editorial"],
    years: 15,
    bio: "With 15 years in editorial and bridal, Leo creates styles that photograph beautifully and last all night. He's styled looks for Vogue, ELLE, and over 200 weddings.",
    signature: "Updos that survive the last dance.",
    instagram: "@leo.styles",
    initials: "LM",
  },
];

const Team = () => {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="section-dark py-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-primary mb-2">The Artists</p>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-4">Meet the Team</h1>
          <p className="text-dark-foreground/60 max-w-lg">
            Every stylist at Luxe brings their own artistry. Find your perfect match.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 section-padding max-w-5xl mx-auto">
        <div className="space-y-20">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.name}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                {/* Photo placeholder */}
                <div className={`aspect-[3/4] bg-secondary/5 rounded-lg flex items-center justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <span className="font-heading text-6xl font-extrabold text-secondary/10">{member.initials}</span>
                </div>

                {/* Info */}
                <div className={`flex flex-col justify-center ${i % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-tight">{member.name}</h2>
                  <p className="text-sm text-primary font-heading font-semibold mt-1">{member.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{member.years} years experience</p>

                  <p className="text-foreground/80 leading-relaxed mt-6">{member.bio}</p>

                  <div className="mt-6">
                    <p className="text-xs font-heading font-semibold tracking-widest uppercase text-muted-foreground/60 mb-2">Specialties</p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 1 ? "md:justify-end" : ""}`}>
                      {member.specialties.map((s) => (
                        <span key={s} className="px-3 py-1 rounded-full bg-secondary/5 text-xs font-heading font-semibold tracking-wide">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-6 text-sm italic text-muted-foreground">"{member.signature}"</p>

                  <div className={`mt-6 flex gap-3 ${i % 2 === 1 ? "md:justify-end" : ""}`}>
                    <Button asChild variant="default" size="default">
                      <Link to="/contact">Book with {member.name.split(" ")[0]}</Link>
                    </Button>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors self-center"
                    >
                      {member.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Team;
