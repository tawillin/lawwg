"use client";

import { motion } from "framer-motion";
import { heroText } from "@/lib/animations";
import { siteConfig } from "@/data/siteConfig";
import Button from "@/components/ui/Button";
import { Phone, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy-900 overflow-hidden -mt-[100px] pt-[100px]">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/95 to-navy-800/60" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.p
            custom={0}
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="text-gold-400 text-xs font-semibold tracking-[0.25em] uppercase mb-5"
          >
            McKinney &amp; Southlake, Texas
          </motion.p>

          <motion.h1
            custom={0.15}
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-0.5 bg-gold-500 mb-5"
          />

          <motion.p
            custom={0.35}
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="text-gold-300/80 text-xl md:text-2xl font-serif italic mb-8"
          >
            {siteConfig.subTagline}
          </motion.p>

          <motion.p
            custom={0.5}
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="text-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
          >
            Trusted estate planning, elder law, and probate attorneys serving families
            across the Dallas–Fort Worth metroplex. Over 350+ five-star Google reviews.
          </motion.p>

          <motion.div
            custom={0.65}
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              Book a Consultation
            </Button>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-base font-semibold rounded-sm hover:border-gold-500 hover:text-gold-400 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={0.85}
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-gold-500/40 pl-4">
                <p className="font-serif text-2xl text-gold-400 font-bold">{stat.number}</p>
                <p className="text-white/50 text-xs tracking-wide mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-5 h-5 text-gold-500/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
