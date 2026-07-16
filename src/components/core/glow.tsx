"use client";

import clsx from "clsx";

interface GlowProps {
  className?: string;
  color?: "gold" | "blue" | "white";
}

export function Glow({
  className,
  color = "gold",
}: GlowProps) {
  const colors = {
    gold: "bg-[#D6B25E]/20",
    blue: "bg-[#4F8CFF]/20",
    white: "bg-white/10",
  };

  return (
    <div
      className={clsx(
        "pointer-events-none absolute rounded-full blur-[120px]",
        colors[color],
        className
      )}
    />
  );
}