import Link from "next/link";

import type { DocSection } from "@/data/docs/types";
import type { Locale } from "@/types/i18n";

interface DocsTableOfContentsProps {
  locale: Locale;
  sections: DocSection[];
}

export default function DocsTableOfContents({
  locale,
  sections,
}: DocsTableOfContentsProps) {
  if (sections.length === 0) {
    return null;
  }

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 w-56">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          {locale === "fa" ? "در این صفحه" : "On this page"}
        </p>

        <nav>
          <ul className="space-y-2 border-l border-zinc-200 dark:border-white/10">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  className="block border-l border-transparent py-1 pl-4 text-sm text-zinc-500 transition-colors hover:border-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:border-zinc-600 dark:hover:text-white"
                >
                  {section.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
