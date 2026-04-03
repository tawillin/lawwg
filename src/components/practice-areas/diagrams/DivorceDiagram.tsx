"use client";

import { motion } from "framer-motion";
import DiagramContainer from "../shared/DiagramContainer";
import { nodePop, pathDraw } from "@/lib/animations";

const steps = [
  { id: "petition", label: "Petition\nFiled", x: 80, y: 160, sub: "Day 1" },
  { id: "serve", label: "Service\non Spouse", x: 200, y: 160, sub: "Day 1–14" },
  { id: "wait", label: "60-Day\nWaiting Period", x: 340, y: 160, sub: "Required by TX" },
  { id: "agreement", label: "Signed\nAgreement", x: 480, y: 160, sub: "Both Parties" },
  { id: "decree", label: "Final\nDecree", x: 340, y: 280, sub: "Judge Signs" },
];

const connectors = [
  { d: "M 128 160 L 152 160", delay: 0.3 },
  { d: "M 248 160 L 292 160", delay: 0.55 },
  { d: "M 388 160 L 432 160", delay: 0.8 },
  { d: "M 480 208 L 340 240 L 340 252", delay: 1.05 },
];

export default function DivorceDiagram() {
  return (
    <DiagramContainer>
      {(isInView) => (
        <svg viewBox="0 0 600 340" className="w-full h-auto max-h-72" aria-label="Uncontested divorce process diagram">
          {/* Background track */}
          <path d="M 80 160 L 480 160 L 480 208 L 340 252" stroke="#1e3a5f" strokeWidth="2" fill="none" strokeDasharray="4 4" />

          {/* Animated connectors */}
          {connectors.map((c, i) => (
            <motion.path
              key={i}
              d={c.d}
              stroke="#C9A84C"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={pathDraw}
              transition={{ duration: 0.35, delay: c.delay, ease: "easeInOut" }}
            />
          ))}

          {/* Nodes */}
          {steps.map((s, i) => (
            <motion.g
              key={s.id}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={nodePop}
              transition={{ duration: 0.4, delay: i * 0.2, type: "spring", stiffness: 200 }}
            >
              <rect
                x={s.x - 52}
                y={s.y - 32}
                width={104}
                height={64}
                rx={4}
                fill={s.id === "decree" ? "#C9A84C" : "#0A1628"}
                stroke={s.id === "decree" ? "#0A1628" : "#C9A84C"}
                strokeWidth="1.5"
              />
              {s.label.split("\n").map((line, li) => (
                <text
                  key={li}
                  x={s.x}
                  y={s.y - 8 + li * 16}
                  textAnchor="middle"
                  fill={s.id === "decree" ? "#0A1628" : "#C9A84C"}
                  fontSize="11"
                  fontFamily="Georgia, serif"
                  fontWeight="600"
                >
                  {line}
                </text>
              ))}
              <text
                x={s.x}
                y={s.y + 22}
                textAnchor="middle"
                fill={s.id === "decree" ? "#0A162880" : "#ffffff60"}
                fontSize="9"
                fontFamily="Georgia, serif"
              >
                {s.sub}
              </text>
            </motion.g>
          ))}

          {/* "No courtroom required" callout */}
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <rect x="20" y="230" width="160" height="44" rx="4" fill="#0D1F3C" stroke="#C9A84C" strokeWidth="1" strokeDasharray="3 2" />
            <text x="100" y="248" textAnchor="middle" fill="#C9A84C" fontSize="10" fontFamily="Georgia, serif" fontWeight="700">
              No Courtroom
            </text>
            <text x="100" y="263" textAnchor="middle" fill="#ffffff80" fontSize="9" fontFamily="Georgia, serif">
              Required for Uncontested
            </text>
          </motion.g>

          {/* "vs. Contested" cost callout */}
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            <rect x="420" y="230" width="160" height="44" rx="4" fill="#0D1F3C" stroke="#C9A84C" strokeWidth="1" strokeDasharray="3 2" />
            <text x="500" y="248" textAnchor="middle" fill="#C9A84C" fontSize="10" fontFamily="Georgia, serif" fontWeight="700">
              Lower Cost
            </text>
            <text x="500" y="263" textAnchor="middle" fill="#ffffff80" fontSize="9" fontFamily="Georgia, serif">
              vs. contested divorce
            </text>
          </motion.g>

          {/* Legend */}
          <motion.text
            x="300"
            y="330"
            textAnchor="middle"
            fill="#6b7280"
            fontSize="10"
            fontFamily="Georgia, serif"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 2.0 }}
          >
            Texas requires a 60-day waiting period for all divorces
          </motion.text>
        </svg>
      )}
    </DiagramContainer>
  );
}
