"use client";

import { motion } from "framer-motion";
import DiagramContainer from "../shared/DiagramContainer";

const entities = [
  {
    name: "Sole\nProprietorship",
    abbr: "SOLE PROP",
    liability: "Unlimited",
    tax: "Pass-through",
    complexity: "Minimal",
    protected: false,
    color: "#ef4444",
    delay: 0.2,
  },
  {
    name: "Limited\nLiability Co.",
    abbr: "LLC",
    liability: "Limited",
    tax: "Flexible",
    complexity: "Low",
    protected: true,
    color: "#22c55e",
    delay: 0.35,
  },
  {
    name: "S\nCorporation",
    abbr: "S-CORP",
    liability: "Limited",
    tax: "Pass-through",
    complexity: "Medium",
    protected: true,
    color: "#22c55e",
    delay: 0.5,
  },
  {
    name: "C\nCorporation",
    abbr: "C-CORP",
    liability: "Limited",
    tax: "Double",
    complexity: "High",
    protected: true,
    color: "#22c55e",
    delay: 0.65,
  },
];

const colW = 115;
const colGap = 10;
const startX = 28;
const headerH = 80;
const rowH = 44;
const rows = ["Liability", "Taxation", "Complexity"];
const rowValues = [
  entities.map((e) => e.liability),
  entities.map((e) => e.tax),
  entities.map((e) => e.complexity),
];

// Shield path (simple shield shape)
const shieldPath = (x: number, y: number, w: number, h: number) =>
  `M ${x + w / 2} ${y} L ${x + w} ${y + h * 0.35} L ${x + w} ${y + h * 0.65} Q ${x + w / 2} ${y + h}, ${x + w / 2} ${y + h} Q ${x + w / 2} ${y + h}, ${x} ${y + h * 0.65} L ${x} ${y + h * 0.35} Z`;

export default function BusinessFormationDiagram() {
  const totalW = startX * 2 + entities.length * colW + (entities.length - 1) * colGap;

  return (
    <DiagramContainer className="max-w-3xl mx-auto">
      {(isInView) => (
        <svg
          viewBox={`0 0 ${totalW} 420`}
          className="w-full h-auto"
          aria-label="Business entity comparison diagram"
          role="img"
        >
          {/* Shield clip path for animation */}
          <defs>
            <clipPath id="shield-clip-llc">
              <motion.rect
                x={startX + colW + colGap - 4}
                y={260}
                width={colW + 8}
                height={0}
                initial={{ height: 0, y: 380 }}
                animate={isInView ? { height: 100, y: 280 } : { height: 0, y: 380 }}
                transition={{ duration: 0.7, delay: 1.8, ease: "easeOut" }}
              />
            </clipPath>
          </defs>

          {/* Row labels */}
          {rows.map((row, ri) => (
            <motion.text
              key={row}
              x={startX - 4}
              y={headerH + ri * rowH + 26}
              textAnchor="end"
              fill="#64748b"
              fontSize={10}
              fontWeight="600"
              fontFamily="system-ui"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.1 + ri * 0.1 }}
            >
              {row}
            </motion.text>
          ))}

          {/* Entity columns */}
          {entities.map((entity, ci) => {
            const x = startX + ci * (colW + colGap);
            const lines = entity.name.split("\n");

            return (
              <motion.g
                key={entity.abbr}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.45, delay: entity.delay, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Column header */}
                <rect
                  x={x} y={0}
                  width={colW} height={headerH}
                  rx={4}
                  fill="#0D1F3C"
                  stroke="#C9A84C"
                  strokeWidth={1.5}
                />
                {lines.map((line, li) => (
                  <text
                    key={li}
                    x={x + colW / 2}
                    y={26 + li * 16}
                    textAnchor="middle"
                    fill="white"
                    fontSize={11.5}
                    fontWeight="700"
                    fontFamily="Georgia, serif"
                  >
                    {line}
                  </text>
                ))}
                <text
                  x={x + colW / 2}
                  y={headerH - 10}
                  textAnchor="middle"
                  fill="#C9A84C"
                  fontSize={8}
                  fontWeight="600"
                  fontFamily="system-ui"
                  opacity={0.8}
                >
                  {entity.abbr}
                </text>

                {/* Row cells */}
                {rows.map((row, ri) => {
                  const val = rowValues[ri][ci];
                  const isRisk =
                    (row === "Liability" && !entity.protected) ||
                    (row === "Taxation" && val === "Double") ||
                    (row === "Complexity" && val === "High");
                  return (
                    <g key={row}>
                      <rect
                        x={x} y={headerH + ri * rowH}
                        width={colW} height={rowH}
                        fill={isRisk ? "#ef444410" : "#f8fafc"}
                        stroke="#e2e8f0"
                        strokeWidth={1}
                      />
                      <text
                        x={x + colW / 2}
                        y={headerH + ri * rowH + rowH / 2 + 5}
                        textAnchor="middle"
                        fill={isRisk ? "#ef4444" : "#0A1628"}
                        fontSize={11}
                        fontWeight="600"
                        fontFamily="system-ui"
                      >
                        {val}
                      </text>
                    </g>
                  );
                })}

                {/* Shield for protected entities */}
                {entity.protected && (
                  <motion.path
                    d={shieldPath(x + colW / 2 - 16, headerH + rows.length * rowH + 18, 32, 38)}
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth={2}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + ci * 0.1 }}
                  />
                )}
                {entity.protected && (
                  <motion.path
                    d={shieldPath(x + colW / 2 - 16, headerH + rows.length * rowH + 18, 32, 38)}
                    fill="#C9A84C"
                    fillOpacity={0.15}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.8 + ci * 0.05 }}
                  />
                )}

                {/* Sole prop X */}
                {!entity.protected && (
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ type: "spring", delay: 1.6 }}
                    style={{ transformOrigin: `${x + colW / 2}px ${headerH + rows.length * rowH + 37}px` }}
                  >
                    <circle cx={x + colW / 2} cy={headerH + rows.length * rowH + 37} r={16} fill="#ef4444" opacity={0.15} />
                    <text
                      x={x + colW / 2} y={headerH + rows.length * rowH + 42}
                      textAnchor="middle"
                      fill="#ef4444"
                      fontSize={18}
                      fontWeight="700"
                    >
                      ✕
                    </text>
                  </motion.g>
                )}
              </motion.g>
            );
          })}

          {/* Legend */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 2.0 }}
          >
            <path d={shieldPath(startX, 380, 16, 20)} fill="none" stroke="#C9A84C" strokeWidth={1.5} />
            <text x={startX + 22} y={394} fill="#64748b" fontSize={9} fontFamily="system-ui">
              = Personal liability protection
            </text>
            <circle cx={startX + 160} cy={390} r={7} fill="#ef4444" opacity={0.15} />
            <text x={startX + 161} y={394} textAnchor="middle" fill="#ef4444" fontSize={10} fontWeight="700">✕</text>
            <text x={startX + 175} y={394} fill="#64748b" fontSize={9} fontFamily="system-ui">
              = No liability protection
            </text>
          </motion.g>
        </svg>
      )}
    </DiagramContainer>
  );
}
