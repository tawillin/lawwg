"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean; // true = white text (for dark backgrounds)
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered ? "text-center" : "", className)}>
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={cn(
            "text-xs font-semibold tracking-[0.2em] uppercase mb-3",
            light ? "text-gold-400" : "text-gold-500"
          )}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={cn(
          "font-serif text-3xl md:text-4xl leading-tight",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </motion.h2>
      {/* Gold underline accent */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: centered ? "64px" : "48px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "h-0.5 bg-gold-500 mt-4",
          centered ? "mx-auto" : ""
        )}
      />
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed max-w-2xl",
            centered ? "mx-auto" : "",
            light ? "text-blue-100" : "text-slate-600"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
