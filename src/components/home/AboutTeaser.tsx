"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const values = [
  "Honest, plain-language legal advice",
  "Responsive communication — always",
  "Flat-fee options for predictable costs",
  "Deeply personal service for every client",
];

export default function AboutTeaser() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            >
              About the Firm
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl text-navy-900 leading-tight mb-4"
            >
              Law that explains itself
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "48px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-0.5 bg-gold-500 mb-6"
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-slate-600 text-base leading-relaxed mb-4"
            >
              {siteConfig.name} was founded on a simple belief: legal matters are stressful enough
              without a lawyer who speaks only in jargon. We take the time to
              explain your options clearly, so you can make confident decisions.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-slate-600 text-base leading-relaxed mb-8"
            >
              Whether you&apos;re planning your estate, starting a business, or navigating
              a legal dispute, we bring the same commitment to clarity and
              integrity to every client relationship.
            </motion.p>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 mb-10"
            >
              {values.map((v) => (
                <motion.li
                  key={v}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-slate-700 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  {v}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Button href="/about" variant="secondary" size="md">
                Meet the Team
              </Button>
            </motion.div>
          </div>

          {/* Visual column — decorative quote block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-navy-900 rounded-sm p-10 lg:p-12">
              {/* Large quote mark */}
              <div className="font-serif text-8xl text-gold-500/20 leading-none mb-2 -mt-4">&ldquo;</div>
              <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-6 -mt-6">
                Our goal is not just to handle your legal matter — it&apos;s to make
                sure you understand every decision along the way.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-0.5 bg-gold-500" />
                <p className="text-gold-400 text-sm font-semibold">
                  Taylor Willingham, Esq.
                </p>
              </div>
            </div>
            {/* Decorative gold border offset */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold-500/30 rounded-sm pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
