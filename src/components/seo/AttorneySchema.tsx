import type { Attorney } from "@/data/attorneys";
import JsonLd from "./JsonLd";

export default function AttorneySchema({ attorney }: { attorney: Attorney }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: attorney.name,
    jobTitle: attorney.title,
    url: `https://lawwg.com/attorneys/${attorney.slug}`,
    image: attorney.image
      ? `https://lawwg.com${attorney.image}`
      : undefined,
    description: attorney.bio,
    worksFor: {
      "@type": "LegalService",
      "@id": "https://lawwg.com/#organization",
      name: "Willingham Law Firm, PC",
    },
    knowsAbout: attorney.practiceAreas,
  };

  return <JsonLd data={data} />;
}
