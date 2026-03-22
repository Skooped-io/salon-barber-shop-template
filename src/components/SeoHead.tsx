import { useEffect } from "react";
import { seoConfig } from "@/lib/config";

interface SeoHeadProps {
  page: keyof typeof seoConfig.seo;
}

const SeoHead = ({ page }: SeoHeadProps) => {
  const meta = seoConfig.seo[page];

  useEffect(() => {
    if (meta?.title) document.title = meta.title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const setOgMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    if (meta?.description) {
      setMeta("description", meta.description);
      setOgMeta("og:description", meta.description);
    }
    if (meta?.title) {
      setOgMeta("og:title", meta.title);
    }

    // JSON-LD (only on home page)
    if (page === "home") {
      const existingLd = document.querySelector('script[data-ld="local-business"]');
      if (existingLd) existingLd.remove();

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-ld", "local-business");
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": seoConfig.businessName,
        "telephone": seoConfig.phone,
        "email": seoConfig.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": seoConfig.address.street,
          "addressLocality": seoConfig.address.city,
          "addressRegion": seoConfig.address.state,
          "postalCode": seoConfig.address.zip,
        },
        "url": window.location.origin,
        "areaServed": seoConfig.serviceArea,
      });
      document.head.appendChild(script);

      return () => {
        script.remove();
      };
    }
  }, [page, meta]);

  return null;
};

export default SeoHead;
