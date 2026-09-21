"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import LanguageSwitcher from "@/components/navigation/LanguageSwitcher";
import ThemeButton from "@/components/navigation/ThemeButton";
import { translations } from "@/i18n";

import type { Locale } from "@/types/i18n";

const navigation = [
  {
    key: "home",
    href: "#home",
  },
  {
    key: "docs",
    href: "#documentation",
  },
  {
    key: "utilities",
    href: "#utilities",
  },
  {
    key: "about",
    href: "#about",
  },
] as const;

export default function Header() {
  const params = useParams();

  const locale = params.locale as Locale;

  const t = translations[locale];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-500
        ease-out
        ${
          isScrolled
            ? "border-b border-black/5 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-black/60"
            : "border-b border-transparent bg-transparent"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-20
          w-full
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* Logo */}

        <Link
          href={`/${locale}`}
          className="
            shrink-0
            text-xl
            font-bold
            tracking-tight
            text-black
            dark:text-white
          "
        >
          <span>Cyref</span>
          <span className="text-black/40 dark:text-white/40">JS</span>
        </Link>

        {/* Navigation */}

        <nav
          aria-label="Main navigation"
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-1
            md:flex
          "
        >
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className="
                rounded-full
                px-4
                py-2
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
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        {/* Actions */}

        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          <ThemeButton />

          <Link
            href="https://github.com/VibelessYoung/CyrefJS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.header.github}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              bg-black/5
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-black/10
              dark:border-white/10
              dark:bg-white/5
              dark:text-white
              dark:hover:bg-white/10
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-[18px] w-[18px]"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.68.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
