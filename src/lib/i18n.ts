import { translations } from "@/i18n";
import type { Locale } from "@/types/i18n";

export function getTranslations(locale: Locale) {
  return translations[locale];
}
