"use client";

import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ScoreIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  score: number;
}

export function ScoreIndicator({
  score,
  className,
  ...props
}: ScoreIndicatorProps) {
  const getColor = () => {
    if (score <= 4) return "text-red-500";
    if (score <= 7) return "text-yellow-400";
    return "text-green-500";
  };
  return (
    <span className={cn("leading-relaxed", className)} {...props}>
      <span className={cn(getColor(), "font-semibold")}>{score}</span>
      <span className="text-neutral-400"> / 10</span>
    </span>
  );
}
