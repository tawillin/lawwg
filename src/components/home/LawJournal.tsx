"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, slideUp } from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function LawJournal() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Law Journal"
          title="Insights for Texas Families"
          subtitle="Practical guidance on estate planning, probate, and elder law from our attorneys."
          centered
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogArticles.map((article) => (
            <motion.article
              key={article.slug}
              variants={slideUp}
              className="group flex flex-col bg-cream border border-slate-100 rounded-sm overflow-hidden hover:border-gold-400 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              {/* Category banner */}
              <div className="bg-navy-900 px-6 py-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gold-400" />
                <span className="text-gold-400 text-xs font-semibold tracking-wider uppercase">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-lg text-navy-900 leading-snug mb-3 flex-1">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold-500 group-hover:text-gold-600 transition-colors">
                  Read Article{" "}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button href="/blog" variant="outline" size="md">
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
