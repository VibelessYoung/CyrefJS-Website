"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  BookOpen,
  Box,
  CalendarDays,
  ChevronDown,
  Hash,
  Layers3,
  Menu,
  Package,
  Rocket,
  Search,
  Type,
  Workflow,
  X,
} from "lucide-react";

import { useEffect, useMemo, useRef, useState } from "react";

import ThemeButton from "@/components/navigation/ThemeButton";
import { docs } from "@/data/docs/index";
import type { DocCategory, DocPage } from "@/data/docs/types";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/types/i18n";

interface DocsLayoutProps {
  children: React.ReactNode;
  locale: Locale;
  version: string;
}

const GITHUB_URL = "https://github.com/VibelessYoung/CyrefJS";

const icons = {
  "getting-started": BookOpen,
  array: Package,
  string: Type,
  object: Box,
  number: Hash,
  date: CalendarDays,
  function: Workflow,
  type: Type,
  url: Rocket,
  validation: Layers3,
} as const;

type CategoryIcon = keyof typeof icons;

const categoryLabels: Record<DocCategory, Record<Locale, string>> = {
  "getting-started": {
    en: "Getting Started",
    fa: "شروع کار",
  },
  array: {
    en: "Array",
    fa: "آرایه",
  },
  string: {
    en: "String",
    fa: "رشته",
  },
  object: {
    en: "Object",
    fa: "آبجکت",
  },
  number: {
    en: "Number",
    fa: "عدد",
  },
  date: {
    en: "Date",
    fa: "تاریخ",
  },
  function: {
    en: "Function",
    fa: "تابع",
  },
  type: {
    en: "Type",
    fa: "نوع",
  },
  url: {
    en: "URL",
    fa: "URL",
  },
  validation: {
    en: "Validation",
    fa: "اعتبارسنجی",
  },
};

function getCategoryIcon(category: DocCategory) {
  return icons[category as CategoryIcon];
}

function getCategorySections(locale: Locale) {
  const categories = Array.from(new Set(docs.map((doc) => doc.category)));

  return categories.map((category) => ({
    category,
    title: categoryLabels[category][locale],
    items: docs.filter((doc) => doc.category === category),
  }));
}

function HighlightMatch({ text, query }: { text: string; query: string }) {
  const value = query.trim();

  if (!value) {
    return <>{text}</>;
  }

  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const parts = text.split(new RegExp(`(${escaped})`, "gi"));

  return (
    <>
      {parts.map((part, index) => {
        const isMatch = part.toLowerCase() === value.toLowerCase();

        return isMatch ? (
          <mark
            key={`${part}-${index}`}
            className="rounded bg-zinc-200 px-0.5 text-zinc-950 dark:bg-white/15 dark:text-white"
          >
            {part}
          </mark>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        );
      })}
    </>
  );
}

export default function DocsLayout({
  children,
  locale,
  version,
}: DocsLayoutProps) {
  const t = getTranslations(locale);
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const isFa = locale === "fa";

  const items = docs;

  const sections = useMemo(() => getCategorySections(locale), [locale]);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return [];
    }

    return items.filter((item: DocPage) => {
      const title = item.title[locale].toLowerCase();
      const description = item.description[locale].toLowerCase();
      const slug = item.slug.toLowerCase();
      const category = categoryLabels[item.category][locale].toLowerCase();

      return (
        title.includes(value) ||
        description.includes(value) ||
        slug.includes(value) ||
        category.includes(value)
      );
    });
  }, [items, locale, query]);

  useEffect(() => {
    function handleGlobalKeyDown(event: KeyboardEvent) {
      const isShortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (isShortcut) {
        event.preventDefault();
        setSearchOpen(true);
        return;
      }

      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    }

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!searchOpen) {
      return;
    }

    const timeout = window.setTimeout(() => {
      searchInputRef.current?.focus();
    }, 50);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) {
      return;
    }

    function handleSearchKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setSearchOpen(false);
        return;
      }

      if (!results.length) {
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();

        setSelectedIndex((current) =>
          current < results.length - 1 ? current + 1 : 0,
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        setSelectedIndex((current) =>
          current > 0 ? current - 1 : results.length - 1,
        );
      }

      if (event.key === "Enter") {
        event.preventDefault();

        const selectedDoc = results[selectedIndex];

        if (!selectedDoc) {
          return;
        }

        router.push(`/${locale}/docs/${selectedDoc.slug}`);

        setSearchOpen(false);
        setQuery("");
        setSelectedIndex(0);
      }
    }

    window.addEventListener("keydown", handleSearchKeyDown);

    return () => {
      window.removeEventListener("keydown", handleSearchKeyDown);
    };
  }, [searchOpen, results, selectedIndex, locale, router]);

  function closeSearch() {
    setSearchOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }

  function openSearch() {
    setSearchOpen(true);
    setMobileOpen(false);
  }

  return (
    <div
      dir={isFa ? "rtl" : "ltr"}
      className="
        min-h-screen
        bg-white text-zinc-900
        dark:bg-[#050505] dark:text-white
      "
    >
      {/* Header */}
      <header
        className="
          sticky top-0 z-50
          h-16
          border-b border-black/[0.07]
          bg-white/90
          backdrop-blur-xl
          dark:border-white/[0.07]
          dark:bg-[#050505]/90
        "
      >
        <div
          className="
            mx-auto flex h-full
            max-w-[1600px]
            items-center
            justify-between
            px-4 sm:px-6
          "
        >
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-lg
                text-zinc-500
                transition-colors
                hover:bg-black/5
                lg:hidden
                dark:text-zinc-400
                dark:hover:bg-white/5
              "
              aria-label={
                mobileOpen
                  ? isFa
                    ? "بستن منو"
                    : "Close navigation"
                  : isFa
                    ? "باز کردن منو"
                    : "Open navigation"
              }
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={19} /> : <Menu size={19} />}
            </button>

            <Link
              href={`/${locale}`}
              className="flex items-center gap-2.5"
              onClick={() => setMobileOpen(false)}
            >
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

              <span className="text-sm font-semibold">CyrefJS</span>
            </Link>

            <span
              className="
                hidden h-4 w-px
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

          <div className="flex items-center gap-1.5">
            {/* Search */}
            <button
              type="button"
              onClick={openSearch}
              className="
                hidden h-9
                items-center gap-2
                rounded-lg
                border border-black/[0.07]
                bg-black/[0.025]
                px-3
                text-xs
                text-zinc-500
                transition-colors
                hover:bg-black/[0.04]
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
                  ml-4 rounded-md
                  border border-black/10
                  px-1.5 py-0.5
                  font-mono text-[10px]
                  dark:border-white/10
                "
              >
                Ctrl K
              </kbd>
            </button>

            {/* Mobile search */}
            <button
              type="button"
              onClick={openSearch}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-lg
                text-zinc-500
                transition-colors
                hover:bg-black/5
                sm:hidden
                dark:text-zinc-400
                dark:hover:bg-white/5
              "
              aria-label={t.docs.search}
            >
              <Search size={17} />
            </button>

            {/* Language */}
            <Link
              href={locale === "en" ? "/fa/docs" : "/en/docs"}
              className="
                flex h-9 min-w-9
                items-center justify-center
                rounded-lg
                px-2
                text-xs font-medium
                text-zinc-500
                transition-colors
                hover:bg-black/5
                dark:text-zinc-400
                dark:hover:bg-white/5
              "
              aria-label={
                locale === "en" ? "Switch to Persian" : "Switch to English"
              }
            >
              {locale === "en" ? "فا" : "EN"}
            </Link>

            <ThemeButton />

            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden h-9 w-9
                items-center justify-center
                rounded-lg
                text-zinc-500
                transition-colors
                hover:bg-black/5
                sm:flex
                dark:text-zinc-400
                dark:hover:bg-white/5
              "
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px]"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.699-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div
          className="
            fixed inset-0 z-40
            bg-black/30
            backdrop-blur-sm
            lg:hidden
          "
          onClick={() => setMobileOpen(false)}
        >
          <aside
            onClick={(event) => event.stopPropagation()}
            className={[
              "absolute bottom-0 top-16 w-[290px] overflow-y-auto border-black/[0.07] bg-white px-4 py-6 dark:border-white/[0.07] dark:bg-[#050505]",
              isFa ? "right-0 border-l" : "left-0 border-r",
            ].join(" ")}
          >
            <SidebarContent
              locale={locale}
              sections={sections}
              version={version}
              onNavigate={() => setMobileOpen(false)}
            />
          </aside>
        </div>
      )}

      <div className="mx-auto flex max-w-[1600px]">
        {/* Desktop sidebar */}
        <aside
          className={[
            "sticky top-16 hidden h-[calc(100vh-4rem)] w-[260px] shrink-0 overflow-y-auto bg-white px-4 py-7 lg:block dark:bg-[#050505]",
            isFa
              ? "border-l border-black/[0.07] dark:border-white/[0.07]"
              : "border-r border-black/[0.07] dark:border-white/[0.07]",
          ].join(" ")}
        >
          <SidebarContent
            locale={locale}
            sections={sections}
            version={version}
          />
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>

      {/* Search dialog */}
      {searchOpen && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-start justify-center
            bg-black/40
            px-4 pt-[12vh]
            backdrop-blur-md
            animate-in fade-in duration-150
          "
          onClick={closeSearch}
          role="presentation"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="
              w-full max-w-xl
              overflow-hidden
              rounded-2xl
              border border-black/10
              bg-white
              shadow-2xl
              dark:border-white/10
              dark:bg-[#0b0b0b]
              animate-in
              slide-in-from-top-2
              fade-in
              duration-200
            "
            role="dialog"
            aria-modal="true"
            aria-label={t.docs.search}
          >
            {/* Search input */}
            <div
              className="
                flex items-center gap-3
                border-b border-black/[0.07]
                px-4
                dark:border-white/[0.07]
              "
            >
              <Search size={18} className="shrink-0 text-zinc-400" />

              <input
                ref={searchInputRef}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSelectedIndex(0);
                }}
                placeholder={t.docs.search}
                className="
                  h-14 min-w-0 flex-1
                  bg-transparent
                  text-sm
                  outline-none
                  placeholder:text-zinc-400
                "
                aria-label={t.docs.search}
                autoComplete="off"
                spellCheck={false}
              />

              <kbd
                className="
                  shrink-0
                  rounded-md
                  border border-black/10
                  px-2 py-1
                  font-mono text-[10px]
                  text-zinc-400
                  dark:border-white/10
                "
              >
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[460px] overflow-y-auto p-2">
              {!query && (
                <div className="px-4 py-10 text-center">
                  <Search
                    size={24}
                    className="
                      mx-auto mb-3
                      text-zinc-300
                      dark:text-zinc-700
                    "
                  />

                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {t.docs.searchHint}
                  </p>

                  <div className="mt-4 flex items-center justify-center gap-2">
                    <kbd
                      className="
                        rounded-md
                        border border-black/10
                        px-2 py-1
                        font-mono text-[10px]
                        text-zinc-400
                        dark:border-white/10
                      "
                    >
                      ↑
                    </kbd>

                    <kbd
                      className="
                        rounded-md
                        border border-black/10
                        px-2 py-1
                        font-mono text-[10px]
                        text-zinc-400
                        dark:border-white/10
                      "
                    >
                      ↓
                    </kbd>

                    <span className="text-[10px] text-zinc-400">
                      {isFa ? "انتخاب" : "Navigate"}
                    </span>

                    <kbd
                      className="
                        ml-2 rounded-md
                        border border-black/10
                        px-2 py-1
                        font-mono text-[10px]
                        text-zinc-400
                        dark:border-white/10
                      "
                    >
                      Enter
                    </kbd>
                  </div>
                </div>
              )}

              {query && results.length === 0 && (
                <div className="px-4 py-12 text-center">
                  <Search
                    size={24}
                    className="
                      mx-auto mb-3
                      text-zinc-300
                      dark:text-zinc-700
                    "
                  />

                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    {t.docs.noResults}
                  </p>

                  <p className="mt-1 text-xs text-zinc-400">
                    {isFa
                      ? "عبارت دیگری را امتحان کنید."
                      : "Try searching for something else."}
                  </p>
                </div>
              )}

              {results.map((item, index) => {
                const isSelected = index === selectedIndex;

                const Icon = getCategoryIcon(item.category);

                return (
                  <Link
                    key={item.slug}
                    href={`/${locale}/docs/${item.slug}`}
                    onClick={() => {
                      setSearchOpen(false);
                      setQuery("");
                      setSelectedIndex(0);
                    }}
                    className={[
                      "group block rounded-xl px-4 py-3 transition-colors",
                      isSelected
                        ? "bg-zinc-100 dark:bg-white/[0.06]"
                        : "hover:bg-zinc-50 dark:hover:bg-white/[0.03]",
                    ].join(" ")}
                    aria-current={isSelected ? "page" : undefined}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          flex h-9 w-9
                          shrink-0
                          items-center justify-center
                          rounded-lg
                          border border-black/[0.07]
                          bg-black/[0.025]
                          text-zinc-500
                          dark:border-white/[0.08]
                          dark:bg-white/[0.025]
                          dark:text-zinc-400
                        "
                      >
                        <Icon size={16} strokeWidth={1.7} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="truncate text-sm font-medium text-zinc-950 dark:text-white">
                            <HighlightMatch
                              text={item.title[locale]}
                              query={query}
                            />
                          </p>

                          <span
                            className="
                              hidden shrink-0
                              rounded-md
                              border border-black/[0.07]
                              px-1.5 py-0.5
                              text-[9px]
                              font-medium
                              uppercase
                              tracking-wider
                              text-zinc-400
                              sm:inline-flex
                              dark:border-white/[0.08]
                              dark:text-zinc-500
                            "
                          >
                            {categoryLabels[item.category][locale]}
                          </span>
                        </div>

                        <p
                          className="
                            mt-1 truncate
                            text-xs
                            text-zinc-500
                            dark:text-zinc-500
                          "
                        >
                          <HighlightMatch
                            text={item.description[locale]}
                            query={query}
                          />
                        </p>
                      </div>

                      {isSelected && (
                        <div
                          className="
                            hidden shrink-0
                            items-center gap-1.5
                            sm:flex
                          "
                        >
                          <kbd
                            className="
                              rounded-md
                              border border-black/10
                              px-1.5 py-1
                              font-mono text-[9px]
                              text-zinc-400
                              dark:border-white/10
                            "
                          >
                            ↵
                          </kbd>
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Footer */}
            {query && results.length > 0 && (
              <div
                className="
                  flex items-center justify-between
                  border-t border-black/[0.07]
                  px-4 py-2.5
                  text-[10px]
                  text-zinc-400
                  dark:border-white/[0.07]
                "
              >
                <span>
                  {results.length}{" "}
                  {isFa ? "نتیجه" : results.length === 1 ? "result" : "results"}
                </span>

                <div className="flex items-center gap-2">
                  <span>↑↓</span>
                  <span>{isFa ? "انتخاب" : "Navigate"}</span>

                  <span className="mx-1">·</span>

                  <span>↵</span>
                  <span>{isFa ? "باز کردن" : "Open"}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

interface SidebarContentProps {
  locale: Locale;
  sections: ReturnType<typeof getCategorySections>;
  version: string;
  onNavigate?: () => void;
}

function SidebarContent({
  locale,
  sections,
  version,
  onNavigate,
}: SidebarContentProps) {
  const pathname = usePathname();
  const isFa = locale === "fa";

  const activeCategory = sections.find((section) =>
    section.items.some((item) => pathname === `/${locale}/docs/${item.slug}`),
  )?.category;

  const [openCategories, setOpenCategories] = useState<Set<DocCategory>>(
    () => new Set(activeCategory ? [activeCategory] : []),
  );

  useEffect(() => {
    if (activeCategory) {
      setOpenCategories((current) => {
        const next = new Set(current);
        next.add(activeCategory);
        return next;
      });
    }
  }, [activeCategory]);

  function toggleCategory(category: DocCategory) {
    setOpenCategories((current) => {
      const next = new Set(current);

      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }

      return next;
    });
  }

  return (
    <nav aria-label={isFa ? "مستندات" : "Documentation"}>
      {/* ==================================================
          Overview
      ================================================== */}
      <div className="mb-8">
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
          {isFa ? "مستندات" : "Documentation"}
        </p>

        <div className="space-y-0.5">
          <Link
            href={`/${locale}/docs`}
            onClick={onNavigate}
            className={[
              "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
              pathname === `/${locale}/docs`
                ? "bg-zinc-100 font-medium text-zinc-950 dark:bg-white/[0.06] dark:text-white"
                : "text-zinc-500 hover:bg-black/[0.04] hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/[0.05] dark:hover:text-white",
            ].join(" ")}
          >
            {pathname === `/${locale}/docs` && (
              <span
                className={[
                  "absolute inset-y-1.5 w-0.5 rounded-full bg-zinc-950 dark:bg-white",
                  isFa ? "right-0" : "left-0",
                ].join(" ")}
              />
            )}

            <BookOpen
              size={16}
              strokeWidth={1.7}
              className="
                shrink-0
                text-zinc-400
                dark:text-zinc-500
              "
            />

            <span>{isFa ? "نمای کلی" : "Overview"}</span>
          </Link>
        </div>
      </div>

      {/* ==================================================
          Categories
      ================================================== */}
      <div className="space-y-2">
        {sections.map((section) => {
          const Icon = getCategoryIcon(section.category);

          const isGettingStarted = section.category === "getting-started";

          const isOpen =
            isGettingStarted || openCategories.has(section.category);

          return (
            <div
              key={section.category}
              className={section.category !== "getting-started" ? "pt-3" : ""}
            >
              {/* Category Header */}
              <button
                type="button"
                onClick={() =>
                  !isGettingStarted && toggleCategory(section.category)
                }
                className={[
                  "group flex w-full items-center gap-2 rounded-lg px-3 py-2",
                  "text-start transition-colors",
                  isGettingStarted
                    ? "cursor-default"
                    : "cursor-pointer hover:bg-black/[0.035] dark:hover:bg-white/[0.035]",
                ].join(" ")}
              >
                <Icon
                  className="
                    size-3.5
                    shrink-0
                    text-zinc-400
                    dark:text-zinc-500
                  "
                />

                <span
                  className="
                    flex-1
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-zinc-400
                    dark:text-zinc-500
                  "
                >
                  {section.title}
                </span>

                {!isGettingStarted && (
                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                    className={[
                      "shrink-0 text-zinc-400 transition-transform duration-200",
                      "dark:text-zinc-500",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                )}
              </button>

              {/* Category Items */}
              <div
                id={`docs-category-${section.category}`}
                className={[
                  "grid transition-[grid-template-rows] duration-200 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                ].join(" ")}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="mt-1 space-y-1">
                    {section.items.map((item) => {
                      const href = `/${locale}/docs/${item.slug}`;
                      const isActive = pathname === href;

                      return (
                        <Link
                          key={item.slug}
                          href={href}
                          onClick={onNavigate}
                          className={[
                            "group relative flex items-center rounded-lg px-3 py-2 text-sm transition-colors",
                            isActive
                              ? "bg-zinc-100 font-medium text-zinc-950 dark:bg-white/[0.06] dark:text-white"
                              : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[0.04] dark:hover:text-white",
                          ].join(" ")}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {isActive && (
                            <span
                              className={[
                                "absolute inset-y-1.5 w-0.5 rounded-full bg-zinc-950 dark:bg-white",
                                isFa ? "right-0" : "left-0",
                              ].join(" ")}
                            />
                          )}

                          <span className="truncate">{item.title[locale]}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ==================================================
          Version
      ================================================== */}
      <div
        className="
          mt-8
          rounded-xl
          border border-black/[0.07]
          bg-black/[0.02]
          px-3 py-3
          dark:border-white/[0.07]
          dark:bg-white/[0.025]
        "
      >
        <span
          className="
            text-xs
            text-zinc-400
            dark:text-zinc-500
          "
        >
          CyrefJS v{version}
        </span>
      </div>
    </nav>
  );
}
