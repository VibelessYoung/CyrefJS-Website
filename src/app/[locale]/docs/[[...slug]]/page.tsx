import { notFound } from "next/navigation";

import DocsPage from "@/components/docs/DocsPage";
import { docsSections, getDocsItem } from "@/data/docs";
import { isLocale } from "@/i18n/config";
import type { Locale } from "@/types/i18n";

interface DocsRouteProps {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
}

export function generateStaticParams() {
  return ["en", "fa"].flatMap((locale) =>
    docsSections
      .flatMap((section) => section.items)
      .map((item) => ({
        locale,
        slug: item.slug ? item.slug.split("/") : [],
      })),
  );
}

export default async function DocsRoute({ params }: DocsRouteProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;

  const currentSlug = slug?.join("/") ?? "";

  const item = getDocsItem(currentSlug);

  if (!item) {
    notFound();
  }

  return <DocsPage locale={locale} item={item} />;
}
