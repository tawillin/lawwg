"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type DiagramContainerProps = {
  children: (isInView: boolean) => React.ReactNode;
  className?: string;
};

/**
 * Scroll-trigger wrapper for all animated SVG diagrams.
 * Passes `isInView` to children so each diagram controls its own sequence.
 * Animation plays once when the container enters the viewport.
 */
export default function DiagramContainer({ children, className }: DiagramContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("w-full", className)}
    >
      {children(isInView)}
    </motion.div>
  );
}
