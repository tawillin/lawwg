import { siteConfig } from "@/data/siteConfig";
import JsonLd from "./JsonLd";

type BlogPostSchemaProps = {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
};

export default function BlogPostSchema({
  title,
  description,
  slug,
  date,
  author,
}: BlogPostSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `https://lawwg.com/blog/${slug}`,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "LegalService",
      "@id": "https://lawwg.com/#organization",
      name: siteConfig.shortName,
      legalName: siteConfig.name,
      url: "https://lawwg.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lawwg.com/blog/${slug}`,
    },
  };

  return <JsonLd data={data} />;
}
