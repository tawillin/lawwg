import type { Metadata } from "next";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/siteConfig";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { Star, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "5-Star Client Reviews",
  description: `Read ${siteConfig.reviewCount} 5-star reviews from satisfied WG Law clients throughout McKinney, Southlake, and the greater Dallas–Fort Worth area.`,
};

const platformLinks = [
  { name: "Google", url: "https://g.co/kgs/willinghamlaw" },
  { name: "Facebook", url: "https://www.facebook.com/WillinghamLawFirm/reviews" },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Client Testimonials</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">5-Star Reviews</h1>
          <div className="w-12 h-0.5 bg-gold-500 mb-5" />
          <div className="flex items-center gap-3 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold-400 text-gold-400" />
            ))}
            <span className="text-white font-semibold text-lg">{siteConfig.reviewCount} Reviews</span>
          </div>
          <p className="text-white/60 text-lg max-w-2xl">
            See what Texas families and professionals say about working with WG Law.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gold-500 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl font-bold text-navy-900">{stat.number}</p>
                <p className="text-navy-900/70 text-xs font-semibold tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What Our Clients Say"
            title="Real Reviews from Real Clients"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="bg-white border border-slate-100 rounded-sm shadow-sm p-6 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: review.stars }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  {/* Review text */}
                  <p className="text-slate-600 text-sm leading-relaxed italic flex-1 mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  {/* Reviewer */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-9 h-9 rounded-full bg-navy-900 flex items-center justify-center flex-shrink-0">
                      <span className="font-serif text-gold-400 text-sm font-semibold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-navy-900 text-sm font-semibold">{review.name}</p>
                      <p className="text-slate-400 text-xs">Verified Client</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Leave a review prompt */}
          <div className="mt-16 bg-white border border-slate-100 rounded-sm shadow-sm p-8 text-center">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Share Your Experience"
                title="Leave Us a Review"
                subtitle="Your review helps other families find trusted legal counsel. We are grateful for every kind word."
                centered
                className="mb-8"
              />
              <div className="flex flex-wrap gap-4 justify-center">
                {platformLinks.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-navy-900 text-gold-400 px-6 py-3 rounded-sm text-sm font-semibold hover:bg-navy-800 transition-colors"
                  >
                    Review us on {platform.name}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-500 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl text-navy-900 mb-4">Ready to Experience the Difference?</h2>
          <Button href="/contact" variant="secondary" size="lg">Book a Free Consultation</Button>
        </ScrollReveal>
      </section>
    </>
  );
}
