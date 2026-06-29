"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { AnimatedBackground } from "@/components/layout/animated-background";
import { CommandPalette } from "@/components/layout/command-palette";
import { Hero } from "@/components/sections/hero";
import { PhotoSection } from "@/components/sections/photo-section";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export function Portfolio() {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <AnimatedBackground />
      <CursorGlow />
      <Navbar onOpenCommand={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
      <main className="relative">
        <Hero />
        <PhotoSection />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
