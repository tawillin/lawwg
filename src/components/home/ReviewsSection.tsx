"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, slideUp } from "@/lib/animations";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Reviews"
          title="Every Case Deserves Care &amp; Attention"
          subtitle="Over 350 five-star Google reviews from families we've served across the Dallas–Fort Worth metroplex."
          centered
          light
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={slideUp}
              className="bg-navy-800 border border-navy-700 rounded-sm p-6 flex flex-col gap-4"
            >
              <StarRating count={review.stars} />
              <p className="text-white/75 text-sm leading-relaxed flex-1 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-navy-700">
                <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-gold-400 text-xs font-bold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <p className="text-gold-400 text-sm font-semibold">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
