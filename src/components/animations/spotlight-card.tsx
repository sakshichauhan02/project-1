"use client";

import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({
  children,
  className = "",
  ...props
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative rounded-3xl border border-zinc-100 bg-white p-8 hover:border-zinc-200 transition-all flex flex-col justify-between h-full hover:shadow-sm overflow-hidden ${className}`}
      {...props}
    >
      {/* Spotlight Glow Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.055) 0%,
              rgba(147, 51, 234, 0.055) 50%,
              transparent 80%
            )
          `,
        }}
      />
      {/* Content wrapper to ensure content is above the glow and stays crisp */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full">
        {children}
      </div>
    </div>
  );
}

export default SpotlightCard;
