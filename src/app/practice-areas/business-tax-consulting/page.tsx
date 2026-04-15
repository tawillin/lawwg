import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import BusinessTaxDiagram from "@/components/practice-areas/diagrams/BusinessTaxDiagram";

export const metadata: Metadata = {
  title: "Business Tax Consulting in Texas",
  description: "Strategic business tax consulting for Texas entrepreneurs, business owners, and professionals — minimizing tax liability through smart entity structure and planning.",
};

export default function BusinessTaxConsultingPage() {
  return (
    <PracticePageLayout
      eyebrow="Business Services"
      title="Business Tax Consulting"
      subtitle="The difference between a good tax outcome and a great one is strategy. WG Law helps Texas business owners reduce their tax burden legally through smart entity selection, income planning, and long-term business structuring."
      diagramTitle="Business Tax Strategy"
      diagramSubtitle="Six integrated planning disciplines work together to minimize your total tax liability — from entity selection through business succession."
      diagram={<BusinessTaxDiagram />}
      sections={[
        {
          heading: "Entity selection and structure",
          body: "The legal structure of your business is one of the most consequential tax decisions you will make. Sole proprietorships, LLCs, S-Corporations, and C-Corporations each carry very different tax implications for self-employment taxes, income splitting, fringe benefits, and exit strategies. We analyze your situation and recommend the structure that minimizes your total tax burden — not just today, but over the life of your business.",
        },
        {
          heading: "Income planning and shifting",
          body: "Proper income planning can legitimately shift income to family members in lower tax brackets, time the recognition of income and deductions, and take advantage of qualified business income deductions available to pass-through entities. These strategies are entirely legal and enormously effective when implemented with proper documentation and coordination.",
        },
        {
          heading: "Retirement and wealth accumulation",
          body: "Business ownership provides unique retirement savings opportunities not available to employees. Solo 401(k) plans, SEP-IRAs, defined benefit plans, and other qualified plans can allow you to shelter significantly more income from taxation while building long-term wealth. We help you select and implement the right plan for your business size and income level.",
        },
        {
          heading: "Business succession planning",
          body: "Every business owner eventually exits their business — through sale, gifting, or death. Without a succession plan, that exit can trigger unnecessary capital gains taxes, estate taxes, or both. We help you plan the transition of your business in a way that minimizes tax exposure and ensures your legacy transfers efficiently to the next generation or buyer.",
        },
      ]}
      relatedSlugs={["estate-planning", "real-estate-law"]}
    />
  );
}
