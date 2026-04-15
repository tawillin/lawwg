import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import DivorceDiagram from "@/components/practice-areas/diagrams/DivorceDiagram";

export const metadata: Metadata = {
  title: "Uncontested Divorce Attorney | North Texas",
  description:
    "Affordable uncontested divorce for Texas couples who agree on terms. Willingham Law Group handles your case in McKinney, Frisco, Plano, and DFW. Call today.",
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
      slug="uncontested-divorce"
      sections={[
        {
          heading: "What is an uncontested divorce?",
          body: "An uncontested divorce is a dissolution of marriage in which both spouses agree on all material terms — including property division, debt allocation, spousal maintenance, and, if children are involved, custody, visitation, and child support. Because there are no disputes for the court to resolve, uncontested divorces proceed far more quickly, cost significantly less, and involve much less emotional strain than contested proceedings. In Texas, an uncontested divorce can often be finalized shortly after the mandatory 60-day waiting period expires. The key requirement is genuine agreement: both parties must voluntarily consent to all terms without coercion. Willingham Law Group helps couples throughout McKinney, Frisco, Plano, and the greater DFW area navigate the uncontested divorce process from initial filing through final decree.",
        },
        {
          heading: "Texas divorce requirements",
          body: "To file for divorce in Texas, at least one spouse must have been a resident of Texas for a continuous six-month period and a resident of the county where the petition is filed for at least 90 days preceding the filing date. Texas is a no-fault divorce state, meaning a spouse can file for divorce on the ground of \"insupportability\" — the marriage has become insupportable because of discord or conflict that destroys the legitimate ends of the marital relationship with no reasonable expectation of reconciliation. Texas law also recognizes fault-based grounds (such as cruelty, adultery, or abandonment), but these are not required and are rarely relevant in uncontested proceedings. After the Original Petition for Divorce is filed, Texas imposes a mandatory 60-day waiting period before the divorce can be finalized, as set forth in Texas Family Code Section 6.702.",
        },
        {
          heading: "Property division in a community property state",
          body: "Texas is one of nine community property states in the United States. Under Texas Family Code Chapter 3, all property acquired by either spouse during the marriage is presumed to be community property — owned equally by both spouses — regardless of which spouse earned the income or whose name is on the title. Separate property includes assets owned before the marriage, gifts received by one spouse, and inheritances. In a divorce, the court divides community property in a manner that is \"just and right,\" which is not necessarily 50/50. In an uncontested divorce, the spouses negotiate and agree on the division themselves. This agreement is documented in a Property Settlement Agreement or directly in the Final Decree of Divorce. Our attorneys draft clear, enforceable property division provisions covering real estate, retirement accounts (including QDROs for 401(k) and pension plans), bank accounts, vehicles, and business interests.",
        },
        {
          heading: "Child custody and support",
          body: "When children are involved in a Texas divorce, the court requires a Suit Affecting the Parent-Child Relationship (SAPCR) addressing conservatorship, possession and access, and child support. Texas uses the terms \"managing conservator\" and \"possessory conservator\" rather than \"custody\" and \"visitation.\" The standard possession order (SPO) under Texas Family Code Section 153.312 establishes the baseline visitation schedule, though parents in an uncontested divorce are free to agree on a modified schedule that better fits their family. Child support in Texas is calculated as a percentage of the obligor's net monthly resources — 20% for one child, 25% for two, and so on up to a statutory cap. Even in amicable divorces, these arrangements must meet statutory requirements and serve the children's best interest. Willingham Law Group ensures your parenting plan is legally compliant and protects your children's welfare.",
        },
        {
          heading: "The uncontested divorce process step by step",
          body: "The uncontested divorce process in Texas follows a clear sequence. First, one spouse (the petitioner) files an Original Petition for Divorce with the district clerk in the appropriate county. The other spouse (the respondent) is then served with the petition or signs a Waiver of Service. The mandatory 60-day waiting period begins on the date of filing. During this period, the spouses finalize their agreement on all terms — property division, debt allocation, children's issues, and any spousal maintenance. Our attorneys draft the Agreed Final Decree of Divorce, which incorporates all agreed terms into a single enforceable court order. In many uncontested cases, the decree can be approved by the judge without a formal court hearing — known as a \"prove-up\" by affidavit. When a hearing is required, it typically takes less than 15 minutes. The entire process can be completed in as little as 61 days from filing.",
        },
        {
          heading: "Mediation in Texas divorce",
          body: "Even when spouses generally agree on the terms of their divorce, specific issues may require negotiation. Texas courts strongly favor mediation as a method of resolving disputes without the cost and adversarial nature of litigation. Under Texas Family Code Section 153.0071, mediated settlement agreements in cases involving children are binding and enforceable. In mediation, a neutral third-party mediator facilitates discussion between the spouses, helping them reach agreement on contested issues. Mediation is confidential, voluntary, and far less expensive than a courtroom trial. Many couples who begin the divorce process thinking they will have a contested case are able to resolve their differences through mediation and proceed as an uncontested case. Our attorneys represent clients in mediation throughout McKinney, Plano, Frisco, and the greater North Texas area, ensuring that any agreement reached protects your rights and interests.",
        },
        {
          heading: "Cost of uncontested divorce in Texas",
          body: "The cost of an uncontested divorce in Texas is significantly lower than a contested proceeding. Court filing fees in Collin County, Denton County, and Dallas County typically range from $300 to $350. Attorney's fees for an uncontested divorce vary based on the complexity of the case — whether children are involved, the volume of community property to be divided, and whether retirement accounts require a Qualified Domestic Relations Order (QDRO). A straightforward uncontested divorce with no children and limited assets may cost a few thousand dollars in total, while more complex cases with children, real estate, and retirement accounts will cost more but still a fraction of contested litigation. Willingham Law Group provides transparent pricing for uncontested divorce services, so you know what to expect before you begin. We believe that an amicable divorce should be affordable.",
        },
        {
          heading: "Agreed divorce vs. contested divorce",
          body: "The distinction between an agreed (uncontested) divorce and a contested divorce comes down to one question: do both spouses agree on all terms? In an agreed divorce, the spouses resolve property division, debt, custody, and support by negotiation — and the court simply approves their agreement. In a contested divorce, the court must decide one or more disputed issues after hearing evidence and argument from both sides. Contested divorces can take a year or more, cost tens of thousands of dollars in attorney's fees, and involve emotionally draining discovery, depositions, and trial preparation. An uncontested divorce, by contrast, can be completed in as little as 61 days at a fraction of the cost. Even when spouses disagree on certain issues, mediation can often bridge the gap and convert a potentially contested case into an agreed one. Our attorneys always explore every avenue for resolution before recommending litigation.",
        },
        {
          heading: "When uncontested divorce is appropriate",
          body: "Uncontested divorce is appropriate when both spouses are willing to cooperate, communicate openly about finances and children, and negotiate in good faith. It works best when neither spouse is hiding assets, there is no history of domestic violence or coercion, and both parties have a reasonable understanding of the marital estate. Uncontested divorce is not appropriate when one spouse is pressuring the other to accept unfavorable terms, when there are complex business valuations or hidden assets, or when one spouse needs the court's intervention to ensure a fair outcome. If you are unsure whether your case qualifies as uncontested, Willingham Law Group offers consultations to evaluate your situation. We serve families throughout McKinney, Frisco, Plano, Allen, Prosper, and the greater DFW area, and we will always advise you honestly about the best path forward for your circumstances.",
        },
      ]}
      faqs={[
        {
          q: "How long does an uncontested divorce take in Texas?",
          a: "Texas requires a minimum 60-day waiting period from the date the Original Petition for Divorce is filed. An uncontested divorce can be finalized shortly after that period expires — often within 61 to 90 days total. The timeline depends on how quickly the spouses reach agreement on all terms and complete the required paperwork.",
        },
        {
          q: "Do both spouses need a lawyer for an uncontested divorce?",
          a: "Texas law does not require both spouses to have separate attorneys, but it is strongly recommended. One attorney cannot ethically represent both parties. Typically, one spouse retains an attorney to prepare the documents, and the other spouse may choose to retain their own counsel for independent review or proceed without representation.",
        },
        {
          q: "Can I get a divorce in Texas if my spouse does not agree?",
          a: "Yes. Texas does not require mutual consent to obtain a divorce. If one spouse files for divorce and the other does not agree to the terms, the case becomes contested and the court will resolve disputed issues. However, the divorce itself will still be granted — one spouse cannot prevent the other from obtaining a divorce in Texas.",
        },
        {
          q: "How is property divided in a Texas divorce?",
          a: "Texas is a community property state. All property and debt acquired during the marriage is presumed to be community property, owned equally by both spouses. In an uncontested divorce, the spouses agree on how to divide community property. In a contested divorce, the court divides it in a manner that is \"just and right,\" which is not necessarily 50/50.",
        },
        {
          q: "What is the standard possession order for children in Texas?",
          a: "The Standard Possession Order (SPO) under Texas Family Code Section 153.312 provides a structured visitation schedule for the non-custodial parent, typically including the first, third, and fifth weekends of each month, Thursday evenings, alternating holidays, and extended summer possession. Parents can agree to a modified schedule in an uncontested divorce.",
        },
        {
          q: "Do I have to go to court for an uncontested divorce?",
          a: "Not always. In many Texas counties, an uncontested divorce can be finalized without a court appearance by submitting an Agreed Final Decree along with affidavits from both parties. When a hearing is required, it is typically brief — often lasting 10 to 15 minutes — and only one spouse may need to appear.",
        },
        {
          q: "How much does an uncontested divorce cost in Texas?",
          a: "Court filing fees in the DFW area typically range from $300 to $350. Total costs, including attorney's fees, vary based on complexity — whether children are involved, the amount of property to divide, and whether retirement accounts require a QDRO. Uncontested divorces cost significantly less than contested proceedings.",
        },
        {
          q: "Does Willingham Law Group handle uncontested divorces in my area?",
          a: "Yes. We handle uncontested divorces throughout North Texas, including McKinney, Frisco, Plano, Allen, Prosper, Celina, and the greater Dallas-Fort Worth area. We offer in-office and virtual consultations to make the process as convenient as possible.",
        },
      ]}
      relatedSlugs={["estate-planning", "real-estate-law"]}
    />
  );
}
