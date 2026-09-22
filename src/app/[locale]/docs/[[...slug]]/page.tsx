import { notFound } from "next/navigation";

import DocsPage from "@/components/docs/DocsPage";
import { docs, getDocBySlug } from "@/data/docs/index";
import { isLocale } from "@/i18n/config";
import type { Locale } from "@/types/i18n";

interface DocsRouteProps {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
}

export function generateStaticParams() {
  return docs.flatMap((doc) =>
    ["en", "fa"].map((locale) => ({
      locale,
      slug: doc.slug.split("/"),
    })),
  );
}

export default async function DocsRoute({ params }: DocsRouteProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;

  const currentSlug = slug?.join("/");

  /*
   * /en/docs
   * /fa/docs
   *
   * Root documentation page.
   */
  if (!currentSlug) {
    return <DocsPage locale={locale} doc={undefined} />;
  }

  const doc = getDocBySlug(currentSlug);

  if (!doc) {
    notFound();
  }

  return <DocsPage locale={locale} doc={doc} />;
}
