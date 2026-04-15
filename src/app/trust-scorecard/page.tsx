// src/app/trust-scorecard/page.tsx
import type { Metadata } from "next";
import TrustScorecard from "@/components/trust-scorecard/TrustScorecard";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { TIERS } from "@/lib/trustScorecard";
import { ShieldCheck, ShieldAlert, ShieldX, ShieldHalf } from "lucide-react";

export const metadata: Metadata = {
  title: "Do I Need a Trust? — Free Scorecard",
  description:
    "Answer 20 questions and find out in under 2 minutes whether a living trust is right for your family. Free interactive tool from WG Law.",
};

const tierIcons = [ShieldX, ShieldHalf, ShieldCheck, ShieldAlert];

const tierColors = [
  "border-slate-200 bg-white",
  "border-amber-200 bg-amber-50",
  "border-orange-200 bg-orange-50",
  "border-emerald-200 bg-emerald-50",
];

const tierTextColors = [
  "text-slate-600",
  "text-amber-700",
  "text-orange-700",
  "text-emerald-700",
];


export default function TrustScorecardPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Estate Planning Tool
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Do I Need a Trust?
          </h1>
          <div className="w-12 h-0.5 bg-gold-500 mb-5" />
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Answer 20 questions and find out in under 2 minutes. Check every
            question that applies to your situation — your score updates live
            and you can download a personalized PDF summary.
          </p>
          <p className="text-white/30 text-sm mt-3">
            Your answers are private — nothing is sent to us.
          </p>
        </div>
      </section>

      {/* Scorecard */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustScorecard />
        </div>
      </section>

      {/* Tier explainer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Score Guide"
            title="What Your Score Means"
            subtitle="Reflecting on your score can guide you in deciding whether the benefits of a living trust align with your family's needs and objectives."
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIERS.map((tier, i) => {
              const Icon = tierIcons[i];
              return (
                <ScrollReveal key={tier.label} delay={i * 0.08}>
                  <div
                    className={`rounded-sm border p-6 h-full ${tierColors[i]}`}
                  >
                    <Icon
                      className={`w-7 h-7 mb-3 ${tierTextColors[i]}`}
                    />
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                      {tier.max === Infinity ? `${tier.min}+ pts` : `${tier.min} – ${tier.max} pts`}
                    </p>
                    <p
                      className={`font-serif text-lg font-semibold mb-2 ${tierTextColors[i]}`}
                    >
                      {tier.label}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-500 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl text-navy-900 mb-3">
            Ready to Talk Through Your Results?
          </h2>
          <p className="text-navy-900/70 mb-8 max-w-xl mx-auto">
            A consultation takes 30 minutes and gives you a clear picture
            of whether a trust makes sense for your family.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Book a Consultation
          </Button>
        </ScrollReveal>
      </section>
    </>
  );
}
