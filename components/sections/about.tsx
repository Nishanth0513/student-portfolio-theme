"use client";

import { motion } from "framer-motion";
import { aboutSummary } from "@/lib/data";
import { SectionHeader } from "@/components/shared/section-header";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="About Me" subtitle="Who I am and what I do" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl opacity-60" />
          <div className="relative rounded-3xl border border-white/20 dark:border-slate-700/60 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl p-8 sm:p-12 shadow-xl">
            <div className="space-y-6">
              {aboutSummary.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
