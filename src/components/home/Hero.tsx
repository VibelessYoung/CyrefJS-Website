"use client";

import { Check, Copy } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

import { translations } from "@/i18n";
import type { Locale } from "@/types/i18n";

const INSTALL_COMMAND = "npm install @cyref/js";
const VERSION = "1.38.0";

export default function Hero() {
  const params = useParams();

  const locale = params.locale as Locale;
  const t = translations[locale];

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="home"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-white
        dark:bg-[#050505]
      "
    >
      {/* ==================================================
    Premium Blue → Purple Gradient Background
================================================== */}
      <div
        aria-hidden="true"
        className="
    pointer-events-none
    fixed
    inset-0
    -z-10
    overflow-hidden
    bg-[#1C146C]
  "
      >
        {/* Main Gradient */}
        <div
          className="
      absolute
      inset-0
      bg-[linear-gradient(135deg,#1C146C_0%,#321477_42%,#6018A4_100%)]
    "
        />

        {/* Soft Blue Glow */}
        <div
          className="
      absolute
      left-[-15%]
      top-[-20%]
      h-[75%]
      w-[65%]
      rounded-full
      bg-[#1C146C]/70
      blur-[150px]
    "
        />

        {/* Soft Purple Glow */}
        <div
          className="
      absolute
      right-[-15%]
      top-[-10%]
      h-[75%]
      w-[65%]
      rounded-full
      bg-[#6018A4]/70
      blur-[150px]
    "
        />

        {/* Center Atmosphere */}
        <div
          className="
      absolute
      left-1/2
      top-[15%]
      h-[55%]
      w-[55%]
      -translate-x-1/2
      rounded-full
      bg-[#48168F]/30
      blur-[130px]
    "
        />

        {/* Bottom Soft Fade */}
        <div
          className="
      absolute
      inset-x-0
      bottom-0
      h-[30%]
      bg-gradient-to-t
      from-black/20
      via-black/5
      to-transparent
    "
        />
      </div>

      {/* ==================================================
          Hero content
      ================================================== */}
      <div
        className="
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-5
          pb-24
          pt-24
          text-center
          sm:px-8
        "
      >
        {/* Main title */}

        <h1
          className="
            text-[clamp(4.5rem,13vw,10rem)]
            font-semibold
            leading-[0.82]
            tracking-[-0.085em]
            text-black
            dark:text-white
          "
        >
          {t.hero.title}
        </h1>

        {/* Description */}

        <p
          className="
            mt-8
            max-w-md
            text-pretty
            text-sm
            leading-7
            text-black/45
            dark:text-white/75
            sm:text-[15px]
          "
        >
          {t.hero.description}
        </p>

        {/* Install command */}

        <div
          className="
          mt-4
    relative
    flex
    justify-center items-center
    w-fit
    max-w-full
    items-center
    rounded-[8px]
    bg-black/[0.72]
    p-2
    backdrop-blur-[24px]
    backdrop-saturate-150

    dark:bg-black/[0.58]
  "
        >
          {/* Subtle glass highlight */}
          <div
            aria-hidden="true"
            className="
      pointer-events-none
      absolute
      inset-0
      rounded-[8px]
      bg-gradient-to-b
      from-white/[0.06]
      via-transparent
      to-transparent
    "
          />

          {/* Command */}
          <code
            dir="ltr"
            className="
      relative
      px-2.5
      py-1.5
      font-mono
      text-[11px]
      tracking-[-0.01em]
      text-white/75
      sm:px-3
      sm:py-1.5
      sm:text-[12px]
    "
          >
            <span className="text-violet-300 text-sm">$</span> {INSTALL_COMMAND}
          </code>

          {/* Copy */}
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? t.hero.copied : t.hero.copy}
            className="
      relative
      flex
      h-7
      w-7
      shrink-0
      items-center
      justify-center
      rounded-[11px]
      text-white/50
      transition-colors
      duration-200
      active:scale-95
      cursor-pointer
    "
          >
            {copied ? (
              <Check size={14} strokeWidth={1.8} />
            ) : (
              <Copy size={14} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>
      {/* ==================================================
          Version
      ================================================== */}
      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-center
        "
      >
        <span
          dir="ltr"
          className="
            font-mono
            text-[11px]
            tracking-wide
            text-black/30
            dark:text-white/30
          "
        >
          v{VERSION}
        </span>
      </div>
    </section>
  );
}
