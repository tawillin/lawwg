// src/components/trust-scorecard/TrustScorecard.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValueEvent } from "framer-motion";
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

  const springScore = useSpring(0, { stiffness: 120, damping: 20 });
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    springScore.set(score);
  }, [score, springScore]);

  useMotionValueEvent(springScore, "change", (v) => {
    setDisplayScore(Math.round(v));
  });

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
              aria-pressed={checked}
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
            <span className="text-white/40 text-sm mb-2">/ 177 pts</span>
          </div>

          {/* Progress bar — 4 tier segments */}
          <div className="flex gap-0.5 mb-1 h-2.5 rounded-full overflow-hidden">
            {TIERS.map((t, i) => {
              const active = score >= t.min;
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
            type="button"
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
            Book a Consultation
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
