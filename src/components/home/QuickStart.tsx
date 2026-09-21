"use client";

import { Check, Copy, Terminal } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

import { translations } from "@/i18n";
import type { Locale } from "@/types/i18n";

const INSTALL_COMMAND = "npm install @cyref/js";

const USAGE_CODE = `import { chunk } from "@cyref/js";

const numbers = [1, 2, 3, 4, 5, 6, 7];

const result = chunk(numbers, 3);

console.log(result);`;

const OUTPUT_CODE = `[
  [1, 2, 3],
  [4, 5, 6],
  [7]
]`;

export default function QuickStart() {
  const params = useParams();

  const locale = params.locale as Locale;
  const t = translations[locale];

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string, id: string) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(id);

      window.setTimeout(() => {
        setCopied(null);
      }, 2000);
    } catch {
      setCopied(null);
    }
  };

  return (
    <section
      id="quick-start"
      className="
        relative
        overflow-hidden
        bg-white
        py-28
        dark:bg-[#050505]
        sm:py-36
      "
    >
      {/* Background atmosphere */}
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
        <div
          className="
            absolute
            left-1/2
            top-[10%]
            h-[420px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.04]
            blur-[150px]
            dark:bg-violet-500/[0.08]
          "
        />

        <div
          className="
            absolute
            bottom-[-15%]
            left-[-10%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-cyan-400/[0.04]
            blur-[130px]
            dark:bg-cyan-500/[0.05]
          "
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-black/10
              bg-black/[0.03]
              px-3.5
              py-1.5
              text-xs
              font-medium
              tracking-wide
              text-black/60
              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-white/60
            "
          >
            {t.quickStart.eyebrow}
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-semibold
              tracking-tight
              text-black
              sm:text-5xl
              dark:text-white
            "
          >
            {t.quickStart.title}
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-black/55
              dark:text-white/55
              sm:text-lg
            "
          >
            {t.quickStart.description}
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-20 max-w-6xl">
          {/* Step 01 */}
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[240px_minmax(0,1fr)]
              lg:items-center
            "
          >
            {/* Step info */}
            <div>
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  bg-black/[0.03]
                  text-sm
                  font-semibold
                  text-black/60
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white/60
                "
              >
                01
              </div>

              <h3
                className="
                  mt-5
                  text-xl
                  font-semibold
                  text-black
                  dark:text-white
                "
              >
                {t.quickStart.install.title}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-black/50
                  dark:text-white/50
                "
              >
                {t.quickStart.install.description}
              </p>
            </div>

            {/* Terminal */}
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-black/[0.09]
                bg-[#f8f8f8]
                shadow-2xl
                shadow-black/[0.04]
                dark:border-white/[0.09]
                dark:bg-[#0b0b0b]
                dark:shadow-black/20
              "
            >
              {/* Window header */}
              <div
                className="
                  flex
                  h-11
                  items-center
                  justify-between
                  border-b
                  border-black/[0.07]
                  px-4
                  dark:border-white/[0.07]
                "
              >
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    text-black/35
                    dark:text-white/35
                  "
                >
                  <Terminal size={13} />
                  terminal
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(INSTALL_COMMAND, "install")}
                  aria-label={t.quickStart.copy}
                  className="
                    rounded-lg
                    p-1.5
                    text-black/40
                    transition
                    hover:bg-black/5
                    hover:text-black
                    dark:text-white/40
                    dark:hover:bg-white/10
                    dark:hover:text-white
                  "
                >
                  {copied === "install" ? (
                    <Check size={15} />
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>

              {/* Command */}
              <div className="overflow-x-auto px-5 py-6 sm:px-6">
                <code
                  dir="ltr"
                  className="
                    block
                    whitespace-nowrap
                    font-mono
                    text-sm
                    text-black/75
                    dark:text-white/75
                  "
                >
                  <span className="text-blue-500">$</span> {INSTALL_COMMAND}
                </code>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div
            aria-hidden="true"
            className="
              my-10
              ml-5
              h-10
              w-px
              bg-gradient-to-b
              from-black/10
              to-transparent
              dark:from-white/10
            "
          />

          {/* Step 02 */}
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[240px_minmax(0,1fr)]
              lg:items-start
            "
          >
            {/* Step info */}
            <div>
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  bg-black/[0.03]
                  text-sm
                  font-semibold
                  text-black/60
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white/60
                "
              >
                02
              </div>

              <h3
                className="
                  mt-5
                  text-xl
                  font-semibold
                  text-black
                  dark:text-white
                "
              >
                {t.quickStart.usage.title}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-black/50
                  dark:text-white/50
                "
              >
                {t.quickStart.usage.description}
              </p>
            </div>

            {/* Code windows */}
            <div className="grid gap-4 xl:grid-cols-[1.5fr_0.8fr]">
              {/* Usage */}
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-black/[0.09]
                  bg-[#f8f8f8]
                  shadow-2xl
                  shadow-black/[0.04]
                  dark:border-white/[0.09]
                  dark:bg-[#0b0b0b]
                  dark:shadow-black/20
                "
              >
                {/* Header */}
                <div
                  className="
                    flex
                    h-11
                    items-center
                    justify-between
                    border-b
                    border-black/[0.07]
                    px-4
                    dark:border-white/[0.07]
                  "
                >
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>

                  <span
                    dir="ltr"
                    className="
                      font-mono
                      text-[11px]
                      text-black/35
                      dark:text-white/35
                    "
                  >
                    example.ts
                  </span>

                  <button
                    type="button"
                    onClick={() => handleCopy(USAGE_CODE, "usage")}
                    aria-label={t.quickStart.copy}
                    className="
                      rounded-lg
                      p-1.5
                      text-black/40
                      transition
                      hover:bg-black/5
                      hover:text-black
                      dark:text-white/40
                      dark:hover:bg-white/10
                      dark:hover:text-white
                    "
                  >
                    {copied === "usage" ? (
                      <Check size={15} />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>

                {/* Code */}
                <pre
                  dir="ltr"
                  className="
                    overflow-x-auto
                    p-5
                    text-left
                    font-mono
                    text-[12px]
                    leading-6
                    text-black/75
                    dark:text-white/75
                    sm:p-6
                    sm:text-[13px]
                  "
                >
                  <code>
                    {USAGE_CODE.split("\n").map((line, index) => {
                      const isImport = line.startsWith("import");
                      const isConst = line.startsWith("const");
                      const isConsole = line.startsWith("console");

                      return (
                        <span key={index} className="block">
                          {isImport ? (
                            <>
                              <span className="text-violet-500">import</span>
                              {line.slice(6)}
                            </>
                          ) : isConst ? (
                            <>
                              <span className="text-blue-500">const</span>
                              {line.slice(5)}
                            </>
                          ) : isConsole ? (
                            <>
                              <span className="text-cyan-500">console</span>
                              {line.slice(7)}
                            </>
                          ) : (
                            line
                          )}
                        </span>
                      );
                    })}
                  </code>
                </pre>
              </div>

              {/* Output */}
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-black/[0.09]
                  bg-[#f8f8f8]
                  shadow-2xl
                  shadow-black/[0.04]
                  dark:border-white/[0.09]
                  dark:bg-[#0b0b0b]
                  dark:shadow-black/20
                "
              >
                <div
                  className="
                    flex
                    h-11
                    items-center
                    border-b
                    border-black/[0.07]
                    px-4
                    dark:border-white/[0.07]
                  "
                >
                  <span
                    dir="ltr"
                    className="
                      font-mono
                      text-[11px]
                      text-black/35
                      dark:text-white/35
                    "
                  >
                    output
                  </span>
                </div>

                <pre
                  dir="ltr"
                  className="
                    overflow-x-auto
                    p-5
                    text-left
                    font-mono
                    text-[12px]
                    leading-6
                    text-black/60
                    dark:text-white/55
                    sm:p-6
                    sm:text-[13px]
                  "
                >
                  <code>{OUTPUT_CODE}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
