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
        rgba(96,165,250,0.22)_0%,
        rgba(99,102,241,0.18)_28%,
        rgba(168,85,247,0.14)_52%,
        rgba(168,85,247,0.06)_72%,
        rgba(255,255,255,0)_100%
      )]
      dark:bg-[linear-gradient(180deg,
        rgba(37,99,235,0.30)_0%,
        rgba(79,70,229,0.26)_28%,
        rgba(124,58,237,0.24)_52%,
        rgba(147,51,234,0.10)_72%,
        rgba(5,5,5,0)_100%
      )]
    "
        />

        {/* Blue glow — left */}

        <div
          className="
      absolute
      left-[-15%]
      top-[5%]
      h-[70%]
      w-[65%]
      rounded-full
      bg-blue-400/20
      blur-[160px]
      dark:bg-blue-500/25
    "
        />

        {/* Purple glow — right */}

        <div
          className="
      absolute
      right-[-15%]
      top-[5%]
      h-[70%]
      w-[65%]
      rounded-full
      bg-purple-400/20
      blur-[160px]
      dark:bg-purple-500/25
    "
        />

        {/* Center purple/indigo atmosphere */}

        <div
          className="
      absolute
      left-1/2
      top-[8%]
      h-[55%]
      w-[70%]
      -translate-x-1/2
      rounded-full
      bg-violet-400/10
      blur-[140px]
      dark:bg-violet-500/15
    "
        />

        {/* Bottom fade */}

        <div
          className="
      absolute
      inset-x-0
      bottom-0
      h-[42%]
      bg-gradient-to-t
      from-white
      via-white/80
      to-transparent
      dark:from-[#050505]
      dark:via-[#050505]/80
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
            dark:text-white/45
            sm:text-[15px]
          "
        >
          {t.hero.description}
        </p>

        {/* Install command */}

        <div className="mt-9">
          <div
            className="
              flex
              items-center
              rounded-2xl
              border
              border-black/[0.08]
              bg-white/45
              p-1.5
              shadow-[0_15px_50px_rgba(0,0,0,0.08)]
              backdrop-blur-2xl
              transition-all
              duration-300
              hover:border-black/15
              hover:bg-white/60
              dark:border-white/[0.10]
              dark:bg-white/[0.045]
              dark:shadow-[0_15px_50px_rgba(0,0,0,0.35)]
              dark:hover:border-white/15
              dark:hover:bg-white/[0.07]
            "
          >
            {/* Command */}

            <code
              dir="ltr"
              className="
                px-3
                py-2
                font-mono
                text-[12px]
                text-black/60
                sm:px-3.5
                sm:text-[13px]
                dark:text-white/55
              "
            >
              <span className="text-violet-500">$</span> {INSTALL_COMMAND}
            </code>

            {/* Copy */}

            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? t.hero.copied : t.hero.copy}
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-xl
                text-black/55
                transition-all
                duration-200
                hover:bg-black/[0.06]
                hover:text-black
                active:scale-95
                dark:text-white/55
                dark:hover:bg-white/[0.08]
                dark:hover:text-white
              "
            >
              {copied ? (
                <Check size={15} strokeWidth={1.8} />
              ) : (
                <Copy size={15} strokeWidth={1.8} />
              )}
            </button>
          </div>
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
