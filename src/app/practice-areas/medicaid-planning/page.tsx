import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import ElderLawDiagram from "@/components/practice-areas/diagrams/ElderLawDiagram";

export const metadata: Metadata = {
  title: "Texas Medicaid Planning Attorneys",
  description: "Protect your assets and qualify for Medicaid long-term care benefits. WG Law helps McKinney and Southlake families navigate Medicaid planning legally and ethically.",
};

export default function MedicaidPlanningPage() {
  return (
    <PracticePageLayout
      eyebrow="Elder Law"
      title="Medicaid Planning"
      subtitle="Long-term care costs can devastate a family's finances. We help you legally protect your assets while qualifying your loved one for Medicaid — so they get the care they need without financial ruin."
      diagramTitle="Elder Law &amp; Medicaid Planning"
      diagramSubtitle="Medicaid planning is one of four interconnected elder law disciplines that work together to protect seniors and their families."
      diagram={<ElderLawDiagram />}
      sections={[
        {
          heading: "Why Medicaid planning matters",
          body: "Nursing home care in Texas averages $3,000–$4,000 per month — sometimes significantly more. Medicare does not cover long-term custodial care. Medicaid does, but strict asset and income limits apply. Without proper planning, a family can spend down an entire lifetime of savings before qualifying. We help families navigate this legally and ethically.",
        },
        {
          heading: "Legal asset protection strategies",
          body: "WG Law can assist you in legally converting assets into non-countable savings to qualify your loved one for Medicaid. This is a legal, ethical, and moral approach — as one court noted: 'No agency of the government has any right to complain about the fact that middle-class people choose Medicaid planning when it is the government itself that has established the rule that poverty is a prerequisite to government assistance.'",
        },
        {
          heading: "Transfer on Death and Lady Bird Deeds",
          body: "Texas offers powerful real estate planning tools that can protect your home while preserving Medicaid eligibility. A Lady Bird Deed (Enhanced Life Estate Deed) allows you to retain full control of your home during your lifetime while directing it to pass to your heirs at death — outside of probate and generally outside of Medicaid estate recovery.",
        },
        {
          heading: "Posterity planning",
          body: "Posterity planning combines Medicaid planning with estate planning to create a comprehensive strategy that protects assets for your heirs while qualifying your loved one for government assistance. This holistic approach considers your entire family's financial picture and long-term goals.",
        },
      ]}
      relatedSlugs={["elder-law", "estate-planning", "probate"]}
    />
  );
}
