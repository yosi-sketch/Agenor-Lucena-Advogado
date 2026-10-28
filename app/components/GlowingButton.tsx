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
    | "dark"
    | "outline"
    | "emerald"
    | "champagne"
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

  // Visual identity based on FRB Advogados — Advocacia & Assessoria Jurídica
  // Imperial Gold, Antique Bronze, Specular Luster & Royal Obsidian Midnight
  const variantClasses = {
    gold:
      "border border-[#fbf3d1]/80 bg-gradient-to-r from-[#936937] via-[#d4af37] to-[#936937] text-[#0c0f17] font-black shadow-md shadow-[#936937]/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-4px_rgba(212,175,55,0.6)]",
    platinum:
      "border border-[#fbf3d1] bg-gradient-to-r from-[#f5e49e] via-[#ffffff] to-[#f5e49e] text-[#0c0f17] font-black shadow-md shadow-[#caa24d]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(245,228,158,0.5)]",
    silver:
      "border border-[#fbf3d1] bg-gradient-to-r from-[#f5e49e] via-[#ffffff] to-[#f5e49e] text-[#0c0f17] font-black shadow-md shadow-[#caa24d]/25 hover:-translate-y-0.5 hover:brightness-105",
    dark:
      "border border-[#caa24d]/50 bg-[#121622] text-[#fbf9f5] font-bold shadow-md hover:-translate-y-0.5 hover:border-[#f5e49e] hover:bg-[#181e2b] hover:text-white",
    outline:
      "border border-[#caa24d]/70 bg-transparent text-[#fbf9f5] font-bold hover:-translate-y-0.5 hover:border-[#f5e49e] hover:bg-[#caa24d]/10 hover:text-white",
    emerald:
      "border border-[#25D366] bg-gradient-to-r from-[#1ea952] to-[#25D366] text-white font-black shadow-md shadow-[#25D366]/30 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_28px_-4px_rgba(37,211,102,0.45)]",
    champagne:
      "border border-[#e8dfd1] bg-[#fcfbfa] text-[#0f131c] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-white hover:border-[#caa24d]",
    white:
      "border border-slate-200 bg-white text-[#0f131c] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#caa24d] hover:text-black",
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
