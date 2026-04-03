"use client";

import { motion } from "framer-motion";
import DiagramContainer from "../shared/DiagramContainer";

// Tree layout
// Grantor (top-center)
//   → Trust Document (center)
//     → Trustee (center)
//       ↙ Revocable   ↘ Irrevocable
//         ↓ Beneficiaries  ↓ Beneficiaries

const W = 600;
const nodeW = 150;
const nodeH = 52;

const nodes = {
  grantor:     { x: W / 2 - nodeW / 2, y: 20,  label: "Grantor",         sub: "You — the trust creator",       fill: "#C9A84C", textColor: "#0A1628" },
  trustDoc:    { x: W / 2 - nodeW / 2, y: 120, label: "Trust Document",  sub: "Legal foundation of the trust", fill: "#0D1F3C", textColor: "white" },
  trustee:     { x: W / 2 - nodeW / 2, y: 220, label: "Trustee",         sub: "Manages trust assets",          fill: "#0D1F3C", textColor: "white" },
  revocable:   { x: 90,                 y: 320, label: "Revocable Trust",  sub: "Can be changed during life",    fill: "#112850", textColor: "white" },
  irrevocable: { x: W - 90 - nodeW,    y: 320, label: "Irrevocable Trust",sub: "Fixed — stronger protection",   fill: "#112850", textColor: "white" },
  bene1:       { x: 90,                 y: 420, label: "Beneficiaries",    sub: "Receive assets per your wishes",fill: "#0A1628", textColor: "white" },
  bene2:       { x: W - 90 - nodeW,    y: 420, label: "Beneficiaries",    sub: "Receive assets per your wishes",fill: "#0A1628", textColor: "white" },
};

function cx(node: { x: number }) { return node.x + nodeW / 2; }
function cy(node: { y: number }) { return node.y + nodeH / 2; }

export default function TrustsDiagram() {
  return (
    <DiagramContainer className="max-w-3xl mx-auto">
      {(isInView) => (
        <svg
          viewBox={`0 0 ${W} 510`}
          className="w-full h-auto"
          aria-label="Trust structure diagram showing grantor, trust document, trustee, and beneficiaries"
          role="img"
        >
          <defs>
            <marker id="tr-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#C9A84C" />
            </marker>
          </defs>

          {/* Connector: Grantor → Trust Doc */}
          <motion.line
            x1={cx(nodes.grantor)} y1={nodes.grantor.y + nodeH}
            x2={cx(nodes.trustDoc)} y2={nodes.trustDoc.y}
            stroke="#C9A84C" strokeWidth={2}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            markerEnd="url(#tr-arrow)"
          />

          {/* Connector: Trust Doc → Trustee */}
          <motion.line
            x1={cx(nodes.trustDoc)} y1={nodes.trustDoc.y + nodeH}
            x2={cx(nodes.trustee)} y2={nodes.trustee.y}
            stroke="#C9A84C" strokeWidth={2}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.85 }}
            markerEnd="url(#tr-arrow)"
          />

          {/* Branch: Trustee → Revocable */}
          <motion.path
            d={`M ${cx(nodes.trustee)} ${nodes.trustee.y + nodeH} C ${cx(nodes.trustee)} ${nodes.trustee.y + nodeH + 30}, ${cx(nodes.revocable)} ${nodes.revocable.y - 20}, ${cx(nodes.revocable)} ${nodes.revocable.y}`}
            fill="none" stroke="#C9A84C" strokeWidth={1.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            markerEnd="url(#tr-arrow)"
          />

          {/* Branch: Trustee → Irrevocable */}
          <motion.path
            d={`M ${cx(nodes.trustee)} ${nodes.trustee.y + nodeH} C ${cx(nodes.trustee)} ${nodes.trustee.y + nodeH + 30}, ${cx(nodes.irrevocable)} ${nodes.irrevocable.y - 20}, ${cx(nodes.irrevocable)} ${nodes.irrevocable.y}`}
            fill="none" stroke="#C9A84C" strokeWidth={1.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.35 }}
            markerEnd="url(#tr-arrow)"
          />

          {/* Connectors to Beneficiaries */}
          <motion.line
            x1={cx(nodes.revocable)} y1={nodes.revocable.y + nodeH}
            x2={cx(nodes.bene1)} y2={nodes.bene1.y}
            stroke="#C9A84C" strokeWidth={1.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.35, delay: 1.65 }}
            markerEnd="url(#tr-arrow)"
          />
          <motion.line
            x1={cx(nodes.irrevocable)} y1={nodes.irrevocable.y + nodeH}
            x2={cx(nodes.bene2)} y2={nodes.bene2.y}
            stroke="#C9A84C" strokeWidth={1.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.35, delay: 1.8 }}
            markerEnd="url(#tr-arrow)"
          />

          {/* Render all nodes */}
          {Object.entries(nodes).map(([key, node], i) => {
            const isBene = key.startsWith("bene");
            const delay = [0.1, 0.6, 0.95, 1.5, 1.65, 1.85, 2.0][i] ?? 0.2;
            return (
              <motion.g
                key={key}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 22, delay }}
                style={{ transformOrigin: `${cx(node)}px ${cy(node)}px` }}
              >
                <rect
                  x={node.x} y={node.y}
                  width={nodeW} height={nodeH}
                  rx={5}
                  fill={node.fill}
                  stroke={isBene ? "#C9A84C55" : "#C9A84C"}
                  strokeWidth={isBene ? 1 : 2}
                />
                <text
                  x={cx(node)} y={node.y + 22}
                  textAnchor="middle"
                  fill={node.textColor}
                  fontSize={12}
                  fontWeight="700"
                  fontFamily="Georgia, serif"
                >
                  {node.label}
                </text>
                <text
                  x={cx(node)} y={node.y + 38}
                  textAnchor="middle"
                  fill={key === "grantor" ? "#0A162880" : "#C9A84C"}
                  fontSize={8.5}
                  fontFamily="system-ui"
                  opacity={0.85}
                >
                  {node.sub}
                </text>
              </motion.g>
            );
          })}

          {/* Type badges */}
          {[
            { x: cx(nodes.revocable) - 38, y: nodes.revocable.y - 18, label: "FLEXIBLE", color: "#22c55e" },
            { x: cx(nodes.irrevocable) - 38, y: nodes.irrevocable.y - 18, label: "PROTECTED", color: "#C9A84C" },
          ].map((badge) => (
            <motion.g key={badge.label}
              initial={{ opacity: 0, y: -6 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
              transition={{ delay: 1.7 }}
            >
              <rect x={badge.x} y={badge.y} width={76} height={16} rx={3} fill={badge.color} opacity={0.15} />
              <text x={badge.x + 38} y={badge.y + 11} textAnchor="middle" fill={badge.color} fontSize={8} fontWeight="700" fontFamily="system-ui">
                {badge.label}
              </text>
            </motion.g>
          ))}
        </svg>
      )}
    </DiagramContainer>
  );
}
