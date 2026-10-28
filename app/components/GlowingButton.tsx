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
    | "gold"
    | "platinum"
    | "dark"
    | "outline"
    | "champagne"
    | "white"
    | "emerald";
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

  // Visual identity based on Débora Cupertino Advocacia
  // Noble Imperial Gold, Midnight Sapphire Navy & Warm Champagne
  const variantClasses = {
    gold:
      "border border-[#fdf6e2]/80 bg-gradient-to-r from-[#9e742a] via-[#e8c878] to-[#9e742a] text-[#020b18] font-black shadow-md shadow-[#9e742a]/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-4px_rgba(232,200,120,0.55)]",
    platinum:
      "border border-[#f8fafc] bg-gradient-to-r from-[#e2e8f0] via-[#ffffff] to-[#cbd5e1] text-[#020b18] font-black shadow-md shadow-slate-400/25 hover:-translate-y-0.5 hover:brightness-105",
    dark:
      "border border-[#c89b3c]/50 bg-[#051833] text-[#f8fafc] font-bold shadow-md hover:-translate-y-0.5 hover:border-[#f6e3a1] hover:bg-[#082144] hover:text-white",
    outline:
      "border border-[#c89b3c]/70 bg-transparent text-[#f8fafc] font-bold hover:-translate-y-0.5 hover:border-[#f6e3a1] hover:bg-[#c89b3c]/10 hover:text-white",
    champagne:
      "border border-[#e8dfcd] bg-[#fcfbfa] text-[#061224] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-white hover:border-[#c89b3c]",
    white:
      "border border-slate-200 bg-white text-[#061224] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#c89b3c] hover:text-black",
    emerald:
      "border border-[#25D366] bg-gradient-to-r from-[#1ea952] to-[#25D366] text-white font-black shadow-md shadow-[#25D366]/30 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_28px_-4px_rgba(37,211,102,0.45)]",
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
