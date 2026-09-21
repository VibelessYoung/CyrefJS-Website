"use client";

import { Languages } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";

import type { Locale } from "@/types/i18n";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  fa: "FA",
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const currentLocale = params.locale as Locale;
  const nextLocale: Locale = currentLocale === "en" ? "fa" : "en";

  const switchLanguage = () => {
    const segments = pathname.split("/");

    segments[1] = nextLocale;

    router.push(segments.join("/") || `/${nextLocale}`);
  };

  return (
    <button
      type="button"
      onClick={switchLanguage}
      aria-label={`Switch language to ${nextLocale}`}
      className="
      cursor-pointer
        flex
        h-10
        items-center
        gap-2
        rounded-full
        px-3
        text-sm
        font-medium
        text-black/60
        transition-all
        duration-300
        hover:bg-black/5
        hover:text-black
        dark:text-white/60
        dark:hover:bg-white/10
        dark:hover:text-white
      "
    >
      <Languages size={17} strokeWidth={1.8} />

      <span>{localeLabels[nextLocale]}</span>
    </button>
  );
}
