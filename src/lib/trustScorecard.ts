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
  const PAGE_H = 297;
  const NAVY: [number, number, number] = [10, 22, 40];
  const GOLD: [number, number, number] = [201, 168, 76];
  const MAX_SCORE = QUESTIONS.reduce((sum, q) => sum + q.points, 0);
  const tier = getTier(score);

  // ── Header bar ──────────────────────────────────────────────
  doc.setFillColor(...NAVY); // navy-900
  doc.rect(0, 0, W, 22, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(...GOLD); // gold-500
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
      doc.setTextColor(...GOLD);
      doc.text(`+${q.points}`, W - margin, y, { align: "right" });
    }
    y += 7;
  });

  y += 4;

  // ── Divider ─────────────────────────────────────────────────
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.5);
  doc.line(margin, y, W - margin, y);
  y += 8;

  // ── Score result box ─────────────────────────────────────────
  doc.setFillColor(...NAVY);
  doc.roundedRect(margin, y, contentW, 36, 2, 2, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(...GOLD);
  doc.text(`${score}`, margin + 8, y + 14);

  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text("YOUR SCORE", margin + 8, y + 20);

  doc.setFontSize(11);
  doc.setTextColor(...GOLD);
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
  const fillW = Math.min(barW, (score / MAX_SCORE) * barW);
  if (fillW > 0) {
    doc.setFillColor(...GOLD);
    doc.roundedRect(margin, y, fillW, barH, 1, 1, "F");
  }
  y += 10;

  // Tier labels
  doc.setFontSize(7);
  doc.setTextColor(100, 100, 100);
  doc.text("0–6",   margin, y);
  doc.text("7–14",  margin + (7  / MAX_SCORE) * barW, y);
  doc.text("15–30", margin + (15 / MAX_SCORE) * barW, y);
  doc.text("31+",   margin + (31 / MAX_SCORE) * barW, y);
  y += 8;

  // ── Next step ────────────────────────────────────────────────
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...NAVY);
  doc.text("Next step: Book a consultation to discuss your results.", margin, y);
  y += 6;

  // ── Footer ───────────────────────────────────────────────────
  const footerY = PAGE_H - 22;
  doc.setFillColor(...NAVY);
  doc.rect(0, footerY - 2, W, 24, "F");
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...GOLD);
  doc.text("214-250-4407  ·  a@taylorwillingham.com  ·  lawwg.com", margin, footerY + 4);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(200, 200, 200);
  doc.text("McKinney: 7701 Eldorado Pkwy., Suite 200  ·  Southlake: 1560 E Southlake Blvd, Suite 100", margin, footerY + 9);
  doc.setFontSize(7);
  doc.setTextColor(150, 150, 150);
  doc.text("This worksheet is for educational purposes only and does not constitute legal advice.", margin, footerY + 15);

  doc.save("WGLaw-Trust-Scorecard-Results.pdf");
}
