import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import BusinessFormationDiagram from "@/components/practice-areas/diagrams/BusinessFormationDiagram";

export const metadata: Metadata = {
  title: "Business Formation",
  description: "Choose the right business entity — LLC, S-Corp, or C-Corp — with guidance from our business formation attorneys. Protect yourself and build on a solid legal foundation.",
};

export default function BusinessFormationPage() {
  return (
    <PracticePageLayout
      eyebrow="Business Law"
      title="Business Formation"
      subtitle="The entity structure you choose for your business determines your personal liability exposure, tax treatment, and ability to raise capital. Getting it right from the start matters."
      diagramTitle="Choosing Your Business Entity"
      diagramSubtitle="Compare the four most common business structures on liability, taxation, and complexity. The shield represents personal liability protection."
      diagram={<BusinessFormationDiagram />}
      sections={[
        {
          heading: "Why entity choice matters",
          body: "Operating as a sole proprietor means your personal assets — your home, savings, car — are at risk if your business is sued or fails. Forming an LLC or corporation creates a legal shield between you and your business, limiting your personal exposure to what you've invested in the business.",
        },
        {
          heading: "LLC vs. S-Corp vs. C-Corp",
          body: "An LLC (Limited Liability Company) offers flexibility in management and taxation with minimal formalities — ideal for most small businesses and real estate investors. An S-Corp provides pass-through taxation with potential self-employment tax savings for business owners who pay themselves a salary. A C-Corp is best for businesses seeking outside investment or planning to go public, but comes with double taxation on dividends.",
        },
        {
          heading: "Operating agreements and bylaws",
          body: "Forming an entity is just the first step. An operating agreement (for LLCs) or bylaws (for corporations) governs how the business is run — how decisions are made, how profits are distributed, what happens if an owner wants to leave, and how disputes are resolved. We draft these documents to reflect your specific situation and protect all owners.",
        },
        {
          heading: "Ongoing compliance",
          body: "Maintaining your liability protection requires ongoing compliance — annual filings, separate bank accounts, proper documentation of major decisions, and more. Failing to observe corporate formalities can lead courts to 'pierce the corporate veil,' eliminating your liability protection. We help you stay compliant.",
        },
      ]}
      relatedSlugs={["litigation-defense"]}
    />
  );
}
