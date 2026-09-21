import { defaultLocale, locales } from "@/types/i18n";

import type { Locale } from "@/types/i18n";

export { defaultLocale, locales };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
