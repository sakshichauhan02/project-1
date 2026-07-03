"use client";

import React from "react";
import { FadeIn as MotionFadeIn } from "./animations/fade-in";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // delay in milliseconds
  duration?: number; // duration in milliseconds
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 700,
  className = "",
}: FadeInProps) {
  return (
    <MotionFadeIn
      delay={delay}
      duration={duration}
      className={className}
    >
      {children}
    </MotionFadeIn>
  );
}
