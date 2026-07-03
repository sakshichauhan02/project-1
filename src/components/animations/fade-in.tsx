"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useStagger } from "./context";

export interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  delay?: number; // delay in milliseconds
  duration?: number; // duration in milliseconds
  yOffset?: number; // y offset for slide, defaults to 16
  className?: string;
  once?: boolean;
}

const fadeVariants = {
  hidden: (yOffset: number) => ({
    opacity: 0,
    y: yOffset,
  }),
  visible: ({ duration, delay }: { duration: number; delay: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: duration / 1000,
      delay: delay / 1000,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], // easeOutCubic
    },
  }),
};

export function FadeIn({
  children,
  delay = 0,
  duration = 700,
  yOffset = 16,
  className = "",
  once = true,
  ...props
}: FadeInProps) {
  const { isInStagger } = useStagger();

  return (
    <motion.div
      variants={fadeVariants}
      custom={{ duration, delay: isInStagger ? 0 : delay, yOffset }}
      initial={isInStagger ? undefined : "hidden"}
      whileInView={isInStagger ? undefined : "visible"}
      viewport={isInStagger ? undefined : { once, amount: 0.05, margin: "0px 0px -50px 0px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
