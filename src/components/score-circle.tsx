"use client";

import React from "react";
import clsx from "clsx";

interface ScoreCircleProps {
  score: number; // 0 to 10
  size?: number; // tamanho opcional em pixels (default: 100)
}

export const ScoreCircle: React.FC<ScoreCircleProps> = ({
  score,
  size = 100,
}) => {
  const percentage = Math.min(Math.max(score * 10, 0), 100);

  // Define cor baseada na nota
  const getColor = () => {
    if (score <= 4) return "stroke-red-500 text-red-500";
    if (score <= 7) return "stroke-yellow-400 text-yellow-400";
    return "stroke-green-500 text-green-500";
  };

  const stroke = 6;
  const radius = (size / 2) - (stroke / 2);
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ width: size, height: size }} className="relative">
      <svg width={size} height={size}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={clsx("transition-all duration-500", getColor())}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <span
        className={clsx(
          "absolute inset-0 flex items-center justify-center font-semibold",
          getColor()
        )}
        style={{ fontSize: size * 0.25 }}
      >
        {score.toFixed(1)}
      </span>
    </div>
  );
};
