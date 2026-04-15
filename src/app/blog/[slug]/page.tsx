import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  blogArticles,
  getArticleBySlug,
  getArticlesSorted,
} from "@/data/blogArticles";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.date + "T12:00:00Z",
      authors: [article.author],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Render markdown-ish content to JSX */
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Blank line — skip
    if (line.trim() === "") {
      i++;
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="font-serif text-2xl text-navy-900 mt-10 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="font-serif text-xl text-navy-900 mt-8 mb-3"
        >
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // Unordered list block
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="list-disc pl-6 space-y-2 my-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: inlineFormat(item) }}
            />
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list block
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={key++} className="list-decimal pl-6 space-y-2 my-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: inlineFormat(item) }}
            />
          ))}
        </ol>
      );
      continue;
    }

    // Blockquote
    if (line.startsWith("> ") || line.startsWith(">")) {
      const quoteLines: string[] = [];
      while (
        i < lines.length &&
        (lines[i].startsWith("> ") || lines[i].startsWith(">"))
      ) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      elements.push(
        <blockquote
          key={key++}
          className="border-l-4 border-gold-400 pl-4 my-6 italic text-slate-500"
          dangerouslySetInnerHTML={{
            __html: inlineFormat(quoteLines.join(" ")),
          }}
        />
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p
        key={key++}
        className="text-slate-600 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
      />
    );
    i++;
  }

  return elements;
}

/** Handle **bold** and *italic* inline formatting */
function inlineFormat(text: string): string {
  return text
    .replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="font-semibold text-navy-900">$1</strong>'
    )
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>");
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return notFound();

  // Get related articles (same category, exclude current)
  const related = getArticlesSorted()
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-gold-400 text-sm hover:text-gold-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Law Journal
          </Link>

          <ScrollReveal>
            <span className="inline-block bg-navy-800 border border-navy-700 text-gold-400 text-xs font-semibold px-3 py-1 rounded-sm mb-4">
              {article.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-tight">
              {article.title}
            </h1>
            <div className="w-12 h-0.5 bg-gold-500 mb-5" />
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span className="inline-flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose-custom">
            {renderContent(article.content)}
          </article>

          {/* CTA */}
          <div className="mt-14 bg-cream border border-slate-100 rounded-sm p-8 text-center">
            <p className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-3">
              Need Legal Guidance?
            </p>
            <p className="font-serif text-2xl text-navy-900 mb-3">
              Schedule a Consultation
            </p>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-5">
              Our attorneys are here to help you navigate estate planning,
              probate, and elder law with clarity and compassion.
            </p>
            <Button href="/contact" variant="primary" size="md">
              Contact WG Law
            </Button>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Related Articles
              </p>
              <h2 className="font-serif text-3xl text-navy-900 mb-2">
                More on {article.category}
              </h2>
              <div className="w-12 h-0.5 bg-gold-500 mb-8" />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel, i) => (
                <ScrollReveal key={rel.slug} delay={i * 0.08}>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="group bg-white border border-slate-100 rounded-sm p-6 hover:border-gold-300 hover:shadow-md transition-all duration-300 block h-full"
                  >
                    <span className="text-gold-500 text-xs font-semibold tracking-wide uppercase">
                      {rel.category}
                    </span>
                    <h3 className="font-serif text-lg text-navy-900 mt-2 mb-2 group-hover:text-gold-600 transition-colors leading-snug">
                      {rel.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">
                      {rel.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold-500 group-hover:text-gold-600 transition-colors">
                      Read Article{" "}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
