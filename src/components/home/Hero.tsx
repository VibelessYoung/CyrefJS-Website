"use client";

import { Check, Copy, ArrowDown } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

import { translations } from "@/i18n";
import type { Locale } from "@/types/i18n";

const INSTALL_COMMAND = "npm install @cyref/js";

type HeroProps = {
  version: string;
};

export default function Hero({ version }: HeroProps) {
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
        bg-[#11105b]
        text-white
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
        {/* Main gradient */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(110deg,#12135c_0%,#20177b_35%,#4a1690_68%,#30105b_100%)]
          "
        />

        {/* Left blue atmosphere */}

        <div
          className="
            absolute
            left-[-18%]
            top-[-10%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-blue-500/20
            blur-[150px]
          "
        />

        {/* Center purple atmosphere */}

        <div
          className="
            absolute
            left-1/2
            top-[18%]
            h-[600px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/20
            blur-[150px]
          "
        />

        {/* Right purple atmosphere */}

        <div
          className="
            absolute
            right-[-12%]
            top-[5%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-fuchsia-500/15
            blur-[160px]
          "
        />

        {/* =====================================================
            Grid
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.28]
            [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        {/* Grid vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,rgba(17,16,91,0.12)_55%,rgba(9,7,34,0.68)_100%)]
          "
        />

        {/* Top atmospheric fade */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-40
            bg-gradient-to-b
            from-[#09082a]/30
            to-transparent
          "
        />

        {/* Bottom fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-48
            bg-gradient-to-t
            from-[#0a082a]/70
            via-[#0a082a]/20
            to-transparent
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
          max-w-[1200px]
          flex-col
          items-center
          justify-center
          px-5
          pb-24
          pt-28
          text-center
          sm:px-8
        "
      >
        {/* =====================================================
            Version
        ====================================================== */}

        <div
        dir="ltr"
          className="
            mb-8
            inline-flex
            items-center
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            px-4
            py-2
            shadow-[0_10px_40px_rgba(0,0,0,0.18)]
            backdrop-blur-xl
          "
        >
          <span
            aria-hidden="true"
            className="
              mr-2
              h-1.5
              w-1.5
              rounded-full
              bg-violet-400
              shadow-[0_0_12px_rgba(167,139,250,0.95)]
            "
          />

          <span
            dir="ltr"
            className="
              font-mono
              text-[11px]
              tracking-[0.08em]
              text-white/65
            "
          >
            v{version}
          </span>
        </div>

        {/* =====================================================
            Title
        ====================================================== */}

        <h1
          className="
            max-w-[1000px]
            text-balance
            bg-gradient-to-b
            from-white
            via-white
            to-white/55
            bg-clip-text
            p-3
            text-[clamp(3.6rem,8vw,7.2rem)]
            font-semibold
            leading-[0.9]
            tracking-[-0.075em]
            text-transparent
          "
        >
          {t.hero.title}
        </h1>

        {/* =====================================================
            Description
        ====================================================== */}

        <p
          className="
            mt-7
            max-w-[620px]
            text-pretty
            text-[13px]
            leading-7
            text-white/55
            sm:text-[15px]
            sm:leading-8
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
            mt-8
            w-full
            max-w-fit
          "
        >
          <div
            className="
              relative
              flex
              min-h-11
              max-w-full
              items-center
              rounded-xl
              border
              border-white/[0.08]
              bg-[#160f3d]/85
              px-1.5
              shadow-[0_18px_50px_rgba(0,0,0,0.24)]
              backdrop-blur-xl
            "
          >
            {/* Top highlight */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-4
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent
              "
            />

            {/* Prompt */}

            <span
              aria-hidden="true"
              className="
                pl-3
                font-mono
                text-[12px]
                text-white/40
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
                py-2.5
                font-mono
                text-[11px]
                tracking-[-0.02em]
                text-white/70
                sm:px-3
                sm:text-[12px]
              "
            >
              {INSTALL_COMMAND}
            </code>

            {/* Copy */}

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
                text-white/35
                transition-all
                duration-200
                hover:bg-white/[0.06]
                hover:text-white/75
                active:scale-95
              "
            >
              {copied ? (
                <Check
                  size={14}
                  strokeWidth={1.8}
                  className="text-emerald-400"
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
            bottom-8
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
              tracking-[0.24em]
              text-white/25
            "
          >
            SCROLL
          </span>

          <ArrowDown size={13} strokeWidth={1.5} className="text-white/30" />
        </div>
      </div>
    </section>
  );
}
