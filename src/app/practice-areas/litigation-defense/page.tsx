import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import LitigationDiagram from "@/components/practice-areas/diagrams/LitigationDiagram";

export const metadata: Metadata = {
  title: "Litigation Defense",
  description: "When you're sued, you need a strategic defense. Our litigation attorneys guide you through every stage of the legal process with focus and clarity.",
};

export default function LitigationPage() {
  return (
    <PracticePageLayout
      eyebrow="Civil Defense"
      title="Litigation Defense"
      subtitle="Being named as a defendant in a lawsuit is stressful. Our litigation team provides calm, strategic defense — understanding the full lifecycle of your case and working toward the best possible outcome."
      diagramTitle="The Litigation Lifecycle"
      diagramSubtitle="Most civil cases follow a predictable path. Knowing where you are in the process reduces anxiety and helps you make better decisions."
      diagram={<LitigationDiagram />}
      sections={[
        {
          heading: "Early case assessment",
          body: "The most important phase of litigation is often before any courtroom appearance. We conduct a thorough review of the claims against you, assess the strengths and weaknesses of the plaintiff's case, identify potential defenses, and help you understand the realistic range of outcomes. Early assessment shapes the entire defense strategy.",
        },
        {
          heading: "Discovery — the evidence phase",
          body: "Discovery is the process by which both sides exchange information — documents, written questions (interrogatories), and depositions. A skilled defense attorney uses discovery both to obtain information from the other side and to build the record that supports your defense or a favorable settlement.",
        },
        {
          heading: "Motions practice",
          body: "Before trial, attorneys file motions to shape the issues the jury will hear. A motion to dismiss may end the case early if the plaintiff's claims are legally insufficient. A motion for summary judgment can resolve the case without trial if there are no genuine factual disputes. Effective motions practice can dramatically change the trajectory of litigation.",
        },
        {
          heading: "Settlement vs. trial",
          body: "The vast majority of civil cases settle before trial. Settlement avoids the uncertainty and expense of trial, but requires careful analysis of your risk exposure, the strength of your defenses, and the cost of continued litigation. We provide honest guidance on whether settlement makes sense — and fight hard at trial when it doesn't.",
        },
      ]}
      relatedSlugs={["business-formation", "probate"]}
    />
  );
}
