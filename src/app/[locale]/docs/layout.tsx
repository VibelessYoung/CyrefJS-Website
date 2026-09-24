import { notFound } from "next/navigation";
import cyrefPackage from "@cyref/js/package.json";
import DocsLayout from "@/components/docs/DocsLayout";
import { isLocale } from "@/i18n/config";

interface DocsLayoutPageProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function DocsRootLayout({
  children,
  params,
}: DocsLayoutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <DocsLayout version={cyrefPackage.version} locale={locale}>
      {children}
    </DocsLayout>
  );
}
