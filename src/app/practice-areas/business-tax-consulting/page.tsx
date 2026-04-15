import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import BusinessTaxDiagram from "@/components/practice-areas/diagrams/BusinessTaxDiagram";

export const metadata: Metadata = {
  title: "Business & Tax Consulting | North Texas Attorneys",
  description:
    "Business formation, tax planning, and succession strategies for Texas entrepreneurs. Willingham Law Group serves McKinney, Frisco, Plano, and DFW. Call today.",
};

export default function BusinessTaxConsultingPage() {
  return (
    <PracticePageLayout
      eyebrow="Business Services"
      title="Business Tax Consulting"
      subtitle="The difference between a good tax outcome and a great one is strategy. WG Law helps Texas business owners reduce their tax burden legally through smart entity selection, income planning, and long-term business structuring."
      diagramTitle="Business Tax Strategy"
      diagramSubtitle="Six integrated planning disciplines work together to minimize your total tax liability — from entity selection through business succession."
      diagram={<BusinessTaxDiagram />}
      slug="business-tax-consulting"
      sections={[
        {
          heading: "Business entity formation",
          body: "Choosing the right business entity is one of the most consequential decisions a Texas entrepreneur will make. Texas recognizes several entity types — sole proprietorships, general and limited partnerships, limited liability companies (LLCs), S-Corporations, and C-Corporations — each with distinct implications for personal liability, taxation, management structure, and transferability. An LLC, for example, provides liability protection and pass-through taxation by default, while an S-Corporation can reduce self-employment tax obligations for owners who pay themselves a reasonable salary. C-Corporations offer the greatest flexibility for raising capital but face double taxation on distributed profits. Our attorneys in McKinney and Frisco help entrepreneurs across North Texas select, form, and structure the entity that best aligns with their business goals, industry requirements, and long-term tax strategy.",
        },
        {
          heading: "Business succession planning",
          body: "Every business owner eventually exits their business — through sale, retirement, disability, or death. Without a succession plan, that transition can be chaotic, tax-inefficient, and destructive to the business's value. Business succession planning addresses who will take over, how the transition will be funded, and what legal and tax structures will facilitate a smooth transfer. For family-owned businesses, succession planning may involve gifting strategies, family limited partnerships, or grantor retained annuity trusts (GRATs) to transfer ownership while minimizing gift and estate taxes. For businesses with multiple owners, buy-sell agreements funded by life insurance ensure that surviving owners can purchase a departing owner's interest without disrupting operations. Willingham Law Group develops comprehensive succession plans for business owners across the DFW metroplex.",
        },
        {
          heading: "Tax planning strategies",
          body: "Effective tax planning goes far beyond filing returns — it involves structuring your business operations, compensation, and investments to minimize your total tax burden across federal, state, and local levels. Texas has no personal income tax, but Texas businesses are subject to the franchise tax (also called the margin tax) if their total revenue exceeds the no-tax-due threshold, currently $2.47 million. Strategies such as maximizing qualified business income (QBI) deductions under Section 199A, timing income and expense recognition, accelerating depreciation under Section 179 and bonus depreciation provisions, and structuring owner compensation to reduce self-employment taxes can yield significant savings. Our attorneys coordinate with your CPA to implement tax strategies that are legally sound and specifically tailored to your business in Plano, McKinney, Frisco, or anywhere in North Texas.",
        },
        {
          heading: "Buy-sell agreements",
          body: "A buy-sell agreement is a legally binding contract that governs what happens to a business owner's interest when a triggering event occurs — such as death, disability, retirement, divorce, or voluntary departure. Without a buy-sell agreement, the remaining owners may find themselves in business with an unwanted partner (such as a deceased owner's estate or a divorcing spouse). Buy-sell agreements establish the terms, price, and funding mechanism for the transfer of ownership interests. Common structures include cross-purchase agreements (where remaining owners buy the departing owner's interest) and entity redemption agreements (where the business itself repurchases the interest). These agreements are typically funded with life insurance or installment payments. Willingham Law Group drafts enforceable buy-sell agreements that protect all parties and minimize tax consequences.",
        },
        {
          heading: "Operating agreements and corporate governance",
          body: "Texas law does not require an LLC to have an operating agreement, but operating without one is a significant legal risk. An operating agreement defines the rights and obligations of the members, establishes management authority, sets procedures for admitting new members or transferring interests, and provides mechanisms for resolving disputes. Without an operating agreement, Texas default rules under the Business Organizations Code govern — and those defaults may not reflect the owners' actual intentions. For corporations, bylaws and shareholder agreements serve a similar function. Proper governance documents also help maintain the liability shield that the entity provides. If a court finds that an LLC or corporation has not observed proper formalities, it may \"pierce the corporate veil\" and hold owners personally liable. Our attorneys draft operating agreements and governance documents for businesses of all sizes across North Texas.",
        },
        {
          heading: "Business dissolution",
          body: "When a business reaches the end of its useful life — whether due to owner retirement, financial difficulty, or a decision to pursue other ventures — the dissolution process must be handled correctly to avoid lingering liability. In Texas, dissolving an LLC or corporation requires a formal vote of the owners or shareholders, the filing of a Certificate of Termination with the Texas Secretary of State, settlement of all outstanding debts and obligations, distribution of remaining assets, cancellation of permits and licenses, and filing of final tax returns (including the final franchise tax report). Failure to formally dissolve a business can result in continued franchise tax liability and personal exposure for the owners. Willingham Law Group guides business owners in McKinney, Frisco, Plano, and throughout the DFW area through every step of the dissolution process.",
        },
        {
          heading: "Business tax obligations in Texas",
          body: "While Texas has no personal income tax, businesses operating in the state face several tax obligations. The Texas franchise tax (margin tax) applies to most entities with total revenue exceeding the no-tax-due threshold. The tax rate is 0.375% for retail and wholesale businesses and 0.75% for all other businesses, calculated on the entity's taxable margin. Businesses must also comply with sales and use tax obligations (Texas has a 6.25% state sales tax rate, plus local additions up to 2%), employment taxes (including federal payroll taxes and Texas Workforce Commission unemployment insurance), and property taxes on business assets. Proper structuring and compliance are essential to avoid penalties, interest, and audit exposure. Our attorneys work alongside your accountant to ensure your Texas business meets all tax obligations while taking advantage of every available deduction and credit.",
        },
        {
          heading: "Protecting personal assets from business liability",
          body: "One of the primary reasons to form a business entity — rather than operating as a sole proprietor — is to create a legal barrier between your business liabilities and your personal assets. An LLC or corporation, properly formed and maintained, limits your personal exposure to the debts, lawsuits, and obligations of the business. However, this protection is not automatic or absolute. Texas courts can pierce the corporate veil if the entity is used to perpetrate fraud, if the owners commingle personal and business funds, or if the entity fails to observe required formalities. To maintain your liability shield, you must keep separate bank accounts, maintain adequate capitalization, document major business decisions, and comply with all formation and reporting requirements. Willingham Law Group helps North Texas business owners establish and maintain the practices that keep their personal assets protected.",
        },
        {
          heading: "Retirement and wealth accumulation",
          body: "Business ownership provides retirement savings opportunities that far exceed what is available to employees. Solo 401(k) plans allow owner-operators to contribute both as employer and employee, with combined contribution limits significantly exceeding those of a traditional IRA. SEP-IRAs allow contributions of up to 25% of net self-employment income. Defined benefit plans can shelter even larger amounts for high-income business owners approaching retirement. Cash balance plans, a hybrid of defined benefit and defined contribution structures, are increasingly popular among professional practices in North Texas. Each plan type carries different contribution limits, administrative requirements, and tax implications. Our attorneys help business owners in McKinney, Plano, Frisco, and across the DFW area select and implement the retirement plan that maximizes tax-deferred savings while remaining practical for their business size and income level.",
        },
      ]}
      faqs={[
        {
          q: "What is the best business entity for a small business in Texas?",
          a: "There is no one-size-fits-all answer. An LLC provides liability protection and flexible tax treatment, making it the most popular choice for small businesses. However, an S-Corporation election can reduce self-employment taxes for profitable businesses, while a C-Corporation may be preferable for businesses seeking outside investment. Your attorney should analyze your specific situation.",
        },
        {
          q: "Does Texas have a state income tax on businesses?",
          a: "Texas has no personal income tax, but it does impose a franchise tax (margin tax) on most business entities with total revenue exceeding approximately $2.47 million. The rate is 0.75% for most businesses and 0.375% for retail and wholesale businesses, calculated on the entity's taxable margin. Sole proprietorships and certain general partnerships are exempt.",
        },
        {
          q: "What happens if I operate my business without an operating agreement?",
          a: "Without an operating agreement, your LLC is governed by the default rules in the Texas Business Organizations Code. These defaults may not reflect your intentions regarding profit sharing, management authority, or what happens when a member leaves. Additionally, the lack of formalities can weaken your personal liability protection if challenged in court.",
        },
        {
          q: "How do I protect my personal assets from business lawsuits?",
          a: "Form a properly structured LLC or corporation, maintain separate bank accounts, keep adequate business records, avoid commingling personal and business funds, and ensure the entity is adequately capitalized. These practices help maintain the legal separation between your business and personal assets that protects you from business liabilities.",
        },
        {
          q: "What is a buy-sell agreement and why do I need one?",
          a: "A buy-sell agreement is a contract between business owners that establishes what happens to an owner's interest upon death, disability, retirement, or departure. Without one, surviving owners may be forced into business with an unintended partner. Buy-sell agreements set the purchase price and terms, and are typically funded with life insurance.",
        },
        {
          q: "How do I dissolve a business in Texas?",
          a: "Dissolving a Texas LLC or corporation requires a formal vote of owners, filing a Certificate of Termination with the Secretary of State, settling all debts, distributing remaining assets, canceling permits, and filing final tax returns including the franchise tax report. Failure to formally dissolve can result in continued tax liability.",
        },
        {
          q: "Can I convert my LLC to an S-Corporation?",
          a: "Yes. An LLC can elect S-Corporation tax treatment by filing IRS Form 2553 without changing the underlying LLC structure. This can reduce self-employment taxes for owners who pay themselves a reasonable salary. The election must be filed within 75 days of the beginning of the tax year in which it is to take effect.",
        },
        {
          q: "Does Willingham Law Group help with business formation in my area?",
          a: "Yes. We form and advise businesses throughout North Texas, including McKinney, Frisco, Plano, Allen, Prosper, Celina, and the greater Dallas-Fort Worth metroplex. We handle entity formation, operating agreements, tax planning, buy-sell agreements, and business succession planning.",
        },
      ]}
      relatedSlugs={["estate-planning", "real-estate-law"]}
    />
  );
}
