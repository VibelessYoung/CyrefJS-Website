"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Package, Rocket } from "lucide-react";

import CodeBlock from "./CodeBlock";

import type { Locale } from "@/types/i18n";
import type { DocsItem } from "@/data/docs";

interface DocsPageProps {
  locale: Locale;
  item: DocsItem;
}

export default function DocsPage({ locale, item }: DocsPageProps) {
  const isFa = locale === "fa";

  const content = getContent(item.slug, locale);

  return (
    <article
      className="
        mx-auto
        max-w-4xl
        px-6 py-14
        sm:px-10
        lg:px-16
        lg:py-20
      "
    >
      {/* Breadcrumb */}
      <div
        className="
          mb-8 flex items-center gap-2
          text-xs
          text-zinc-400
          dark:text-zinc-500
        "
      >
        <Link
          href={`/${locale}/docs`}
          className="hover:text-zinc-800 dark:hover:text-zinc-200"
        >
          Docs
        </Link>

        <span>/</span>

        <span>{item.title[locale]}</span>
      </div>

      {/* Header */}
      <header>
        <div
          className="
            flex h-11 w-11
            items-center justify-center
            rounded-xl
            bg-blue-500/10
            text-blue-600
            dark:bg-blue-400/10
            dark:text-blue-300
          "
        >
          {item.slug === "installation" ? (
            <Package size={20} />
          ) : item.slug === "quick-start" ? (
            <Rocket size={20} />
          ) : (
            <BookOpen size={20} />
          )}
        </div>

        <h1
          className="
            mt-6
            text-4xl font-semibold
            tracking-[-0.035em]
            sm:text-5xl
          "
        >
          {content.title}
        </h1>

        <p
          className="
            mt-5 max-w-2xl
            text-base leading-8
            text-zinc-500
            dark:text-zinc-400
          "
        >
          {content.description}
        </p>
      </header>

      {/* Content */}
      <div
        className="
          mt-12
          text-[15px]
          leading-8
          text-zinc-700
          dark:text-zinc-300
        "
      >
        {content.body.map((block, index) => {
          if (block.type === "heading") {
            return (
              <h2
                key={index}
                className="
                    mb-4 mt-12
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-zinc-950
                    dark:text-white
                  "
              >
                {block.text}
              </h2>
            );
          }

          if (block.type === "paragraph") {
            return (
              <p key={index} className="mb-6">
                {block.text}
              </p>
            );
          }

          if (block.type === "code") {
            return (
              <CodeBlock
                key={index}
                code={block.code}
                language={block.language}
              />
            );
          }

          return null;
        })}
      </div>

      {/* Navigation */}
      <div
        className="
          mt-16
          grid gap-3
          border-t border-black/[0.07]
          pt-8
          sm:grid-cols-2
          dark:border-white/[0.07]
        "
      >
        <Link
          href={`/${locale}/docs`}
          className="
            group
            rounded-xl
            border border-black/[0.07]
            p-4
            transition-colors
            hover:bg-black/[0.025]
            dark:border-white/[0.08]
            dark:hover:bg-white/[0.03]
          "
        >
          <span
            className="
              flex items-center gap-2
              text-xs
              text-zinc-400
            "
          >
            <ArrowLeft size={13} className={isFa ? "rotate-180" : ""} />

            {isFa ? "بازگشت به مستندات" : "Back to docs"}
          </span>
        </Link>
      </div>
    </article>
  );
}

interface Content {
  title: string;
  description: string;
  body: Array<
    | {
        type: "heading";
        text: string;
      }
    | {
        type: "paragraph";
        text: string;
      }
    | {
        type: "code";
        code: string;
        language?: string;
      }
  >;
}

function getContent(slug: string, locale: Locale): Content {
  if (slug === "installation") {
    return locale === "fa"
      ? {
          title: "نصب CyrefJS",
          description:
            "CyrefJS را در پروژه JavaScript یا TypeScript خود نصب کنید.",
          body: [
            {
              type: "paragraph",
              text: "برای شروع کافی است پکیج CyrefJS را با package manager موردنظر خود به پروژه اضافه کنید.",
            },
            {
              type: "heading",
              text: "npm",
            },
            {
              type: "code",
              language: "bash",
              code: "npm install @cyref/js",
            },
            {
              type: "heading",
              text: "pnpm",
            },
            {
              type: "code",
              language: "bash",
              code: "pnpm add @cyref/js",
            },
            {
              type: "heading",
              text: "yarn",
            },
            {
              type: "code",
              language: "bash",
              code: "yarn add @cyref/js",
            },
            {
              type: "heading",
              text: "bun",
            },
            {
              type: "code",
              language: "bash",
              code: "bun add @cyref/js",
            },
          ],
        }
      : {
          title: "Install CyrefJS",
          description:
            "Install CyrefJS in your JavaScript or TypeScript project.",
          body: [
            {
              type: "paragraph",
              text: "Add CyrefJS to your project using the package manager you already use.",
            },
            {
              type: "heading",
              text: "npm",
            },
            {
              type: "code",
              language: "bash",
              code: "npm install @cyref/js",
            },
            {
              type: "heading",
              text: "pnpm",
            },
            {
              type: "code",
              language: "bash",
              code: "pnpm add @cyref/js",
            },
            {
              type: "heading",
              text: "yarn",
            },
            {
              type: "code",
              language: "bash",
              code: "yarn add @cyref/js",
            },
            {
              type: "heading",
              text: "bun",
            },
            {
              type: "code",
              language: "bash",
              code: "bun add @cyref/js",
            },
          ],
        };
  }

  if (slug === "quick-start") {
    return locale === "fa"
      ? {
          title: "شروع سریع",
          description:
            "اولین utility خود را در چند خط کد با CyrefJS استفاده کنید.",
          body: [
            {
              type: "heading",
              text: "Import کردن utility",
            },
            {
              type: "code",
              language: "ts",
              code: 'import { chunk } from "@cyref/js";',
            },
            {
              type: "heading",
              text: "استفاده از chunk",
            },
            {
              type: "code",
              language: "ts",
              code: `const numbers = [1, 2, 3, 4, 5, 6, 7];

const result = chunk(numbers, 3);

console.log(result);`,
            },
            {
              type: "heading",
              text: "خروجی",
            },
            {
              type: "code",
              language: "ts",
              code: `[
  [1, 2, 3],
  [4, 5, 6],
  [7]
]`,
            },
          ],
        }
      : {
          title: "Quick Start",
          description:
            "Use your first CyrefJS utility in just a few lines of code.",
          body: [
            {
              type: "heading",
              text: "Import a utility",
            },
            {
              type: "code",
              language: "ts",
              code: 'import { chunk } from "@cyref/js";',
            },
            {
              type: "heading",
              text: "Use chunk",
            },
            {
              type: "code",
              language: "ts",
              code: `const numbers = [1, 2, 3, 4, 5, 6, 7];

const result = chunk(numbers, 3);

console.log(result);`,
            },
            {
              type: "heading",
              text: "Output",
            },
            {
              type: "code",
              language: "ts",
              code: `[
  [1, 2, 3],
  [4, 5, 6],
  [7]
]`,
            },
          ],
        };
  }

  if (slug === "utilities/chunk") {
    return locale === "fa"
      ? {
          title: "chunk",
          description: "آرایه را به بخش‌هایی با اندازه مشخص تقسیم می‌کند.",
          body: [
            {
              type: "heading",
              text: "استفاده",
            },
            {
              type: "code",
              language: "ts",
              code: `import { chunk } from "@cyref/js";

const result = chunk(
  [1, 2, 3, 4, 5, 6, 7],
  3,
);`,
            },
            {
              type: "heading",
              text: "خروجی",
            },
            {
              type: "code",
              language: "ts",
              code: `[
  [1, 2, 3],
  [4, 5, 6],
  [7]
]`,
            },
            {
              type: "heading",
              text: "نکته",
            },
            {
              type: "paragraph",
              text: "اندازه chunk باید بزرگ‌تر از صفر باشد. در غیر این صورت utility یک Error ایجاد می‌کند.",
            },
          ],
        }
      : {
          title: "chunk",
          description:
            "Split an array into smaller arrays of a specified size.",
          body: [
            {
              type: "heading",
              text: "Usage",
            },
            {
              type: "code",
              language: "ts",
              code: `import { chunk } from "@cyref/js";

const result = chunk(
  [1, 2, 3, 4, 5, 6, 7],
  3,
);`,
            },
            {
              type: "heading",
              text: "Output",
            },
            {
              type: "code",
              language: "ts",
              code: `[
  [1, 2, 3],
  [4, 5, 6],
  [7]
]`,
            },
            {
              type: "heading",
              text: "Note",
            },
            {
              type: "paragraph",
              text: "The chunk size must be greater than zero. Otherwise, the utility throws an Error.",
            },
          ],
        };
  }

  if (slug === "utilities") {
    return locale === "fa"
      ? {
          title: "Utilities",
          description:
            "مجموعه ابزارهای سبک و کاربردی CyrefJS برای توسعه روزمره.",
          body: [
            {
              type: "paragraph",
              text: "CyrefJS مجموعه‌ای از utilityهای کوچک و قابل استفاده مجدد ارائه می‌دهد که برای ساده‌تر کردن کارهای تکراری JavaScript و TypeScript طراحی شده‌اند.",
            },
            {
              type: "heading",
              text: "Array",
            },
            {
              type: "paragraph",
              text: "ابزارهای مرتبط با کار روی آرایه‌ها.",
            },
            {
              type: "heading",
              text: "String",
            },
            {
              type: "paragraph",
              text: "ابزارهای مرتبط با پردازش رشته‌ها.",
            },
            {
              type: "heading",
              text: "Object",
            },
            {
              type: "paragraph",
              text: "ابزارهای مرتبط با آبجکت‌ها.",
            },
          ],
        }
      : {
          title: "Utilities",
          description:
            "A collection of lightweight utilities for everyday JavaScript and TypeScript development.",
          body: [
            {
              type: "paragraph",
              text: "CyrefJS provides small, reusable utilities designed to simplify repetitive JavaScript and TypeScript tasks.",
            },
            {
              type: "heading",
              text: "Array",
            },
            {
              type: "paragraph",
              text: "Utilities for working with arrays.",
            },
            {
              type: "heading",
              text: "String",
            },
            {
              type: "paragraph",
              text: "Utilities for working with strings.",
            },
            {
              type: "heading",
              text: "Object",
            },
            {
              type: "paragraph",
              text: "Utilities for working with objects.",
            },
          ],
        };
  }

  return locale === "fa"
    ? {
        title: "CyrefJS",
        description: "یک کتابخانه سبک و مدرن برای JavaScript و TypeScript.",
        body: [
          {
            type: "paragraph",
            text: "CyrefJS برای ساده‌تر کردن کارهای تکراری در پروژه‌های مدرن JavaScript و TypeScript ساخته شده است.",
          },
          {
            type: "heading",
            text: "شروع کنید",
          },
          {
            type: "paragraph",
            text: "برای شروع، ابتدا CyrefJS را نصب کنید و سپس راهنمای Quick Start را دنبال کنید.",
          },
        ],
      }
    : {
        title: "Introduction",
        description:
          "A lightweight utility library for modern JavaScript and TypeScript.",
        body: [
          {
            type: "paragraph",
            text: "CyrefJS is designed to simplify repetitive tasks in modern JavaScript and TypeScript projects.",
          },
          {
            type: "heading",
            text: "Get started",
          },
          {
            type: "paragraph",
            text: "Install CyrefJS first, then continue with the Quick Start guide.",
          },
        ],
      };
}
