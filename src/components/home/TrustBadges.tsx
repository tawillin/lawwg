"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Shield, Star, Award, Scale } from "lucide-react";

const badges = [
  {
    icon: Shield,
    label: "BBB Accredited",
    detail: "A+ Rating",
  },
  {
    icon: Star,
    label: "Google Reviews",
    detail: "200+ Five-Star Reviews",
  },
  {
    icon: Award,
    label: "Elder Law College",
    detail: "Certified Member",
  },
  {
    icon: Scale,
    label: "Top Rated",
    detail: "Estate Planning Attorney",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.label}
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-sm flex items-center justify-center shrink-0">
                <badge.icon className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">
                  {badge.label}
                </p>
                <p className="text-gold-400/70 text-xs mt-0.5">
                  {badge.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
