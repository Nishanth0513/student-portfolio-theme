"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Education" subtitle="My academic journey" />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative pl-16 sm:pl-20 pb-12 last:pb-0"
            >
              <motion.div
                className="absolute left-3 sm:left-5 top-1 h-7 w-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                <GraduationCap className="h-3.5 w-3.5 text-white" />
              </motion.div>

              <div className="rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold">{item.institution}</h3>
                  <span className="text-sm text-primary font-medium">{item.period}</span>
                </div>
                <p className="text-foreground font-medium">{item.degree}</p>
                <p className="text-muted-foreground mt-1">{item.field}</p>
                {item.score && (
                  <p className="mt-2 text-sm font-semibold text-secondary">{item.score}</p>
                )}
                {item.coursework && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <Badge key={course} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
