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
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Visual identity based on Luana Moreira Advocacia e Consultoria Jurídica (Warm Luxury Obsidian & Metallic Champagne Gold)
  const variantClasses = {
    gold:
      "border border-[#f5e5cb] bg-gradient-to-r from-[#9e7543] via-[#d4af7a] to-[#f0d4a9] text-[#0d0b0a] font-black shadow-md shadow-[#d4af7a]/25 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    dark:
      "border border-[#d4af7a]/35 bg-[#161311] text-[#f5e5cb] font-bold shadow-md hover:-translate-y-0.5 hover:border-[#f5e5cb] hover:bg-[#25201b] hover:text-white",
    ruby:
      "border border-[#f87171] bg-gradient-to-r from-[#991b1b] to-[#b91c1c] text-white font-bold shadow-md shadow-[#b91c1c]/25 hover:-translate-y-0.5 hover:brightness-110",
    outline:
      "border border-[#d4af7a]/60 bg-transparent text-[#f5e5cb] font-bold hover:-translate-y-0.5 hover:border-[#f5e5cb] hover:bg-[#d4af7a]/12 hover:text-white",
    emerald:
      "border border-[#25D366] bg-gradient-to-r from-[#1fa851] to-[#25D366] text-white font-bold shadow-md shadow-[#25D366]/25 hover:-translate-y-0.5 hover:brightness-105",
    champagne:
      "border border-[#d4af7a] bg-[#faf4ea] text-[#8c673b] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#f5e5cb] hover:border-[#8c673b]",
    white:
      "border border-[#e6ded1] bg-white text-[#171310] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#d4af7a] hover:text-[#8c673b]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f5e5cb] select-none text-center cursor-pointer " +
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
