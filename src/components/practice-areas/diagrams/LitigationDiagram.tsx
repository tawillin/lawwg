"use client";

import { motion } from "framer-motion";
import DiagramContainer from "../shared/DiagramContainer";

const steps = [
  { label: "Complaint Filed", sub: "Plaintiff files suit in court", icon: "📄" },
  { label: "Service of Process", sub: "Defendant officially notified", icon: "📬" },
  { label: "Answer Filed", sub: "Defense responds to allegations", icon: "✍️" },
  { label: "Discovery", sub: "Evidence exchanged between parties", icon: "🔍" },
  { label: "Motions Practice", sub: "Legal arguments before trial", icon: "⚖️" },
  { label: "Trial / Settlement", sub: "Case resolved in court or by agreement", icon: "🏛️" },
  { label: "Judgment / Appeal", sub: "Final ruling — or further review", icon: "📋" },
];

const nodeW = 200;
const nodeH = 54;
const startX = 40;
const stepY = 70;
const connectorX = startX + nodeW / 2;

export default function LitigationDiagram() {
  return (
    <DiagramContainer className="max-w-2xl mx-auto">
      {(isInView) => (
        <svg
          viewBox="0 0 480 560"
          className="w-full h-auto"
          aria-label="Litigation case lifecycle diagram"
          role="img"
        >
          <defs>
            <marker id="lit-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#C9A84C" />
            </marker>
          </defs>

          {/* Vertical connector rail — draws top to bottom */}
          {steps.slice(0, -1).map((_, i) => {
            const y1 = 40 + i * stepY + nodeH;
            const y2 = 40 + (i + 1) * stepY;
            return (
              <motion.line
                key={i}
                x1={connectorX} y1={y1}
                x2={connectorX} y2={y2}
                stroke="#C9A84C"
                strokeWidth={2}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.2, ease: "easeOut" }}
                markerEnd="url(#lit-arrow)"
              />
            );
          })}

          {/* Step nodes */}
          {steps.map((step, i) => {
            const y = 40 + i * stepY;
            const isLast = i === steps.length - 1;
            const isTrialStep = i === 5;

            return (
              <motion.g
                key={step.label}
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Step number circle */}
                <circle
                  cx={startX - 16} cy={y + nodeH / 2} r={14}
                  fill={isLast ? "#C9A84C" : "#0A1628"}
                  stroke={isLast ? "#C9A84C" : "#1a3a6e"}
                  strokeWidth={2}
                />
                <text
                  x={startX - 16} y={y + nodeH / 2 + 4}
                  textAnchor="middle"
                  fill={isLast ? "#0A1628" : "#C9A84C"}
                  fontSize={10}
                  fontWeight="700"
                  fontFamily="system-ui"
                >
                  {i + 1}
                </text>

                {/* Main node box */}
                <rect
                  x={startX + 8} y={y}
                  width={nodeW + 220} height={nodeH}
                  rx={4}
                  fill={isTrialStep ? "#112850" : "#0D1F3C"}
                  stroke={isTrialStep || isLast ? "#C9A84C" : "#1a3a6e"}
                  strokeWidth={isTrialStep || isLast ? 2 : 1}
                />

                {/* Step label */}
                <text
                  x={startX + 8 + 12} y={y + 21}
                  fill="white"
                  fontSize={13}
                  fontWeight="600"
                  fontFamily="Georgia, serif"
                >
                  {step.label}
                </text>
                {/* Sub label */}
                <text
                  x={startX + 8 + 12} y={y + 38}
                  fill="#C9A84C"
                  fontSize={9.5}
                  fontFamily="system-ui, sans-serif"
                  opacity={0.85}
                >
                  {step.sub}
                </text>

                {/* Defense badge on relevant steps */}
                {(i >= 2) && (
                  <rect
                    x={startX + 8 + nodeW + 220 - 80} y={y + 14}
                    width={68} height={22}
                    rx={3}
                    fill="#C9A84C"
                    opacity={0.15}
                  />
                )}
                {(i >= 2) && (
                  <text
                    x={startX + 8 + nodeW + 220 - 46} y={y + 29}
                    textAnchor="middle"
                    fill="#C9A84C"
                    fontSize={8.5}
                    fontWeight="600"
                    fontFamily="system-ui"
                    opacity={0.9}
                  >
                    DEFENSE ACTIVE
                  </text>
                )}
              </motion.g>
            );
          })}
        </svg>
      )}
    </DiagramContainer>
  );
}
