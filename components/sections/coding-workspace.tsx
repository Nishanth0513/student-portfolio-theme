"use client";

import { motion } from "framer-motion";

const codeLines = [
  { indent: 0, parts: [{ text: "const ", color: "text-violet-400" }, { text: "developer", color: "text-cyan-400" }, { text: " = {", color: "text-slate-300" }] },
  { indent: 1, parts: [{ text: "name: ", color: "text-slate-300" }, { text: '"G. Nishanth Reddy"', color: "text-emerald-400" }, { text: ",", color: "text-slate-300" }] },
  { indent: 1, parts: [{ text: "role: ", color: "text-slate-300" }, { text: '"Full Stack Developer"', color: "text-emerald-400" }, { text: ",", color: "text-slate-300" }] },
  { indent: 1, parts: [{ text: "stack: ", color: "text-slate-300" }, { text: '["React", "Node.js", "MongoDB"]', color: "text-emerald-400" }, { text: ",", color: "text-slate-300" }] },
  { indent: 1, parts: [{ text: "build: ", color: "text-slate-300" }, { text: "() => ", color: "text-slate-300" }, { text: "createImpact()", color: "text-amber-400" }] },
  { indent: 0, parts: [{ text: "};", color: "text-slate-300" }] },
];

export function CodingWorkspace() {
  return (
    <div className="relative">
      <motion.div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="relative rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-slate-900/95 backdrop-blur-xl shadow-2xl overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-slate-800/80">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 text-xs text-slate-400 font-mono">portfolio.tsx</span>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed min-h-[220px]">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              style={{ paddingLeft: `${line.indent * 1.5}rem` }}
            >
              {line.parts.map((part, j) => (
                <span key={j} className={part.color}>
                  {part.text}
                </span>
              ))}
            </motion.div>
          ))}
          <motion.span
            className="inline-block w-2 h-4 bg-cyan-400 ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
        <div className="px-4 py-2 border-t border-slate-700/60 bg-slate-800/50 flex items-center justify-between">
          <span className="text-xs text-slate-500">TypeScript · UTF-8</span>
          <motion.div
            className="flex items-center gap-1.5"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs text-emerald-400">Building...</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
