"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { SectionHeader } from "@/components/shared/section-header";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setProgress(category.level), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, category.level]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {category.skills.map((skill) => (
          <Badge key={skill} variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
      <Progress value={progress} className="h-2" />
      <p className="mt-2 text-xs text-muted-foreground text-right">{progress}%</p>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Skills" subtitle="Technologies I work with" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
