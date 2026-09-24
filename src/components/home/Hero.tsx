"use client";

import { Check, Copy, ArrowDown } from "lucide-react";
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
        flex
        min-h-screen
        overflow-hidden
        bg-white
        text-black
        dark:bg-[#030305]
        dark:text-white
      "
    >
      {/* =========================================================
          Background
      ========================================================== */}

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
        {/* Main atmospheric gradient */}

        <div
          className="
            absolute
            left-1/2
            top-[-20%]
            h-[700px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/[0.08]
            blur-[140px]
            dark:bg-violet-600/[0.16]
          "
        />

        {/* Blue glow */}

        <div
          className="
            absolute
            left-[-15%]
            top-[8%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/[0.07]
            blur-[130px]
            dark:bg-blue-600/[0.12]
          "
        />

        {/* Purple glow */}

        <div
          className="
            absolute
            right-[-15%]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-500/[0.06]
            blur-[130px]
            dark:bg-purple-600/[0.13]
          "
        />

        {/* Center glow behind title */}

        <div
          className="
            absolute
            left-1/2
            top-[34%]
            h-[360px]
            w-[620px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/[0.05]
            blur-[110px]
            dark:bg-violet-500/[0.10]
          "
        />

        {/* =====================================================
            Grid
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.35]
            dark:opacity-[0.22]
            [background-image:linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)]
            [background-size:64px_64px]
            dark:[background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
          "
        />

        {/* Grid fade */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.5)_75%,rgba(255,255,255,0.9)_100%)]
            dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,3,5,0.1)_55%,rgba(3,3,5,0.95)_100%)]
          "
        />

        {/* Bottom fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-56
            bg-gradient-to-t
            from-white
            via-white/70
            to-transparent
            dark:from-[#030305]
            dark:via-[#030305]/80
            dark:to-transparent
          "
        />
      </div>

      {/* =========================================================
          Main content
      ========================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-5
          pb-28
          pt-28
          text-center
          sm:px-8
          lg:pb-32
        "
      >
        {/* =====================================================
            Version badge
        ====================================================== */}

        <div
          className="
            mb-7
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-black/[0.08]
            bg-black/[0.025]
            px-3
            py-1.5
            shadow-sm
            backdrop-blur-xl
            dark:border-white/[0.09]
            dark:bg-white/[0.035]
            dark:shadow-none
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-violet-500
              shadow-[0_0_12px_rgba(139,92,246,0.8)]
            "
          />

          <span
            dir="ltr"
            className="
              font-mono
              text-[10px]
              tracking-[0.08em]
              text-black/45
              dark:text-white/45
            "
          >
            v{VERSION}
          </span>
        </div>

        {/* =====================================================
            Title
        ====================================================== */}

        <h1
          className="
          p-3
            max-w-6xl
            bg-gradient-to-b
            from-black
            via-black
            to-black/60
            bg-clip-text
            text-[clamp(4.5rem,14vw,10.5rem)]
            font-semibold
            leading-[0.78]
            tracking-[-0.09em]
            text-transparent
            dark:from-white
            dark:via-white
            dark:to-white/45
          "
        >
          {t.hero.title}
        </h1>

        {/* =====================================================
            Description
        ====================================================== */}

        <p
          className="
            mt-8
            max-w-xl
            text-pretty
            text-[13px]
            leading-7
            text-black/45
            dark:text-white/55
            sm:text-[15px]
          "
        >
          {t.hero.description}
        </p>

        {/* =====================================================
            Install command
        ====================================================== */}

        <div
        dir="ltr"
          className="
            group
            relative
            mt-7
          "
        >

          {/* Command container */}

          <div
            className="
              relative
              flex
              max-w-full
              items-center
              rounded-xl
              border
              border-black/[0.08]
              bg-white/80
              p-1.5
              shadow-[0_12px_40px_rgba(0,0,0,0.06)]
              backdrop-blur-2xl
              dark:border-white/[0.09]
              dark:bg-white/[0.045]
              dark:shadow-[0_16px_50px_rgba(0,0,0,0.35)]
            "
          >
            {/* Top highlight */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-3
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/70
                to-transparent
                dark:via-white/10
              "
            />

            {/* Terminal prompt */}

            <span
              aria-hidden="true"
              className="
                pl-3
                font-mono
                text-[12px]
                text-violet-500
                dark:text-violet-400
              "
            >
              $
            </span>

            {/* Command */}

            <code
              dir="ltr"
              className="
                min-w-0
                px-2.5
                py-2
                font-mono
                text-[11px]
                tracking-[-0.01em]
                text-black/65
                dark:text-white/65
                sm:px-3
                sm:text-[12px]
              "
            >
              {INSTALL_COMMAND}
            </code>

            {/* Copy button */}

            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? t.hero.copied : t.hero.copy}
              title={copied ? t.hero.copied : t.hero.copy}
              className="
                flex
                h-8
                w-8
                shrink-0
                cursor-pointer
                items-center
                justify-center
                rounded-lg
                text-black/35
                transition-all
                duration-200
                hover:bg-black/[0.05]
                hover:text-black/70
                active:scale-95
                dark:text-white/35
                dark:hover:bg-white/[0.07]
                dark:hover:text-white/75
              "
            >
              {copied ? (
                <Check
                  size={14}
                  strokeWidth={1.8}
                  className="text-emerald-500"
                />
              ) : (
                <Copy size={14} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>

        {/* =====================================================
            Scroll indicator
        ====================================================== */}

        <div
          className="
            absolute
            bottom-9
            left-1/2
            flex
            -translate-x-1/2
            flex-col
            items-center
            gap-2
          "
        >
          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.22em]
              text-black/25
              dark:text-white/25
            "
          >
            SCROLL
          </span>

          <ArrowDown
            size={13}
            strokeWidth={1.5}
            className="
              text-black/30
              dark:text-white/30
            "
          />
        </div>
      </div>
    </section>
  );
}