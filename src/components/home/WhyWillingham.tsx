"use client";

import { motion } from "framer-motion";
import { staggerContainer, slideUp } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";
import { MapPin, Heart, Zap } from "lucide-react";

const differentiators = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Our in-depth knowledge of Texas probate law means your case is in capable hands. We understand the complexities unique to McKinney, Southlake, and the Dallas\u2013Fort Worth metroplex.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description:
      "We pride ourselves on offering compassionate, personalized service to each of our clients. We treat every client with personalized attention, recognizing that every family\u2019s situation is unique.",
  },
  {
    icon: Zap,
    title: "Streamlined Process",
    description:
      "We aim for efficiency in all we do, striving to resolve your probate matters quickly and effectively. Your estate plan isn\u2019t just a set of documents \u2014 it\u2019s a safeguard for your family\u2019s future.",
  },
];

export default function WhyWillingham() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Difference"
          title="Why Willingham Law Firm, PC?"
          subtitle="We bring the same commitment to clarity, integrity, and personal attention to every client relationship."
          centered
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={slideUp}
              className="group text-center p-8 bg-cream border border-slate-100 rounded-sm hover:border-gold-400 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-navy-900 rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 transition-colors">
                <item.icon className="w-7 h-7 text-gold-400 group-hover:text-navy-900 transition-colors" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
