import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { leadMagnets } from "@/lib/leadMagnets";
import { Download, ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Legal Resources & Guides",
  description:
    "Free downloadable checklists and guides for estate planning, probate, and elder law in Texas. Created by the attorneys at Willingham Law Group.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Free Resources
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
              Legal Guides &amp; Checklists
            </h1>
            <div className="w-12 h-0.5 bg-gold-500 mb-5" />
            <p className="text-white/60 text-lg max-w-2xl">
              Practical, Texas-specific resources created by our attorneys to
              help you understand your legal options. Download any guide for
              free.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadMagnets.map((magnet) => (
              <ScrollReveal key={magnet.slug}>
                <Link
                  href={`/resources/${magnet.slug}`}
                  className="block bg-white border border-slate-200 rounded-sm p-6 hover:border-gold-500 hover:shadow-md transition-all group h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/30 rounded-sm flex items-center justify-center">
                      <FileText className="w-5 h-5 text-gold-500" />
                    </div>
                    <span className="text-xs font-semibold text-gold-600 uppercase tracking-wide">
                      {magnet.practiceArea}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {magnet.title}
                  </h2>
                  <p className="text-sm text-slate-600 mb-4">
                    {magnet.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gold-600">
                    <Download className="w-4 h-4" />
                    Download Free Guide
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-2xl text-navy-900 mb-4">
              Need Personalized Guidance?
            </h2>
            <p className="text-slate-600 mb-6">
              These guides provide general information about Texas law. For
              advice specific to your situation, contact our office for a
              consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-navy-800 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
