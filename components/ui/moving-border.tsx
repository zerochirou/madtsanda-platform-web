"use client";

import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
}

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
}: MovingBorderProps) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  // Convert duration to ms if it is specified in seconds
  const durationMs = duration <= 100 ? duration * 1000 : duration;

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / durationMs;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x || 0);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y || 0);

  const transform = useMotionTemplate`translate(-50%, -50%) translate(${x}px, ${y}px)`;

  return (
    <div className={cn("relative p-[1px] overflow-hidden rounded-3xl", containerClassName)}>
      {/* SVG Path for moving border */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full pointer-events-none"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx="24"
          ry="24"
          ref={pathRef}
        />
      </svg>
      
      {/* Animated Light Beam */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        <div className={cn("h-32 w-32 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-80 blur-xl", className)} />
      </motion.div>
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
