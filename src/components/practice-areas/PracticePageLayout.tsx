import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import LegalServiceSchema from "@/components/seo/LegalServiceSchema";
import { practiceAreas } from "@/data/practiceAreas";
import { ArrowLeft } from "lucide-react";

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
};

const relatedLabels: Record<string, string> = {
  trusts: "Trusts",
  probate: "Probate",
  "elder-law": "Elder Law",
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
}: PracticePageLayoutProps) {
  const practiceArea = slug
    ? practiceAreas.find((p) => p.slug === slug)
    : undefined;

  return (
    <>
      {practiceArea && <LegalServiceSchema practiceArea={practiceArea} />}
      {/* Page hero */}
      <section className="pt-32 pb-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Button href="/practice-areas/trusts" variant="outline" size="sm" className="mb-6 text-white/60 border-white/20 hover:border-gold-500 hover:text-gold-400 hover:bg-transparent">
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

      {/* Related practice areas */}
      {relatedSlugs.length > 0 && (
        <section className="py-12 bg-cream border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Related Practice Areas
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedSlugs.map((slug) => (
                <Button
                  key={slug}
                  href={`/practice-areas/${slug}`}
                  variant="outline"
                  size="sm"
                >
                  {relatedLabels[slug] ?? slug}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

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
