"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import { heroRoles, floatingTechIcons, contactInfo } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { CodingWorkspace } from "@/components/sections/coding-workspace";

export function Hero() {
  const typedRole = useTypingEffect(heroRoles, 60, 40, 2500);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium text-primary mb-4 tracking-wide uppercase"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              G. Nishanth{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Reddy
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 h-8"
            >
              <p className="text-lg sm:text-xl text-muted-foreground font-medium">
                {typedRole}
                <span className="animate-pulse text-primary">|</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Building scalable web applications with React, Node.js and modern
              web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <MagneticButton
                onClick={() => window.open(contactInfo.resumeUrl, "_blank")}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </MagneticButton>
              <MagneticButton
                variant="outline"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                variant="secondary"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <CodingWorkspace />
            {floatingTechIcons.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="absolute px-3 py-1.5 rounded-full text-xs font-semibold bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-lg"
                style={{
                  color: tech.color,
                  top: `${15 + (i % 3) * 28}%`,
                  left: i % 2 === 0 ? `${-5 + i * 3}%` : `${75 + i * 2}%`,
                }}
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, i % 2 === 0 ? 3 : -3, 0],
                }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-2 lg:hidden"
        >
          {floatingTechIcons.map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60"
              style={{ color: tech.color }}
            >
              {tech.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
