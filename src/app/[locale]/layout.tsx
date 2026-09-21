import type { Metadata } from "next";
import { notFound } from "next/navigation";

import "../globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { isLocale, locales } from "@/i18n/config";
import { localeDirections } from "@/types/i18n";

export const metadata: Metadata = {
  title: {
    default: "CyrefJS",
    template: "%s | CyrefJS",
  },
  description:
    "A modern, lightweight JavaScript and TypeScript utility library.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={localeDirections[locale]} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
