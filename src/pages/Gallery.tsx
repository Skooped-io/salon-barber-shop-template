import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import colorImg from "@/assets/color-service.jpg";
import stylingImg from "@/assets/styling-service.jpg";
import bridalImg from "@/assets/bridal-service.jpg";

const allImages = [
  { src: gallery1, category: "Cuts", credit: "Maya Chen" },
  { src: gallery2, category: "Color", credit: "Priya Nakamura" },
  { src: gallery3, category: "Barbering", credit: "Theo Rivera" },
  { src: colorImg, category: "Color", credit: "Maya Chen" },
  { src: gallery5, category: "Color", credit: "Priya Nakamura" },
  { src: gallery6, category: "Cuts", credit: "Maya Chen" },
  { src: stylingImg, category: "Styling", credit: "Leo Moretti" },
  { src: bridalImg, category: "Bridal", credit: "Leo Moretti" },
];

const filters = ["All", "Cuts", "Color", "Styling", "Bridal", "Barbering"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = filter === "All" ? allImages : allImages.filter((img) => img.category === filter);

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="section-dark py-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-primary mb-2">Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-4">Our Work</h1>
          <p className="text-dark-foreground/60">Every style tells a story. Here are some of ours.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 section-padding max-w-6xl mx-auto">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-heading font-semibold tracking-wide transition-all duration-200 whitespace-nowrap active:scale-95 ${
                filter === f
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-secondary/5 text-foreground/60 hover:bg-secondary/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 section-padding max-w-6xl mx-auto">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <ScrollReveal key={`${img.src}-${filter}`} delay={i * 60}>
              <div
                className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group relative"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={`${img.category} by ${img.credit}`}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-heading font-semibold text-secondary-foreground">{img.category}</p>
                    <p className="text-xs text-secondary-foreground/60">by {img.credit}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Instagram CTA */}
        <ScrollReveal className="mt-16 text-center">
          <p className="text-muted-foreground text-sm mb-3">See more on Instagram</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            className="font-heading font-semibold text-primary hover:underline"
          >
            @luxe.salon
          </a>
        </ScrollReveal>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-8 cursor-pointer animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-4xl max-h-[85vh] relative">
            <img
              src={filtered[selected].src}
              alt=""
              className="max-w-full max-h-[80vh] rounded-lg object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-sm font-heading font-semibold text-secondary-foreground">{filtered[selected].category}</p>
              <p className="text-xs text-secondary-foreground/60">by {filtered[selected].credit}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
