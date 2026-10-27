"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "silver"
    | "platinum"
    | "gold"
    | "rosegold"
    | "dark"
    | "outline"
    | "emerald"
    | "champagne"
    | "crimson"
    | "white";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Visual identity based on Escritório de Advocacia Maira Gomes de Oliveira
  // Polished Imperial Gold, Rich Amber Bronze & Deep Obsidian Midnight Navy
  const variantClasses = {
    gold:
      "border border-[#fee690] bg-gradient-to-r from-[#df9e32] via-[#fee690] to-[#c88a24] text-[#060a12] font-black shadow-md shadow-[#df9e32]/35 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(223,158,50,0.5)]",
    platinum:
      "border border-[#faefd4] bg-gradient-to-r from-[#f2d499] via-[#fffbf0] to-[#fee690] text-[#060a12] font-black shadow-md shadow-[#df9e32]/30 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(254,230,144,0.45)]",
    silver:
      "border border-[#fff6d6] bg-gradient-to-r from-[#faefd4] via-[#ffffff] to-[#faefd4] text-[#060a12] font-black shadow-md shadow-[#df9e32]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(254,230,144,0.45)]",
    rosegold:
      "border border-[#fee690]/80 bg-gradient-to-r from-[#a06008] via-[#df9e32] to-[#fee690] text-[#060a12] font-black shadow-md shadow-[#a06008]/35 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-4px_rgba(223,158,50,0.5)]",
    dark:
      "border border-[#df9e32]/50 bg-[#101a2d] text-[#fffaf0] font-bold shadow-md hover:-translate-y-0.5 hover:border-[#fee690] hover:bg-[#15223a] hover:text-white",
    outline:
      "border border-[#fee690]/70 bg-transparent text-[#fffaf0] font-bold hover:-translate-y-0.5 hover:border-white hover:bg-white/10 hover:text-white",
    emerald:
      "border border-[#25D366] bg-gradient-to-r from-[#1ea952] to-[#25D366] text-white font-black shadow-md shadow-[#25D366]/30 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_28px_-4px_rgba(37,211,102,0.45)]",
    crimson:
      "border border-[#e63946] bg-gradient-to-r from-[#9e121a] to-[#c81d25] text-white font-black shadow-md shadow-[#c81d25]/30 hover:-translate-y-0.5 hover:brightness-110",
    champagne:
      "border border-[#e8decc] bg-[#fbf9f5] text-[#0b1322] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-white hover:border-[#df9e32]",
    white:
      "border border-slate-200 bg-white text-[#0b1322] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#df9e32] hover:text-black",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
