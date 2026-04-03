# Trust Scorecard Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add an interactive "Do I Need a Trust?" scorecard at `/trust-scorecard` — 20 yes/no questions, live score tally, tier recommendation, and a branded client-side PDF download — plus a slim homepage callout banner linking to it.

**Architecture:** Four pieces: (1) a slim `TrustScorecardBanner` server component dropped into the homepage, (2) a `TrustScorecard` client component owning all interactive state, (3) a `generateTrustPDF` utility using `jsPDF` to produce the downloadable results PDF, and (4) the `/trust-scorecard` page shell. All PDF generation is client-side — no server, no data sent anywhere.

**Tech Stack:** Next.js 16 App Router · TypeScript · Tailwind CSS v4 · Framer Motion 11 · `jsPDF` (new dependency)

---

## Task 1: Install jsPDF

**Files:**
- Modify: `package.json` (via npm)

**Step 1: Install the package**

```bash
cd "c:\Users\taylo\OneDrive\Documents\lawwg" && npm install jspdf
```

Expected: `added 1 package` (or similar), no errors.

**Step 2: Verify TypeScript types are bundled**

```bash
node -e "require('./node_modules/jspdf/package.json').types && console.log('types ok')"
```

Expected: `types ok` (jsPDF ships its own types — no `@types/jspdf` needed).

---

## Task 2: Create the scorecard data + PDF utility

**Files:**
- Create: `src/lib/trustScorecard.ts`

**Step 1: Write the file**

```ts
// src/lib/trustScorecard.ts
// All scorecard data and the client-side PDF generator.
// Import the PDF generator only inside onClick handlers (dynamic import)
// to avoid SSR issues with jsPDF's browser-only APIs.

export type Question = {
  id: number;
  text: string;
  points: number;
};

export const QUESTIONS: Question[] = [
  { id: 0,  text: "Are you part of a blended family?",                                        points: 10 },
  { id: 1,  text: "Do you own more than one piece of real estate?",                           points: 5  },
  { id: 2,  text: "Do you own mineral interests?",                                            points: 5  },
  { id: 3,  text: "Do you own a business?",                                                   points: 10 },
  { id: 4,  text: "Is your net worth more than $1,000,000?",                                  points: 5  },
  { id: 5,  text: "Do you have more than $1,000,000 in IRAs and 401(k)s?",                   points: 3  },
  { id: 6,  text: "Do you have minor children?",                                              points: 10 },
  { id: 7,  text: "Do your heirs have significant debt?",                                     points: 3  },
  { id: 8,  text: "Does your child have significant student loan debt?",                      points: 3  },
  { id: 9,  text: "Do you want to protect your children from claims in a divorce?",           points: 3  },
  { id: 10, text: "Do you want multi-generational planning? (Requires a Trust.)",             points: 20 },
  { id: 11, text: "Do you want to prevent your assets from passing to a future spouse?",      points: 15 },
  { id: 12, text: "Do you need to provide for a disabled individual?",                        points: 15 },
  { id: 13, text: "Would you like a professional to manage your children's assets?",          points: 10 },
  { id: 14, text: "Is your estate likely to exceed $15,000,000?",                             points: 20 },
  { id: 15, text: "Do you want to provide care for your pets?",                               points: 5  },
  { id: 16, text: "Do you wish to leave money to charity?",                                   points: 5  },
  { id: 17, text: "Do you have a specific, impactful goal you want to achieve?",              points: 10 },
  { id: 18, text: "Do you want to reduce taxes?",                                             points: 10 },
  { id: 19, text: "Do you value protecting your privacy?",                                    points: 10 },
];

export type Tier = {
  min: number;
  max: number;
  label: string;
  description: string;
  color: string; // tailwind text color for UI
};

export const TIERS: Tier[] = [
  {
    min: 0,  max: 6,
    label: "Little Value",
    description: "A trust has little value for your situation.",
    color: "text-slate-600",
  },
  {
    min: 7,  max: 14,
    label: "Moderate Value",
    description: "A trust provides moderate value depending on the circumstances.",
    color: "text-amber-700",
  },
  {
    min: 15, max: 30,
    label: "Significant Value",
    description: "A trust offers significant value especially if management is needed.",
    color: "text-orange-700",
  },
  {
    min: 31, max: Infinity,
    label: "Near Necessity",
    description: "A trust is almost a necessity for effectively meeting your estate planning goals.",
    color: "text-emerald-700",
  },
];

export function getTier(score: number): Tier {
  return TIERS.find((t) => score >= t.min && score <= t.max) ?? TIERS[0];
}

/** Call this only from a browser click handler — jsPDF is browser-only. */
export async function generateTrustPDF(answers: Record<number, boolean>, score: number) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const W = 210;
  const margin = 18;
  const contentW = W - margin * 2;
  const tier = getTier(score);

  // ── Header bar ──────────────────────────────────────────────
  doc.setFillColor(10, 22, 40); // navy-900
  doc.rect(0, 0, W, 22, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(201, 168, 76); // gold-500
  doc.text("WG LAW  ·  Willingham Law Firm, PC", margin, 10);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(255, 255, 255);
  doc.text("Do You Need a Trust? — My Results", margin, 17);

  let y = 30;

  // ── Questions ───────────────────────────────────────────────
  doc.setFontSize(9);
  QUESTIONS.forEach((q, i) => {
    const answered = !!answers[q.id];
    // Alternating row bg
    if (i % 2 === 0) {
      doc.setFillColor(247, 247, 247);
      doc.rect(margin - 2, y - 4, contentW + 4, 7, "F");
    }
    // Checkmark / dash
    doc.setFont("helvetica", "bold");
    doc.setTextColor(answered ? 10 : 150, answered ? 120 : 150, answered ? 20 : 150);
    doc.text(answered ? "✓" : "–", margin, y);
    // Question text
    doc.setFont("helvetica", "normal");
    doc.setTextColor(30, 30, 30);
    doc.text(q.text, margin + 6, y);
    // Points
    doc.setFont("helvetica", "bold");
    doc.setTextColor(answered ? 10 : 150, answered ? 22 : 150, answered ? 40 : 150);
    doc.text(`${q.points} pts`, W - margin - 12, y, { align: "right" });
    // Answered points in gold
    if (answered) {
      doc.setTextColor(201, 168, 76);
      doc.text(`+${q.points}`, W - margin, y, { align: "right" });
    }
    y += 7;
  });

  y += 4;

  // ── Divider ─────────────────────────────────────────────────
  doc.setDrawColor(201, 168, 76);
  doc.setLineWidth(0.5);
  doc.line(margin, y, W - margin, y);
  y += 8;

  // ── Score result box ─────────────────────────────────────────
  doc.setFillColor(10, 22, 40);
  doc.roundedRect(margin, y, contentW, 36, 2, 2, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(201, 168, 76);
  doc.text(`${score}`, margin + 8, y + 14);

  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text("YOUR SCORE", margin + 8, y + 20);

  doc.setFontSize(11);
  doc.setTextColor(201, 168, 76);
  doc.text(tier.label.toUpperCase(), margin + 55, y + 11);
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(220, 220, 220);
  const descLines = doc.splitTextToSize(tier.description, contentW - 65);
  doc.text(descLines, margin + 55, y + 18);

  y += 44;

  // ── Progress bar ─────────────────────────────────────────────
  const barW = contentW;
  const barH = 5;
  doc.setFillColor(220, 220, 220);
  doc.roundedRect(margin, y, barW, barH, 1, 1, "F");
  const maxScore = 172;
  const fillW = Math.min(barW, (score / maxScore) * barW);
  doc.setFillColor(201, 168, 76);
  doc.roundedRect(margin, y, fillW, barH, 1, 1, "F");
  y += 10;

  // Tier labels
  doc.setFontSize(7);
  doc.setTextColor(100, 100, 100);
  doc.text("0–6", margin, y);
  doc.text("7–14", margin + barW * 0.1, y);
  doc.text("15–30", margin + barW * 0.2, y);
  doc.text("31+", margin + barW * 0.35, y);
  y += 8;

  // ── Next step ────────────────────────────────────────────────
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(10, 22, 40);
  doc.text("Next step: Book a free consultation to discuss your results.", margin, y);
  y += 6;

  // ── Footer ───────────────────────────────────────────────────
  const pageH = 297;
  const footerY = pageH - 22;
  doc.setFillColor(10, 22, 40);
  doc.rect(0, footerY - 2, W, 24, "F");
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(201, 168, 76);
  doc.text("214-250-4407  ·  a@taylorwillingham.com  ·  lawwg.com", margin, footerY + 4);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(200, 200, 200);
  doc.text("McKinney: 7701 Eldorado Pkwy., Suite 200  ·  Southlake: 1560 E Southlake Blvd, Suite 100", margin, footerY + 9);
  doc.setFontSize(7);
  doc.setTextColor(150, 150, 150);
  doc.text("This worksheet is for educational purposes only and does not constitute legal advice.", margin, footerY + 15);

  doc.save("WGLaw-Trust-Scorecard-Results.pdf");
}
```

**Step 2: Verify TypeScript**

```bash
cd "c:\Users\taylo\OneDrive\Documents\lawwg" && npx tsc --noEmit 2>&1
```

Expected: no errors.

---

## Task 3: Build TrustScorecard client component

**Files:**
- Create: `src/components/trust-scorecard/TrustScorecard.tsx`

**Step 1: Write the component**

```tsx
// src/components/trust-scorecard/TrustScorecard.tsx
"use client";

import { useState } from "react";
import { motion, useSpring, useTransform, motion as m } from "framer-motion";
import { Download, CheckCircle2, Circle, CalendarCheck } from "lucide-react";
import { QUESTIONS, TIERS, getTier, generateTrustPDF } from "@/lib/trustScorecard";
import Button from "@/components/ui/Button";

export default function TrustScorecard() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [downloading, setDownloading] = useState(false);

  const score = Object.entries(answers)
    .filter(([, v]) => v)
    .reduce((sum, [i]) => sum + QUESTIONS[Number(i)].points, 0);

  const tier = getTier(score);
  const answered = Object.keys(answers).length;
  const maxScore = 172;

  const springScore = useSpring(score, { stiffness: 120, damping: 20 });
  // For display we round the spring value
  const displayScore = useTransform(springScore, (v) => Math.round(v));

  function toggle(id: number) {
    setAnswers((prev) => {
      const next = { ...prev };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = true;
      }
      return next;
    });
  }

  async function handleDownload() {
    setDownloading(true);
    try {
      await generateTrustPDF(answers, score);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      {/* ── Left: Questions ──────────────────────────────────── */}
      <div className="lg:col-span-3 space-y-2">
        {QUESTIONS.map((q) => {
          const checked = !!answers[q.id];
          return (
            <motion.button
              key={q.id}
              onClick={() => toggle(q.id)}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-4 p-4 rounded-sm border text-left transition-all duration-200 ${
                checked
                  ? "bg-white border-gold-400 shadow-sm"
                  : "bg-white border-slate-100 hover:border-slate-300"
              }`}
            >
              {/* Checkbox */}
              <div className="shrink-0">
                {checked ? (
                  <CheckCircle2 className="w-5 h-5 text-gold-500" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-300" />
                )}
              </div>

              {/* Question text */}
              <span
                className={`flex-1 text-sm leading-snug ${
                  checked ? "text-navy-900 font-semibold" : "text-slate-600"
                }`}
              >
                {q.text}
              </span>

              {/* Points badge */}
              <span
                className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${
                  checked
                    ? "bg-gold-500 text-navy-900"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {checked ? `+${q.points}` : `${q.points}`}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* ── Right: Score panel (sticky) ──────────────────────── */}
      <div className="lg:col-span-2 lg:sticky lg:top-28">
        <div className="bg-navy-900 rounded-sm p-6 shadow-lg">
          {/* Score */}
          <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-1">
            Your Score
          </p>
          <div className="flex items-end gap-2 mb-4">
            <motion.span className="font-serif text-6xl text-white font-bold leading-none">
              {displayScore}
            </motion.span>
            <span className="text-white/40 text-sm mb-2">/ 172 pts</span>
          </div>

          {/* Progress bar — 4 tier segments */}
          <div className="flex gap-0.5 mb-1 h-2.5 rounded-full overflow-hidden">
            {TIERS.map((t, i) => {
              const segMax = t.max === Infinity ? maxScore : t.max;
              const segMin = t.min;
              // Is score in or past this tier?
              const active = score >= segMin;
              const widths = ["w-[4%]", "w-[5%]", "w-[11%]", "w-[80%]"];
              return (
                <motion.div
                  key={i}
                  className={`${widths[i]} h-full rounded-sm transition-colors duration-300 ${
                    active ? "bg-gold-500" : "bg-navy-700"
                  }`}
                />
              );
            })}
          </div>
          <div className="flex justify-between text-xs text-white/30 mb-5">
            <span>0</span>
            <span>7</span>
            <span>15</span>
            <span>31+</span>
          </div>

          {/* Tier result */}
          <motion.div
            key={tier.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-navy-800 rounded-sm p-4 mb-5"
          >
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-1">
              {tier.label}
            </p>
            <p className="text-white text-sm leading-relaxed">{tier.description}</p>
          </motion.div>

          {/* Progress hint */}
          {answered === 0 && (
            <p className="text-white/40 text-xs text-center mb-4">
              Check any questions that apply to you
            </p>
          )}

          {/* Download button */}
          <button
            onClick={handleDownload}
            disabled={answered === 0 || downloading}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-sm text-sm font-semibold transition-all duration-200 mb-3 ${
              answered > 0
                ? "bg-gold-500 text-navy-900 hover:bg-gold-400 shadow-md"
                : "bg-navy-700 text-white/30 cursor-not-allowed"
            }`}
          >
            <Download className="w-4 h-4" />
            {downloading ? "Generating PDF…" : "Download My Results"}
          </button>

          {/* Consultation CTA */}
          <Button href="/contact" variant="outline" size="sm" className="w-full">
            <CalendarCheck className="w-4 h-4 mr-2" />
            Book a Free Consultation
          </Button>

          {answered > 0 && (
            <p className="text-white/30 text-xs text-center mt-4">
              {answered} of {QUESTIONS.length} questions answered
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Verify TypeScript**

```bash
cd "c:\Users\taylo\OneDrive\Documents\lawwg" && npx tsc --noEmit 2>&1
```

Expected: no errors.

---

## Task 4: Build the `/trust-scorecard` page

**Files:**
- Create: `src/app/trust-scorecard/page.tsx`

**Step 1: Write the page**

```tsx
// src/app/trust-scorecard/page.tsx
import type { Metadata } from "next";
import TrustScorecard from "@/components/trust-scorecard/TrustScorecard";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { TIERS } from "@/lib/trustScorecard";
import { ShieldCheck, ShieldAlert, ShieldX, ShieldHalf } from "lucide-react";

export const metadata: Metadata = {
  title: "Do I Need a Trust? — Free Scorecard",
  description:
    "Answer 20 questions and find out in under 2 minutes whether a living trust is right for your family. Free interactive tool from WG Law.",
};

const tierIcons = [ShieldX, ShieldHalf, ShieldAlert, ShieldCheck];

const tierColors = [
  "border-slate-200 bg-white",
  "border-amber-200 bg-amber-50",
  "border-orange-200 bg-orange-50",
  "border-emerald-200 bg-emerald-50",
];

const tierTextColors = [
  "text-slate-600",
  "text-amber-700",
  "text-orange-700",
  "text-emerald-700",
];

const tierRanges = ["0 – 6 pts", "7 – 14 pts", "15 – 30 pts", "31+ pts"];

export default function TrustScorecardPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Estate Planning Tool
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Do I Need a Trust?
          </h1>
          <div className="w-12 h-0.5 bg-gold-500 mb-5" />
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Answer 20 questions and find out in under 2 minutes. Check every
            question that applies to your situation — your score updates live
            and you can download a personalized PDF summary.
          </p>
          <p className="text-white/30 text-sm mt-3">
            Your answers are private — nothing is sent to us.
          </p>
        </div>
      </section>

      {/* Scorecard */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustScorecard />
        </div>
      </section>

      {/* Tier explainer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Score Guide"
            title="What Your Score Means"
            subtitle="Reflecting on your score can guide you in deciding whether the benefits of a living trust align with your family's needs and objectives."
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIERS.map((tier, i) => {
              const Icon = tierIcons[i];
              return (
                <ScrollReveal key={tier.label} delay={i * 0.08}>
                  <div
                    className={`rounded-sm border p-6 h-full ${tierColors[i]}`}
                  >
                    <Icon
                      className={`w-7 h-7 mb-3 ${tierTextColors[i]}`}
                    />
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                      {tierRanges[i]}
                    </p>
                    <p
                      className={`font-serif text-lg font-semibold mb-2 ${tierTextColors[i]}`}
                    >
                      {tier.label}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-500 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl text-navy-900 mb-3">
            Ready to Talk Through Your Results?
          </h2>
          <p className="text-navy-900/70 mb-8 max-w-xl mx-auto">
            A free consultation takes 30 minutes and gives you a clear picture
            of whether a trust makes sense for your family.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Book a Free Consultation
          </Button>
        </ScrollReveal>
      </section>
    </>
  );
}
```

**Step 2: Verify TypeScript**

```bash
cd "c:\Users\taylo\OneDrive\Documents\lawwg" && npx tsc --noEmit 2>&1
```

Expected: no errors.

---

## Task 5: Create TrustScorecardBanner and add to homepage

**Files:**
- Create: `src/components/home/TrustScorecardBanner.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create the banner component**

```tsx
// src/components/home/TrustScorecardBanner.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TrustScorecardBanner() {
  return (
    <div className="bg-cream border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-600 text-sm">
          <span className="font-semibold text-navy-900">Not sure if you need a trust?</span>
          {" "}Answer 20 questions and find out in under 2 minutes.
        </p>
        <Link
          href="/trust-scorecard"
          className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 border border-gold-400 px-4 py-2 rounded-sm hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-all duration-200"
        >
          Do I Need a Trust?
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
```

**Step 2: Add the banner to the homepage**

Read `src/app/page.tsx`, then add `TrustScorecardBanner` between `<Hero />` and `<PracticeAreaGrid />`:

```tsx
// src/app/page.tsx
import Hero from "@/components/home/Hero";
import TrustScorecardBanner from "@/components/home/TrustScorecardBanner";
import PracticeAreaGrid from "@/components/home/PracticeAreaGrid";
import AboutTeaser from "@/components/home/AboutTeaser";
import ReviewsSection from "@/components/home/ReviewsSection";
import BooksSection from "@/components/home/BooksSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustScorecardBanner />
      <PracticeAreaGrid />
      <AboutTeaser />
      <ReviewsSection />
      <BooksSection />
      <ContactCTA />
    </>
  );
}
```

**Step 3: Verify TypeScript**

```bash
cd "c:\Users\taylo\OneDrive\Documents\lawwg" && npx tsc --noEmit 2>&1
```

Expected: no errors.

---

## Task 6: Update sitemap + final build check + commit

**Files:**
- Modify: `src/app/sitemap.ts`

**Step 1: Add `/trust-scorecard` to the sitemap**

In `src/app/sitemap.ts`, find the line:

```ts
{ url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
```

Add directly after it:

```ts
{ url: `${baseUrl}/trust-scorecard`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
```

**Step 2: Run the full production build**

```bash
cd "c:\Users\taylo\OneDrive\Documents\lawwg" && npm run build 2>&1
```

Expected:
- `✓ Compiled successfully`
- `○ /trust-scorecard` listed as Static
- `○ /` listed as Static
- Zero TypeScript errors

**Step 3: Commit**

```bash
cd "c:\Users\taylo\OneDrive\Documents\lawwg" && git add \
  src/lib/trustScorecard.ts \
  src/components/trust-scorecard/TrustScorecard.tsx \
  src/app/trust-scorecard/page.tsx \
  src/components/home/TrustScorecardBanner.tsx \
  src/app/page.tsx \
  src/app/sitemap.ts \
  docs/plans/ && \
git commit -m "feat: interactive trust scorecard with PDF download

- 20-question yes/no scorecard at /trust-scorecard
- Live score tally with spring animation and 4-tier result panel
- Client-side PDF generation via jsPDF (no server, fully private)
- PDF includes answered questions, score, tier, and firm contact info
- Slim homepage callout banner with 'Do I Need a Trust?' CTA

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```
