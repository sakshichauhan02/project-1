"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { StaggerContext } from "./context";

export interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  staggerDelay?: number; // stagger delay between children in seconds
  delay?: number; // initial delay before staggering starts in seconds
  className?: string;
  once?: boolean;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delay = 0,
  className = "",
  once = true,
  ...props
}: StaggerContainerProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <StaggerContext.Provider value={{ isInStagger: true }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.05, margin: "0px 0px -50px 0px" }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </StaggerContext.Provider>
  );
}

export default StaggerContainer;
