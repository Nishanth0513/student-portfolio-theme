"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeader } from "@/components/shared/section-header";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Experience" subtitle="Professional journey" />

        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative rounded-3xl border border-slate-200/60 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-8 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Building2 className="h-7 w-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-primary font-medium mt-1">{item.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {item.responsibilities.map((resp, i) => (
                        <motion.li
                          key={resp}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
