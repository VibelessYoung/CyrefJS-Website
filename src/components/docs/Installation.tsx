"use client";

import { Check, Copy, Package, Terminal } from "lucide-react";
import { useState } from "react";

import type { Locale } from "@/types/i18n";
import { getTranslations } from "@/lib/i18n";

const INSTALL_COMMAND = "npm install @cyref/js";

interface InstallationProps {
  locale: Locale;
}

export default function Installation({ locale }: InstallationProps) {
  const t = getTranslations(locale);
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-zinc-900 dark:bg-[#050505] dark:text-white">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-0
          h-[500px] w-[700px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[120px]
          dark:bg-blue-500/8
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[-180px] top-[420px]
          h-[420px] w-[420px]
          rounded-full
          bg-violet-500/10
          blur-[120px]
          dark:bg-violet-500/8
        "
      />

      <section className="relative mx-auto max-w-5xl px-6 pb-24 pt-32 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div
            className="
              mb-5 inline-flex items-center gap-2
              rounded-full
              border border-black/8
              bg-black/[0.025]
              px-3 py-1.5
              text-xs font-medium
              text-zinc-500
              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-zinc-400
            "
          >
            <Package size={14} strokeWidth={1.8} />

            {t.installation.eyebrow}
          </div>

          <h1
            className="
              text-4xl font-semibold tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            {t.installation.title}
          </h1>

          <p
            className="
              mt-6 max-w-2xl
              text-base leading-7
              text-zinc-500
              sm:text-lg
              dark:text-zinc-400
            "
          >
            {t.installation.description}
          </p>
        </div>

        {/* Installation card */}
        <div
          className="
            mt-14 overflow-hidden
            rounded-3xl
            border border-black/8
            bg-white/80
            shadow-[0_20px_80px_rgba(0,0,0,0.06)]
            backdrop-blur-xl
            dark:border-white/8
            dark:bg-white/[0.035]
            dark:shadow-[0_20px_80px_rgba(0,0,0,0.25)]
          "
        >
          {/* Card header */}
          <div
            className="
              flex items-center justify-between
              border-b border-black/8
              px-5 py-4
              dark:border-white/8
            "
          >
            <div className="flex items-center gap-2.5">
              <Terminal
                size={16}
                strokeWidth={1.8}
                className="text-zinc-500 dark:text-zinc-400"
              />

              <span className="text-sm font-medium">
                {t.installation.terminal}
              </span>
            </div>

            <button
              type="button"
              onClick={copyCommand}
              aria-label={t.installation.copy}
              className="
                inline-flex items-center gap-2
                rounded-lg
                border border-black/8
                bg-black/[0.025]
                px-3 py-2
                text-xs font-medium
                text-zinc-600
                transition-all duration-200
                hover:bg-black/[0.06]
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:text-zinc-300
                dark:hover:bg-white/[0.08]
                cursor-pointer
              "
            >
              {copied ? (
                <>
                  <Check size={14} />
                  {t.installation.copied}
                </>
              ) : (
                <>
                  <Copy size={14} />
                  {t.installation.copy}
                </>
              )}
            </button>
          </div>

          {/* Command */}
          <div className="overflow-x-auto px-5 py-7 sm:px-7">
            <code
              dir="ltr"
              className="
                block
                whitespace-nowrap
                font-mono text-sm
                text-zinc-800
                sm:text-base
                dark:text-zinc-200
              "
            >
              <span className="text-zinc-400">$</span> {INSTALL_COMMAND}
            </code>
          </div>
        </div>

        {/* Package managers */}
        <div className="mt-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.installation.packageManagers.title}
            </h2>

            <p
              className="
                mt-3
                text-sm leading-7
                text-zinc-500
                dark:text-zinc-400
              "
            >
              {t.installation.packageManagers.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                name: "npm",
                command: "npm install @cyref/js",
              },
              {
                name: "pnpm",
                command: "pnpm add @cyref/js",
              },
              {
                name: "yarn",
                command: "yarn add @cyref/js",
              },
              {
                name: "bun",
                command: "bun add @cyref/js",
              },
            ].map((manager) => (
              <div
                key={manager.name}
                className="
                  rounded-2xl
                  border border-black/8
                  bg-black/[0.02]
                  p-5
                  transition-colors
                  hover:bg-black/[0.035]
                  dark:border-white/8
                  dark:bg-white/[0.025]
                  dark:hover:bg-white/[0.045]
                "
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold">{manager.name}</span>

                  <code
                    dir="ltr"
                    className="
                      truncate
                      rounded-md
                      bg-black/[0.04]
                      px-2 py-1
                      font-mono text-xs
                      text-zinc-500
                      dark:bg-white/[0.06]
                      dark:text-zinc-400
                    "
                  >
                    {manager.command}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next step */}
        <div
          className="
            mt-16
            rounded-3xl
            border border-blue-500/10
            bg-gradient-to-br
            from-blue-500/[0.06]
            via-violet-500/[0.04]
            to-transparent
            p-6
            sm:p-8
            dark:border-blue-400/10
            dark:from-blue-500/[0.08]
            dark:via-violet-500/[0.06]
          "
        >
          <p
            className="
              text-sm leading-7
              text-zinc-600
              dark:text-zinc-300
            "
          >
            {t.installation.nextStep}
          </p>
        </div>
      </section>
    </main>
  );
}
