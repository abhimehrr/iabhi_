"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
}

export function useShouldAnimate(): boolean {
  const reducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const evaluate = (): void => {
      setIsDesktop(window.innerWidth >= 768);
    };

    evaluate();
    window.addEventListener("resize", evaluate);
    return () => {
      window.removeEventListener("resize", evaluate);
    };
  }, []);

  return isDesktop && !reducedMotion;
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  x = 0,
  y = 20
}: AnimateInProps): React.JSX.Element {
  const shouldAnimate = useShouldAnimate();

  const initial = useMemo(() => ({ opacity: 0, x, y }), [x, y]);

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
