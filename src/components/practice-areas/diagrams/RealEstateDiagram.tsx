"use client";

import { motion } from "framer-motion";
import DiagramContainer from "../shared/DiagramContainer";
import { nodePop, pathDraw } from "@/lib/animations";

const steps = [
  { id: "contract", label: "Purchase\nContract", x: 80, y: 100, color: "#0A1628" },
  { id: "title", label: "Title\nSearch", x: 220, y: 100, color: "#0A1628" },
  { id: "survey", label: "Survey &\nInspection", x: 360, y: 100, color: "#0A1628" },
  { id: "commitment", label: "Title\nCommitment", x: 500, y: 100, color: "#0A1628" },
  { id: "closing", label: "Closing\nDay", x: 500, y: 220, color: "#C9A84C" },
  { id: "funded", label: "Funded &\nRecorded", x: 360, y: 220, color: "#0A1628" },
  { id: "keys", label: "Title\nTransferred", x: 220, y: 220, color: "#0A1628" },
];

const connectors = [
  // Top row left → right
  { d: "M 128 100 L 172 100", delay: 0.3 },
  { d: "M 268 100 L 312 100", delay: 0.55 },
  { d: "M 408 100 L 452 100", delay: 0.8 },
  // Turn down
  { d: "M 500 148 L 500 172", delay: 1.05 },
  // Bottom row right → left
  { d: "M 452 220 L 408 220", delay: 1.3 },
  { d: "M 312 220 L 268 220", delay: 1.55 },
];

// Insurance shield at center-right
const shieldPath = "M 80 280 Q 80 260 90 255 L 130 245 L 170 255 Q 180 260 180 280 L 130 305 Z";

export default function RealEstateDiagram() {
  return (
    <DiagramContainer>
      {(isInView) => (
        <svg viewBox="0 0 600 340" className="w-full h-auto max-h-72" aria-label="Real estate transaction flow diagram">
          {/* Track line background */}
          <path d="M 80 100 L 500 100 L 500 220 L 220 220" stroke="#1e3a5f" strokeWidth="2" fill="none" strokeDasharray="4 4" />

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

          {/* Step nodes */}
          {steps.map((s, i) => (
            <motion.g
              key={s.id}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={nodePop}
              transition={{ duration: 0.4, delay: i * 0.18, type: "spring", stiffness: 200 }}
            >
              <rect
                x={s.x - 44}
                y={s.y - 28}
                width={88}
                height={56}
                rx={4}
                fill={s.color}
                stroke={s.color === "#C9A84C" ? "#0A1628" : "#C9A84C"}
                strokeWidth={s.color === "#C9A84C" ? 0 : 1.5}
              />
              {s.label.split("\n").map((line, li) => (
                <text
                  key={li}
                  x={s.x}
                  y={s.y - 6 + li * 16}
                  textAnchor="middle"
                  fill={s.color === "#C9A84C" ? "#0A1628" : "#C9A84C"}
                  fontSize="11"
                  fontFamily="Georgia, serif"
                  fontWeight="600"
                >
                  {line}
                </text>
              ))}
            </motion.g>
          ))}

          {/* Step numbers */}
          {steps.map((s, i) => (
            <motion.text
              key={`num-${s.id}`}
              x={s.x + 36}
              y={s.y - 20}
              textAnchor="middle"
              fill="#D4B86A"
              fontSize="9"
              fontFamily="Georgia, serif"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: i * 0.18 + 0.3 }}
            >
              {i + 1}
            </motion.text>
          ))}

          {/* Title insurance badge */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          >
            <path d={shieldPath} fill="#C9A84C" opacity="0.15" stroke="#C9A84C" strokeWidth="1.5" />
            <text x="130" y="272" textAnchor="middle" fill="#C9A84C" fontSize="9" fontFamily="Georgia, serif" fontWeight="700">
              TITLE
            </text>
            <text x="130" y="284" textAnchor="middle" fill="#C9A84C" fontSize="9" fontFamily="Georgia, serif" fontWeight="700">
              INSURED
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
            From signed contract to recorded deed — a protected transaction
          </motion.text>
        </svg>
      )}
    </DiagramContainer>
  );
}
