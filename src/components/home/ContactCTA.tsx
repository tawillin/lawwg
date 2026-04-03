"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-navy-900/70 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
        >
          Ready to move forward?
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-navy-900 leading-tight mb-4"
        >
          Get a Free Consultation Today
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-navy-800/70 text-base max-w-xl mx-auto mb-8"
        >
          Tell us about your situation. We&apos;ll listen carefully and explain your options — no pressure, no jargon, no charge for the first meeting.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/contact" variant="secondary" size="lg">
            Schedule Online
          </Button>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy-900 text-navy-900 text-base font-semibold rounded-sm hover:bg-navy-900 hover:text-gold-400 transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
