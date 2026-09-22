"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

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
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id ?? "",
  );

  useEffect(() => {
    if (!sections.length) {
      return;
    }

    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    if (!sectionElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-96px 0px -60% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  if (sections.length === 0) {
    return null;
  }

  const isFa = locale === "fa";

  return (
    <aside
      className="hidden xl:block"
      aria-label={isFa ? "فهرست این صفحه" : "On this page"}
    >
      <div className="sticky top-24 w-56">
        <p
          className="
            mb-4
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-zinc-500
            dark:text-zinc-500
          "
        >
          {isFa ? "در این صفحه" : "On this page"}
        </p>

        <nav>
          <ul
            className={[
              "space-y-1 border-zinc-200 dark:border-white/10",
              isFa ? "border-s" : "border-s",
            ].join(" ")}
          >
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    aria-current={isActive ? "location" : undefined}
                    className={[
                      "block border-s py-1.5 text-sm transition-all duration-200",
                      isFa ? "pe-4" : "ps-4",
                      isActive
                        ? "-ms-px border-zinc-950 font-medium text-zinc-950 dark:border-white dark:text-white"
                        : "-ms-px border-transparent text-zinc-500 hover:border-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:border-zinc-600 dark:hover:text-white",
                    ].join(" ")}
                  >
                    {section.title[locale]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
