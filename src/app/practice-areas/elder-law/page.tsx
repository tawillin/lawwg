import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import ElderLawDiagram from "@/components/practice-areas/diagrams/ElderLawDiagram";

export const metadata: Metadata = {
  title: "Elder Law Attorneys in Texas | McKinney & DFW",
  description:
    "Trusted North Texas elder law attorneys helping families with guardianship, Medicaid, long-term care, and senior protection. Call 214-250-4407 for a consultation.",
};

export default function ElderLawPage() {
  return (
    <PracticePageLayout
      slug="elder-law"
      eyebrow="Senior & Family Planning"
      title="Elder Law"
      subtitle="Elder law helps seniors and their families plan ahead for long-term care costs, medical decision-making, and asset protection — before a crisis forces difficult decisions. Our attorneys in McKinney, Frisco, and across the Dallas-Fort Worth area bring both legal knowledge and genuine compassion to every family we serve."
      diagramTitle="Elder Law Planning Areas"
      diagramSubtitle="A comprehensive elder law plan addresses four interconnected areas that protect seniors and their families."
      diagram={<ElderLawDiagram />}
      sections={[
        {
          heading: "What Is Elder Law?",
          body: "Elder law is a specialized area of legal practice focused on the unique challenges facing aging adults and their families. It encompasses a broad range of issues including long-term care planning, guardianship, Medicaid eligibility, powers of attorney, nursing home rights, and protection from financial exploitation and abuse. Unlike general estate planning, elder law addresses the practical realities of aging — cognitive decline, escalating care costs, loss of independence, and the emotional strain placed on adult children who become caregivers. In Texas, elder law is shaped by the Texas Estates Code, the Texas Human Resources Code, and federal programs like Medicaid and Medicare. Our attorneys at Willingham Law Group understand these intersecting legal frameworks and help families in McKinney, Frisco, Plano, and throughout the Dallas-Fort Worth metroplex navigate them with clarity and confidence.",
        },
        {
          heading: "Guardianship in Texas",
          body: "When a loved one can no longer make safe decisions about their health, finances, or daily living, a court-appointed guardianship may be necessary. Under the Texas Estates Code, Title 3, a guardian of the person is authorized to make personal and medical decisions, while a guardian of the estate manages financial affairs. Texas law strongly favors the least restrictive alternatives — meaning courts will consider limited guardianship, supported decision-making agreements, or powers of attorney before granting full guardianship. The process requires filing an application, obtaining a physician's certificate of incapacity, and attending a court hearing. We represent families seeking guardianship in Collin County, Denton County, Dallas County, and surrounding jurisdictions, and we guide them through every step — from the initial application to the annual reporting requirements that Texas courts impose on all guardians.",
        },
        {
          heading: "Powers of Attorney for Seniors",
          body: "A durable power of attorney is one of the most important documents a senior can execute — and the earlier it is signed, the better. Under the Texas Estates Code, a statutory durable power of attorney allows a trusted agent to manage financial matters including banking, real estate transactions, tax filings, and insurance claims. A medical power of attorney, governed by Chapter 166 of the Texas Health and Safety Code, designates someone to make healthcare decisions when the principal cannot. For seniors, these documents are not optional conveniences — they are essential safeguards. Without them, families are forced into costly and time-consuming guardianship proceedings. We counsel seniors and their families in Plano, McKinney, Frisco, and across North Texas to execute these documents while the senior still has legal capacity, and we ensure the documents are drafted broadly enough to cover the situations that actually arise.",
        },
        {
          heading: "Long-Term Care Planning",
          body: "The cost of long-term care in Texas continues to rise. A semi-private room in a skilled nursing facility in the Dallas-Fort Worth area can cost $6,000 to $10,000 per month or more, and assisted living facilities typically run $3,500 to $6,000 monthly. These costs can rapidly deplete a lifetime of savings. Long-term care planning involves evaluating all available options — aging in place with home health aides, assisted living communities, memory care units, and skilled nursing facilities — and building a legal and financial framework that preserves as much of the family's resources as possible. This may include long-term care insurance analysis, asset repositioning strategies, irrevocable trusts, and coordination with Medicaid planning. Our firm helps North Texas families create realistic, personalized care plans that account for both current needs and likely future progression of conditions like Alzheimer's disease and other forms of dementia.",
        },
        {
          heading: "Nursing Home Rights and Advocacy",
          body: "Texas residents of nursing homes and assisted living facilities have specific legal rights under both federal law (the Nursing Home Reform Act of 1987) and Texas law (Chapter 242 of the Texas Health and Safety Code). These rights include the right to be free from physical and chemical restraints used for discipline or convenience, the right to participate in care planning, the right to manage personal finances, and the right to voice grievances without retaliation. When these rights are violated — through neglect, inadequate staffing, medication errors, or failure to prevent falls and pressure injuries — families have legal recourse. We help families understand their rights, communicate effectively with facility administrators, file complaints with the Texas Health and Human Services Commission, and pursue legal action when a facility's conduct falls below the standard of care required by law.",
        },
        {
          heading: "Medicaid vs. Private Pay for Long-Term Care",
          body: "One of the most common questions families face is whether to pay privately for long-term care or pursue Medicaid coverage. Private pay offers more choices in facilities and avoids the strict financial eligibility requirements of Medicaid, but it can exhaust a family's savings in a matter of years. Texas Medicaid covers skilled nursing care for individuals who meet income and asset limits — generally $2,000 in countable resources for a single applicant. However, the community spouse (the spouse who remains at home) may retain significantly more under the Community Spouse Resource Allowance. Medicaid also imposes a five-year look-back period on asset transfers, meaning gifts or transfers made within five years of applying can result in a penalty period of ineligibility. Strategic Medicaid planning — ideally begun years before care is needed — can protect substantial family assets while still qualifying for benefits. We help families throughout the DFW metroplex understand these rules and develop a plan that balances care quality with financial preservation.",
        },
        {
          heading: "Protecting Seniors from Exploitation and Abuse",
          body: "Financial exploitation is the most common form of elder abuse in Texas, and it often goes undetected for months or years. Under the Texas Human Resources Code, Chapter 48, Adult Protective Services investigates reports of abuse, neglect, and exploitation of elderly and disabled adults. Financial exploitation can take many forms — a caregiver misusing a power of attorney, a family member pressuring a senior to change their will, a scam artist targeting isolated elderly individuals, or a nursing facility billing for services never rendered. Texas law provides both civil and criminal remedies for elder abuse. We help families identify warning signs of exploitation, take immediate legal action to protect vulnerable adults, and pursue recovery of misappropriated assets. If you suspect a senior in McKinney, Frisco, Plano, or anywhere in North Texas is being exploited or abused, prompt legal consultation is critical.",
        },
        {
          heading: "When Families Should Seek Elder Law Help",
          body: "The ideal time to consult an elder law attorney is before a crisis occurs — when a parent is still healthy and has full legal capacity. However, many families come to us after a hospitalization, a dementia diagnosis, or a sudden decline that forces immediate decisions about care and finances. Common triggers include: a parent can no longer live safely at home, a family disagrees about care decisions, a spouse needs nursing home care and the family is worried about losing everything to care costs, an elderly parent is showing signs of being financially exploited, or a loved one needs Medicaid but has too many assets to qualify. Regardless of your situation, acting sooner rather than later preserves more options. Our attorneys at Willingham Law Group are experienced in both proactive planning and crisis intervention, and we serve families throughout Collin County, Denton County, Dallas County, and the broader North Texas region.",
        },
        {
          heading: "The Elder Law Planning Process at Our Firm",
          body: "Our elder law process begins with a thorough family consultation. We meet with the senior and their family members to understand the medical situation, financial picture, family dynamics, and long-term goals. We review existing legal documents — wills, trusts, powers of attorney, beneficiary designations — and identify gaps or outdated provisions. From there, we develop a customized plan that may include executing or updating powers of attorney and advance directives, creating or modifying trusts for asset protection, developing a Medicaid eligibility strategy, addressing guardianship needs, and coordinating with financial advisors, geriatric care managers, and healthcare providers. We explain every option in plain language, answer every question, and never pressure families into decisions they are not ready to make. Our goal is to give you the information and legal tools you need to make the best decisions for your family.",
        },
      ]}
      faqs={[
        {
          q: "What is the difference between elder law and estate planning?",
          a: "While estate planning focuses primarily on the transfer of assets after death, elder law addresses the legal challenges that arise during a person's lifetime as they age. Elder law covers issues like long-term care planning, Medicaid eligibility, guardianship, protection from abuse and exploitation, and navigating the healthcare system. There is significant overlap — both fields involve powers of attorney, trusts, and advance directives — but elder law is specifically concerned with the practical, day-to-day legal needs of aging adults and their families. Many of our clients in the McKinney, Frisco, and Plano area benefit from both estate planning and elder law services working together.",
        },
        {
          q: "How much does guardianship cost in Texas?",
          a: "The cost of obtaining a guardianship in Texas varies depending on complexity, but families should generally expect to spend between $3,000 and $8,000 or more in attorney fees, plus court costs, the cost of a court-appointed attorney ad litem (required to represent the proposed ward's interests), and potentially the cost of a guardian ad litem. Contested guardianships — where family members disagree about who should serve as guardian or whether guardianship is necessary — can cost significantly more. Additionally, Texas courts require guardians to post a bond and file annual reports, which carry ongoing costs. This is one of the key reasons we encourage families to execute durable powers of attorney early, before incapacity makes guardianship the only option.",
        },
        {
          q: "Can I protect my parents' assets from nursing home costs?",
          a: "Yes, but the strategies available depend heavily on timing. If your parents begin planning years before care is needed, a wider range of tools is available — including irrevocable trusts, strategic gifting, and asset repositioning — that can preserve significant family wealth while maintaining Medicaid eligibility. If a parent already needs nursing home care or will need it within the next five years, options are more limited due to Medicaid's five-year look-back period, but strategies still exist to protect the community spouse's assets and income. Texas allows a Community Spouse Resource Allowance that can protect a meaningful portion of marital assets. An elder law attorney can evaluate your specific situation and develop a plan tailored to your family's timeline and resources.",
        },
        {
          q: "What is a supported decision-making agreement in Texas?",
          a: "A supported decision-making agreement (SDMA) is a legal alternative to guardianship established under Chapter 1357 of the Texas Estates Code. It allows an adult with a disability or cognitive impairment to designate trusted supporters who help them make decisions about daily life, healthcare, and finances — without removing the individual's legal rights. The person retains decision-making authority and simply receives assistance in understanding and communicating their choices. Texas was one of the first states to enact SDMA legislation, and courts are required to consider whether an SDMA or other less restrictive alternative would be appropriate before granting a guardianship. This is an important tool for families seeking to support a loved one's independence while still providing meaningful help.",
        },
        {
          q: "What happens if my parent has dementia and never signed a power of attorney?",
          a: "If your parent lacks the mental capacity to sign a power of attorney, the document cannot be legally executed. In this situation, the only option to obtain legal authority over your parent's medical and financial decisions is to petition the court for a guardianship. Under the Texas Estates Code, this requires filing an application, providing medical evidence of incapacity, attending a court hearing, and having the court appoint a guardian. The process typically takes 60 to 90 days and costs several thousand dollars. Once appointed, the guardian must report to the court annually and may need court approval for certain transactions. This scenario underscores the critical importance of executing powers of attorney while your parent still has capacity.",
        },
        {
          q: "Does Medicaid have a look-back period in Texas?",
          a: "Yes. Texas Medicaid imposes a five-year look-back period for transfers of assets made for less than fair market value. When someone applies for Medicaid to cover long-term nursing home care, the state reviews all financial transactions from the previous 60 months. If assets were transferred — through gifts, transfers to family members, or certain trust transactions — during that period, Medicaid may impose a penalty period during which the applicant is ineligible for benefits. The length of the penalty depends on the value of the transferred assets divided by the average monthly cost of nursing home care in Texas. This is why proactive Medicaid planning should ideally begin at least five years before care is anticipated, though strategies exist to address transfers made within the look-back window.",
        },
        {
          q: "How do I report elder abuse or exploitation in Texas?",
          a: "If you suspect an elderly person is being abused, neglected, or financially exploited, you can report it to the Texas Department of Family and Protective Services (DFPS) by calling the Texas Abuse Hotline at 1-800-252-5400, available 24 hours a day, seven days a week. You can also file a report online through the DFPS website. Under the Texas Human Resources Code, certain professionals — including healthcare workers, clergy, and financial institution employees — are mandatory reporters. If you believe someone is in immediate danger, call 911. In addition to reporting, consulting an elder law attorney can help you take legal action to protect the senior, such as obtaining a protective order, revoking a misused power of attorney, or pursuing civil recovery of stolen assets.",
        },
        {
          q: "What areas in North Texas does Willingham Law Group serve for elder law?",
          a: "Willingham Law Group provides elder law services to families throughout the Dallas-Fort Worth metroplex, including McKinney, Frisco, Plano, Allen, Dallas, Fort Worth, Denton, Southlake, and surrounding communities. We handle matters in Collin County, Denton County, Dallas County, Tarrant County, and other North Texas counties. Our office is conveniently located for families in the northern DFW corridor, and we offer consultations to help families at any stage — whether you are planning ahead or responding to an urgent situation involving a senior loved one.",
        },
      ]}
      relatedSlugs={["estate-planning", "medicaid-planning", "probate"]}
    />
  );
}
