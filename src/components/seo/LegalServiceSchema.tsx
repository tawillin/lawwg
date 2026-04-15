import type { PracticeArea } from "@/data/practiceAreas";
import JsonLd from "./JsonLd";

export default function LegalServiceSchema({
  practiceArea,
}: {
  practiceArea: PracticeArea;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${practiceArea.title} — Willingham Law Group`,
    url: `https://lawwg.com/practice-areas/${practiceArea.slug}`,
    description: practiceArea.description,
    provider: {
      "@type": "LegalService",
      "@id": "https://lawwg.com/#organization",
      name: "Willingham Law Firm, PC",
    },
    areaServed: {
      "@type": "State",
      name: "Texas",
    },
    serviceType: practiceArea.title,
  };

  return <JsonLd data={data} />;
}
