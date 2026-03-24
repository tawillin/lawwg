# Probate Interactive Page — Design Doc
**Date:** 2026-03-24
**Status:** Approved

---

## Goal
Replace the existing static probate page with a rich educational experience covering all 6 Texas probate types, featuring a split-panel interactive diagram: a decision tree (left) that guides visitors to their type, and a detail panel (right) that shows the full process for whichever type is selected.

---

## Page Structure

1. **Hero** — navy bg, eyebrow "Estate Administration", title "Probate in Texas", short subtitle
2. **Interactive Explorer** — full-width section, cream bg, split-panel diagram
3. **Content Sections** — What is probate?, Executor role, Avoiding probate, Contested estates
4. **CTA** — gold bg, Book a Free Consultation

---

## The 6 Probate Types

| # | Type | Complexity | Avg. Time | Court |
|---|------|-----------|-----------|-------|
| 1 | Independent Administration | Moderate | 6–12 mo | Minimal |
| 2 | Dependent Administration | High | 12–24 mo | High |
| 3 | Muniment of Title | Low | 2–6 wk | One hearing |
| 4 | Small Estate Affidavit | Low | 1–4 wk | None |
| 5 | Affidavit of Heirship | Low | 2–4 wk | None |
| 6 | Determination of Heirship | Moderate | 3–9 mo | Required |

---

## Decision Tree Logic

```
Q1: Did the person leave a valid will?
  ├─ YES → Q2: Is the only goal to transfer real property title (no unsecured debts)?
  │          ├─ YES → ✅ Muniment of Title
  │          └─ NO  → Q3: Will all heirs agree to independent administration?
  │                     ├─ YES → ✅ Independent Administration
  │                     └─ NO  → ✅ Dependent Administration
  └─ NO  → Q4: Is the total estate value under $75,000 (excluding homestead)?
             ├─ YES → ✅ Small Estate Affidavit
             └─ NO  → Q5: Is the primary asset real property (land or a house)?
                        ├─ YES → ✅ Affidavit of Heirship
                        └─ NO  → ✅ Determination of Heirship
```

---

## Interactive Explorer Component — `ProbateExplorer`

**File:** `src/components/practice-areas/ProbateExplorer.tsx`
**Directive:** `"use client"`

### State
```ts
type TreeState =
  | { phase: "tree"; questionIndex: number; answers: boolean[] }
  | { phase: "result"; typeId: string };

const [treeState, setTreeState] = useState<TreeState>({ phase: "tree", questionIndex: 0, answers: [] });
const [selectedType, setSelectedType] = useState<string>("independent"); // default shown in panel
```

### Left Panel — Decision Tree
- Shows one question at a time with YES / NO buttons
- Answered questions shown as a collapsed breadcrumb trail above the current question
- On reaching a result: shows a highlighted result card with the type name + "See full process →" CTA that scrolls the right panel into focus
- "Start over" resets `treeState` and clears breadcrumb trail
- Framer Motion `AnimatePresence` for question-to-question transitions (slide up + fade)

### Right Panel — Detail Panel
- Driven by `selectedType` — updates whenever tree produces a result OR user clicks a type tab
- Sections:
  1. **Type header** — name, complexity badge (color-coded), court involvement pill
  2. **When to use** — 2–3 sentence description
  3. **Requirements** — bullet checklist
  4. **Process steps** — numbered vertical timeline (4–6 steps), each step animates in with Framer Motion stagger when panel changes
  5. **Timeline bar** — visual horizontal bar showing estimated duration relative to 24 months
  6. **Bottom strip** — "All 6 types" pill tabs for manual browsing

### Complexity colors
- Low → `text-emerald-600 bg-emerald-50`
- Moderate → `text-amber-600 bg-amber-50`
- High → `text-red-600 bg-red-50`

### Mobile layout
- Stack: tree panel on top, detail panel below
- "All 6 types" strip scrolls horizontally

---

## Data Shape

```ts
type ProbateType = {
  id: string;
  name: string;
  complexity: "Low" | "Moderate" | "High";
  timeEstimate: string;
  courtInvolvement: "None" | "One hearing" | "Minimal" | "Required" | "High";
  whenToUse: string;
  requirements: string[];
  steps: { label: string; detail: string }[];
  timelineWeeks: number; // for bar width calc, max ~104 (2 years)
};
```

Data defined inline in the component file (not a separate data file — it's page-specific).

---

## Files to Create / Modify

| Action | File |
|--------|------|
| Replace | `src/app/practice-areas/probate/page.tsx` |
| Create | `src/components/practice-areas/ProbateExplorer.tsx` |
| Keep (unchanged) | `src/components/practice-areas/diagrams/ProbateDiagram.tsx` |
