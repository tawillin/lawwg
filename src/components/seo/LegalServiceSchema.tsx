import type { PracticeArea } from "@/data/practiceAreas";
import { siteConfig } from "@/data/siteConfig";
import JsonLd from "./JsonLd";

export default function LegalServiceSchema({
  practiceArea,
}: {
  practiceArea: PracticeArea;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${practiceArea.title} | WG Law`,
    url: `https://lawwg.com/practice-areas/${practiceArea.slug}`,
    description: practiceArea.description,
    telephone: siteConfig.phone,
    provider: {
      "@type": "LegalService",
      "@id": "https://lawwg.com/#organization",
      name: siteConfig.shortName,
      legalName: siteConfig.name,
    },
    areaServed: [
      { "@type": "City", name: "McKinney", containedIn: { "@type": "State", name: "Texas" } },
      { "@type": "City", name: "Frisco", containedIn: { "@type": "State", name: "Texas" } },
      { "@type": "City", name: "Plano", containedIn: { "@type": "State", name: "Texas" } },
      { "@type": "City", name: "Allen", containedIn: { "@type": "State", name: "Texas" } },
      { "@type": "City", name: "Southlake", containedIn: { "@type": "State", name: "Texas" } },
      { "@type": "City", name: "Dallas", containedIn: { "@type": "State", name: "Texas" } },
      { "@type": "City", name: "Fort Worth", containedIn: { "@type": "State", name: "Texas" } },
      { "@type": "City", name: "Denton", containedIn: { "@type": "State", name: "Texas" } },
    ],
    serviceType: practiceArea.title,
  };

  return <JsonLd data={data} />;
}
