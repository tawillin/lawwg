"use client";

import { motion } from "framer-motion";
import DiagramContainer from "../shared/DiagramContainer";

// Radial diagram: center hub + 4 spoke nodes
const spokes = [
  {
    label: "Medicaid\nPlanning",
    sublabel: "Protect assets from\nspend-down requirements",
    angle: -90, // top
    dx: 0,
    dy: -130,
    delay: 0.4,
  },
  {
    label: "Powers of\nAttorney",
    sublabel: "Financial & healthcare\ndecision authority",
    angle: 0, // right
    dx: 150,
    dy: 0,
    delay: 0.6,
  },
  {
    label: "Guardianship\n& Conservatorship",
    sublabel: "Court-appointed care\nfor incapacitated adults",
    angle: 90, // bottom
    dx: 0,
    dy: 130,
    delay: 0.8,
  },
  {
    label: "Long-Term\nCare Planning",
    sublabel: "Nursing home & home\nhealth strategies",
    angle: 180, // left
    dx: -150,
    dy: 0,
    delay: 1.0,
  },
];

const cx = 300;
const cy = 220;
const spokeLen = 110;

function getEndpoint(dx: number, dy: number) {
  const mag = Math.sqrt(dx * dx + dy * dy);
  const nx = dx / mag;
  const ny = dy / mag;
  return {
    x1: cx + nx * 52,
    y1: cy + ny * 52,
    x2: cx + nx * (spokeLen + 52),
    y2: cy + ny * (spokeLen + 52),
  };
}

export default function ElderLawDiagram() {
  return (
    <DiagramContainer className="max-w-3xl mx-auto">
      {(isInView) => (
        <svg
          viewBox="0 0 600 440"
          className="w-full h-auto"
          aria-label="Elder Law planning diagram showing four practice areas"
          role="img"
        >
          <defs>
            <marker id="el-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#C9A84C" opacity="0.8" />
            </marker>
          </defs>

          {/* Spoke lines */}
          {spokes.map((spoke) => {
            const { x1, y1, x2, y2 } = getEndpoint(spoke.dx, spoke.dy);
            return (
              <motion.line
                key={spoke.label}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#C9A84C"
                strokeWidth={1.5}
                strokeDasharray="4 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: spoke.delay - 0.15, ease: "easeOut" }}
                markerEnd="url(#el-arrow)"
              />
            );
          })}

          {/* Hub circle — scales in first */}
          <motion.circle
            cx={cx} cy={cy} r={50}
            fill="#0A1628"
            stroke="#C9A84C"
            strokeWidth={2}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />

          {/* Pulse ring */}
          <motion.circle
            cx={cx} cy={cy} r={58}
            fill="none"
            stroke="#C9A84C"
            strokeWidth={1}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] } : { scale: 0.8, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 2.5, delay: 0.6, ease: "easeInOut" }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />

          {/* Hub text */}
          <motion.text
            x={cx} y={cy - 8}
            textAnchor="middle"
            fill="#C9A84C"
            fontSize={11}
            fontWeight="700"
            fontFamily="Georgia, serif"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.35 }}
          >
            ELDER
          </motion.text>
          <motion.text
            x={cx} y={cy + 8}
            textAnchor="middle"
            fill="#C9A84C"
            fontSize={11}
            fontWeight="700"
            fontFamily="Georgia, serif"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            LAW
          </motion.text>
          <motion.text
            x={cx} y={cy + 22}
            textAnchor="middle"
            fill="#ffffff"
            fontSize={8}
            fontFamily="system-ui, sans-serif"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            PLANNING
          </motion.text>

          {/* Spoke nodes */}
          {spokes.map((spoke) => {
            const nx = spoke.dx === 0 ? 0 : spoke.dx / Math.abs(spoke.dx);
            const ny = spoke.dy === 0 ? 0 : spoke.dy / Math.abs(spoke.dy);
            const ex = cx + spoke.dx + nx * 60;
            const ey = cy + spoke.dy + ny * 0;
            const bx = ex - 72;
            const by = ey - 40;
            const lines = spoke.label.split("\n");
            const subLines = spoke.sublabel.split("\n");

            return (
              <motion.g
                key={spoke.label}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: spoke.delay }}
                style={{ transformOrigin: `${cx + spoke.dx}px ${cy + spoke.dy}px` }}
              >
                <rect
                  x={bx} y={by}
                  width={144} height={80}
                  rx={4}
                  fill="#0D1F3C"
                  stroke="#C9A84C"
                  strokeWidth={1.5}
                />
                {lines.map((line, li) => (
                  <text
                    key={li}
                    x={bx + 72} y={by + 22 + li * 16}
                    textAnchor="middle"
                    fill="white"
                    fontSize={12}
                    fontWeight="600"
                    fontFamily="Georgia, serif"
                  >
                    {line}
                  </text>
                ))}
                {subLines.map((line, li) => (
                  <text
                    key={li}
                    x={bx + 72} y={by + 56 + li * 12}
                    textAnchor="middle"
                    fill="#C9A84C"
                    fontSize={9}
                    fontFamily="system-ui, sans-serif"
                    opacity={0.8}
                  >
                    {line}
                  </text>
                ))}
              </motion.g>
            );
          })}
        </svg>
      )}
    </DiagramContainer>
  );
}
