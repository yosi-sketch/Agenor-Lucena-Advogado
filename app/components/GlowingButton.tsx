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
    | "wine"
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

  // Visual identity based on Dra. Rhayssa Lima de Souza Oliveira (Advogada OAB/MG 247.321)
  // Deep Velvet Wine, Marsala, Specular Rose-Wine Luster & Onyx Wine Noir
  const variantClasses = {
    gold:
      "border border-[#f5d0cb]/60 bg-gradient-to-r from-[#721422] via-[#a32235] to-[#721422] text-white font-black shadow-md shadow-[#721422]/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-4px_rgba(163,34,53,0.55)]",
    wine:
      "border border-[#f5d0cb]/60 bg-gradient-to-r from-[#721422] via-[#a32235] to-[#721422] text-white font-black shadow-md shadow-[#721422]/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_-4px_rgba(163,34,53,0.55)]",
    platinum:
      "border border-[#fbeae8] bg-gradient-to-r from-[#f5d0cb] via-[#ffffff] to-[#f5d0cb] text-[#1c070a] font-black shadow-md shadow-[#8a1b2c]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(245,208,203,0.5)]",
    silver:
      "border border-[#fbeae8] bg-gradient-to-r from-[#f5d0cb] via-[#ffffff] to-[#f5d0cb] text-[#1c070a] font-black shadow-md shadow-[#8a1b2c]/25 hover:-translate-y-0.5 hover:brightness-105",
    rosegold:
      "border border-[#fbeae8] bg-gradient-to-r from-[#ee9492] via-[#fbeae8] to-[#d46f73] text-[#1c070a] font-black shadow-md shadow-[#ee9492]/35 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(245,208,203,0.5)]",
    dark:
      "border border-[#8a1b2c]/50 bg-[#1d090e] text-[#fcf8f6] font-bold shadow-md hover:-translate-y-0.5 hover:border-[#f5d0cb] hover:bg-[#260d14] hover:text-white",
    outline:
      "border border-[#ee9492]/70 bg-transparent text-[#fcf8f6] font-bold hover:-translate-y-0.5 hover:border-white hover:bg-white/10 hover:text-white",
    emerald:
      "border border-[#25D366] bg-gradient-to-r from-[#1ea952] to-[#25D366] text-white font-black shadow-md shadow-[#25D366]/30 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_28px_-4px_rgba(37,211,102,0.45)]",
    crimson:
      "border border-[#d46f73] bg-gradient-to-r from-[#5a0e19] to-[#8a1b2c] text-white font-black shadow-md shadow-[#8a1b2c]/35 hover:-translate-y-0.5 hover:brightness-110",
    champagne:
      "border border-[#ebdccd] bg-[#fcfaf7] text-[#1c070a] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-white hover:border-[#8a1b2c]",
    white:
      "border border-slate-200 bg-white text-[#1c070a] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#8a1b2c] hover:text-black",
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
