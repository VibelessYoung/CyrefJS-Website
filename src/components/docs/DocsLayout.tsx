"use client";

import type { ReactNode } from "react";

import DocsHeader from "./DocsHeader";
import DocsSidebar from "./DocsSidebar";

import type { Locale } from "@/types/i18n";

interface DocsLayoutProps {
  children: ReactNode;
  locale: Locale;
}

export default function DocsLayout({ children, locale }: DocsLayoutProps) {
  return (
    <div
      className="
        min-h-screen
        bg-white text-zinc-900
        dark:bg-[#050505] dark:text-white
      "
    >
      <DocsHeader locale={locale} />

      <div className="mx-auto flex max-w-[1600px]">
        <DocsSidebar locale={locale} />

        <main
          className="
            min-w-0 flex-1
            lg:border-l lg:border-black/[0.07]
            dark:lg:border-white/[0.07]
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
