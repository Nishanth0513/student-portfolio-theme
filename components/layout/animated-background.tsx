"use client";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2563EB 1px, transparent 1px),
            linear-gradient(to bottom, #2563EB 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
    </div>
  );
}
