"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-primary via-secondary to-accent"
      style={{ scaleX: progress / 100 }}
    />
  );
}
