"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  bgImage?: string;
}

export function SpotlightCard({
  children,
  className = "",
  bgImage,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Lazy-load background image using IntersectionObserver
  useEffect(() => {
    if (!bgImage || !divRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenSeen(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Pre-load when card is within 200px of screen entrance
    );

    observer.observe(divRef.current);

    return () => observer.disconnect();
  }, [bgImage]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-3xl border border-zinc-100 bg-white p-8 hover:border-zinc-200/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-300 ease-out flex flex-col justify-between h-full overflow-hidden ${className}`}
      {...props}
    >
      {/* Lazy-loaded Dashboard Hover Preview (Animates Opacity Only) */}
      {bgImage && hasBeenSeen && (
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.045] transition-opacity duration-500 ease-out filter blur-[4px] mix-blend-multiply"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        />
      )}

      {/* Spotlight Glow Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.05) 0%,
              rgba(147, 51, 234, 0.03) 50%,
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
