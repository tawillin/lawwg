import { siteConfig } from "@/data/siteConfig";
import JsonLd from "./JsonLd";

export default function OrganizationSchema() {
  const org = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://lawwg.com/#organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: "https://lawwg.com",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: siteConfig.description,
    areaServed: {
      "@type": "State",
      name: "Texas",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 33.1972,
        longitude: -96.6397,
      },
      geoRadius: "80000",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "350",
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
      siteConfig.social.youtube,
    ],
    location: siteConfig.offices.map((office) => ({
      "@type": "Place",
      name: office.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: office.street.split("\n").pop(),
        addressLocality: office.city,
        addressRegion: office.state,
        postalCode: office.zip,
        addressCountry: "US",
      },
    })),
    knowsAbout: [
      "Estate Planning",
      "Probate",
      "Elder Law",
      "Medicaid Planning",
      "Real Estate Law",
      "Business Formation",
      "Uncontested Divorce",
      "Trusts",
      "Wills",
      "Powers of Attorney",
      "Guardianship",
    ],
  };

  return <JsonLd data={org} />;
}
