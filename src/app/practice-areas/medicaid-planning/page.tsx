import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import ElderLawDiagram from "@/components/practice-areas/diagrams/ElderLawDiagram";

export const metadata: Metadata = {
  title: "Texas Medicaid Planning Attorneys | North Texas",
  description:
    "Protect your assets and qualify for Medicaid long-term care benefits in Texas. Willingham Law Group helps families in McKinney, Frisco, and Plano plan ahead. Call today.",
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
      slug="medicaid-planning"
      sections={[
        {
          heading: "What is Medicaid planning?",
          body: "Medicaid planning is the legal process of arranging your finances and assets so that you or a loved one can qualify for Medicaid-funded long-term care without impoverishing the family. Unlike Medicare, which covers short-term rehabilitation, Medicaid is the primary government program that pays for extended nursing home care, assisted living, and in-home support services. Effective Medicaid planning requires a thorough understanding of federal regulations and Texas-specific rules, including income caps, asset limits, transfer penalties, and spousal protections. When done correctly and in advance, Medicaid planning preserves family wealth while ensuring access to the care your loved one needs. Willingham Law Group guides North Texas families through every step of this complex process.",
        },
        {
          heading: "Texas Medicaid eligibility requirements",
          body: "Texas participates in the federal Medicaid program but sets its own eligibility rules for long-term care benefits. To qualify for Medicaid nursing home coverage in Texas, an applicant must be age 65 or older (or disabled), a U.S. citizen or qualified non-citizen, and a Texas resident. The applicant must also demonstrate a medical need for the level of care provided in a nursing facility. Texas uses a determination of medical necessity based on functional limitations in activities of daily living such as bathing, dressing, eating, transferring, and toileting. The Texas Health and Human Services Commission (HHSC) administers Medicaid eligibility determinations, and applications can be filed at local HHSC offices or online. Our attorneys in McKinney and Frisco help families gather the documentation needed to demonstrate eligibility and avoid common pitfalls that lead to denials.",
        },
        {
          heading: "Income and asset limits in Texas",
          body: "Texas is an \"income cap\" state, meaning an applicant whose gross monthly income exceeds a set threshold — currently around $2,829 per month — cannot qualify for Medicaid long-term care unless the excess income is redirected into a Qualified Income Trust (also called a Miller Trust). On the asset side, a single applicant may retain no more than $2,000 in countable resources. Certain assets are exempt, including the applicant's primary residence (up to an equity limit), one vehicle, personal belongings, irrevocable burial plans, and certain life insurance policies with limited face value. Understanding the distinction between countable and exempt assets is critical. Our attorneys analyze your full financial picture to identify which assets are already protected and which require restructuring to meet Texas Medicaid thresholds.",
        },
        {
          heading: "The Medicaid look-back period",
          body: "When you apply for Medicaid long-term care in Texas, HHSC reviews all financial transactions made during the 60-month period (five years) preceding the application date. This is known as the look-back period. Any gifts, transfers for less than fair market value, or asset repositioning during this window can trigger a penalty period — a stretch of time during which Medicaid will not pay for nursing home care. The penalty is calculated by dividing the total uncompensated transfers by the average monthly cost of nursing home care in Texas. The result can leave families responsible for months or even years of private-pay costs. This is why advance planning is so important. Starting the Medicaid planning process well before the need arises gives families the greatest number of legal options to protect their assets.",
        },
        {
          heading: "Legal strategies to protect assets",
          body: "Texas law provides several legitimate strategies to protect assets while qualifying for Medicaid. These include establishing irrevocable trusts, converting countable assets into exempt assets (such as prepaying funeral expenses or making home improvements), purchasing Medicaid-compliant annuities, and using caregiver agreements to compensate family members who provide care. Lady Bird Deeds (Enhanced Life Estate Deeds) allow homeowners to retain full control of their property during life while passing it to heirs outside of probate and generally outside of Medicaid estate recovery. Each strategy carries specific legal requirements and timing considerations. Willingham Law Group develops customized asset protection plans for families across McKinney, Frisco, Plano, and the greater DFW area, ensuring every strategy is implemented correctly and in compliance with current Texas Medicaid rules.",
        },
        {
          heading: "Medicaid applications and appeals",
          body: "Filing a Medicaid application in Texas requires extensive documentation — bank statements, tax returns, insurance policies, property records, trust documents, and more. Incomplete or improperly documented applications are frequently denied, and the appeals process can be lengthy. When a Medicaid application is denied, the applicant has the right to request a fair hearing before the HHSC Office of Inspector General. Our attorneys prepare thorough, well-documented applications designed to minimize the risk of denial. When denials do occur, we represent families through the administrative appeals process, challenging improper penalty calculations, incorrect asset valuations, and other errors. Having experienced legal counsel significantly increases the likelihood of a successful outcome on appeal.",
        },
        {
          heading: "Spousal impoverishment protections",
          body: "Federal and Texas law include important protections for the spouse of a Medicaid applicant — commonly called the \"community spouse\" or \"well spouse.\" These protections prevent the community spouse from being forced into poverty to pay for the institutionalized spouse's care. The community spouse is entitled to retain a Community Spouse Resource Allowance (CSRA), which is a portion of the couple's combined countable assets up to a federally set maximum. The community spouse may also receive a Monthly Maintenance Needs Allowance (MMNA) drawn from the institutionalized spouse's income. If the standard allowances are insufficient, our attorneys can petition for increased allowances through fair hearing or court order. Protecting the community spouse's financial security is a central goal of every Medicaid plan we develop.",
        },
        {
          heading: "The role of an elder law attorney",
          body: "Medicaid planning involves a complex intersection of federal regulations, Texas administrative rules, tax law, and estate planning principles. An elder law attorney brings specialized knowledge that general practitioners and financial advisors typically lack. Our attorneys stay current on annual changes to Medicaid income and asset thresholds, penalty divisor rates, and HHSC policy interpretations. We coordinate Medicaid planning with your broader estate plan — including wills, trusts, powers of attorney, and advance directives — to ensure every element works together. For families in McKinney, Plano, Frisco, and throughout Collin and Denton counties, Willingham Law Group provides the focused legal guidance needed to navigate one of the most consequential financial decisions a family can face.",
        },
        {
          heading: "Crisis vs. advance Medicaid planning",
          body: "Advance Medicaid planning begins years before care is needed, providing the widest range of legal options and the greatest asset protection. Families who plan ahead can use irrevocable trusts, strategic gifting, and long-term asset restructuring to position themselves well before the five-year look-back period becomes relevant. Crisis Medicaid planning, by contrast, occurs when a loved one already needs nursing home care or will need it imminently. While options are more limited in a crisis, experienced elder law attorneys can still employ strategies such as Medicaid-compliant annuities, spousal transfers, caregiver agreements, and exempt asset conversions to protect a meaningful portion of the family's resources. Regardless of your timeline, Willingham Law Group can help. The sooner you begin, the more we can protect.",
        },
      ]}
      faqs={[
        {
          q: "How much does nursing home care cost in Texas?",
          a: "The average cost of nursing home care in Texas ranges from $4,000 to $8,000 per month depending on the facility and level of care, with some facilities in the DFW metroplex exceeding $10,000 per month for private rooms. These costs are the primary reason Medicaid planning is so important for North Texas families.",
        },
        {
          q: "Can I give away assets to qualify for Medicaid?",
          a: "Gifts made within the 60-month look-back period will trigger a penalty that delays Medicaid eligibility. However, certain transfers are exempt from penalty, including transfers to a spouse, transfers to a disabled child, and transfers of a home to certain qualifying individuals. An elder law attorney can help you understand which transfers are permissible.",
        },
        {
          q: "What is a Miller Trust (Qualified Income Trust)?",
          a: "A Miller Trust is a special irrevocable trust required in Texas when a Medicaid applicant's income exceeds the income cap. The applicant's income is deposited into the trust each month, and after paying for the cost of care and a small personal needs allowance, any remaining funds are paid to the state upon the applicant's death. A properly drafted Miller Trust is essential for Texas Medicaid eligibility.",
        },
        {
          q: "Will Medicaid take my house?",
          a: "Your primary residence is generally an exempt asset during your lifetime. However, after the Medicaid recipient's death, the state of Texas can seek reimbursement for Medicaid benefits paid through its Estate Recovery Program. Proper planning — including the use of Lady Bird Deeds or irrevocable trusts — can protect the home from estate recovery in many cases.",
        },
        {
          q: "How long does the Medicaid application process take in Texas?",
          a: "HHSC is required to process Medicaid applications within 45 days for non-disability cases and 90 days for disability-related cases. In practice, processing times vary and delays are common, especially when documentation is incomplete. Having an attorney prepare and submit your application can significantly reduce processing time.",
        },
        {
          q: "Can my spouse keep any assets if I go into a nursing home?",
          a: "Yes. Federal spousal impoverishment protections allow the community spouse to retain a Community Spouse Resource Allowance (CSRA) of up to approximately $154,140 (2024 figure, adjusted annually), plus the family home, one vehicle, and other exempt assets. Our attorneys work to maximize the amount the community spouse retains.",
        },
        {
          q: "Is it too late to do Medicaid planning if my loved one already needs care?",
          a: "It is never too late to explore your options. While advance planning provides the most flexibility, crisis Medicaid planning strategies — including Medicaid-compliant annuities, caregiver agreements, and exempt asset conversions — can still protect a significant portion of your family's assets even when care is needed immediately.",
        },
        {
          q: "Does Willingham Law Group handle Medicaid planning in my area?",
          a: "Yes. We serve families throughout North Texas, including McKinney, Frisco, Plano, Allen, Prosper, Celina, Anna, and the greater Dallas-Fort Worth metroplex. We offer both in-office and virtual consultations for Medicaid planning matters.",
        },
      ]}
      relatedSlugs={["elder-law", "estate-planning", "probate"]}
    />
  );
}
