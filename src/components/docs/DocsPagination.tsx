import Link from "next/link";

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

  return (
    <nav
      aria-label={
        locale === "fa" ? "ناوبری مستندات" : "Documentation navigation"
      }
      className="mt-16 grid grid-cols-1 gap-4 border-t border-zinc-200 pt-8 dark:border-white/10 sm:grid-cols-2"
    >
      {previousDoc ? (
        <Link
          href={`/${locale}/docs/${previousDoc.slug}`}
          className="group rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-white/[0.03]"
        >
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
            {locale === "fa" ? "قبلی" : "Previous"}
          </span>

          <div className="mt-2 text-sm font-semibold text-zinc-950 dark:text-white">
            ← {previousDoc.title[locale]}
          </div>

          <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
            {previousDoc.category}
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextDoc ? (
        <Link
          href={`/${locale}/docs/${nextDoc.slug}`}
          className="group rounded-2xl border border-zinc-200 p-5 text-left transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-white/[0.03] sm:text-right"
        >
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
            {locale === "fa" ? "بعدی" : "Next"}
          </span>

          <div className="mt-2 text-sm font-semibold text-zinc-950 dark:text-white">
            {nextDoc.title[locale]} →
          </div>

          <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
            {nextDoc.category}
          </div>
        </Link>
      ) : null}
    </nav>
  );
}
