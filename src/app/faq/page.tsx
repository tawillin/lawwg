import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about estate planning, wills, trusts, probate, Medicaid planning, and elder law in Texas.",
};

const categories = [
  {
    title: "Estate Planning",
    questions: [
      {
        q: "Do I need a will or a trust?",
        a: "Most people benefit from both. A will names guardians for minor children, directs how assets should be distributed, and names an executor — but assets that pass under a will go through probate. A revocable living trust allows assets to pass to your beneficiaries outside of probate, maintaining privacy and avoiding court costs. Whether you need one or both depends on the nature and value of your assets, your family situation, and your goals. We help you identify the right combination.",
      },
      {
        q: "How often should I update my estate plan?",
        a: "Estate plans should be reviewed every three to five years, and updated after major life events: marriage, divorce, the birth of a child or grandchild, a significant change in your financial situation, the death of a named beneficiary or executor, or a move to a new state. Laws also change — updates to Texas statutes or federal tax law may affect your plan.",
      },
      {
        q: "What happens if I die without a will in Texas?",
        a: "If you die without a will (called dying 'intestate'), Texas law determines how your assets are distributed. The result may not reflect your wishes — and the process still goes through probate. Without a will, you also cannot name a guardian for minor children, which leaves that critical decision to a court.",
      },
      {
        q: "What is a power of attorney?",
        a: "A durable power of attorney authorizes a person you designate (your 'agent') to make financial and legal decisions on your behalf if you become incapacitated. Without one, your family may need a court-supervised guardianship proceeding — which is expensive, time-consuming, and public. A separate medical power of attorney covers healthcare decisions.",
      },
      {
        q: "What is an advance directive / living will?",
        a: "An advance directive (also called a living will) tells your healthcare providers and family what life-sustaining treatment you want — or don't want — if you are unable to communicate. Texas law provides specific forms for this, and having one in place prevents family members from having to make impossibly difficult decisions under stress.",
      },
    ],
  },
  {
    title: "Trusts",
    questions: [
      {
        q: "What is a revocable living trust?",
        a: "A revocable living trust is a legal arrangement where you transfer your assets into a trust during your lifetime. You remain in full control as the trustee and can change or revoke the trust at any time. When you die, the assets in the trust pass directly to your beneficiaries — without probate. It also provides for management of your assets if you become incapacitated.",
      },
      {
        q: "What is an irrevocable trust?",
        a: "An irrevocable trust cannot be changed or revoked once created (with limited exceptions). Because you give up control of the assets, they are generally protected from creditors and may be excluded from your taxable estate. Irrevocable trusts are used for asset protection, estate tax planning, Medicaid planning, and charitable giving strategies.",
      },
      {
        q: "Does a trust avoid probate?",
        a: "Yes — assets held in a properly funded trust pass to your beneficiaries outside of probate. However, a trust only controls assets that have been transferred into it ('funded'). Assets not in the trust at your death may still go through probate, which is why proper funding is as important as creating the trust itself.",
      },
    ],
  },
  {
    title: "Probate",
    questions: [
      {
        q: "What is probate?",
        a: "Probate is the court-supervised process of authenticating a will, appointing an executor, inventorying assets, paying debts and taxes, and distributing what remains to the heirs. Texas probate is generally simpler and less expensive than in many other states, but it is still a public process that takes time and involves court costs and attorney fees.",
      },
      {
        q: "How long does probate take in Texas?",
        a: "A straightforward Texas probate typically takes 6–12 months. More complex estates — those with disputed wills, creditor claims, real estate in multiple states, or tax issues — can take longer. An independent administration (the most common form in Texas) allows the executor to act without court approval for most actions, which significantly speeds up the process.",
      },
      {
        q: "Do all assets go through probate?",
        a: "No. Assets with named beneficiaries (life insurance, IRAs, 401(k)s) pass directly to those beneficiaries outside of probate. Assets held in joint tenancy with right of survivorship also pass automatically. Assets held in a trust bypass probate entirely. Only assets titled solely in the decedent's name without a designated beneficiary typically need to go through probate.",
      },
    ],
  },
  {
    title: "Medicaid & Elder Law",
    questions: [
      {
        q: "Does Medicare cover nursing home care?",
        a: "Medicare provides limited coverage for skilled nursing facility care following a qualifying hospital stay — generally up to 100 days. It does not cover long-term custodial care (help with daily activities like bathing, dressing, and eating). Medicaid is the primary government program that covers long-term nursing home care for those who qualify.",
      },
      {
        q: "What are Medicaid's asset limits?",
        a: "Medicaid eligibility for long-term care requires an individual to have limited countable assets — generally $2,000 or less in Texas. Certain assets are 'non-countable,' including the primary residence (subject to equity limits), one vehicle, personal belongings, and a prepaid irrevocable funeral plan. Medicaid planning involves legally converting countable assets into non-countable ones.",
      },
      {
        q: "What is a Lady Bird Deed?",
        a: "A Lady Bird Deed (Enhanced Life Estate Deed) is a powerful Texas real estate planning tool. It allows you to retain full ownership and control of your home during your lifetime — including the right to sell, mortgage, or change the deed — while directing the property to pass to your named beneficiaries at your death, outside of probate and generally outside of Medicaid estate recovery.",
      },
      {
        q: "What is the Medicaid 'look-back' period?",
        a: "Medicaid examines asset transfers made within the five years (60 months) prior to the application for long-term care benefits. Transfers made during this period for less than fair market value can result in a penalty period during which Medicaid will not pay for nursing home care. Proper planning — ideally done years before care is needed — is essential.",
      },
    ],
  },
  {
    title: "Real Estate & Divorce",
    questions: [
      {
        q: "What is a Transfer on Death Deed?",
        a: "A Transfer on Death (TOD) Deed allows Texas homeowners to name a beneficiary who will automatically receive the property at the owner's death — without probate, and without giving up any control during the owner's lifetime. Like a Lady Bird Deed, a TOD Deed can be revoked or changed at any time.",
      },
      {
        q: "What makes a divorce 'uncontested' in Texas?",
        a: "A Texas divorce is uncontested when both spouses agree on all key terms: division of marital property and debts, and — if children are involved — custody, visitation, and child support. Because there is nothing to litigate, an uncontested divorce is significantly faster and less expensive than a contested proceeding, and typically does not require either spouse to appear in court.",
      },
      {
        q: "How long does an uncontested divorce take in Texas?",
        a: "Texas requires a mandatory 60-day waiting period from the date the divorce petition is filed before a final decree can be entered. In practice, most uncontested divorces are completed 60–90 days after filing, assuming all required documents are in order and both parties are cooperative.",
      },
    ],
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((cat) =>
      cat.questions.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      {/* Hero */}
      <section className="pt-8 pb-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Knowledge Base</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Frequently Asked Questions</h1>
          <div className="w-12 h-0.5 bg-gold-500 mb-5" />
          <p className="text-white/60 text-lg max-w-2xl">
            Clear answers to common legal questions — because informed clients make better decisions.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((cat, ci) => (
            <ScrollReveal key={cat.title} delay={ci * 0.05}>
              <div>
                <SectionHeader eyebrow="FAQ" title={cat.title} className="mb-8" />
                <div className="space-y-4">
                  {cat.questions.map((item, qi) => (
                    <ScrollReveal key={qi} delay={qi * 0.04}>
                      <details className="group bg-white border border-slate-100 rounded-sm shadow-sm overflow-hidden">
                        <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-cream transition-colors">
                          <span className="font-serif text-navy-900 text-base leading-snug pr-4">{item.q}</span>
                          <ChevronDown className="w-5 h-5 text-gold-500 flex-shrink-0 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-6 pb-6 pt-0 border-t border-slate-100">
                          <p className="text-slate-600 text-sm leading-relaxed pt-4">{item.a}</p>
                        </div>
                      </details>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-center">
        <ScrollReveal>
          <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Still Have Questions?</p>
          <h2 className="font-serif text-3xl text-white mb-4">We Are Here to Help</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Every family&rsquo;s situation is unique. Schedule a consultation with one of our attorneys to get answers tailored to your circumstances.
          </p>
          <Button href="/contact" variant="primary" size="lg">Book a Consultation</Button>
        </ScrollReveal>
      </section>
    </>
  );
}
