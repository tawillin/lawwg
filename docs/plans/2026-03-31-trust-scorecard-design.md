# Trust Scorecard — Design Doc
**Date:** 2026-03-31
**Status:** Approved

---

## Goal
Add an interactive "Do I Need a Trust?" scorecard to the site. Visitors answer 20 yes/no questions, each worth a set point value, see their score tally live, get a tier recommendation, and download a branded PDF of their filled-in results. A slim callout banner on the homepage drives traffic to the dedicated page.

---

## Scorecard Questions & Point Values

| # | Question | Points |
|---|----------|--------|
| 1 | Are you part of a blended family? | 10 |
| 2 | Do you own more than one piece of real estate? | 5 |
| 3 | Do you own mineral interests? | 5 |
| 4 | Do you own a business? | 10 |
| 5 | Is your net worth more than $1,000,000? | 5 |
| 6 | Do you have more than $1,000,000 in IRAs and 401(k)s? | 3 |
| 7 | Do you have minor children? | 10 |
| 8 | Do your heirs have significant debt? | 3 |
| 9 | Does your child have significant student loan debt? | 3 |
| 10 | Do you want to protect your children from claims in a divorce? | 3 |
| 11 | Do you want multi-generational planning? (Requires a Trust.) | 20 |
| 12 | Do you want to prevent your assets from passing to a future spouse? | 15 |
| 13 | Do you need to provide for a disabled individual? | 15 |
| 14 | Would you like a professional to manage your children's assets? | 10 |
| 15 | Is your estate likely to exceed $15,000,000? | 20 |
| 16 | Do you want to provide care for your pets? | 5 |
| 17 | Do you wish to leave money to charity? | 5 |
| 18 | Do you have a specific, impactful goal you want to achieve? | 10 |
| 19 | Do you want to reduce taxes? | 10 |
| 20 | Do you value protecting your privacy? | 10 |

**Max possible score:** 172

---

## Score Tiers

| Range | Label | Description |
|-------|-------|-------------|
| 0–6 | Little value | A trust has little value for your situation. |
| 7–14 | Moderate value | A trust provides moderate value depending on the circumstances. |
| 15–30 | Significant value | A trust offers significant value especially if management is needed. |
| 31+ | Near necessity | A trust is almost a necessity for effectively meeting your estate planning goals. |

---

## Homepage Changes

### New component: `TrustScorecardBanner`
**File:** `src/components/home/TrustScorecardBanner.tsx`

A single-line callout banner inserted between `<Hero />` and `<PracticeAreaGrid />` in `src/app/page.tsx`.

```
┌──────────────────────────────────────────────────────────────┐
│  cream bg · border-b border-slate-100                        │
│  "Not sure if you need a trust?"  [Do I Need a Trust? →]     │
│  left-aligned text, gold outline button, max-w-7xl container │
└──────────────────────────────────────────────────────────────┘
```

- Background: `bg-cream`
- Button: `variant="outline"` linking to `/trust-scorecard`
- Padding: `py-4`
- ScrollReveal wrapper

---

## New Page: `/trust-scorecard`

**File:** `src/app/trust-scorecard/page.tsx`

### Sections (top to bottom)

1. **Hero** — navy bg, eyebrow "Estate Planning Tool", h1 "Do I Need a Trust?", subtitle "Answer 20 questions and find out in under 2 minutes. Your results are private — nothing is sent to us."

2. **Scorecard** — `<TrustScorecard />` client component (see below)

3. **Tier Explainer** — 4 cards (one per tier) with icon, score range, label, and expanded description. White bg.

4. **CTA** — gold bg, "Ready to talk through your results?" → Book Free Consultation

---

## TrustScorecard Component

**File:** `src/components/trust-scorecard/TrustScorecard.tsx`
**Directive:** `"use client"`

### Layout
```
Desktop (lg): 3-col left questions | 2-col right sticky score panel
Mobile:       questions stacked, score panel below
```

### Left: Question List
- Each question: checkbox toggle (yes = checked, animates gold fill)
- Shows question text + point value badge on the right
- `motion.div` with `whileTap` micro-bounce on toggle
- Checked state: gold checkmark, gold left border accent

### Right: Sticky Score Panel
- Sticky `top-24` on desktop
- **Score counter** — large serif number, animates with `useSpring` from framer-motion when score changes
- **Tier progress bar** — 4 segments (0–6, 7–14, 15–30, 31+), active segment glows gold
- **Tier label + description** — updates live as score changes
- **"Download My Results" button** — triggers `generatePDF()` (disabled / grayed out until at least 1 question answered)
- **"Book a Free Consultation →"** button below

### State
```ts
const [answers, setAnswers] = useState<Record<number, boolean>>({});
const score = Object.entries(answers)
  .filter(([, v]) => v)
  .reduce((sum, [i]) => sum + QUESTIONS[Number(i)].points, 0);
```

---

## PDF Generation

**Library:** `jsPDF` (client-side, no server)
**Install:** `npm install jspdf`

### PDF Layout (A4, portrait)
```
┌─────────────────────────────────────┐
│  WG LAW  ·  Willingham Law Firm, PC │  ← header bar, navy bg, gold text
│  Do You Need a Trust? — My Results  │
├─────────────────────────────────────┤
│  ✓  Are you part of a blended family?              10  ✓  │
│  ✗  Do you own more than one piece of real estate?  5  —  │
│  ...  (all 20 questions)                                   │
├─────────────────────────────────────┤
│  YOUR SCORE:  47                    │  ← large, bold
│  ████████████░░░░  31+ Points       │  ← filled bar
│  "A trust is almost a necessity     │
│   for effectively meeting your      │
│   estate planning goals."           │
├─────────────────────────────────────┤
│  Next step: Book a free consultation│
│  214-250-4407  ·  a@taylorwillingham.com  ·  lawwg.com    │
│  McKinney: 7701 Eldorado Pkwy., Suite 200                  │
│  Southlake: 1560 E Southlake Blvd, Suite 100               │
│  ─────────────────────────────────  │
│  This worksheet is for educational  │
│  purposes only and is not legal     │
│  advice.                            │
└─────────────────────────────────────┘
```

Filename: `WGLaw-Trust-Scorecard-Results.pdf`

---

## Files to Create / Modify

| Action | File |
|--------|------|
| Modify | `src/app/page.tsx` — add `<TrustScorecardBanner />` |
| Create | `src/components/home/TrustScorecardBanner.tsx` |
| Create | `src/app/trust-scorecard/page.tsx` |
| Create | `src/components/trust-scorecard/TrustScorecard.tsx` |
| Install | `jspdf` npm package |

---

## Contact Info for PDF Footer
- Phone: 214-250-4407
- Email: a@taylorwillingham.com
- Website: lawwg.com
- McKinney: 7701 Eldorado Pkwy., Suite 200, McKinney, TX 75070
- Southlake: 1560 E Southlake Blvd, Suite 100, Southlake, TX 76092
- Disclaimer: "This worksheet is for educational purposes only and does not constitute legal advice."
