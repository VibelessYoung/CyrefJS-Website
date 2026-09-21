import { notFound } from "next/navigation";

import Installation from "@/components/docs/Installation";
import { isLocale } from "@/i18n/config";

interface InstallationPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function InstallationPage({
  params,
}: InstallationPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <Installation locale={locale} />;
}
