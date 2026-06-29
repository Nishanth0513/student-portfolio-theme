"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PhotoSection() {
  return (
    <section id="photo" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="relative group">
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-full overflow-hidden border-4 border-white/20 dark:border-slate-700/60 shadow-2xl ring-2 ring-primary/20">
              <Image
                src="/images/profile.JPG"
                alt="G. Nishanth Reddy - Full Stack Developer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 192px, 256px"
                priority
              />
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-emerald-500 border-4 border-background flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="h-2.5 w-2.5 rounded-full bg-white" />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center text-muted-foreground text-sm sm:text-base max-w-md"
          >
            Passionate developer crafting elegant solutions with modern technologies
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
