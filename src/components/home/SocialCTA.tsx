"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { siteConfig } from "@/data/siteConfig";

const socialLinks = [
  { name: "Facebook", href: siteConfig.social.facebook },
  { name: "YouTube", href: siteConfig.social.youtube },
  { name: "Instagram", href: siteConfig.social.instagram },
];

export default function SocialCTA() {
  return (
    <section className="py-12 bg-navy-800 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-serif text-xl md:text-2xl text-white"
        >
          Stay Updated &amp; Follow Us
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mt-5"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gold-400 border border-gold-500/30 px-5 py-2.5 rounded-sm hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
