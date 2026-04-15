import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown, Phone } from "lucide-react";
import ProbateExplorer from "@/components/practice-areas/ProbateExplorer";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import LegalServiceSchema from "@/components/seo/LegalServiceSchema";
import JsonLd from "@/components/seo/JsonLd";
import { practiceAreas } from "@/data/practiceAreas";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Texas Probate Attorneys | 2,000+ Estates Administered | McKinney & Southlake",
  description:
    "Experienced Texas probate lawyers serving McKinney, Southlake, and DFW. Independent administration, muniment of title, small estate affidavits, heirship determinations, and contested probate. 2,000+ probates handled. Call 214-250-4407.",
};

const sections = [
  {
    heading: "What Is Probate?",
    body: "Probate is the court-supervised legal process of administering a deceased person's estate in Texas. It involves validating the will (if one exists), appointing an executor or administrator, identifying and inventorying estate assets, notifying creditors, paying valid debts and taxes, and distributing what remains to the rightful heirs or beneficiaries. The process creates a public record, establishes legal ownership of assets, and provides a framework for resolving disputes. Depending on the type of proceeding and the complexity of the estate, Texas probate can take as little as two weeks or as long as two years.",
  },
  {
    heading: "Do All Estates Need Probate?",
    body: "No. Many assets pass outside of probate entirely. Assets held in a revocable living trust, accounts with named beneficiaries (such as life insurance policies, IRAs, and 401(k) plans), jointly-held property with right of survivorship, and accounts designated as payable-on-death or transfer-on-death all bypass the probate process. Thoughtful estate planning — particularly the use of living trusts, beneficiary designations, and Lady Bird Deeds — can often eliminate probate entirely. However, when a loved one passes without these arrangements in place, probate is typically necessary to transfer assets legally.",
  },
  {
    heading: "The Six Types of Texas Probate",
    body: "Texas law provides six distinct paths through probate, each designed for different situations. Independent Administration is the most common, allowing the executor to act with minimal court oversight. Dependent Administration involves full court supervision for every transaction. Muniment of Title is the simplest option when there is a valid will and no unpaid debts. Small Estate Affidavits are available for intestate estates under $75,000. Affidavits of Heirship establish ownership of real property without a court proceeding. Determinations of Heirship are formal court proceedings to identify heirs in more complex situations. Our interactive guide above helps you identify which path applies to your situation.",
  },
  {
    heading: "Independent Administration: The Most Common Path",
    body: "Independent administration is the preferred form of probate in Texas and accounts for the vast majority of cases we handle. When the will authorizes independent administration — or when all heirs agree to it — the executor can manage the estate with minimal court involvement. After an initial hearing to admit the will and qualify the executor, most actions (selling property, paying debts, distributing assets) can be taken without court approval. This significantly reduces costs, shortens timelines, and gives the executor flexibility. Independent administration typically takes six to twelve months from filing to final distribution.",
  },
  {
    heading: "Muniment of Title: Probate in Two Weeks",
    body: "When the estate has a valid will and no unpaid debts (other than a secured mortgage on the homestead), Texas allows a streamlined process called Muniment of Title. There is no executor appointed, no bond required, and no ongoing court supervision. The court simply validates the will in a single hearing, and the certified court order is used to transfer title to real property, financial accounts, and other assets directly to the beneficiaries. Muniment of Title is the fastest and least expensive form of probate — often completed in as little as two to four weeks. We have handled hundreds of muniment proceedings across Collin, Denton, Tarrant, and Dallas counties.",
  },
  {
    heading: "Dying Without a Will: Intestate Probate in Texas",
    body: "When someone dies without a valid will (intestate), Texas law dictates who inherits through a set of default rules based on family relationships. The distribution depends on whether the deceased was married, had children, and whether the property is community or separate property. Without a will, the court must also appoint an administrator — and that administrator must post a bond and may require surety, adding cost and delay. If the estate is valued at $75,000 or less (excluding the homestead), a Small Estate Affidavit may be available. For larger estates, a formal Determination of Heirship proceeding is required before assets can be transferred.",
  },
  {
    heading: "The Role of the Executor or Administrator",
    body: "The executor (named in the will) or administrator (appointed by the court) bears significant responsibility. Their duties include: locating and securing all estate assets, filing an inventory with the court within 90 days, publishing a notice to creditors, evaluating and paying valid claims, filing final income tax returns and any estate tax returns, maintaining accurate records of all transactions, and distributing assets to beneficiaries according to the will or Texas intestacy law. Executors have personal liability for mistakes — including distributing assets before paying valid debts, failing to file required notices, or mismanaging estate property. We guide executors through every step to protect them from personal exposure.",
  },
  {
    heading: "Creditor Claims and Debt in Probate",
    body: "Texas law provides a structured process for handling creditor claims during probate. The executor must publish a notice to creditors in a local newspaper within one month of qualifying. Secured creditors (such as mortgage holders) retain their liens. Unsecured creditors must file claims within a specific window, and the executor has a duty to evaluate each claim — rejecting those that are invalid and paying those that are legitimate from estate funds. Texas law also establishes a priority order for paying debts when the estate lacks sufficient assets to pay all claims. Understanding this process is critical: an executor who distributes assets to beneficiaries before properly addressing creditor claims can be held personally liable for the unpaid debts.",
  },
  {
    heading: "Contested Estates and Will Disputes",
    body: "Sometimes heirs disagree about the validity of a will, the proper distribution of assets, or the conduct of the executor. Common grounds for will contests in Texas include lack of testamentary capacity (the testator did not understand the nature of the will), undue influence (someone pressured the testator into changing the will), fraud, forgery, or improper execution. Will contests can significantly extend the probate process and increase costs. Our attorneys represent both executors defending wills and beneficiaries challenging them. We also handle disputes over executor conduct, breach of fiduciary duty claims, and disagreements among co-executors or co-beneficiaries. When possible, we work toward mediated resolution to preserve family relationships and avoid the expense of trial.",
  },
  {
    heading: "Probate Timelines and Texas Deadlines",
    body: "Texas imposes several important deadlines in the probate process. A will must be filed for probate within four years of the date of death — after that, there is a rebuttable presumption that the testator revoked the will. The executor must file an inventory within 90 days of qualifying. A notice to creditors must be published within one month. Creditors generally have six months from the date of the personal representative's qualification to file claims. Missing these deadlines can have serious consequences, including personal liability for the executor. Every county in North Texas has its own local rules and scheduling practices. Collin County, Denton County, Tarrant County, and Dallas County each have different wait times for hearing dates, which affects the overall timeline.",
  },
  {
    heading: "Probate and Real Estate in Texas",
    body: "Real estate is often the most significant asset in a Texas probate. Transferring title to real property requires specific legal instruments depending on the type of probate proceeding. In an independent administration, the executor can execute a deed transferring property to the beneficiary. In a muniment of title, the certified court order itself is recorded in the deed records. For intestate estates, an affidavit of heirship or a court decree of heirship is recorded. We work closely with title companies across North Texas to ensure clean title transfer — which is essential if the beneficiary plans to sell, refinance, or insure the property. We also handle situations where real property is located in multiple counties or states, which may require ancillary probate proceedings.",
  },
  {
    heading: "Avoiding Probate Through Estate Planning",
    body: "The best way to avoid probate is to plan ahead. Revocable living trusts allow assets to pass directly to beneficiaries without court involvement. Beneficiary designations on life insurance, retirement accounts, and bank accounts transfer those assets automatically. Joint ownership with right of survivorship passes property to the surviving owner. Transfer-on-death deeds (available in Texas since 2015) and Lady Bird Deeds can transfer real property outside of probate. Even with these tools, a pour-over will is recommended as a safety net for any assets not captured by the trust. If your loved one passed without these arrangements, our probate attorneys will guide you through the most efficient path available. If you want to spare your own family from probate, our estate planning team can help you put the right structures in place.",
  },
  {
    heading: "Why Families Choose Our Firm for Probate",
    body: "With over 2,000 probates handled across North Texas, our team has the depth of experience to handle straightforward and complex estates alike. We know the local court systems, the judges, and the county-specific procedures in Collin, Denton, Tarrant, and Dallas counties. Our attorneys explain every step in plain language, handle all court filings and deadlines, and work directly with financial institutions, title companies, and taxing authorities to move your case forward efficiently. We offer transparent, flat-fee pricing for most probate matters so you know the cost upfront. And because we also practice estate planning, elder law, and real estate law, we can address the full range of issues that often arise during estate administration — from Medicaid recovery claims to deed transfers to trust administration.",
  },
];

const faqs = [
  {
    q: "How much does probate cost in Texas?",
    a: "Probate costs vary depending on the type of proceeding and the complexity of the estate. A muniment of title (the simplest form) typically costs between $1,500 and $3,000 in attorney fees plus court filing fees. An independent administration generally ranges from $3,000 to $7,500. Contested estates, dependent administrations, and estates with complex assets or creditor disputes will cost more. Court filing fees in Collin County, Denton County, and Tarrant County typically range from $300 to $400. We provide transparent pricing during your initial consultation.",
  },
  {
    q: "How long does probate take in Texas?",
    a: "Timelines depend on the type of probate. A muniment of title can be completed in two to four weeks. An independent administration typically takes six to twelve months. Dependent administrations and contested estates can take twelve to twenty-four months or longer. Every county has different scheduling practices — Collin County probate courts often schedule hearings within three to four weeks of filing, while Dallas County may take longer. We will give you a realistic timeline based on the specific facts of your situation and the county where the case will be filed.",
  },
  {
    q: "Can I handle probate without an attorney?",
    a: "Texas law allows you to file for probate without an attorney (pro se), but the probate process involves court filings, legal deadlines, creditor notice requirements, tax obligations, and fiduciary duties that carry personal liability for the executor. A missed deadline or improperly handled creditor claim can result in the executor being personally liable. Most Texas probate courts have their own local rules that must be followed precisely. We strongly recommend working with an experienced probate attorney to protect yourself and ensure the estate is administered correctly.",
  },
  {
    q: "What happens if a will is not filed within four years?",
    a: "Under Texas Estates Code Section 256.003, if a will is not offered for probate within four years of the testator's death, there is a rebuttable presumption that the testator intended to revoke the will. This does not mean the will is automatically invalid — it means the person offering the will must prove to the court that the delay was not caused by the testator's intent to revoke. Even if the will can still be admitted, the options narrow: the will can typically only be admitted as a muniment of title, and a full independent or dependent administration is no longer available. Filing promptly is critical.",
  },
  {
    q: "What is the difference between independent and dependent administration?",
    a: "In an independent administration, the executor can manage the estate — selling property, paying debts, and distributing assets — without needing court approval for each action. This is faster, less expensive, and less burdensome. In a dependent administration, the court supervises every significant action: every sale, every payment, and every distribution requires a separate court order. Dependent administration is typically required when the will mandates it, when heirs cannot agree on independent administration, or when there are significant disputes among heirs or creditors. The vast majority of Texas probates — and nearly all cases we handle — proceed as independent administrations.",
  },
  {
    q: "Do I need probate if there is no will?",
    a: "Usually, yes. When someone dies without a will (intestate), the estate still needs to go through some form of legal proceeding to transfer assets. If the estate is valued at $75,000 or less (excluding the homestead and exempt property), a Small Estate Affidavit may be sufficient. If the only significant asset is real property, an Affidavit of Heirship may work. For larger or more complex estates, a formal Determination of Heirship is required, followed by appointment of an administrator. Assets with named beneficiaries (life insurance, retirement accounts) and jointly-held property pass automatically regardless of whether there is a will.",
  },
  {
    q: "What is a muniment of title and does my estate qualify?",
    a: "A muniment of title is the simplest form of Texas probate. It requires a valid will, no unpaid unsecured debts (a mortgage on the homestead is permitted), and beneficiaries who are known and locatable. No executor is appointed, no bond is required, and there is no ongoing court supervision. The court validates the will in a single hearing, and the certified court order is used to transfer assets directly to the beneficiaries. It is the fastest and least expensive probate option — often completed in two to four weeks. We evaluate every estate for muniment eligibility before recommending a more involved proceeding.",
  },
  {
    q: "Can the executor sell the house during probate?",
    a: "Yes, in most cases. If the estate is being administered through an independent administration, the executor generally has the authority to sell real property without court approval, provided the will grants that authority or does not restrict it. In a dependent administration, the executor must petition the court for permission to sell. In either case, the sale must be in the best interest of the estate. If the property is the homestead and a surviving spouse or minor children are living there, additional protections apply. We coordinate with real estate agents and title companies to ensure a smooth sale.",
  },
  {
    q: "What are the executor's personal risks?",
    a: "Executors have personal liability for mistakes made during estate administration. Common areas of exposure include: distributing assets to beneficiaries before paying valid creditor claims, failing to file the required notice to creditors, missing tax filing deadlines, mismanaging or undervaluing estate assets, self-dealing or conflicts of interest, and failing to file the estate inventory within 90 days. An executor who breaches their fiduciary duty can be held personally responsible for the resulting losses and may be removed by the court. Proper legal guidance protects executors from these risks.",
  },
  {
    q: "Which county do I file probate in?",
    a: "Texas probate is filed in the county where the deceased person lived (had their domicile) at the time of death. If the person had no domicile in Texas but owned property here, probate can be filed in any county where the person owned real property or had other assets. For North Texas families, this typically means filing in Collin County (McKinney), Denton County (Denton), Tarrant County (Fort Worth), or Dallas County (Dallas). Each county has its own probate court, local rules, and scheduling practices. Our firm regularly files in all four counties and knows each court's procedures.",
  },
  {
    q: "Can a will be contested in Texas?",
    a: "Yes. Any interested person can contest a will in Texas. Common grounds for a will contest include lack of testamentary capacity (the testator did not understand the nature and extent of their property or the effect of signing the will), undue influence (someone exerted improper pressure to change the will), fraud, forgery, or improper execution (the will was not signed and witnessed according to Texas law). The burden of proof and the specific legal standards depend on the type of challenge. Will contests can significantly extend the probate process and are often emotionally charged. Our firm handles both will defense (for executors) and will challenges (for beneficiaries).",
  },
  {
    q: "Does the surviving spouse automatically inherit everything?",
    a: "Not necessarily. In Texas, the answer depends on whether there is a will and how the property is classified. If there is a will, the will controls distribution. Without a will, Texas intestacy law applies — and the rules differ for community property and separate property. If the deceased had children (or descendants of deceased children) who are also children of the surviving spouse, the spouse inherits all community property but only one-third of the separate personal property and a life estate in one-third of the separate real property. If the deceased had children from another relationship, the surviving spouse's share is reduced further. Estate planning is the only way to ensure your spouse receives exactly what you intend.",
  },
];

const relatedSlugs = ["estate-planning", "elder-law", "medicaid-planning", "real-estate-law"];

const probatePracticeArea = practiceAreas.find((a) => a.slug === "probate")!;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ProbatePage() {
  const relatedAreas = practiceAreas.filter((a) => relatedSlugs.includes(a.slug));

  return (
    <>
      <LegalServiceSchema practiceArea={probatePracticeArea} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Button href="/practice-areas" variant="outline" size="sm" className="mb-6 text-white/60 border-white/20 hover:border-gold-500 hover:text-gold-400 hover:bg-transparent">
              <ArrowLeft className="w-3 h-3 mr-1" />
              Practice Areas
            </Button>
            <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Estate Administration</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">Probate in Texas</h1>
            <div className="w-12 h-0.5 bg-gold-500 mb-6" />
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Texas offers six distinct probate paths — from a court filing that takes two weeks to a supervised
              administration that takes two years. With over 2,000 probates handled across North Texas, we guide
              executors and families through every step with clarity and efficiency.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Explorer */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Interactive Guide"
            title="The 6 Types of Texas Probate"
            subtitle="Answer five questions to find the right path, or browse all six types directly."
            className="mb-8"
          />
          <ProbateExplorer />
        </div>
      </section>

      {/* Educational content sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((s, i) => (
              <ScrollReveal key={s.heading} delay={i * 0.05}>
                <div className="flex gap-6">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 bg-gold-500/10 border border-gold-500/30 rounded-sm flex items-center justify-center">
                      <span className="text-gold-500 font-serif font-bold text-sm">{i + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-serif text-xl text-navy-900 mb-3">{s.heading}</h2>
                    <p className="text-slate-600 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 bg-cream-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-xl text-navy-900">
              Need help with a Texas probate matter?
            </p>
            <p className="text-slate-500 text-sm mt-1">
              {siteConfig.stats[2].number} probates handled across North Texas.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button href="/contact" variant="primary">
              Schedule a Consultation
            </Button>
            <Button href={`tel:${siteConfig.phone}`} variant="outline">
              <Phone className="w-4 h-4 mr-1" />
              Call Us
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
              Common Questions
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-navy-900 mb-8">
              Texas Probate FAQ
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <details className="group border border-slate-200 rounded-sm">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-navy-900 font-medium hover:text-gold-600 transition-colors">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related areas */}
      {relatedAreas.length > 0 && (
        <section className="py-12 bg-cream border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Related Practice Areas
            </p>
            <div className="flex flex-wrap gap-4">
              {relatedAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/practice-areas/${area.slug}`}
                  className="group flex items-center gap-2 bg-white border border-slate-100 rounded-sm px-5 py-3 shadow-sm hover:border-gold-300 hover:shadow-md transition-all duration-300"
                >
                  <span className="font-serif text-navy-900 text-sm group-hover:text-gold-600 transition-colors">{area.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Serving locations */}
      <section className="py-10 bg-cream-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
            Serving North Texas
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["dallas", "fort-worth", "plano", "frisco", "mckinney", "southlake", "allen", "denton"].map((city) => (
              <Link
                key={city}
                href={`/locations/${city}`}
                className="text-xs text-navy-700 hover:text-gold-600 border border-slate-200 rounded-sm px-2.5 py-1 hover:border-gold-500 transition-colors bg-white"
              >
                {city.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Ready to Move Forward?</h2>
            <p className="text-white/60 text-base mb-8 max-w-xl mx-auto">
              Our attorneys will assess your situation and guide you to the most efficient path through probate.
              Schedule a consultation and we&apos;ll give you a plain-language assessment of your options.
            </p>
            <Button href="/contact" variant="primary" size="lg">Schedule a Consultation</Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
