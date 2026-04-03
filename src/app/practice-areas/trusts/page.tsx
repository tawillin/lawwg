import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import TrustsDiagram from "@/components/practice-areas/diagrams/TrustsDiagram";

export const metadata: Metadata = {
  title: "Trusts & Estate Planning",
  description: "Understand how revocable and irrevocable trusts protect your assets and ensure your wishes are carried out. Free consultation available.",
};

export default function TrustsPage() {
  return (
    <PracticePageLayout
      eyebrow="Estate Planning"
      title="Trusts &amp; Estate Planning"
      subtitle="A trust is one of the most powerful tools available to protect your assets and ensure they pass to the right people — without the delay, expense, and public record of probate."
      diagramTitle="How a Trust Works"
      diagramSubtitle="The trust structure separates ownership from control, allowing assets to pass to beneficiaries efficiently."
      diagram={<TrustsDiagram />}
      sections={[
        {
          heading: "What is a trust?",
          body: "A trust is a legal arrangement where one person (the grantor) transfers assets to a trustee, who holds and manages those assets for the benefit of named beneficiaries. Unlike a will, a trust can take effect during your lifetime and typically avoids the probate process entirely.",
        },
        {
          heading: "Revocable vs. Irrevocable Trusts",
          body: "A revocable (living) trust can be changed or revoked at any time during your life. It provides privacy and avoids probate, but your assets are still considered part of your taxable estate. An irrevocable trust, once established, generally cannot be changed — but this rigidity provides stronger asset protection and potential estate tax benefits.",
        },
        {
          heading: "Who should have a trust?",
          body: "Trusts are valuable for anyone with real estate, significant savings, minor children, or a desire to avoid probate. They are especially important for blended families, individuals with special-needs beneficiaries, or business owners who want to ensure a smooth transition of their interests.",
        },
        {
          heading: "Funding your trust",
          body: "A trust only works if assets are actually transferred into it — a process called 'funding.' This involves re-titling real estate, updating financial account ownership, and changing beneficiary designations. We guide you through every step to ensure your trust is properly funded and your planning is complete.",
        },
      ]}
      relatedSlugs={["probate", "elder-law"]}
    />
  );
}
