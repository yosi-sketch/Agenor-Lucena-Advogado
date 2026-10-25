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
    | "rosegold"
    | "dark"
    | "outline"
    | "emerald"
    | "champagne"
    | "white"
    | "ruby";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "rosegold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Visual identity based on Morais Ragone Advocacia e Consultoria Jurídica
  // Warm Luxury Obsidian & Metallic Rose Gold / Bronze
  const variantClasses = {
    rosegold:
      "border border-[#fce0d2] bg-gradient-to-r from-[#b36f52] via-[#d99778] to-[#f3c2a9] text-[#0c0a09] font-black shadow-md shadow-[#d99778]/25 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-4px_rgba(217,151,120,0.4)]",
    gold:
      "border border-[#fce0d2] bg-gradient-to-r from-[#b36f52] via-[#d99778] to-[#f3c2a9] text-[#0c0a09] font-black shadow-md shadow-[#d99778]/25 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-4px_rgba(217,151,120,0.4)]",
    dark:
      "border border-[#d99778]/35 bg-[#171210] text-[#fce0d2] font-bold shadow-md hover:-translate-y-0.5 hover:border-[#fce0d2] hover:bg-[#261f1c] hover:text-white",
    ruby:
      "border border-[#fca5a5] bg-gradient-to-r from-[#831821] to-[#b91c1c] text-white font-bold shadow-md shadow-[#b91c1c]/25 hover:-translate-y-0.5 hover:brightness-110",
    outline:
      "border border-[#d99778]/60 bg-transparent text-[#fce0d2] font-bold hover:-translate-y-0.5 hover:border-[#fce0d2] hover:bg-[#d99778]/12 hover:text-white",
    emerald:
      "border border-[#25D366] bg-gradient-to-r from-[#1fa851] to-[#25D366] text-white font-bold shadow-md shadow-[#25D366]/25 hover:-translate-y-0.5 hover:brightness-105",
    champagne:
      "border border-[#d99778] bg-[#fdf8f4] text-[#8e4f35] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#fce0d2] hover:border-[#8e4f35]",
    white:
      "border border-[#e8ded4] bg-white text-[#1a1412] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#d99778] hover:text-[#8e4f35]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#fce0d2] select-none text-center cursor-pointer " +
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
