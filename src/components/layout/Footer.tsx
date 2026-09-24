"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import type { Locale } from "@/types/i18n";
import { getTranslations } from "@/lib/i18n";
const GITHUB_URL = "https://github.com/VibelessYoung/CyrefJS";
const navigation = [
  {
    key: "install",
    href: "/install",
  },
  {
    key: "documentation",
    href: "/docs",
  },
  {
    key: "components",
    href: "/components",
  },
] as const;

interface FooterProps {
  locale: Locale;
  version: string;
}

export default function Footer({ locale, version }) {
  const { theme } = useTheme();
  const t = getTranslations(locale);

  const isPersian = locale === "fa";

  return (
    <footer
      className="
        relative overflow-hidden
        border-t border-black/8
        bg-white text-zinc-900
        dark:border-white/8
        dark:bg-[#050505]
        dark:text-white
      "
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 -top-32
          h-80 w-80
          rounded-full
          bg-blue-500/10
          blur-3xl
          dark:bg-blue-500/8
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-40 right-0
          h-96 w-96
          rounded-full
          bg-violet-500/10
          blur-3xl
          dark:bg-violet-500/8
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-14 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href={`/${locale}#home`}
              className="group inline-flex items-center gap-3"
            >
              <span
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl
                  border border-black/10
                  bg-black text-white
                  shadow-sm
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  dark:border-white/10
                  dark:bg-white
                  dark:text-black
                "
              >
                <span className="text-sm font-bold tracking-tight">C</span>
              </span>

              <span className="text-lg font-semibold tracking-tight">
                CyrefJS
              </span>
            </Link>

            <p
              className="
                mt-6 max-w-sm
                text-sm leading-7
                text-zinc-500
                dark:text-zinc-400
              "
            >
              {t.footer.description}
            </p>

            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7 inline-flex items-center gap-2.5
                rounded-full
                border border-black/10
                bg-black/[0.03]
                px-4 py-2.5
                text-sm font-medium
                text-zinc-800
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-black/[0.06]
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:text-zinc-200
                dark:hover:bg-white/[0.08]
              "
            >
              {theme === "dark" ? (
                <Image
                  src="/Icons/GitHub-Dark.svg"
                  alt=""
                  width={17}
                  height={17}
                  aria-hidden="true"
                  className="h-[17px] w-[17px]"
                />
              ) : (
                <Image
                  src="/Icons/GitHub.svg"
                  alt=""
                  width={17}
                  height={17}
                  aria-hidden="true"
                  className="h-[17px] w-[17px]"
                />
              )}

              <span>{t.footer.github}</span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="
                text-sm font-semibold
                text-zinc-900
                dark:text-white
              "
            >
              {t.footer.navigation}
            </h3>

            <nav className="mt-6 flex flex-col gap-3.5">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className="
                    w-fit text-sm
                    text-zinc-500
                    transition-colors duration-200
                    hover:text-zinc-900
                    dark:text-zinc-400
                    dark:hover:text-white
                  "
                >
                  {t.footer.links[item.key]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Package */}
          <div>
            <h3
              className="
                text-sm font-semibold
                text-zinc-900
                dark:text-white
              "
            >
              {t.footer.package}
            </h3>

            <div className="mt-6 space-y-4">
              <p
                className="
                  text-xs leading-6
                  text-zinc-400
                  dark:text-zinc-500
                "
              >
                v{version}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex flex-col gap-4
            border-t border-black/8
            py-7
            text-xs
            text-zinc-400
            sm:flex-row
            sm:items-center
            sm:justify-between
            dark:border-white/8
            dark:text-zinc-500
          "
        >
          <p>{t.footer.copyright}</p>

          <Link
            href={`/${locale}#home`}
            className="
              inline-flex items-center gap-1.5
              transition-colors duration-200
              hover:text-zinc-900
              dark:hover:text-white
            "
          >
            {isPersian ? "بازگشت به بالا" : "Back to top"}

            <ArrowUpRight size={13} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
