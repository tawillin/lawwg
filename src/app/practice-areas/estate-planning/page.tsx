import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import TrustsDiagram from "@/components/practice-areas/diagrams/TrustsDiagram";

export const metadata: Metadata = {
  title: "Estate Planning Attorneys in Texas | Wills, Trusts & More",
  description:
    "Experienced North Texas estate planning attorneys. Wills, trusts, powers of attorney, and advance directives for families in Frisco, McKinney, Plano, and DFW. Call 214-250-4407.",
};

export default function EstatePlanningPage() {
  return (
    <PracticePageLayout
      slug="estate-planning"
      eyebrow="Estate Planning"
      title="Estate Planning"
      subtitle="A comprehensive estate plan protects your assets, ensures your wishes are honored, and spares your family from unnecessary stress and expense. With over 6,000 trusts completed and 10,000 wills drafted, we make the process simple and thorough."
      diagramTitle="Understanding Trust Structures"
      diagramSubtitle="A trust separates legal ownership from benefit — allowing assets to pass efficiently to your loved ones outside of probate."
      diagram={<TrustsDiagram />}
      sections={[
        {
          heading: "What Is Estate Planning?",
          body: "Estate planning is the process of arranging for the management and transfer of your assets during your lifetime and after your death. It involves creating legal documents — wills, trusts, powers of attorney, and healthcare directives — that ensure your property goes to the people you choose, in the way you choose, with the least amount of cost, delay, and tax burden. Without an estate plan, Texas law determines who inherits your property, a court appoints someone to manage your affairs, and your family may face months of probate proceedings. A proper estate plan puts you in control.",
        },
        {
          heading: "Wills: The Foundation of Every Estate Plan",
          body: "A last will and testament is the cornerstone of estate planning. Your will names an executor to manage your estate, specifies who receives your property, and — critically — names guardians for your minor children. In Texas, a will must be signed by the testator (you) and witnessed by two credible witnesses. Texas also recognizes holographic (handwritten) wills, though these are more vulnerable to challenge. While a will is essential, assets that pass through a will must go through probate — which is why many families also create a trust.",
        },
        {
          heading: "Revocable Living Trusts",
          body: "A revocable living trust allows you to transfer assets into a trust during your lifetime while retaining full control. You serve as the trustee, manage the assets as you normally would, and can revoke or amend the trust at any time. When you pass away, the trust assets transfer directly to your beneficiaries without probate — saving time, court costs, and maintaining privacy. Living trusts also provide for seamless management of your assets if you become incapacitated, since your successor trustee steps in without court intervention. For families with real estate in multiple states, a trust can avoid the need for ancillary probate in each state.",
        },
        {
          heading: "Irrevocable Trusts and Asset Protection",
          body: "Irrevocable trusts offer powerful asset protection and tax planning benefits. Once assets are transferred into an irrevocable trust, they are generally removed from your taxable estate and protected from creditors. Common types include irrevocable life insurance trusts (ILITs), charitable remainder trusts, and special needs trusts for beneficiaries with disabilities. These tools are particularly valuable for families with larger estates or those concerned about protecting assets from nursing home costs, lawsuits, or estate taxes.",
        },
        {
          heading: "Durable Power of Attorney",
          body: "A durable power of attorney designates someone you trust — your agent — to make financial and legal decisions on your behalf if you become incapacitated. This includes paying bills, managing investments, filing taxes, and handling real estate transactions. Without a power of attorney, your family would need to petition the court for a guardianship — a process that can take months, cost thousands of dollars, and result in a court-appointed guardian who may not be the person you would have chosen. In Texas, a statutory durable power of attorney takes effect immediately upon signing unless you specify otherwise.",
        },
        {
          heading: "Medical Power of Attorney and Advance Directives",
          body: "A medical power of attorney authorizes someone to make healthcare decisions for you when you cannot communicate. An advance directive (or living will) documents your wishes regarding life-sustaining treatment, organ donation, and end-of-life care. Together, these documents ensure your medical care aligns with your values and spare your family from making agonizing decisions without guidance. Texas law provides specific statutory forms for these documents, and we ensure yours are properly executed and accessible when needed.",
        },
        {
          heading: "The Estate Planning Process at Our Firm",
          body: "Our estate planning process begins with a thorough consultation to understand your family situation, assets, goals, and concerns. We then draft a customized plan — not a one-size-fits-all template. After reviewing the documents together and making any revisions, we conduct a formal signing ceremony with proper witnesses and notarization. We also help you fund your trust by transferring assets into it, which is the step many firms skip. Finally, we provide guidance on storing your documents and communicating your plan to family members and your named fiduciaries.",
        },
        {
          heading: "Estate Planning for Blended Families",
          body: "Blended families face unique estate planning challenges. Without careful planning, your surviving spouse could inadvertently disinherit your children from a prior marriage, or your children could contest provisions for your current spouse. We use tools like QTIP trusts (Qualified Terminable Interest Property trusts), lifetime trusts for surviving spouses, and carefully drafted beneficiary designations to balance the needs of all family members. If you have a blended family, estate planning is not optional — it is essential.",
        },
        {
          heading: "Common Estate Planning Mistakes",
          body: "The most common mistakes we see include: failing to fund a trust after it is created (leaving assets to pass through probate anyway), naming minor children as direct beneficiaries of life insurance or retirement accounts, not updating beneficiary designations after divorce or remarriage, relying on joint ownership as a substitute for a proper estate plan, and using generic online templates that do not account for Texas-specific requirements. Each of these mistakes can cost your family thousands of dollars and months of legal proceedings to correct.",
        },
        {
          heading: "When Should You Start Estate Planning?",
          body: "The best time to create an estate plan is now. If you own any property, have children, have a spouse or partner, or have retirement accounts or life insurance, you need an estate plan. Young families need guardianship nominations for minor children. Homeowners need to consider probate avoidance. Business owners need succession planning. Retirees need to plan for incapacity and long-term care. Every adult over 18 should have at minimum a durable power of attorney and medical power of attorney. We work with clients at every stage of life, from their first home purchase to retirement.",
        },
      ]}
      faqs={[
        {
          q: "How much does estate planning cost in Texas?",
          a: "The cost of estate planning depends on the complexity of your situation. A basic will package typically ranges from $500 to $1,500, while a comprehensive trust-based estate plan ranges from $2,000 to $5,000 or more. Factors that affect cost include the number of trusts needed, whether you have a blended family, business interests, or property in multiple states. We provide transparent pricing during your initial consultation so there are no surprises.",
        },
        {
          q: "Do I need a trust or just a will?",
          a: "Most families benefit from both. A will is essential for naming guardians for minor children and as a safety net for assets not placed in a trust. However, a will alone requires probate — a court-supervised process that takes months, costs money, and is public record. A revocable living trust avoids probate, maintains privacy, and provides for seamless management if you become incapacitated. If you own a home, have minor children, or want to avoid probate, a trust is strongly recommended.",
        },
        {
          q: "How often should I update my estate plan?",
          a: "Review your estate plan every three to five years, and update it after major life events: marriage, divorce, birth of a child or grandchild, death of a named beneficiary or executor, significant changes in your financial situation, purchase or sale of real estate, starting or selling a business, or moving to a new state. Changes in Texas law or federal tax law may also require updates.",
        },
        {
          q: "What happens if I die without an estate plan in Texas?",
          a: "If you die without a will or trust in Texas (called dying intestate), state law determines who inherits your property. The distribution may not match your wishes. Your estate will go through probate, a court will appoint an administrator, and the process can take six months to a year or more. If you have minor children, a court will determine their guardian without your input. Creating even a basic estate plan avoids all of these problems.",
        },
        {
          q: "What is the difference between a living trust and a testamentary trust?",
          a: "A living trust is created during your lifetime and can begin holding assets immediately. It avoids probate and provides for incapacity management. A testamentary trust is created within your will and only takes effect after your death — meaning the assets must still go through probate before reaching the trust. Living trusts are generally preferred for probate avoidance, while testamentary trusts are sometimes used within a will for specific purposes like holding assets for minor children.",
        },
        {
          q: "Can I create my own estate plan using an online template?",
          a: "While online templates are available, they carry significant risks. Generic forms may not comply with Texas-specific requirements, may not account for your family's unique circumstances, and often omit critical provisions like trust funding instructions, tax planning provisions, or coordination with beneficiary designations. A mistake in an estate plan may not be discovered until it is too late to fix. An experienced attorney creates documents tailored to your situation and ensures everything works together as intended.",
        },
        {
          q: "What is the probate process in Texas?",
          a: "Probate in Texas involves filing the will with the county clerk, having the court validate the will, appointing an executor, inventorying assets, paying debts and taxes, and distributing the remaining estate to beneficiaries. Independent administration (the most common form in Texas) allows the executor to act with minimal court supervision. The process typically takes four to twelve months. Assets held in a trust, jointly owned property, and accounts with named beneficiaries bypass probate entirely.",
        },
        {
          q: "Do I need to update my estate plan after moving to Texas?",
          a: "Yes. While most estate planning documents from other states are valid in Texas, there can be important differences. Texas is a community property state, which affects how marital assets are treated. Texas also has specific statutory forms for powers of attorney and advance directives. We recommend having your existing documents reviewed by a Texas attorney to ensure they work as intended under Texas law and to update any state-specific provisions.",
        },
      ]}
      relatedSlugs={["probate", "elder-law", "medicaid-planning", "real-estate-law"]}
    />
  );
}
