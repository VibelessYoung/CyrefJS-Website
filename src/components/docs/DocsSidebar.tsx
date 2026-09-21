"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Box,
  Braces,
  CalendarDays,
  Code2,
  FileCode2,
  Hash,
  Layers3,
  Package,
  Rocket,
  Settings2,
  Type,
  UserRound,
  Workflow,
} from "lucide-react";

import type { Locale } from "@/types/i18n";
import { getTranslations } from "@/lib/i18n";

interface DocsSidebarProps {
  locale: Locale;
}

export default function DocsSidebar({ locale }: DocsSidebarProps) {
  const t = getTranslations(locale);

  const gettingStarted = [
    {
      label: t.docs.sidebar.introduction,
      href: `/${locale}/docs`,
      icon: FileCode2,
    },
    {
      label: t.docs.sidebar.installation,
      href: `/${locale}/installation`,
      icon: Package,
    },
    {
      label: t.docs.sidebar.quickStart,
      href: `/${locale}#quick-start`,
      icon: Rocket,
    },
  ];

  const utilities = [
    {
      label: t.docs.sidebar.array,
      href: "#array",
      icon: Layers3,
    },
    {
      label: t.docs.sidebar.string,
      href: "#string",
      icon: Type,
    },
    {
      label: t.docs.sidebar.object,
      href: "#object",
      icon: Box,
    },
    {
      label: t.docs.sidebar.number,
      href: "#number",
      icon: Hash,
    },
    {
      label: t.docs.sidebar.date,
      href: "#date",
      icon: CalendarDays,
    },
    {
      label: t.docs.sidebar.function,
      href: "#function",
      icon: Workflow,
    },
    {
      label: t.docs.sidebar.type,
      href: "#type",
      icon: Braces,
    },
  ];

  return (
    <aside
      className="
        sticky top-16
        hidden h-[calc(100vh-4rem)]
        w-[260px] shrink-0
        overflow-y-auto
        border-r border-black/[0.07]
        bg-white
        px-4 py-7
        lg:block
        dark:border-white/[0.07]
        dark:bg-[#050505]
      "
    >
      <nav>
        {/* Getting Started */}
        <div>
          <p
            className="
              mb-3 px-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-zinc-400
              dark:text-zinc-500
            "
          >
            {t.docs.sidebar.gettingStarted}
          </p>

          <div className="space-y-0.5">
            {gettingStarted.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    flex items-center gap-3
                    rounded-lg
                    px-3 py-2.5
                    text-sm
                    text-zinc-500
                    transition-all
                    hover:bg-black/[0.04]
                    hover:text-zinc-900
                    dark:text-zinc-400
                    dark:hover:bg-white/[0.05]
                    dark:hover:text-white
                  "
                >
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                    className="
                      shrink-0
                      text-zinc-400
                      dark:text-zinc-500
                    "
                  />

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Utilities */}
        <div className="mt-9">
          <p
            className="
              mb-3 px-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-zinc-400
              dark:text-zinc-500
            "
          >
            {t.docs.sidebar.utilities}
          </p>

          <div className="space-y-0.5">
            {utilities.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    flex items-center gap-3
                    rounded-lg
                    px-3 py-2.5
                    text-sm
                    text-zinc-500
                    transition-all
                    hover:bg-black/[0.04]
                    hover:text-zinc-900
                    dark:text-zinc-400
                    dark:hover:bg-white/[0.05]
                    dark:hover:text-white
                  "
                >
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                    className="
                      shrink-0
                      text-zinc-400
                      dark:text-zinc-500
                    "
                  />

                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Resources */}
        <div className="mt-9">
          <p
            className="
              mb-3 px-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-zinc-400
              dark:text-zinc-500
            "
          >
            {t.docs.sidebar.resources}
          </p>

          <a
            href="https://github.com/VibelessYoung/CyrefJS"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex items-center gap-3
              rounded-lg
              px-3 py-2.5
              text-sm
              text-zinc-500
              transition-all
              hover:bg-black/[0.04]
              hover:text-zinc-900
              dark:text-zinc-400
              dark:hover:bg-white/[0.05]
              dark:hover:text-white
            "
          >
            <Code2 size={16} strokeWidth={1.7} />

            <span>{t.docs.sidebar.github}</span>

            <ArrowUpRight
              size={13}
              className="
                ml-auto
                opacity-0
                transition-opacity
                group-hover:opacity-100
              "
            />
          </a>

          <Link
            href={`/${locale}#contact`}
            className="
              flex items-center gap-3
              rounded-lg
              px-3 py-2.5
              text-sm
              text-zinc-500
              transition-all
              hover:bg-black/[0.04]
              hover:text-zinc-900
              dark:text-zinc-400
              dark:hover:bg-white/[0.05]
              dark:hover:text-white
            "
          >
            <UserRound size={16} strokeWidth={1.7} />

            <span>{t.docs.sidebar.contact}</span>
          </Link>
        </div>

        {/* Version */}
        <div
          className="
            mt-10
            rounded-xl
            border border-black/[0.07]
            bg-black/[0.02]
            px-3 py-3
            dark:border-white/[0.07]
            dark:bg-white/[0.025]
          "
        >
          <div className="flex items-center gap-2">
            <Settings2 size={14} className="text-zinc-400" />

            <span
              className="
                text-xs
                text-zinc-500
                dark:text-zinc-400
              "
            >
              CyrefJS v1.38.0
            </span>
          </div>
        </div>
      </nav>
    </aside>
  );
}
