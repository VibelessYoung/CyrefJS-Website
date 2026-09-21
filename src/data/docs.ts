import type { Locale } from "@/types/i18n";

export type DocsIcon =
  | "book"
  | "package"
  | "rocket"
  | "layers"
  | "type"
  | "box"
  | "hash"
  | "calendar"
  | "function"
  | "braces";

export interface DocsItem {
  slug: string;
  icon: DocsIcon;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export interface DocsSection {
  title: Record<Locale, string>;
  items: DocsItem[];
}

export const docsSections: DocsSection[] = [
  {
    title: {
      en: "Getting Started",
      fa: "شروع کار",
    },

    items: [
      {
        slug: "",
        icon: "book",
        title: {
          en: "Introduction",
          fa: "معرفی",
        },
        description: {
          en: "Learn what CyrefJS is and what it is designed for.",
          fa: "با CyrefJS و هدف اصلی آن آشنا شوید.",
        },
      },

      {
        slug: "installation",
        icon: "package",
        title: {
          en: "Installation",
          fa: "نصب",
        },
        description: {
          en: "Install CyrefJS with your preferred package manager.",
          fa: "CyrefJS را با package manager موردنظر خود نصب کنید.",
        },
      },

      {
        slug: "quick-start",
        icon: "rocket",
        title: {
          en: "Quick Start",
          fa: "شروع سریع",
        },
        description: {
          en: "Start using your first CyrefJS utility.",
          fa: "اولین utility خود را با CyrefJS استفاده کنید.",
        },
      },
    ],
  },

  {
    title: {
      en: "Utilities",
      fa: "ابزارها",
    },

    items: [
      {
        slug: "utilities",
        icon: "layers",
        title: {
          en: "Overview",
          fa: "نمای کلی",
        },
        description: {
          en: "Explore the available utility categories.",
          fa: "دسته‌بندی ابزارهای موجود را مشاهده کنید.",
        },
      },

      {
        slug: "utilities/chunk",
        icon: "layers",
        title: {
          en: "chunk",
          fa: "chunk",
        },
        description: {
          en: "Split an array into smaller chunks.",
          fa: "یک آرایه را به بخش‌های کوچک‌تر تقسیم کنید.",
        },
      },

      {
        slug: "utilities/array",
        icon: "layers",
        title: {
          en: "Array",
          fa: "Array",
        },
        description: {
          en: "Array-related utilities.",
          fa: "ابزارهای مرتبط با آرایه.",
        },
      },

      {
        slug: "utilities/string",
        icon: "type",
        title: {
          en: "String",
          fa: "String",
        },
        description: {
          en: "String-related utilities.",
          fa: "ابزارهای مرتبط با رشته.",
        },
      },

      {
        slug: "utilities/object",
        icon: "box",
        title: {
          en: "Object",
          fa: "Object",
        },
        description: {
          en: "Object-related utilities.",
          fa: "ابزارهای مرتبط با آبجکت.",
        },
      },

      {
        slug: "utilities/number",
        icon: "hash",
        title: {
          en: "Number",
          fa: "Number",
        },
        description: {
          en: "Number-related utilities.",
          fa: "ابزارهای مرتبط با اعداد.",
        },
      },

      {
        slug: "utilities/date",
        icon: "calendar",
        title: {
          en: "Date",
          fa: "Date",
        },
        description: {
          en: "Date-related utilities.",
          fa: "ابزارهای مرتبط با تاریخ.",
        },
      },
    ],
  },
];

export function getDocsItem(slug: string): DocsItem | undefined {
  const normalizedSlug = slug.replace(/^\/|\/$/g, "");

  return docsSections
    .flatMap((section) => section.items)
    .find((item) => item.slug === normalizedSlug);
}

export function getAllDocsItems() {
  return docsSections.flatMap((section) => section.items);
}
