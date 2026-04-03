"use client";

import { motion } from "framer-motion";
import DiagramContainer from "../shared/DiagramContainer";

// 7-step snake: top row (steps 0–3 left to right), bottom row (steps 4–6 right to left)
const steps = [
  { label: "Death of\nDecedent", sub: "Triggers probate process", row: 0, col: 0 },
  { label: "File Petition\nfor Probate", sub: "Filed in county court", row: 0, col: 1 },
  { label: "Court Appoints\nExecutor", sub: "Personal representative named", row: 0, col: 2 },
  { label: "Inventory\nAssets", sub: "All estate assets catalogued", row: 0, col: 3 },
  { label: "Pay Debts\n& Taxes", sub: "Creditors & IRS paid first", row: 1, col: 3 },
  { label: "Distribute\nto Heirs", sub: "Assets per will or state law", row: 1, col: 2 },
  { label: "Close\nEstate", sub: "Court discharges executor", row: 1, col: 1 },
];

const colX = [60, 180, 300, 420];
const rowY = [50, 200];
const nodeW = 92;
const nodeH = 68;

function nodeCenter(step: (typeof steps)[0]) {
  return {
    cx: colX[step.col] + nodeW / 2,
    cy: rowY[step.row] + nodeH / 2,
  };
}

export default function ProbateDiagram() {
  return (
    <DiagramContainer className="max-w-3xl mx-auto">
      {(isInView) => (
        <svg
          viewBox="0 0 560 320"
          className="w-full h-auto"
          aria-label="Probate process timeline diagram"
          role="img"
        >
          <defs>
            <marker id="prob-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#C9A84C" />
            </marker>
          </defs>

          {/* Top row connectors (→) */}
          {[0, 1, 2].map((i) => {
            const from = nodeCenter(steps[i]);
            const to = nodeCenter(steps[i + 1]);
            return (
              <motion.line
                key={`top-${i}`}
                x1={from.cx + nodeW / 2} y1={from.cy}
                x2={to.cx - nodeW / 2} y2={to.cy}
                stroke="#C9A84C" strokeWidth={2}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.22 }}
                markerEnd="url(#prob-arrow)"
              />
            );
          })}

          {/* Wrap connector (↓) from step 3 to step 4 */}
          <motion.path
            d={`M ${nodeCenter(steps[3]).cx + nodeW / 2} ${nodeCenter(steps[3]).cy}
                C ${nodeCenter(steps[3]).cx + 40} ${nodeCenter(steps[3]).cy},
                  ${nodeCenter(steps[4]).cx + 40} ${nodeCenter(steps[4]).cy},
                  ${nodeCenter(steps[4]).cx + nodeW / 2} ${nodeCenter(steps[4]).cy}`}
            fill="none"
            stroke="#C9A84C" strokeWidth={2}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + 3 * 0.22 }}
            markerEnd="url(#prob-arrow)"
          />

          {/* Bottom row connectors (←) */}
          {[4, 5].map((i) => {
            const from = nodeCenter(steps[i]);
            const to = nodeCenter(steps[i + 1]);
            return (
              <motion.line
                key={`bot-${i}`}
                x1={from.cx - nodeW / 2} y1={from.cy}
                x2={to.cx + nodeW / 2} y2={to.cy}
                stroke="#C9A84C" strokeWidth={2}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + (i - 1) * 0.22 }}
                markerEnd="url(#prob-arrow)"
              />
            );
          })}

          {/* Step nodes */}
          {steps.map((step, i) => {
            const { cx, cy } = nodeCenter(step);
            const lines = step.label.split("\n");
            const isFirst = i === 0;
            const isLast = i === steps.length - 1;

            return (
              <motion.g
                key={step.label}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.05 + i * 0.18 }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              >
                <rect
                  x={cx - nodeW / 2} y={cy - nodeH / 2}
                  width={nodeW} height={nodeH}
                  rx={5}
                  fill={isFirst ? "#C9A84C" : isLast ? "#112850" : "#0D1F3C"}
                  stroke={isFirst ? "#C9A84C" : "#C9A84C"}
                  strokeWidth={1.5}
                />
                {/* Step number */}
                <circle
                  cx={cx - nodeW / 2 + 10} cy={cy - nodeH / 2 + 10} r={8}
                  fill={isFirst ? "#0A1628" : "#C9A84C"}
                />
                <text
                  x={cx - nodeW / 2 + 10} y={cy - nodeH / 2 + 14}
                  textAnchor="middle"
                  fill={isFirst ? "#C9A84C" : "#0A1628"}
                  fontSize={7} fontWeight="700"
                  fontFamily="system-ui"
                >
                  {i + 1}
                </text>
                {lines.map((line, li) => (
                  <text
                    key={li}
                    x={cx} y={cy - 8 + li * 14}
                    textAnchor="middle"
                    fill={isFirst ? "#0A1628" : "white"}
                    fontSize={10.5}
                    fontWeight="600"
                    fontFamily="Georgia, serif"
                  >
                    {line}
                  </text>
                ))}
                <text
                  x={cx} y={cy + 26}
                  textAnchor="middle"
                  fill={isFirst ? "#0A162880" : "#C9A84C"}
                  fontSize={7.5}
                  fontFamily="system-ui"
                  opacity={0.85}
                >
                  {step.sub}
                </text>
              </motion.g>
            );
          })}

          {/* Legend */}
          <text x={20} y={305} fill="#64748b" fontSize={9} fontFamily="system-ui">
            * Average probate takes 6–12 months depending on estate complexity
          </text>
        </svg>
      )}
    </DiagramContainer>
  );
}
