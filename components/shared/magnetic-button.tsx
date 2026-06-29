"use client";

import { motion } from "framer-motion";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonProps {
  magneticStrength?: number;
}

export function MagneticButton({
  magneticStrength = 0.25,
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } =
    useMagnetic(magneticStrength);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Button className={cn(className)} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}
