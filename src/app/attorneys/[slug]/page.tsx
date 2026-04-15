import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { attorneys } from "@/data/attorneys";
import { practiceAreas } from "@/data/practiceAreas";
import { siteConfig } from "@/data/siteConfig";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import AttorneyPhoto from "@/components/ui/AttorneyPhoto";
import { ArrowLeft, Phone, CheckCircle2 } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return attorneys.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const attorney = attorneys.find((a) => a.slug === slug);
  if (!attorney) return { title: "Attorney Not Found" };
  return {
    title: `${attorney.name} — ${attorney.title}`,
    description: attorney.bio,
  };
}

export default async function AttorneyPage({ params }: Props) {
  const { slug } = await params;
  const attorney = attorneys.find((a) => a.slug === slug);
  if (!attorney) notFound();

  const relatedAreas = practiceAreas.filter((pa) =>
    attorney.practiceAreas.some(
      (ap) => ap.toLowerCase().replace(/\s+/g, "-") === pa.slug ||
        pa.title.toLowerCase() === ap.toLowerCase()
    )
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-gold-400 text-sm hover:text-gold-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to The Firm
          </Link>
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            {/* Avatar */}
            <AttorneyPhoto attorney={attorney} size="w-28 h-28" />
            <div>
              <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2">{attorney.title}</p>
              <h1 className="font-serif text-4xl md:text-5xl text-white mb-3">{attorney.name}</h1>
              <div className="w-12 h-0.5 bg-gold-500 mb-4" />
              <div className="flex flex-wrap gap-2">
                {attorney.practiceAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-navy-800 border border-navy-700 text-gold-400 text-xs font-semibold px-3 py-1 rounded-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio + sidebar */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main bio */}
            <div className="lg:col-span-2">
              <SectionHeader eyebrow="Biography" title={attorney.name} className="mb-6" />
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed text-base mb-6">{attorney.longBio}</p>
                <p className="text-slate-600 leading-relaxed text-base">
                  {attorney.name.split(" ")[0]} and the entire WG Law team are committed to providing honest,
                  compassionate, and dependable legal counsel. Whether you are creating a first estate plan,
                  navigating a probate matter, or planning for long-term care, we are here to guide you through
                  every step with clarity and care.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Practice areas */}
              {relatedAreas.length > 0 && (
                <ScrollReveal>
                  <div className="bg-white border border-slate-100 rounded-sm shadow-sm p-6">
                    <p className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-4">Practice Areas</p>
                    <ul className="space-y-2">
                      {relatedAreas.map((area) => (
                        <li key={area.slug}>
                          <Link
                            href={`/practice-areas/${area.slug}`}
                            className="flex items-center gap-2 text-navy-900 text-sm hover:text-gold-600 transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                            {area.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {/* Contact card */}
              <ScrollReveal delay={0.1}>
                <div className="bg-navy-900 rounded-sm p-6">
                  <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">Schedule a Consultation</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Ready to protect your family&rsquo;s future? Call us or book a consultation online.
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-center gap-2 text-gold-400 font-semibold text-sm mb-4 hover:text-gold-300 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {siteConfig.phone}
                  </a>
                  <Button href="/contact" variant="primary" size="sm" className="w-full text-center">
                    Book a Consultation
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Other attorneys */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Team" title="Meet the Other Attorneys" className="mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {attorneys
              .filter((a) => a.slug !== attorney.slug)
              .map((a, i) => (
                <ScrollReveal key={a.slug} delay={i * 0.08}>
                  <Link
                    href={`/attorneys/${a.slug}`}
                    className="group bg-cream border border-slate-100 rounded-sm p-5 hover:border-gold-300 hover:shadow-md transition-all duration-300 block"
                  >
                    <AttorneyPhoto attorney={a} size="w-12 h-12" className="mb-3" />
                    <p className="text-gold-500 text-xs font-semibold tracking-wide uppercase mb-1">{a.title}</p>
                    <p className="font-serif text-navy-900 text-base group-hover:text-gold-600 transition-colors">{a.name}</p>
                  </Link>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
