"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { books } from "@/data/reviews";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, slideUp } from "@/lib/animations";

export default function BooksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Published Works"
          title="WG Law's Published Books"
          subtitle="Attorney Taylor Willingham has authored five books on estate planning and elder law, making complex legal concepts accessible to every family."
          centered
          className="mb-12"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {books.map((book, i) => (
            <motion.a
              key={i}
              variants={slideUp}
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-6 bg-cream border border-slate-100 rounded-sm hover:border-gold-400 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-navy-900 rounded-sm flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors">
                <BookOpen className="w-7 h-7 text-gold-400 group-hover:text-navy-900 transition-colors" />
              </div>
              <h3 className="font-serif text-sm text-navy-900 leading-snug mb-3 flex-1">{book.title}</h3>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold-500 group-hover:text-gold-600 transition-colors">
                Buy Now <ExternalLink className="w-3 h-3" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
