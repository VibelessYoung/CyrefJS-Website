import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";

import type { DocPage } from "@/data/docs/types";
import type { Locale } from "@/types/i18n";

interface DocsPaginationProps {
  locale: Locale;
  currentDoc: DocPage;
  docs: DocPage[];
}

export default function DocsPagination({
  locale,
  currentDoc,
  docs,
}: DocsPaginationProps) {
  const currentIndex = docs.findIndex((doc) => doc.slug === currentDoc.slug);

  const previousDoc = currentIndex > 0 ? docs[currentIndex - 1] : undefined;

  const nextDoc =
    currentIndex >= 0 && currentIndex < docs.length - 1
      ? docs[currentIndex + 1]
      : undefined;

  if (!previousDoc && !nextDoc) {
    return null;
  }

  const isFa = locale === "fa";

  return (
    <nav
      aria-label={isFa ? "ناوبری مستندات" : "Documentation navigation"}
      className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2"
    >
      {/* Previous */}
      {previousDoc ? (
        <Link
          href={`/${locale}/docs/${previousDoc.slug}`}
          className="group flex min-h-24 flex-col justify-between rounded-xl border border-zinc-200 bg-white p-4 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.035] sm:p-5"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
              {isFa ? "قبلی" : "Previous"}
            </span>

            {isFa ? (
              <ArrowRight className="size-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 dark:text-zinc-500" />
            ) : (
              <ArrowLeft className="size-4 text-zinc-400 transition-transform duration-200 group-hover:-translate-x-1 dark:text-zinc-500" />
            )}
          </div>

          <div className="mt-4 min-w-0">
            <p className="truncate text-sm font-semibold text-zinc-950 dark:text-white">
              {previousDoc.title[locale]}
            </p>

            <p className="mt-1 truncate text-xs text-zinc-500 dark:text-zinc-500">
              {previousDoc.category}
            </p>
          </div>
        </Link>
      ) : (
        <div aria-hidden="true" />
      )}

      {/* Next */}
      {nextDoc ? (
        <Link
          href={`/${locale}/docs/${nextDoc.slug}`}
          className="group flex min-h-24 flex-col justify-between rounded-xl border border-zinc-200 bg-white p-4 text-left transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.035] sm:p-5"
          dir={isFa ? "rtl" : "ltr"}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
              {isFa ? "بعدی" : "Next"}
            </span>

            {isFa ? (
              <ArrowLeft className="size-4 text-zinc-400 transition-transform duration-200 group-hover:-translate-x-1 dark:text-zinc-500" />
            ) : (
              <ArrowRight className="size-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 dark:text-zinc-500" />
            )}
          </div>

          <div className="mt-4 min-w-0">
            <p className="truncate text-sm font-semibold text-zinc-950 dark:text-white">
              {nextDoc.title[locale]}
            </p>

            <p className="mt-1 truncate text-xs text-zinc-500 dark:text-zinc-500">
              {nextDoc.category}
            </p>
          </div>
        </Link>
      ) : null}
    </nav>
  );
}
