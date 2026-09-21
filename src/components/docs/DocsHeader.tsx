"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

import ThemeButton from "@/components/navigation/ThemeButton";
import LanguageSwitcher from "@/components/navigation/LanguageSwitcher";

import type { Locale } from "@/types/i18n";
import { getTranslations } from "@/lib/i18n";

interface DocsHeaderProps {
  locale: Locale;
}

export default function DocsHeader({ locale }: DocsHeaderProps) {
  const t = getTranslations(locale);

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50
        h-16
        border-b border-black/[0.07]
        bg-white/85
        backdrop-blur-xl
        dark:border-white/[0.07]
        dark:bg-[#050505]/85
      "
    >
      <div
        className="
          mx-auto flex h-full max-w-[1600px]
          items-center justify-between
          px-4 sm:px-6
        "
      >
        {/* Left */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-lg
              text-zinc-500
              transition-colors
              hover:bg-black/5
              hover:text-zinc-900
              lg:hidden
              dark:text-zinc-400
              dark:hover:bg-white/5
              dark:hover:text-white
            "
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>

          <Link href={`/${locale}`} className="flex items-center gap-2.5">
            <span
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-lg
                bg-zinc-950
                text-xs font-bold
                text-white
                dark:bg-white
                dark:text-black
              "
            >
              C
            </span>

            <span className="text-sm font-semibold tracking-tight">
              CyrefJS
            </span>
          </Link>

          <span
            className="
              hidden
              h-4 w-px
              bg-black/10
              sm:block
              dark:bg-white/10
            "
          />

          <span
            className="
              hidden text-sm
              text-zinc-500
              sm:block
              dark:text-zinc-400
            "
          >
            {t.docs.header}
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1.5">
          {/* Search */}
          <button
            type="button"
            className="
              hidden h-9 items-center gap-2
              rounded-lg
              border border-black/[0.07]
              bg-black/[0.025]
              px-3
              text-xs
              text-zinc-500
              transition-all
              hover:bg-black/[0.05]
              sm:flex
              dark:border-white/[0.08]
              dark:bg-white/[0.025]
              dark:text-zinc-400
              dark:hover:bg-white/[0.05]
            "
          >
            <Search size={15} />

            <span>{t.docs.search}</span>

            <kbd
              className="
                ml-5 rounded-md
                border border-black/10
                px-1.5 py-0.5
                font-mono text-[10px]
                dark:border-white/10
              "
            >
              ⌘ K
            </kbd>
          </button>

          <LanguageSwitcher />

          <ThemeButton />

          <a
            href="https://github.com/VibelessYoung/CyrefJS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-lg
              text-zinc-500
              transition-colors
              hover:bg-black/5
              hover:text-zinc-900
              dark:text-zinc-400
              dark:hover:bg-white/5
              dark:hover:text-white
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-[18px] w-[18px]"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.68.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div
          className="
            absolute left-0 right-0 top-16
            border-b border-black/[0.07]
            bg-white
            px-5 py-5
            lg:hidden
            dark:border-white/[0.07]
            dark:bg-[#050505]
          "
        >
          <nav className="space-y-1">
            <Link
              href={`/${locale}/docs`}
              onClick={() => setMobileOpen(false)}
              className="
                block rounded-lg
                px-3 py-2.5
                text-sm
                text-zinc-600
                hover:bg-black/[0.04]
                dark:text-zinc-300
                dark:hover:bg-white/[0.05]
              "
            >
              {t.docs.sidebar.introduction}
            </Link>

            <Link
              href={`/${locale}/installation`}
              onClick={() => setMobileOpen(false)}
              className="
                block rounded-lg
                px-3 py-2.5
                text-sm
                text-zinc-600
                hover:bg-black/[0.04]
                dark:text-zinc-300
                dark:hover:bg-white/[0.05]
              "
            >
              {t.docs.sidebar.installation}
            </Link>

            <Link
              href={`/${locale}#quick-start`}
              onClick={() => setMobileOpen(false)}
              className="
                block rounded-lg
                px-3 py-2.5
                text-sm
                text-zinc-600
                hover:bg-black/[0.04]
                dark:text-zinc-300
                dark:hover:bg-white/[0.05]
              "
            >
              {t.docs.sidebar.quickStart}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
