import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { leadMagnets, getLeadMagnetBySlug } from "@/lib/leadMagnets";
import LeadMagnetForm from "@/components/lead-capture/LeadMagnetForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2, ArrowLeft, Shield, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return leadMagnets.map((lm) => ({ slug: lm.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const magnet = getLeadMagnetBySlug(slug);
  if (!magnet) return { title: "Resource Not Found" };
  return {
    title: `Free ${magnet.title} | Download Now`,
    description: magnet.description,
  };
}

export default async function LeadMagnetPage({ params }: Props) {
  const { slug } = await params;
  const magnet = getLeadMagnetBySlug(slug);
  if (!magnet) notFound();

  return (
    <>
      <section className="pt-32 pb-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-gold-400 transition-colors mb-6"
            >
              <ArrowLeft className="w-3 h-3" />
              All Resources
            </Link>
            <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Free {magnet.practiceArea} Guide
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
              {magnet.title}
            </h1>
            <div className="w-12 h-0.5 bg-gold-500 mb-5" />
            <p className="text-white/60 text-lg max-w-2xl">
              {magnet.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: what's included */}
            <ScrollReveal>
              <h2 className="font-serif text-2xl text-navy-900 mb-2">
                What&apos;s Inside
              </h2>
              <p className="text-slate-600 mb-6">{magnet.description}</p>

              <div className="space-y-3">
                {magnet.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3 bg-white border border-slate-200 rounded-sm p-4">
                <Shield className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-navy-900">
                    Created by Licensed Texas Attorneys
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    This guide was prepared by the legal team at Willingham Law
                    Group with over {siteConfig.stats[3].number.replace("+", "")}+
                    clients served across North Texas.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: download form */}
            <ScrollReveal>
              <div className="bg-white border border-slate-200 rounded-sm p-8 sticky top-24">
                <h3 className="font-serif text-xl text-navy-900 mb-1">
                  Get Your Free Guide
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Enter your name and email to download the PDF instantly.
                </p>
                <LeadMagnetForm magnet={magnet} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 bg-navy-900 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-serif text-2xl text-white mb-4">
              Want personalized {magnet.practiceArea.toLowerCase()} guidance?
            </h2>
            <p className="text-white/60 text-sm mb-6">
              This guide is a great starting point, but every situation is
              unique. Contact our office to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 text-navy-900 px-6 py-3 rounded-sm text-sm font-semibold hover:bg-gold-400 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 rounded-sm text-sm font-semibold hover:border-gold-500 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
