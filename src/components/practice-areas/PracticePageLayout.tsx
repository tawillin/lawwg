import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import LegalServiceSchema from "@/components/seo/LegalServiceSchema";
import JsonLd from "@/components/seo/JsonLd";
import { practiceAreas } from "@/data/practiceAreas";
import { ArrowLeft, ChevronDown, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

type FAQ = { q: string; a: string };

type PracticePageLayoutProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  diagramTitle: string;
  diagramSubtitle: string;
  diagram: React.ReactNode;
  sections: { heading: string; body: string }[];
  relatedSlugs: string[];
  slug?: string;
  faqs?: FAQ[];
};

const relatedLabels: Record<string, string> = {
  trusts: "Trusts",
  probate: "Probate",
  "elder-law": "Elder Law",
  "estate-planning": "Estate Planning",
  "medicaid-planning": "Medicaid Planning",
  "real-estate-law": "Real Estate Law",
  "business-tax-consulting": "Business & Tax",
  "uncontested-divorce": "Uncontested Divorce",
  "business-formation": "Business Formation",
  "litigation-defense": "Litigation Defense",
};

export default function PracticePageLayout({
  eyebrow,
  title,
  subtitle,
  diagramTitle,
  diagramSubtitle,
  diagram,
  sections,
  relatedSlugs,
  slug,
  faqs,
}: PracticePageLayoutProps) {
  const practiceArea = slug
    ? practiceAreas.find((p) => p.slug === slug)
    : undefined;

  const faqSchema = faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      {practiceArea && <LegalServiceSchema practiceArea={practiceArea} />}
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Page hero */}
      <section className="pt-32 pb-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Button href="/practice-areas" variant="outline" size="sm" className="mb-6 text-white/60 border-white/20 hover:border-gold-500 hover:text-gold-400 hover:bg-transparent">
              <ArrowLeft className="w-3 h-3 mr-1" />
              Practice Areas
            </Button>
            <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              {title}
            </h1>
            <div className="w-12 h-0.5 bg-gold-500 mb-6" />
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Diagram section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollReveal>
              <p className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                Visual Guide
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-navy-900 mb-2">
                {diagramTitle}
              </h2>
              <p className="text-slate-500 text-sm max-w-xl mx-auto">{diagramSubtitle}</p>
            </ScrollReveal>
          </div>
          <ScrollReveal>{diagram}</ScrollReveal>
        </div>
      </section>

      {/* Educational content sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex gap-6">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 bg-gold-500/10 border border-gold-500/30 rounded-sm flex items-center justify-center">
                      <span className="text-gold-500 font-serif font-bold text-sm">{i + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-navy-900 mb-3">{section.heading}</h3>
                    <p className="text-slate-600 leading-relaxed">{section.body}</p>
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
              Ready to discuss your {title.toLowerCase()} needs?
            </p>
            <p className="text-slate-500 text-sm mt-1">
              {siteConfig.stats[3].number} clients have trusted us with their legal matters.
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
      {faqs && faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                Common Questions
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-navy-900 mb-8">
                {title} FAQ
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
      )}

      {/* Related practice areas */}
      {relatedSlugs.length > 0 && (
        <section className="py-12 bg-cream border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Related Practice Areas
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedSlugs.map((s) => (
                <Button
                  key={s}
                  href={`/practice-areas/${s}`}
                  variant="outline"
                  size="sm"
                >
                  {relatedLabels[s] ?? s}
                </Button>
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
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Have questions about your situation?
            </h2>
            <p className="text-white/60 text-base mb-8">
              Schedule a consultation and we&apos;ll give you a plain-language assessment of your options.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Schedule a Consultation
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
