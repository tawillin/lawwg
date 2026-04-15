"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Scroll,
  Heart,
  Building2,
  Scale,
  ArrowRight,
} from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, slideUp } from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Scroll,
  Heart,
  Building2,
  Scale,
};

export default function PracticeAreaGrid() {
  return (
    <section id="practice-areas" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Comprehensive Legal Services"
          subtitle="We combine deep legal expertise with clear communication, helping you understand your options at every step."
          centered
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {practiceAreas.map((area, i) => {
            const Icon = iconMap[area.icon] ?? Shield;
            return (
              <motion.div key={area.slug} variants={slideUp}>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="group block bg-white border border-slate-100 hover:border-gold-300 rounded-sm p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-navy-900 rounded-sm flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-gold-500 group-hover:text-navy-900 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {area.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-gold-500 text-xs font-semibold tracking-wide uppercase mb-3">
                    {area.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-navy-900 text-sm font-semibold group-hover:text-gold-600 transition-colors">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div variants={slideUp} className={practiceAreas.length % 3 === 2 ? "" : ""}>
            <Link
              href="/contact"
              className="group block bg-navy-900 rounded-sm p-8 h-full flex flex-col justify-between min-h-[280px] hover:bg-navy-800 transition-colors duration-300"
            >
              <div>
                <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  Ready to get started?
                </p>
                <h3 className="font-serif text-2xl text-white mb-4 leading-tight">
                  Schedule Your Consultation
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Not sure which area applies to you? We&apos;ll listen to your situation and point you in the right direction — no charge.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 mt-6 text-gold-400 text-sm font-semibold group-hover:text-gold-300 transition-colors">
                Contact us today
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
