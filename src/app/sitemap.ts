import type { MetadataRoute } from "next";
import { attorneys } from "@/data/attorneys";
import { locations } from "@/data/locations";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lawwg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const practiceAreaSlugs = [
    "elder-law",
    "probate",
    "estate-planning",
    "medicaid-planning",
    "real-estate-law",
    "business-tax-consulting",
    "uncontested-divorce",
    // Legacy routes still accessible
    "trusts",
    "litigation-defense",
    "business-formation",
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/practice-areas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/5-star-reviews`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/trust-scorecard`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    ...practiceAreaSlugs.map((slug) => ({
      url: `${baseUrl}/practice-areas/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...attorneys.map((a) => ({
      url: `${baseUrl}/attorneys/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...locations.map((l) => ({
      url: `${baseUrl}/locations/${l.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
