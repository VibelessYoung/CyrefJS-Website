"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Box,
  CalendarDays,
  Hash,
  Layers3,
  Menu,
  Package,
  Rocket,
  Search,
  Type,
  UserRound,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import ThemeButton from "@/components/navigation/ThemeButton";
import { getTranslations } from "@/lib/i18n";
import { docs } from "@/data/docs/index";
import type { DocCategory, DocPage } from "@/data/docs/types";
import type { Locale } from "@/types/i18n";

interface DocsLayoutProps {
  children: React.ReactNode;
  locale: Locale;
}

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

export default function DocsLayout({ children, locale }: DocsLayoutProps) {
  const t = getTranslations(locale);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

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

      return (
        title.includes(value) ||
        description.includes(value) ||
        item.slug.toLowerCase().includes(value)
      );
    });
  }, [items, locale, query]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isShortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (isShortcut) {
        event.preventDefault();
        setSearchOpen(true);
      }

      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
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
                hover:bg-black/5
                lg:hidden
                dark:text-zinc-400
                dark:hover:bg-white/5
              "
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
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
              onClick={() => setSearchOpen(true)}
              className="
                hidden h-9
                items-center gap-2
                rounded-lg
                border border-black/[0.07]
                bg-black/[0.025]
                px-3
                text-xs
                text-zinc-500
                sm:flex
                dark:border-white/[0.08]
                dark:bg-white/[0.025]
                dark:text-zinc-400
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
                ⌘ K
              </kbd>
            </button>

            {/* Mobile search */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-lg
                text-zinc-500
                sm:hidden
                dark:text-zinc-400
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
                hover:bg-black/5
                dark:text-zinc-400
                dark:hover:bg-white/5
              "
            >
              {locale === "en" ? "فا" : "EN"}
            </Link>

            <ThemeButton />

            {/* GitHub */}
            <a
              href="https://github.com/VibelessYoung/CyrefJS"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden h-9 w-9
                items-center justify-center
                rounded-lg
                text-zinc-500
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
            className="
              absolute bottom-0 left-0 top-16
              w-[290px]
              overflow-y-auto
              border-r border-black/[0.07]
              bg-white
              px-4 py-6
              dark:border-white/[0.07]
              dark:bg-[#050505]
            "
          >
            <SidebarContent
              locale={locale}
              sections={sections}
              onNavigate={() => setMobileOpen(false)}
            />
          </aside>
        </div>
      )}

      <div className="mx-auto flex max-w-[1600px]">
        {/* Desktop sidebar */}
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
          <SidebarContent locale={locale} sections={sections} />
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
          "
          onClick={() => setSearchOpen(false)}
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
            "
          >
            <div
              className="
                flex items-center gap-3
                border-b border-black/[0.07]
                px-4
                dark:border-white/[0.07]
              "
            >
              <Search size={18} className="text-zinc-400" />

              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t.docs.search}
                className="
                  h-14 min-w-0 flex-1
                  bg-transparent
                  text-sm
                  outline-none
                  placeholder:text-zinc-400
                "
              />

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
                ESC
              </kbd>
            </div>

            <div className="max-h-[420px] overflow-y-auto p-2">
              {!query && (
                <div
                  className="
                    px-4 py-12
                    text-center
                    text-sm
                    text-zinc-400
                  "
                >
                  {t.docs.searchHint}
                </div>
              )}

              {query && results.length === 0 && (
                <div
                  className="
                    px-4 py-12
                    text-center
                    text-sm
                    text-zinc-400
                  "
                >
                  {t.docs.noResults}
                </div>
              )}

              {results.map((item: DocPage) => {
                const Icon = getCategoryIcon(item.category);

                return (
                  <Link
                    key={item.slug}
                    href={`/${locale}/docs/${item.slug}`}
                    onClick={() => {
                      setSearchOpen(false);
                      setQuery("");
                    }}
                    className="
                      flex items-center gap-3
                      rounded-xl
                      px-3 py-3
                      transition-colors
                      hover:bg-black/[0.04]
                      dark:hover:bg-white/[0.05]
                    "
                  >
                    <span
                      className="
                        flex h-9 w-9
                        shrink-0
                        items-center justify-center
                        rounded-lg
                        bg-black/[0.04]
                        text-zinc-500
                        dark:bg-white/[0.06]
                        dark:text-zinc-400
                      "
                    >
                      <Icon size={16} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm font-medium">
                        {item.title[locale]}
                      </span>

                      <span
                        className="
                          mt-0.5 block
                          truncate
                          text-xs
                          text-zinc-400
                        "
                      >
                        {item.description[locale]}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface SidebarContentProps {
  locale: Locale;
  sections: ReturnType<typeof getCategorySections>;
  onNavigate?: () => void;
}

function SidebarContent({ locale, sections, onNavigate }: SidebarContentProps) {
  return (
    <nav>
      {/* Overview */}
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
          {locale === "fa" ? "مستندات" : "Documentation"}
        </p>

        <div className="space-y-0.5">
          <Link
            href={`/${locale}/docs`}
            onClick={onNavigate}
            className="
              group
              flex items-center gap-3
              rounded-lg
              px-3 py-2.5
              text-sm
              text-zinc-500
              transition-colors
              hover:bg-black/[0.04]
              hover:text-zinc-900
              dark:text-zinc-400
              dark:hover:bg-white/[0.05]
              dark:hover:text-white
            "
          >
            <BookOpen
              size={16}
              strokeWidth={1.7}
              className="
                shrink-0
                text-zinc-400
                dark:text-zinc-500
              "
            />

            <span>{locale === "fa" ? "نمای کلی" : "Overview"}</span>
          </Link>
        </div>
      </div>

      {/* Registry categories */}
      {sections.map((section) => (
        <div key={section.category} className="mb-8">
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
            {section.title}
          </p>

          <div className="space-y-0.5">
            {section.items.map((item) => {
              const Icon = getCategoryIcon(item.category);

              return (
                <Link
                  key={item.slug}
                  href={`/${locale}/docs/${item.slug}`}
                  onClick={onNavigate}
                  className="
                    group
                    flex items-center gap-3
                    rounded-lg
                    px-3 py-2.5
                    text-sm
                    text-zinc-500
                    transition-colors
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

                  <span>{item.title[locale]}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      {/* External / contact links */}
      <div className="mt-10">
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
            transition-colors
            hover:bg-black/[0.04]
            hover:text-zinc-900
            dark:text-zinc-400
            dark:hover:bg-white/[0.05]
            dark:hover:text-white
          "
        >
          <ArrowUpRight size={16} />

          <span>GitHub</span>
        </a>

        <Link
          href={`/${locale}#contact`}
          onClick={onNavigate}
          className="
            mt-0.5
            flex items-center gap-3
            rounded-lg
            px-3 py-2.5
            text-sm
            text-zinc-500
            hover:bg-black/[0.04]
            hover:text-zinc-900
            dark:text-zinc-400
            dark:hover:bg-white/[0.05]
            dark:hover:text-white
          "
        >
          <UserRound size={16} />

          <span>{locale === "fa" ? "تماس" : "Contact"}</span>
        </Link>
      </div>

      {/* Version */}
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
          CyrefJS v1.38.0
        </span>
      </div>
    </nav>
  );
}
