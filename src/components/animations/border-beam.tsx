import React from "react";

export interface BorderBeamProps {
  className?: string;
  size?: number; // size of the beam in pixels
  duration?: number; // duration of animation in seconds
  borderWidth?: number; // border thickness in pixels
  colorFrom?: string; // start color
  colorTo?: string; // end color
}

export function BorderBeam({
  className = "",
  size = 120,
  duration = 4,
  borderWidth = 1.5,
  colorFrom = "#3b82f6", // blue
  colorTo = "#8b5cf6", // purple
}: BorderBeamProps) {
  return (
    <div
      style={{
        "--size": `${size}px`,
        "--duration": `${duration}s`,
        "--border-width": `${borderWidth}px`,
        "--color-from": colorFrom,
        "--color-to": colorTo,
      } as React.CSSProperties}
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border-[var(--border-width)] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(#000,#000),linear-gradient(#000,#000)] ${className}`}
    >
      <div
        className="absolute aspect-square w-[var(--size)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(to_right,var(--color-from),var(--color-to))] opacity-100 mix-blend-screen will-change-[offset-distance] [offset-anchor:50%_50%] [offset-path:rect(0_100%_100%_0_round_inherit)]"
        style={{
          animation: "border-beam-move var(--duration) linear infinite",
        }}
      />
    </div>
  );
}

export default BorderBeam;
