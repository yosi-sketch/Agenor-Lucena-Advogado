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
    | "titanium"
    | "white";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "platinum",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Visual identity based on Alves e Fragoso Advogados Associados / Dra. Fabrícia Fragoso
  // Metallic Platinum Silver & Obsidian Slate Prestige
  const variantClasses = {
    platinum:
      "border border-white/90 bg-gradient-to-r from-[#cbd5e1] via-[#f8fafc] to-[#ffffff] text-[#07090e] font-black shadow-md shadow-white/20 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(255,255,255,0.35)]",
    silver:
      "border border-white/90 bg-gradient-to-r from-[#cbd5e1] via-[#f8fafc] to-[#ffffff] text-[#07090e] font-black shadow-md shadow-white/20 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(255,255,255,0.35)]",
    gold:
      "border border-white/90 bg-gradient-to-r from-[#cbd5e1] via-[#f8fafc] to-[#ffffff] text-[#07090e] font-black shadow-md shadow-white/20 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(255,255,255,0.35)]",
    rosegold:
      "border border-white/90 bg-gradient-to-r from-[#cbd5e1] via-[#f8fafc] to-[#ffffff] text-[#07090e] font-black shadow-md shadow-white/20 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(255,255,255,0.35)]",
    dark:
      "border border-slate-600/60 bg-[#111622] text-[#f8fafc] font-bold shadow-md hover:-translate-y-0.5 hover:border-white hover:bg-[#1a2234] hover:text-white",
    outline:
      "border border-slate-300/60 bg-transparent text-[#f8fafc] font-bold hover:-translate-y-0.5 hover:border-white hover:bg-white/10 hover:text-white",
    emerald:
      "border border-[#25D366] bg-gradient-to-r from-[#1ea952] to-[#25D366] text-white font-black shadow-md shadow-[#25D366]/25 hover:-translate-y-0.5 hover:brightness-105",
    titanium:
      "border border-[#e8d5ab] bg-gradient-to-r from-[#a6823c] via-[#c5a059] to-[#e8d5ab] text-[#07090e] font-black shadow-md shadow-[#c5a059]/25 hover:-translate-y-0.5 hover:brightness-105",
    champagne:
      "border border-slate-300 bg-[#f8fafc] text-[#0f172a] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-white hover:border-slate-500",
    white:
      "border border-slate-200 bg-white text-[#0f172a] font-bold shadow-xs hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900",
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
