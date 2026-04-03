import type { Metadata } from "next";
import Link from "next/link";
import { attorneys } from "@/data/attorneys";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { reviews } from "@/data/reviews";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "The Firm",
  description: "Meet the attorneys at Willingham Law Firm, PC — experienced, approachable, and committed to clear legal guidance for McKinney and Southlake families.",
};

const differentiators = [
  { title: "Making the Process Simple", body: "Our goal is to alleviate as much stress and anxiety for our clients, while also making sure you have all the information you need to make an informed decision." },
  { title: "Trusted Counsel", body: "We provide you with the honest, compassionate, and dependable legal counsel you need when creating a plan that protects your family, future, and finances." },
  { title: "Proven Track Record", body: "Our attorneys have successfully completed over 6,000 trusts, drafted over 10,000 wills, handled over 2,000 probate matters, and have over 10,000 trusted clients." },
  { title: "Tailored Solutions", body: "Our entire legal team takes pride in creating, drafting, and enforcing powerful estate plans that can protect estates of all sizes." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Team</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">WG Law Team</h1>
            <div className="w-12 h-0.5 bg-gold-500 mb-5" />
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Helping With Estate Planning &amp; Probate in McKinney and Southlake. Our legal team has years of experience helping thousands of clients throughout Texas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Attorneys */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Attorneys" title="Experienced Counsel" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attorneys.map((attorney, i) => (
              <ScrollReveal key={attorney.slug} delay={i * 0.06}>
                <div className="bg-white border border-slate-100 rounded-sm shadow-sm overflow-hidden group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="h-40 bg-navy-800 flex items-center justify-center relative">
                    <div className="w-20 h-20 rounded-full bg-navy-700 border-2 border-gold-500/30 flex items-center justify-center">
                      <span className="font-serif text-2xl text-gold-400">
                        {attorney.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-1">{attorney.title}</p>
                    <h2 className="font-serif text-xl text-navy-900 mb-3">{attorney.name}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{attorney.bio}</p>
                    <Link
                      href={`/attorneys/${attorney.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
                    >
                      Know More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionHeader eyebrow="Our Difference" title="What Sets Our Firm Apart?" subtitle="DEDICATION. EXPERIENCE. RESULTS." centered />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.1}>
                <div className="text-center p-6 bg-cream rounded-sm border border-slate-100">
                  <CheckCircle2 className="w-8 h-8 text-gold-500 mx-auto mb-4" />
                  <h3 className="font-serif text-lg text-navy-900 mb-3">{d.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{d.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WG Texas section */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">Part of a Larger Family</p>
                <h2 className="font-serif text-3xl text-white mb-4">Part of WG Texas</h2>
                <div className="w-12 h-0.5 bg-gold-500 mb-5" />
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  A family of independent companies under one roof. WG Law is proud to be part of WG Texas — a family of independently operated companies aligned by shared values and a long-term commitment to serving Texas families.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  WG Law does not own the other WG Texas companies. Each business is separately operated; WG Texas simply helps facilitate coordination when it benefits the client.
                </p>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "Legal Counsel & Advocacy", sub: "Estate planning, probate, guardianship, elder law, and real estate matters.", url: "http://lawwg.com" },
                { label: "Texas Title & Escrow Services", sub: "Reliable title and closing services for real estate transactions throughout Texas.", url: "http://wgtitle.com" },
                { label: "Strategy & Stewardship", sub: "Fully independent fiduciary, financial planning and wealth management firm.", url: "http://wgplan.com" },
              ].map((co, i) => (
                <ScrollReveal key={co.label} delay={i * 0.1}>
                  <a href={co.url} target="_blank" rel="noopener noreferrer"
                    className="block bg-navy-800 border border-navy-700 rounded-sm p-5 hover:border-gold-500/50 transition-colors">
                    <p className="text-gold-400 text-sm font-semibold mb-1">{co.label}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{co.sub}</p>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader eyebrow="Client Testimonials" title="Read Recent 5-Star Reviews" centered className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reviews.slice(0, 3).map((r, i) => (
              <ScrollReveal key={i}>
                <div className="bg-white border border-slate-100 rounded-sm p-6 text-left">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, si) => <Star key={si} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />)}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic mb-4 line-clamp-4">&ldquo;{r.text}&rdquo;</p>
                  <p className="text-navy-900 text-sm font-semibold">{r.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <Button href="/5-star-reviews" variant="secondary">View All Reviews</Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-500 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl text-navy-900 mb-4">Book a Free Consultation</h2>
          <Button href="/contact" variant="secondary" size="lg">Contact Our Attorneys Today</Button>
        </ScrollReveal>
      </section>
    </>
  );
}
