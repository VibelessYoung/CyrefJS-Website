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
    Background
================================================== */}
      <div
        aria-hidden="true"
        className="
    pointer-events-none
    absolute
    inset-0
    -z-10
    overflow-hidden
  "
      >
        {/* Main full-height gradient */}
        <div
          className="
      absolute
      inset-0
      bg-[linear-gradient(180deg,
        rgba(59,130,246,0.34)_0%,
        rgba(79,70,229,0.31)_22%,
        rgba(124,58,237,0.28)_45%,
        rgba(139,92,246,0.21)_65%,
        rgba(124,58,237,0.13)_82%,
        rgba(255,255,255,0.025)_100%
      )]

      dark:bg-[linear-gradient(180deg,
        rgba(29,78,216,0.48)_0%,
        rgba(67,56,202,0.42)_22%,
        rgba(109,40,217,0.38)_45%,
        rgba(126,34,206,0.29)_65%,
        rgba(107,33,168,0.18)_82%,
        rgba(5,5,5,0.02)_100%
      )]
    "
        />

        {/* Blue glow — left */}
        <div
          className="
      absolute
      left-[-18%]
      top-[0%]
      h-[78%]
      w-[72%]
      rounded-full
      bg-blue-500/30
      blur-[155px]
      dark:bg-blue-600/38
    "
        />

        {/* Purple glow — right */}
        <div
          className="
      absolute
      right-[-18%]
      top-[0%]
      h-[78%]
      w-[72%]
      rounded-full
      bg-purple-500/30
      blur-[155px]
      dark:bg-purple-600/38
    "
        />

        {/* Center purple / indigo atmosphere */}
        <div
          className="
      absolute
      left-1/2
      top-[5%]
      h-[65%]
      w-[78%]
      -translate-x-1/2
      rounded-full
      bg-violet-500/19
      blur-[135px]
      dark:bg-violet-600/25
    "
        />

        {/* Soft center light */}
        <div
          className="
      absolute
      left-1/2
      top-[8%]
      h-[55%]
      w-[45%]
      -translate-x-1/2
      rounded-full
      bg-indigo-400/14
      blur-[125px]
      dark:bg-indigo-500/18
    "
        />

        {/* Bottom fade — late and subtle */}
        <div
          className="
      absolute
      inset-x-0
      bottom-0
      h-[20%]
      bg-gradient-to-t
      from-white/95
      via-white/40
      to-transparent
      dark:from-[#050505]/95
      dark:via-[#050505]/40
      dark:to-transparent
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
