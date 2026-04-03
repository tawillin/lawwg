import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import ElderLawDiagram from "@/components/practice-areas/diagrams/ElderLawDiagram";

export const metadata: Metadata = {
  title: "Elder Law",
  description: "Planning for long-term care, Medicaid, powers of attorney, and guardianship. Our elder law attorneys help seniors and families prepare for every stage of aging.",
};

export default function ElderLawPage() {
  return (
    <PracticePageLayout
      eyebrow="Senior & Family Planning"
      title="Elder Law"
      subtitle="Elder law helps seniors and their families plan ahead for long-term care costs, medical decision-making, and asset protection — before a crisis forces difficult decisions."
      diagramTitle="Elder Law Planning Areas"
      diagramSubtitle="A comprehensive elder law plan addresses four interconnected areas that protect seniors and their families."
      diagram={<ElderLawDiagram />}
      sections={[
        {
          heading: "Medicaid planning",
          body: "Long-term nursing home care can cost $6,000–$12,000 per month. Medicaid can cover these costs, but strict asset and income limits apply. Proactive Medicaid planning — ideally years before care is needed — can help preserve significant assets for a spouse or family while still qualifying for benefits.",
        },
        {
          heading: "Powers of Attorney",
          body: "A durable power of attorney designates someone to make financial decisions on your behalf if you become incapacitated. A healthcare power of attorney (or healthcare proxy) names someone to make medical decisions. These documents are essential — without them, a court may need to appoint a guardian, which is expensive and time-consuming.",
        },
        {
          heading: "Long-term care planning",
          body: "Planning for long-term care involves more than just finances. We help families evaluate options — aging in place, assisted living, memory care, nursing facilities — and create legal structures that give caregivers the authority they need while protecting the senior's interests and dignity.",
        },
        {
          heading: "Guardianship and conservatorship",
          body: "When an adult can no longer manage their own affairs and has no power of attorney in place, a court may need to appoint a guardian (for personal decisions) or conservator (for financial decisions). We represent family members seeking guardianship and help ensure the process is handled with compassion and efficiency.",
        },
      ]}
      relatedSlugs={["trusts", "probate"]}
    />
  );
}
