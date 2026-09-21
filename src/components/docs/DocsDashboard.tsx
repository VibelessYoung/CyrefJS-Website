"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Package,
  Rocket,
  Zap,
} from "lucide-react";

import type { Locale } from "@/types/i18n";
import { getTranslations } from "@/lib/i18n";

interface DocsDashboardProps {
  locale: Locale;
}

export default function DocsDashboard({ locale }: DocsDashboardProps) {
  const t = getTranslations(locale);

  return (
    <div className="relative">
      {/* Hero */}
      <section
        className="
          relative overflow-hidden
          border-b border-black/[0.07]
          dark:border-white/[0.07]
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-32 -top-40
            h-[500px] w-[500px]
            rounded-full
            bg-blue-500/[0.08]
            blur-[120px]
            dark:bg-blue-500/[0.08]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            right-[25%] top-[15%]
            h-[300px] w-[300px]
            rounded-full
            bg-violet-500/[0.07]
            blur-[100px]
          "
        />

        <div
          className="
            relative
            mx-auto max-w-5xl
            px-6 py-20
            sm:px-10
            lg:px-16
            lg:py-28
          "
        >
          <div
            className="
              mb-6 inline-flex items-center gap-2
              rounded-full
              border border-blue-500/10
              bg-blue-500/[0.05]
              px-3 py-1.5
              text-xs font-medium
              text-blue-600
              dark:border-blue-400/10
              dark:bg-blue-400/[0.06]
              dark:text-blue-300
            "
          >
            <BookOpen size={14} />

            {t.docs.dashboard.eyebrow}
          </div>

          <h1
            className="
              max-w-4xl
              text-4xl font-semibold
              tracking-[-0.035em]
              sm:text-5xl
              lg:text-6xl
            "
          >
            {t.docs.dashboard.title}
          </h1>

          <p
            className="
              mt-6 max-w-2xl
              text-base leading-8
              text-zinc-500
              sm:text-lg
              dark:text-zinc-400
            "
          >
            {t.docs.dashboard.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/installation`}
              className="
                inline-flex items-center gap-2
                rounded-xl
                bg-zinc-950
                px-5 py-3
                text-sm font-medium
                text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-zinc-800
                dark:bg-white
                dark:text-black
                dark:hover:bg-zinc-200
              "
            >
              <Rocket size={16} />

              {t.docs.dashboard.install}
            </Link>

            <Link
              href={`/${locale}#quick-start`}
              className="
                inline-flex items-center gap-2
                rounded-xl
                border border-black/[0.08]
                bg-black/[0.02]
                px-5 py-3
                text-sm font-medium
                text-zinc-700
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-black/[0.05]
                dark:border-white/[0.1]
                dark:bg-white/[0.03]
                dark:text-zinc-200
                dark:hover:bg-white/[0.07]
              "
            >
              {t.docs.dashboard.quickStart}

              <ArrowRight
                size={15}
                className={locale === "fa" ? "rotate-180" : ""}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section
        className="
          mx-auto max-w-5xl
          px-6 py-16
          sm:px-10
          lg:px-16
          lg:py-20
        "
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Installation */}
          <Link
            href={`/${locale}/installation`}
            className="
              group
              rounded-2xl
              border border-black/[0.07]
              bg-white
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:border-black/[0.12]
              hover:shadow-[0_18px_50px_rgba(0,0,0,0.06)]
              dark:border-white/[0.08]
              dark:bg-white/[0.025]
              dark:hover:border-white/[0.14]
              dark:hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]
            "
          >
            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-blue-500/10
                text-blue-600
                dark:bg-blue-400/10
                dark:text-blue-300
              "
            >
              <Package size={19} />
            </div>

            <h2 className="mt-5 text-lg font-semibold">
              {t.docs.dashboard.cards.installation.title}
            </h2>

            <p
              className="
                mt-2 text-sm leading-6
                text-zinc-500
                dark:text-zinc-400
              "
            >
              {t.docs.dashboard.cards.installation.description}
            </p>

            <div
              className="
                mt-5 inline-flex items-center gap-1.5
                text-xs font-medium
                text-zinc-500
                transition-colors
                group-hover:text-zinc-900
                dark:text-zinc-400
                dark:group-hover:text-white
              "
            >
              {t.docs.dashboard.readMore}

              <ArrowRight
                size={13}
                className={locale === "fa" ? "rotate-180" : ""}
              />
            </div>
          </Link>

          {/* Quick Start */}
          <Link
            href={`/${locale}#quick-start`}
            className="
              group
              rounded-2xl
              border border-black/[0.07]
              bg-white
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:border-black/[0.12]
              hover:shadow-[0_18px_50px_rgba(0,0,0,0.06)]
              dark:border-white/[0.08]
              dark:bg-white/[0.025]
              dark:hover:border-white/[0.14]
              dark:hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]
            "
          >
            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-violet-500/10
                text-violet-600
                dark:bg-violet-400/10
                dark:text-violet-300
              "
            >
              <Zap size={19} />
            </div>

            <h2 className="mt-5 text-lg font-semibold">
              {t.docs.dashboard.cards.quickStart.title}
            </h2>

            <p
              className="
                mt-2 text-sm leading-6
                text-zinc-500
                dark:text-zinc-400
              "
            >
              {t.docs.dashboard.cards.quickStart.description}
            </p>

            <div
              className="
                mt-5 inline-flex items-center gap-1.5
                text-xs font-medium
                text-zinc-500
                transition-colors
                group-hover:text-zinc-900
                dark:text-zinc-400
                dark:group-hover:text-white
              "
            >
              {t.docs.dashboard.readMore}

              <ArrowRight
                size={13}
                className={locale === "fa" ? "rotate-180" : ""}
              />
            </div>
          </Link>
        </div>

        {/* Feature strip */}
        <div
          className="
            mt-10
            grid
            overflow-hidden
            rounded-2xl
            border border-black/[0.07]
            sm:grid-cols-3
            dark:border-white/[0.08]
          "
        >
          {[
            {
              icon: Code2,
              title: t.docs.dashboard.features.typescript.title,
              description: t.docs.dashboard.features.typescript.description,
            },
            {
              icon: Zap,
              title: t.docs.dashboard.features.lightweight.title,
              description: t.docs.dashboard.features.lightweight.description,
            },
            {
              icon: CheckCircle2,
              title: t.docs.dashboard.features.simple.title,
              description: t.docs.dashboard.features.simple.description,
            },
          ].map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`
                  p-5
                  ${
                    index !== 0
                      ? "border-t border-black/[0.07] sm:border-l sm:border-t-0 dark:border-white/[0.08]"
                      : ""
                  }
                `}
              >
                <Icon
                  size={17}
                  className="
                    text-zinc-500
                    dark:text-zinc-400
                  "
                />

                <h3 className="mt-4 text-sm font-semibold">{feature.title}</h3>

                <p
                  className="
                    mt-1.5
                    text-xs leading-5
                    text-zinc-500
                    dark:text-zinc-400
                  "
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
