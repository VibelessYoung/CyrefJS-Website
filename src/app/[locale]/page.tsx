import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/types/i18n";

interface HomePageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  const t = getTranslations(locale);

  return (
    <main>
      <p>{t.hero.eyebrow}</p>

      <h1>
        {t.hero.title} <span>{t.hero.titleAccent}</span>
      </h1>

      <p>{t.hero.description}</p>

      <div>
        <button>{t.hero.getStarted}</button>

        <button>{t.hero.viewGithub}</button>
      </div>
    </main>
  );
}
