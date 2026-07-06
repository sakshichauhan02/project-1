"use client";

import React, { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const animationStyle = mounted && shouldReduceMotion ? "none" : "bg-drift 60s linear infinite";

  return (
    <div className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden bg-transparent">
      <div
        className="absolute -inset-[48px] opacity-[0.035] will-change-transform"
        style={{
          backgroundImage: "radial-gradient(#e4e4e7 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          animation: animationStyle,
        }}
      />
    </div>
  );
}

export default AnimatedBackground;
