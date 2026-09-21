"use client";

import { ArrowLeft, ArrowRight, Check, Copy } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

import { translations } from "@/i18n";
import type { Locale } from "@/types/i18n";

const BEFORE_CODE = `const chunks: number[][] = [];

for (let i = 0; i < numbers.length; i += 3) {
  chunks.push(numbers.slice(i, i + 3));
}`;

const AFTER_CODE = `import { chunk } from "@cyref/js";

const chunks = chunk(numbers, 3);`;

export default function CodeComparison() {
  const params = useParams();

  const locale = params.locale as Locale;
  const t = translations[locale];
  const isRTL = locale === "fa";

  const [copied, setCopied] = useState<"before" | "after" | null>(null);

  const handleCopy = async (code: string, type: "before" | "after") => {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(type);

      window.setTimeout(() => {
        setCopied(null);
      }, 2000);
    } catch {
      setCopied(null);
    }
  };

  return (
    <section
      id="utilities"
      className="
        relative
        overflow-hidden
        bg-white
        py-28
        dark:bg-[#050505]
        sm:py-36
      "
    >
      {/* ==================================================
          Background atmosphere
      ================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-0
        "
      >
        <div
          className="
            absolute
            left-[-15%]
            top-[15%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-500/[0.035]
            blur-[130px]
            dark:bg-blue-500/[0.055]
          "
        />

        <div
          className="
            absolute
            right-[-15%]
            bottom-[10%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-purple-500/[0.035]
            blur-[130px]
            dark:bg-purple-500/[0.055]
          "
        />
      </div>

      {/* ==================================================
          Content
      ================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
          px-5
          sm:px-8
        "
      >
        {/* ==================================================
            Section heading
        ================================================== */}

        <div className="max-w-3xl">
          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-black/35
              dark:text-white/35
            "
          >
            {t.codeComparison.eyebrow}
          </span>

          <h2
            className="
              mt-5
              text-4xl
              font-semibold
              tracking-[-0.04em]
              text-black
              dark:text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            {t.codeComparison.title}
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-black/50
              dark:text-white/50
              sm:text-lg
              sm:leading-9
            "
          >
            {t.codeComparison.description}
          </p>
        </div>

        {/* ==================================================
            Code comparison
        ================================================== */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-[1fr_auto_1fr]
            lg:items-center
          "
        >
          {/* ==================================================
              Before
          ================================================== */}

          <CodeWindow
            label={t.codeComparison.before}
            code={BEFORE_CODE}
            onCopy={() => handleCopy(BEFORE_CODE, "before")}
            copied={copied === "before"}
          />

          {/* ==================================================
              Arrow
          ================================================== */}

          <div
            className="
    hidden
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    border
    border-black/10
    bg-black/[0.025]
    text-black/30
    lg:flex
    dark:border-white/10
    dark:bg-white/[0.025]
    dark:text-white/30
  "
          >
            {isRTL ? (
              <ArrowLeft size={16} strokeWidth={1.7} />
            ) : (
              <ArrowRight size={16} strokeWidth={1.7} />
            )}
          </div>

          {/* ==================================================
              After
          ================================================== */}

          <CodeWindow
            label={t.codeComparison.after}
            code={AFTER_CODE}
            onCopy={() => handleCopy(AFTER_CODE, "after")}
            copied={copied === "after"}
            highlighted
          />
        </div>
      </div>
    </section>
  );
}

/* ==========================================================
   Code Window
========================================================== */

interface CodeWindowProps {
  label: string;
  code: string;
  onCopy: () => void;
  copied: boolean;
  highlighted?: boolean;
}

function CodeWindow({
  label,
  code,
  onCopy,
  copied,
  highlighted = false,
}: CodeWindowProps) {
  return (
    <div className="group">
      {/* Label */}

      <div
        className="
          mb-3
          flex
          items-center
          justify-between
          px-1
        "
      >
        <span
          className={`
            text-xs
            font-medium
            ${
              highlighted
                ? "text-green-500"
                : "text-red-700 dark:text-red-500/50"
            }
          `}
        >
          {label}
        </span>
      </div>

      {/* VS Code window */}

      <div
        className={`
          overflow-hidden
          rounded-2xl
          border
          bg-[#0d1117]
          shadow-[0_25px_70px_rgba(0,0,0,0.12)]
          transition-all
          duration-500
          ${
            highlighted
              ? "border-green-500/25"
              : "border-red-600 dark:border-red-500/50"
          }
        `}
      >
        {/* Window header */}

        <div
          className="
            flex
            h-11
            items-center
            border-b
            border-white/[0.07]
            bg-white/[0.025]
            px-4
          "
        >
          {/* Traffic lights */}

          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>

          {/* Copy */}

          <button
            type="button"
            onClick={onCopy}
            aria-label="Copy code"
            className="
              ml-auto
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              text-white/35
              transition-all
              duration-200
              hover:bg-white/[0.07]
              hover:text-white/80
              active:scale-95
            "
          >
            {copied ? (
              <Check size={14} strokeWidth={1.8} />
            ) : (
              <Copy size={14} strokeWidth={1.8} />
            )}
          </button>
        </div>

        {/* Code */}

        <div
          className="
            overflow-x-auto
            px-5
            py-6
            sm:px-6
            sm:py-7
          "
        >
          <pre
            dir="ltr"
            className="
              min-w-max
              font-mono
              text-[12px]
              leading-7
              text-white/65
              sm:text-[13px]
            "
          >
            <code>{code}</code>
          </pre>
        </div>

        {/* Bottom subtle line */}

        <div
          className={`
            h-px
            w-full
            ${
              highlighted
                ? "bg-gradient-to-r from-transparent via-green-500/40 to-transparent"
                : "bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
            }
          `}
        />
      </div>
    </div>
  );
}
