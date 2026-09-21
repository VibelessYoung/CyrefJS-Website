import { notFound } from "next/navigation";

import DocsDashboard from "@/components/docs/DocsDashboard";
import { isLocale } from "@/i18n/config";

interface DocsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <DocsDashboard locale={locale} />;
}
