import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import DivorceDiagram from "@/components/practice-areas/diagrams/DivorceDiagram";

export const metadata: Metadata = {
  title: "Uncontested Divorce",
  description: "Straightforward, affordable uncontested divorce services for Texas couples who have reached an agreement — handled with efficiency and discretion.",
};

export default function UncontestedDivorcePage() {
  return (
    <PracticePageLayout
      eyebrow="Family Law"
      title="Uncontested Divorce"
      subtitle="When both spouses agree on the terms, divorce does not need to be a drawn-out, expensive battle. WG Law helps Texas couples resolve their marriage efficiently, respectfully, and affordably."
      diagramTitle="The Uncontested Divorce Process"
      diagramSubtitle="Texas law requires a 60-day waiting period after filing before a divorce can be finalized — but the process itself can be remarkably straightforward when both parties are in agreement."
      diagram={<DivorceDiagram />}
      sections={[
        {
          heading: "What makes a divorce 'uncontested'?",
          body: "A divorce is uncontested when both spouses reach agreement on all key issues: property division, debt allocation, and — if children are involved — custody, visitation, and child support. When there is no dispute to litigate, the process is significantly faster, less expensive, and far less stressful than a contested proceeding.",
        },
        {
          heading: "The Texas divorce process",
          body: "We prepare and file all required petitions and agreements, serve the other party or arrange for acceptance of service, draft a comprehensive Final Decree of Divorce covering all agreed terms, and guide you through the mandatory 60-day waiting period to final signature. In most uncontested cases, neither spouse needs to appear in court.",
        },
        {
          heading: "Property division and debt",
          body: "Texas is a community property state, meaning most assets and debts acquired during the marriage are jointly owned. The divorce decree must address how community property and debts will be divided. We draft clear, enforceable property settlement agreements that prevent future disputes — covering real estate, retirement accounts, vehicles, and other assets.",
        },
        {
          heading: "Children and custody arrangements",
          body: "When children are involved, Texas courts require a Parenting Plan (called a Suit Affecting the Parent-Child Relationship, or SAPCR) addressing conservatorship, possession schedules, and child support. Even in amicable divorces, these arrangements must meet statutory requirements. We ensure your parenting plan is legally sound and in your children's best interest.",
        },
      ]}
      relatedSlugs={["estate-planning", "real-estate-law"]}
    />
  );
}
