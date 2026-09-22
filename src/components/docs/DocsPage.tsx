import Link from "next/link";
import CodeBlock from "./CodeBlock";
import type { DocPage } from "@/data/docs/types";
import type { Locale } from "@/types/i18n";
import { docs } from "@/data/docs/index";
import DocsPagination from "./DocsPagination";
import DocsTableOfContents from "./DocsTableOfContents";
interface DocsPageProps {
  locale: Locale;
  doc?: DocPage;
}

export default function DocsPage({ locale, doc }: DocsPageProps) {
  if (!doc) {
    return (
      <div className="space-y-6">
        <div>
          <p className="mb-3 text-sm font-medium text-blue-600 dark:text-blue-400">
            {locale === "fa" ? "مستندات" : "Documentation"}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {locale === "fa"
              ? "به مستندات CyrefJS خوش آمدید."
              : "Welcome to the CyrefJS documentation."}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {locale === "fa"
              ? "برای شروع، یکی از صفحات مستندات را از منوی کناری انتخاب کنید."
              : "Choose a documentation page from the sidebar to get started."}
          </p>
        </div>
      </div>
    );
  }

  const title = doc.title[locale];
  const description = doc.description[locale];

  return (
    <div className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,1fr)_14rem]">
      <article className="max-w-4xl">
        <div className="mb-10">
          <Link
            href={`/${locale}/docs`}
            className="mb-6 inline-flex text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            ← {locale === "fa" ? "بازگشت به مستندات" : "Back to documentation"}
          </Link>
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
              {doc.category}
            </span>

            {doc.since && (
              <span className="text-xs text-zinc-500">
                {locale === "fa" ? "از نسخه" : "Since"} {doc.since}
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
          {doc.sections && doc.sections.length > 0 && (
            <section className="mt-10 space-y-10">
              {doc.sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
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
        </div>

        {doc.parameters && doc.parameters.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-zinc-950 dark:text-white">
              {locale === "fa" ? "پارامترها" : "Parameters"}
            </h2>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10">
              {doc.parameters.map((parameter) => (
                <div
                  key={parameter.name}
                  className="border-b border-zinc-200 p-5 last:border-b-0 dark:border-white/10"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="text-sm font-semibold text-zinc-950 dark:text-white">
                      {parameter.name}
                    </code>

                    <code className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-white/5 dark:text-zinc-400">
                      {parameter.type}
                    </code>

                    {parameter.required && (
                      <span className="text-xs text-blue-600 dark:text-blue-400">
                        {locale === "fa" ? "الزامی" : "required"}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {parameter.description[locale]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {doc.returns && (
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-zinc-950 dark:text-white">
              {locale === "fa" ? "مقدار بازگشتی" : "Returns"}
            </h2>

            <div className="rounded-2xl border border-zinc-200 p-5 dark:border-white/10">
              <code className="rounded-md bg-zinc-100 px-2 py-1 text-sm text-zinc-700 dark:bg-white/5 dark:text-zinc-300">
                {doc.returns.type}
              </code>

              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {doc.returns.description[locale]}
              </p>
            </div>
          </section>
        )}

        {doc.throws && doc.throws.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-zinc-950 dark:text-white">
              {locale === "fa" ? "خطاها" : "Errors"}
            </h2>

            <div className="space-y-3">
              {doc.throws.map((error, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700 dark:border-red-500/20 dark:bg-red-500/5 dark:text-red-300"
                >
                  {error[locale]}
                </div>
              ))}
            </div>
          </section>
        )}

        {doc.examples && doc.examples.length > 0 && (
          <section>
            <h2 className="mb-6 text-xl font-semibold text-zinc-950 dark:text-white">
              {locale === "fa" ? "مثال‌ها" : "Examples"}
            </h2>

            <div className="space-y-8">
              {doc.examples.map((example, index) => (
                <div key={index}>
                  <h3 className="mb-2 text-base font-semibold text-zinc-950 dark:text-white">
                    {example.title[locale]}
                  </h3>

                  {example.description && (
                    <p className="mb-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {example.description[locale]}
                    </p>
                  )}

                  <CodeBlock code={example.code} language={example.language} />
                </div>
              ))}
            </div>
          </section>
        )}
        <DocsPagination locale={locale} currentDoc={doc} docs={docs} />
      </article>
      <DocsTableOfContents locale={locale} sections={doc.sections ?? []} />
    </div>
  );
}
