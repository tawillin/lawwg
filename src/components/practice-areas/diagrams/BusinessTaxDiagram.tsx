"use client";

import { motion } from "framer-motion";
import DiagramContainer from "../shared/DiagramContainer";
import { nodePop, pathDraw } from "@/lib/animations";

// Center hub + 6 strategies radiating out
const hub = { x: 300, y: 170, label: "Business\nTax Strategy" };

const strategies = [
  { id: "entity", label: "Entity\nSelection", x: 160, y: 80, angle: -120 },
  { id: "income", label: "Income\nShifting", x: 300, y: 60, angle: -90 },
  { id: "deductions", label: "Deductions\n& Credits", x: 440, y: 80, angle: -60 },
  { id: "retirement", label: "Retirement\nPlanning", x: 460, y: 220, angle: 0 },
  { id: "succession", label: "Business\nSuccession", x: 300, y: 290, angle: 90 },
  { id: "estate", label: "Estate &\nGift Tax", x: 140, y: 220, angle: 180 },
];

export default function BusinessTaxDiagram() {
  return (
    <DiagramContainer>
      {(isInView) => (
        <svg viewBox="0 0 600 360" className="w-full h-auto max-h-72" aria-label="Business tax strategy diagram">
          {/* Spoke lines */}
          {strategies.map((s, i) => (
            <motion.line
              key={`spoke-${s.id}`}
              x1={hub.x}
              y1={hub.y}
              x2={s.x}
              y2={s.y}
              stroke="#C9A84C"
              strokeWidth="1.5"
              strokeDasharray="0 1"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={pathDraw}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.12, ease: "easeOut" }}
            />
          ))}

          {/* Strategy nodes */}
          {strategies.map((s, i) => (
            <motion.g
              key={s.id}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={nodePop}
              transition={{ duration: 0.35, delay: 0.5 + i * 0.12, type: "spring", stiffness: 220 }}
            >
              <rect
                x={s.x - 46}
                y={s.y - 26}
                width={92}
                height={52}
                rx={4}
                fill="#0D1F3C"
                stroke="#C9A84C"
                strokeWidth="1.5"
              />
              {s.label.split("\n").map((line, li) => (
                <text
                  key={li}
                  x={s.x}
                  y={s.y - 6 + li * 15}
                  textAnchor="middle"
                  fill="#D4B86A"
                  fontSize="10"
                  fontFamily="Georgia, serif"
                  fontWeight="600"
                >
                  {line}
                </text>
              ))}
            </motion.g>
          ))}

          {/* Center hub */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 180 }}
            style={{ transformOrigin: `${hub.x}px ${hub.y}px` }}
          >
            {/* Outer pulse ring */}
            <motion.circle
              cx={hub.x}
              cy={hub.y}
              r={54}
              fill="none"
              stroke="#C9A84C"
              strokeWidth="1"
              opacity={0.3}
              animate={isInView ? { r: [54, 62, 54], opacity: [0.3, 0.1, 0.3] } : {}}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />
            <circle cx={hub.x} cy={hub.y} r={50} fill="#0A1628" stroke="#C9A84C" strokeWidth="2" />
            {hub.label.split("\n").map((line, li) => (
              <text
                key={li}
                x={hub.x}
                y={hub.y - 6 + li * 18}
                textAnchor="middle"
                fill="#C9A84C"
                fontSize="12"
                fontFamily="Georgia, serif"
                fontWeight="700"
              >
                {line}
              </text>
            ))}
          </motion.g>

          {/* Bottom caption */}
          <motion.text
            x="300"
            y="348"
            textAnchor="middle"
            fill="#6b7280"
            fontSize="10"
            fontFamily="Georgia, serif"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.6 }}
          >
            Six integrated strategies that work together to minimize your tax burden
          </motion.text>
        </svg>
      )}
    </DiagramContainer>
  );
}
