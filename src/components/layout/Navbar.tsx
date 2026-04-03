"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scale, Phone, Star } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { siteConfig } from "@/data/siteConfig";
import { practiceAreas } from "@/data/practiceAreas";
import { cn } from "@/lib/utils";

const firmLinks = [
  { label: "About the Firm", href: "/about" },
  { label: "Taylor Willingham", href: "/attorneys/taylor-willingham" },
  { label: "Carla Alston", href: "/attorneys/carla-alston" },
  { label: "Stephan D. Hwang", href: "/attorneys/stephan-hwang" },
  { label: "Therese Gutierrez", href: "/attorneys/therese-gutierrez" },
  { label: "Philip Burgess", href: "/attorneys/philip-burgess" },
];

type DropdownKey = "firm" | "practice" | null;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const scrollY = useScrollProgress();
  const scrolled = scrollY > 60;

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-navy-900 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <Link
            href="/5-star-reviews"
            className="flex items-center gap-1.5 text-gold-400 text-xs font-semibold hover:text-gold-300 transition-colors"
          >
            <Star className="w-3 h-3 fill-gold-400" />
            Over {siteConfig.reviewCount} 5-Star Google Reviews
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-1.5 text-white/70 hover:text-gold-400 text-xs font-semibold transition-colors"
            >
              <Phone className="w-3 h-3" />
              CALL US: {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="hidden sm:block px-3 py-1 bg-gold-500 text-navy-900 text-xs font-bold rounded-sm hover:bg-gold-400 transition-colors"
            >
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "fixed top-9 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-navy-900/96 backdrop-blur-sm shadow-lg"
            : "bg-navy-800"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-gold-500" />
              <span className="font-serif text-lg text-white font-semibold tracking-wide">
                {siteConfig.shortName}
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/" className="text-sm text-white/80 hover:text-gold-400 font-medium tracking-wide transition-colors">
                Home
              </Link>

              {/* The Firm dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("firm")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href="/about" className="text-sm text-white/80 hover:text-gold-400 font-medium tracking-wide transition-colors flex items-center gap-1">
                  The Firm <span className="text-xs opacity-60">▾</span>
                </Link>
                <AnimatePresence>
                  {openDropdown === "firm" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-52 bg-navy-800 border border-navy-700 rounded-sm shadow-xl overflow-hidden"
                    >
                      {firmLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-gold-400 hover:bg-navy-700 transition-colors border-b border-navy-700/50 last:border-0"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Practice Areas dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("practice")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href="/practice-areas" className="text-sm text-white/80 hover:text-gold-400 font-medium tracking-wide transition-colors flex items-center gap-1">
                  Practice Areas <span className="text-xs opacity-60">▾</span>
                </Link>
                <AnimatePresence>
                  {openDropdown === "practice" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-navy-800 border border-navy-700 rounded-sm shadow-xl overflow-hidden"
                    >
                      {practiceAreas.map((area) => (
                        <Link
                          key={area.slug}
                          href={`/practice-areas/${area.slug}`}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-gold-400 hover:bg-navy-700 transition-colors border-b border-navy-700/50 last:border-0"
                        >
                          {area.shortTitle}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="https://www.willprobateattorneys.com/law-journal" target="_blank" className="text-sm text-white/80 hover:text-gold-400 font-medium tracking-wide transition-colors">
                Law Journal
              </Link>
              <Link href="/faq" className="text-sm text-white/80 hover:text-gold-400 font-medium tracking-wide transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-sm text-white/80 hover:text-gold-400 font-medium tracking-wide transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-navy-900 border-t border-navy-700 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
                <Link href="/" onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-gold-400 py-2.5 text-sm font-medium border-b border-navy-700">Home</Link>
                <p className="text-gold-500 text-xs font-semibold tracking-widest uppercase pt-3 pb-1">The Firm</p>
                {firmLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-gold-400 py-2 pl-3 text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
                <p className="text-gold-500 text-xs font-semibold tracking-widest uppercase pt-3 pb-1 border-t border-navy-700 mt-2">Practice Areas</p>
                {practiceAreas.map((area) => (
                  <Link key={area.slug} href={`/practice-areas/${area.slug}`} onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-gold-400 py-2 pl-3 text-sm transition-colors">
                    {area.shortTitle}
                  </Link>
                ))}
                <Link href="/faq" onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-gold-400 py-2.5 text-sm font-medium border-t border-navy-700 mt-2">FAQ</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-2 block text-center py-3 bg-gold-500 text-navy-900 text-sm font-semibold rounded-sm">
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header (top bar 36px + main nav 64px) */}
      <div className="h-[100px]" />
    </>
  );
}
