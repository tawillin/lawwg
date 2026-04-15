import type { Metadata } from "next";
import Link from "next/link";
import { getArticlesSorted } from "@/data/blogArticles";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FileText, ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Law Journal",
  description:
    "Practical insights on estate planning, probate, elder law, and real estate from the attorneys at Willingham Law Group in McKinney and Southlake, Texas.",
  openGraph: {
    title: "Law Journal | Willingham Law Group",
    description:
      "Practical insights on estate planning, probate, elder law, and real estate from the attorneys at Willingham Law Group.",
  },
};

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const articles = getArticlesSorted();

  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Law Journal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
              Insights for Texas Families
            </h1>
            <div className="w-12 h-0.5 bg-gold-500 mb-5" />
            <p className="text-white/60 text-lg max-w-2xl">
              Practical guidance on estate planning, probate, elder law, and
              real estate from our attorneys.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col bg-white border border-slate-100 rounded-sm overflow-hidden hover:border-gold-400 hover:shadow-md transition-all duration-200 hover:-translate-y-1 h-full"
                >
                  {/* Category banner */}
                  <div className="bg-navy-900 px-6 py-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gold-400" />
                    <span className="text-gold-400 text-xs font-semibold tracking-wider uppercase">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Date + read time */}
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(article.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-lg text-navy-900 leading-snug mb-3 flex-1">
                      {article.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold-500 group-hover:text-gold-600 transition-colors mt-auto">
                      Read Article{" "}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
