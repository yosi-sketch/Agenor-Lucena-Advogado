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
  variant = "platinum",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Visual identity based on Yan Rezende — Advocacia e Consultoria Jurídica
  // Metallic Rose Mauve, Wine & Obsidian Plum Prestige
  const variantClasses = {
    platinum:
      "border border-[#f2d6de] bg-gradient-to-r from-[#e3bcc4] via-[#fbf5f7] to-[#ffffff] text-[#1f0b15] font-black shadow-md shadow-[#c88ea0]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(227,188,196,0.45)]",
    silver:
      "border border-[#f2d6de] bg-gradient-to-r from-[#e3bcc4] via-[#fbf5f7] to-[#ffffff] text-[#1f0b15] font-black shadow-md shadow-[#c88ea0]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(227,188,196,0.45)]",
    gold:
      "border border-[#e3bcc4]/80 bg-gradient-to-r from-[#8f415c] via-[#b65877] to-[#d8849e] text-white font-black shadow-md shadow-[#8f415c]/35 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-4px_rgba(182,88,119,0.5)]",
    rosegold:
      "border border-[#e3bcc4]/80 bg-gradient-to-r from-[#7e3a53] via-[#9f526c] to-[#c88ea0] text-white font-black shadow-md shadow-[#7e3a53]/35 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-4px_rgba(159,82,108,0.5)]",
    dark:
      "border border-[#9f526c]/50 bg-[#1a0b15] text-[#fbf5f7] font-bold shadow-md hover:-translate-y-0.5 hover:border-[#e3bcc4] hover:bg-[#2d1326] hover:text-white",
    outline:
      "border border-[#e3bcc4]/60 bg-transparent text-[#fbf5f7] font-bold hover:-translate-y-0.5 hover:border-white hover:bg-white/10 hover:text-white",
    emerald:
      "border border-[#25D366] bg-gradient-to-r from-[#1ea952] to-[#25D366] text-white font-black shadow-md shadow-[#25D366]/25 hover:-translate-y-0.5 hover:brightness-105",
    crimson:
      "border border-[#e63946] bg-gradient-to-r from-[#9e121a] to-[#c81d25] text-white font-black shadow-md shadow-[#c81d25]/30 hover:-translate-y-0.5 hover:brightness-110",
    champagne:
      "border border-[#ebd9df] bg-[#fdfbfb] text-[#1f0b15] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-white hover:border-[#c88ea0]",
    white:
      "border border-slate-200 bg-white text-[#1f0b15] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#c88ea0] hover:text-black",
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
