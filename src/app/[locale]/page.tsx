import Footer from "@/components/layout/Footer";
import Main from "@/components/main/Main";
import cyrefPackage from "@cyref/js/package.json";
import { isLocale } from "@/i18n/config";
import type { Locale } from "@/types/i18n";

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return null;
  }

  const locale: Locale = localeParam;

  return (
    <>
      <Main />
      <Footer version={cyrefPackage.version} locale={locale} />
    </>
  );
}
