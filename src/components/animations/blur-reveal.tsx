"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useStagger } from "./context";

export interface BlurRevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  delay?: number; // delay in milliseconds
  duration?: number; // duration in milliseconds
  blur?: string; // e.g. "8px" or "12px"
  yOffset?: number; // y offset for slide, defaults to 10
  className?: string;
  once?: boolean;
}

const blurVariants = {
  hidden: ({ yOffset, blur }: { yOffset: number; blur: string }) => ({
    opacity: 0,
    filter: `blur(${blur})`,
    y: yOffset,
  }),
  visible: ({ duration, delay }: { duration: number; delay: number }) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: duration / 1000,
      delay: delay / 1000,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

export function BlurReveal({
  children,
  delay = 0,
  duration = 800,
  blur = "8px",
  yOffset = 10,
  className = "",
  once = true,
  ...props
}: BlurRevealProps) {
  const { isInStagger } = useStagger();

  return (
    <motion.div
      variants={blurVariants}
      custom={{ duration, delay: isInStagger ? 0 : delay, yOffset, blur }}
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

export default BlurReveal;
