import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProbateExplorer from "@/components/practice-areas/ProbateExplorer";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { practiceAreas } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Probate Administration in Texas",
  description:
    "Understand all 6 types of Texas probate — Independent Administration, Muniment of Title, Small Estate Affidavit, and more. Interactive guide from WG Law.",
};

const sections = [
  {
    heading: "What is probate?",
    body: "Probate is the court-supervised process of administering a deceased person's estate — validating the will, appointing an executor, notifying creditors, paying debts and taxes, and distributing what remains to heirs. It creates a public record and establishes legal ownership of assets. Depending on the type of proceeding, it can take weeks or years.",
  },
  {
    heading: "Do all estates need to go through probate?",
    body: "No. Assets held in a trust, assets with named beneficiaries (like life insurance and retirement accounts), and jointly-held assets with right of survivorship all pass outside of probate. Thoughtful estate planning — particularly the use of living trusts and beneficiary designations — can often eliminate probate entirely.",
  },
  {
    heading: "The role of the executor",
    body: "The executor is responsible for guiding the estate through probate. This includes locating and valuing assets, notifying and paying creditors, filing required tax returns, and ultimately distributing assets per the will. Executors have personal liability for mistakes — we help them fulfill their duties correctly.",
  },
  {
    heading: "Contested estates and will disputes",
    body: "Sometimes heirs disagree about the validity of a will, the proper distribution of assets, or the conduct of the executor. These disputes can significantly extend the probate process and increase costs. Our attorneys represent both executors and beneficiaries in contested proceedings, working toward efficient resolution while protecting our clients' interests.",
  },
];

const relatedSlugs = ["estate-planning", "elder-law", "medicaid-planning"];

export default function ProbatePage() {
  const relatedAreas = practiceAreas.filter((a) => relatedSlugs.includes(a.slug));

  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Estate Administration</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Probate in Texas</h1>
          <div className="w-12 h-0.5 bg-gold-500 mb-5" />
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Texas offers six distinct probate paths — from a court filing that takes two weeks to a supervised
            administration that takes two years. Understanding which one applies to your situation is the first step.
          </p>
        </div>
      </section>

      {/* Interactive Explorer */}
      <section className="py-16 bg-cream">
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

      {/* Content sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
            {sections.map((s, i) => (
              <ScrollReveal key={s.heading} delay={i * 0.08}>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-7 h-7 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <h2 className="font-serif text-xl text-navy-900">{s.heading}</h2>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed pl-10">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related areas */}
      {relatedAreas.length > 0 && (
        <section className="py-12 bg-cream border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-6">Related Practice Areas</p>
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

      {/* CTA */}
      <section className="py-16 bg-gold-500 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl text-navy-900 mb-4">Ready to Move Forward?</h2>
          <p className="text-navy-900/70 mb-8 max-w-xl mx-auto">
            Our attorneys will assess your situation and guide you to the most efficient path through probate.
          </p>
          <Button href="/contact" variant="secondary" size="lg">Book a Free Consultation</Button>
        </ScrollReveal>
      </section>
    </>
  );
}
