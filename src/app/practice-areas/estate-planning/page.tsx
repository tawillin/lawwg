import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import TrustsDiagram from "@/components/practice-areas/diagrams/TrustsDiagram";

export const metadata: Metadata = {
  title: "Estate Planning Attorneys in Texas",
  description: "Wills, trusts, powers of attorney, and advance directives from experienced North Texas estate planning attorneys. Serving Frisco, McKinney, and Plano. Call today.",
};

export default function EstatePlanningPage() {
  return (
    <PracticePageLayout
      eyebrow="Estate Planning"
      title="Estate Planning"
      subtitle="A comprehensive estate plan protects your assets, ensures your wishes are honored, and spares your family from unnecessary stress and expense. We make it simple."
      diagramTitle="Understanding Trust Structures"
      diagramSubtitle="A trust separates legal ownership from benefit — allowing assets to pass efficiently to your loved ones outside of probate."
      diagram={<TrustsDiagram />}
      sections={[
        {
          heading: "Wills and Living Trusts",
          body: "A will directs how your assets should be distributed after your death and names guardians for minor children. A living trust goes further — it transfers assets during your lifetime into a structure that can avoid probate, maintain privacy, and provide for management of your assets if you become incapacitated.",
        },
        {
          heading: "Powers of Attorney and Healthcare Directives",
          body: "A durable power of attorney names someone to make financial decisions on your behalf if you cannot. A healthcare power of attorney and advance directive (living will) ensure your medical wishes are respected if you are unable to communicate them. These documents are essential — without them, families may face a costly court proceeding.",
        },
        {
          heading: "Asset Protection and Wealth Transfer",
          body: "Strategic estate planning minimizes estate taxes, protects assets from creditors, and ensures wealth transfers efficiently to the next generation. We help identify the right combination of tools — irrevocable trusts, family limited partnerships, charitable vehicles — tailored to your specific situation.",
        },
        {
          heading: "When should I update my estate plan?",
          body: "Estate plans should be reviewed every three to five years, and updated after major life events: marriage, divorce, birth of a child or grandchild, significant changes in financial situation, or the death of a named beneficiary or executor. Keeping your plan current ensures it continues to reflect your wishes.",
        },
      ]}
      relatedSlugs={["probate", "elder-law", "medicaid-planning"]}
    />
  );
}
