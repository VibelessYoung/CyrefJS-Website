"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

import { docs } from "@/data/docs/index";
import type { DocCategory } from "@/data/docs/types";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/types/i18n";

interface DocsSidebarProps {
  locale: Locale;
}

const CYREF_VERSION = "1.38.0";

const categoryIcons: Record<
  Exclude<DocCategory, "getting-started">,
  typeof Layers3
> = {
  array: Layers3,
  string: Type,
  object: Box,
  number: Hash,
  date: CalendarDays,
  function: Workflow,
  type: Braces,
  url: Rocket,
  validation: Layers3,
};

const categoryLabels: Record<
  Exclude<DocCategory, "getting-started">,
  {
    en: string;
    fa: string;
  }
> = {
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

function getCategoryLabel(
  category: Exclude<DocCategory, "getting-started">,
  locale: Locale,
) {
  return categoryLabels[category][locale];
}

function getDocsByCategory(category: Exclude<DocCategory, "getting-started">) {
  return docs.filter((doc) => doc.category === category);
}

export default function DocsSidebar({ locale }: DocsSidebarProps) {
  const pathname = usePathname();
  const t = getTranslations(locale);
  const isFa = locale === "fa";

  const gettingStarted = [
    {
      label: t.docs.sidebar.introduction,
      href: `/${locale}/docs`,
      icon: FileCode2,
    },
    {
      label: t.docs.sidebar.installation,
      href: `/${locale}/docs/getting-started/installation`,
      icon: Package,
    },
    {
      label: t.docs.sidebar.quickStart,
      href: `/${locale}/docs/getting-started/quick-start`,
      icon: Rocket,
    },
  ];

  const utilityCategories = [
    "array",
    "string",
    "object",
    "number",
    "date",
    "function",
    "type",
    "url",
    "validation",
  ] as const;

  function isActive(href: string) {
    if (href === `/${locale}/docs`) {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <aside
      dir={isFa ? "rtl" : "ltr"}
      className="
        sticky top-16
        hidden h-[calc(100vh-4rem)]
        w-[260px] shrink-0
        overflow-y-auto
        border-r border-black/[0.07]
        bg-white
        px-4 py-7
        scrollbar-thin
        lg:block
        dark:border-white/[0.07]
        dark:bg-[#050505]
      "
    >
      <nav className="flex min-h-full flex-col">
        {/* Getting Started */}
        <SidebarSection title={t.docs.sidebar.gettingStarted}>
          <div className="space-y-0.5">
            {gettingStarted.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <SidebarLink
                  key={item.href}
                  href={item.href}
                  active={active}
                  icon={Icon}
                >
                  {item.label}
                </SidebarLink>
              );
            })}
          </div>
        </SidebarSection>

        {/* Utilities */}
        <SidebarSection title={t.docs.sidebar.utilities} className="mt-9">
          <div className="space-y-0.5">
            {utilityCategories.map((category) => {
              const categoryDocs = getDocsByCategory(category);

              if (categoryDocs.length === 0) {
                return null;
              }

              const firstDoc = categoryDocs[0];
              const href = `/${locale}/docs/${firstDoc.slug}`;
              const active = categoryDocs.some(
                (doc) =>
                  pathname === `/${locale}/docs/${doc.slug}` ||
                  pathname.startsWith(`/${locale}/docs/${doc.slug}/`),
              );

              const Icon = categoryIcons[category];

              return (
                <SidebarLink
                  key={category}
                  href={href}
                  active={active}
                  icon={Icon}
                >
                  {getCategoryLabel(category, locale)}
                </SidebarLink>
              );
            })}
          </div>
        </SidebarSection>

        {/* Resources */}
        <SidebarSection title={t.docs.sidebar.resources} className="mt-9">
          <div className="space-y-0.5">
            <a
              href="https://github.com/VibelessYoung/CyrefJS"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex items-center gap-3
                rounded-xl
                px-3 py-2.5
                text-sm
                text-zinc-500
                transition-all duration-200
                hover:bg-black/[0.04]
                hover:text-zinc-950
                dark:text-zinc-400
                dark:hover:bg-white/[0.05]
                dark:hover:text-white
              "
            >
              <Code2
                size={16}
                strokeWidth={1.7}
                className="
                  shrink-0
                  text-zinc-400
                  transition-colors
                  group-hover:text-zinc-600
                  dark:text-zinc-500
                  dark:group-hover:text-zinc-300
                "
              />

              <span>{t.docs.sidebar.github}</span>

              <ArrowUpRight
                size={13}
                className="
                  ml-auto
                  text-zinc-400
                  opacity-0
                  transition-all duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  group-hover:opacity-100
                "
              />
            </a>

            <Link
              href={`/${locale}#contact`}
              className="
                group
                flex items-center gap-3
                rounded-xl
                px-3 py-2.5
                text-sm
                text-zinc-500
                transition-all duration-200
                hover:bg-black/[0.04]
                hover:text-zinc-950
                dark:text-zinc-400
                dark:hover:bg-white/[0.05]
                dark:hover:text-white
              "
            >
              <UserRound
                size={16}
                strokeWidth={1.7}
                className="
                  shrink-0
                  text-zinc-400
                  dark:text-zinc-500
                "
              />

              <span>{t.docs.sidebar.contact}</span>
            </Link>
          </div>
        </SidebarSection>

        {/* Version */}
        <div className="mt-auto pt-10">
          <div
            className="
              rounded-xl
              border border-black/[0.07]
              bg-black/[0.02]
              px-3.5 py-3
              dark:border-white/[0.07]
              dark:bg-white/[0.025]
            "
          >
            <div className="flex items-center gap-2.5">
              <div
                className="
                  flex size-7
                  items-center justify-center
                  rounded-lg
                  bg-zinc-100
                  dark:bg-white/[0.06]
                "
              >
                <Settings2
                  size={13}
                  strokeWidth={1.7}
                  className="text-zinc-500 dark:text-zinc-400"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-600">
                  Version
                </p>

                <p className="truncate text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  CyrefJS v{CYREF_VERSION}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/* Sidebar Section                                                            */
/* -------------------------------------------------------------------------- */

interface SidebarSectionProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

function SidebarSection({
  title,
  className = "",
  children,
}: SidebarSectionProps) {
  return (
    <section className={className}>
      <p
        className="
          mb-3 px-3
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.16em]
          text-zinc-400
          dark:text-zinc-600
        "
      >
        {title}
      </p>

      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Sidebar Link                                                               */
/* -------------------------------------------------------------------------- */

interface SidebarLinkProps {
  href: string;
  active?: boolean;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
  children: React.ReactNode;
}

function SidebarLink({
  href,
  active = false,
  icon: Icon,
  children,
}: SidebarLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`
        group relative
        flex items-center gap-3
        rounded-xl
        px-3 py-2.5
        text-sm
        transition-all duration-200
        ${
          active
            ? "bg-zinc-100 font-medium text-zinc-950 dark:bg-white/[0.07] dark:text-white"
            : "text-zinc-500 hover:bg-black/[0.04] hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[0.045] dark:hover:text-white"
        }
      `}
    >
      {/* Active indicator */}
      {active && (
        <span
          aria-hidden="true"
          className="
            absolute inset-y-2
            left-0
            w-0.5
            rounded-full
            bg-zinc-950
            dark:bg-white
          "
        />
      )}

      <Icon
        size={16}
        strokeWidth={active ? 1.9 : 1.7}
        className={`
          shrink-0
          transition-colors
          ${
            active
              ? "text-zinc-700 dark:text-zinc-200"
              : "text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300"
          }
        `}
      />

      <span className="truncate">{children}</span>
    </Link>
  );
}
