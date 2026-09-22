import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Braces,
  CircleAlert,
  CircleCheck,
  Package,
} from "lucide-react";

import CodeBlock from "./CodeBlock";
import DocsPagination from "./DocsPagination";
import DocsTableOfContents from "./DocsTableOfContents";

import { docs } from "@/data/docs/index";
import type { DocPage } from "@/data/docs/types";
import type { Locale } from "@/types/i18n";

interface DocsPageProps {
  locale: Locale;
  doc?: DocPage;
}

const categoryLabels: Record<DocPage["category"], { en: string; fa: string }> =
  {
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

function getCategoryLabel(category: DocPage["category"], locale: Locale) {
  return categoryLabels[category][locale];
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
      {children}
    </h2>
  );
}

export default function DocsPage({ locale, doc }: DocsPageProps) {
  const isFa = locale === "fa";

  /*
   * Documentation overview
   */
  if (!doc) {
    return (
      <div dir={isFa ? "rtl" : "ltr"} className="mx-auto max-w-4xl pt-12">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.025] sm:p-10">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 size-72 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-400/10"
          />

          <div className="relative">
            <div className="mb-6 flex size-11 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-200">
              <Braces className="size-5" />
            </div>

            <p className="mb-3 text-sm font-medium text-blue-600 dark:text-blue-400">
              {isFa ? "مستندات" : "Documentation"}
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              {isFa
                ? "به مستندات CyrefJS خوش آمدید."
                : "Welcome to the CyrefJS documentation."}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
              {isFa
                ? "برای شروع، یکی از صفحات مستندات را از منوی کناری انتخاب کنید و با utilityهای CyrefJS آشنا شوید."
                : "Choose a page from the sidebar to explore CyrefJS utilities and learn how to use them in your projects."}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`/${locale}/docs/getting-started/introduction`}
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                {isFa ? "شروع کنید" : "Get started"}

                {isFa ? (
                  <ArrowLeft className="size-4" />
                ) : (
                  <ArrowRight className="size-4" />
                )}
              </Link>

              <Link
                href={`/${locale}/docs/getting-started/installation`}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:bg-white/[0.06]"
              >
                <Package className="size-4" />
                {isFa ? "نصب" : "Installation"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const title = doc.title[locale];
  const description = doc.description[locale];
  const category = getCategoryLabel(doc.category, locale);

  return (
    <div
      dir={isFa ? "rtl" : "ltr"}
      className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,1fr)_14rem]"
    >
      <article className="min-w-0 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          {/* Breadcrumb */}
          <Link
            href={`/${locale}/docs`}
            className="group mb-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-white"
          >
            {isFa ? (
              <>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                بازگشت به مستندات
              </>
            ) : (
              <>
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
                Back to documentation
              </>
            )}
          </Link>

          {/* Meta */}
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
              {category}
            </span>

            {doc.since && (
              <span className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-500">
                {isFa ? "از نسخه" : "Since"}{" "}
                <span className="mx-1 font-mono text-zinc-700 dark:text-zinc-300">
                  {doc.since}
                </span>
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            {description}
          </p>

          {/* Function signature */}
          {doc.parameters && doc.parameters.length > 0 && (
            <div className="mt-7 inline-flex max-w-full overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 font-mono text-sm text-zinc-700 dark:border-white/10 dark:bg-white/[0.035] dark:text-zinc-300">
              <span className="text-violet-600 dark:text-violet-400">
                {title}
              </span>
              <span className="text-zinc-400">(</span>

              {doc.parameters.map((parameter, index) => (
                <span key={parameter.name}>
                  <span className="text-zinc-800 dark:text-zinc-200">
                    {parameter.name}
                  </span>

                  {index < doc.parameters!.length - 1 && (
                    <span className="text-zinc-400">, </span>
                  )}
                </span>
              ))}

              <span className="text-zinc-400">)</span>

              {doc.returns && (
                <>
                  <span className="mx-2 text-zinc-400">:</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    {doc.returns.type}
                  </span>
                </>
              )}
            </div>
          )}
        </header>

        {/* Content sections */}
        {doc.sections && doc.sections.length > 0 && (
          <section className="mb-14 space-y-10">
            {doc.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                  {section.title[locale]}
                </h2>

                <p className="max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
                  {section.content[locale]}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Parameters */}
        {doc.parameters && doc.parameters.length > 0 && (
          <section className="mb-14">
            <SectionHeading>{isFa ? "پارامترها" : "Parameters"}</SectionHeading>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-white/[0.08] dark:bg-white/[0.02]">
              {doc.parameters.map((parameter, index) => (
                <div
                  key={parameter.name}
                  className={`p-5 sm:p-6 ${
                    index !== doc.parameters!.length - 1
                      ? "border-b border-zinc-200 dark:border-white/[0.08]"
                      : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="rounded-md bg-zinc-100 px-2 py-1 font-mono text-sm font-semibold text-zinc-900 dark:bg-white/[0.06] dark:text-zinc-100">
                      {parameter.name}
                    </code>

                    <code className="rounded-md bg-zinc-100 px-2 py-1 font-mono text-xs text-zinc-500 dark:bg-white/[0.04] dark:text-zinc-400">
                      {parameter.type}
                    </code>

                    {parameter.required && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                        <CircleCheck className="size-3.5" />
                        {isFa ? "الزامی" : "required"}
                      </span>
                    )}

                    {!parameter.required && (
                      <span className="text-xs text-zinc-400">
                        {isFa ? "اختیاری" : "optional"}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                    {parameter.description[locale]}
                  </p>

                  {parameter.defaultValue && (
                    <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                      <span>{isFa ? "مقدار پیش‌فرض:" : "Default:"}</span>

                      <code className="rounded-md bg-zinc-100 px-2 py-1 font-mono text-zinc-700 dark:bg-white/[0.05] dark:text-zinc-300">
                        {parameter.defaultValue}
                      </code>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Returns */}
        {doc.returns && (
          <section className="mb-14">
            <SectionHeading>
              {isFa ? "مقدار بازگشتی" : "Returns"}
            </SectionHeading>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/[0.08] dark:bg-white/[0.02] sm:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <ArrowRight className="size-4" />
                </span>

                <code className="rounded-lg bg-zinc-100 px-2.5 py-1.5 font-mono text-sm text-zinc-800 dark:bg-white/[0.05] dark:text-zinc-200">
                  {doc.returns.type}
                </code>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {doc.returns.description[locale]}
              </p>
            </div>
          </section>
        )}

        {/* Errors */}
        {doc.throws && doc.throws.length > 0 && (
          <section className="mb-14">
            <SectionHeading>{isFa ? "خطاها" : "Errors"}</SectionHeading>

            <div className="space-y-3">
              {doc.throws.map((error, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-2xl border border-red-200 bg-red-50/70 p-4 dark:border-red-500/15 dark:bg-red-500/[0.05]"
                >
                  <CircleAlert className="mt-0.5 size-4 shrink-0 text-red-500 dark:text-red-400" />

                  <p className="text-sm leading-7 text-red-700 dark:text-red-300">
                    {error[locale]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Examples */}
        {doc.examples && doc.examples.length > 0 && (
          <section className="mb-14">
            <SectionHeading>{isFa ? "مثال‌ها" : "Examples"}</SectionHeading>

            <div className="space-y-10">
              {doc.examples.map((example, index) => (
                <div key={index}>
                  <div className="mb-4 flex items-start gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100 font-mono text-xs font-semibold text-zinc-500 dark:bg-white/[0.06] dark:text-zinc-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-zinc-950 dark:text-white">
                        {example.title[locale]}
                      </h3>

                      {example.description && (
                        <p className="mt-1.5 text-sm leading-6 text-zinc-500 dark:text-zinc-500">
                          {example.description[locale]}
                        </p>
                      )}
                    </div>
                  </div>

                  <CodeBlock code={example.code} language={example.language} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom navigation */}
        <div className="border-t border-zinc-200 pt-8 dark:border-white/[0.08]">
          <DocsPagination locale={locale} currentDoc={doc} docs={docs} />
        </div>

        {/* Footer hint */}
        <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400 dark:text-zinc-600">
          <span>{isFa ? "ساخته شده با" : "Built with"}</span>

          <span className="font-medium text-zinc-500 dark:text-zinc-500">
            @cyref/js
          </span>

          <span>·</span>

          <span>{isFa ? "مستندات رسمی" : "Official documentation"}</span>
        </div>
      </article>

      {/* Table of contents */}
      <DocsTableOfContents locale={locale} sections={doc.sections ?? []} />
    </div>
  );
}
