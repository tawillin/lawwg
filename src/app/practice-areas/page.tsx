import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";
import { Shield, Scroll, Heart, Home, Building2, Scale } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: "WG Law provides comprehensive legal services in elder law, probate, estate planning, Medicaid planning, real estate law, business tax consulting, and uncontested divorce.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield, Scroll, Heart, Home, Building2, Scale,
  HandHeart: Heart,
};

export default function PracticeAreasPage() {
  return (
    <>
      <section className="pt-8 pb-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">What We Do</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Practice Areas</h1>
            <div className="w-12 h-0.5 bg-gold-500 mb-5" />
            <p className="text-white/60 text-lg max-w-2xl">
              Comprehensive legal services for Texas families and businesses — delivered with clarity, compassion, and expertise.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => {
              const Icon = iconMap[area.icon] ?? Shield;
              return (
                <Link
                  key={area.slug}
                  href={`/practice-areas/${area.slug}`}
                  className="group bg-white border border-slate-100 hover:border-gold-300 rounded-sm p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-navy-900 rounded-sm flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors">
                    <Icon className="w-6 h-6 text-gold-400 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <h2 className="font-serif text-xl text-navy-900 mb-1 group-hover:text-gold-600 transition-colors">{area.title}</h2>
                  <p className="text-gold-500 text-xs font-semibold tracking-wide uppercase mb-3">{area.tagline}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{area.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
