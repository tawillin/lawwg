# Probate Interactive Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the static probate page with a split-panel interactive explorer: a 5-question decision tree (left) that guides visitors to one of 6 Texas probate types, and a detail panel (right) that shows the full step-by-step process, requirements, timeline, and court involvement for the selected type.

**Architecture:** A single `ProbateExplorer` client component owns all state. The tree is a data-driven state machine (nodes + edges array) — no nested conditionals. The detail panel is driven by a `selectedTypeId` string and re-animates its steps list on every type change using Framer Motion `AnimatePresence` + stagger. The page shell is a custom layout (not `PracticePageLayout`) to give the explorer full-width space.

**Tech Stack:** Next.js 16 App Router · TypeScript · Tailwind CSS v4 · Framer Motion 11 (`AnimatePresence`, `motion.div`, `useAnimate`) · Lucide React

---

## Task 1: Define the data — probate types + decision tree

**Files:**
- Create: `src/components/practice-areas/ProbateExplorer.tsx` (data only, no JSX yet)

**Step 1: Create the file with the `ProbateType` type and all 6 type objects**

```tsx
"use client";

// ─── Types ────────────────────────────────────────────────────────────────────

type Complexity = "Low" | "Moderate" | "High";
type CourtLevel = "None" | "One hearing" | "Minimal" | "Required" | "High";

type ProbateType = {
  id: string;
  name: string;
  shortName: string;
  complexity: Complexity;
  timeEstimate: string;
  timelineWeeks: number; // for bar width, relative to 104 (2 years)
  courtInvolvement: CourtLevel;
  whenToUse: string;
  requirements: string[];
  steps: { label: string; detail: string }[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROBATE_TYPES: ProbateType[] = [
  {
    id: "independent",
    name: "Independent Administration",
    shortName: "Independent",
    complexity: "Moderate",
    timeEstimate: "6–12 months",
    timelineWeeks: 39,
    courtInvolvement: "Minimal",
    whenToUse:
      "The most common form of Texas probate — used when there is a valid will and the executor can act without court supervision for most decisions. Covers the vast majority of estate administrations.",
    requirements: [
      "Valid, court-admitted will",
      "Named executor who is willing to serve",
      "All distributees agree (or will is silent on administration type)",
      "No unusual creditor disputes",
    ],
    steps: [
      { label: "File application for probate", detail: "File the will and application in the county probate court within 4 years of death." },
      { label: "Publish creditor notice", detail: "Publish a notice to creditors in a local newspaper for one week." },
      { label: "Qualify as executor", detail: "Executor takes oath, posts bond if required, and receives Letters Testamentary from the court." },
      { label: "Inventory and appraise assets", detail: "File an inventory, appraisement, and list of claims within 90 days of qualification." },
      { label: "Pay valid debts and taxes", detail: "Identify, verify, and pay legitimate creditor claims and any applicable taxes." },
      { label: "Distribute assets and close", detail: "Transfer assets to beneficiaries per the will. File final accounting and close the estate." },
    ],
  },
  {
    id: "dependent",
    name: "Dependent Administration",
    shortName: "Dependent",
    complexity: "High",
    timeEstimate: "12–24+ months",
    timelineWeeks: 78,
    courtInvolvement: "High",
    whenToUse:
      "Court-supervised administration required when heirs cannot agree on independent administration, the will requires it, or there are significant creditor disputes or complex assets requiring judicial oversight.",
    requirements: [
      "Will (or no will — intestate estate)",
      "Court approval required for most actions",
      "Bond typically required",
      "Contested heirs or creditor disputes common",
    ],
    steps: [
      { label: "File application", detail: "File application for letters testamentary or administration in the probate court." },
      { label: "Appointment hearing", detail: "Court holds a hearing to admit the will and appoint the administrator." },
      { label: "Inventory filed with court", detail: "Administrator files full inventory, which the court reviews and approves." },
      { label: "Court approval for each transaction", detail: "Every sale, payment, or significant action requires a separate court order." },
      { label: "Annual accounting", detail: "Administrator files annual accounts with the court detailing all receipts and disbursements." },
      { label: "Final settlement hearing", detail: "Court reviews final account, approves distribution, and discharges the administrator." },
    ],
  },
  {
    id: "muniment",
    name: "Muniment of Title",
    shortName: "Muniment",
    complexity: "Low",
    timeEstimate: "2–6 weeks",
    timelineWeeks: 4,
    courtInvolvement: "One hearing",
    whenToUse:
      "The simplest probate option when there is a valid will and the estate has no unpaid debts (other than a mortgage on the homestead). Primarily used to transfer real estate title — no executor is appointed.",
    requirements: [
      "Valid will",
      "No unsecured debts (mortgage on homestead is OK)",
      "Primary goal is transferring real property title",
      "All beneficiaries are known and cooperative",
    ],
    steps: [
      { label: "File will and application", detail: "File the original will and application for muniment of title with the probate court." },
      { label: "Court hearing", detail: "Single hearing — court validates the will and signs an order admitting it to probate as a muniment of title." },
      { label: "Record the court order", detail: "Record the certified court order in the deed records of every county where real property is located." },
      { label: "Transfer title", detail: "Beneficiaries present the recorded order to transfer vehicle titles, financial accounts, and other assets directly." },
    ],
  },
  {
    id: "small-estate",
    name: "Small Estate Affidavit",
    shortName: "Small Estate",
    complexity: "Low",
    timeEstimate: "1–4 weeks",
    timelineWeeks: 3,
    courtInvolvement: "None",
    whenToUse:
      "Available when the decedent died without a will and the total estate (excluding homestead and exempt property) is worth $75,000 or less. No court proceeding required — filed directly with the court clerk.",
    requirements: [
      "No valid will",
      "Total estate value ≤ $75,000 (excluding homestead)",
      "At least 30 days have passed since death",
      "No pending probate application",
      "All heirs sign the affidavit",
    ],
    steps: [
      { label: "Wait 30 days", detail: "Texas law requires a 30-day waiting period after death before filing." },
      { label: "Identify all heirs", detail: "Determine who inherits under Texas intestacy law and obtain all heirs' agreement to sign." },
      { label: "Prepare and sign affidavit", detail: "Prepare a sworn affidavit listing the estate assets, debts, and heirs. All distributees sign before a notary." },
      { label: "File with court clerk", detail: "File with the probate court clerk (not a judge). Clerk approves if requirements are met." },
      { label: "Transfer assets", detail: "Present certified copies of the approved affidavit to financial institutions and other asset holders." },
    ],
  },
  {
    id: "heirship-affidavit",
    name: "Affidavit of Heirship",
    shortName: "Affidavit of Heirship",
    complexity: "Low",
    timeEstimate: "2–4 weeks",
    timelineWeeks: 3,
    courtInvolvement: "None",
    whenToUse:
      "Used without a will to establish ownership of real property by documenting the family history and heirs through sworn affidavits. No court proceeding — recorded in county deed records. Best when the only significant asset is real estate.",
    requirements: [
      "No valid will",
      "Primary asset is real property (land or house)",
      "Two disinterested witnesses who knew the decedent",
      "Heirs are clearly identifiable",
    ],
    steps: [
      { label: "Identify heirs and witnesses", detail: "Identify all legal heirs under Texas intestacy law. Find two disinterested witnesses (not heirs) who knew the decedent." },
      { label: "Prepare the affidavit", detail: "Draft an affidavit documenting the family history, marriages, children, and prior property transactions." },
      { label: "Witnesses sign before notary", detail: "Both disinterested witnesses sign the affidavit before a notary public." },
      { label: "Record in deed records", detail: "File the affidavit in the deed records of every county where the real property is located." },
      { label: "5-year seasoning period", detail: "Title companies typically require the affidavit to be on record for 5 years before insuring title. Plan ahead if a near-term sale is anticipated." },
    ],
  },
  {
    id: "determination",
    name: "Determination of Heirship",
    shortName: "Determination",
    complexity: "Moderate",
    timeEstimate: "3–9 months",
    timelineWeeks: 26,
    courtInvolvement: "Required",
    whenToUse:
      "A formal court proceeding to legally establish who the heirs are when someone dies without a will and the estate is too large for a Small Estate Affidavit or includes assets beyond real property. Results in a court decree naming all heirs.",
    requirements: [
      "No valid will",
      "Estate over $75,000 or includes non-real-property assets",
      "Need a court-enforceable determination of heirs",
      "Complex family history or potential heir disputes",
    ],
    steps: [
      { label: "File application", detail: "File an application for determination of heirship in the probate court of the county where the decedent lived." },
      { label: "Court appoints attorney ad litem", detail: "Court appoints an attorney ad litem to represent unknown heirs and ensure a thorough investigation." },
      { label: "Investigation and notice", detail: "Attorney ad litem investigates the family history. Notice is posted and published for unknown heirs." },
      { label: "Hearing", detail: "Court holds a hearing where witnesses testify about the family history and heirship." },
      { label: "Decree of heirship", detail: "Court signs a judgment naming all legal heirs and their respective shares of the estate." },
      { label: "Administer estate", detail: "With heirs established, an administrator can be appointed (or a muniment / affidavit used) to transfer assets." },
    ],
  },
];
```

**Step 2: Define the decision tree as a data structure below the type data**

```tsx
// ─── Decision Tree ─────────────────────────────────────────────────────────────

type TreeNode =
  | { kind: "question"; id: string; text: string; yesNext: string; noNext: string }
  | { kind: "result"; id: string; typeId: string };

const TREE_NODES: Record<string, TreeNode> = {
  q1: { kind: "question", id: "q1", text: "Did the person leave a valid will?", yesNext: "q2", noNext: "q4" },
  q2: { kind: "question", id: "q2", text: "Is the only goal to transfer real property title — and are there no unsecured debts?", yesNext: "r-muniment", noNext: "q3" },
  q3: { kind: "question", id: "q3", text: "Will all heirs agree to independent (unsupervised) administration?", yesNext: "r-independent", noNext: "r-dependent" },
  q4: { kind: "question", id: "q4", text: "Is the total estate value $75,000 or less (excluding the homestead)?", yesNext: "r-small-estate", noNext: "q5" },
  q5: { kind: "question", id: "q5", text: "Is the primary asset real property — land or a house?", yesNext: "r-heirship-affidavit", noNext: "r-determination" },
  "r-independent":       { kind: "result", id: "r-independent",       typeId: "independent" },
  "r-dependent":         { kind: "result", id: "r-dependent",         typeId: "dependent" },
  "r-muniment":          { kind: "result", id: "r-muniment",          typeId: "muniment" },
  "r-small-estate":      { kind: "result", id: "r-small-estate",      typeId: "small-estate" },
  "r-heirship-affidavit":{ kind: "result", id: "r-heirship-affidavit",typeId: "heirship-affidavit" },
  "r-determination":     { kind: "result", id: "r-determination",     typeId: "determination" },
};

const TREE_START = "q1";
```

**Step 3: Verify the file has no TypeScript errors**

Run: `npx tsc --noEmit`
Expected: no errors (just data, no JSX yet)

---

## Task 2: Build the Detail Panel sub-component

**Files:**
- Modify: `src/components/practice-areas/ProbateExplorer.tsx` (add JSX below data)

**Step 1: Add the complexity color helper and DetailPanel component**

Add below the data definitions:

```tsx
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, Scale, ChevronRight } from "lucide-react";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function complexityStyles(c: Complexity) {
  return {
    Low:      "bg-emerald-50 text-emerald-700 border-emerald-200",
    Moderate: "bg-amber-50 text-amber-700 border-amber-200",
    High:     "bg-red-50 text-red-700 border-red-200",
  }[c];
}

function courtStyles(c: CourtLevel) {
  return {
    None:         "bg-emerald-50 text-emerald-700",
    "One hearing":"bg-amber-50 text-amber-700",
    Minimal:      "bg-amber-50 text-amber-700",
    Required:     "bg-orange-50 text-orange-700",
    High:         "bg-red-50 text-red-700",
  }[c];
}

// ─── Detail Panel ─────────────────────────────────────────────────────────────

function DetailPanel({ typeId, onTypeSelect }: { typeId: string; onTypeSelect: (id: string) => void }) {
  const type = PROBATE_TYPES.find((t) => t.id === typeId)!;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeId}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-5"
      >
        {/* Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${complexityStyles(type.complexity)}`}>
              {type.complexity} complexity
            </span>
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${courtStyles(type.courtInvolvement)}`}>
              Court: {type.courtInvolvement}
            </span>
          </div>
          <h3 className="font-serif text-2xl text-navy-900 mb-1">{type.name}</h3>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <Clock className="w-3.5 h-3.5" />
            <span>{type.timeEstimate}</span>
          </div>
        </div>

        {/* When to use */}
        <p className="text-slate-600 text-sm leading-relaxed">{type.whenToUse}</p>

        {/* Requirements */}
        <div>
          <p className="text-xs font-semibold text-navy-900 uppercase tracking-widest mb-2">Requirements</p>
          <ul className="space-y-1.5">
            {type.requirements.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Process steps */}
        <div>
          <p className="text-xs font-semibold text-navy-900 uppercase tracking-widest mb-3">The Process</p>
          <ol className="space-y-3">
            {type.steps.map((step, i) => (
              <motion.li
                key={step.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.25 }}
                className="flex gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{step.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{step.detail}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Timeline bar */}
        <div>
          <p className="text-xs font-semibold text-navy-900 uppercase tracking-widest mb-2">Typical Timeline</p>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gold-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(100, (type.timelineWeeks / 104) * 100)}%` }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>0</span>
            <span className="font-medium text-navy-900">{type.timeEstimate}</span>
            <span>2 years</span>
          </div>
        </div>

        {/* Type switcher strip */}
        <div className="pt-2 border-t border-slate-100">
          <p className="text-xs text-slate-400 mb-2">Browse all types:</p>
          <div className="flex flex-wrap gap-1.5">
            {PROBATE_TYPES.map((t) => (
              <button
                key={t.id}
                onClick={() => onTypeSelect(t.id)}
                className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                  t.id === typeId
                    ? "bg-navy-900 text-gold-400 border-navy-900"
                    : "bg-white text-slate-600 border-slate-200 hover:border-gold-400 hover:text-navy-900"
                }`}
              >
                {t.shortName}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
```

**Step 2: Verify no TypeScript errors**

Run: `npx tsc --noEmit`
Expected: no errors

---

## Task 3: Build the Decision Tree sub-component

**Files:**
- Modify: `src/components/practice-areas/ProbateExplorer.tsx`

**Step 1: Add the DecisionTree component below DetailPanel**

```tsx
// ─── Decision Tree Panel ───────────────────────────────────────────────────────

type TreePhase =
  | { status: "active"; nodeId: string; breadcrumb: { questionText: string; answer: "Yes" | "No" }[] }
  | { status: "result"; typeId: string; breadcrumb: { questionText: string; answer: "Yes" | "No" }[] };

function DecisionTree({
  phase,
  onAnswer,
  onReset,
  onResultSelect,
}: {
  phase: TreePhase;
  onAnswer: (answer: "Yes" | "No") => void;
  onReset: () => void;
  onResultSelect: (typeId: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Breadcrumb trail */}
      {phase.breadcrumb.length > 0 && (
        <div className="space-y-1">
          {phase.breadcrumb.map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
              <ChevronRight className="w-3 h-3 shrink-0" />
              <span className="line-clamp-1">{b.questionText}</span>
              <span className={`ml-auto font-semibold shrink-0 ${b.answer === "Yes" ? "text-emerald-600" : "text-slate-500"}`}>
                {b.answer}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Current question or result */}
      <AnimatePresence mode="wait">
        {phase.status === "active" ? (
          (() => {
            const node = TREE_NODES[phase.nodeId];
            if (node.kind !== "question") return null;
            return (
              <motion.div
                key={phase.nodeId}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-slate-200 rounded-sm p-5 shadow-sm"
              >
                <p className="text-xs font-semibold text-gold-500 uppercase tracking-widest mb-2">
                  Question {phase.breadcrumb.length + 1} of 5
                </p>
                <p className="font-serif text-navy-900 text-base leading-snug mb-5">{node.text}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => onAnswer("Yes")}
                    className="flex-1 bg-navy-900 text-white text-sm font-semibold py-2.5 rounded-sm hover:bg-navy-800 transition-colors"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => onAnswer("No")}
                    className="flex-1 bg-white border border-slate-200 text-navy-900 text-sm font-semibold py-2.5 rounded-sm hover:border-gold-400 transition-colors"
                  >
                    No
                  </button>
                </div>
              </motion.div>
            );
          })()
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="bg-gold-500 rounded-sm p-5"
          >
            {(() => {
              const type = PROBATE_TYPES.find((t) => t.id === phase.typeId)!;
              return (
                <>
                  <p className="text-navy-900/70 text-xs font-semibold uppercase tracking-widest mb-1">Recommended type</p>
                  <p className="font-serif text-navy-900 text-xl font-bold mb-1">{type.name}</p>
                  <p className="text-navy-900/70 text-xs mb-4">{type.timeEstimate} · Court: {type.courtInvolvement}</p>
                  <button
                    onClick={() => onResultSelect(phase.typeId)}
                    className="w-full bg-navy-900 text-gold-400 text-sm font-semibold py-2.5 rounded-sm hover:bg-navy-800 transition-colors"
                  >
                    See full process →
                  </button>
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Start over */}
      {phase.breadcrumb.length > 0 && (
        <button
          onClick={onReset}
          className="text-xs text-slate-400 hover:text-navy-900 transition-colors text-left mt-auto"
        >
          ↩ Start over
        </button>
      )}
    </div>
  );
}
```

**Step 2: Verify no TypeScript errors**

Run: `npx tsc --noEmit`
Expected: no errors

---

## Task 4: Build the ProbateExplorer root component

**Files:**
- Modify: `src/components/practice-areas/ProbateExplorer.tsx` (add root export at the bottom)

**Step 1: Add the root export**

```tsx
// ─── ProbateExplorer (root) ───────────────────────────────────────────────────

export default function ProbateExplorer() {
  const [selectedTypeId, setSelectedTypeId] = useState("independent");
  const [treePhase, setTreePhase] = useState<TreePhase>({
    status: "active",
    nodeId: TREE_START,
    breadcrumb: [],
  });

  // Add this import at the top of the file:
  // import { useState } from "react";

  function handleAnswer(answer: "Yes" | "No") {
    if (treePhase.status !== "active") return;
    const node = TREE_NODES[treePhase.nodeId];
    if (node.kind !== "question") return;

    const nextNodeId = answer === "Yes" ? node.yesNext : node.noNext;
    const nextNode = TREE_NODES[nextNodeId];
    const newBreadcrumb = [...treePhase.breadcrumb, { questionText: node.text, answer }];

    if (nextNode.kind === "result") {
      setTreePhase({ status: "result", typeId: nextNode.typeId, breadcrumb: newBreadcrumb });
      setSelectedTypeId(nextNode.typeId);
    } else {
      setTreePhase({ status: "active", nodeId: nextNodeId, breadcrumb: newBreadcrumb });
    }
  }

  function handleReset() {
    setTreePhase({ status: "active", nodeId: TREE_START, breadcrumb: [] });
  }

  function handleTypeSelect(typeId: string) {
    setSelectedTypeId(typeId);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-slate-200 rounded-sm shadow-sm overflow-hidden">
      {/* Left: Decision Tree */}
      <div className="lg:col-span-2 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-6">
        <p className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-1">Decision Guide</p>
        <h3 className="font-serif text-navy-900 text-lg mb-4">Which type applies?</h3>
        <DecisionTree
          phase={treePhase}
          onAnswer={handleAnswer}
          onReset={handleReset}
          onResultSelect={handleTypeSelect}
        />
      </div>

      {/* Right: Detail Panel */}
      <div className="lg:col-span-3 bg-white p-6 overflow-y-auto max-h-[700px]">
        <DetailPanel typeId={selectedTypeId} onTypeSelect={handleTypeSelect} />
      </div>
    </div>
  );
}
```

**Step 2: Add missing `useState` import at the very top of the file (after `"use client";`)**

```tsx
import { useState } from "react";
```

**Step 3: Verify no TypeScript errors**

Run: `npx tsc --noEmit`
Expected: no errors

---

## Task 5: Build the probate page

**Files:**
- Replace: `src/app/practice-areas/probate/page.tsx`

**Step 1: Write the full page**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProbateExplorer from "@/components/practice-areas/ProbateExplorer";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { practiceAreas } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Probate Administration in Texas",
  description:
    "Understand all 6 types of Texas probate — Independent Administration, Muniment of Title, Small Estate Affidavit, and more. Interactive guide from WG Law.",
};

const sections = [
  {
    heading: "What is probate?",
    body: "Probate is the court-supervised process of administering a deceased person's estate — validating the will, appointing an executor, notifying creditors, paying debts and taxes, and distributing what remains to heirs. It creates a public record and establishes legal ownership of assets. Depending on the type of proceeding, it can take weeks or years.",
  },
  {
    heading: "Do all estates need to go through probate?",
    body: "No. Assets held in a trust, assets with named beneficiaries (like life insurance and retirement accounts), and jointly-held assets with right of survivorship all pass outside of probate. Thoughtful estate planning — particularly the use of living trusts and beneficiary designations — can often eliminate probate entirely.",
  },
  {
    heading: "The role of the executor",
    body: "The executor (called a 'personal representative' in some states) is responsible for guiding the estate through probate. This includes locating and valuing assets, notifying and paying creditors, filing required tax returns, and ultimately distributing assets per the will. Executors have personal liability for mistakes — we help them fulfill their duties correctly.",
  },
  {
    heading: "Contested estates and will disputes",
    body: "Sometimes heirs disagree about the validity of a will, the proper distribution of assets, or the conduct of the executor. These disputes can significantly extend the probate process and increase costs. Our attorneys represent both executors and beneficiaries in contested proceedings, working toward efficient resolution while protecting our clients' interests.",
  },
];

const relatedSlugs = ["estate-planning", "elder-law", "medicaid-planning"];

export default function ProbatePage() {
  const relatedAreas = practiceAreas.filter((a) => relatedSlugs.includes(a.slug));

  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Estate Administration</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Probate in Texas</h1>
          <div className="w-12 h-0.5 bg-gold-500 mb-5" />
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Texas offers six distinct probate paths — from a court filing that takes two weeks to a supervised
            administration that takes two years. Understanding which one applies to your situation is the first step.
          </p>
        </div>
      </section>

      {/* Interactive Explorer */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Interactive Guide"
            title="The 6 Types of Texas Probate"
            subtitle="Answer five questions to find the right path, or browse all six types directly."
            className="mb-8"
          />
          <ProbateExplorer />
        </div>
      </section>

      {/* Content sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
            {sections.map((s, i) => (
              <ScrollReveal key={s.heading} delay={i * 0.08}>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-7 h-7 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <h2 className="font-serif text-xl text-navy-900">{s.heading}</h2>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed pl-10">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related areas */}
      {relatedAreas.length > 0 && (
        <section className="py-12 bg-cream border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-6">Related Practice Areas</p>
            <div className="flex flex-wrap gap-4">
              {relatedAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/practice-areas/${area.slug}`}
                  className="group flex items-center gap-2 bg-white border border-slate-100 rounded-sm px-5 py-3 shadow-sm hover:border-gold-300 hover:shadow-md transition-all duration-300"
                >
                  <span className="font-serif text-navy-900 text-sm group-hover:text-gold-600 transition-colors">{area.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gold-500 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl text-navy-900 mb-4">Ready to Move Forward?</h2>
          <p className="text-navy-900/70 mb-8 max-w-xl mx-auto">
            Our attorneys will assess your situation and guide you to the most efficient path through probate.
          </p>
          <Button href="/contact" variant="secondary" size="lg">Book a Free Consultation</Button>
        </ScrollReveal>
      </section>
    </>
  );
}
```

**Step 2: Run the dev server and verify the page renders**

```bash
npm run dev
```

Open `http://localhost:3000/practice-areas/probate` and verify:
- Hero renders with correct title
- Explorer shows tree (Q1) on left, Independent Administration details on right
- Clicking Yes/No advances the tree and updates the breadcrumb
- Reaching a result shows the gold result card and auto-selects the type in the detail panel
- "See full process →" scrolls attention to detail panel
- Browse strip at bottom of detail panel lets you jump between all 6 types
- "Start over" resets the tree
- Timeline bar animates on type change

---

## Task 6: Final build check and cleanup

**Files:**
- None new

**Step 1: Run full build**

```bash
npm run build
```

Expected: `✓ Generating static pages` with `/practice-areas/probate` listed as `○ (Static)`. Zero TypeScript errors.

**Step 2: Verify old ProbateDiagram is still intact**

The old `ProbateDiagram.tsx` should remain untouched — it's not used by the new page, but deleting it could break any other pages that might import it.

**Step 3: Commit**

```bash
git add src/components/practice-areas/ProbateExplorer.tsx \
        src/app/practice-areas/probate/page.tsx \
        docs/plans/
git commit -m "feat: interactive probate explorer with 6 types and decision tree"
```
